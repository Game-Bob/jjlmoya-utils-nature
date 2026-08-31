import { describe, expect, it } from 'vitest';
import { ALL_TOOLS } from '../tools';

describe('Consumer loader contract', () => {
  it('exposes renderable component loaders and locale content for both library layouts', async () => {
    const tool = ALL_TOOLS.find(({ entry }) => entry.id === 'wildlife-camera-trap-effort-planner');
    expect(tool).toBeDefined();
    if (!tool) return;

    const [component, seo, bibliography] = await Promise.all([
      tool.Component(),
      tool.SEOComponent(),
      tool.BibliographyComponent(),
    ]);
    expect(typeof component.default).toBe('function');
    expect(typeof seo.default).toBe('function');
    expect(typeof bibliography.default).toBe('function');

    const content = await tool.entry.i18n.es!();
    expect((content.ui as { areaPerCameraLabel: string }).areaPerCameraLabel).toBe('Área por cámara');
    expect(content.seo).toHaveLength(10);
    expect(content.bibliography.length).toBeGreaterThan(0);
  });
});
