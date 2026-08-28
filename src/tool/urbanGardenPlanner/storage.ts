import type { GardenPlanInput } from './logic';

const STORAGE_KEY = 'jjlmoya-urban-garden-planner';

export function loadGardenPlan(): Partial<GardenPlanInput> | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    return parsed as Partial<GardenPlanInput>;
  } catch {
    return null;
  }
}

export function saveGardenPlan(input: GardenPlanInput): void {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {}
}
