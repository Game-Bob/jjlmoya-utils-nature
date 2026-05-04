import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { SeedCalculatorUI } from '../ui';

const slug = 'calculadora-siembra';
const title = 'Calculadora de Siembra y Calibración de Sembradora';
const description =
  'Herramienta de precisión para agricultores. Calcula la distancia ideal entre semillas según la población objetivo y el ancho de surco, y analiza el estrés de la sembradora a distintas velocidades.';

const faqData = [
  {
    question: '¿Cómo se calcula el espaciado entre semillas?',
    answer:
      'Se divide la superficie de una hectárea (10.000 m²) por el ancho de surco para obtener los metros lineales de siembra. Luego se divide la población objetivo entre esos metros para determinar cuántas semillas poner por metro lineal.',
  },
  {
    question: '¿Qué es la población objetivo por hectárea?',
    answer:
      'Es el número ideal de plantas que se desea tener por cada 10.000 metros cuadrados. Depende del tipo de cultivo, la fertilidad del suelo y la disponibilidad de agua. Por ejemplo, el maíz de regadío requiere entre 85.000 y 95.000 semillas por hectárea.',
  },
  {
    question: '¿Cómo influye el porcentaje de germinación?',
    answer:
      'No todas las semillas sembradas nacen. Si una semilla tiene un 95% de germinación, debes aumentar la tasa de siembra un 5% para alcanzar la población de plantas final deseada.',
  },
  {
    question: '¿Por qué es vital calibrar la sembradora?',
    answer:
      'Una siembra demasiado densa causa competencia entre plantas y granos pequeños. Una siembra demasiado rala desperdicia espacio y potencial de rendimiento. La precisión es la clave de la rentabilidad.',
  },
];

const howToData = [
  {
    name: 'Introducir población objetivo',
    text: 'Define cuántas semillas o plantas quieres por hectárea según la recomendación técnica de tu variedad.',
  },
  {
    name: 'Configurar ancho de surco',
    text: 'Mide la distancia entre los discos o botas de tu sembradora (habitualmente 50, 70 o 75 cm).',
  },
  {
    name: 'Ajustar poder germinativo',
    text: 'Introduce el porcentaje de nacencia esperado para compensar las bajas naturales en el campo.',
  },
  {
    name: 'Obtener ajuste mecánico',
    text: 'Usa el valor de semillas por metro o cm entre semillas para ajustar los piñones o el monitor de tu máquina.',
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

export const content: ToolLocaleContent<SeedCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guía Técnica de Siembra de Precisión',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ajustar la transmisión de una sembradora requiere conocer exactamente cuántas semillas deben caer por cada metro lineal de surco. Los manuales de las máquinas suelen dar tablas aproximadas, pero factores como el <strong>patinamiento de la rueda de mando</strong> o el tamaño de la semilla pueden alterar la realidad. Esta herramienta te da el valor teórico perfecto: el <strong>espaciado objetivo entre semillas</strong>.',
    },
    {
      type: 'tip',
      title: 'La Fórmula de Cálculo',
      html: '<p>Para ingenieros agrónomos y curiosos, aquí está la base del cálculo:</p><pre>Espaciado (cm) = 10.000.000 / (Población × Ancho de Surco)</pre><ul><li><strong>10.000.000:</strong> Factor de conversión de Ha a cm².</li><li><strong>Población:</strong> Semillas por hectárea.</li><li><strong>Ancho Surco:</strong> Distancia entre hileras en cm.</li></ul>',
    },
    {
      type: 'title',
      text: '¿Por qué usar esta calculadora?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Si mides en el campo y tus semillas están más juntas o más separadas que el espaciado objetivo, tu máquina está <strong>mal calibrada</strong>. Esta herramienta también analiza la frecuencia de dosificación (Hz) del plato sembrador en función de la velocidad de avance, alertando sobre el riesgo de pérdida de singulación.',
    },
    {
      type: 'title',
      text: 'Claves de la Siembra de Calidad',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Singulación:</strong> Evita los dobles y saltos. Un 99% de singulación mantiene la competencia entre plantas equilibrada.',
        '<strong>Espaciado Uniforme:</strong> El coeficiente de variación debe ser menor a 0,3. Desviaciones mayores a 5 cm reducen el potencial de rinde.',
        '<strong>Profundidad:</strong> Crítica para una emergencia uniforme. Ajusta la carga de las ruedas tapadoras según la humedad del suelo.',
      ],
    },
    {
      type: 'title',
      text: 'Métodos de Verificación en Campo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Método 1/1000 de Hectárea:</strong> Mide una distancia específica a lo largo de un surco que represente 1/1000 de una hectárea. Cuenta las semillas y multiplícalas por 1.000. Para surcos de 70 cm la distancia es 14,28 metros; para 52,5 cm son 19,05 metros.',
    },
    {
      type: 'paragraph',
      html: '<strong>Método de la Rueda Motriz:</strong> Levanta la máquina, marca la rueda motriz y gírala el equivalente a 1/100 de hectárea. Recoge las semillas en un balde y pésalas o cuéntalas para verificar la calibración.',
    },
    {
      type: 'title',
      text: 'Tabla de Referencia por Cultivo',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Maíz:</strong> 60.000 a 95.000 semillas/Ha. Alta respuesta a la densidad en híbridos modernos.',
        '<strong>Soja:</strong> 250.000 a 450.000 semillas/Ha. Gran capacidad de compensación a densidades bajas.',
        '<strong>Girasol:</strong> 40.000 a 55.000 semillas/Ha. Muy sensible a la densidad; el exceso reduce el diámetro del capítulo.',
        '<strong>Colza:</strong> 300.000 a 600.000 semillas/Ha. Semilla muy pequeña, requiere excelente contacto suelo.',
      ],
    },
  ],
  ui: {
    headCrop: 'Selecciona tu Cultivo',
    headParams: 'Parámetros',
    headAnalysis: 'Análisis en Tiempo Real',
    labelPopulation: 'Población',
    unitSeedsHa: 'Semillas/Ha',
    labelRowWidth: 'Entre Surcos',
    unitCm: 'Centímetros',
    labelWorkSpeed: 'Velocidad de Trabajo',
    unitKmh: 'km/h',
    labelCalibration: 'Calibración Placa',
    labelSpacingDesc: 'Distancia exacta entre cada semilla en la línea.',
    labelMachineStress: 'Estrés de Máquina',
    labelSeedsM: 'Semillas / Metro',
    labelPlantsM2: 'Plantas / m²',
    labelSpeedMs: 'Metros / Seg',
    labelHaBag: 'Ha / Saco (80k)',
    statusStandby: 'STANDBY',
    statusVolumetric: 'FLUJO VOLUMÉTRICO',
    statusOptimal: 'DOSIFICACIÓN ÓPTIMA',
    statusHighSpeed: 'ALTA VELOCIDAD',
    statusPlateLimiter: 'LÍMITE DE PLACA',
    cropCorn: 'Maíz Grano',
    cropSilage: 'Maíz Silo',
    cropSunflower: 'Girasol',
    cropSorghum: 'Sorgo',
    cropSoy: 'Soja',
    cropBeet: 'Remolacha',
    cropRapeseed: 'Colza',
    noteCorn: 'Alta precisión requerida',
    noteSilage: 'Densidad media alta',
    noteSunflower: 'Sensible a velocidad',
    noteSorghum: 'Flujo continuo o plato',
    noteSoy: 'Alta población',
    noteBeet: 'Siembra crítica superficial',
    noteRapeseed: 'Semilla muy pequeña',
  },
};
