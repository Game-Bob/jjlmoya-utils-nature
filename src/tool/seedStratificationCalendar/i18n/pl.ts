import { createSeedCalendarContent } from '../localized';

export const content = createSeedCalendarContent({
  locale: 'pl',
  title: 'Kalendarz stratyfikacji nasion i terminów siewu',
  description: 'Utwórz plan przygotowania z datami, licząc wstecz od siewu albo do przodu od dnia, w którym nasiona są gotowe.',
  faq: [
    { question: 'Co oblicza ten kalendarz?', answer: 'Umieszcza moczenie, wilgotne fazy ciepłą i chłodną oraz siew w konkretnych dniach, licząc od daty docelowej lub od początku przygotowania.' },
    { question: 'Dlaczego są dwa tryby daty?', answer: 'Wybierz tryb daty siewu, gdy dzień jest ustalony, albo tryb gotowych nasion, gdy przygotowanie zaczyna się dziś i potrzebujesz przyszłej daty siewu.' },
    { question: 'Czy mogę zmienić czas i temperaturę?', answer: 'Tak. Wybierz profil początkowy i dopasuj fazy do opakowania nasion, źródła specjalistycznego oraz lokalnych warunków.' },
    { question: 'Czy plan gwarantuje kiełkowanie?', answer: 'Nie. Porządkuje daty, ale wiek, żywotność, wilgotność, spoczynek, pleśń i warunki siewu także wpływają na wynik.' },
  ],
  howTo: [
    { name: 'Wybierz profil nasion', text: 'Wybierz najbardziej zbliżony gatunek, aby załadować rozsądne fazy początkowe.' },
    { name: 'Wybierz tryb daty', text: 'Licz wstecz od siewu albo do przodu od dnia, w którym nasiona są gotowe.' },
    { name: 'Sprawdź fazy', text: 'Dopasuj dni moczenia, ciepła i chłodu oraz zakres zimnej temperatury.' },
    { name: 'Wykonaj sekwencję', text: 'Zacznij w dniu startu, przejdź przez wszystkie fazy i wysiej nasiona we wskazanym terminie.' },
  ],
  seoTitle: 'Zaplanuj okres przygotowania',
  seoIntro: 'Spoczynek nasion jest również problemem terminów. Gatunek wymagający wilgotnego chłodu może minąć właściwe okno siewu, jeśli przygotowanie zacznie się za późno. Zbyt długa obróbka zabiera czas i może sprzyjać pleśni albo przedwczesnemu kiełkowaniu. Kalendarz zamienia datę docelową w uporządkowaną sekwencję działań.',
  seoModes: 'Wybierz docelową datę siewu, aby liczyć wstecz, albo użyj trybu gotowych nasion, aby liczyć od początku przygotowania. Każda faza ma własne daty: moczenie przechodzi w kolejną obróbkę, a ostatnia faza kończy się dzień przed siewem. Wynik możesz wykorzystać na etykiecie pojemnika lub jako przypomnienie.',
  seoPhaseTitle: 'Jak czytać fazy',
  seoPhaseItems: ['<strong>Moczenie:</strong> nawilż nasiona przez podaną liczbę dni i nie przedłużaj bez wyraźnego powodu.', '<strong>Ciepło:</strong> utrzymuj wilgotne nasiona w ciepłym zakresie, gdy wymaga tego profil.', '<strong>Chłód:</strong> przechowuj je wilgotne i chłodne, regularnie sprawdzając pleśń lub wczesne korzenie.', '<strong>Siew:</strong> przenieś przygotowane nasiona do odpowiedniego podłoża w terminie docelowym.'],
  seoEvidenceTitle: 'Traktuj profile jako punkt wyjścia',
  seoEvidence: 'Profile nie są uniwersalnymi receptami. Odmiana, pochodzenie, wiek nasion i instrukcje na opakowaniu mogą zmienić spoczynek. Jeśli wiarygodny dostawca podaje inną długość zabiegu, zmień profil i zapisz użyte źródło zamiast uśredniać sprzeczne zalecenia.',
  seoTipTitle: 'Kalendarz nie jest testem kiełkowania',
  seoTip: 'Zapisz partię nasion, wilgotne podłoże, temperaturę i daty. Jeśli podczas chłodzenia pojawią się korzenie, wysiej nasiona ostrożnie. Jeśli pozostaną w spoczynku, nie przedłużaj automatycznie zabiegu; najpierw sprawdź zalecenia dla gatunku.',
  seoChecksTitle: 'Sprawdź przed rozpoczęciem',
  seoChecks: ['Upewnij się, że termin siewu pasuje do światła, mrozu i miejsca.', 'Oznacz pojemnik gatunkiem, początkiem, końcem i zakresem temperatury.', 'Użyj wilgotnego, ale przewiewnego podłoża i kontroluj je regularnie.', 'Zachowaj plan z opakowaniem, aby móc odtworzyć zabieg.'],
  seoLimitsTitle: 'Czego wynik nie może powiedzieć',
  seoLimits: 'Narzędzie nie określa spoczynku na podstawie zdjęcia, nie bada żywotności i nie zastępuje instrukcji dla konkretnego gatunku. Nie przewiduje też lokalnej pogody ani nie gwarantuje kiełkowania. Traktuj wynik jako uporządkowane obliczenie dat i sprawdź biologię w odpowiednim źródle.',
  ui: {
    labelProfile: 'Profil nasion', labelMode: 'Tryb planu', labelModeSowing: 'Chcę wysiać', labelModeReady: 'Nasiona są gotowe dziś', labelSowingDate: 'Docelowa data siewu', labelReadyDate: 'Data przygotowania', labelSoakDays: 'Dni moczenia', labelWarmDays: 'Ciepłe dni', labelColdDays: 'Chłodne dni', labelColdRange: 'Zakres chłodnej temperatury', labelUnits: 'Jednostki temperatury', labelMetric: 'Metryczne °C', labelImperial: 'Imperialne °F', labelFrom: 'Temperatura minimalna', labelTo: 'Temperatura maksymalna', labelGenerate: 'Aktualizuj kalendarz', labelReset: 'Resetuj profil', labelAddCalendar: 'Dodaj do mojego kalendarza', labelShare: 'Kopiuj link', labelCopied: 'Link skopiowany', labelPrint: 'Drukuj kompaktową etykietę', labelTechnique: 'Metoda', labelTodayStatus: 'Dzisiejszy stan', labelDayOf: 'dzień z', labelGantt: 'Oś przygotowania', labelTimeline: 'Oś przygotowania', labelNextAction: 'Bieżąca faza', labelCalendarStarts: 'początek kalendarza', labelSowingDay: 'dzień siewu', labelDuration: 'Przygotowanie', labelDays: 'dni', labelTemperature: 'Temperatura', labelReady: 'Wysiej dziś', labelUpcoming: 'Nadchodzące', labelActive: 'W toku', labelComplete: 'Plan ukończony', labelEditHint: 'Dopasuj sugestie do opakowania lub źródła specjalistycznego. Ostatnie ustawienia są zapisywane na tym urządzeniu.', labelWarm: 'Ciepła stratyfikacja', labelCold: 'Chłodna stratyfikacja', labelSoak: 'Mocz nasiona', labelSow: 'Wysiej nasiona', noteApple: 'Wilgotny chłód po krótkim moczeniu', noteLavender: 'Krótki chłód przed wiosennym siewem', noteMilkweed: 'Faza ciepła po której następuje chłód', noteRose: 'Długi chłód po moczeniu', profileApple: 'Jabłoń · Malus domestica', profileLavender: 'Lawenda · Lavandula angustifolia', profileMilkweed: 'Trojeść · Asclepias syriaca', profileRose: 'Róża · Rosa spp.', profileStrawberry: 'Truskawka · Fragaria × ananassa', profilePeach: 'Brzoskwinia · Prunus persica', profileCherry: 'Czereśnia · Prunus avium', profilePear: 'Grusza · Pyrus communis', profilePoppy: 'Mak · Papaver spp.', profileSunflower: 'Słonecznik · Helianthus annuus', profileTomato: 'Pomidor · Solanum lycopersicum', profileBasil: 'Bazylia · Ocimum basilicum', instructionSoak: 'Utrzymuj nasiona nawodnione przed kolejną fazą.', instructionWarm: 'Przechowuj wilgotne nasiona w ciepłym miejscu.', instructionCold: 'Utrzymuj nasiona wilgotne i chłodne, regularnie je kontrolując.', instructionSow: 'Wysiej do przygotowanego podłoża.', emptyState: 'Ustaw daty, aby utworzyć oś przygotowania.', warningDate: 'Wybierz prawidłową datę siewu.', warningTemperature: 'Sprawdź czas trwania i temperaturę przed aktualizacją kalendarza.',
  },
});
