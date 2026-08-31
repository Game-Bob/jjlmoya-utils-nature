import { describe, expect, it } from 'vitest';
import { applyProfile, celsiusToFahrenheit, createCalendarPlan, fahrenheitToCelsius } from './logic';

describe('seed stratification calendar logic', () => {
  it('works backwards from sowing day without overlapping phases', () => {
    const plan = createCalendarPlan({
      profileId: 'apple',
      mode: 'sowing-date',
      anchorDate: '2027-04-15',
      soakDays: 1,
      warmDays: 0,
      coldDays: 90,
      coldMinC: 1,
      coldMaxC: 5,
      referenceDate: '2027-01-15',
    });
    expect(plan.startDate).toBe('2027-01-14');
    expect(plan.phases[0]).toMatchObject({ kind: 'soak', startDate: '2027-01-14', endDate: '2027-01-14', durationDays: 1 });
    expect(plan.phases[1]).toMatchObject({ kind: 'cold', startDate: '2027-01-15', endDate: '2027-04-14', durationDays: 90, minTempC: 1, maxTempC: 5 });
    expect(plan.phases[2]).toMatchObject({ kind: 'sow', startDate: '2027-04-15', endDate: '2027-04-15', durationDays: 1 });
    expect(plan.activePhaseIndex).toBe(1);
  });

  it('keeps warm and cold phases in sequence', () => {
    const plan = createCalendarPlan({ ...applyProfile('milkweed'), anchorDate: '2027-05-31', referenceDate: '2027-04-20' });
    expect(plan.phases.map((phase) => phase.kind)).toEqual(['warm', 'cold', 'sow']);
    expect(plan.phases[0]).toMatchObject({ startDate: '2027-04-01', endDate: '2027-04-30' });
    expect(plan.phases[1]).toMatchObject({ startDate: '2027-05-01', endDate: '2027-05-30' });
    expect(plan.activePhaseIndex).toBe(0);
  });

  it('rejects inverted temperatures and negative durations', () => {
    expect(() => createCalendarPlan({ ...applyProfile('apple'), coldMinC: 6, coldMaxC: 2 })).toThrow('Temperature range is inverted');
    expect(() => createCalendarPlan({ ...applyProfile('apple'), coldDays: -1 })).toThrow('Durations cannot be negative');
  });

  it('uses sowing day as the active phase when no reference date is supplied', () => {
    const plan = createCalendarPlan(applyProfile('lavender'));
    expect(plan.activePhaseIndex).toBe(1);
  });

  it('converts displayed temperature without changing the physical value', () => {
    expect(celsiusToFahrenheit(5)).toBe(41);
    expect(fahrenheitToCelsius(41)).toBe(5);
  });

  it('calculates a future sowing date from a ready today date', () => {
    const plan = createCalendarPlan({ ...applyProfile('apple', '2027-01-14'), mode: 'ready-date', anchorDate: '2027-01-14' });
    expect(plan.sowingDate).toBe('2027-04-15');
    expect(plan.startDate).toBe('2027-01-14');
    expect(plan.mode).toBe('ready-date');
  });
});
