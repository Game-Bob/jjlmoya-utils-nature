import type { NatureCategoryEntry } from '../types';
import { cricketThermometer } from '../tool/cricketThermometer/index';
import { seedCalculator } from '../tool/seedCalculator/index';
import { rainHarvester } from '../tool/rainHarvester/index';
import { digitalCarbon } from '../tool/digitalCarbon/index';

export const natureCategory: NatureCategoryEntry = {
  icon: 'mdi:leaf',
  tools: [cricketThermometer, seedCalculator, rainHarvester, digitalCarbon],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

