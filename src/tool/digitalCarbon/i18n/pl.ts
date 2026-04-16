import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { DigitalCarbonLocaleContent } from '../index';

const slug = 'kalkulator-cyfrowego-sladu-weglowego';
const title = 'Kalkulator cyfrowego śladu węglowego';
const description = 'Przeanalizuj wpływ dowolnej strony internetowej na środowisko. Oszacuj zużycie energii i emisję CO₂ na wizytę.';

const faqData = [
  {
    question: 'Co to jest cyfrowy ślad węglowy strony internetowej?',
    answer: 'To ilość gazów cieplarnianych, głównie CO₂, emitowanych do atmosfery w wyniku energii zużywanej przez serwery, sieci przesyłowe i urządzenia użytkowników w celu załadowania i wyświetlenia strony internetowej.',
  },
  {
    question: 'Jak mierzony jest wpływ strony internetowej?',
    answer: 'Zazwyczaj mierzy się go w gramach ekwiwalentu CO₂ (gCO₂e) na wizytę. Wydajna strona emituje mniej niż 0,2 g CO₂, podczas gdy strona nieozoptymalizowana może przekraczać 2 lub 3 g na każde załadowanie.',
  },
  {
    question: 'Dlaczego internet zanieczyszcza środowisko?',
    answer: 'Ponieważ cała niezbędna infrastruktura (centra danych, kable podmorskie, routery WiFi, smartfony) działa na energię elektryczną, która w dużej części świata wciąż pochodzi ze spalania węgla lub gazu.',
  },
  {
    question: 'Jak mogę zmniejszyć emisję CO₂ mojej strony?',
    answer: 'Najskuteczniejszym sposobem jest zmniejszenie wagi strony: optymalizacja obrazów (WebP), minifikacja plików CSS i JS, stosowanie leniwego ładowania (lazy loading) oraz wybór dostawcy hostingu korzystającego z odnawialnych źródeł energii.',
  },
];

const howToData = [
  {
    name: 'Wprowadź URL',
    text: 'Wpisz adres strony, którą chcesz przeanalizować, w polu wejściowym.',
  },
  {
    name: 'Rozpocznij analizę',
    text: 'Kliknij przycisk analizy, aby nasze narzędzie mogło oszacować wagę zasobów strony.',
  },
  {
    name: 'Sprawdź swoją ocenę',
    text: 'Otrzymaj ocenę od A+ do F w oparciu o efektywność energetyczną analizowanej strony.',
  },
  {
    name: 'Zastosuj ulepszenia',
    text: 'Skorzystaj z listy spersonalizowanych porad, aby zmniejszyć wagę swojej strony i jej wpływ na środowisko.',
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

export const content: DigitalCarbonLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Analizator URL',
    headResults: 'Wynik wpływu',
    headTips: 'Wskazówki optymalizacyjne',
    labelUrl: 'URL strony',
    btnAnalyze: 'Analizuj stronę',
    btnAnalyzing: 'Analizowanie...',
    placeholderUrl: 'https://przyklad.pl',
    errorInvalidUrl: 'Wprowadź poprawny adres URL.',
    errorFetchFailed: 'Nie udało się przeanalizować strony. Spróbuj innego adresu.',
    
    resultTitle: 'Cyfrowy ślad węglowy',
    resultSubtitle: 'Szacowana wydajność strony',
    co2PerVisit: 'CO₂ na wizytę',
    energyPerVisit: 'Zużyta energia',
    co2Annual: 'Roczne CO₂ (100 tys. wizyt)',
    impactTitle: 'Realny wpływ roczny',
    impactTrees: 'Potrzebne drzewa',
    impactKm: 'Przejechane km (ok.)',
    treesLabel: 'Drzewa',
    kmLabel: 'Kilometry',
    
    ratingExcellent: 'Doskonale. Ta strona zużywa bardzo mało energii w porównaniu ze średnią światową.',
    ratingVeryGood: 'Bardzo dobra wydajność. Strona jest dobrze zoptymalizowana i ma minimalny wpływ.',
    ratingGood: 'Akceptowalna wydajność. Istnieje pole do poprawy, ale wynik jest poniżej średniej.',
    ratingAverage: 'Przeciętnie. Strona zużywa tyle, ile oczekuje się od współczesnego internetu.',
    ratingPoor: 'Powyżej średniej. Rozważ optymalizację obrazów, skryptów i czcionek.',
    ratingVeryPoor: 'Duży wpływ. Waga strony jest znacząca i powinna zostać zmniejszona.',
    ratingCritical: 'Bardzo duży wpływ. Istnieje ogromna szansa na zmniejszenie rozmiaru strony.',
    
    tipImages: 'Konwertuj obrazy na WebP lub AVIF, aby zmniejszyć ich wagę nawet o 70%.',
    tipCompression: 'Włącz Brotli lub GZIP na serwerze, aby skompresować zasoby.',
    tipLazyLoading: 'Używaj leniwego ładowania dla obrazów i filmów poza obszarem wyświetlania.',
    tipHosting: 'Wybierz hosting korzystający z odnawialnej energii (Cloudflare, Netlify, Vercel).',
    tipThirdParty: 'Usuń niepotrzebne skrypty analityczne i widżety stron trzecich.',
    tipFonts: 'Ładuj tylko te grubości czcionek, których faktycznie używasz.',
    tipCache: 'Skonfiguruj nagłówki pamięci podręcznej HTTP, aby uniknąć ponownego pobierania.',
  },
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Źródła dotyczące zrównoważonego rozwoju sieci',
  seo: [
    {
      type: 'title',
      text: 'Kalkulator cyfrowego śladu węglowego: ile CO₂ generuje Twoja strona',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Odkryj realny wpływ dowolnej strony internetowej na środowisko. Przeanalizuj jej wagę, oszacuj ilość gramów CO₂ na wizytę i dowiedz się, jak zmniejszyć cyfrowe zanieczyszczenie Twoich projektów.',
    },
    {
      type: 'title',
      text: 'Co to jest cyfrowy ślad węglowy strony internetowej?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Za każdym razem, gdy otwierasz stronę internetową, Twoje urządzenie, domowy router, kable podmorskie i serwery po drugiej stronie świata zużywają prąd. Ta energia wciąż w dużej mierze pochodzi ze spalania paliw kopalnych. Wynik: realna ilość <strong>CO₂ emitowanego do atmosfery przy każdej wizycie</strong>.',
    },
    {
      type: 'paragraph',
      html: '<strong>Cyfrowy ślad węglowy</strong> strony mierzy się w gramach ekwiwalentu CO₂ (gCO₂e) na wizytę. Średnia strona generuje około 0,5 g CO₂ na każde załadowanie. Choć wydaje się to mało, witryna z 100 000 wizyt miesięcznie może wyemitować ponad 600 kg CO₂ rocznie, co odpowiada przejechaniu samochodem spalinowym ponad 3 000 km.',
    },
    {
      type: 'title',
      text: 'Jak oblicza się emisję CO₂ strony internetowej?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Użyty model obliczeniowy opiera się na standardach <strong>Sustainable Web Design Model</strong>, który dzieli zużycie energii na cztery główne segmenty:',
    },
    {
      type: 'card',
      title: 'Transfer danych',
      html: 'Całkowita waga strony określa, ile gigabajtów jest przesyłanych. Standard przyjmuje <code>0,81 kWh/GB</code> dla infrastruktury sieciowej.',
    },
    {
      type: 'card',
      title: 'Urządzenie użytkownika',
      html: 'Komputer lub telefon odbierający stronę zużywa energię. Szacuje się ją na <code>0,52 kWh/GB</code> przetworzonych danych.',
    },
    {
      type: 'card',
      title: 'Intensywność węglowa',
      html: 'Globalna wartość referencyjna <code>442 gCO₂/kWh</code> służy do przeliczenia zużycia energii na realną emisję dwutlenku węgla.',
    },
    {
      type: 'card',
      title: 'Współczynnik cache',
      html: 'Model stosuje współczynnik <code>0,75</code>, zakładając, że 25% użytkowników ma już zasoby w pamięci podręcznej.',
    },
    {
      type: 'title',
      text: 'Co oznacza ocena wydajności?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>A+ i A:</strong> Mniej niż 0,2 g CO₂. Strony bardzo lekkie i zoptymalizowane.',
        '<strong>B:</strong> Między 0,2 a 0,5 g. Poniżej średniej światowej.',
        '<strong>C:</strong> Między 0,5 a 1 g. Średnia dla współczesnego internetu.',
        '<strong>D i E:</strong> Między 1 a 4 g. Ciężkie strony o znacznym wpływie.',
        '<strong>F:</strong> Ponad 4 g na wizytę. Bardzo wysoki wpływ.',
      ],
    },
    {
      type: 'title',
      text: 'Jak zmniejszyć ślad węglowy Twojej strony internetowej',
      level: 2,
    },
    {
      type: 'card',
      title: 'Optymalizacja obrazów',
      html: 'Używaj formatów takich jak <strong>WebP lub AVIF</strong>, aby zmniejszyć rozmiar nawet o 80% bez zauważalnej utraty jakości.',
    },
    {
      type: 'card',
      title: 'Kompresja serwera',
      html: 'Włączenie <strong>Brotli lub GZIP</strong> zmniejsza rozmiar plików tekstowych nawet o 70%.',
    },
    {
      type: 'card',
      title: 'Zrównoważony hosting',
      html: 'Wybór dostawcy korzystającego z <strong>certyfikowanej energii odnawialnej</strong> może zmniejszyć wpływ niemal o 100%.',
    },
    {
      type: 'card',
      title: 'Cache i CDN',
      html: 'Skonfiguruj <strong>długie nagłówki cache</strong>, aby uniknąć niepotrzebnego ponownego pobierania.',
    },
    {
      type: 'title',
      text: 'Realny wpływ internetu na klimat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Internet odpowiada za <strong>2% do 4% globalnej emisji CO₂</strong>, co jest wartością porównywalną z przemysłem lotniczym. Każdy wyeliminowany kilobajt nie tylko przyspiesza Twoją stronę: mierzalnie zmniejsza cyfrowe zanieczyszczenie.',
    },
  ],
  bibliography: [
    { name: 'Sustainable Web Design Model', url: 'https://sustainablewebdesign.org/' },
    { name: 'Website Carbon Calculator', url: 'https://www.websitecarbon.com/' },
    { name: 'The Green Web Foundation', url: 'https://www.thegreenwebfoundation.org/' },
    { name: 'W3C - Web Sustainability Guidelines', url: 'https://w3c.github.io/sustyweb/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
