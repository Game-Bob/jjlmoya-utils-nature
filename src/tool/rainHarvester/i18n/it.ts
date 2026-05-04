import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { RainHarvesterLocaleContent } from '../index';

const slug = 'calcolatore-acqua-piovana';
const title = 'Calcolatore per il Recupero dell\'Acqua Piovana';
const description = 'Calcola quanta acqua piovana puoi raccogliere dal tuo tetto e dimensiona il tuo serbatoio di accumulo.';

const faqData = [
  {
    question: 'Quanta acqua posso effettivamente raccogliere dal mio tetto?',
    answer: 'La regola generale è che per ogni metro quadrato di tetto e ogni millimetro di pioggia, puoi raccogliere circa 1 litro d\'acqua. Esistono però perdite per evaporazione e filtrazione regolate dal "coefficiente di deflusso".',
  },
  {
    question: 'Cos\'è il coefficiente di deflusso?',
    answer: 'È una percentuale che indica quanta acqua viene persa a seconda del materiale del tetto. Un tetto in metallo o tegole è molto efficiente (0,85-0,95), mentre un tetto in ghiaia o terra è molto meno efficiente (0,1-0,3).',
  },
  {
    question: 'Come dimensiono il serbatoio di accumulo?',
    answer: 'Dovresti calcolare il volume massimo di pioggia previsto in un mese e incrociarlo con il tuo consumo mensile stimato. Un serbatoio troppo piccolo traboccherà durante i temporali, e uno troppo grande sarà inutilmente costoso.',
  },
  {
    question: 'È sicuro bere l\'acqua piovana raccolta?',
    answer: 'Non direttamente. L\'acqua trasporta polvere, escrementi di uccelli e frammenti trasportati dall\'aria. Per il consumo umano, deve passare attraverso filtri per sedimenti, carboni attivi e disinfezione tramite luce UV o cloro.',
  },
];

const howToData = [
  {
    name: 'Misura la superficie orizzontale',
    text: 'Misura la lunghezza e la larghezza della base del tuo tetto (non la superficie inclinata, ma l\'area che proietta l\'ombra sul terreno).',
  },
  {
    name: 'Controlla la piovosità locale',
    text: 'Cerca nel servizio meteorologico nazionale la precipitazione media annuale o mensile nella tua zona in millimetri (mm).',
  },
  {
    name: 'Applica l\'efficienza del materiale',
    text: 'Seleziona il materiale del tuo tetto nel nostro calcolatore per detrarre l\'acqua che andrà persa per assorbimento o calore.',
  },
  {
    name: 'Calcola il volume richiesto',
    text: 'Usa il risultato dei litri annuali per scegliere un serbatoio che possa contenere almeno il 20-30% del raccolto totale per i periodi di siccità.',
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
  inLanguage: 'it',
};

export const content: RainHarvesterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Impostazioni Tetto',
    headResults: 'Potenziale di Raccolta',
    labelArea: 'Area del Tetto',
    labelRainfall: 'Precipitazioni Annuali',
    labelMaterial: 'Materiale del Tetto',
    unitM2: 'm²',
    unitMm: 'mm',
    unitLiters: 'Litri',
    helpRainfall: 'Non lo sai? Cerca "precipitazioni medie annuali [tua città]" su Google.',
    efficiencyTitle: 'Fattore di Efficienza',
    efficiencyNote: 'Viene applicata una perdita del 10% per filtri ed evaporazione.',
    resultTitle: 'Potenziale di Raccolta Annuale',
    equivalenciesTitle: 'Equivalenti Pratici',
    labelFlushes: 'Scarichi del WC',
    labelShowers: 'Docce (10 min)',
    labelGarden: 'Irrigazione Giardino',
    gardenArea: '(50m²)',
    materialMetal: 'Metallo / Tegole Smaltate',
    materialClay: 'Tegole in cotto / Argilla',
    materialConcrete: 'Cemento / Asfalto',
    materialGravel: 'Ghiaia / Tetto Verde',
  },
  seo: [
    {
      type: 'title',
      text: 'Recupero dell\'Acqua Piovana: Autonomia e Sostenibilità',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La maggior parte dei proprietari di case non è consapevole del potenziale del proprio tetto. Un tetto standard può catturare migliaia di litri di acqua gratuita ogni anno. Questo strumento quantifica tale potenziale, permettendoti di calcolare esattamente quanta acqua puoi "raccogliere" e determinare la dimensione ideale del serbatoio per l\'accumulo.',
    },
    {
      type: 'title',
      text: 'Logica di Calcolo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La formula base per la raccolta dell\'acqua piovana è semplice ma potente:',
    },
    {
      type: 'paragraph',
      html: '<code style="display:block;padding:1rem;background:var(--bg-alt);border-radius:0.5rem;margin:1rem 0;font-family:monospace;">Volume = Area × Precipitazioni × Coefficiente di Deflusso × Efficienza Filtro</code>',
    },
    {
      type: 'list',
      items: [
        '<strong>Area:</strong> L\'ingombro del tetto (lunghezza × larghezza proiettata).',
        '<strong>Precipitazioni:</strong> Pioggia caduta in millimetri.',
        '<strong>Coefficiente:</strong> Quanta acqua perde il tuo tetto (es. assorbimento).',
        '<strong>Efficienza:</strong> Perdite nei filtri pre-serbatoio (~10%).',
      ],
    },
    {
      type: 'title',
      text: 'Perché Raccogliere l\'Acqua Piovana?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Risparmio:</strong> Riduci significativamente la bolletta dell\'acqua.',
        '<strong>Giardinaggio:</strong> Le piante amano l\'acqua senza cloro o calcare.',
        '<strong>Resilienza:</strong> Mantieni una riserva di emergenza in caso di interruzioni.',
      ],
    },
    {
      type: 'title',
      text: 'Dimensionamento del Serbatoio',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'errore più comune è acquistare un serbatoio basandosi solo sul budget. Se è troppo piccolo, sprecherai migliaia di litri a causa del troppo pieno. Se è troppo grande, spenderai soldi inutilmente. Una regola generale è di avere una capacità per conservare <strong>3 mesi</strong> di piovosità media nella tua zona, permettendoti di superare le stagioni secche.',
    },
  ],
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
