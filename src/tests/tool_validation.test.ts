import { describe, it, expect } from 'vitest';
import { ALL_TOOLS, natureCategory } from '../index';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 5 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(5);
    });

    it('natureCategory should be defined', () => {
      expect(natureCategory).toBeDefined();
      expect(natureCategory.i18n).toBeDefined();
    });
  });
});
