import type { CompostInputs, UnitSystem } from "./logic";

const STORAGE_KEY = "jjlmoya-compost-bin-volume-ratio";

export function loadCompostState(): Partial<CompostInputs> | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Partial<CompostInputs>) : null;
  } catch {
    return null;
  }
}

export function saveCompostState(state: CompostInputs): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

export function readStoredUnit(): UnitSystem | null {
  const state = loadCompostState();
  return state?.unitSystem === "metric" || state?.unitSystem === "imperial"
    ? state.unitSystem
    : null;
}
