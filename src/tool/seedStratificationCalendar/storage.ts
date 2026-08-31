import type { CalendarInput, TemperatureUnit } from './logic';

const STORAGE_KEY = 'jjlmoya-seed-stratification-calendar';

export interface CalendarState {
  input: CalendarInput;
  unit: TemperatureUnit;
}

export function loadCalendarState(fallback: CalendarInput): CalendarState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { input: fallback, unit: 'metric' };
    const stored = JSON.parse(raw) as Partial<CalendarState> & Partial<CalendarInput> & { sowingDate?: string };
    const legacyInput = stored.sowingDate ? { ...fallback, mode: 'sowing-date' as const, anchorDate: stored.sowingDate } : fallback;
    const input = stored.input ? { ...fallback, ...stored.input } : { ...legacyInput, ...stored };
    return { input, unit: stored.unit === 'imperial' ? 'imperial' : 'metric' };
  } catch {
    return { input: fallback, unit: 'metric' };
  }
}

export function saveCalendarState(input: CalendarInput, unit: TemperatureUnit): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ input, unit }));
  } catch {}
}
