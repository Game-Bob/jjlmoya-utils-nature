import { describe, expect, it } from 'vitest';
import {
  calculateGardenPlan,
  COLLECTION_FACTOR,
  DEFAULT_INPUTS,
  RUNOFF_FACTOR,
} from './logic';

describe('Urban garden planner logic', () => {
  it('calculates soil, gross water, captured water, and equivalent coverage', () => {
    const result = calculateGardenPlan(DEFAULT_INPUTS);

    expect(result.soilVolumeLiters).toBe(3600);
    expect(result.grossRainwaterLiters).toBe(500);
    expect(result.harvestedWaterLiters).toBe(382.5);
    expect(result.gardenWaterDepthMm).toBe(31.875);
    expect(result.wateringAreaAt10Mm).toBe(38.25);
  });

  it('applies runoff and collection factors separately', () => {
    const result = calculateGardenPlan({
      gardenAreaM2: 1,
      substrateDepthCm: 1,
      collectionAreaM2: 2,
      rainfallMm: 10,
    });

    expect(result.harvestedWaterLiters).toBe(20 * RUNOFF_FACTOR * COLLECTION_FACTOR);
  });

  it('turns invalid or negative measurements into zero', () => {
    const result = calculateGardenPlan({
      gardenAreaM2: -2,
      substrateDepthCm: Number.NaN,
      collectionAreaM2: Number.POSITIVE_INFINITY,
      rainfallMm: 0,
    });

    expect(result.gardenAreaM2).toBe(0);
    expect(result.substrateDepthCm).toBe(0);
    expect(result.collectionAreaM2).toBe(0);
    expect(result.rainfallMm).toBe(0);
    expect(result.gardenWaterDepthMm).toBe(0);
  });
});
