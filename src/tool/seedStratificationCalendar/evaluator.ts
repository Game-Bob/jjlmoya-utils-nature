import type { CalendarPlan } from './logic';

export type CalendarStatus = 'upcoming' | 'active' | 'sowing' | 'complete';

export interface CalendarEvaluation {
  status: CalendarStatus;
  phaseIndex: number;
  phaseLabel: string;
  dayNumber: number;
  durationDays: number;
}

function getStatus(phaseKind: string, today: string, startDate: string): CalendarStatus {
  if (phaseKind === 'sow') return 'sowing';
  return today < startDate ? 'upcoming' : 'active';
}

function phaseDay(startDate: string, today: string, durationDays: number): number {
  if (today < startDate) return 0;
  const elapsed = Math.floor((Date.parse(`${today}T00:00:00Z`) - Date.parse(`${startDate}T00:00:00Z`)) / 86_400_000) + 1;
  return Math.min(elapsed, durationDays);
}

export function evaluatePlan(plan: CalendarPlan, today: string, labels: Record<string, string>): CalendarEvaluation {
  if (today > plan.sowingDate) return { status: 'complete', phaseIndex: plan.phases.length - 1, phaseLabel: labels.sow ?? 'Sow seeds', dayNumber: 1, durationDays: 1 };
  const phaseIndex = plan.phases.findIndex((phase) => phase.startDate <= today && today <= phase.endDate);
  const resolvedIndex = phaseIndex >= 0 ? phaseIndex : plan.activePhaseIndex;
  const phase = plan.phases[resolvedIndex];
  if (!phase) return { status: 'complete', phaseIndex: plan.phases.length - 1, phaseLabel: labels.sow ?? 'Sow seeds', dayNumber: 1, durationDays: 1 };
  const status = getStatus(phase.kind, today, phase.startDate);
  return { status, phaseIndex: resolvedIndex, phaseLabel: labels[phase.kind] ?? phase.kind, dayNumber: phaseDay(phase.startDate, today, phase.durationDays), durationDays: phase.durationDays };
}
