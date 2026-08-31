import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { WildlifeCameraTrapEffortPlannerLocaleContent } from '../entry';

const slug = 'planer-wysilku-fotopulapek-przyrodniczych';
const title = 'Planer wysiłku fotopułapek przyrodniczych';
const description = 'Planuj wysiłek fotopułapek, szacuj dni pracy kamer i obciążenie przeglądaniem zdjęć bez udawania, że to estymacja populacji.';
const faqData = [
  { question: 'Czym są dni pracy kamery?', answer: 'To liczba kamer pomnożona przez liczbę dni ich działania. Opisują wysiłek próbkowania, a nie liczbę zwierząt na obszarze.' },
  { question: 'Czy planer oblicza wielkość populacji?', answer: 'Nie. Szacuje wysiłek operacyjny i nominalną powierzchnię planowania. Liczebność, zagęszczenie i zajętość wymagają zweryfikowanego projektu oraz modelu uwzględniającego niepełne wykrywanie.' },
  { question: 'Co robi parametr odstępu?', answer: 'Tworzy nominalną kwadratową komórkę dla każdej kamery i porównuje ją z równym odstępem wynikającym z powierzchni i liczby kamer. Nie jest promieniem wykrywania.' },
  { question: 'Jak używać harmonogramu kontroli?', answer: 'Wykorzystaj tygodniowe punkty do zaplanowania wizyt, baterii, pamięci i przeglądu zdjęć. Zastąp je rzeczywistymi wizytami z protokołu terenowego.' },
];
const howToData = [
  { name: 'Opisz obszar badania', text: 'Wpisz powierzchnię, którą ma objąć rozmieszczenie kamer. Przełącznik metryczny lub imperialny zachowuje wartość fizyczną.' },
  { name: 'Rozplanuj wysiłek', text: 'Wpisz liczbę kamer, czas działania i docelowy odstęp. Szkic pokazuje względną siatkę, a nie współrzędne ani gwarantowane strefy wykrywania.' },
  { name: 'Oszacuj obciążenie zdjęciami', text: 'Wpisz oczekiwaną liczbę zdarzeń na kamerę dziennie. Planer mnoży ją przez dni pracy kamer i rozdziela na kontrole.' },
  { name: 'Przygotuj zapisy terenowe', text: 'Nadaj kamerom i sesjom unikalne identyfikatory, zapisz ustawienie i odnotuj każdą kontrolę, także bez wykrycia zwierzęcia.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pl' };

export const content: WildlifeCameraTrapEffortPlannerLocaleContent = {
  slug, title, description,
  ui: {
    areaPerCameraLabel: 'Powierzchnia na kamerę',
    labelSurveyArea: 'Obszar badania', labelCameraCount: 'Stanowiska kamer', labelDeploymentDays: 'Dni działania', labelSpacing: 'Docelowy odstęp stanowisk', labelTriggerRate: 'Oczekiwane zdarzenia na kamerę dziennie', unitHectares: 'ha', unitAcres: 'ac', unitMeters: 'm', unitFeet: 'ft', unitCameras: 'kamer', unitDays: 'dni', unitEventsPerDay: 'zdarzeń dziennie', helpSurveyArea: 'Obszar, który ma objąć badanie.', helpCameraCount: 'Aktywne kamery w tej kampanii.', helpDeploymentDays: 'Dni od instalacji do odbioru.', helpSpacing: 'Pomoc planistyczna, nie promień wykrywania.', helpTriggerRate: 'Użyj ostrożnej wartości z podobnej kampanii lub testu.', unitSystemLabel: 'System miar', metricLabel: 'Metryczny', imperialLabel: 'Imperialny', presetsTitle: 'Punkty startowe w terenie', presetBackyard: 'Skraj lasu', presetWoodland: 'Las mieszany', presetReserve: 'Duży rezerwat', mapLabel: 'Względny szkic rozmieszczenia', mapCaption: 'Ponumerowane stanowiska na względnej siatce planistycznej. Komórki pomagają ocenić odstęp, ale nie są mapą siedliska.', stationLabel: 'stanowisko', cameraDaysLabel: 'Dni pracy kamer', expectedEventsLabel: 'Oczekiwane zdarzenia', spacingLabel: 'Odstęp równej siatki', reviewLoadLabel: 'Zdarzenia na kontrolę', reviewScheduleTitle: 'Rytm kontroli', reviewScheduleText: 'Tygodniowe punkty pokazują obciążenie zdjęciami przed instalacją. Zastąp je wizytami z własnego protokołu.', reviewDayLabel: 'Dzień', reviewEventsLabel: 'oczekiwanych zdarzeń', statusBalanced: 'Odstęp wygląda na zrównoważony', statusSparse: 'Stanowiska wyglądają na szeroko rozstawione', statusDense: 'Stanowiska wyglądają na blisko rozstawione', statusReviewHeavy: 'Obciążenie przeglądem wymaga uwagi', statusNeedsInput: 'Uzupełnij plan rozmieszczenia', statusNote: 'To plan wysiłku badawczego. Nie mówi, ile zwierząt żyje na obszarze i nie gwarantuje wykrycia gatunku.', assumptionTitle: 'Założenia modelu', assumptionText: 'Nominalna powierzchnia traktuje każde stanowisko jako kwadrat oparty na docelowym odstępie. Oczekiwane zdarzenia zakładają stałe tempo dla kamer i dni.', limitationTitle: 'Ograniczenia terenowe', limitationText: 'Wybieraj miejsca według gatunku i pytania, nie tylko geometrii. Zapisuj identyfikatory, daty, kierunek, wysokość, siedlisko i kontrole bez wykrycia.',
  },
  seo: [
    { type: 'title', text: 'Planowanie wysiłku fotopułapek', level: 2 },
    { type: 'paragraph', html: 'Projekt fotopułapek przed instalacją odpowiada na dwa pytania. Jaki wysiłek próbkowania przedstawia rozmieszczenie? Czy przewidywany strumień zdjęć można zapisać, sprawdzić i udokumentować? Ten planer zamienia je na dni pracy kamer, zdarzenia, szkic stanowisk i kontrole.' },
    { type: 'title', text: 'Dni pracy kamer jako miara wysiłku', level: 3 },
    { type: 'paragraph', html: 'Dni pracy kamer to <code>stanowiska kamer × dni działania</code>. Dwanaście kamer przez 28 dni daje 336 dni pracy. Ułatwia to porównywanie kampanii, ale nie jest estymacją populacji i nie koryguje awarii, siedliska ani zachowania.' },
    { type: 'list', items: ['<strong>Stanowiska:</strong> urządzenia aktywne w kampanii.', '<strong>Dni działania:</strong> planowany czas od instalacji do odbioru.', '<strong>Tempo zdarzeń:</strong> zdarzenia na kamerę dziennie, nie każde zdjęcie z serii.', '<strong>Kontrole:</strong> zaplanuj pamięć, baterie, wizyty i przegląd.'] },
    { type: 'title', text: 'Czytanie szkicu jako pomocy terenowej', level: 3 },
    { type: 'paragraph', html: 'Szkic korzysta z powierzchni, liczby kamer i odstępu, aby pokazać względne rozmieszczenie. Nominalna powierzchnia to liczba stanowisk razy odstęp do kwadratu. Nie jest to powierzchnia czujnika, bo teren, roślinność, wysokość, kierunek i zachowanie zmieniają prawdopodobieństwo wykrycia.' },
    { type: 'title', text: 'Lepsze zapisy przed instalacją', level: 3 },
    { type: 'paragraph', html: 'Zdefiniuj gatunek docelowy i pytanie badawcze. Nadaj kamerom i sesjom stałe identyfikatory. Zapisuj datę, miejsce, wysokość, kierunek, siedlisko, ustawienia i działanie przy instalacji oraz kontroli. Kontrola bez wykrycia też jest obserwacją procesu.' },
    { type: 'tip', title: 'Nie zamieniaj wysiłku na liczebność', html: 'Fotopułapki mają niepełne wykrywanie. Użyj planera do budżetu terenu i zdjęć, a zweryfikowanego projektu ekologicznego do zajętości, liczebności, zagęszczenia lub zmian populacji.' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
