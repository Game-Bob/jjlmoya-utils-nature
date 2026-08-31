import type { SurveyPlanResult } from './logic';

export type PlanStatus = 'needs-input' | 'sparse' | 'dense' | 'review-heavy' | 'balanced';

export function evaluatePlan(result: SurveyPlanResult): PlanStatus {
  if (result.areaM2 === 0 || result.cameraCount === 0 || result.deploymentDays === 0) return 'needs-input';
  if (result.expectedEventsPerReview >= 500) return 'review-heavy';
  if (result.evenGridSpacingMeters > result.spacingMeters * 1.25) return 'sparse';
  if (result.evenGridSpacingMeters < result.spacingMeters * 0.75) return 'dense';
  return 'balanced';
}
