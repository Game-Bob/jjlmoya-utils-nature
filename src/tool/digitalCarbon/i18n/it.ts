import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DigitalCarbonLocaleContent } from '../index';

const slug = 'calcolatore-impronta-carbonio-digitale';
const title = 'Calcolatore dell\'Impronta di Carbonio Digitale';
const description = 'Analizza l\'impatto ambientale di qualsiasi pagina web. Stima il consumo energetico e le emissioni di CO₂ per visita.';

const faqData = [
  {
    question: 'Cos\'è l\'impronta di carbonio di un sito web?',
    answer: 'È la quantità di gas serra, principalmente CO₂, emessa nell\'atmosfera come risultato dell\'energia consumata dai server, dalle reti di trasmissione e dal dispositivo dell\'utente per caricare e visualizzare una pagina web.',
  },
  {
    question: 'Come si misura l\'impatto di un sito web?',
    answer: 'Viene solitamente misurato in grammi di CO₂ equivalente (gCO₂e) per visita. Un sito web efficiente emette meno di 0,2g di CO₂, mentre una pagina non ottimizzata può superare i 2 o 3g per caricamento.',
  },
  {
    question: 'Perché internet inquina?',
    answer: 'Perché tutta l\'infrastruttura necessaria (data center, cavi sottomarini, router WiFi, smartphone) funziona con elettricità che, in gran parte del mondo, proviene ancora dalla combustione di carbone o gas.',
  },
  {
    question: 'Come posso ridurre la CO₂ del mio sito web?',
    answer: 'Il modo più efficace è ridurre il peso della pagina: ottimizzare le immagini (WebP), minificare i file CSS e JS, utilizzare il lazy loading e scegliere un fornitore di hosting che utilizzi energia rinnovabile.',
  },
];

const howToData = [
  {
    name: 'Inserisci l\'URL',
    text: 'Digita l\'indirizzo web della pagina che vuoi analizzare nel campo di input.',
  },
  {
    name: 'Avvia l\'analisi',
    text: 'Clicca sul pulsante analizza per permettere al nostro strumento di stimare il peso delle risorse della pagina.',
  },
  {
    name: 'Controlla il tuo punteggio',
    text: 'Ottieni un voto da A+ a F basato sull\'efficienza energetica del sito web analizzato.',
  },
  {
    name: 'Applica i miglioramenti',
    text: 'Usa l\'elenco di consigli personalizzati per ridurre il peso del tuo sito e il suo impatto ambientale.',
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

export const content: DigitalCarbonLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Analizzatore URL',
    headResults: 'Risultato impatto',
    headTips: 'Consigli di ottimizzazione',
    labelUrl: 'URL della pagina',
    btnAnalyze: 'Analizza sito web',
    btnAnalyzing: 'Analizzando...',
    placeholderUrl: 'https://esempio.it',
    errorInvalidUrl: 'Inserisci un URL valido.',
    errorFetchFailed: 'Impossibile analizzare il sito web. Prova un altro URL.',
    
    resultTitle: 'Impronta di carbonio digitale',
    resultSubtitle: 'Efficienza stimata della pagina',
    co2PerVisit: 'CO₂ per visita',
    energyPerVisit: 'Energia consumata',
    co2Annual: 'CO₂ annuale (100k visite)',
    impactTitle: 'Impatto annuale reale',
    impactTrees: 'Alberi necessari',
    impactKm: 'km percorsi in auto (circa)',
    treesLabel: 'Alberi',
    kmLabel: 'Chilometri',
    
    ratingExcellent: 'Eccellente. Questa pagina consuma pochissima energia rispetto alla media globale.',
    ratingVeryGood: 'Ottima efficienza. La pagina è ben ottimizzata e ha un impatto minimo.',
    ratingGood: 'Efficienza accettabile. C\'è margine di miglioramento ma è sotto la media.',
    ratingAverage: 'Media. La pagina consuma quanto previsto sul web attuale.',
    ratingPoor: 'Sopra la media. Considera di ottimizzare immagini, script e font.',
    ratingVeryPoor: 'Alto impatto. Il peso della pagina è significativo e dovrebbe essere ridotto.',
    ratingCritical: 'Impatto molto alto. C\'è una grande opportunità per ridurre le dimensioni della pagina.',
    
    tipImages: 'Converti le immagini in WebP o AVIF per ridurne il peso fino al 70%.',
    tipCompression: 'Abilita Brotli o GZIP sul server per comprimere le risorse.',
    tipLazyLoading: 'Usa il lazy loading per immagini e video fuori dal viewport.',
    tipHosting: 'Scegli un hosting con energia rinnovabile (Cloudflare, Netlify, Vercel).',
    tipThirdParty: 'Rimuovi script di analisi non necessari e widget di terze parti.',
    tipFonts: 'Carica solo i pesi tipografici che usi effettivamente.',
    tipCache: 'Configura gli header della cache HTTP per evitare nuovi download.',
  },
  faq: faqData,
  howTo: howToData,
  seo: [
    {
      type: 'title',
      text: 'Calcolatore Impronta di Carbonio Digitale: quanta CO₂ genera il tuo sito web',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Scopri il reale impatto ambientale di qualsiasi pagina web. Analizza il suo peso, stima i grammi di CO₂ per visita e impara come ridurre l\'inquinamento digitale dei tuoi progetti.',
    },
    {
      type: 'title',
      text: 'Cos\'è l\'impronta di carbonio digitale di un sito web?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ogni volta che apri una pagina web, il tuo dispositivo, il router di casa, i cavi sottomarini e i server dall\'altra parte del mondo consumano elettricità. Tale elettricità è ancora in gran parte generata bruciando combustibili fossili. Il risultato: una quantità reale di <strong>CO₂ emessa nell\'atmosfera per ogni visita</strong>.',
    },
    {
      type: 'paragraph',
      html: 'L\'<strong>impronta di carbonio digitale</strong> di un sito web si misura in grammi di CO₂ equivalente (gCO₂e) per visita. Un sito web medio genera circa 0,5g di CO₂ per caricamento. Anche se sembra insignificante, un sito con 100.000 visite mensili può emettere più di 600kg di CO₂ all\'anno, l\'equivalente di guidare un\'auto a benzina per più di 3.000 km.',
    },
    {
      type: 'title',
      text: 'Come si calcola la CO₂ di un sito web?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il modello di calcolo utilizzato si basa sugli standard del <strong>Sustainable Web Design Model</strong>, che divide il consumo energetico in quattro segmenti principali:',
    },
    {
      type: 'card',
      title: 'Trasferimento dati',
      html: 'Il peso totale della pagina determina quanti gigabyte vengono trasferiti. Lo standard considera <code>0,81 kWh/GB</code> per l\'infrastruttura di rete.',
    },
    {
      type: 'card',
      title: 'Dispositivo utente',
      html: 'Il computer o il cellulare che riceve la pagina consuma energia. Si stima un consumo di <code>0,52 kWh/GB</code> di dati elaborati.',
    },
    {
      type: 'card',
      title: 'Intensità di carbonio',
      html: 'Viene utilizzato il valore di riferimento globale di <code>442 gCO₂/kWh</code> per convertire il consumo energetico in emissioni reali di carbonio.',
    },
    {
      type: 'card',
      title: 'Fattore di caching',
      html: 'Il modello applica un fattore di <code>0,75</code> supponendo che il 25% degli utenti abbia già le risorse in cache.',
    },
    {
      type: 'title',
      text: 'Cosa significa la valutazione di efficienza?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>A+ e A:</strong> Meno di 0,2g di CO₂. Siti molto leggeri e ottimizzati.',
        '<strong>B:</strong> Tra 0,2 e 0,5g. Sotto la media globale.',
        '<strong>C:</strong> Tra 0,5 e 1g. La media per il web attuale.',
        '<strong>D e E:</strong> Tra 1 e 4g. Pagine pesanti con impatto rilevante.',
        '<strong>F:</strong> Più di 4g per visita. Impatto molto alto.',
      ],
    },
    {
      type: 'title',
      text: 'Come ridurre l\'impronta di carbonio del tuo sito web',
      level: 2,
    },
    {
      type: 'card',
      title: 'Ottimizzazione immagini',
      html: 'Usa formati come <strong>WebP o AVIF</strong> per ridurre le dimensioni fino all\'80% senza perdite di qualità evidenti.',
    },
    {
      type: 'card',
      title: 'Compressione server',
      html: 'Abilitare <strong>Brotli o GZIP</strong> riduce la dimensione dei file di testo fino al 70%.',
    },
    {
      type: 'card',
      title: 'Hosting sostenibile',
      html: 'Scegliere un provider con <strong>energia rinnovabile certificata</strong> può ridurre l\'impatto quasi del 100%.',
    },
    {
      type: 'card',
      title: 'Cache e CDN',
      html: 'Configura <strong>header di cache lunghi</strong> per evitare download non necessari.',
    },
    {
      type: 'title',
      text: 'Il reale impatto di internet sul clima',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Internet rappresenta tra il <strong>2% e il 4% delle emissioni globali di CO₂</strong>, una cifra paragonabile all\'industria dell\'aviazione. Ogni kilobyte rimosso non solo rende il tuo sito più veloce: riduce in modo misurabile l\'inquinamento digitale.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
