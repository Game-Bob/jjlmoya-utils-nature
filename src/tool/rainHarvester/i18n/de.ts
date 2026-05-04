import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { RainHarvesterLocaleContent } from '../index';

const slug = 'regenwasser-ernte-rechner';
const title = 'Regenwasser Ernte Rechner';
const description = 'Berechnen Sie, wie viel Regenwasser Sie von Ihrem Dach sammeln können, und dimensionieren Sie Ihren Speichertank.';

const faqData = [
  {
    question: 'Wie viel Wasser kann ich tatsächlich von meinem Dach sammeln?',
    answer: 'Als Faustregel gilt: Pro Quadratmeter Dachfläche und Millimeter Regen können Sie etwa 1 Liter Wasser sammeln. Es entstehen jedoch Verluste durch Verdunstung und Filtration, die mit dem „Abflussbeiwert“ angepasst werden.',
  },
  {
    question: 'Was ist der Abflussbeiwert?',
    answer: 'Dies ist ein Prozentsatz, der angibt, wie viel Wasser je nach Dachmaterial verloren geht. Ein Metall- oder Ziegeldach ist sehr effizient (0,85-0,95), während ein Kies- oder Erddach viel weniger effizient ist (0,1-0,3).',
  },
  {
    question: 'Wie dimensioniere ich den Speichertank?',
    answer: 'Sie sollten das maximal erwartete Regenvolumen in einem Monat berechnen und es mit Ihrem geschätzten monatlichen Verbrauch abgleichen. Ein zu kleiner Tank läuft bei Stürmen über, und ein zu großer Tank ist unnötig teuer.',
  },
  {
    question: 'Ist gesammeltes Regenwasser als Trinkwasser sicher?',
    answer: 'Nicht direkt. Wasser führt Staub, Vogelkot und Partikel aus der Luft mit sich. Für den menschlichen Verzehr muss es Sedimentfilter, Aktivkohle und eine Desinfektion mittels UV-Licht oder Chlor durchlaufen.',
  },
];

const howToData = [
  {
    name: 'Horizontale Fläche messen',
    text: 'Messen Sie die Länge und Breite Ihrer Dachbasis (nicht die geneigte Fläche, sondern die Fläche, die Schatten auf den Boden wirft).',
  },
  {
    name: 'Lokalen Niederschlag prüfen',
    text: 'Suchen Sie beim nationalen Wetterdienst nach dem durchschnittlichen jährlichen oder monatlichen Niederschlag in Ihrer Region in Millimetern (mm).',
  },
  {
    name: 'Materialeffizienz anwenden',
    text: 'Wählen Sie Ihr Dachmaterial in unserem Rechner aus, um das Wasser abzuziehen, das durch Absorption oder Hitze verloren geht.',
  },
  {
    name: 'Benötigtes Volumen berechnen',
    text: 'Nutzen Sie das Ergebnis des jährlichen Ertrags in Litern, um einen Tank zu wählen, der für Trockenperioden mindestens 20-30 % der Gesamternte speichern kann.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

export const content: RainHarvesterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Dach-Einstellungen',
    headResults: 'Ernte-Potenzial',
    labelArea: 'Dachfläche',
    labelRainfall: 'Jährlicher Niederschlag',
    labelMaterial: 'Dachmaterial',
    unitM2: 'm²',
    unitMm: 'mm',
    unitLiters: 'Liter',
    helpRainfall: 'Unbekannt? Suchen Sie bei Google nach „durchschnittlicher jährlicher Niederschlag [Ihre Stadt]“.',
    efficiencyTitle: 'Effizienzfaktor',
    efficiencyNote: 'Für Filter und Verdunstung wird ein Verlust von 10 % angesetzt.',
    resultTitle: 'Jährliches Erntepotenzial',
    equivalenciesTitle: 'Praktische Entsprechungen',
    labelFlushes: 'Toilettenspülungen',
    labelShowers: 'Duschen (10 Min.)',
    labelGarden: 'Gartenbewässerung',
    gardenArea: '(50m²)',
    materialMetal: 'Metall / Glasierte Ziegel',
    materialClay: 'Dachziegel / Ton',
    materialConcrete: 'Beton / Asphalt',
    materialGravel: 'Kies / Gründach',
  },
  seo: [
    {
      type: 'title',
      text: 'Regenwassernutzung: Autonomie und Nachhaltigkeit',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die meisten Hausbesitzer sind sich des Potenzials ihres eigenen Daches nicht bewusst. Ein Standarddach kann jedes Jahr Tausende Liter kostenloses Wasser auffangen. Dieses Tool quantifiziert dieses Potenzial, sodass Sie genau berechnen können, wie viel Wasser Sie „ernten“ können, und die ideale Tankgröße für die Speicherung bestimmen können.',
    },
    {
      type: 'title',
      text: 'Berechnungslogik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Grundformel für die Regenwassersammlung ist einfach, aber wirkungsvoll:',
    },
    {
      type: 'paragraph',
      html: '<code style="display:block;padding:1rem;background:var(--bg-alt);border-radius:0.5rem;margin:1rem 0;font-family:monospace;">Volumen = Fläche × Niederschlag × Abflussbeiwert × Filtereffizienz</code>',
    },
    {
      type: 'list',
      items: [
        '<strong>Fläche:</strong> Ihre Dachgrundfläche (projizierte Länge × Breite).',
        '<strong>Niederschlag:</strong> Fallender Regen in Millimetern.',
        '<strong>Beiwert:</strong> Wie viel Wasser Ihr Dach verliert (z. B. Absorption).',
        '<strong>Effizienz:</strong> Verluste in Vor-Tank-Filtern (~10 %).',
      ],
    },
    {
      type: 'title',
      text: 'Warum Regenwasser sammeln?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Ersparnis:</strong> Reduzieren Sie Ihre Wasserrechnung erheblich.',
        '<strong>Gartenarbeit:</strong> Pflanzen lieben Wasser ohne Chlor oder Kalk.',
        '<strong>Resilienz:</strong> Behalten Sie eine Notreserve für den Fall von Unterbrechungen.',
      ],
    },
    {
      type: 'title',
      text: 'Dimensionierung des Tanks',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der häufigste Fehler ist der Kauf eines Tanks, der nur auf dem Budget basiert. Wenn er zu klein ist, verschwenden Sie Tausende Liter durch Überlauf. Wenn er zu groß ist, geben Sie unnötig Geld aus. Eine allgemeine Regel ist, eine Kapazität für die Speicherung von <strong>3 Monaten</strong> des durchschnittlichen Niederschlags in Ihrer Region zu haben, um Trockenperioden zu überbrücken.',
    },
  ],
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
