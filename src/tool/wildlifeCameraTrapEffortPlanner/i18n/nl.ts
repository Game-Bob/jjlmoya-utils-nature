import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { WildlifeCameraTrapEffortPlannerLocaleContent } from '../entry';

const slug = 'planner-inspanning-wildcamera';
const title = "Planner voor inspanning met wildcamera's";
const description = "Plan de inzet van wildcamera's, schat cameradagen en controlewerk en teken een opstelling zonder een populatieschatting te maken.";
const faqData = [
  { question: 'Wat zijn cameradagen?', answer: "Cameradagen zijn het aantal camera's vermenigvuldigd met het aantal actieve dagen. Ze beschrijven de bemonsteringsinspanning, niet het aantal dieren in een gebied." },
  { question: 'Berekent de planner de populatiegrootte?', answer: 'Nee. De planner schat operationele inspanning en een nominale planningsoppervlakte. Voor aantallen, dichtheid en bezetting zijn een gevalideerd ontwerp en een model voor onvolmaakte detectie nodig.' },
  { question: 'Wat doet de afstand tussen stations?', answer: "De afstand maakt een nominale vierkante cel per camera en vergelijkt die met een gelijkmatig raster uit oppervlakte en aantal camera's. Het is geen detectieradius." },
  { question: 'Hoe gebruik ik het controleschema?', answer: 'Gebruik de wekelijkse punten om bezoeken, batterijen, opslag en beeldcontrole te plannen. Vervang ze door de echte bezoeken uit je veldprotocol.' },
];
const howToData = [
  { name: 'Beschrijf het onderzoeksgebied', text: 'Voer het gebied in dat de inzet moet bemonsteren. De metrische of imperiale schakelaar houdt de fysieke waarde gelijk.' },
  { name: 'Plan het raster', text: "Voer camera's, inzetduur en doelafstand in. De schets toont een relatief planningsraster, geen coördinaten of gegarandeerde detectiezones." },
  { name: 'Schat de beeldbelasting', text: 'Voer verwachte gebeurtenissen per camera per dag in. De planner vermenigvuldigt dit met cameradagen en verdeelt het over controles.' },
  { name: 'Maak veldregistraties', text: "Geef camera's en sessies unieke codes, noteer de plaatsing en registreer elke controle, ook zonder wilddetectie." },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'nl' };

export const content: WildlifeCameraTrapEffortPlannerLocaleContent = {
  slug, title, description,
  ui: {
    areaPerCameraLabel: 'Oppervlakte per camera',
    labelSurveyArea: 'Onderzoeksgebied', labelCameraCount: 'Camerastations', labelDeploymentDays: 'Inzetdagen', labelSpacing: 'Doelafstand tussen stations', labelTriggerRate: 'Verwachte gebeurtenissen per camera per dag', unitHectares: 'ha', unitAcres: 'ac', unitMeters: 'm', unitFeet: 'ft', unitCameras: "camera's", unitDays: 'dagen', unitEventsPerDay: 'gebeurtenissen per dag', helpSurveyArea: 'Het gebied dat de inzet moet bemonsteren.', helpCameraCount: "Actieve camera's in deze campagne.", helpDeploymentDays: 'Dagen tussen plaatsing en ophalen.', helpSpacing: 'Een planningscel, geen detectieradius.', helpTriggerRate: 'Gebruik een voorzichtige waarde uit vergelijkbaar veldwerk of een test.', unitSystemLabel: 'Meetsysteem', metricLabel: 'Metrisch', imperialLabel: 'Imperiaal', presetsTitle: 'Startpunten voor het veld', presetBackyard: 'Bosrand bij huis', presetWoodland: 'Gemengd bos', presetReserve: 'Groot reservaat', mapLabel: 'Relatieve schets van de inzet', mapCaption: 'Genummerde stations in een relatief planningsraster. De cellen zijn geen habitatkaart.', stationLabel: 'station', cameraDaysLabel: 'Cameradagen', expectedEventsLabel: 'Verwachte gebeurtenissen', spacingLabel: 'Afstand in gelijkmatig raster', reviewLoadLabel: 'Gebeurtenissen per controle', reviewScheduleTitle: 'Controleritme', reviewScheduleText: 'Wekelijkse punten maken de beeldbelasting zichtbaar vóór plaatsing. Vervang ze door de bezoeken uit je protocol.', reviewDayLabel: 'Dag', reviewEventsLabel: 'verwachte gebeurtenissen', statusBalanced: 'Afstand lijkt evenwichtig', statusSparse: 'Stations lijken ver uit elkaar', statusDense: 'Stations lijken dicht bij elkaar', statusReviewHeavy: 'Controlebelasting vraagt aandacht', statusNeedsInput: 'Vul een volledig inzetplan in', statusNote: 'Dit is een inspanningsplan. Het zegt niet hoeveel dieren in het gebied leven en garandeert geen soortdetectie.', assumptionTitle: 'Aannames van het model', assumptionText: "De nominale oppervlakte behandelt elk station als een vierkante cel op basis van de doelafstand. Verwachte gebeurtenissen veronderstellen een constant tempo bij alle camera's en dagen.", limitationTitle: 'Grenzen in het veld', limitationText: 'Kies locaties op basis van soort en vraag, niet alleen op geometrie. Noteer codes, datums, richting, hoogte, habitat en controles zonder detectie.',
  },
  seo: [
    { type: 'title', text: "Inspanning met wildcamera's plannen", level: 2 },
    { type: 'paragraph', html: "Een project met wildcamera's moet vóór plaatsing twee vragen beantwoorden. Hoeveel bemonsteringsinspanning vertegenwoordigt de inzet? Kunnen de verwachte beelden worden opgeslagen, gecontroleerd en gedocumenteerd? Deze planner vertaalt dat naar cameradagen, gebeurtenissen, een stationsschets en controlemomenten." },
    { type: 'title', text: 'Cameradagen gebruiken als maat voor inspanning', level: 3 },
    { type: 'paragraph', html: "Cameradagen zijn <code>camerastations × inzetdagen</code>. Twaalf camera's die 28 dagen actief zijn leveren 336 cameradagen. Dat helpt campagnes vergelijken, maar is geen populatieschatting en corrigeert niet voor defecten, habitat of gedrag." },
    { type: 'list', items: ['<strong>Camerastations:</strong> apparaten die tijdens de campagne actief zijn.', '<strong>Inzetdagen:</strong> geplande dagen tussen plaatsing en ophalen.', '<strong>Gebeurtenissentempo:</strong> gebeurtenissen per camera per dag, niet elke foto uit een burst.', '<strong>Controles:</strong> plan opslag, batterijen, bezoeken en beeldcontrole.'] },
    { type: 'title', text: 'De veldschets als planningshulp lezen', level: 3 },
    { type: 'paragraph', html: "De schets gebruikt gebied, aantal camera's en doelafstand voor een relatieve opstelling. De nominale oppervlakte is het aantal stations maal de afstand in het kwadraat. Dit is geen sensoroppervlakte: terrein, vegetatie, paden, hoogte, richting en gedrag veranderen de detectiekans." },
    { type: 'title', text: 'Vooraf betere veldregistraties maken', level: 3 },
    { type: 'paragraph', html: 'Bepaal doelsoort en onderzoeksvraag. Geef elke camera en sessie een vaste code. Noteer bij plaatsing en controle datum, locatie, hoogte, richting, habitat, instellingen en werking. Ook een controle zonder detectie is een echte waarneming van het protocol.' },
    { type: 'tip', title: 'Maak van inspanning geen aantal dieren', html: "Wildcamera's hebben onvolmaakte detectie. Gebruik deze planner voor veld- en beeldwerk en een gevalideerd ecologisch ontwerp voor bezetting, aantallen, dichtheid of populatieverandering." },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
