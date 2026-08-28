import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import { bibliography } from "../bibliography";
import type { CompostBinVolumeRatioCalculatorLocaleContent } from "../entry";

const slug = "kalkulator-pojemnosci-kompostownika-proporcje-brazowe-zielone";
const title = "Kalkulator Pojemnosci Kompostownika i Proporcji Materialow";
const description =
  "Oblicz pojemnosc wewnetrzna prostokatnego lub cylindrycznego kompostownika i sprawdz proporcje materialow brazowych, zielonych, wilgotnosc i napowietrzenie.";

const faq = [
  {
    question: "Jak obliczyc pojemnosc kompostownika?",
    answer:
      "Zmierz wewnetrzne wymiary pojemnika. Dla kompostownika prostokatnego pomnoz szerokosc przez glebokosc i wysokosc oraz przelicz centymetry szescienne na litry. Dla cylindra uzyj wzoru pi razy promien do kwadratu razy wysokosc.",
  },
  {
    question: "Jaka jest odpowiednia proporcja materialow brazowych do zielonych?",
    answer:
      "Praktyczny punkt wyjscia to dwie do trzech czesci objetowosciowo bogatych w wegiel materialow brazowych na jedna czesc bogatych w azot materialow zielonych. Dostosuj proporcje obserwujac wilgotnosc i zapach.",
  },
  {
    question: "Ile materiału moge umiescic w kompostowniku?",
    answer:
      "Porownaj objetosc swoich materialow z pojemnoscia wewnetrzna kompostownika i zostaw wystarczajaco duzo miejsca na cyrkulacje powietrza oraz mieszanie.",
  },
  {
    question: "Co oznacza wilgotnosc wycisnietej gąbki?",
    answer:
      "Materialy powinny byc wilgotne w dotyku, ale nie powinny wypuszczac wody przy lekkim scisnieciu. Bardzo sucha pryzma spowalnia rozklad, podczas gdy zbyt mokra wymaga suchych materialow i napowietrzenia.",
  },
];

const howTo = [
  {
    name: "Wybierz ksztalt kompostownika",
    text: "Wybierz ksztalt prostokatny lub cylindryczny i wprowadz dokladne wymiary wewnetrzne w centymetrach lub calach.",
  },
  {
    name: "Wprowadz objetosc materialow",
    text: "Ocen osobno objetosc brazowych materialow bogatych w wegiel oraz zielonych materialow bogatych w azot.",
  },
  {
    name: "Ustaw poziom wilgotnosci pryzmy",
    text: "Wybierz stan suchy, wycisnieta gąbka lub mokry, aby otrzymac odpowiednie wskazowki pielegnacyjne.",
  },
  {
    name: "Odczytaj wynik i podjmij dzialanie",
    text: "Przeanalizuj pojemnosc, poziom napelnienia oraz proporcje, aby zdecydowac o dodaniu brazowych materialow lub wymieszaniu.",
  },
];

const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title,
  description,
  step: howTo.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: title,
  description,
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "pl",
};

export const content: CompostBinVolumeRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    unitMetric: "Metryczny",
    unitImperial: "Imperialny",
    shapeTitle: "Ksztalt kompostownika",
    shapeRectangular: "Prostokątny",
    shapeCylindrical: "Cylindryczny",
    widthLabel: "Szerokosc wewnetrzna",
    depthLabel: "Glebokosc wewnetrzna",
    diameterLabel: "Srednica wewnetrzna",
    heightLabel: "Wysokosc wewnetrzna",
    brownLabel: "Materialy brazowe",
    greenLabel: "Materialy zielone",
    moistureTitle: "Poziom wilgotnosci",
    moistureDry: "Suchy",
    moistureSponge: "Wycisnieta gąbka",
    moistureWet: "Mokry",
    moistureAdviceDry: "Suchy: stopniowo nawilzaj i wymieszaj kompost.",
    moistureAdviceSponge: "Optymalny: utrzymuj wilgotnosc wycisnietej gąbki.",
    moistureAdviceWet: "Mokry: dodaj suche materialy brazowe i napowietrz.",
    recipeTitle: "Zalecana mieszanka",
    recipeKitchen: "Odpady kuchenne",
    recipeGarden: "Odpady ogrodowe",
    recipeLeafy: "Mieszanka lisci",
    sceneTitle: "Przekroj pryzmy kompostowej",
    resultCapacity: "Pojemnosc wewnetrzna kompostownika",
    resultMaterials: "Wprowadzone materialy",
    resultRatio: "Stosunek brazu do zieleni",
    resultFill: "Wykorzystana pojemnosc",
    brownTarget: "Docelowa ilosc materialow brazowych",
    waterAction: "Wilgotnosc",
    airAction: "Powietrze i struktura",
    statusBalanced: "Dobra proporcja poczatkowa",
    statusTooGreen: "Dodaj wiecej materialow brazowych",
    statusTooBrown: "Dodaj wiecej materialow zielonych",
    statusNoGreens: "Wprowadz materialy zielone",
    statusOverfilled: "Kompostownik jest przepelniony",
    statusDry: "Pryzma jest zbyt sucha",
    statusWet: "Pryzma jest zbyt mokra",
    statusGoodMoisture: "Wilgotnosc w optymalnym zakresie",
    statusNote: "Regularnie mieszaj kompost, aby otworzyc kieszenie powietrzne.",
    volumeUnitLiters: "L",
    volumeUnitGallons: "gal",
    dimensionUnitCm: "cm",
    dimensionUnitIn: "in",
    formulaTitle: "Geometryczne obliczanie objetosci",
    formulaText: "Kalkulator wyznacza pojemnosc uzytkowa na podstawie wymiarow wewnetrznych. Dla pojemnikow prostokątnych stosuje wzor szerokosc × glebokosc × wysokosc, a dla cylindrycznych π × promien² × wysokosc. Wszystkie objetosci sa przeliczane na te sama jednostke.",
    practicalTitle: "Proporcja jako punkt wyjscia",
    practicalText: "Daz do uzyskania 2-3 czesci materialow brazowych na 1 czesc materialow zielonych. Wilgotnosc i dostep powietrza sa kluczowe dla prawidłowego procesu rozkladu.",
    localNote: "Wszystkie obliczenia wykonywane są lokalnie w przeglądarce. To pomocne narzedzie do planowania kompostowania.",
    resetLabel: "Resetuj",
  },
  seo: [
    {
      type: "title",
      text: "Oblicz Rzeczywista Pojemnosc Kompostownika Domowego",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Kalkulator objetosci kompostownika jest najbardziej przydatny, gdy bazuje na rzeczywistych wymiarach wewnetrznych pojemnika, a nie tylko na oficjalnej pojemnosci handlowej. Podaj szerokosc, glebokosc i wysokosc dla kompostownika prostokątnego lub srednice i wysokosc dla modelu cylindrycznego, aby uzyskac dokladna pojemnosc netto w litrach lub galonach.",
    },
    { type: "title", text: "Matematyczne Wzory Geometryczne Objetosci", level: 3 },
    {
      type: "paragraph",
      html: "Dla pojemnika prostokątnego uzyj wzoru <code>szerokosc × glebokosc × wysokosc</code>. Podziel otrzymany wynik w centymetrach szesciennych przez 1 000, aby przeliczyc go na litry. Dla kompostownika cylindrycznego zastosuj <code>π × promien² × wysokosc</code>, gdzie promien to polowa wewnetrznej srednicy. Mierz wylacznie wolna przestrzen wewnatrz.",
    },
    {
      type: "list",
      items: [
        "<strong>Pojemnik prostokątny:</strong> szerokosc × glebokosc × wysokosc.",
        "<strong>Pojemnik cylindryczny:</strong> π × promien² × wysokosc.",
        "<strong>Przelicznik jednostek:</strong> 1 000 cm3 to dokladnie 1 litr.",
        "<strong>Stopien napelnienia:</strong> suma objetosci materialow brazowych i zielonych w porownaniu z pojemnoscia uzytkowa.",
      ],
    },
    { type: "title", text: "Rownowaga Miedzy Materialami Brazowymi a Zielonymi", level: 3 },
    {
      type: "paragraph",
      html: "Stosuj sprawdzona proporcje od dwoch do trzech czesci bogatych w wegiel materialow brazowych (suchy liscie, rozdrobniona tektura, drobne gałązki) na jedna czesc azotowych materialow zielonych (resztki warzyw, skoszona trawa). Kalkulator podaje docelowy zakres wagi i objetosci brazu.",
    },
    { type: "title", text: "Kontrola Wilgotnosci i Regularnego Napowietrzania", level: 3 },
    {
      type: "paragraph",
      html: "Utrzymuj wilgotnosc przypominajaca wycisnieta gąbke. Zbyt suchy kompost spowalnia aktywnosc mikroorganizmow, natomiast zbyt mokry kompost traci tlen i moze wytwarzac nieprzyjemne zapachy. Czeste mieszanie przywraca strukture i kieszenie powietrzne.",
    },
    {
      type: "tip",
      title: "Wskazowka Praktyczna dla Ogrodnikow",
      html: "Praktyczne obliczenie objetosci stanowi przewodnik dla przydomowego kompostowania i nie zastępuje chemicznej analizy laboratoryjnej C:N.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
