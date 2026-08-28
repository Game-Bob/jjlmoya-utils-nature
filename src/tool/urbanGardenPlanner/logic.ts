export interface GardenPlanInput {
  gardenAreaM2: number;
  substrateDepthCm: number;
  collectionAreaM2: number;
  rainfallMm: number;
}

export interface GardenPlanResult {
  gardenAreaM2: number;
  substrateDepthCm: number;
  collectionAreaM2: number;
  rainfallMm: number;
  soilVolumeLiters: number;
  grossRainwaterLiters: number;
  harvestedWaterLiters: number;
  gardenWaterDepthMm: number;
  wateringAreaAt10Mm: number;
}

export const DEFAULT_INPUTS: GardenPlanInput = {
  gardenAreaM2: 12,
  substrateDepthCm: 30,
  collectionAreaM2: 25,
  rainfallMm: 20,
};

export const RUNOFF_FACTOR = 0.85;
export const COLLECTION_FACTOR = 0.9;

function positive(value: number): number {
  return Number.isFinite(value) && value > 0 ? value : 0;
}

export function calculateGardenPlan(input: GardenPlanInput): GardenPlanResult {
  const gardenAreaM2 = positive(input.gardenAreaM2);
  const substrateDepthCm = positive(input.substrateDepthCm);
  const collectionAreaM2 = positive(input.collectionAreaM2);
  const rainfallMm = positive(input.rainfallMm);
  const grossRainwaterLiters = collectionAreaM2 * rainfallMm;
  const harvestedWaterLiters = grossRainwaterLiters * RUNOFF_FACTOR * COLLECTION_FACTOR;
  const soilVolumeLiters = gardenAreaM2 * substrateDepthCm * 10;
  const gardenWaterDepthMm = gardenAreaM2 > 0 ? harvestedWaterLiters / gardenAreaM2 : 0;

  return {
    gardenAreaM2,
    substrateDepthCm,
    collectionAreaM2,
    rainfallMm,
    soilVolumeLiters,
    grossRainwaterLiters,
    harvestedWaterLiters,
    gardenWaterDepthMm,
    wateringAreaAt10Mm: harvestedWaterLiters / 10,
  };
}
