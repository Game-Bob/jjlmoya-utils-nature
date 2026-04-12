export function calculateTemperature(chirpsPerMinute: number): number {
  return 10 + (chirpsPerMinute - 40) / 7;
}

export const MIN_TEMP_DISPLAY = 0;
export const MAX_TEMP_DISPLAY = 45;
