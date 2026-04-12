import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CricketThermometerUI } from '../ui';

const slug = 'thermometre-grillon';
const title = 'Thermomètre à Grillons – Loi de Dolbear';
const description =
  'Pas de thermomètre ? Écoutez les grillons. Calculez la température exacte en comptant les stridulations avec notre calculateur de la Loi de Dolbear.';

const faqData = [
  {
    question: 'Qu\'est-ce que la Loi de Dolbear ?',
    answer:
      'Formulée en 1897 par Amos Dolbear, c\'est une observation scientifique qui a découvert une corrélation linéaire entre le rythme des stridulations d\'un grillon et la température ambiante de l\'air.',
  },
  {
    question: 'Pourquoi les grillons strident-ils plus vite avec la chaleur ?',
    answer:
      'Les grillons sont des animaux à sang froid (ectothermes). La vitesse de leurs processus métaboliques et de leurs contractions musculaires dépend de la température extérieure ; plus il fait chaud, plus ils ont d\'énergie pour émettre des sons rapidement.',
  },
  {
    question: 'Cette mesure est-elle précise ?',
    answer:
      'Elle est étonnamment précise pour des espèces comme le grillon des arbres enneigés (Oecanthus fultoni), avec une marge d\'erreur d\'environ 0,5°C si le comptage est correct. Cependant, des facteurs comme l\'humidité ou le vent peuvent altérer le résultat.',
  },
  {
    question: 'Quel grillon dois-je utiliser pour le calcul ?',
    answer:
      'La formule originale est basée sur le grillon des arbres enneigés. Pour le grillon des champs commun, la relation est similaire mais le rythme est généralement légèrement plus lent.',
  },
];

const howToData = [
  {
    name: 'Localiser un grillon solitaire',
    text: 'Trouvez un endroit calme la nuit où vous pouvez entendre clairement la stridulation d\'un seul grillon pour ne pas confondre les rythmes.',
  },
  {
    name: 'Compter les stridulations pendant 15 secondes',
    text: 'Utilisez un chronomètre et comptez combien de stridulations l\'insecte émet en exactement 15 secondes.',
  },
  {
    name: 'Entrer la valeur',
    text: 'Appuyez sur le bouton TAP au rythme des stridulations pendant quelques secondes pour que la calculatrice calcule automatiquement les BPM.',
  },
  {
    name: 'Vérifier la température',
    text: 'Le système appliquera la formule T(°C) = 10 + (N - 40) / 7 pour vous donner une estimation de la chaleur ambiante en degrés Celsius.',
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

export const content: ToolLocaleContent<CricketThermometerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références Scientifiques',
  bibliography: [
    {
      name: 'The American Naturalist - The Cricket as a Thermometer',
      url: 'https://www.jstor.org/stable/2453256',
    },
    {
      name: 'Wikipedia - Dolbear\'s Law',
      url: 'https://en.wikipedia.org/wiki/Dolbear%27s_law',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guide Complet : Comment Utiliser la Loi de Dolbear pour Calculer la Température',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Saviez-vous que vous pouvez connaître la température exacte rien qu\'en écoutant la nature ? En 1897, le physicien Amos Dolbear a découvert une relation mathématique précise entre le rythme des stridulations des grillons et la chaleur ambiante. Cet outil digitalise cette découverte pour transformer votre téléphone en thermomètre naturel.',
    },
    {
      type: 'tip',
      title: 'Pourquoi les grillons strident plus vite avec la chaleur ?',
      html: '<p>Le "chant" du grillon, ou <strong>stridulation</strong>, est en réalité un appel nuptial. Les mâles frottent leurs ailes (pas leurs pattes) pour créer ce son. Ce qui est fascinant, c\'est qu\'étant des animaux à sang froid (ectothermes), la vitesse de ce frottement dépend directement de l\'énergie thermique de l\'air.</p>',
    },
    {
      type: 'title',
      text: 'La Science : Ectothermie et Métabolisme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Contrairement aux mammifères, qui maintiennent une température corporelle constante, les insectes dépendent de la chaleur externe. Leurs réactions biochimiques suivent l\'<strong>Équation d\'Arrhenius</strong> : plus il fait chaud, plus la réaction est rapide.',
    },
    {
      type: 'paragraph',
      html: 'Cela signifie que pour que les muscles du grillon se contractent et frottent ses ailes, ils ont besoin de réactions enzymatiques. S\'il fait froid, ces réactions sont lentes et le chant est pausé. S\'il fait chaud, le métabolisme s\'accélère et le chant devient un trille frénétique.',
    },
    {
      type: 'title',
      text: 'La Formule de Dolbear',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bien qu\'il existe des variantes pour différentes espèces, la formule la plus célèbre est celle du grillon des arbres enneigés (<em>Oecanthus fultoni</em>). Pour obtenir la température en degrés Celsius :',
    },
    {
      type: 'code',
      code: 'T(°C) = 10 + (N - 40) / 7\n\nOù N = nombre de stridulations par minute.',
      ariaLabel: 'Formule de Dolbear pour calculer la température à partir des stridulations de grillon',
    },
    {
      type: 'paragraph',
      html: 'Notre outil fait cela automatiquement : il mesure le temps entre vos tapotements, calcule les stridulations par minute (BPM) et applique la formule instantanément.',
    },
    {
      type: 'title',
      text: 'Curiosités Fascinantes',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Thermomètres de l\'Amour :</strong> Certaines théories suggèrent que les femelles préfèrent les mâles qui chantent à la fréquence "correcte" pour la température actuelle, ce qui indique que le mâle est en bonne santé et a un métabolisme fort.',
        '<strong>Limite du Froid :</strong> En dessous de 10°C (50°F), la plupart des grillons cessent de chanter car leur métabolisme est trop lent pour soutenir l\'effort musculaire.',
        '<strong>Synchronisation :</strong> Par les nuits chaudes, des milliers de grillons peuvent synchroniser leurs stridulations, créant un impressionnant effet de "vague" sonore.',
      ],
    },
    {
      type: 'tip',
      title: 'Note de Précision',
      html: '<p>La précision dépend de l\'espèce de grillon. Cet outil est calibré pour le grillon des champs commun et le grillon des arbres. Des facteurs comme l\'humidité ou le vent peuvent modifier le résultat de ±0,5°C.</p>',
    },
  ],
  ui: {
    labelWaiting: 'En attente...',
    labelTapping: 'Continuez à tapoter...',
    tapInstruction: 'Chaque fois que vous entendez une stridulation',
    btnReset: 'Réinitialiser',
    btnSoundOn: 'Son : On',
    btnSoundOff: 'Son : Off',
    unitChirpsMin: 'strid./min',
    faqTitle: 'Questions Fréquentes',
    bibliographyTitle: 'Références Scientifiques',
  },
};
