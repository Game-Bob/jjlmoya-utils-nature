import {
  applyPreset,
  calculateCompost,
  convertInputs,
  type BinShape,
  type CompostInputs,
  type MoistureLevel,
  type UnitSystem,
} from "./logic";
import { renderCompost, syncInputLabels } from "./dom-views";
import { loadCompostState, saveCompostState } from "./storage";
import type { CompostBinVolumeRatioCalculatorUI } from "./ui";

const defaults: CompostInputs = {
  unitSystem: "metric",
  shape: "rectangular",
  width: 80,
  depth: 60,
  diameter: 60,
  height: 80,
  browns: 36,
  greens: 14,
  moisture: "sponge",
};

function validNumber(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.max(0, parsed) : fallback;
}

function readInputs(root: HTMLElement, previous: CompostInputs): CompostInputs {
  const value = (name: string): string | undefined =>
    root.querySelector<HTMLInputElement>(`[data-input="${name}"]`)?.value;
  return {
    ...previous,
    width: validNumber(value("width"), previous.width),
    depth: validNumber(value("depth"), previous.depth),
    diameter: validNumber(value("diameter"), previous.diameter),
    height: validNumber(value("height"), previous.height),
    browns: validNumber(value("browns"), previous.browns),
    greens: validNumber(value("greens"), previous.greens),
  };
}

function writeInputs(root: HTMLElement, inputs: CompostInputs): void {
  const values: Record<string, number> = {
    width: inputs.width,
    depth: inputs.depth,
    diameter: inputs.diameter,
    height: inputs.height,
    browns: inputs.browns,
    greens: inputs.greens,
  };
  Object.entries(values).forEach(([name, value]) => {
    const input = root.querySelector<HTMLInputElement>(
      `[data-input="${name}"]`,
    );
    if (input) input.value = String(Number(value.toFixed(2)));
  });
}

function setShape(root: HTMLElement, shape: BinShape): void {
  root
    .querySelector<HTMLElement>("[data-dimensions]")
    ?.setAttribute("data-shape", shape);
  root
    .querySelector<HTMLElement>("[data-shape-rectangular]")
    ?.classList.toggle("is-active", shape === "rectangular");
  root
    .querySelector<HTMLElement>("[data-shape-cylindrical]")
    ?.classList.toggle("is-active", shape === "cylindrical");
}

function renderState(
  root: HTMLElement,
  inputs: CompostInputs,
  ui: CompostBinVolumeRatioCalculatorUI,
): void {
  const result = calculateCompost(inputs);
  syncInputLabels(root, inputs, ui);
  setShape(root, inputs.shape);
  renderCompost(root, inputs, result, ui);
  saveCompostState(inputs);
}

function bindNumberInputs(
  root: HTMLElement,
  getState: () => CompostInputs,
  setState: (next: CompostInputs) => void,
  ui: CompostBinVolumeRatioCalculatorUI,
): void {
  root.querySelectorAll<HTMLInputElement>("[data-input]").forEach((input) =>
    input.addEventListener("input", () => {
      const next = readInputs(root, getState());
      setState(next);
      renderState(root, next, ui);
    }),
  );
}

function bindPresets(
  root: HTMLElement,
  getState: () => CompostInputs,
  setState: (next: CompostInputs) => void,
  ui: CompostBinVolumeRatioCalculatorUI,
): void {
  root.querySelectorAll<HTMLButtonElement>("[data-preset]").forEach((button) =>
    button.addEventListener("click", () => {
      const next = applyPreset(
        button.dataset.preset as "kitchen" | "garden" | "leafy",
        getState().unitSystem,
      );
      setState(next);
      writeInputs(root, next);
      renderState(root, next, ui);
    }),
  );
}

function bindChoiceButtons(
  root: HTMLElement,
  getState: () => CompostInputs,
  setState: (next: CompostInputs) => void,
  ui: CompostBinVolumeRatioCalculatorUI,
): void {
  root.querySelectorAll<HTMLButtonElement>("[data-shape]").forEach((button) =>
    button.addEventListener("click", () => {
      const next = { ...getState(), shape: button.dataset.shape as BinShape };
      setState(next);
      renderState(root, next, ui);
    }),
  );
  root
    .querySelectorAll<HTMLButtonElement>("[data-moisture]")
    .forEach((button) =>
      button.addEventListener("click", () => {
        const next = {
          ...getState(),
          moisture: button.dataset.moisture as MoistureLevel,
        };
        setState(next);
        renderState(root, next, ui);
      }),
    );
}

function bindUnits(
  root: HTMLElement,
  getState: () => CompostInputs,
  setState: (next: CompostInputs) => void,
  ui: CompostBinVolumeRatioCalculatorUI,
): void {
  root.querySelectorAll<HTMLButtonElement>("[data-unit]").forEach((button) =>
    button.addEventListener("click", () => {
      const target = button.dataset.unit as UnitSystem;
      const next = convertInputs(getState(), target);
      setState(next);
      writeInputs(root, next);
      renderState(root, next, ui);
    }),
  );
}

export function mountCompostCalculator(
  root: HTMLElement,
  ui: CompostBinVolumeRatioCalculatorUI,
): void {
  let state: CompostInputs = {
    ...defaults,
    ...(loadCompostState() ?? {}),
  } as CompostInputs;
  const getState = (): CompostInputs => state;
  const setState = (next: CompostInputs): void => {
    state = next;
  };
  bindNumberInputs(root, getState, setState, ui);
  bindPresets(root, getState, setState, ui);
  bindChoiceButtons(root, getState, setState, ui);
  bindUnits(root, getState, setState, ui);
  root
    .querySelector<HTMLButtonElement>("[data-reset]")
    ?.addEventListener("click", () => {
      state = { ...defaults };
      writeInputs(root, state);
      renderState(root, state, ui);
    });
  writeInputs(root, state);
  renderState(root, state, ui);
}
