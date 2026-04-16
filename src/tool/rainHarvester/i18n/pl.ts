import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { RainHarvesterLocaleContent } from '../index';

const slug = 'kalkulator-wody-deszczowej';
const title = 'Kalkulator Pozyskiwania Wody Deszczowej';
const description = 'Oblicz, ile wody deszczowej możesz zebrać ze swojego dachu i dobierz odpowiedni zbiornik retencyjny.';

const faqData = [
  {
    question: 'Ile wody mogę faktycznie zebrać ze swojego dachu?',
    answer: 'Ogólna zasada mówi, że z każdego metra kwadratowego dachu i na każdy milimetr deszczu można zebrać około 1 litra wody. Istnieją jednak straty wynikające z parowania i filtracji, korygowane przez „współczynnik spływu”.',
  },
  {
    question: 'Co to jest współczynnik spływu?',
    answer: 'Jest to wartość procentowa wskazująca, ile wody tracimy w zależności od materiału, z którego wykonany jest dach. Dach metalowy lub ceramiczny jest bardzo wydajny (0,85-0,95), podczas gdy dach żwirowy lub zielony jest znacznie mniej wydajny (0,1-0,3).',
  },
  {
    question: 'Jak dobrać wielkość zbiornika?',
    answer: 'Należy obliczyć maksymalną spodziewaną objętość opadów w miesiącu i zestawić ją z szacowanym miesięcznym zużyciem. Zbyt mały zbiornik będzie przelewał się podczas ulew, a zbyt duży będzie niepotrzebnie kosztowny.',
  },
  {
    question: 'Czy zebrana woda deszczowa jest zdatna do picia?',
    answer: 'Nie bezpośrednio. Woda przenosi kurz, odchody ptaków i pyły z powietrza. Aby nadawała się do spożycia przez ludzi, musi przejść przez filtry osadowe, węgiel aktywny oraz dezynfekcję światłem UV lub chlorem.',
  },
];

const howToData = [
  {
    name: 'Zmierz powierzchnię w rzucie',
    text: 'Zmierz długość i szerokość podstawy dachu (nie powierzchnię skośną, lecz obszar, który rzuca cień na ziemię).',
  },
  {
    name: 'Sprawdź lokalne opady',
    text: 'Znajdź w serwisie meteorologicznym średnie roczne lub miesięczne opady w Twojej okolicy podane w milimetrach (mm).',
  },
  {
    name: 'Uwzględnij wydajność materiału',
    text: 'Wybierz materiał dachu w naszym kalkulatorze, aby odliczyć wodę, która zostanie utracona przez wchłanianie lub parowanie.',
  },
  {
    name: 'Oblicz wymaganą objętość',
    text: 'Użyj wyniku rocznego w litrach, aby dobrać zbiornik, który pomieści co najmniej 20-30% całkowitego rocznego uzysku na okresy suszy.',
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
  inLanguage: 'pl',
};

export const content: RainHarvesterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Ustawienia Dachu',
    headResults: 'Potencjał Uzysku',
    labelArea: 'Powierzchnia Dachu',
    labelRainfall: 'Roczne Opady',
    labelMaterial: 'Materiał Dachu',
    unitM2: 'm²',
    unitMm: 'mm',
    unitLiters: 'Litry',
    helpRainfall: 'Nie wiesz? Wyszukaj w Google „średnie roczne opady [Twoje miasto]”.',
    efficiencyTitle: 'Współczynnik Wydajności',
    efficiencyNote: 'Uwzględniono 10% strat na filtry i parowanie.',
    resultTitle: 'Roczny Potencjał Uzysku',
    equivalenciesTitle: 'Praktyczne Przeliczniki',
    labelFlushes: 'Spłukania Toalety',
    labelShowers: 'Prysznice (10 min)',
    labelGarden: 'Podlewanie Ogrodu',
    gardenArea: '(50m²)',
    materialMetal: 'Metal / Dachówka Szkliwiona',
    materialClay: 'Dachówka Ceramiczna / Gliniana',
    materialConcrete: 'Beton / Asfalt',
    materialGravel: 'Żwir / Zielony Dach',
  },
  seo: [
    {
      type: 'title',
      text: 'Pozyskiwanie Wody Deszczowej: Autonomia i Ekologia',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Większość właścicieli domów nie zdaje sobie sprawy z potencjału własnego dachu. Standardowy dach może zebrać tysiące litrów darmowej wody każdego roku. To narzędzie pozwala oszacować ten potencjał, obliczyć dokładnie, ile wody możesz „zebrać” i dobrać idealny zbiornik do jej przechowywania.',
    },
    {
      type: 'title',
      text: 'Logika Obliczeń',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Podstawowy wzór na zbieranie wody deszczowej jest prosty, ale skuteczny:',
    },
    {
      type: 'paragraph',
      html: '<code style="display:block;padding:1rem;background:var(--bg-alt);border-radius:0.5rem;margin:1rem 0;font-family:monospace;">Objętość = Powierzchnia × Opady × Współczynnik Spływu × Wydajność Filtrów</code>',
    },
    {
      type: 'list',
      items: [
        '<strong>Powierzchnia:</strong> Rzut poziomy dachu (długość × szerokość).',
        '<strong>Opady:</strong> Deszcz podany w milimetrach.',
        '<strong>Współczynnik:</strong> Ile wody traci Twój dach (np. przez nasiąkanie).',
        '<strong>Wydajność:</strong> Straty na filtrach przed zbiornikiem (~10%).',
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego Warto Zbierać Deszczówkę?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Oszczędność:</strong> Znaczne obniżenie rachunków za wodę.',
        '<strong>Ogrodnictwo:</strong> Rośliny uwielbiają wodę bez chloru i wapnia.',
        '<strong>Niezależność:</strong> Zapas wody na wypadek awarii sieci.',
      ],
    },
    {
      type: 'title',
      text: 'Dobór Wielkości Zbiornika',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Najczęstszym błędem jest zakup zbiornika wyłącznie w oparciu o budżet. Jeśli będzie za mały, zmarnujesz tysiące litrów przez przelew. Jeśli za duży, wydasz pieniądze niepotrzebnie. Przyjmuje się, że optymalna pojemność powinna pozwalać na zmagazynowanie średnich opadów z <strong>3 miesięcy</strong>, co pozwala przetrwać okresy bezdeszczowe.',
    },
  ],
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Źródła Naukowe',
  bibliography: [
    {
      name: 'FAO - Rainwater Harvesting and Storage',
      url: 'https://www.fao.org/3/a1348s/a1348s.pdf',
    },
    {
      name: 'Texas A&M AgriLife Extension - Rainwater Harvesting',
      url: 'https://rainwaterharvesting.tamu.edu/',
    },
    {
      name: 'Brad Lancaster - Rainwater Harvesting for Drylands',
      url: 'https://www.harvestingrainwater.com/',
    },
    {
      name: 'European Environment Agency - Water Resources',
      url: 'https://www.eea.europa.eu/en/topics/in-depth/water',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
