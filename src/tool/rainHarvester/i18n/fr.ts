import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { RainHarvesterLocaleContent } from '../index';

const slug = 'calculateur-eau-pluie';
const title = 'Calculateur de récupération d\'eau de pluie';
const description = 'Calculez la quantité d\'eau que vous pouvez collecter sur votre toit et dimensionnez votre réservoir de stockage.';

const faqData = [
  {
    question: 'Combien d\'eau puis-je réellement collecter sur mon toit ?',
    answer: 'La règle générale est que pour chaque mètre carré de toit et chaque millimètre de pluie, vous pouvez collecter environ 1 litre d\'eau. Cependant, il y a des pertes par évaporation et filtration ajustées avec le "coefficient de ruissellement".',
  },
  {
    question: 'Qu\'est-ce que le coefficient de ruissellement ?',
    answer: 'C\'est un pourcentage qui indique la quantité d\'eau perdue selon le matériau du toit. Un toit en métal o en tuiles est très efficace (0,85-0,95), tandis qu\'un toit en gravier ou en terre est beaucoup moins efficace (0,1-0,3).',
  },
  {
    question: 'Comment dimensionner le réservoir de stockage ?',
    answer: 'Vous devez calculer le volume de pluie maximum attendu par mois et le croiser avec votre consommation mensuelle estimée. Un réservoir trop petit débordera pendant les tempêtes, et un réservoir trop grand sera inutilement coûteux.',
  },
  {
    question: 'Peut-on boire l\'eau de pluie collectée en toute sécurité ?',
    answer: 'Pas directement. L\'eau transporte de la poussière, des fientes d\'oiseaux et des particules en suspension. Pour la consommation humaine, elle doit passer par des filtres à sédiments, du charbon actif et une désinfection par lumière UV ou chlore.',
  },
];

const howToData = [
  {
    name: 'Mesurer la surface horizontale',
    text: 'Mesurez la longueur et la largeur de la base de votre toit (pas la surface inclinée, mais la zone qui projette des ombres sur le sol).',
  },
  {
    name: 'Vérifier les précipitations locales',
    text: 'Recherchez auprès du service météorologique national les précipitations annuelles ou mensuelles moyennes de votre région en millimètres (mm).',
  },
  {
    name: 'Appliquer l\'efficacité des matériaux',
    text: 'Sélectionnez le matériau de votre toit dans notre calculateur pour déduire l\'eau qui sera perdue par absorption ou chaleur.',
  },
  {
    name: 'Calculer le volume requis',
    text: 'Utilisez le résultat en litres annuels pour choisir un réservoir capable de stocker au moins 20 à 30 % de la récolte totale pour les périodes sèches.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

export const content: RainHarvesterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Paramètres du toit',
    headResults: 'Potentiel de récolte',
    labelArea: 'Surface du toit',
    labelRainfall: 'Précipitations annuelles',
    labelMaterial: 'Matériau du toit',
    unitM2: 'm²',
    unitMm: 'mm',
    unitLiters: 'Litres',
    helpRainfall: 'Vous ne savez pas ? Recherchez "précipitations annuelles moyennes [votre ville]" sur Google.',
    efficiencyTitle: 'Facteur d\'efficacité',
    efficiencyNote: 'Une perte de 10% est appliquée pour les filtres et l\'évaporation.',
    resultTitle: 'Potentiel de récolte annuel',
    equivalenciesTitle: 'Équivalences pratiques',
    labelFlushes: 'Chasses d\'eau',
    labelShowers: 'Douches (10 min)',
    labelGarden: 'Arrosages du jardin',
    gardenArea: '(50m²)',
    materialMetal: 'Métal / Tuile émaillée',
    materialClay: 'Tuile arabe / Argile',
    materialConcrete: 'Béton / Asphalte',
    materialGravel: 'Gravier / Toit végétalisé',
  },
  seo: [
    {
      type: 'title',
      text: 'Récupération de l\'eau de pluie : Autonomie et durabilité',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La plupart des propriétaires ignorent le potentiel de leur propre toit. Un toit standard peut capturer des milliers de litres d\'eau gratuite chaque année. Cet outil quantifie ce potentiel, vous permettant de calculer exactement la quantité d\'eau que vous pouvez "récolter" et de déterminer la taille idéale du réservoir de stockage.',
    },
    {
      type: 'title',
      text: 'Logique de Calcul',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La formule de base pour la collecte de l\'eau de pluie est simple mais puissante :',
    },
    {
      type: 'paragraph',
      html: '<code style="display:block;padding:1rem;background:var(--bg-alt);border-radius:0.5rem;margin:1rem 0;font-family:monospace;">Volume = Surface × Précipitations × Coefficient de Ruissellement × Efficacité du Filtre</code>',
    },
    {
      type: 'list',
      items: [
        '<strong>Surface :</strong> L\'empreinte de votre toit (longueur × largeur projetée).',
        '<strong>Précipitations :</strong> La pluie tombée en millimètres.',
        '<strong>Coefficient :</strong> La quantité d\'eau que votre toit perd (ex: absorption).',
        '<strong>Efficacité :</strong> Pertes dans les filtres avant le réservoir (~10%).',
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi collecter l\'eau de pluie ?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Économies :</strong> Réduisez considérablement votre facture d\'eau.',
        '<strong>Jardinage :</strong> Les plantes adorent l\'eau sans chlore ni calcaire.',
        '<strong>Resiliénce :</strong> Maintenez une réserve d\'urgence en cas de coupure.',
      ],
    },
    {
      type: 'title',
      text: 'Dimensionnement du réservoir',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'erreur la plus courante est d\'acheter un réservoir en se basant uniquement sur le budget. S\'il est trop petit, vous perdrez des milliers de litres par débordement. S\'il est trop grand, vous dépenserez de l\'argent inutilement. Une règle générale est d\'avoir une capacité de stockage pour <strong>3 mois</strong> de précipitations moyennes dans votre région, vous permettant de traverser les saisons sèches.',
    },
  ],
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
