import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

describe('Locale Completeness Validation', () => {


  it('should have at least 1 tool registered', () => {
    expect(ALL_TOOLS.length).toBeGreaterThan(0);
  });
});

