import { describe, expect, it } from 'vitest';
import { calculateSurveyPlan, DEFAULT_INPUTS, M2_PER_HECTARE } from './logic';

describe('Wildlife camera trap effort planner logic', () => {
  it('calculates effort, expected events, nominal footprint, and review checkpoints', () => {
    const result = calculateSurveyPlan(DEFAULT_INPUTS);

    expect(result.cameraDays).toBe(336);
    expect(result.expectedEvents).toBe(1344);
    expect(result.areaPerCameraM2).toBe(10000);
    expect(result.nominalFootprintM2).toBe(120000);
    expect(result.nominalFootprintPercent).toBeCloseTo(100);
    expect(result.evenGridSpacingMeters).toBeCloseTo(Math.sqrt(M2_PER_HECTARE));
    expect(result.reviewCheckpoints.map((checkpoint) => checkpoint.day)).toEqual([7, 14, 21, 28]);
    expect(result.expectedEventsPerReview).toBe(336);
  });

  it('keeps physical area calculations independent from input units', () => {
    const result = calculateSurveyPlan({
      areaHectares: 1,
      cameraCount: 4,
      deploymentDays: 10,
      spacingMeters: 100,
      triggerRatePerCameraDay: 2.5,
    });

    expect(result.areaM2).toBe(10000);
    expect(result.cameraDays).toBe(40);
    expect(result.expectedEvents).toBe(100);
  });

  it('normalizes invalid and fractional planning values safely', () => {
    const result = calculateSurveyPlan({
      areaHectares: -1,
      cameraCount: 2.9,
      deploymentDays: Number.NaN,
      spacingMeters: Number.POSITIVE_INFINITY,
      triggerRatePerCameraDay: -3,
    });

    expect(result.areaHectares).toBe(0);
    expect(result.cameraCount).toBe(2);
    expect(result.deploymentDays).toBe(0);
    expect(result.spacingMeters).toBe(0);
    expect(result.expectedEvents).toBe(0);
    expect(result.reviewCheckpoints).toEqual([]);
  });
});
