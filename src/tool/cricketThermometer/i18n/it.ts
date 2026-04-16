import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CricketThermometerUI } from '../ui';

const slug = 'termometro-a-grillo';
const title = 'Termometro a Grillo – Calcolatore della Temperatura via Legge di Dolbear';
const description =
  'Senza termometro? Ascolta i grilli. Calcola la temperatura esatta contando i friniti con il nostro calcolatore basato sulla Legge di Dolbear.';

const faqData = [
  {
    question: 'Cos\'è la Legge di Dolbear?',
    answer:
      'Formulata nel 1897 da Amos Dolbear, è un\'osservazione scientifica che ha scoperto una correlazione lineare tra la frequenza del frinito dei grilli e la temperatura dell\'aria ambiente.',
  },
  {
    question: 'Perché i grilli friniscono più velocemente con il caldo?',
    answer:
      'I grilli sono animali a sangue freddo (ectotermi). La velocità dei loro processi metabolici e delle contrazioni muscolari dipende dalla temperatura esterna; più fa caldo, più energia hanno per emettere suoni rapidamente.',
  },
  {
    question: 'Questa misurazione è accurata?',
    answer:
      'È sorprendentemente accurata per specie come il grillo degli alberi (Oecanthus fultoni), con un margine di errore di circa 0,5°C se contato correttamente. Tuttavia, fattori come l\'umidità o il vento possono alterare il risultato.',
  },
  {
    question: 'Quale grillo dovrei usare per il calcolo?',
    answer:
      'La formula originale si basa sul grillo degli alberi. Per il comune grillo campestre, la relazione è simile ma la frequenza tende ad essere leggermente più lenta.',
  },
];

const howToData = [
  {
    name: 'Trova un grillo solitario',
    text: 'Trova un luogo silenzioso di notte dove puoi sentire chiaramente il frinito di un singolo grillo per evitare di confondere i ritmi.',
  },
  {
    name: 'Conta i friniti per 15 secondi',
    text: 'Usa un cronometro e conta quante stridulazioni emette l\'insetto in esattamente 15 secondi.',
  },
  {
    name: 'Inserisci il valore',
    text: 'Tocca il pulsante TAP a ritmo con i friniti per alcuni secondi in modo che il calcolatore calcoli automaticamente i BPM.',
  },
  {
    name: 'Verifica la temperatura',
    text: 'Il sistema applicherà la formula T(°C) = 10 + (N - 40) / 7 per darti una stima del calore ambientale in gradi Celsius.',
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

export const content: ToolLocaleContent<CricketThermometerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti Scientifici',
  bibliography: [
    {
      name: 'The American Naturalist - The Cricket as a Thermometer',
      url: 'https://www.jstor.org/stable/2453256',
    },
    {
      name: 'Wikipedia - Dolbear\'s Law',
      url: 'https://en.wikipedia.org/wiki/Dolbear%27s_law',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guida Completa: Come usare la Legge di Dolbear per Calcolare la Temperatura',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sapevi che puoi conoscere la temperatura esatta solo ascoltando la natura? Nel 1897, il fisico Amos Dolbear scoprì una precisa relazione matematica tra la frequenza dei friniti dei grilli e il calore ambientale. Questo strumento digitalizza quella scoperta per trasformare il tuo telefono in un termometro naturale.',
    },
    {
      type: 'tip',
      title: 'Perché i grilli cantano?',
      html: '<p>Il "canto" del grillo, o <strong>stridulazione</strong>, è in realtà un richiamo d\'accoppiamento. I maschi sfregano le ali (non le zampe) tra loro per creare questo suono. Sorprendentemente, essendo animali a sangue freddo (ectotermi), la velocità di questo sfregamento dipende direttamente dall\'energia termica dell\'aria.</p>',
    },
    {
      type: 'title',
      text: 'La Scienza: Ectotermia e Metabolismo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A differenza dei mammiferi, che mantengono una temperatura corporea costante, gli insetti dipendono dal calore esterno. Le loro reazioni biochimiche seguono l\'<strong>Equazione di Arrhenius</strong>: più calore c\'è, più veloce è la reazione.',
    },
    {
      type: 'paragraph',
      html: 'Ciò significa che affinché i muscoli del grillo si contraggano e sfreghino le ali, hanno bisogno di reazioni enzimatiche. Se fa freddo, queste reazioni sono lente e il frinito è pigro. Se fa caldo, il metabolismo accelera e il canto diventa un trillo frenetico.',
    },
    {
      type: 'title',
      text: 'La Formula di Dolbear',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sebbene esistano variazioni per specie diverse, la formula più famosa è quella per il grillo degli alberi (<em>Oecanthus fultoni</em>). Per ottenere la temperatura in gradi Celsius:',
    },
    {
      type: 'code',
      code: 'T(°C) = 10 + (N - 40) / 7\n\nDove N = numero di friniti al minuto.',
      ariaLabel: 'Formula di Dolbear per calcolare la temperatura dai friniti dei grilli',
    },
    {
      type: 'paragraph',
      html: 'Il nostro strumento lo fa automaticamente: misura il tempo tra i tuoi tocchi, calcola i friniti al minuto (BPM) e applica la formula all\'istante.',
    },
    {
      type: 'title',
      text: 'Fatti Affascinanti',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Termometri dell\'Amore:</strong> Alcune teorie suggeriscono che le femmine preferiscano i maschi che cantano alla frequenza "corretta" per la temperatura attuale, poiché indica che il maschio è sano e ha un metabolismo forte.',
        '<strong>Limite del Freddo:</strong> Sotto i 10°C (50°F), la maggior parte dei grilli smette di cantare perché il loro metabolismo è troppo lento per sostenere lo sforzo muscolare.',
        '<strong>Sincronizzazione:</strong> Nelle notti calde, migliaia di grilli possono sincronizzare i loro friniti, creando un impressionante effetto sonoro a "onda".',
      ],
    },
    {
      type: 'tip',
      title: 'Nota sull\'Accuratezza',
      html: '<p>L\'accuratezza dipende dalla specie di grillo. Questo strumento è calibrato per il grillo campestre comune e il grillo degli alberi. Fattori come l\'umidità o il vento possono alterare il risultato di ±0,5°C.</p>',
    },
  ],
  ui: {
    labelWaiting: 'In attesa...',
    labelTapping: 'Continua a toccare...',
    tapInstruction: 'Ogni volta che senti un frinito',
    btnReset: 'Reset',
    btnSoundOn: 'Suono: On',
    btnSoundOff: 'Suono: Off',
    unitChirpsMin: 'friniti/min',
    faqTitle: 'Domande Frequenti',
    bibliographyTitle: 'Riferimenti Scientifici',
  },
};
