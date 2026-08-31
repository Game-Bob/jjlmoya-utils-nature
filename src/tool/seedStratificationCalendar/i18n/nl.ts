import { createSeedCalendarContent } from '../localized';

export const content = createSeedCalendarContent({
  locale: 'nl',
  title: 'Kalender voor zaadstratificatie en zaaidata',
  description: 'Maak een gedateerd voorbereidingsplan door terug te rekenen vanaf de zaaidag of vooruit vanaf de dag waarop de zaden klaar zijn.',
  faq: [
    { question: 'Wat berekent deze kalender?', answer: 'De kalender zet weken, warme en koude vochtbehandeling en zaaien op exacte dagen, gerekend vanaf de doeldatum of de startdag.' },
    { question: 'Waarom zijn er twee datumstanden?', answer: 'Gebruik de zaaidatumstand als de plantdag vaststaat, of de stand zaden klaar als de voorbereiding vandaag begint en u de toekomstige zaaidag wilt weten.' },
    { question: 'Kan ik duur en temperatuur aanpassen?', answer: 'Ja. Kies een profiel als uitgangspunt en pas de fasen aan op de verpakking, een specialistische bron en uw lokale omstandigheden.' },
    { question: 'Garandeert het plan kieming?', answer: 'Nee. Het plan ordent de data. Leeftijd, kiemkracht, vocht, kiemrust, schimmel en zaaiomstandigheden beïnvloeden het resultaat.' },
  ],
  howTo: [
    { name: 'Kies een zaadprofiel', text: 'Selecteer de meest passende soort zodat realistische beginfasen worden geladen.' },
    { name: 'Kies een datumstand', text: 'Reken terug vanaf de zaaidag of vooruit vanaf de dag waarop de zaden klaar zijn.' },
    { name: 'Controleer de fasen', text: 'Pas de dagen voor weken, warmte en kou en het koude temperatuurbereik aan.' },
    { name: 'Volg de datumreeks', text: 'Begin op de startdatum, doorloop alle fasen en zaai op de aangegeven dag.' },
  ],
  seoTitle: 'Plan de voorbereidingsperiode',
  seoIntro: 'Kiemrust is ook een planningsprobleem. Een soort die een vochtige koudeperiode nodig heeft, kan het juiste zaaimoment missen als de voorbereiding te laat begint. Een onnodig lange behandeling kost tijd en kan schimmel of voortijdige kieming bevorderen. Deze kalender maakt van een doeldatum een duidelijke reeks uitvoerbare stappen.',
  seoModes: 'Kies een doeldatum om terug te rekenen, of gebruik de stand zaden klaar om vanaf het begin van de voorbereiding vooruit te rekenen. Elke fase heeft eigen data: weken loopt over in de volgende behandeling en de laatste behandeling eindigt de dag voor het zaaien. De uitkomst is bruikbaar voor een baklabel of herinnering.',
  seoPhaseTitle: 'Elke fase lezen',
  seoPhaseItems: ['<strong>Weken:</strong> maak de zaden gedurende de aangegeven dagen vochtig en verleng dit niet zonder duidelijke reden.', '<strong>Warm:</strong> houd de zaden vochtig binnen het warme bereik als het profiel dat vraagt.', '<strong>Koud:</strong> bewaar ze vochtig en koel en controleer regelmatig op schimmel of vroege wortels.', '<strong>Zaaien:</strong> breng de voorbereide zaden op de doeldatum in een geschikt substraat.'],
  seoEvidenceTitle: 'Gebruik profielen als beginpunt',
  seoEvidence: 'Profielen zijn geen universele voorschriften. Ras, herkomst, zaadleeftijd en aanwijzingen op de verpakking kunnen de kiemrust veranderen. Als een betrouwbare leverancier een andere duur adviseert, wijzig dan het profiel en noteer de gebruikte bron in plaats van tegenstrijdige adviezen te middelen.',
  seoTipTitle: 'Een kalender is geen kiemtest',
  seoTip: 'Noteer zaadpartij, vochtig medium, temperatuur en data. Verschijnen er wortels tijdens de koude fase, zaai dan voorzichtig. Blijven de zaden kiemrustig, verleng de behandeling dan niet automatisch maar controleer de soortinformatie.',
  seoChecksTitle: 'Voor de start controleren',
  seoChecks: ['Controleer of de zaaidatum past bij licht, vorst en locatie.', 'Label de bak met soort, start, einde en temperatuurbereik.', 'Gebruik een vochtig maar luchtig medium en controleer het regelmatig.', 'Bewaar het plan bij de verpakking zodat de behandeling traceerbaar blijft.'],
  seoLimitsTitle: 'Wat de uitkomst niet vertelt',
  seoLimits: 'De tool bepaalt geen kiemrust op basis van een foto, test geen kiemkracht en vervangt geen soortspecifieke instructies. Hij voorspelt ook het lokale weer niet en garandeert geen kieming. Zie de uitkomst als een georganiseerde datumrekening en controleer de biologie met een geschikte bron.',
  ui: {
    labelProfile: 'Zaadprofiel', labelMode: 'Planmodus', labelModeSowing: 'Ik wil zaaien op', labelModeReady: 'De zaden zijn vandaag klaar', labelSowingDate: 'Geplande zaaidatum', labelReadyDate: 'Startdatum', labelSoakDays: 'Dagen weken', labelWarmDays: 'Warme dagen', labelColdDays: 'Koude dagen', labelColdRange: 'Koud temperatuurbereik', labelUnits: 'Temperatuureenheden', labelMetric: 'Metrisch °C', labelImperial: 'Imperiaal °F', labelFrom: 'Minimumtemperatuur', labelTo: 'Maximumtemperatuur', labelGenerate: 'Kalender bijwerken', labelReset: 'Profiel herstellen', labelAddCalendar: 'Aan mijn kalender toevoegen', labelShare: 'Link kopiëren', labelCopied: 'Link gekopieerd', labelPrint: 'Compact label afdrukken', labelTechnique: 'Methode', labelTodayStatus: 'Status van vandaag', labelDayOf: 'dag van', labelGantt: 'Voorbereidingstijdlijn', labelTimeline: 'Voorbereidingstijdlijn', labelNextAction: 'Huidige fase', labelCalendarStarts: 'kalender begint', labelSowingDay: 'zaaidag', labelDuration: 'Voorbereiding', labelDays: 'dagen', labelTemperature: 'Temperatuur', labelReady: 'Vandaag zaaien', labelUpcoming: 'Binnenkort', labelActive: 'Bezig', labelComplete: 'Plan voltooid', labelEditHint: 'Verfijn de suggesties met de verpakking of een specialistische bron. De laatste instelling wordt op dit apparaat opgeslagen.', labelWarm: 'Warme stratificatie', labelCold: 'Koude stratificatie', labelSoak: 'Zaden weken', labelSow: 'Zaden zaaien', noteApple: 'Vochtige koudeperiode na kort weken', noteLavender: 'Korte koudeperiode voor het zaaien in het voorjaar', noteMilkweed: 'Warme fase gevolgd door een koude fase', noteRose: 'Lange koudeperiode na weken', profileApple: 'Appel · Malus domestica', profileLavender: 'Lavendel · Lavandula angustifolia', profileMilkweed: 'Zijdeplant · Asclepias syriaca', profileRose: 'Roos · Rosa spp.', profileStrawberry: 'Aardbei · Fragaria × ananassa', profilePeach: 'Perzik · Prunus persica', profileCherry: 'Zoete kers · Prunus avium', profilePear: 'Peer · Pyrus communis', profilePoppy: 'Klaproos · Papaver spp.', profileSunflower: 'Zonnebloem · Helianthus annuus', profileTomato: 'Tomaat · Solanum lycopersicum', profileBasil: 'Basilicum · Ocimum basilicum', instructionSoak: 'Houd de zaden gehydrateerd voor de volgende fase.', instructionWarm: 'Bewaar de vochtige zaden op een warme plaats.', instructionCold: 'Houd de zaden vochtig en koud en controleer ze regelmatig.', instructionSow: 'Zaai in het voorbereide substraat.', emptyState: 'Stel de data in om een voorbereidingstijdlijn te maken.', warningDate: 'Kies een geldige zaaidatum.', warningTemperature: 'Controleer duur en temperatuur voordat u de kalender bijwerkt.',
  },
});
