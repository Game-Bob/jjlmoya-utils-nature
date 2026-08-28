import type { GardenPlanAssessment } from './evaluator';
import type { GardenPlanResult } from './logic';
import type { UrbanGardenPlannerUI } from './ui';

export interface GardenPlannerElements {
  root: HTMLElement;
  inputs: Record<keyof GardenPlanResult, HTMLInputElement | null>;
  soilValue: HTMLElement | null;
  waterValue: HTMLElement | null;
  depthValue: HTMLElement | null;
  areaValue: HTMLElement | null;
  status: HTMLElement | null;
  statusNote: HTMLElement | null;
  soilFill: HTMLElement | null;
  waterFill: HTMLElement | null;
  rainDots: HTMLElement | null;
}

export function findElements(root: HTMLElement): GardenPlannerElements {
  const input = (id: string) => root.querySelector<HTMLInputElement>(id);
  const output = (id: string) => root.querySelector<HTMLElement>(id);

  return {
    root,
    inputs: {
      gardenAreaM2: input('#gardenArea'),
      substrateDepthCm: input('#substrateDepth'),
      collectionAreaM2: input('#collectionArea'),
      rainfallMm: input('#rainfall'),
      soilVolumeLiters: null,
      grossRainwaterLiters: null,
      harvestedWaterLiters: null,
      gardenWaterDepthMm: null,
      wateringAreaAt10Mm: null,
    },
    soilValue: output('#soilValue'),
    waterValue: output('#waterValue'),
    depthValue: output('#depthValue'),
    areaValue: output('#areaValue'),
    status: output('#planStatus'),
    statusNote: output('#planStatusNote'),
    soilFill: output('#soilFill'),
    waterFill: output('#waterFill'),
    rainDots: output('#rainDots'),
  };
}

export function formatNumber(value: number, maximumFractionDigits = 0): string {
  return new Intl.NumberFormat('en', { maximumFractionDigits }).format(value);
}

function setText(element: HTMLElement | null, text: string): void {
  if (element) element.textContent = text;
}

function statusLabel(ui: UrbanGardenPlannerUI, assessment: GardenPlanAssessment): string {
  const labels = {
    balanced: ui.statusBalanced,
    lightCapture: ui.statusLightCapture,
    deepBed: ui.statusDeepBed,
    noRain: ui.statusNoRain,
  };
  return labels[assessment.status];
}

export function renderGardenPlan(
  elements: GardenPlannerElements,
  result: GardenPlanResult,
  assessment: GardenPlanAssessment,
  ui: UrbanGardenPlannerUI,
): void {
  setText(elements.soilValue, `${formatNumber(result.soilVolumeLiters)} L`);
  setText(elements.waterValue, `${formatNumber(result.harvestedWaterLiters, 1)} L`);
  setText(elements.depthValue, `${formatNumber(result.gardenWaterDepthMm, 1)} mm`);
  setText(elements.areaValue, `${formatNumber(result.wateringAreaAt10Mm, 1)} m²`);
  setText(elements.status, statusLabel(ui, assessment));
  setText(elements.statusNote, ui.statusNote);
  elements.root.dataset.status = assessment.status;
  elements.root.style.setProperty('--ugrp-water-progress', `${assessment.progress}%`);
  elements.root.style.setProperty('--ugrp-soil-progress', `${Math.min(92, Math.max(18, result.substrateDepthCm * 1.7))}%`);
  elements.root.style.setProperty('--ugrp-rain-progress', `${Math.min(100, Math.max(8, result.rainfallMm * 2.2))}%`);
  if (elements.soilFill) elements.soilFill.setAttribute('aria-valuenow', String(result.substrateDepthCm));
  if (elements.waterFill) elements.waterFill.setAttribute('aria-valuenow', String(result.harvestedWaterLiters));
}
