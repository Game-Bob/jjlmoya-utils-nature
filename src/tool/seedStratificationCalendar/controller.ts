import { applyProfile, celsiusToFahrenheit, createCalendarPlan, DEFAULT_INPUT, fahrenheitToCelsius, SEED_PROFILES, type CalendarInput, type CalendarMode, type TemperatureUnit } from './logic';
import { renderTimeline } from './dom-views';
import { loadCalendarState, saveCalendarState } from './storage';
import { copyShareLink, downloadCalendar, todayISO, updatePrintLabel } from './calendar-actions';
import { setupSelect } from './profile-select';
import type { SeedStratificationCalendarUI } from './ui';
interface ControllerOptions {
  root: HTMLElement;
  ui: SeedStratificationCalendarUI;
  locale: string;
}

function query<T extends Element>(root: HTMLElement, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Missing calendar element ${selector}`);
  return element;
}

function readNumber(root: HTMLElement, role: string): number {
  return Number(query<HTMLInputElement>(root, `[data-role="${role}"]`).value);
}

function getUnit(root: HTMLElement): TemperatureUnit {
  return root.dataset.unit === 'imperial' ? 'imperial' : 'metric';
}

function getMode(root: HTMLElement): CalendarMode {
  return root.dataset.mode === 'ready-date' ? 'ready-date' : 'sowing-date';
}

function readTemperature(root: HTMLElement, role: string): number {
  const value = readNumber(root, role);
  return getUnit(root) === 'metric' ? value : fahrenheitToCelsius(value);
}

function readInput(root: HTMLElement): CalendarInput {
  return {
    mode: getMode(root),
    anchorDate: query<HTMLInputElement>(root, '[data-role="anchor-date"]').value,
    profileId: query<HTMLElement>(root, '[data-role="profile-select"]').dataset.value ?? DEFAULT_INPUT.profileId,
    soakDays: readNumber(root, 'soak-days'),
    warmDays: readNumber(root, 'warm-days'),
    coldDays: readNumber(root, 'cold-days'),
    coldMinC: readTemperature(root, 'cold-min'),
    coldMaxC: readTemperature(root, 'cold-max'),
  };
}

function updateProfileFields(root: HTMLElement, input: CalendarInput): void {
  const values: Record<string, number> = {
    'soak-days': input.soakDays,
    'warm-days': input.warmDays,
    'cold-days': input.coldDays,
    'cold-min': input.coldMinC,
    'cold-max': input.coldMaxC,
  };
  Object.entries(values).forEach(([role, value]) => { query<HTMLInputElement>(root, `[data-role="${role}"]`).value = String(value); });
  setTemperatureInput(root, 'cold-min', input.coldMinC);
  setTemperatureInput(root, 'cold-max', input.coldMaxC);
}

function setTemperatureInput(root: HTMLElement, role: string, celsius: number): void {
  const input = query<HTMLInputElement>(root, `[data-role="${role}"]`);
  input.value = String(getUnit(root) === 'metric' ? celsius : Math.round(celsiusToFahrenheit(celsius)));
}

function readUrlNumber(params: URLSearchParams, key: string, fallback: number): number {
  const value = Number(params.get(key));
  return Number.isFinite(value) && value >= 0 ? value : fallback;
}

function readUrlTemperature(params: URLSearchParams, key: string, fallback: number): number {
  const value = Number(params.get(key));
  return Number.isFinite(value) ? value : fallback;
}

function readUrlProfile(params: URLSearchParams, fallback: string): string {
  const value = params.get('seed');
  return value && SEED_PROFILES.some((profile) => profile.id === value) ? value : fallback;
}

function readUrlMode(params: URLSearchParams, fallback: CalendarMode): CalendarMode {
  return params.get('mode') === 'ready-date' ? 'ready-date' : fallback;
}

function readUrlAnchorDate(params: URLSearchParams, mode: CalendarMode, fallback: string): string {
  const value = params.get(mode === 'ready-date' ? 'ready' : 'sow');
  return value ?? params.get('sow') ?? fallback;
}

function readUrlInput(fallback: CalendarInput): CalendarInput {
  if (typeof window === 'undefined') return fallback;
  const params = new URLSearchParams(window.location.search);
  const mode = readUrlMode(params, fallback.mode);
  return {
    ...fallback,
    mode,
    anchorDate: readUrlAnchorDate(params, mode, fallback.anchorDate),
    profileId: readUrlProfile(params, fallback.profileId),
    soakDays: readUrlNumber(params, 'soak', fallback.soakDays),
    warmDays: readUrlNumber(params, 'warm', fallback.warmDays),
    coldDays: readUrlNumber(params, 'cold', fallback.coldDays),
    coldMinC: readUrlTemperature(params, 'min', fallback.coldMinC),
    coldMaxC: readUrlTemperature(params, 'max', fallback.coldMaxC),
  };
}

function updateUrl(input: CalendarInput): void {
  if (typeof window === 'undefined') return;
  const url = new URL(window.location.href);
  url.searchParams.set('seed', input.profileId);
  url.searchParams.set('mode', input.mode);
  url.searchParams.set(input.mode === 'ready-date' ? 'ready' : 'sow', input.anchorDate);
  url.searchParams.delete(input.mode === 'ready-date' ? 'sow' : 'ready');
  url.searchParams.set('soak', String(input.soakDays));
  url.searchParams.set('warm', String(input.warmDays));
  url.searchParams.set('cold', String(input.coldDays));
  url.searchParams.set('min', String(input.coldMinC));
  url.searchParams.set('max', String(input.coldMaxC));
  window.history.replaceState(null, '', url);
}

function updateModeButtons(root: HTMLElement, ui: SeedStratificationCalendarUI): void {
  const mode = getMode(root);
  root.querySelectorAll<HTMLButtonElement>('[data-mode-option]').forEach((button) => {
    const isActive = button.dataset.modeOption === mode;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  query<HTMLElement>(root, '[data-role="date-label"]').textContent = mode === 'ready-date' ? ui.labelReadyDate : ui.labelSowingDate;
}

function setMode(root: HTMLElement, ui: SeedStratificationCalendarUI, mode: CalendarMode): void {
  root.dataset.mode = mode;
  updateModeButtons(root, ui);
}

function setupMode(root: HTMLElement, ui: SeedStratificationCalendarUI, initialMode: CalendarMode): void {
  setMode(root, ui, initialMode);
  root.querySelectorAll<HTMLButtonElement>('[data-mode-option]').forEach((button) => button.addEventListener('click', () => {
    root.dataset.mode = button.dataset.modeOption === 'ready-date' ? 'ready-date' : 'sowing-date';
    updateModeButtons(root, ui);
    render(root, ui, root.dataset.locale ?? 'en');
  }));
}

function render(root: HTMLElement, ui: SeedStratificationCalendarUI, locale: string): void {
  try {
    const input = readInput(root);
    const today = todayISO();
    const plan = createCalendarPlan({ ...input, referenceDate: today });
    renderTimeline({ container: query(root, '[data-role="results"]'), plan, ui, locale, today, unit: getUnit(root) });
    updatePrintLabel(root, plan, ui, locale);
    updateUrl(input);
    saveCalendarState(input, getUnit(root));
    query<HTMLElement>(root, '[data-role="error"]').hidden = true;
  } catch {
    const error = query<HTMLElement>(root, '[data-role="error"]');
    error.textContent = ui.warningTemperature;
    error.hidden = false;
  }
}

function setInputValues(root: HTMLElement, input: CalendarInput): void {
  query<HTMLInputElement>(root, '[data-role="anchor-date"]').value = input.anchorDate;
  updateProfileFields(root, input);
}

function updateRangeLabels(root: HTMLElement): void {
  const minimum = readNumber(root, 'cold-min');
  const maximum = readNumber(root, 'cold-max');
  const minimumC = getUnit(root) === 'metric' ? minimum : fahrenheitToCelsius(minimum);
  const maximumC = getUnit(root) === 'metric' ? maximum : fahrenheitToCelsius(maximum);
  query<HTMLOutputElement>(root, '[data-role="cold-min-value"]').textContent = `${Math.round(minimumC * 10) / 10} °C / ${Math.round(celsiusToFahrenheit(minimumC))} °F`;
  query<HTMLOutputElement>(root, '[data-role="cold-max-value"]').textContent = `${Math.round(maximumC * 10) / 10} °C / ${Math.round(celsiusToFahrenheit(maximumC))} °F`;
}

function updateUnitButtons(root: HTMLElement): void {
  const unit = getUnit(root);
  root.querySelectorAll<HTMLButtonElement>('[data-unit-option]').forEach((button) => {
    const isActive = button.dataset.unitOption === unit;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function setTemperatureBounds(root: HTMLElement, unit: TemperatureUnit): void {
  const min = query<HTMLInputElement>(root, '[data-role="cold-min"]');
  const max = query<HTMLInputElement>(root, '[data-role="cold-max"]');
  const bounds = unit === 'metric' ? { min: '-5', max: '15' } : { min: '23', max: '59' };
  min.min = bounds.min; min.max = bounds.max; max.min = bounds.min; max.max = bounds.max;
}

function switchUnit(root: HTMLElement, ui: SeedStratificationCalendarUI, unit: TemperatureUnit): void {
  const current = readInput(root);
  root.dataset.unit = unit;
  setTemperatureBounds(root, unit);
  setTemperatureInput(root, 'cold-min', current.coldMinC);
  setTemperatureInput(root, 'cold-max', current.coldMaxC);
  updateUnitButtons(root);
  updateRangeLabels(root);
  render(root, ui, root.dataset.locale ?? 'en');
}

export function initializeSeedStratificationCalendar(options: ControllerOptions): void {
  const { root, ui, locale } = options;
  root.dataset.locale = locale;
  root.dataset.unit = 'metric';
  const stored = loadCalendarState(DEFAULT_INPUT);
  const initialInput = readUrlInput(stored.input);
  root.dataset.unit = stored.unit;
  setTemperatureBounds(root, stored.unit);
  setInputValues(root, initialInput);
  setupMode(root, ui, initialInput.mode);
  const onProfileSelect = (id: string): void => { updateProfileFields(root, { ...applyProfile(id, query<HTMLInputElement>(root, '[data-role="anchor-date"]').value), mode: getMode(root) }); render(root, ui, root.dataset.locale ?? 'en'); };
  const profileSelect = setupSelect(root, ui, initialInput.profileId, onProfileSelect);
  root.querySelectorAll<HTMLButtonElement>('[data-unit-option]').forEach((button) => button.addEventListener('click', () => switchUnit(root, ui, button.dataset.unitOption as TemperatureUnit)));
  updateUnitButtons(root);
  root.querySelectorAll<HTMLInputElement>('input').forEach((input) => input.addEventListener('input', () => { updateRangeLabels(root); render(root, ui, locale); }));
  query<HTMLButtonElement>(root, '[data-role="reset"]').addEventListener('click', () => { setInputValues(root, DEFAULT_INPUT); setMode(root, ui, DEFAULT_INPUT.mode); profileSelect.choose(DEFAULT_INPUT.profileId); render(root, ui, locale); });
  query<HTMLButtonElement>(root, '[data-role="generate"]').addEventListener('click', () => render(root, ui, locale));
  query<HTMLButtonElement>(root, '[data-role="calendar"]').addEventListener('click', () => downloadCalendar(createCalendarPlan({ ...readInput(root), referenceDate: todayISO() }), ui));
  query<HTMLButtonElement>(root, '[data-role="share"]').addEventListener('click', () => { updateUrl(readInput(root)); void copyShareLink(root, window.location.href, ui); });
  query<HTMLButtonElement>(root, '[data-role="print"]').addEventListener('click', () => window.print());
  updateRangeLabels(root);
  render(root, ui, locale);
}
