import type { ToolDefinition } from '../../types';
import { seedStratificationCalendar } from './entry';

export * from './entry';

export const SEED_STRATIFICATION_CALENDAR_TOOL: ToolDefinition = {
  entry: seedStratificationCalendar,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
