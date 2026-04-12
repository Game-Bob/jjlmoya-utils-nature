import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CricketThermometerUI } from '../ui';

const slug = 'termometro-grillo';
const title = '¿Qué temperatura hace? – Termómetro de Grillos (Ley de Dolbear)';
const description =
  '¿No tienes termómetro? Escucha a los grillos. Calcula la temperatura exacta contando sus chirridos con nuestra calculadora de la Ley de Dolbear.';

const faqData = [
  {
    question: '¿Qué es la Ley de Dolbear?',
    answer:
      'Formulada en 1897 por Amos Dolbear, es una observación científica que descubrió una correlación lineal entre el ritmo de los chirridos de un grillo y la temperatura ambiente del aire.',
  },
  {
    question: '¿Por qué los grillos chirrían más rápido con el calor?',
    answer:
      'Los grillos son animales de sangre fría (ectotermos). La velocidad de sus procesos metabólicos y contracciones musculares depende de la temperatura externa; a más calor, más energía tienen para emitir sonidos rápidamente.',
  },
  {
    question: '¿Es precisa esta medición?',
    answer:
      'Es sorprendentemente precisa para especies como el grillo del árbol (Oecanthus fultoni), con un margen de error de unos 0.5°C si se cuenta correctamente. Sin embargo, factores como la humedad o el viento pueden alterar el resultado.',
  },
  {
    question: '¿Qué grillo debo usar para el cálculo?',
    answer:
      'La fórmula original está basada en el grillo del árbol nevado. Para el grillo común de campo, la relación es similar pero el ritmo suele ser ligeramente más lento.',
  },
];

const howToData = [
  {
    name: 'Localizar un grillo solitario',
    text: 'Busca un lugar tranquilo por la noche donde puedas escuchar el chirrido de un solo grillo con claridad para no confundir los ritmos.',
  },
  {
    name: 'Contar chirridos en 15 segundos',
    text: 'Usa un cronómetro y cuenta cuántas estridulaciones emite el insecto en exactamente 15 segundos.',
  },
  {
    name: 'Introducir el valor',
    text: 'Pulsa el botón TAP al ritmo de los chirridos durante unos segundos para que la calculadora calcule el BPM automáticamente.',
  },
  {
    name: 'Verificar la temperatura',
    text: 'El sistema aplicará la fórmula T(°C) = 10 + (N - 40) / 7 para darte una estimación del calor ambiental en grados Celsius.',
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
  inLanguage: 'es',
};

export const content: ToolLocaleContent<CricketThermometerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias Científicas',
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
      text: 'Guía Completa: Cómo Usar la Ley de Dolbear para Calcular la Temperatura',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '¿Sabías que puedes saber la temperatura exacta solo escuchando a la naturaleza? En 1897, el físico Amos Dolbear descubrió una relación matemática precisa entre el ritmo de los grillos y el calor ambiente. Esta herramienta digitaliza ese descubrimiento para convertir tu móvil en un termómetro natural.',
    },
    {
      type: 'tip',
      title: '¿Por qué cantan los grillos?',
      html: '<p>El "canto" del grillo, o <strong>estridulación</strong>, es en realidad un llamado de apareamiento. Los machos frotan sus alas (no sus patas) para crear este sonido. Lo fascinante es que, al ser animales de sangre fría (ectotermos), la velocidad de este frotamiento depende directamente de la energía térmica del aire.</p>',
    },
    {
      type: 'title',
      text: 'La Ciencia: Ectotermia y Metabolismo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A diferencia de los mamíferos, que mantenemos nuestra temperatura corporal constante, los insectos dependen del calor externo. Sus reacciones bioquímicas siguen la <strong>Ecuación de Arrhenius</strong>: cuanto más calor, más rápida es la reacción.',
    },
    {
      type: 'paragraph',
      html: 'Esto significa que para que los músculos del grillo se contraigan y froten sus alas, necesitan reacciones enzimáticas. Si hace frío, estas reacciones son lentas y el canto es pausado. Si hace calor, el metabolismo se acelera y el canto se vuelve un trino frenético.',
    },
    {
      type: 'title',
      text: 'La Fórmula de Dolbear',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aunque existen variaciones para diferentes especies, la fórmula más famosa es la del grillo del árbol nevado (<em>Oecanthus fultoni</em>). Para obtener la temperatura en grados Celsius:',
    },
    {
      type: 'code',
      code: 'T(°C) = 10 + (N - 40) / 7\n\nDonde N = número de chirridos por minuto.',
      ariaLabel: 'Fórmula de Dolbear para calcular temperatura a partir de chirridos de grillo',
    },
    {
      type: 'paragraph',
      html: 'Nuestra herramienta hace esto automáticamente: mide el tiempo entre tus toques, calcula los chirridos por minuto (BPM) y aplica la fórmula instantáneamente.',
    },
    {
      type: 'title',
      text: 'Curiosidades Fascinantes',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Termómetros del Amor:</strong> Algunas teorías sugieren que las hembras prefieren machos que cantan a la frecuencia "correcta" para la temperatura actual, ya que indica que el macho está sano y tiene un metabolismo fuerte.',
        '<strong>Límite de Frío:</strong> Por debajo de los 10°C (50°F), la mayoría de los grillos dejan de cantar porque su metabolismo es demasiado lento para sostener el esfuerzo muscular.',
        '<strong>Sincronización:</strong> En noches cálidas, miles de grillos pueden llegar a sincronizar sus chirridos, creando un efecto de "ola" sonora impresionante.',
      ],
    },
    {
      type: 'tip',
      title: 'Nota de Precisión',
      html: '<p>La precisión depende de la especie de grillo. Esta herramienta está calibrada para el grillo de campo común y el grillo de árbol. Factores como la humedad o el viento pueden alterar el resultado en ±0.5°C.</p>',
    },
  ],
  ui: {
    labelWaiting: 'Esperando...',
    labelTapping: 'Sigue pulsando...',
    tapInstruction: 'Cada vez que oigas un chirrido',
    btnReset: 'Reiniciar',
    btnSoundOn: 'Sonido: On',
    btnSoundOff: 'Sonido: Off',
    unitChirpsMin: 'chirridos/min',
    faqTitle: 'Preguntas Frecuentes',
    bibliographyTitle: 'Referencias Científicas',
  },
};
