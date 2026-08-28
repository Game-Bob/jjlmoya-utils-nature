export type UnitSystem = "metric" | "imperial";
export type BinShape = "rectangular" | "cylindrical";
export type MoistureLevel = "dry" | "sponge" | "wet";

export interface CompostInputs {
  unitSystem: UnitSystem;
  shape: BinShape;
  width: number;
  depth: number;
  diameter: number;
  height: number;
  browns: number;
  greens: number;
  moisture: MoistureLevel;
}

export interface CompostResult {
  capacityLiters: number;
  materialsLiters: number;
  ratio: number | null;
  fillPercent: number;
  targetBrownLowLiters: number;
  targetBrownHighLiters: number;
  status: "balanced" | "too-green" | "too-brown" | "no-greens" | "overfilled";
  moistureStatus: "dry" | "good" | "wet";
}

const INCH_TO_CM = 2.54;
const GALLON_TO_LITERS = 3.785411784;
const PRESETS: Record<"kitchen" | "garden" | "leafy", CompostInputs> = {
  kitchen: {
    unitSystem: "metric",
    shape: "rectangular",
    width: 60,
    depth: 45,
    diameter: 55,
    height: 70,
    browns: 18,
    greens: 8,
    moisture: "sponge",
  },
  garden: {
    unitSystem: "metric",
    shape: "rectangular",
    width: 100,
    depth: 100,
    diameter: 70,
    height: 90,
    browns: 90,
    greens: 35,
    moisture: "sponge",
  },
  leafy: {
    unitSystem: "metric",
    shape: "cylindrical",
    width: 80,
    depth: 80,
    diameter: 120,
    height: 100,
    browns: 180,
    greens: 45,
    moisture: "dry",
  },
};

function positive(value: number): number {
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function toMetric(value: number, unitSystem: UnitSystem): number {
  return unitSystem === "imperial" ? value * INCH_TO_CM : value;
}

function toLiters(value: number, unitSystem: UnitSystem): number {
  return unitSystem === "imperial" ? value * GALLON_TO_LITERS : value;
}

function fromMetric(value: number, unitSystem: UnitSystem): number {
  return unitSystem === "imperial" ? value / INCH_TO_CM : value;
}

function fromLiters(value: number, unitSystem: UnitSystem): number {
  return unitSystem === "imperial" ? value / GALLON_TO_LITERS : value;
}

function getStatus(
  capacityLiters: number,
  fillPercent: number,
  ratio: number | null,
): CompostResult["status"] {
  if (capacityLiters > 0 && fillPercent > 100) return "overfilled";
  if (ratio === null) return "no-greens";
  if (ratio < 2) return "too-green";
  if (ratio > 3) return "too-brown";
  return "balanced";
}

function getMoistureStatus(
  level: MoistureLevel,
): CompostResult["moistureStatus"] {
  if (level === "dry") return "dry";
  if (level === "wet") return "wet";
  return "good";
}

function capacityInLiters(inputs: CompostInputs): number {
  const height = toMetric(positive(inputs.height), inputs.unitSystem);
  if (inputs.shape === "cylindrical") {
    const radius = toMetric(positive(inputs.diameter), inputs.unitSystem) / 2;
    return (Math.PI * radius * radius * height) / 1000;
  }
  const width = toMetric(positive(inputs.width), inputs.unitSystem);
  const depth = toMetric(positive(inputs.depth), inputs.unitSystem);
  return (width * depth * height) / 1000;
}

export function calculateCompost(inputs: CompostInputs): CompostResult {
  const capacityLiters = capacityInLiters(inputs);
  const brownsLiters = toLiters(positive(inputs.browns), inputs.unitSystem);
  const greensLiters = toLiters(positive(inputs.greens), inputs.unitSystem);
  const materialsLiters = brownsLiters + greensLiters;
  const ratio = greensLiters > 0 ? brownsLiters / greensLiters : null;
  const fillPercent =
    capacityLiters > 0 ? (materialsLiters / capacityLiters) * 100 : 0;
  const status = getStatus(capacityLiters, fillPercent, ratio);
  const moistureStatus = getMoistureStatus(inputs.moisture);
  return {
    capacityLiters,
    materialsLiters,
    ratio,
    fillPercent,
    targetBrownLowLiters: greensLiters * 2,
    targetBrownHighLiters: greensLiters * 3,
    status,
    moistureStatus,
  };
}

export function convertInputs(
  inputs: CompostInputs,
  unitSystem: UnitSystem,
): CompostInputs {
  if (inputs.unitSystem === unitSystem) return { ...inputs };
  const convertDimension = (value: number): number =>
    fromMetric(toMetric(value, inputs.unitSystem), unitSystem);
  const convertVolume = (value: number): number =>
    fromLiters(toLiters(value, inputs.unitSystem), unitSystem);
  return {
    ...inputs,
    unitSystem,
    width: convertDimension(inputs.width),
    depth: convertDimension(inputs.depth),
    diameter: convertDimension(inputs.diameter),
    height: convertDimension(inputs.height),
    browns: convertVolume(inputs.browns),
    greens: convertVolume(inputs.greens),
  };
}

export function applyPreset(
  name: "kitchen" | "garden" | "leafy",
  unitSystem: UnitSystem,
): CompostInputs {
  return convertInputs(PRESETS[name], unitSystem);
}
