import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DigitalCarbonLocaleContent } from '../index';

const slug = 'calculateur-empreinte-carbone-numerique';
const title = 'Calculateur d\'empreinte carbone numérique';
const description = 'Analysez l\'impact environnemental de toute page web. Estimez la consommation d\'énergie et les émissions de CO₂ par visite.';

const faqData = [
  {
    question: 'Qu\'est-ce que l\'empreinte carbone d\'une page web ?',
    answer: 'C\'est la quantité de gaz à effet de serre, principalement le CO₂, émise dans l\'atmosphère à la suite de l\'énergie consommée par les serveurs, les réseaux de transmission et l\'appareil de l\'utilisateur pour charger et afficher une page web.',
  },
  {
    question: 'Comment mesure-t-on l\'impact d\'un site web ?',
    answer: 'Il est généralement mesuré en grammes de CO₂ équivalent (gCO₂e) par visite. Un site web efficace émet moins de 0,2 g de CO₂, tandis qu\'une page peu optimisée puede dépasser 2 ou 3 g par chargement.',
  },
  {
    question: 'Pourquoi internet pollue-t-il ?',
    answer: 'Parce que toute l\'infrastructure nécessaire (centres de données, câbles sous-marins, routeurs WiFi, smartphones) fonctionne à l\'électricité qui, dans une grande partie du monde, provient encore de la combustion du charbon ou du gaz.',
  },
  {
    question: 'Comment réduire le CO₂ de mon site web ?',
    answer: 'Le moyen le plus efficace est de réduire le poids de la page : optimisez les images (WebP), minimisez les fichiers CSS y JS, utilisez le chargement différé (lazy loading) y choisissez un hébergeur utilisant des énergies renouvelables.',
  },
];

const howToData = [
  {
    name: 'Saisir l\'URL',
    text: 'Tapez l\'adresse web de la page que vous souhaitez analyser dans le champ de saisie.',
  },
  {
    name: 'Lancer l\'analyse',
    text: 'Cliquez sur le bouton d\'analyse pour que notre outil estime le poids des ressources de la page.',
  },
  {
    name: 'Consulter votre évaluation',
    text: 'Obtenez une note de A+ à F basée sur l\'efficacité énergétique du site web analysé.',
  },
  {
    name: 'Appliquer les améliorations',
    text: 'Utilisez la liste de conseils personnalisés pour réduire le poids de votre site et son impact environnemental.',
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

export const content: DigitalCarbonLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Analyseur d\'URL',
    headResults: 'Résultat de l\'impact',
    headTips: 'Conseils d\'optimisation',
    labelUrl: 'URL de la page',
    btnAnalyze: 'Analyser le site',
    btnAnalyzing: 'Analyse en cours...',
    placeholderUrl: 'https://exemple.fr',
    errorInvalidUrl: 'Veuillez saisir une URL valide.',
    errorFetchFailed: 'Impossible d\'analyser le site. Essayez une autre URL.',
    
    resultTitle: 'Empreinte carbone numérique',
    resultSubtitle: 'Efficacité estimée de la page',
    co2PerVisit: 'CO₂ par visite',
    energyPerVisit: 'Énergie consommée',
    co2Annual: 'CO₂ annuel (100k visites)',
    impactTitle: 'Impact réel annuel',
    impactTrees: 'Arbres nécessaires',
    impactKm: 'Km en voiture (approx.)',
    treesLabel: 'Arbres',
    kmLabel: 'Kilomètres',
    
    ratingExcellent: 'Excellent. Cette page consomme très peu d\'énergie par rapport à la moyenne mondiale.',
    ratingVeryGood: 'Très bonne efficacité. La page est bien optimisée et a un impact minimal.',
    ratingGood: 'Efficacité acceptable. Il y a de la marge pour s\'améliorer mais c\'est en dessous de la moyenne.',
    ratingAverage: 'Dans la moyenne. La page consomme ce qui est attendu sur le web actuel.',
    ratingPoor: 'Au-dessus de la moyenne. Pensez à optimiser les images, les scripts et les polices.',
    ratingVeryPoor: 'Impact élevé. Le poids de la page est significatif et devrait être réduit.',
    ratingCritical: 'Impact très élevé. Il y a une grande opportunité de réduire la taille de la page.',
    
    tipImages: 'Convertissez les images en WebP ou AVIF pour réduire leur poids jusqu\'à 70%.',
    tipCompression: 'Activez Brotli ou GZIP sur le serveur pour compresser les ressources.',
    tipLazyLoading: 'Utilisez le lazy loading pour les images et vidéos hors champ.',
    tipHosting: 'Choisissez un hébergement avec énergie renouvelable (Cloudflare, Netlify, Vercel).',
    tipThirdParty: 'Supprimez les scripts d\'analyse et les widgets tiers inutiles.',
    tipFonts: 'Ne chargez que les graisses typographiques que vous utilisez réellement.',
    tipCache: 'Configurez les en-têtes de cache HTTP pour éviter les re-téléchargements.',
  },
  faq: faqData,
  howTo: howToData,
  seo: [
    {
      type: 'title',
      text: 'Calculateur d\'empreinte carbone numérique : Quel est le CO₂ généré par votre site',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Découvrez l\'impact environnemental réel de n\'importe quelle page web. Analysez son poids, estimez les grammes de CO₂ par visite et apprenez à réduire la pollution numérique de vos projets.',
    },
    {
      type: 'title',
      text: 'Qu\'est-ce que l\'empreinte carbone numérique d\'un site web ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Chaque fois que vous ouvrez une page web, votre appareil, votre routeur, les câbles sous-marins et les serveurs à l\'autre bout du monde consomment de l\'électricité. Cette électricité est encore largement générée par la combustion d\'énergies fossiles. Résultat : une quantité réelle de <strong>CO₂ émise dans l\'atmosphère à chaque visite</strong>.',
    },
    {
      type: 'paragraph',
      html: 'L\'<strong>empreinte carbone numérique</strong> d\'un site web se mesure en grammes de CO₂ équivalent (gCO₂e) par visite. Un site web moyen génère environ 0,5 g de CO₂ par chargement. Bien que cela semble insignifiant, un site avec 100 000 visites mensuelles peut émettre plus de 600 kg de CO₂ par an, l\'équivalent de conduire une voiture à essence sur plus de 3 000 km.',
    },
    {
      type: 'title',
      text: 'Comment est calculé le CO₂ d\'une page web ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le modèle de calcul utilisé est basé sur les standards du <strong>Sustainable Web Design Model</strong>, qui divise la consommation d\'énergie en quatre segments principaux :',
    },
    {
      type: 'card',
      title: 'Transfert de données',
      html: 'Le poids total de la page détermine le nombre de gigaoctets transférés. Le standard considère <code>0,81 kWh/Go</code> pour l\'infrastructure réseau.',
    },
    {
      type: 'card',
      title: 'Appareil utilisateur',
      html: 'L\'ordinateur ou le mobile recevant la page consomme de l\'énergie. Elle est estimée à <code>0,52 kWh/Go</code> de données traitées.',
    },
    {
      type: 'card',
      title: 'Intensité carbone',
      html: 'On utilise la valeur de référence mondiale de <code>442 gCO₂/kWh</code> pour convertir la consommation d\'énergie en émissions réelles.',
    },
    {
      type: 'card',
      title: 'Facteur de cache',
      html: 'Le modèle applique un facteur de <code>0,75</code> en supposant que 25 % des utilisateurs ont déjà des ressources en cache.',
    },
    {
      type: 'title',
      text: 'Que signifie l\'évaluation de l\'efficacité ?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>A+ et A :</strong> Moins de 0,2 g de CO₂. Sites très légers et optimisés.',
        '<strong>B :</strong> Entre 0,2 et 0,5 g. En dessous de la moyenne mondiale.',
        '<strong>C :</strong> Entre 0,5 et 1 g. La moyenne du web actuel.',
        '<strong>D et E :</strong> Entre 1 et 4 g. Pages lourdes avec un impact important.',
        '<strong>F :</strong> Plus de 4 g par visite. Impact très élevé.',
      ],
    },
    {
      type: 'title',
      text: 'Comment réduire l\'empreinte carbone de votre site',
      level: 2,
    },
    {
      type: 'card',
      title: 'Optimisation des images',
      html: 'Utilisez des formats comme <strong>WebP ou AVIF</strong> pour réduire la taille jusqu\'à 80 % sans perte de qualité visible.',
    },
    {
      type: 'card',
      title: 'Compression du serveur',
      html: 'L\'activation de <strong>Brotli ou GZIP</strong> réduit la taille des fichiers texte jusqu\'à 70 %.',
    },
    {
      type: 'card',
      title: 'Hébergement durable',
      html: 'Choisir un fournisseur avec des <strong>énergies renouvelables certifiées</strong> peut réduire l\'impact de près de 100 %.',
    },
    {
      type: 'card',
      title: 'Cache et CDN',
      html: 'Configurez des <strong>en-têtes de cache longs</strong> pour éviter les téléchargements inutiles.',
    },
    {
      type: 'title',
      text: 'L\'impact réel d\'Internet sur le climat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Internet représente entre <strong>2% et 4% des émissions mondiales de CO₂</strong>, un chiffre comparable à l\'industrie aéronautique. Chaque kilo-octet éliminé ne rend pas seulement votre site plus rapide : il réduit de manière mesurable la pollution numérique.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
