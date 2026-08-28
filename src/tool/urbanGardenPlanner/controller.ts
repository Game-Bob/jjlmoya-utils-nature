import { evaluateGardenPlan } from './evaluator';
import { calculateGardenPlan, DEFAULT_INPUTS, type GardenPlanInput } from './logic';
import { findElements, renderGardenPlan, type GardenPlannerElements } from './dom-views';
import { loadGardenPlan, saveGardenPlan } from './storage';
import type { UrbanGardenPlannerUI } from './ui';

export interface UrbanGardenPlannerConfig {
  ui: UrbanGardenPlannerUI;
  defaults: GardenPlanInput;
}

const inputKeys: (keyof GardenPlanInput)[] = [
  'gardenAreaM2',
  'substrateDepthCm',
  'collectionAreaM2',
  'rainfallMm',
];

class UrbanGardenPlannerController {
  private readonly elements: GardenPlannerElements;
  private readonly config: UrbanGardenPlannerConfig;

  constructor(private readonly root: HTMLElement, config: UrbanGardenPlannerConfig) {
    this.elements = findElements(root);
    this.config = config;
  }

  mount(): void {
    this.restoreInputs();
    this.bindInputs();
    this.bindPresets();
    this.calculate();
  }

  private restoreInputs(): void {
    const saved = loadGardenPlan();
    const values = { ...DEFAULT_INPUTS, ...this.config.defaults, ...saved };
    inputKeys.forEach((key) => {
      const element = this.elements.inputs[key];
      if (element) element.value = String(values[key]);
    });
  }

  private bindInputs(): void {
    inputKeys.forEach((key) => {
      this.elements.inputs[key]?.addEventListener('input', () => this.calculate());
    });
  }

  private bindPresets(): void {
    this.root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => {
      button.addEventListener('click', () => {
        const values = button.dataset.preset?.split(',').map(Number) ?? [];
        inputKeys.forEach((key, index) => {
          const element = this.elements.inputs[key];
          if (element && Number.isFinite(values[index])) element.value = String(values[index]);
        });
        this.calculate();
      });
    });
  }

  private readInputs(): GardenPlanInput {
    return {
      gardenAreaM2: Number(this.elements.inputs.gardenAreaM2?.value),
      substrateDepthCm: Number(this.elements.inputs.substrateDepthCm?.value),
      collectionAreaM2: Number(this.elements.inputs.collectionAreaM2?.value),
      rainfallMm: Number(this.elements.inputs.rainfallMm?.value),
    };
  }

  private calculate(): void {
    const input = this.readInputs();
    const result = calculateGardenPlan(input);
    const assessment = evaluateGardenPlan(input, result);
    saveGardenPlan(input);
    renderGardenPlan(this.elements, result, assessment, this.config.ui);
  }
}

export function mountUrbanGardenPlanner(
  root: HTMLElement,
  config: UrbanGardenPlannerConfig,
): void {
  if (root.dataset.mounted === 'true') return;
  root.dataset.mounted = 'true';
  new UrbanGardenPlannerController(root, config).mount();
}
