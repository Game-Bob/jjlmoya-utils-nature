import type { WildlifeCameraTrapEffortPlannerUI } from './ui';
import { ACRES_PER_HECTARE, M2_PER_ACRE, METERS_PER_FOOT, type SurveyPlanResult } from './logic';
import { evaluatePlan } from './evaluator';
import type { UnitSystem } from './storage';

function number(value: number, maximumFractionDigits = 0): string {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits }).format(value);
}

function pointGrid(count: number): Array<{ x: number; y: number; index: number }> {
  const columns = Math.max(1, Math.ceil(Math.sqrt(count)));
  const rows = Math.max(1, Math.ceil(count / columns));
  const points: Array<{ x: number; y: number; index: number }> = [];
  for (let index = 0; index < count; index += 1) {
    const column = index % columns;
    const row = Math.floor(index / columns);
    points.push({
      x: 14 + (column / Math.max(1, columns - 1)) * 72,
      y: 16 + (row / Math.max(1, rows - 1)) * 68,
      index,
    });
  }
  return points;
}

function renderFieldMap(element: HTMLElement, result: SurveyPlanResult, ui: WildlifeCameraTrapEffortPlannerUI): void {
  const points = pointGrid(Math.min(result.cameraCount, 36));
  const stationMarks = points.map((point) => `
    <g class="wctep-station" transform="translate(${point.x} ${point.y})">
      <rect class="wctep-cell" x="-8" y="-8" width="16" height="16" rx="2" />
      <circle class="wctep-station-dot" r="2.4" />
      <text x="0" y="-11" text-anchor="middle">${point.index + 1}</text>
    </g>`).join('');
  const overflow = result.cameraCount > 36 ? `<text class="wctep-overflow" x="86" y="92" text-anchor="end">+${result.cameraCount - 36}</text>` : '';
  element.innerHTML = `
    <svg viewBox="0 0 100 100" role="img" aria-label="${ui.mapLabel}">
      <title>${ui.mapLabel}</title>
      <desc>${ui.mapCaption}</desc>
      <path class="wctep-contour" d="M6 22 C18 10 29 18 42 10 S70 8 94 20 M4 68 C20 55 30 78 48 63 S76 55 96 72 M16 95 C25 77 46 88 60 79 S82 78 92 88" />
      <path class="wctep-route" d="M9 84 C29 72 32 39 48 47 S68 77 91 28" />
      ${stationMarks}
      ${overflow}
      <path class="wctep-north" d="M91 13 L91 25 M91 13 L88 18 M91 13 L94 18" />
      <text class="wctep-north-label" x="91" y="9" text-anchor="middle">N</text>
    </svg>`;
}

function renderReviewList(root: HTMLElement, result: SurveyPlanResult, ui: WildlifeCameraTrapEffortPlannerUI): void {
  const list = root.querySelector<HTMLOListElement>('[data-review-list]');
  if (!list) return;
  list.replaceChildren(...result.reviewCheckpoints.map((checkpoint) => {
    const item = document.createElement('li');
    const day = document.createElement('strong');
    day.textContent = `${ui.reviewDayLabel} ${number(checkpoint.day)}`;
    const events = document.createElement('span');
    events.textContent = `${number(checkpoint.expectedEvents)} ${ui.reviewEventsLabel}`;
    item.append(day, events);
    return item;
  }));
}

function renderValues(root: HTMLElement, result: SurveyPlanResult, unitSystem: UnitSystem): void {
  const areaPerCamera = unitSystem === 'metric' ? `${number(result.areaPerCameraM2)} m²` : `${number(result.areaPerCameraM2 / M2_PER_ACRE, 2)} ac`;
  const spacing = unitSystem === 'metric' ? `${number(result.evenGridSpacingMeters)} m` : `${number(result.evenGridSpacingMeters / METERS_PER_FOOT)} ft`;
  root.querySelector('[data-camera-days]')!.textContent = number(result.cameraDays);
  root.querySelector('[data-expected-events]')!.textContent = number(result.expectedEvents);
  root.querySelector('[data-area-per-camera]')!.textContent = areaPerCamera;
  root.querySelector('[data-grid-spacing]')!.textContent = spacing;
  root.querySelector('[data-footprint]')!.textContent = `${number(result.nominalFootprintPercent, 1)}%`;
  root.querySelector('[data-review-load]')!.textContent = number(result.expectedEventsPerReview);
}

function renderStatus(root: HTMLElement, result: SurveyPlanResult, ui: WildlifeCameraTrapEffortPlannerUI): void {
  const status = evaluatePlan(result);
  const labels: Record<string, string> = {
    'needs-input': ui.statusNeedsInput,
    sparse: ui.statusSparse,
    dense: ui.statusDense,
    'review-heavy': ui.statusReviewHeavy,
    balanced: ui.statusBalanced,
  };
  const statusElement = root.querySelector('[data-status]');
  if (statusElement) statusElement.textContent = labels[status] ?? ui.statusNeedsInput;
  root.dataset.planStatus = status;
}

export function renderPlan(root: HTMLElement, result: SurveyPlanResult, ui: WildlifeCameraTrapEffortPlannerUI, unitSystem: UnitSystem): void {
  renderFieldMap(root.querySelector<HTMLElement>('[data-field-map]')!, result, ui);
  renderValues(root, result, unitSystem);
  renderStatus(root, result, ui);
  renderReviewList(root, result, ui);
}

export function formatInputValue(value: number, unitSystem: UnitSystem, kind: 'area' | 'spacing'): string {
  if (kind === 'area' && unitSystem === 'imperial') return String(Math.round((value * ACRES_PER_HECTARE) * 100) / 100);
  if (kind === 'spacing' && unitSystem === 'imperial') return String(Math.round((value / METERS_PER_FOOT) * 10) / 10);
  return String(value);
}
