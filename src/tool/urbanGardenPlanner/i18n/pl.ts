import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { UrbanGardenPlannerLocaleContent } from '../entry';

const slug = 'kalkulator-podloza-i-deszczowki-do-ogrodu';
const title = 'Planer podłoża i deszczówki dla ogrodu miejskiego';
const description = 'Oblicz objętość podłoża do podwyższonych grządek i oszacuj zbiór deszczówki dla małego ogrodu miejskiego.';
const faqData = [
  { question: 'Ile ziemi potrzebuję do podwyższonej grządki?', answer: 'Wpisz powierzchnię uprawy i głębokość podłoża. Planer mnoży te wartości i przelicza wynik na litry, aby ułatwić zamówienie ziemi lub kompostu.' },
  { question: 'Jak obliczyć deszczówkę dla ogrodu?', answer: 'Wpisz powierzchnię zbierającą wodę i wysokość opadu. Następnie planer stosuje współczynnik spływu 85 procent i zbioru 90 procent jako ostrożne założenie planistyczne.' },
  { question: 'Czy mogę użyć tego dla donicy na balkonie?', answer: 'Tak. Użyj powierzchni donicy jako obszaru uprawy, podaj planowaną głębokość i powierzchnię dachu lub daszku doprowadzającego wodę do zbiornika.' },
  { question: 'Czy zebrana deszczówka jest bezpieczna dla roślin jadalnych?', answer: 'Nie zawsze. Sprawdź powierzchnię zbierającą i zbiornik, zapewnij odpowiednie filtrowanie oraz odpływ i przestrzegaj lokalnych zaleceń.' },
];
const howToData = [
  { name: 'Zmierz miejsce uprawy', text: 'Wpisz powierzchnię grządki, balkonu lub pojemnika, który otrzyma podłoże.' },
  { name: 'Wybierz głębokość podłoża', text: 'Podaj planowaną głębokość w centymetrach, uwzględniając osiadanie.' },
  { name: 'Dodaj powierzchnię zbioru', text: 'Wpisz dach, daszek lub inną powierzchnię kierującą wodę do zbiornika.' },
  { name: 'Sprawdź opad', text: 'Wpisz wysokość opadu w milimetrach i porównaj wodę z wielkością ogrodu.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pl' };
export const content: UrbanGardenPlannerLocaleContent = {
  slug, title, description,
  ui: { eyebrow: 'Mały ogród mierzony żywymi warstwami', headInputs: 'Ustaw parametry ogrodu', headScene: 'Odczytaj krajobraz', labelGardenArea: 'Powierzchnia uprawy', labelDepth: 'Głębokość podłoża', labelCollectionArea: 'Powierzchnia zbioru', labelRainfall: 'Opad deszczu', unitSquareMeters: 'm²', unitCentimeters: 'cm', unitMillimeters: 'mm', unitLiters: 'l', helpGardenArea: 'Powierzchnia grządki, balkonu lub pojemnika.', helpDepth: 'Warstwa ziemi, którą chcesz wypełnić.', helpCollectionArea: 'Powierzchnia kierująca wodę do zbiornika.', helpRainfall: 'Sprawdź niedawny deszcz lub lokalny opad projektowy.', presetsTitle: 'Zacznij od kształtu', presetBalcony: 'Donica balkonowa', presetRaisedBed: 'Podwyższona grządka', presetCommunity: 'Ogród społecznościowy', labelSoilNeeded: 'Potrzebne podłoże', labelWaterCaptured: 'Zebrana woda', labelGardenDepth: 'Na tym ogrodzie', labelWateringArea: 'Przy 10 mm wody', sceneCatchment: 'Zbiór', sceneGardenBed: 'Miejsce uprawy', sceneSoil: 'Warstwa ziemi', sceneWater: 'Zebrana woda', statusBalanced: 'Przydatne połączenie do planowania', statusLightCapture: 'Lekki epizod deszczowy', statusDeepBed: 'Głęboki profil ziemi', statusNoRain: 'Oczekiwanie na opad', statusNote: 'Użyj tego obrazu do dobrania materiałów i porównania scenariuszy. To nie jest zalecenie podlewania.', assumptionTitle: 'Założenia planistyczne', assumptionText: 'Szacunek zachowuje 85 procent opadu jako spływ i 90 procent po stratach zbioru. Jeden litr na metrze kwadratowym to jeden milimetr wody.', limitationTitle: 'Zadbaj o bezpieczeństwo', limitationText: 'Zapewnij odpływ, unikaj skażonych powierzchni zbiorczych i sprawdź lokalne przepisy przed użyciem wody na roślinach jadalnych.' },
  seo: [
    { type: 'title', text: 'Oblicz podłoże i deszczówkę dla miejskiego ogrodu', level: 2 },
    { type: 'paragraph', html: 'Podwyższona grządka, balkon i ogród społecznościowy wymagają dwóch praktycznych odpowiedzi: ile litrów podłoża potrzeba oraz ile deszczu może zebrać pobliska powierzchnia? Ten planer pokazuje oba szacunki razem.' },
    { type: 'title', text: 'Wzór na objętość podłoża', level: 3 },
    { type: 'paragraph', html: 'Wzór to <code>powierzchnia w m² × głębokość w cm × 10 = litry podłoża</code>. Grządka o powierzchni 12 m² i głębokości 30 cm potrzebuje 3 600 litrów przed uwzględnieniem osiadania, drenażu i planu upraw.' },
    { type: 'list', items: ['<strong>Powierzchnia uprawy:</strong> podstawa grządki, balkonu lub pojemnika.', '<strong>Głębokość:</strong> wysokość planowanej warstwy podłoża.', '<strong>Powierzchnia zbioru:</strong> dach, daszek lub inne źródło wody.', '<strong>Opad:</strong> deszcz testowany w milimetrach.'] },
    { type: 'title', text: 'Szacowanie zbioru deszczówki', level: 3 },
    { type: 'paragraph', html: 'Szacunek zaczyna się od <code>powierzchnia zbioru × opad</code>, a potem uwzględnia 85 procent spływu i 90 procent po stratach zbioru. Wynik służy do porównania scenariuszy, a nie do obiecywania dostępnej ilości wody.' },
    { type: 'title', text: 'Porównuj scenariusze offline', level: 3 },
    { type: 'paragraph', html: 'Wypróbuj presety dla balkonu, grządki i ogrodu społecznościowego, a potem wpisz własne pomiary. Adres, mapa, prognoza pogody ani dane osobowe nie opuszczają przeglądarki.' },
    { type: 'tip', title: 'Ważne ograniczenia', html: 'Drenaż, jakość wody, parowanie, wybór roślin i lokalne przepisy nadal wymagają decyzji człowieka. Skażony dach lub zbiornik nie jest automatycznie odpowiedni dla roślin jadalnych.' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
