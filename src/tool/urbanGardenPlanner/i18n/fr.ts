import type { FAQPage, HowToThing, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { UrbanGardenPlannerLocaleContent } from '../entry';

const slug = 'calculateur-substrat-et-eau-de-pluie-jardin-urbain';
const title = 'Planificateur de substrat et de pluie pour jardin urbain';
const description = 'Calculez le volume de substrat d une jardinière et estimez la récupération d eau de pluie pour un petit jardin.';

const faqData = [
  { question: 'De combien de terre ai-je besoin pour une plate-bande surélevée ?', answer: 'Saisissez la surface cultivée et la profondeur du substrat. Le planificateur les multiplie et convertit le résultat en litres pour préparer un achat de terre ou de compost.' },
  { question: 'Comment calculer la récupération de pluie pour un jardin ?', answer: 'Saisissez la surface de collecte et la hauteur de pluie. Le calcul applique ensuite un coefficient de ruissellement de 85 % et un coefficient de collecte de 90 % pour une estimation prudente.' },
  { question: 'Puis-je utiliser cet outil sur un balcon ?', answer: 'Oui. Utilisez la surface de la jardinière, la profondeur prévue et la surface du toit ou de l auvent qui alimente votre réservoir.' },
  { question: 'L eau de pluie est-elle sûre pour les plantes comestibles ?', answer: 'Pas automatiquement. Vérifiez la surface de collecte et le réservoir, prévoyez une filtration et un drainage adaptés et respectez les recommandations locales.' },
];

const howToData = [
  { name: 'Mesurer la zone de culture', text: 'Saisissez la surface de la plate-bande, du balcon ou du bac qui recevra le substrat.' },
  { name: 'Choisir la profondeur', text: 'Indiquez la profondeur prévue en centimètres, en tenant compte du tassement possible.' },
  { name: 'Ajouter la surface de collecte', text: 'Indiquez le toit, l auvent ou toute surface qui conduit l eau vers le réservoir.' },
  { name: 'Tester une pluie', text: 'Saisissez une hauteur de pluie en millimètres et comparez l eau récupérée à la taille du jardin.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'fr' };

export const content: UrbanGardenPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    eyebrow: 'Un petit jardin mesuré en couches vivantes', headInputs: 'Définir votre jardin', headScene: 'Lire le paysage', labelGardenArea: 'Surface cultivée', labelDepth: 'Profondeur du substrat', labelCollectionArea: 'Surface de collecte', labelRainfall: 'Épisode pluvieux', unitSquareMeters: 'm²', unitCentimeters: 'cm', unitMillimeters: 'mm', unitLiters: 'L', helpGardenArea: 'Surface de la plate-bande, du balcon ou du bac.', helpDepth: 'Couche de terre à remplir.', helpCollectionArea: 'Surface qui envoie l eau vers le réservoir.', helpRainfall: 'Essayez une averse récente ou une pluie de projet locale.', presetsTitle: 'Commencer par une forme', presetBalcony: 'Bac de balcon', presetRaisedBed: 'Plate-bande surélevée', presetCommunity: 'Jardin partagé', labelSoilNeeded: 'Substrat nécessaire', labelWaterCaptured: 'Eau récupérée', labelGardenDepth: 'Sur ce jardin', labelWateringArea: 'Avec 10 mm d eau', sceneCatchment: 'Collecte', sceneGardenBed: 'Zone cultivée', sceneSoil: 'Couche de sol', sceneWater: 'Eau récupérée', statusBalanced: 'Une combinaison utile à planifier', statusLightCapture: 'Un épisode peu pluvieux', statusDeepBed: 'Un profil de sol profond', statusNoRain: 'En attente d une pluie', statusNote: 'Utilisez cet instantané pour dimensionner les matériaux et comparer des scénarios. Ce n est pas une prescription d arrosage.', assumptionTitle: 'Hypothèses de planification', assumptionText: 'L estimation conserve 85 % de la pluie comme ruissellement et 90 % après les pertes de collecte. Un litre sur un mètre carré équivaut à un millimètre d eau.', limitationTitle: 'Préserver la sécurité du jardin', limitationText: 'Prévoyez le drainage, évitez les surfaces contaminées et vérifiez les règles locales avant d utiliser l eau récupérée sur des cultures comestibles.',
  },
  seo: [
    { type: 'title', text: 'Calculer le substrat et la pluie pour un jardin urbain', level: 2 },
    { type: 'paragraph', html: 'Une plate-bande surélevée, un balcon ou un jardin partagé posent deux questions concrètes: combien de litres de substrat faut-il et quelle quantité de pluie une surface voisine peut-elle récupérer? Ce planificateur met les deux estimations en regard.' },
    { type: 'title', text: 'Formule du volume de substrat', level: 3 },
    { type: 'paragraph', html: 'Le calcul est <code>surface en m² × profondeur en cm × 10 = litres de substrat</code>. Une plate-bande de 12 m² et de 30 cm de profondeur demande donc 3 600 litres avant le tassement, le drainage ou le plan de plantation.' },
    { type: 'list', items: ['<strong>Surface cultivée :</strong> plate-bande, balcon ou bac.', '<strong>Profondeur :</strong> hauteur prévue de la couche de substrat.', '<strong>Surface de collecte :</strong> toit, auvent ou autre surface d alimentation.', '<strong>Pluie :</strong> hauteur de précipitation à modéliser en millimètres.'] },
    { type: 'title', text: 'Estimer la récupération d eau de pluie', level: 3 },
    { type: 'paragraph', html: 'L estimation commence par <code>surface de collecte × hauteur de pluie</code>, puis conserve 85 % pour le ruissellement et 90 % après les pertes de collecte. Le résultat sert à comparer des scénarios, pas à promettre un volume disponible.' },
    { type: 'title', text: 'Comparer des scénarios hors ligne', level: 3 },
    { type: 'paragraph', html: 'Testez un balcon, une plate-bande et un jardin partagé avec les préréglages, puis remplacez-les par vos mesures. Aucune adresse, carte, prévision météo ou donnée personnelle ne quitte le navigateur.' },
    { type: 'tip', title: 'Limites importantes', html: 'Le drainage, la qualité de l eau, l évaporation, les plantes et les règles locales nécessitent encore une décision humaine. Une toiture ou un réservoir contaminé ne convient pas automatiquement aux cultures comestibles.' },
  ],
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
