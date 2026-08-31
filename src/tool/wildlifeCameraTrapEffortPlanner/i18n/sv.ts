import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { WildlifeCameraTrapEffortPlannerLocaleContent } from '../entry';

const slug = 'planer-for-viltkamerors-insats';
const title = 'Planerare för insats med viltkameror';
const description = 'Planera viltkamerornas insats, uppskatta kameradagar och granskningsarbete och skissa en placering utan att uppskatta en population.';
const faqData = [
  { question: 'Vad är kameradagar?', answer: 'Kameradagar är antalet kameror multiplicerat med antalet aktiva dagar. De beskriver provtagningsinsatsen, inte antalet djur i området.' },
  { question: 'Beräknar planeraren populationsstorlek?', answer: 'Nej. Den uppskattar arbetsinsats och en nominell planeringsyta. Täthet, antal och förekomst kräver en validerad studiedesign som tar hänsyn till ofullständig upptäckt.' },
  { question: 'Vad gör avståndet mellan stationerna?', answer: 'Det skapar en nominell kvadratisk planeringscell per kamera och jämför målet med ett jämnt rutnätsavstånd. Det är inte en upptäcktsradie.' },
  { question: 'Hur använder jag granskningsschemat?', answer: 'Använd veckopunkterna för att planera besök, batterier, lagring och bildgranskning. Ersätt dem med de faktiska besöken i fältprotokollet.' },
];
const howToData = [
  { name: 'Beskriv undersökningsområdet', text: 'Ange området som kamerorna ska täcka. Metrisk eller imperial växling behåller det fysiska värdet.' },
  { name: 'Planera placeringen', text: 'Ange kameror, varaktighet och målavstånd. Skissen visar ett relativt planeringsrutnät, inte koordinater eller garanterade upptäcktszoner.' },
  { name: 'Uppskatta bildmängden', text: 'Ange förväntade händelser per kamera och dag. Planeraren multiplicerar värdet med kameradagar och fördelar det på kontroller.' },
  { name: 'Förbered fältanteckningar', text: 'Ge kameror och sessioner unika identiteter, skriv ned placeringen och registrera varje kontroll även utan upptäckt.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'sv' };

export const content: WildlifeCameraTrapEffortPlannerLocaleContent = {
  slug, title, description,
  ui: {
    areaPerCameraLabel: 'Yta per kamera',
    labelSurveyArea: 'Undersökningsområde', labelCameraCount: 'Kamerastationer', labelDeploymentDays: 'Utplaceringsdagar', labelSpacing: 'Målavstånd mellan stationer', labelTriggerRate: 'Förväntade händelser per kamera och dag', unitHectares: 'ha', unitAcres: 'ac', unitMeters: 'm', unitFeet: 'ft', unitCameras: 'kameror', unitDays: 'dagar', unitEventsPerDay: 'händelser per dag', helpSurveyArea: 'Området som utplaceringen ska undersöka.', helpCameraCount: 'Aktiva kameror i kampanjen.', helpDeploymentDays: 'Dagar från montering till hämtning.', helpSpacing: 'Ett planeringsmått, inte en upptäcktsradie.', helpTriggerRate: 'Använd ett försiktigt värde från en liknande kampanj eller ett test.', unitSystemLabel: 'Mätsystem', metricLabel: 'Metriskt', imperialLabel: 'Imperialt', presetsTitle: 'Startpunkter för fältet', presetBackyard: 'Skogsbryn', presetWoodland: 'Blandskog', presetReserve: 'Stort reservat', mapLabel: 'Relativ skiss av placeringen', mapCaption: 'Numrerade stationer i ett relativt planeringsrutnät. Cellerna är inte en karta över livsmiljön.', stationLabel: 'station', cameraDaysLabel: 'Kameradagar', expectedEventsLabel: 'Förväntade händelser', spacingLabel: 'Avstånd i jämnt rutnät', reviewLoadLabel: 'Händelser per kontroll', reviewScheduleTitle: 'Kontrollrytm', reviewScheduleText: 'Veckopunkterna synliggör bildmängden före utplacering. Ersätt dem med protokollets besök.', reviewDayLabel: 'Dag', reviewEventsLabel: 'förväntade händelser', statusBalanced: 'Avståndet verkar balanserat', statusSparse: 'Stationerna verkar glest placerade', statusDense: 'Stationerna verkar tätt placerade', statusReviewHeavy: 'Granskningsbördan kräver uppmärksamhet', statusNeedsInput: 'Fyll i en fullständig plan', statusNote: 'Detta är en insatsplan. Den säger inte hur många djur som finns och garanterar inte upptäckt av en art.', assumptionTitle: 'Modellens antaganden', assumptionText: 'Den nominella ytan behandlar varje station som en kvadrat baserad på målavståndet. Förväntade händelser antar en konstant takt för alla kameror och dagar.', limitationTitle: 'Begränsningar i fält', limitationText: 'Välj platser efter art och fråga, inte bara geometri. Anteckna identiteter, datum, riktning, höjd, livsmiljö och kontroller utan upptäckt.',
  },
  seo: [
    { type: 'title', text: 'Planera insatsen med viltkameror', level: 2 },
    { type: 'paragraph', html: 'Ett projekt med viltkameror måste besvara två frågor före utplaceringen. Hur stor provtagningsinsats representerar planen? Kan det förväntade bildflödet lagras, granskas och dokumenteras? Planeraren gör detta till kameradagar, händelser, stationsskiss och kontrollpunkter.' },
    { type: 'title', text: 'Använd kameradagar för att beskriva insatsen', level: 3 },
    { type: 'paragraph', html: 'Kameradagar är <code>kamerastationer × utplaceringsdagar</code>. Tolv kameror under 28 dagar ger 336 kameradagar. Det hjälper att jämföra kampanjer men är ingen populationsuppskattning och korrigerar inte för fel, livsmiljö eller beteende.' },
    { type: 'list', items: ['<strong>Kamerastationer:</strong> enheter som är aktiva under kampanjen.', '<strong>Utplaceringsdagar:</strong> planerad tid från montering till hämtning.', '<strong>Händelsetakt:</strong> händelser per kamera och dag, inte varje bild i en serie.', '<strong>Kontroller:</strong> planera lagring, batterier, besök och granskning.'] },
    { type: 'title', text: 'Läs skissen som ett fälthjälpmedel', level: 3 },
    { type: 'paragraph', html: 'Skissen använder yta, antal kameror och målavstånd för en relativ placering. Den nominella ytan är antal stationer gånger avståndet i kvadrat. Det är inte sensorns yta: terräng, växtlighet, höjd, riktning och beteende ändrar upptäcktssannolikheten.' },
    { type: 'title', text: 'Förbered bättre anteckningar före utplacering', level: 3 },
    { type: 'paragraph', html: 'Bestäm målart och fråga. Ge varje kamera och session en stabil identitet. Registrera datum, plats, höjd, riktning, livsmiljö, inställningar och funktion vid montering och kontroll. Även en kontroll utan upptäckt är en observation.' },
    { type: 'tip', title: 'Gör inte insats till populationsantal', html: 'Viltkameror har ofullständig upptäckt. Använd planeraren för fält- och bildarbete och en validerad ekologisk design för förekomst, antal, täthet eller populationsförändring.' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
