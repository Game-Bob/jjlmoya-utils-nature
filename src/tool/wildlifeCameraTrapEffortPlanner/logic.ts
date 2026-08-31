export interface SurveyInput {
  areaHectares: number;
  cameraCount: number;
  deploymentDays: number;
  spacingMeters: number;
  triggerRatePerCameraDay: number;
}

export interface ReviewCheckpoint {
  day: number;
  expectedEvents: number;
}

export interface SurveyPlanResult {
  areaHectares: number;
  areaM2: number;
  cameraCount: number;
  deploymentDays: number;
  spacingMeters: number;
  triggerRatePerCameraDay: number;
  cameraDays: number;
  expectedEvents: number;
  areaPerCameraM2: number;
  nominalFootprintM2: number;
  nominalFootprintPercent: number;
  evenGridSpacingMeters: number;
  reviewCheckpoints: ReviewCheckpoint[];
  expectedEventsPerReview: number;
}

export const DEFAULT_INPUTS: SurveyInput = {
  areaHectares: 12,
  cameraCount: 12,
  deploymentDays: 28,
  spacingMeters: 100,
  triggerRatePerCameraDay: 4,
};

export const METERS_PER_FOOT = 0.3048;
export const M2_PER_HECTARE = 10000;
export const M2_PER_ACRE = 4046.8564224;
export const ACRES_PER_HECTARE = M2_PER_HECTARE / M2_PER_ACRE;

function positive(value: number): number {
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function wholePositive(value: number): number {
  return Math.floor(positive(value));
}

function normalizeInput(input: SurveyInput): SurveyInput {
  return {
    areaHectares: positive(input.areaHectares),
    cameraCount: wholePositive(input.cameraCount),
    deploymentDays: wholePositive(input.deploymentDays),
    spacingMeters: positive(input.spacingMeters),
    triggerRatePerCameraDay: positive(input.triggerRatePerCameraDay),
  };
}

function buildReviewCheckpoints(deploymentDays: number, expectedEventsPerDay: number): ReviewCheckpoint[] {
  if (deploymentDays === 0) return [];
  const checkpoints: ReviewCheckpoint[] = [];
  for (let day = 7; day < deploymentDays; day += 7) {
    checkpoints.push({ day, expectedEvents: day * expectedEventsPerDay });
  }
  checkpoints.push({ day: deploymentDays, expectedEvents: deploymentDays * expectedEventsPerDay });
  return checkpoints;
}

export function calculateSurveyPlan(input: SurveyInput): SurveyPlanResult {
  const { areaHectares, cameraCount, deploymentDays, spacingMeters, triggerRatePerCameraDay } = normalizeInput(input);
  const areaM2 = areaHectares * M2_PER_HECTARE;
  const cameraDays = cameraCount * deploymentDays;
  const expectedEvents = cameraDays * triggerRatePerCameraDay;
  const areaPerCameraM2 = cameraCount > 0 ? areaM2 / cameraCount : 0;
  const nominalFootprintM2 = cameraCount * spacingMeters ** 2;
  const nominalFootprintPercent = areaM2 > 0 ? (nominalFootprintM2 / areaM2) * 100 : 0;
  const evenGridSpacingMeters = cameraCount > 0 ? Math.sqrt(areaM2 / cameraCount) : 0;
  const reviewCheckpoints = buildReviewCheckpoints(deploymentDays, cameraCount * triggerRatePerCameraDay);

  return {
    areaHectares,
    areaM2,
    cameraCount,
    deploymentDays,
    spacingMeters,
    triggerRatePerCameraDay,
    cameraDays,
    expectedEvents,
    areaPerCameraM2,
    nominalFootprintM2,
    nominalFootprintPercent,
    evenGridSpacingMeters,
    reviewCheckpoints,
    expectedEventsPerReview: reviewCheckpoints.length > 0 ? expectedEvents / reviewCheckpoints.length : 0,
  };
}
