import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SeedCalculatorUI } from '../ui';

const slug = 'calculatrice-semis';
const title = 'Calculatrice de Semis et Calibration du Semoir';
const description =
  'Outil de précision pour les agriculteurs. Calculez la distance idéale entre les graines selon la population cible et la largeur de rang, et analysez le stress du semoir à différentes vitesses.';

const faqData = [
  {
    question: "Comment calcule-t-on l'espacement entre les graines ?",
    answer:
      "On divise la superficie d'un hectare (10 000 m²) par la largeur de rang pour obtenir les mètres linéaires de semis. Ensuite, on divise la population cible par ces mètres pour déterminer combien de graines placer par mètre linéaire.",
  },
  {
    question: "Qu'est-ce que la population cible par hectare ?",
    answer:
      "C'est le nombre idéal de plantes souhaité pour 10 000 mètres carrés. Il dépend du type de culture, de la fertilité du sol et de la disponibilité en eau. Par exemple, le maïs irrigué nécessite entre 85 000 et 95 000 graines par hectare.",
  },
  {
    question: 'Quel est le rôle du pourcentage de germination ?',
    answer:
      "Toutes les graines semées ne lèvent pas. Si un lot de semences a 95 % de germination, vous devez augmenter le taux de semis de 5 % pour atteindre la population finale de plantes souhaitée.",
  },
  {
    question: 'Pourquoi la calibration du semoir est-elle essentielle ?',
    answer:
      "Un semis trop dense entraîne une compétition entre les plantes et de petits grains. Un semis trop clairsemé gaspille de l'espace et le potentiel de rendement. La précision est la clé de la rentabilité.",
  },
];

const howToData = [
  {
    name: 'Saisir la population cible',
    text: "Définissez le nombre de graines ou de plantes souhaité par hectare selon la recommandation technique de votre variété.",
  },
  {
    name: 'Configurer la largeur de rang',
    text: 'Mesurez la distance entre les disques ou les bottes de votre semoir (généralement 50, 70 ou 75 cm).',
  },
  {
    name: 'Ajuster le pouvoir germinatif',
    text: "Saisissez le pourcentage de levée attendu pour compenser les pertes naturelles au champ.",
  },
  {
    name: "Obtenir le réglage mécanique",
    text: "Utilisez la valeur de graines par mètre ou de cm entre graines pour régler les pignons ou le moniteur de votre machine.",
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

export const content: ToolLocaleContent<SeedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références Scientifiques',
  bibliography: [
    {
      name: 'KWS Espagne',
      url: 'https://www.kws.com/es/es/',
    },
    {
      name: 'Ministère de l\'Agriculture espagnol (MAPA)',
      url: 'https://www.mapa.gob.es/es/agricultura/temas/producciones-agricolas/cultivos-herbaceos/',
    },
    {
      name: 'Yara Espagne',
      url: 'https://www.yara.es/nutricion-vegetal/maiz/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guide Technique du Semis de Précision',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Régler la transmission d'un semoir nécessite de savoir exactement combien de graines doivent tomber par mètre linéaire de sillon. Les manuels des machines donnent souvent des tables approximatives, mais des facteurs comme le <strong>patinage de la roue motrice</strong> ou la taille de la semence peuvent modifier la réalité. Cet outil vous donne la valeur théorique parfaite : l'<strong>espacement cible entre graines</strong>.",
    },
    {
      type: 'tip',
      title: 'La formule de calcul',
      html: '<p>Pour les agronomes et les curieux, voici la base du calcul :</p><pre>Espacement (cm) = 10 000 000 / (Population × Largeur de rang)</pre><ul><li><strong>10 000 000 :</strong> Facteur de conversion de Ha en cm².</li><li><strong>Population :</strong> Graines par hectare.</li><li><strong>Largeur de rang :</strong> Distance entre rangs en cm.</li></ul>',
    },
    {
      type: 'title',
      text: 'Pourquoi utiliser cette calculatrice ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Si vous mesurez au champ et que vos graines sont plus proches ou plus éloignées que l'espacement cible, votre machine est <strong>mal calibrée</strong>. Cet outil analyse également la fréquence de dosage (Hz) du plateau semeur en fonction de la vitesse d'avancement, vous alertant sur le risque de perte de singulation.",
    },
    {
      type: 'title',
      text: 'Les Clés du Semis de Qualité',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Singulation :</strong> Évitez les doubles et les sauts. Une singulation à 99 % maintient la compétition entre plantes équilibrée.',
        "<strong>Espacement uniforme :</strong> Le coefficient de variation doit être inférieur à 0,3. Des écarts supérieurs à 5 cm réduisent le potentiel de rendement.",
        "<strong>Profondeur :</strong> Critique pour une levée uniforme. Ajustez la charge des roues plombeuses selon l'humidité du sol.",
      ],
    },
    {
      type: 'title',
      text: 'Méthodes de Vérification au Champ',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "<strong>Méthode du 1/1000 d'hectare :</strong> Mesurez une distance spécifique le long d'un rang représentant 1/1000 d'hectare. Comptez les graines et multipliez par 1 000. Pour des rangs de 70 cm la distance est de 14,28 m ; pour 52,5 cm elle est de 19,05 m.",
    },
    {
      type: 'paragraph',
      html: "<strong>Méthode de la roue motrice :</strong> Soulevez la machine, marquez la roue motrice et faites-la tourner l'équivalent de 1/100 d'hectare. Récupérez les graines dans un seau et pesez-les ou comptez-les pour vérifier la calibration.",
    },
    {
      type: 'title',
      text: 'Tableau de Référence par Culture',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Maïs :</strong> 60 000 à 95 000 graines/Ha. Forte réponse à la densité dans les hybrides modernes.',
        '<strong>Soja :</strong> 250 000 à 450 000 graines/Ha. Grande capacité de compensation à faibles densités.',
        '<strong>Tournesol :</strong> 40 000 à 55 000 graines/Ha. Très sensible à la densité ; l\'excès réduit le diamètre du capitule.',
        '<strong>Colza :</strong> 300 000 à 600 000 graines/Ha. Très petite graine ; nécessite un excellent contact avec le sol.',
      ],
    },
  ],
  ui: {
    headCrop: 'Sélectionnez votre Culture',
    headParams: 'Paramètres',
    headAnalysis: 'Analyse en Temps Réel',
    labelPopulation: 'Population',
    unitSeedsHa: 'Graines/Ha',
    labelRowWidth: 'Entre Rangs',
    unitCm: 'Centimètres',
    labelWorkSpeed: 'Vitesse de Travail',
    unitKmh: 'km/h',
    labelCalibration: 'Calibration Plateau',
    labelSpacingDesc: 'Distance exacte entre chaque graine dans le rang.',
    labelMachineStress: 'Stress Machine',
    labelSeedsM: 'Graines / Mètre',
    labelPlantsM2: 'Plantes / m²',
    labelSpeedMs: 'Mètres / Sec',
    labelHaBag: 'Ha / Sac (80k)',
    statusStandby: 'EN ATTENTE',
    statusVolumetric: 'FLUX VOLUMÉTRIQUE',
    statusOptimal: 'DOSAGE OPTIMAL',
    statusHighSpeed: 'HAUTE VITESSE',
    statusPlateLimiter: 'LIMITE PLATEAU',
    cropCorn: 'Maïs Grain',
    cropSilage: 'Maïs Ensilage',
    cropSunflower: 'Tournesol',
    cropSorghum: 'Sorgho',
    cropSoy: 'Soja',
    cropBeet: 'Betterave',
    cropRapeseed: 'Colza',
    noteCorn: 'Haute précision requise',
    noteSilage: 'Densité moyenne haute',
    noteSunflower: 'Sensible à la vitesse',
    noteSorghum: 'Flux continu ou plateau',
    noteSoy: 'Haute population',
    noteBeet: 'Semis superficiel critique',
    noteRapeseed: 'Très petite graine',
    faqTitle: 'Questions Fréquentes',
    bibliographyTitle: 'Références Scientifiques',
  },
};
