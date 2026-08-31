export type SeedPhaseKind = 'soak' | 'warm' | 'cold' | 'sow';
export type TemperatureUnit = 'metric' | 'imperial';
export type CalendarMode = 'sowing-date' | 'ready-date';

export interface SeedProfile {
  id: string;
  scientificName: string;
  soakDays: number;
  warmDays: number;
  coldDays: number;
  warmMinC: number;
  warmMaxC: number;
  coldMinC: number;
  coldMaxC: number;
}

export interface CalendarInput {
  mode: CalendarMode;
  anchorDate: string;
  profileId: string;
  soakDays: number;
  warmDays: number;
  coldDays: number;
  coldMinC: number;
  coldMaxC: number;
  referenceDate?: string;
}

export interface CalendarPhase {
  kind: SeedPhaseKind;
  startDate: string;
  endDate: string;
  durationDays: number;
  minTempC?: number;
  maxTempC?: number;
  technique: string;
}

export interface CalendarPlan {
  profileId: string;
  sowingDate: string;
  startDate: string;
  totalPreparationDays: number;
  phases: CalendarPhase[];
  activePhaseIndex: number;
  mode: CalendarMode;
}

export const SEED_PROFILES: readonly SeedProfile[] = [
  { id: 'apple', scientificName: 'Malus domestica', soakDays: 1, warmDays: 0, coldDays: 90, warmMinC: 18, warmMaxC: 24, coldMinC: 1, coldMaxC: 5 },
  { id: 'lavender', scientificName: 'Lavandula angustifolia', soakDays: 0, warmDays: 0, coldDays: 30, warmMinC: 18, warmMaxC: 24, coldMinC: 1, coldMaxC: 5 },
  { id: 'milkweed', scientificName: 'Asclepias syriaca', soakDays: 0, warmDays: 30, coldDays: 30, warmMinC: 18, warmMaxC: 24, coldMinC: 1, coldMaxC: 5 },
  { id: 'rose', scientificName: 'Rosa spp.', soakDays: 1, warmDays: 0, coldDays: 60, warmMinC: 18, warmMaxC: 24, coldMinC: 1, coldMaxC: 5 },
  { id: 'strawberry', scientificName: 'Fragaria × ananassa', soakDays: 0, warmDays: 0, coldDays: 30, warmMinC: 18, warmMaxC: 24, coldMinC: 1, coldMaxC: 5 },
  { id: 'peach', scientificName: 'Prunus persica', soakDays: 1, warmDays: 0, coldDays: 90, warmMinC: 18, warmMaxC: 24, coldMinC: 1, coldMaxC: 5 },
  { id: 'cherry', scientificName: 'Prunus avium', soakDays: 1, warmDays: 0, coldDays: 90, warmMinC: 18, warmMaxC: 24, coldMinC: 1, coldMaxC: 5 },
  { id: 'pear', scientificName: 'Pyrus communis', soakDays: 1, warmDays: 0, coldDays: 60, warmMinC: 18, warmMaxC: 24, coldMinC: 1, coldMaxC: 5 },
  { id: 'poppy', scientificName: 'Papaver spp.', soakDays: 0, warmDays: 0, coldDays: 0, warmMinC: 18, warmMaxC: 24, coldMinC: 1, coldMaxC: 5 },
  { id: 'sunflower', scientificName: 'Helianthus annuus', soakDays: 0, warmDays: 0, coldDays: 0, warmMinC: 18, warmMaxC: 24, coldMinC: 1, coldMaxC: 5 },
  { id: 'tomato', scientificName: 'Solanum lycopersicum', soakDays: 0, warmDays: 0, coldDays: 0, warmMinC: 18, warmMaxC: 24, coldMinC: 1, coldMaxC: 5 },
  { id: 'basil', scientificName: 'Ocimum basilicum', soakDays: 0, warmDays: 0, coldDays: 0, warmMinC: 18, warmMaxC: 24, coldMinC: 1, coldMaxC: 5 },
] as const;

export const DEFAULT_INPUT: CalendarInput = {
  mode: 'sowing-date',
  anchorDate: '2027-04-15',
  profileId: 'apple',
  soakDays: 1,
  warmDays: 0,
  coldDays: 90,
  coldMinC: 1,
  coldMaxC: 5,
};

const MS_PER_DAY = 86_400_000;

export function celsiusToFahrenheit(value: number): number {
  return (value * 9) / 5 + 32;
}

export function fahrenheitToCelsius(value: number): number {
  return ((value - 32) * 5) / 9;
}

function parseDate(value: string): Date {
  const date = new Date(`${value}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }
  return date;
}

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function shiftDate(date: Date, days: number): Date {
  return new Date(date.getTime() + days * MS_PER_DAY);
}

interface PhaseOptions {
  kind: SeedPhaseKind;
  endDate: Date;
  durationDays: number;
  minTempC?: number;
  maxTempC?: number;
}

function makePhase(options: PhaseOptions, technique: string): CalendarPhase {
  const { kind, endDate, durationDays, minTempC, maxTempC } = options;
  const startDate = shiftDate(endDate, -(durationDays - 1));
  const phase: CalendarPhase = { kind, startDate: formatDate(startDate), endDate: formatDate(endDate), durationDays, technique };
  if (minTempC !== undefined) phase.minTempC = minTempC;
  if (maxTempC !== undefined) phase.maxTempC = maxTempC;
  return phase;
}

function validateInput(input: CalendarInput): void {
  parseDate(input.anchorDate);
  if (input.soakDays < 0 || input.warmDays < 0 || input.coldDays < 0) throw new Error('Durations cannot be negative');
  if (input.coldMaxC < input.coldMinC) throw new Error('Temperature range is inverted');
}

function phaseForDate(phases: CalendarPhase[], referenceDate: string): number {
  const date = parseDate(referenceDate);
  const index = phases.findIndex((phase) => phase.startDate <= referenceDate && referenceDate <= phase.endDate);
  if (index >= 0) return index;
  const firstPhase = phases[0];
  if (!firstPhase) throw new Error('Calendar has no phases');
  return date < parseDate(firstPhase.startDate) ? 0 : phases.length - 1;
}

function addPreparationPhase(phases: CalendarPhase[], options: PhaseOptions, technique: string): Date {
  const phase = makePhase(options, technique);
  phases.unshift(phase);
  return shiftDate(parseDate(phase.startDate), -1);
}

export function createCalendarPlan(input: CalendarInput): CalendarPlan {
  validateInput(input);
  const anchorDate = parseDate(input.anchorDate);
  const totalPreparationDays = input.soakDays + input.warmDays + input.coldDays;
  const sowingDate = input.mode === 'ready-date' ? shiftDate(anchorDate, totalPreparationDays) : anchorDate;
  const phases: CalendarPhase[] = [];
  let phaseEnd = shiftDate(sowingDate, -1);
  if (input.coldDays > 0) phaseEnd = addPreparationPhase(phases, { kind: 'cold', endDate: phaseEnd, durationDays: input.coldDays, minTempC: input.coldMinC, maxTempC: input.coldMaxC }, coldTechnique(input.profileId));
  if (input.warmDays > 0) phaseEnd = addPreparationPhase(phases, { kind: 'warm', endDate: phaseEnd, durationDays: input.warmDays, minTempC: 18, maxTempC: 24 }, warmTechnique(input.profileId));
  if (input.soakDays > 0) addPreparationPhase(phases, { kind: 'soak', endDate: phaseEnd, durationDays: input.soakDays, minTempC: 18, maxTempC: 24 }, soakTechnique(input.profileId));
  phases.push(makePhase({ kind: 'sow', endDate: sowingDate, durationDays: 1 }, sowTechnique(input.profileId)));
  const referenceDate = input.referenceDate ?? input.anchorDate;
  const firstPhase = phases[0];
  if (!firstPhase) throw new Error('Calendar has no phases');
  return {
    profileId: input.profileId,
    sowingDate: formatDate(sowingDate),
    startDate: firstPhase.startDate,
    totalPreparationDays,
    phases,
    activePhaseIndex: phaseForDate(phases, referenceDate),
    mode: input.mode,
  };
}

export function getProfile(profileId: string): SeedProfile {
  const fallback = SEED_PROFILES[0];
  if (!fallback) throw new Error('No seed profiles available');
  return SEED_PROFILES.find((profile) => profile.id === profileId) ?? fallback;
}

function soakTechnique(profileId: string): string {
  return profileId === 'milkweed' ? 'Room temperature water, short rinse only' : 'Warm water, 24 hours maximum';
}

function warmTechnique(profileId: string): string {
  return profileId === 'milkweed' ? 'Moist paper towel at 18 to 24 °C (64 to 75 °F)' : 'Moist medium in a warm propagator';
}

function coldTechnique(profileId: string): string {
  return profileId === 'milkweed' ? 'Damp sand or vermiculite' : 'Zip bag with damp paper towel or sand/perlite';
}

function sowTechnique(profileId: string): string {
  return profileId === 'lavender' ? 'Fine, free draining seed mix' : 'Sterile, free draining seed mix';
}

export function applyProfile(profileId: string, anchorDate = DEFAULT_INPUT.anchorDate): CalendarInput {
  const profile = getProfile(profileId);
  return {
    mode: 'sowing-date',
    anchorDate,
    profileId: profile.id,
    soakDays: profile.soakDays,
    warmDays: profile.warmDays,
    coldDays: profile.coldDays,
    coldMinC: profile.coldMinC,
    coldMaxC: profile.coldMaxC,
  };
}
