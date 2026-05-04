import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { SeedCalculatorUI } from '../ui';

const slug = 'kalkulator-wysiewu';
const title = 'Kalkulator Odstępów Nasion i Kalibracji Siewnika';
const description =
  'Precyzyjne narzędzie dla rolników. Oblicz idealny odstęp między nasionami na podstawie docelowej obsady i rozstawu rzędów oraz analizuj obciążenie siewnika przy różnych prędkościach roboczych.';

const faqData = [
  {
    question: 'Jak obliczany jest odstęp między nasionami?',
    answer:
      'Jeden hektar (10 000 m²) dzieli się przez szerokość międzyrzędzi, aby uzyskać łączną liczbę metrów bieżących siewu. Następnie docelową obsadę dzieli się przez te metry, aby określić, ile nasion należy umieścić na każdym metrze bieżącym.',
  },
  {
    question: 'Jaka jest docelowa obsada na hektar?',
    answer:
      'Jest to idealna liczba roślin na 10 000 metrów kwadratowych. Zależy ona od rodzaju uprawy, żyzności gleby i dostępności wody. Na przykład kukurydza nawadniana zazwyczaj wymaga od 85 000 do 95 000 nasion na hektar.',
  },
  {
    question: 'Jak procent kiełkowania wpływa na obliczenia?',
    answer:
      'Nie wszystkie wysiane nasiona wzejdą. Jeśli partia nasion ma zdolność kiełkowania na poziomie 95%, należy zwiększyć normę wysiewu o 5%, aby osiągnąć pożądaną końcową obsadę roślin.',
  },
  {
    question: 'Dlaczego kalibracja siewnika jest tak ważna?',
    answer:
      'Zbyt gęsty wysiew powoduje konkurencję między roślinami i drobniejsze ziarno. Zbyt rzadki wysiew to marnowanie przestrzeni i potencjału plonowania. Precyzja jest kluczem do rentowności.',
  },
];

const howToData = [
  {
    name: 'Wprowadź docelową obsadę',
    text: 'Zdefiniuj, ile nasion lub roślin chcesz uzyskać na hektar zgodnie z zaleceniami technicznymi dla Twojej odmiany.',
  },
  {
    name: 'Ustaw rozstaw rzędów',
    text: 'Zmierz odległość między tarczami lub redlicami swojego siewnika (zazwyczaj 50, 70 lub 75 cm).',
  },
  {
    name: 'Dostosuj siłę kiełkowania',
    text: 'Wprowadź przewidywany procent wschodów, aby zrekompensować naturalne straty w polu.',
  },
  {
    name: 'Uzyskaj ustawienia mechaniczne',
    text: 'Użyj wartości nasion na metr lub odstępu w cm między nasionami, aby wyregulować zębatki lub monitor w swojej maszynie.',
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

export const content: ToolLocaleContent<SeedCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Techniczny przewodnik po siewie precyzyjnym',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Regulacja przekładni siewnika wymaga dokładnej wiedzy o tym, ile nasion musi spaść na każdy metr bieżący bruzdy. Instrukcje maszyn zazwyczaj podają tabele orientacyjne, ale czynniki takie jak <strong>poślizg koła napędowego</strong> czy wielkość nasion mogą zmieniać rzeczywistość. To narzędzie podaje idealną wartość teoretyczną: <strong>docelowy odstęp między nasionami</strong>.',
    },
    {
      type: 'tip',
      title: 'Wzór matematyczny',
      html: '<p>Dla agronomów i ciekawskich – oto podstawa obliczeń:</p><pre>Odstęp (cm) = 10 000 000 / (Obsada × Szerokość Rzędu)</pre><ul><li><strong>10 000 000:</strong> Współczynnik konwersji z Ha na cm².</li><li><strong>Obsada:</strong> Liczba nasion na hektar.</li><li><strong>Szerokość Rzędu:</strong> Odległość między rzędami w cm.</li></ul>',
    },
    {
      type: 'title',
      text: 'Dlaczego warto używać tego kalkulatora?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jeśli mierzysz w rzędzie w polu i nasiona są bliżej siebie lub dalej od siebie niż wynosi zadany odstęp, Twoja maszyna jest <strong>źle skalibrowana</strong>. Narzędzie analizuje również częstotliwość dozowania (Hz) tarczy wysiewającej przy różnych prędkościach roboczych, ostrzegając przed ryzykiem utraty jakości siewu.',
    },
    {
      type: 'title',
      text: 'Klucze do wysokiej jakości siewu',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Singulacja:</strong> Unikaj dubletów i omijaków. 99% singulacji utrzymuje równowagę konkurencji między roślinami.',
        '<strong>Jednolity odstęp:</strong> Współczynnik zmienności powinien być mniejszy niż 0,3. Odchylenia powyżej 5 cm redukują potencjał plonowania.',
        '<strong>Głębokość:</strong> Krytyczna dla wyrównanych wschodów. Dostosuj docisk kół kopiujących do wilgotności gleby.',
      ],
    },
    {
      type: 'title',
      text: 'Metody weryfikacji polowej',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Metoda 1/1000 hektara:</strong> Odmierz na rzędzie odległość reprezentującą 1/1000 hektara. Policz nasiona i pomnóż przez 1000. Dla rzędów 70 cm odcinek wynosi 14,28 m; dla 52,5 cm jest to 19,05 m.',
    },
    {
      type: 'paragraph',
      html: '<strong>Metoda koła napędowego:</strong> Podnieś maszynę, zaznacz koło i obracaj nim o ekwiwalent 1/100 hektara. Zbierz nasiona do wiadra, zważ je lub policz, aby zweryfikować kalibrację.',
    },
    {
      type: 'title',
      text: 'Tabela referencyjna według upraw',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Kukurydza:</strong> od 60 000 do 95 000 nasion/Ha. Wysoka reakcja na gęstość w nowoczesnych hybrydach.',
        '<strong>Soja:</strong> od 250 000 do 450 000 nasion/Ha. Duża zdolność kompensacji przy niskich obsadach.',
        '<strong>Słonecznik:</strong> od 40 000 do 55 000 nasion/Ha. Bardzo wrażliwy na zagęszczenie; nadmiar zmniejsza średnicę koszyczka.',
        '<strong>Rzepak:</strong> od 300 000 do 600 000 nasion/Ha. Bardzo małe nasiona; wymagają doskonałego kontaktu z glebą.',
      ],
    },
  ],
  ui: {
    headCrop: 'Wybierz uprawę',
    headParams: 'Parametry',
    headAnalysis: 'Analiza w czasie rzeczywistym',
    labelPopulation: 'Obsada',
    unitSeedsHa: 'Nasion/Ha',
    labelRowWidth: 'Szerokość Rzędu',
    unitCm: 'Centymetry',
    labelWorkSpeed: 'Prędkość robocza',
    unitKmh: 'km/h',
    labelCalibration: 'Kalibracja tarczy',
    labelSpacingDesc: 'Dokładna odległość między każdym nasionem w rzędzie.',
    labelMachineStress: 'Obciążenie maszyny',
    labelSeedsM: 'Nasiona / Metr',
    labelPlantsM2: 'Rośliny / m²',
    labelSpeedMs: 'Metry / Sek',
    labelHaBag: 'Ha / Worek (80tys)',
    statusStandby: 'OCZEKIWANIE',
    statusVolumetric: 'PRZEPŁYW OBJĘTOŚCIOWY',
    statusOptimal: 'OPTYMALNE DOZOWANIE',
    statusHighSpeed: 'WYSOKA PRĘDKOŚĆ',
    statusPlateLimiter: 'LIMIT TARCZY',
    cropCorn: 'Kukurydza na ziarno',
    cropSilage: 'Kukurydza na kiszonkę',
    cropSunflower: 'Słonecznik',
    cropSorghum: 'Sorgo',
    cropSoy: 'Soja',
    cropBeet: 'Burak cukrowy',
    cropRapeseed: 'Rzepak',
    noteCorn: 'Wymagana wysoka precyzja',
    noteSilage: 'Średnio-wysoka gęstość',
    noteSunflower: 'Wrażliwy na prędkość',
    noteSorghum: 'Przepływ ciągły lub tarcza',
    noteSoy: 'Wysoka obsada',
    noteBeet: 'Krytyczny płytki siew',
    noteRapeseed: 'Bardzo małe nasiona',
  },
};
