import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { WildlifeCameraTrapEffortPlannerLocaleContent } from '../entry';

const slug = 'pianificatore-sforzo-fototrappole-fauna';
const title = 'Pianificatore dello sforzo con fototrappole';
const description = 'Pianifica lo sforzo delle fototrappole, stima i giorni fotocamera e organizza i controlli senza trasformare l impegno in una stima della popolazione.';
const faqData = [
  { question: 'Che cosa sono i giorni fotocamera?', answer: 'Sono il numero di fotocamere moltiplicato per i giorni di attività. Descrivono lo sforzo di campionamento, non il numero di animali presenti.' },
  { question: 'Il pianificatore calcola la dimensione della popolazione?', answer: 'No. Stima lo sforzo operativo e un impronta nominale. Abbondanza, densità e occupazione richiedono un protocollo valido e un modello per la rilevazione imperfetta.' },
  { question: 'Che cosa indica la distanza tra le stazioni?', answer: 'Crea una cella quadrata nominale per fotocamera e confronta la distanza obiettivo con quella di una griglia uniforme. Non è un raggio di rilevamento.' },
  { question: 'Come si usa il calendario dei controlli?', answer: 'Usa i punti settimanali per pianificare visite, batterie, memoria e revisione. Sostituiscili con le visite reali previste dal protocollo di campo.' },
];
const howToData = [
  { name: 'Descrivi l area di studio', text: 'Inserisci l area che il campionamento dovrebbe coprire. Il selettore metrico o imperiale mantiene coerente il valore fisico.' },
  { name: 'Disegna lo sforzo', text: 'Inserisci fotocamere, durata e distanza obiettivo. Lo schema mostra una griglia relativa, non coordinate o zone di rilevamento garantite.' },
  { name: 'Stima il carico di immagini', text: 'Inserisci gli eventi attesi per fotocamera al giorno. Il pianificatore li moltiplica per i giorni fotocamera e li distribuisce sui controlli.' },
  { name: 'Prepara i registri di campo', text: 'Assegna identificativi univoci, registra posa e impostazioni e annota ogni controllo, anche quando non viene rilevato alcun animale.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'it' };

export const content: WildlifeCameraTrapEffortPlannerLocaleContent = {
  slug, title, description,
  ui: {
    areaPerCameraLabel: 'Area per fotocamera',
    labelSurveyArea: 'Area di studio', labelCameraCount: 'Stazioni fotocamera', labelDeploymentDays: 'Giorni di posa', labelSpacing: 'Distanza obiettivo', labelTriggerRate: 'Eventi attesi per fotocamera al giorno', unitHectares: 'ha', unitAcres: 'ac', unitMeters: 'm', unitFeet: 'ft', unitCameras: 'fotocamere', unitDays: 'giorni', unitEventsPerDay: 'eventi al giorno', helpSurveyArea: 'Area che il campionamento dovrebbe coprire.', helpCameraCount: 'Fotocamere attive nella campagna.', helpDeploymentDays: 'Giorni tra installazione e ritiro.', helpSpacing: 'Aiuto per la pianificazione, non raggio di rilevamento.', helpTriggerRate: 'Usa un valore prudente da una campagna simile o da un test.', unitSystemLabel: 'Sistema di misura', metricLabel: 'Metrico', imperialLabel: 'Imperiale', presetsTitle: 'Punti di partenza sul campo', presetBackyard: 'Margine del giardino', presetWoodland: 'Bosco misto', presetReserve: 'Grande riserva', mapLabel: 'Schema relativo della posa', mapCaption: 'Stazioni numerate su una griglia relativa. Le celle aiutano con le distanze, ma non sono una mappa dell habitat.', stationLabel: 'stazione', cameraDaysLabel: 'Giorni fotocamera', expectedEventsLabel: 'Eventi attesi', spacingLabel: 'Distanza della griglia uniforme', reviewLoadLabel: 'Eventi per controllo', reviewScheduleTitle: 'Ritmo dei controlli', reviewScheduleText: 'I punti settimanali rendono visibile il carico prima della posa. Sostituiscili con le visite del tuo protocollo.', reviewDayLabel: 'Giorno', reviewEventsLabel: 'eventi attesi', statusBalanced: 'Distanza apparentemente equilibrata', statusSparse: 'Stazioni apparentemente lontane', statusDense: 'Stazioni apparentemente vicine', statusReviewHeavy: 'Il carico di revisione richiede attenzione', statusNeedsInput: 'Completa il piano di posa', statusNote: 'È un piano di sforzo. Non indica quanti animali vivono nell area e non garantisce il rilevamento di una specie.', assumptionTitle: 'Ipotesi del modello', assumptionText: 'L impronta nominale tratta ogni stazione come una cella quadrata basata sulla distanza obiettivo. Gli eventi attesi suppongono un tasso costante tra fotocamere e giorni.', limitationTitle: 'Limiti sul campo', limitationText: 'Scegli i punti in base alla specie e alla domanda, non solo alla geometria. Registra identificativi, date, orientamento, altezza, habitat e controlli senza rilevamenti.',
  },
  seo: [
    { type: 'title', text: 'Pianificare lo sforzo delle fototrappole', level: 2 },
    { type: 'paragraph', html: 'Un progetto con fototrappole deve risolvere due problemi prima della posa. Quanto sforzo rappresenta la campagna? Il flusso previsto di immagini può essere controllato, archiviato e documentato? Questo strumento converte le risposte in giorni fotocamera, eventi, schema delle stazioni e controlli.' },
    { type: 'title', text: 'Usare i giorni fotocamera per descrivere lo sforzo', level: 3 },
    { type: 'paragraph', html: 'I giorni fotocamera sono <code>stazioni fotocamera × giorni di posa</code>. Dodici fotocamere attive per 28 giorni producono 336 giorni fotocamera. Il numero confronta campagne, ma non stima popolazioni e non corregge guasti, habitat o comportamento.' },
    { type: 'list', items: ['<strong>Stazioni:</strong> dispositivi attivi nella campagna.', '<strong>Giorni:</strong> periodo previsto tra installazione e ritiro.', '<strong>Tasso di eventi:</strong> eventi per fotocamera e giorno, non ogni immagine di una raffica.', '<strong>Controlli:</strong> pianifica memoria, batterie, visite e revisione.'] },
    { type: 'title', text: 'Leggere lo schema come aiuto di campo', level: 3 },
    { type: 'paragraph', html: 'Lo schema usa area, numero di fotocamere e distanza obiettivo per mostrare una disposizione relativa. L impronta nominale è il numero di stazioni moltiplicato per la distanza al quadrato. Non rappresenta la superficie rilevata dal sensore: terreno, vegetazione, altezza, orientamento e comportamento cambiano la probabilità di rilevamento.' },
    { type: 'title', text: 'Preparare registri migliori prima della posa', level: 3 },
    { type: 'paragraph', html: 'Definisci specie obiettivo e domanda di ricerca. Assegna un codice stabile a ogni fotocamera e sessione. Registra data, posizione, altezza, orientamento, habitat, impostazioni e funzionamento. Anche un controllo senza rilevamenti è un osservazione del protocollo.' },
    { type: 'tip', title: 'Non trasformare lo sforzo in abbondanza', html: 'Le fototrappole hanno rilevazione imperfetta. Usa il pianificatore per il budget operativo e un disegno ecologico validato per occupazione, abbondanza, densità o cambiamento della popolazione.' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
