import type { CompostBinVolumeRatioCalculatorUI } from "./ui";
import type {
  CompostInputs,
  CompostResult,
  MoistureLevel,
  UnitSystem,
} from "./logic";
import { getDiagnostics } from "./evaluator";

function number(value: number, maximumFractionDigits = 1): string {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits }).format(
    value,
  );
}

function unitLabels(
  unitSystem: UnitSystem,
  ui: CompostBinVolumeRatioCalculatorUI,
): { volume: string; dimension: string } {
  return unitSystem === "metric"
    ? { volume: ui.volumeUnitLiters, dimension: ui.dimensionUnitCm }
    : { volume: ui.volumeUnitGallons, dimension: ui.dimensionUnitIn };
}

function displayVolume(valueLiters: number, unitSystem: UnitSystem): number {
  return unitSystem === "imperial" ? valueLiters / 3.785411784 : valueLiters;
}

function moistureLabel(
  level: MoistureLevel,
  ui: CompostBinVolumeRatioCalculatorUI,
): string {
  if (level === "dry") return ui.moistureAdviceDry;
  if (level === "wet") return ui.moistureAdviceWet;
  return ui.moistureAdviceSponge;
}

function statusLabel(
  key: string,
  ui: CompostBinVolumeRatioCalculatorUI,
): string {
  const labels: Record<string, string> = {
    balanced: ui.statusBalanced,
    "too-green": ui.statusTooGreen,
    "too-brown": ui.statusTooBrown,
    "no-greens": ui.statusNoGreens,
    overfilled: ui.statusOverfilled,
    dry: ui.statusDry,
    wet: ui.statusWet,
  };
  return labels[key] ?? ui.statusGoodMoisture;
}

function layerMarkup(result: CompostResult): string {
  const total = result.materialsLiters;
  if (total <= 0)
    return '<text class="compost-scene-empty" x="300" y="218">Add materials to build the pile</text>';
  const brownShare =
    result.ratio === null ? 0.5 : result.ratio / (result.ratio + 1);
  const layers = 8;
  const bottom = 358;
  const layerHeight = 34;
  return Array.from({ length: layers }, (_, index) => {
    const y = bottom - (index + 1) * layerHeight;
    const isBrown = index / layers < brownShare;
    const className = isBrown
      ? "compost-layer compost-layer-brown"
      : "compost-layer compost-layer-green";
    const opacity = Math.max(0.35, 1 - Math.abs(index - 4) * 0.06);
    return `<rect class="${className}" x="164" y="${y}" width="272" height="${layerHeight + 1}" opacity="${opacity.toFixed(2)}" />`;
  }).join("");
}

function sceneMarkup(
  inputs: CompostInputs,
  result: CompostResult,
  ui: CompostBinVolumeRatioCalculatorUI,
): string {
  const fill = Math.min(100, Math.max(0, result.fillPercent));
  const fillHeight = 312 * (fill / 100);
  const fillY = 358 - fillHeight;
  const shapeLabel =
    inputs.shape === "rectangular" ? ui.shapeRectangular : ui.shapeCylindrical;
  return `<div class="compost-scene-heading"><span>${ui.sceneTitle}</span><strong>${shapeLabel}</strong></div><svg class="compost-scene-svg" viewBox="0 0 600 420" role="img" aria-label="${ui.sceneTitle}"><path class="compost-scene-sun" d="M76 80c46-48 115-48 162 0" /><path class="compost-scene-ground" d="M42 370c112-23 197-14 282 0 89 15 171 14 234-6" /><rect class="compost-bin" x="145" y="42" width="310" height="328" rx="26" /><clipPath id="compost-clip"><rect x="164" y="58" width="272" height="300" rx="17" /></clipPath><g clip-path="url(#compost-clip)"><rect class="compost-fill" x="164" y="${fillY.toFixed(1)}" width="272" height="${fillHeight.toFixed(1)}" /><g>${layerMarkup(result)}</g></g><path class="compost-scene-rim" d="M164 58h272" /><path class="compost-scene-marker" d="M478 358h31M478 58h31M494 358V58" /><text class="compost-scene-scale" x="519" y="214">${number(displayVolume(result.capacityLiters, inputs.unitSystem))} ${unitLabels(inputs.unitSystem, ui).volume}</text><text class="compost-scene-scale" x="519" y="232">${number(result.fillPercent, 0)}% full</text><text class="compost-scene-label compost-scene-label-brown" x="87" y="156">${ui.brownLabel}</text><text class="compost-scene-label compost-scene-label-green" x="87" y="176">${ui.greenLabel}</text></svg>`;
}

function actionText(
  inputs: CompostInputs,
  result: CompostResult,
  ui: CompostBinVolumeRatioCalculatorUI,
): string {
  const ratioText =
    result.ratio === null ? ui.statusNoGreens : `${number(result.ratio, 2)}:1`;
  const moistureText = moistureLabel(inputs.moisture, ui);
  let tone = "caution";
  if (result.status === "balanced") tone = "good";
  if (result.status === "overfilled") tone = "alert";
  const airText =
    result.status === "overfilled" ? ui.statusOverfilled : ui.statusNote;
  return `<div class="compost-result-status" data-tone="${tone}"><span>${statusLabel(result.status, ui)}</span><strong>${ratioText}</strong></div><div class="compost-result-advice"><p><b>${ui.brownTarget}</b> ${number(displayVolume(result.targetBrownLowLiters, inputs.unitSystem))} to ${number(displayVolume(result.targetBrownHighLiters, inputs.unitSystem))} ${unitLabels(inputs.unitSystem, ui).volume}</p><p><b>${ui.waterAction}</b> ${moistureText}</p><p><b>${ui.airAction}</b> ${airText}</p></div>`;
}

export function renderCompost(
  root: HTMLElement,
  inputs: CompostInputs,
  result: CompostResult,
  ui: CompostBinVolumeRatioCalculatorUI,
): void {
  const labels = unitLabels(inputs.unitSystem, ui);
  const scene = root.querySelector<HTMLElement>("[data-compost-scene]");
  const results = root.querySelector<HTMLElement>("[data-compost-results]");
  const diagnostics = getDiagnostics(result);
  if (scene) scene.innerHTML = sceneMarkup(inputs, result, ui);
  if (results) {
    results.innerHTML = `<div class="compost-result-eyebrow">${ui.resultCapacity}</div><div class="compost-result-capacity">${number(displayVolume(result.capacityLiters, inputs.unitSystem))} <span>${labels.volume}</span></div><div class="compost-result-stats"><div><span>${ui.resultMaterials}</span><strong>${number(displayVolume(result.materialsLiters, inputs.unitSystem))} ${labels.volume}</strong></div><div><span>${ui.resultRatio}</span><strong>${result.ratio === null ? "..." : `${number(result.ratio, 2)}:1`}</strong></div><div><span>${ui.resultFill}</span><strong>${number(result.fillPercent, 0)}%</strong></div></div>${actionText(inputs, result, ui)}<div class="compost-result-diagnostics">${diagnostics.map((item) => `<span data-tone="${item.tone}">${statusLabel(item.key, ui)}</span>`).join("")}</div>`;
  }
}

export function syncInputLabels(
  root: HTMLElement,
  inputs: CompostInputs,
  ui: CompostBinVolumeRatioCalculatorUI,
): void {
  const labels = unitLabels(inputs.unitSystem, ui);
  syncUnitText(root, labels);
  syncPressedStates(root, inputs);
}

function syncUnitText(
  root: HTMLElement,
  labels: { volume: string; dimension: string },
): void {
  root
    .querySelectorAll<HTMLElement>("[data-dimension-unit]")
    .forEach((node) => {
      node.textContent = labels.dimension;
    });
  root.querySelectorAll<HTMLElement>("[data-volume-unit]").forEach((node) => {
    node.textContent = labels.volume;
  });
}

function syncPressedStates(root: HTMLElement, inputs: CompostInputs): void {
  root
    .querySelector<HTMLElement>("[data-unit-metric]")
    ?.toggleAttribute("aria-pressed", inputs.unitSystem === "metric");
  root
    .querySelector<HTMLElement>("[data-unit-imperial]")
    ?.toggleAttribute("aria-pressed", inputs.unitSystem === "imperial");
  root
    .querySelector<HTMLElement>("[data-shape-rectangular]")
    ?.toggleAttribute("aria-pressed", inputs.shape === "rectangular");
  root
    .querySelector<HTMLElement>("[data-shape-cylindrical]")
    ?.toggleAttribute("aria-pressed", inputs.shape === "cylindrical");
  root.querySelectorAll<HTMLElement>("[data-moisture]").forEach((node) => {
    node.toggleAttribute(
      "aria-pressed",
      node.dataset.moisture === inputs.moisture,
    );
  });
}
