import { ACRES_PER_HECTARE, calculateSurveyPlan, DEFAULT_INPUTS, METERS_PER_FOOT, type SurveyInput } from './logic';
import { formatInputValue, renderPlan } from './dom-views';
import { loadUnitSystem, saveUnitSystem, type UnitSystem } from './storage';
import type { WildlifeCameraTrapEffortPlannerUI } from './ui';

interface ToolConfig {
  ui: WildlifeCameraTrapEffortPlannerUI;
  defaults: SurveyInput;
}

const PRESETS: Record<string, SurveyInput> = {
  backyard: { areaHectares: 1, cameraCount: 3, deploymentDays: 14, spacingMeters: 55, triggerRatePerCameraDay: 2 },
  woodland: { areaHectares: 12, cameraCount: 12, deploymentDays: 28, spacingMeters: 100, triggerRatePerCameraDay: 4 },
  reserve: { areaHectares: 80, cameraCount: 24, deploymentDays: 42, spacingMeters: 180, triggerRatePerCameraDay: 1.5 },
};

function input(root: HTMLElement, name: string): HTMLInputElement {
  return root.querySelector<HTMLInputElement>(`[data-input="${name}"]`)!;
}

function readInput(root: HTMLElement, unitSystem: UnitSystem): SurveyInput {
  const area = Number(input(root, 'area').value) || 0;
  const spacing = Number(input(root, 'spacing').value) || 0;
  return {
    areaHectares: unitSystem === 'metric' ? area : area / ACRES_PER_HECTARE,
    cameraCount: Number(input(root, 'cameras').value) || 0,
    deploymentDays: Number(input(root, 'days').value) || 0,
    spacingMeters: unitSystem === 'metric' ? spacing : spacing * METERS_PER_FOOT,
    triggerRatePerCameraDay: Number(input(root, 'triggers').value) || 0,
  };
}

function writeInput(root: HTMLElement, values: SurveyInput, unitSystem: UnitSystem): void {
  input(root, 'area').value = formatInputValue(values.areaHectares, unitSystem, 'area');
  input(root, 'cameras').value = String(values.cameraCount);
  input(root, 'days').value = String(values.deploymentDays);
  input(root, 'spacing').value = formatInputValue(values.spacingMeters, unitSystem, 'spacing');
  input(root, 'triggers').value = String(values.triggerRatePerCameraDay);
}

function updateUnitLabels(root: HTMLElement, ui: WildlifeCameraTrapEffortPlannerUI, unitSystem: UnitSystem): void {
  root.querySelector('[data-unit-label="area"]')!.textContent = unitSystem === 'metric' ? ui.unitHectares : ui.unitAcres;
  root.querySelector('[data-unit-label="spacing"]')!.textContent = unitSystem === 'metric' ? ui.unitMeters : ui.unitFeet;
  root.querySelector('[data-unit-button="metric"]')!.setAttribute('aria-pressed', String(unitSystem === 'metric'));
  root.querySelector('[data-unit-button="imperial"]')!.setAttribute('aria-pressed', String(unitSystem === 'imperial'));
}

function render(root: HTMLElement, ui: WildlifeCameraTrapEffortPlannerUI, unitSystem: UnitSystem, values: SurveyInput): void {
  renderPlan(root, calculateSurveyPlan(values), ui, unitSystem);
}

export function mountWildlifeCameraTrapEffortPlanner(root: HTMLElement, config: ToolConfig): void {
  if (root.dataset.mounted === 'true') return;
  root.dataset.mounted = 'true';
  const ui = config.ui;
  let unitSystem = loadUnitSystem();
  let physicalValues = config.defaults ?? DEFAULT_INPUTS;
  writeInput(root, physicalValues, unitSystem);
  updateUnitLabels(root, ui, unitSystem);
  root.querySelectorAll<HTMLInputElement>('[data-input]').forEach((field) => field.addEventListener('input', () => {
    physicalValues = readInput(root, unitSystem);
    render(root, ui, unitSystem, physicalValues);
  }));
  root.querySelectorAll<HTMLButtonElement>('[data-unit-button]').forEach((button) => button.addEventListener('click', () => {
    const nextUnit = button.dataset.unitButton as UnitSystem;
    if (nextUnit === unitSystem) return;
    unitSystem = nextUnit;
    writeInput(root, physicalValues, unitSystem);
    updateUnitLabels(root, ui, unitSystem);
    saveUnitSystem(unitSystem);
    render(root, ui, unitSystem, physicalValues);
  }));
  root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => button.addEventListener('click', () => {
    const preset = PRESETS[button.dataset.preset ?? ''];
    if (!preset) return;
    physicalValues = preset;
    writeInput(root, physicalValues, unitSystem);
    render(root, ui, unitSystem, physicalValues);
  }));
  render(root, ui, unitSystem, physicalValues);
}
