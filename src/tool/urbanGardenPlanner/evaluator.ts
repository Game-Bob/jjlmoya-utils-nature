import type { GardenPlanInput, GardenPlanResult } from './logic';

export type GardenPlanStatus = 'balanced' | 'lightCapture' | 'deepBed' | 'noRain';

export interface GardenPlanAssessment {
  status: GardenPlanStatus;
  progress: number;
}

export function evaluateGardenPlan(
  input: GardenPlanInput,
  result: GardenPlanResult,
): GardenPlanAssessment {
  if (result.rainfallMm === 0 || result.collectionAreaM2 === 0) {
    return { status: 'noRain', progress: 8 };
  }

  if (result.gardenWaterDepthMm < 5) {
    return { status: 'lightCapture', progress: Math.max(12, result.gardenWaterDepthMm * 8) };
  }

  if (input.substrateDepthCm > 45) {
    return { status: 'deepBed', progress: 86 };
  }

  return { status: 'balanced', progress: Math.min(92, Math.max(18, result.gardenWaterDepthMm * 3)) };
}
