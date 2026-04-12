export const FILTER_EFFICIENCY = 0.9;

export const ROOF_MATERIALS = [
  { id: 'metal', coefficient: 0.95 },
  { id: 'clay', coefficient: 0.85 },
  { id: 'concrete', coefficient: 0.85 },
  { id: 'gravel', coefficient: 0.6 },
] as const;

export function calculateNetVolume(area: number, rainfall: number, coefficient: number): number {
  return area * rainfall * coefficient * FILTER_EFFICIENCY;
}
