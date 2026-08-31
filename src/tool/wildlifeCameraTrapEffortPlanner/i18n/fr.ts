import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { WildlifeCameraTrapEffortPlannerLocaleContent } from '../entry';

const slug = 'planificateur-effort-pieges-photographiques-faune';
const title = "Planificateur d'effort des pièges photographiques";
const description = "Planifiez l'effort des pièges photographiques, estimez les jours caméra et la charge de vérification, puis esquissez un réseau de terrain sans estimer une population.";
const faqData = [
  { question: 'Que sont les jours caméra ?', answer: "Les jours caméra correspondent au nombre de caméras multiplié par le nombre de jours actifs. Ils décrivent l'effort d'échantillonnage, pas le nombre d'animaux dans la zone." },
  { question: 'Le planificateur calcule-t-il la taille d une population ?', answer: 'Non. Il estime l effort operationnel et une empreinte nominale de planification. L abondance, la densite et l occupation demandent un protocole valide et un modele tenant compte de la detection imparfaite.' },
  { question: 'Que fait la distance entre stations ?', answer: 'Elle cree une cellule carree nominale pour chaque camera et compare la distance cible a celle d une grille reguliere. Ce n est pas un rayon de detection.' },
  { question: 'Comment utiliser le calendrier de verification ?', answer: 'Utilisez les points hebdomadaires pour planifier les visites et le volume d images. Comparez-les au stockage, aux batteries et a votre capacite de verification, puis notez chaque visite reelle.' },
];
const howToData = [
  { name: 'Decrire la zone d etude', text: 'Saisissez la surface que le dispositif doit echantillonner. Le bouton Metric ou Imperial conserve la valeur physique lors du changement d unite.' },
  { name: 'Placer l effort sur le terrain', text: 'Saisissez le nombre de cameras, la duree et la distance cible. Le schema montre des stations relatives, pas des coordonnees ni des zones garanties.' },
  { name: 'Estimer la charge d images', text: 'Saisissez le nombre attendu de declenchements par camera et par jour. Le planificateur le multiplie par les jours camera et le repartit sur les verifications hebdomadaires.' },
  { name: 'Preparer les fiches de terrain', text: 'Attribuez des identifiants uniques aux cameras et aux sessions, notez la pose et consignez chaque verification, meme sans detection.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'fr' };

export const content: WildlifeCameraTrapEffortPlannerLocaleContent = {
  slug, title, description,
  ui: {
    areaPerCameraLabel: 'Surface par caméra',
    labelSurveyArea: 'Zone d etude', labelCameraCount: 'Stations camera', labelDeploymentDays: 'Jours de pose', labelSpacing: 'Distance cible entre stations', labelTriggerRate: 'Declenchements attendus par camera et par jour', unitHectares: 'ha', unitAcres: 'ac', unitMeters: 'm', unitFeet: 'ft', unitCameras: 'cameras', unitDays: 'jours', unitEventsPerDay: 'evenements par jour', helpSurveyArea: 'La surface a echantillonner.', helpCameraCount: 'Cameras actives dans cette campagne.', helpDeploymentDays: 'Jours entre la pose et le retrait.', helpSpacing: 'Une aide de planification, pas un rayon de detection.', helpTriggerRate: 'Utilisez un taux prudent issu d une campagne comparable ou d un test.', unitSystemLabel: 'Systeme de mesure', metricLabel: 'Metrique', imperialLabel: 'Imperial', presetsTitle: 'Points de depart terrain', presetBackyard: 'Lisiere proche', presetWoodland: 'Foret mixte', presetReserve: 'Grande reserve',
    mapLabel: 'Schema relatif du dispositif', mapCaption: 'Stations numerotees sur une grille relative. Les cellules aident a discuter des distances, mais ne sont pas une carte de couverture de l habitat.', stationLabel: 'station', cameraDaysLabel: 'Jours camera', expectedEventsLabel: 'Evenements attendus', spacingLabel: 'Distance de grille reguliere', reviewLoadLabel: 'Evenements par verification', reviewScheduleTitle: 'Rythme de verification', reviewScheduleText: 'Les points hebdomadaires rendent la charge d images visible avant la pose. Remplacez-les par les visites de votre protocole.', reviewDayLabel: 'Jour', reviewEventsLabel: 'evenements attendus', statusBalanced: 'Distance apparemment equilibree', statusSparse: 'Stations apparemment eloignees', statusDense: 'Stations apparemment rapprochees', statusReviewHeavy: 'Charge de verification a surveiller', statusNeedsInput: 'Completez le plan de pose', statusNote: 'C est un plan d effort. Il ne dit pas combien d animaux vivent dans la zone et ne garantit pas la detection d une espece.', assumptionTitle: 'Hypotheses du modele', assumptionText: 'L empreinte nominale traite chaque station comme une cellule carree fondee sur la distance cible. Les evenements attendus supposent un taux constant entre cameras et jours.', limitationTitle: 'Limites terrain', limitationText: 'Choisissez les emplacements selon l espece et la question, pas seulement selon la geometrie. Notez les identifiants, dates, orientation, hauteur, habitat et controles sans detection pour tenir compte de la detection imparfaite.',
  },
  seo: [
    { type: 'title', text: 'Planifier l effort d echantillonnage par pieges photographiques', level: 2 },
    { type: 'paragraph', html: 'Un projet de piegeage photographique doit resoudre deux questions avant d obtenir une liste d especes. Quel effort represente le dispositif ? Le flux d images peut-il etre verifie, stocke et documente ? Ce planificateur transforme ces questions en jours camera, evenements attendus, schema relatif et points de verification.' },
    { type: 'title', text: 'Decrire l effort avec les jours camera', level: 3 },
    { type: 'paragraph', html: "Les jours caméra se calculent ainsi: <code>stations caméra × jours de pose</code>. Douze caméras actives pendant 28 jours produisent 336 jours caméra. Ce nombre compare des campagnes, mais n'estime pas une population et ne corrige ni les pannes ni les différences d'habitat ou de comportement." },
    { type: 'list', items: ['<strong>Stations camera :</strong> appareils actifs durant la campagne.', '<strong>Jours de pose :</strong> jours prevus entre installation et retrait.', '<strong>Taux de declenchement :</strong> evenements par camera et par jour, pas chaque photo d une rafale.', '<strong>Verifications :</strong> utilisez la charge attendue pour planifier stockage, batteries et visites.'] },
    { type: 'title', text: 'Lire le schema comme une aide de terrain', level: 3 },
    { type: 'paragraph', html: 'Le schema utilise la surface, le nombre de cameras et la distance cible pour montrer une disposition relative. L empreinte nominale est le nombre de stations multiplie par la distance au carre. C est une aide geometrique transparente, pas la surface detectee par un capteur. Relief, vegetation, chemins, hauteur, orientation et comportement modifient la probabilite de detection.' },
    { type: 'title', text: 'Preparer les releves avant la pose', level: 3 },
    { type: 'paragraph', html: 'Definissez les especes cibles et la question avant de poser les appareils. Attribuez un identifiant stable a chaque camera et session. Notez date, emplacement, hauteur, orientation, habitat, reglages et fonctionnement a la pose et a chaque verification. Une verification sans detection reste une observation.' },
    { type: 'tip', title: 'Ne pas transformer l effort en abondance', html: 'Les pieges photographiques ont une detection imparfaite. Utilisez cet outil pour budgeter le terrain et le tri des images, puis un protocole ecologique valide pour occupation, abondance, densite ou evolution de population.' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
