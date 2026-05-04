import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DigitalCarbonLocaleContent } from '../index';

const slug = 'digitale-co2-voetafdruk-calculator';
const title = 'Digitale CO₂ voetafdruk calculator';
const description = 'Analyseer de milieu-impact van elke webpagina. Schat het energieverbruik en de CO₂-uitstoot per bezoek.';

const faqData = [
  {
    question: 'Wat is de CO₂-voetafdruk van een website?',
    answer: 'Het is de hoeveelheid broeikasgassen, voornamelijk CO₂, die in de atmosfeer wordt uitgestoten als gevolg van de energie die wordt verbruikt door servers, transmissienetwerken en het apparaat van de gebruiker om een webpagina te laden en weer te geven.',
  },
  {
    question: 'Hoe wordt de impact van een website gemeten?',
    answer: 'Het wordt meestal gemeten in grammen CO₂-equivalent (gCO₂e) per bezoek. Een efficiënte website stoot minder dan 0,2 g CO₂ uit, terwijl een niet-geoptimaliseerde pagina meer dan 2 of 3 g per laadbeurt kan overschrijden.',
  },
  {
    question: 'Waarom is internet vervuilend?',
    answer: 'Omdat alle noodzakelijke infrastructuur (datacenters, onderzeese kabels, wifi-routers, smartphones) werkt op elektriciteit die in een groot deel van de wereld nog steeds afkomstig is van het verbranden van kolen of gas.',
  },
  {
    question: 'Hoe kan ik de CO₂ van mijn website verminderen?',
    answer: 'De meest effectieve manier is om het paginagewicht te verminderen: optimaliseer afbeeldingen (WebP), verklein CSS- en JS-bestanden, gebruik lazy loading en kies een hostingprovider die hernieuwbare energie gebruikt.',
  },
];

const howToData = [
  {
    name: 'Voer de URL in',
    text: 'Typ het webadres van de pagina die u wilt analyseren in het invoerveld.',
  },
  {
    name: 'Start analyse',
    text: 'Klik op de analyseknop om onze tool het gewicht van de paginabronnen te laten schatten.',
  },
  {
    name: 'Bekijk uw beoordeling',
    text: 'Ontvang een cijfer van A+ tot F op basis van de energie-efficiëntie van de geanalyseerde website.',
  },
  {
    name: 'Verbeteringen toepassen',
    text: 'Gebruik de lijst met gepersonaliseerde tips om uw paginagewicht en milieu-impact te verminderen.',
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
  inLanguage: 'nl',
};

export const content: DigitalCarbonLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'URL-analyzer',
    headResults: 'Impactresultaat',
    headTips: 'Optimalisatietips',
    labelUrl: 'Pagina-URL',
    btnAnalyze: 'Website analyseren',
    btnAnalyzing: 'Analyseren...',
    placeholderUrl: 'https://voorbeeld.nl',
    errorInvalidUrl: 'Voer een geldige URL in.',
    errorFetchFailed: 'Kon de website niet analyseren. Probeer een andere URL.',
    
    resultTitle: 'Digitale CO₂-voetafdruk',
    resultSubtitle: 'Geschatte pagina efficiëntie',
    co2PerVisit: 'CO₂ per bezoek',
    energyPerVisit: 'Verbruikte energie',
    co2Annual: 'Jaarlijkse CO₂ (100k bezoeken)',
    impactTitle: 'Echte jaarlijkse impact',
    impactTrees: 'Bomen nodig',
    impactKm: 'Gereden km (ca.)',
    treesLabel: 'Bomen',
    kmLabel: 'Kilometer',
    
    ratingExcellent: 'Uitstekend. Deze pagina verbruikt zeer weinig energie vergeleken met het wereldwijde gemiddelde.',
    ratingVeryGood: 'Zeer goede efficiëntie. De pagina is goed geoptimaliseerd en heeft een minimale impact.',
    ratingGood: 'Acceptabele efficiëntie. Er is ruimte voor verbetering, maar het is onder het gemiddelde.',
    ratingAverage: 'Gemiddeld. De pagina verbruikt wat verwacht wordt op het huidige web.',
    ratingPoor: 'Bovengemiddeld. Overweeg het optimaliseren van afbeeldingen, scripts en lettertypen.',
    ratingVeryPoor: 'Hoge impact. Het paginagewicht is aanzienlijk en moet worden verminderd.',
    ratingCritical: 'Zeer hoge impact. Er is een grote kans om de paginagrootte te verkleinen.',
    
    tipImages: 'Converteer afbeeldingen naar WebP of AVIF om hun gewicht tot 70% te verminderen.',
    tipCompression: 'Schakel Brotli of GZIP in op de server om bronnen te comprimeren.',
    tipLazyLoading: 'Gebruik lazy loading voor afbeeldingen en video\'s buiten het zichtveld.',
    tipHosting: 'Kies hosting met hernieuwbare energie (Cloudflare, Netlify, Vercel).',
    tipThirdParty: 'Verwijder onnodige analysescripts en widgets van derden.',
    tipFonts: 'Laad alleen de lettertypegewichten die u daadwerkelijk gebruikt.',
    tipCache: 'Configureer HTTP-cache-headers om opnieuw downloaden te voorkomen.',
  },
  faq: faqData,
  howTo: howToData,
  seo: [
    {
      type: 'title',
      text: 'Digitale CO₂-voetafdruk calculator: Hoeveel CO₂ uw website genereert',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ontdek de echte milieu-impact van elke webpagina. Analyseer het gewicht, schat de grammen CO₂ per bezoek en leer hoe u de digitale vervuiling van uw projecten kunt verminderen.',
    },
    {
      type: 'title',
      text: 'Wat is de digitale CO₂-voetafdruk van een website?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Elke keer dat u een webpagina opent, verbruiken uw apparaat, thuisrouter, onderzeese kabels en servers aan de andere kant van de wereld elektriciteit. Die elektriciteit wordt nog steeds grotendeels opgewekt door het verbranden van fossiele brandstoffen. Het resultaat: een reële hoeveelheid <strong>CO₂ die bij elk bezoek in de atmosfeer wordt uitgestoten</strong>.',
    },
    {
      type: 'paragraph',
      html: 'De <strong>digitale CO₂-voetafdruk</strong> van een website wordt gemeten in grammen CO₂-equivalent (gCO₂e) per bezoek. Een gemiddelde website genereert ongeveer 0,5 g CO₂ per laadbeurt. Hoewel het onbeduidend lijkt, kan een site met 100.000 maandelijkse bezoeken meer dan 600 kg CO₂ per jaar uitstoten, het equivalent van meer dan 3.000 km rijden met een benzineauto.',
    },
    {
      type: 'title',
      text: 'Hoe wordt de CO₂ van een website berekend?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het gebruikte rekenmodel is gebaseerd op de <strong>Sustainable Web Design Model</strong>-normen, die het energieverbruik in vier hoofdsegmenten verdelen:',
    },
    {
      type: 'card',
      title: 'Gegevensoverdracht',
      html: 'Het totale gewicht van de pagina bepaalt hoeveel gigabyte er wordt verzonden. De standaard gaat uit van <code>0,81 kWh/GB</code> voor netwerkinfrastructuur.',
    },
    {
      type: 'card',
      title: 'Gebruikersapparaat',
      html: 'De computer of mobiele telefoon die de pagina ontvangt, verbruikt energie. Dit wordt geschat op <code>0,52 kWh/GB</code> aan verwerkte gegevens.',
    },
    {
      type: 'card',
      title: 'Koolstofintensiteit',
      html: 'De wereldwijde referentiewaarde van <code>442 gCO₂/kWh</code> wordt gebruikt om het energieverbruik om te zetten in reële koolstofemissies.',
    },
    {
      type: 'card',
      title: 'Caching factor',
      html: 'Het model past een factor van <code>0,75</code> toe, ervan uitgaande dat 25% van de gebruikers bronnen al in de cache heeft.',
    },
    {
      type: 'title',
      text: 'Wat betekent de efficiëntiebeoordeling?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>A+ en A:</strong> Minder dan 0,2 g CO₂. Zeer lichte en geoptimaliseerde sites.',
        '<strong>B:</strong> Tussen 0,2 en 0,5 g. Onder het wereldwijde gemiddelde.',
        '<strong>C:</strong> Tussen 0,5 en 1 g. Het gemiddelde voor het huidige web.',
        '<strong>D en E:</strong> Tussen 1 en 4 g. Zware pagina\'s met relevante impact.',
        '<strong>F:</strong> Meer dan 4 g per bezoek. Zeer hoge impact.',
      ],
    },
    {
      type: 'title',
      text: 'Hoe de CO₂-voetafdruk van uw website te verkleinen',
      level: 2,
    },
    {
      type: 'card',
      title: 'Afbeeldingsoptimalisatie',
      html: 'Gebruik formaten zoals <strong>WebP of AVIF</strong> om de grootte tot 80% te verminderen zonder merkbaar kwaliteitsverlies.',
    },
    {
      type: 'card',
      title: 'Servercompressie',
      html: 'Het inschakelen van <strong>Brotli of GZIP</strong> vermindert de grootte van tekstbestanden met wel 70%.',
    },
    {
      type: 'card',
      title: 'Duurzame hosting',
      html: 'Het kiezen van een provider met <strong>gecertificeerde hernieuwbare energie</strong> kan de impact met bijna 100% verminderen.',
    },
    {
      type: 'card',
      title: 'Cache en CDN',
      html: 'Configureer <strong>lange cache-headers</strong> om onnodige downloads te voorkomen.',
    },
    {
      type: 'title',
      text: 'De echte impact van internet op het klimaat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Internet is verantwoordelijk voor tussen de <strong>2% en 4% van de wereldwijde CO₂-emissies</strong>, een cijfer dat vergelijkbaar is met de luchtvaartindustrie. Elke kilobyte die u verwijdert, maakt uw website niet alleen sneller: het vermindert meetbaar de digitale vervuiling.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
