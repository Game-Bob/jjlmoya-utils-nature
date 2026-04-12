export function calculateSpacing(population: number, rowWidthCm: number): number {
  return 10_000_000 / (population * rowWidthCm);
}

export function calculateHz(speedKmh: number, spacingCm: number): number {
  return (speedKmh * 27.778) / spacingCm;
}

export const SPEED_OPTIONS = [4, 5, 6, 7, 8, 9, 10, 12];

export const CROPS = [
  { id: 'corn', icon: 'mdi:corn', pop: 85000, row: 70 },
  { id: 'silage', icon: 'mdi:grass', pop: 95000, row: 70 },
  { id: 'sunflower', icon: 'mdi:flower', pop: 60000, row: 70 },
  { id: 'sorghum', icon: 'mdi:grain', pop: 250000, row: 52 },
  { id: 'soy', icon: 'mdi:sprout', pop: 350000, row: 52 },
  { id: 'beet', icon: 'mdi:carrot', pop: 110000, row: 50 },
  { id: 'rapeseed', icon: 'mdi:flower-pollen', pop: 500000, row: 45 },
] as const;
