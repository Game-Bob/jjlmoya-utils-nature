import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { RainHarvesterLocaleContent } from '../index';

const slug = 'regenwater-opvang-calculator';
const title = 'Regenwater opvang calculator';
const description = 'Bereken hoeveel regenwater u van uw dak kunt opvangen en bepaal de grootte van uw opslagtank.';

const faqData = [
  {
    question: 'Hoeveel water kan ik daadwerkelijk van mijn dak opvangen?',
    answer: 'De algemene regel is dat u voor elke vierkante meter dak en elke millimeter regen ongeveer 1 liter water kunt opvangen. Er zijn echter verliezen door verdamping en filtratie, aangepast met de "afvloeiingscoëfficiënt".',
  },
  {
    question: 'Wat is de afvloeiingscoëfficiënt?',
    answer: 'Het is een percentage dat aangeeft hoeveel water er verloren gaat, afhankelijk van het dakmateriaal. Een metalen of pannendak is zeer efficiënt (0,85-0,95), terwijl een grind- of gronddak veel minder efficiënt is (0,1-0,3).',
  },
  {
    question: 'Hoe bepaal ik de grootte van de opslagtank?',
    answer: 'U moet het maximaal verwachte regenvolume in een maand berekenen en dit afzetten tegen uw geschatte maandelijkse verbruik. Een te kleine tank zal overstromen bij stormen, en een te grote tank zal onnodig duur zijn.',
  },
  {
    question: 'Is het veilig om opgevangen regenwater te drinken?',
    answer: 'Niet direct. Water voert stof, vogelpoep en deeltjes uit de lucht mee. Voor menselijke consumptie moet het door sedimentfilters, actieve kool en desinfectie met UV-licht of chloor gaan.',
  },
];

const howToData = [
  {
    name: 'Meet het horizontale oppervlak',
    text: 'Meet de lengte en breedte van uw dakbasis (niet het schuine oppervlak, maar het gebied dat schaduw werpt op de grond).',
  },
  {
    name: 'Controleer de lokale neerslag',
    text: 'Zoek bij de nationale meteorologische dienst naar de gemiddelde jaarlijkse of maandelijkse neerslag in uw regio in millimeters (mm).',
  },
  {
    name: 'Pas materiaalefficiëntie toe',
    text: 'Selecteer uw dakmateriaal in onze calculator om het water af te trekken dat verloren gaat door absorptie of hitte.',
  },
  {
    name: 'Bereken het benodigde volume',
    text: 'Gebruik het jaarlijkse resultaat in liters om een tank te kiezen die ten minste 20-30% van de totale oogst kan opslaan voor droge periodes.',
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

export const content: RainHarvesterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Dakinstellingen',
    headResults: 'Opvangpotentieel',
    labelArea: 'Dakoppervlak',
    labelRainfall: 'Jaarlijkse neerslag',
    labelMaterial: 'Dakmateriaal',
    unitM2: 'm²',
    unitMm: 'mm',
    unitLiters: 'Liter',
    helpRainfall: 'Weet u het niet? Zoek op Google naar "gemiddelde jaarlijkse neerslag [uw stad]".',
    efficiencyTitle: 'Efficiëntiefactor',
    efficiencyNote: 'Er wordt een verlies van 10% toegepast voor filters en verdamping.',
    resultTitle: 'Jaarlijks opvangpotentieel',
    equivalenciesTitle: 'Praktische equivalenten',
    labelFlushes: 'Doortrekken toilet',
    labelShowers: 'Douchebeurten (10 min)',
    labelGarden: 'Tuin besproeien',
    gardenArea: '(50m²)',
    materialMetal: 'Metaal / Geglazuurde pannen',
    materialClay: 'Dakkiezel / Klei',
    materialConcrete: 'Beton / Asfalt',
    materialGravel: 'Grind / Groendak',
  },
  seo: [
    {
      type: 'title',
      text: 'Regenwater opvangen: autonomie en duurzaamheid',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De meeste huiseigenaren zijn zich niet bewust van het potentieel van hun eigen dak. Een standaard dak kan elk jaar duizenden liters gratis water opvangen. Deze tool kwantificeert dat potentieel, waardoor u precies kunt berekenen hoeveel water u kunt "oogsten" en de ideale tankgrootte voor opslag kunt bepalen.',
    },
    {
      type: 'title',
      text: 'Berekeningslogica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De basisformule voor regenwateropvang is eenvoudig maar krachtig:',
    },
    {
      type: 'paragraph',
      html: '<code style="display:block;padding:1rem;background:var(--bg-alt);border-radius:0.5rem;margin:1rem 0;font-family:monospace;">Volume = Oppervlak × Neerslag × Afvloeiingscoëfficiënt × Filterefficiëntie</code>',
    },
    {
      type: 'list',
      items: [
        '<strong>Oppervlak:</strong> Uw dakvoetafdruk (geprojecteerde lengte × breedte).',
        '<strong>Neerslag:</strong> Vallende regen in millimeters.',
        '<strong>Coëfficiënt:</strong> Hoeveel water uw dak verliest (bijv. absorptie).',
        '<strong>Efficiëntie:</strong> Verliezen in filters vóór de tank (~10%).',
      ],
    },
    {
      type: 'title',
      text: 'Waarom regenwater opvangen?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Besparing:</strong> Verlaag uw waterrekening aanzienlijk.',
        '<strong>Tuinieren:</strong> Planten houden van water zonder chloor of kalk.',
        '<strong>Veerkracht:</strong> Houd een noodreserve aan voor het geval de watertoevoer wordt onderbroken.',
      ],
    },
    {
      type: 'title',
      text: 'Tankgrootte bepalen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De meest gemaakte fout is het kopen van een tank die alleen is gebaseerd op het budget. Als hij te klein is, verspilt u duizenden liters door overloop. Als hij te groot is, geeft u onnodig geld uit. Een algemene regel is om capaciteit te hebben om <strong>3 maanden</strong> aan gemiddelde neerslag in uw regio op te slaan, zodat u drogere periodes kunt overbruggen.',
    },
  ],
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
