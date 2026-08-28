import type { FAQPage, HowToThing, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { UrbanGardenPlannerLocaleContent } from '../entry';

const slug = 'calcolatore-terriccio-e-raccolta-acqua-piovana';
const title = 'Pianificatore di terriccio e acqua piovana per orti urbani';
const description = 'Calcola il volume di terriccio per aiuole rialzate e stima la raccolta di acqua piovana per piccoli orti urbani.';

const faqData = [
  { question: 'Quanto terriccio serve per un aiuola rialzata?', answer: 'Inserisci la superficie coltivata e la profondità del substrato. Il pianificatore moltiplica i valori e converte il risultato in litri per ordinare meglio terriccio o compost.' },
  { question: 'Come si calcola l acqua piovana per un orto?', answer: 'Inserisci la superficie di raccolta e la pioggia. Il calcolo applica un fattore di deflusso dell 85 per cento e un fattore di raccolta del 90 per cento per una stima prudente.' },
  { question: 'Posso usarlo per una fioriera sul balcone?', answer: 'Sì. Usa l area della fioriera come superficie coltivata, aggiungi la profondità prevista e inserisci la superficie del tetto o della tettoia che alimenta il contenitore.' },
  { question: 'L acqua piovana raccolta è sicura per le piante commestibili?', answer: 'Non automaticamente. Controlla superficie e contenitore, prevedi filtraggio e drenaggio adeguati e segui le indicazioni locali.' },
];

const howToData = [
  { name: 'Misurare l area coltivata', text: 'Inserisci l area dell aiuola, del balcone o del contenitore che riceverà il substrato.' },
  { name: 'Scegliere la profondità', text: 'Indica la profondità prevista in centimetri, considerando anche il possibile assestamento.' },
  { name: 'Aggiungere la superficie di raccolta', text: 'Inserisci il tetto, la tettoia o un altra superficie che convoglia l acqua nel contenitore.' },
  { name: 'Provare un evento di pioggia', text: 'Inserisci la pioggia in millimetri e confronta l acqua raccolta con la dimensione dell orto.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'it' };

export const content: UrbanGardenPlannerLocaleContent = {
  slug, title, description,
  ui: {
    eyebrow: 'Un piccolo orto, misurato in strati vivi', headInputs: 'Imposta il tuo orto', headScene: 'Leggi il paesaggio', labelGardenArea: 'Area coltivata', labelDepth: 'Profondità del substrato', labelCollectionArea: 'Superficie di raccolta', labelRainfall: 'Evento di pioggia', unitSquareMeters: 'm²', unitCentimeters: 'cm', unitMillimeters: 'mm', unitLiters: 'L', helpGardenArea: 'Superficie dell aiuola, del balcone o del contenitore.', helpDepth: 'Lo strato di terra da riempire.', helpCollectionArea: 'La superficie che manda acqua al contenitore.', helpRainfall: 'Prova un acquazzone recente o una pioggia di progetto locale.', presetsTitle: 'Inizia da una forma', presetBalcony: 'Fioriera da balcone', presetRaisedBed: 'Aiuola rialzata', presetCommunity: 'Orto condiviso', labelSoilNeeded: 'Substrato necessario', labelWaterCaptured: 'Acqua raccolta', labelGardenDepth: 'Su questo orto', labelWateringArea: 'Con 10 mm d acqua', sceneCatchment: 'Raccolta', sceneGardenBed: 'Area coltivata', sceneSoil: 'Strato di terra', sceneWater: 'Acqua raccolta', statusBalanced: 'Una combinazione utile da pianificare', statusLightCapture: 'Un evento piovoso leggero', statusDeepBed: 'Un profilo di terra profondo', statusNoRain: 'In attesa della pioggia', statusNote: 'Usa questa istantanea per dimensionare i materiali e confrontare gli scenari. Non è una prescrizione d irrigazione.', assumptionTitle: 'Ipotesi di pianificazione', assumptionText: 'La stima conserva l 85 per cento della pioggia come deflusso e il 90 per cento dopo le perdite di raccolta. Un litro su un metro quadrato equivale a un millimetro d acqua.', limitationTitle: 'Usa l orto in sicurezza', limitationText: 'Prevedi il drenaggio, evita superfici contaminate e verifica le regole locali prima di usare acqua raccolta su colture commestibili.',
  },
  seo: [
    { type: 'title', text: 'Calcolare terriccio e acqua piovana per un orto urbano', level: 2 },
    { type: 'paragraph', html: 'Un aiuola rialzata, un balcone o un orto condiviso richiedono due risposte pratiche: quanti litri di substrato servono e quanta pioggia può raccogliere una superficie vicina? Questo pianificatore mostra entrambe le stime insieme.' },
    { type: 'title', text: 'Formula del volume di terriccio', level: 3 },
    { type: 'paragraph', html: 'Il calcolo è <code>superficie in m² × profondità in cm × 10 = litri di substrato</code>. Un area di 12 m² profonda 30 cm richiede 3.600 litri prima di considerare assestamento, drenaggio e schema di coltivazione.' },
    { type: 'list', items: ['<strong>Area coltivata:</strong> base dell aiuola, del balcone o del contenitore.', '<strong>Profondità:</strong> altezza prevista dello strato di substrato.', '<strong>Raccolta:</strong> tetto, tettoia o superficie di ingresso.', '<strong>Pioggia:</strong> precipitazione da provare in millimetri.'] },
    { type: 'title', text: 'Stima della raccolta di acqua piovana', level: 3 },
    { type: 'paragraph', html: 'La stima parte da <code>superficie di raccolta × pioggia</code>, poi applica l 85 per cento per il deflusso e il 90 per cento dopo le perdite di raccolta. È un confronto trasparente tra scenari, non una garanzia di disponibilità.' },
    { type: 'title', text: 'Confrontare scenari senza connessione', level: 3 },
    { type: 'paragraph', html: 'Prova una fioriera, un aiuola rialzata e un orto condiviso con i preset, poi sostituiscili con le tue misure. Nessun indirizzo, mappa o previsione meteorologica lascia il browser.' },
    { type: 'tip', title: 'Limiti importanti', html: 'Drenaggio, qualità dell acqua, evaporazione, scelta delle piante e regole locali richiedono ancora una decisione umana. Un tetto o un contenitore contaminato non è automaticamente adatto alle colture commestibili.' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
