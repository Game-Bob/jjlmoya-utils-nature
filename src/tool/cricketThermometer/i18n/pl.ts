import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CricketThermometerUI } from '../ui';

const slug = 'termometr-swierszczy';
const title = 'Termometr świerszczowy – Kalkulator temperatury według prawa Dolbeara';
const description =
  'Nie masz termometru? Posłuchaj świerszczy. Oblicz dokładną temperaturę, licząc cykania za pomocą naszego kalkulatora opartego na prawie Dolbeara.';

const faqData = [
  {
    question: 'Co to jest prawo Dolbeara?',
    answer:
      'Sformułowane w 1897 roku przez Amosa Dolbeara, jest to naukowa obserwacja, która wykazała liniową korelację między częstotliwością cykania świerszczy a temperaturą otoczenia.',
  },
  {
    question: 'Dlaczego świerszcze cykają szybciej w upale?',
    answer:
      'Świerszcze są zwierzętami zmiennocieplnymi (ektotermicznymi). Szybkość ich procesów metabolicznych i skurczów mięśni zależy od temperatury zewnętrznej; im jest cieplej, tym więcej mają energii, by szybciej wydawać dźwięki.',
  },
  {
    question: 'Czy ten pomiar jest dokładny?',
    answer:
      'Jest zaskakująco dokładny dla gatunków takich jak świerszcz drzewny (Oecanthus fultoni), z błędem wynoszącym około 0,5°C, jeśli liczenie jest prawidłowe. Jednak czynniki takie jak wilgotność czy wiatr mogą wpłynąć na wynik.',
  },
  {
    question: 'Którego świerszcza powinienem użyć do obliczeń?',
    answer:
      'Oryginalna formuła opiera się na świerszczu drzewnym. Dla pospolitego świerszcza polnego zależność jest podobna, ale tempo bywa nieco wolniejsze.',
  },
];

const howToData = [
  {
    name: 'Znajdź pojedynczego świerszcza',
    text: 'Znajdź w nocy ciche miejsce, w którym wyraźnie słychać cykanie jednego świerszcza, aby uniknąć pomylenia rytmów.',
  },
  {
    name: 'Licz cyknięcia przez 15 sekund',
    text: 'Użyj stoper i policz, ile dźwięków owad wyda w ciągu dokładnie 15 sekund.',
  },
  {
    name: 'Wprowadź wartość',
    text: 'Stukaj w przycisk TAP w rytm cykania przez kilka sekund, aby kalkulator automatycznie obliczył BPM.',
  },
  {
    name: 'Sprawdź temperaturę',
    text: 'System zastosuje wzór T(°C) = 10 + (N - 40) / 7, aby podać przybliżoną temperaturę otoczenia w stopniach Celsjusza.',
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

export const content: ToolLocaleContent<CricketThermometerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła naukowe',
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
      text: 'Kompletny przewodnik: Jak używać prawa Dolbeara do obliczania temperatury',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Czy wiesz, że możesz poznać dokładną temperaturę, słuchając natury? W 1897 roku fizyk Amos Dolbear odkrył precyzyjną zależność matematyczną między tempem cykania świerszczy a ciepłem otoczenia. To narzędzie cyfryzuje to odkrycie, zmieniając Twój telefon w naturalny termometr.',
    },
    {
      type: 'tip',
      title: 'Dlaczego świerszcze „śpiewają”?',
      html: '<p>„Śpiew” świerszcza, czyli <strong>strydulacja</strong>, to w rzeczywistości wołanie godowe. Samce pocierają o siebie skrzydła (nie nogi), aby wydać ten dźwięk. Co ciekawe, ponieważ są to zwierzęta zmiennocieplne (ektotermy), szybkość tego pocierania zależy bezpośrednio od energii cieplnej powietrza.</p>',
    },
    {
      type: 'title',
      text: 'Nauka: Ektotermia i metabolizm',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'W przeciwieństwie do ssaków, które utrzymują stałą temperaturę ciała, owady zależą od ciepła zewnętrznego. Ich reakcje biochemiczne przebiegają zgodnie z <strong>równaniem Arrheniusa</strong>: im więcej ciepła, tym szybsza reakcja.',
    },
    {
      type: 'paragraph',
      html: 'Oznacza to, że aby mięśnie świerszcza mogły się kurczyć i pocierać skrzydła, potrzebują reakcji enzymatycznych. Jeśli jest zimno, reakcje te są powolne, a cykanie ociężałe. Gdy jest ciepło, metabolizm przyspiesza, a śpiew staje się gorączkowym trelem.',
    },
    {
      type: 'title',
      text: 'Wzór Dolbeara',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Chociaż istnieją wariacje dla różnych gatunków, najsłynniejszy wzór dotyczy świerszcza drzewnego (<em>Oecanthus fultoni</em>). Aby uzyskać temperaturę w stopniach Celsjusza:',
    },
    {
      type: 'code',
      code: 'T(°C) = 10 + (N - 40) / 7\n\nGdzie N = liczba cyknięć na minutę.',
      ariaLabel: 'Prawo Dolbeara pozwala obliczyć temperaturę na podstawie cykania świerszcza',
    },
    {
      type: 'paragraph',
      html: 'Nasze narzędzie robi to automatycznie: mierzy czas między Twoimi stuknięciami, oblicza liczbę cyknięć na minutę (BPM) i błyskawicznie stosuje wzór.',
    },
    {
      type: 'title',
      text: 'Fascynujące fakty',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Termometry miłości:</strong> Niektóre teorie sugerują, że samice wolą samców śpiewających z „właściwą” częstotliwością dla aktualnej temperatury, ponieważ świadczy to o zdrowiu samca i silnym metabolizmie.',
        '<strong>Granica zimna:</strong> Poniżej 10°C (50°F) większość świerszczy przestaje śpiewać, ponieważ ich metabolizm jest zbyt wolny, by podtrzymać wysiłek mięśni.',
        '<strong>Synchronizacja:</strong> W ciepłe noce tysiące świerszczy potrafią zsynchronizować swoje cykanie, tworząc imponujący efekt fali dźwiękowej.',
      ],
    },
    {
      type: 'tip',
      title: 'Uwaga o dokładności',
      html: '<p>Dokładność zależy od gatunku świerszcza. Narzędzie jest skalibrowane dla pospolitego świerszcza polnego i świerszcza drzewnego. Czynniki takie jak wilgotność czy wiatr mogą zmienić wynik o ±0,5°C.</p>',
    },
  ],
  ui: {
    labelWaiting: 'Oczekiwanie...',
    labelTapping: 'Stukaj dalej...',
    tapInstruction: 'Za każdym razem, gdy usłyszysz cyknięcie',
    btnReset: 'Resetuj',
    btnSoundOn: 'Dźwięk: Wł.',
    btnSoundOff: 'Dźwięk: Wył.',
    unitChirpsMin: 'cyknięć/min',
    faqTitle: 'Często zadawane pytania',
    bibliographyTitle: 'Źródła naukowe',
  },
};
