export type UnitSystem = 'metric' | 'imperial';

const STORAGE_KEY = 'jjlmoya:nature:wildlife-camera-trap-effort-planner:unit-system';

export function loadUnitSystem(): UnitSystem {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'imperial' ? 'imperial' : 'metric';
  } catch {
    return 'metric';
  }
}

export function saveUnitSystem(unitSystem: UnitSystem): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, unitSystem);
  } catch {}
}
