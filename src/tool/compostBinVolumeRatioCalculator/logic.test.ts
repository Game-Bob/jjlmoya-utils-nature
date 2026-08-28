import { describe, expect, it } from 'vitest';
import { applyPreset, calculateCompost, convertInputs, type CompostInputs } from './logic';

const base: CompostInputs = {
  unitSystem: 'metric',
  shape: 'rectangular',
  width: 100,
  depth: 50,
  diameter: 60,
  height: 80,
  browns: 20,
  greens: 10,
  moisture: 'sponge',
};

describe('compost bin calculations', () => {
  it('calculates a rectangular capacity and a balanced ratio', () => {
    const result = calculateCompost(base);
    expect(result.capacityLiters).toBe(400);
    expect(result.materialsLiters).toBe(30);
    expect(result.ratio).toBe(2);
    expect(result.status).toBe('balanced');
  });

  it('calculates a cylindrical capacity', () => {
    const result = calculateCompost({ ...base, shape: 'cylindrical', diameter: 100, height: 100 });
    expect(result.capacityLiters).toBeCloseTo(785.398, 2);
  });

  it('identifies ratio and capacity warnings', () => {
    expect(calculateCompost({ ...base, browns: 5 }).status).toBe('too-green');
    expect(calculateCompost({ ...base, browns: 50 }).status).toBe('too-brown');
    expect(calculateCompost({ ...base, greens: 0 }).status).toBe('no-greens');
    expect(calculateCompost({ ...base, browns: 300, greens: 200 }).status).toBe('overfilled');
  });

  it('identifies moisture states', () => {
    expect(calculateCompost({ ...base, moisture: 'dry' }).moistureStatus).toBe('dry');
    expect(calculateCompost({ ...base, moisture: 'wet' }).moistureStatus).toBe('wet');
  });

  it('converts dimensions and volumes between systems', () => {
    const imperial = convertInputs({ ...base, width: 25.4, depth: 25.4, height: 25.4, browns: 3.785411784, greens: 3.785411784 }, 'imperial');
    expect(imperial.width).toBeCloseTo(10, 5);
    expect(imperial.browns).toBeCloseTo(1, 5);
    expect(convertInputs(imperial, 'metric').height).toBeCloseTo(25.4, 5);
  });

  it('returns independent preset states', () => {
    const preset = applyPreset('leafy', 'imperial');
    expect(preset.shape).toBe('cylindrical');
    expect(preset.unitSystem).toBe('imperial');
    expect(preset.moisture).toBe('dry');
  });
});
