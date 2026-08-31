import { describe, expect, it } from 'vitest';
import { evaluatePlan } from './evaluator';
import { calculateSurveyPlan, DEFAULT_INPUTS } from './logic';

describe('Wildlife camera trap plan evaluator', () => {
  it('recognizes a balanced plan', () => {
    expect(evaluatePlan(calculateSurveyPlan(DEFAULT_INPUTS))).toBe('balanced');
  });

  it('flags target spacing that is sparse or dense for the area', () => {
    expect(evaluatePlan(calculateSurveyPlan({ ...DEFAULT_INPUTS, areaHectares: 100, cameraCount: 1, spacingMeters: 100 }))).toBe('sparse');
    expect(evaluatePlan(calculateSurveyPlan({ ...DEFAULT_INPUTS, areaHectares: 1, cameraCount: 100, spacingMeters: 100, triggerRatePerCameraDay: 0.1 }))).toBe('dense');
  });

  it('flags a review load that needs attention', () => {
    expect(evaluatePlan(calculateSurveyPlan({ ...DEFAULT_INPUTS, triggerRatePerCameraDay: 10 }))).toBe('review-heavy');
  });

  it('requires a complete deployment before interpreting it', () => {
    expect(evaluatePlan(calculateSurveyPlan({ ...DEFAULT_INPUTS, deploymentDays: 0 }))).toBe('needs-input');
  });
});
