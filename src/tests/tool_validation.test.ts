import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { natureCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 4 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(4);
    });

    it('natureCategory should be defined', () => {
      expect(natureCategory).toBeDefined();
      expect(natureCategory.i18n).toBeDefined();
    });
  });
});

