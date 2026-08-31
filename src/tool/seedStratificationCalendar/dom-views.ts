import type { SeedStratificationCalendarUI } from './ui';
import { celsiusToFahrenheit, type CalendarPhase, type CalendarPlan, type SeedPhaseKind, type TemperatureUnit } from './logic';
import { evaluatePlan } from './evaluator';

interface TimelineViewOptions {
  container: HTMLElement;
  plan: CalendarPlan;
  ui: SeedStratificationCalendarUI;
  locale: string;
  today: string;
  unit: TemperatureUnit;
}

const phaseLabels = (ui: SeedStratificationCalendarUI): Record<SeedPhaseKind, string> => ({
  soak: ui.labelSoak,
  warm: ui.labelWarm,
  cold: ui.labelCold,
  sow: ui.labelSow,
});

function makeElement<K extends keyof HTMLElementTagNameMap>(tag: K, className: string, text?: string): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);
  element.className = className;
  if (text) element.textContent = text;
  return element;
}

function statusLabel(status: string, ui: SeedStratificationCalendarUI): string {
  if (status === 'complete') return ui.labelComplete;
  if (status === 'sowing') return ui.labelReady;
  if (status === 'active') return ui.labelActive;
  return ui.labelUpcoming;
}

function makePhaseIcon(kind: SeedPhaseKind): SVGSVGElement {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const paths: Record<SeedPhaseKind, string> = {
    soak: 'M12 3C9 7 6 10 6 14a6 6 0 0 0 12 0c0-4-3-7-6-11Z',
    warm: 'M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M17.7 6.3l-2.1 2.1M8.4 15.6l-2.1 2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
    cold: 'M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4',
    sow: 'M12 21V11M12 15c-4 0-7-3-7-7 4 0 7 3 7 7ZM12 12c0-4 3-7 7-7 0 4-3 7-7 7Z',
  };
  path.setAttribute('d', paths[kind]);
  path.setAttribute('fill', kind === 'soak' ? 'currentColor' : 'none');
  path.setAttribute('stroke', 'currentColor');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  path.setAttribute('stroke-width', '1.7');
  svg.append(path);
  return svg;
}

function formatDate(value: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
}

function temperatureText(phase: CalendarPhase, ui: SeedStratificationCalendarUI, unit: TemperatureUnit): string {
  if (phase.minTempC === undefined || phase.maxTempC === undefined) return ui.labelSowingDay;
  const minimumC = Math.round(phase.minTempC * 10) / 10;
  const maximumC = Math.round(phase.maxTempC * 10) / 10;
  const celsius = `${minimumC} to ${maximumC} °C`;
  const fahrenheit = `${Math.round(celsiusToFahrenheit(minimumC))} to ${Math.round(celsiusToFahrenheit(maximumC))} °F`;
  return `${ui.labelTemperature}: ${unit === 'metric' ? `${celsius} (${fahrenheit})` : `${fahrenheit} (${celsius})`}`;
}

function renderHeader(container: HTMLElement, plan: CalendarPlan, ui: SeedStratificationCalendarUI, today: string): void {
  const labels = phaseLabels(ui);
  const evaluation = evaluatePlan(plan, today, labels);
  const header = makeElement('div', 'n-calendar-header');
  const status = makeElement('span', `n-status n-status-${evaluation.status}`, statusLabel(evaluation.status, ui));
  const action = makeElement('p', 'n-next-action');
  let dayText = ui.labelUpcoming;
  if (evaluation.status === 'complete') dayText = ui.labelComplete;
  if (evaluation.status === 'active' || evaluation.status === 'sowing') dayText = `${ui.labelTodayStatus}: ${evaluation.dayNumber} ${ui.labelDayOf} ${evaluation.durationDays}`;
  action.append(makeElement('strong', '', ui.labelNextAction), document.createTextNode(` ${evaluation.phaseLabel}, ${dayText}`));
  header.append(status, action);
  container.append(header);
}

function renderSummary(container: HTMLElement, plan: CalendarPlan, ui: SeedStratificationCalendarUI, locale: string): void {
  const summary = makeElement('div', 'n-calendar-summary');
  const start = makeElement('div', 'n-summary-major');
  start.append(makeElement('strong', '', formatDate(plan.startDate, locale)), makeElement('span', '', ui.labelCalendarStarts));
  const prep = makeElement('div', 'n-summary-stat');
  prep.append(makeElement('strong', '', `${plan.totalPreparationDays}`), makeElement('span', '', `${ui.labelDuration} ${ui.labelDays}`));
  const sowing = makeElement('div', 'n-summary-stat');
  sowing.append(makeElement('strong', '', formatDate(plan.sowingDate, locale)), makeElement('span', '', ui.labelSowingDay));
  summary.append(start, prep, sowing);
  container.append(summary);
}

interface PhaseViewOptions {
  container: HTMLElement;
  phase: CalendarPhase;
  index: number;
  ui: SeedStratificationCalendarUI;
  locale: string;
  unit: TemperatureUnit;
  currentPhaseIndex: number | null;
}

function renderGanttSegment(options: PhaseViewOptions): void {
  const { container, phase, index, ui, locale, unit, currentPhaseIndex } = options;
  const labels = phaseLabels(ui);
  const segment = makeElement('div', `n-gantt-segment n-gantt-${phase.kind}${index === currentPhaseIndex ? ' is-active' : ''}`);
  segment.style.flex = `${phase.durationDays} 1 0`;
  segment.setAttribute('title', `${labels[phase.kind]}, ${formatDate(phase.startDate, locale)} to ${formatDate(phase.endDate, locale)}`);
  segment.append(makePhaseIcon(phase.kind));
  const segmentText = makeElement('div', 'n-gantt-text');
  segmentText.append(makeElement('strong', '', labels[phase.kind]), makeElement('span', '', `${phase.durationDays} ${ui.labelDays}`));
  segment.append(segmentText);
  segment.append(makeElement('p', 'n-phase-detail', `${temperatureText(phase, ui, unit)} · ${ui.labelTechnique}: ${phase.technique}`));
  container.append(segment);
}

export function renderTimeline(options: TimelineViewOptions): void {
  options.container.replaceChildren();
  renderHeader(options.container, options.plan, options.ui, options.today);
  renderSummary(options.container, options.plan, options.ui, options.locale);
  const heading = makeElement('h2', 'n-gantt-heading', options.ui.labelGantt);
  options.container.append(heading);
  const gantt = makeElement('div', 'n-gantt');
  const evaluation = evaluatePlan(options.plan, options.today, phaseLabels(options.ui));
  const currentPhaseIndex = evaluation.status === 'active' || evaluation.status === 'sowing' ? evaluation.phaseIndex : null;
  options.plan.phases.forEach((phase, index) => renderGanttSegment({ container: gantt, phase, index, ui: options.ui, locale: options.locale, unit: options.unit, currentPhaseIndex }));
  options.container.append(gantt);
}
