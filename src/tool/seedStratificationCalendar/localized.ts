import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../types';
import { bibliography } from './bibliography';
import type { SeedStratificationCalendarUI } from './ui';

export interface SeedCalendarTranslation {
  locale: string;
  title: string;
  description: string;
  faq: { question: string; answer: string }[];
  howTo: { name: string; text: string }[];
  seoTitle: string;
  seoIntro: string;
  seoModes: string;
  seoPhaseTitle: string;
  seoPhaseItems: string[];
  seoEvidenceTitle: string;
  seoEvidence: string;
  seoTipTitle: string;
  seoTip: string;
  seoChecksTitle: string;
  seoChecks: string[];
  seoLimitsTitle: string;
  seoLimits: string;
  ui: SeedStratificationCalendarUI;
}

const localizedSlugs: Record<string, string> = {
  de: 'saatgut-stratifizierungskalender',
  es: 'calendario-estratificacion-semillas',
  fr: 'calendrier-stratification-graines',
  id: 'kalender-stratifikasi-benih',
  it: 'calendario-stratificazione-semi',
  nl: 'kalender-zaadstratificatie',
  pl: 'kalendar-stratyfikacji-nasion',
  pt: 'calendario-estratificacao-sementes',
  ru: 'kalendar-stratifikacii-semyan',
  sv: 'kalender-frostratifiering',
  tr: 'tohum-tabakalandirma-takvimi',
};

export function createSeedCalendarContent(copy: SeedCalendarTranslation): ToolLocaleContent<SeedStratificationCalendarUI> {
  const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: copy.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
  const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: copy.title, description: copy.description, step: copy.howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
  const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: copy.title, description: copy.description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: copy.locale };
  return {
    slug: localizedSlugs[copy.locale] ?? 'seed-stratification-calendar',
    title: copy.title,
    description: copy.description,
    faq: copy.faq,
    bibliography,
    howTo: copy.howTo,
    schemas: [faqSchema, howToSchema, appSchema],
    seo: [
      { type: 'title', text: copy.seoTitle, level: 2 },
      { type: 'paragraph', html: copy.seoIntro },
      { type: 'paragraph', html: copy.seoModes },
      { type: 'title', text: copy.seoPhaseTitle, level: 2 },
      { type: 'list', items: copy.seoPhaseItems },
      { type: 'title', text: copy.seoEvidenceTitle, level: 2 },
      { type: 'paragraph', html: copy.seoEvidence },
      { type: 'tip', title: copy.seoTipTitle, html: `<p>${copy.seoTip}</p>` },
      { type: 'title', text: copy.seoChecksTitle, level: 2 },
      { type: 'list', items: copy.seoChecks },
      { type: 'title', text: copy.seoLimitsTitle, level: 2 },
      { type: 'paragraph', html: copy.seoLimits },
    ],
    ui: copy.ui,
  };
}
