import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { RainHarvesterLocaleContent } from '../index';

const slug = 'calculadora-agua-lluvia';
const title = 'Calculadora de Agua de Lluvia';
const description = 'Calcula cuánta agua puedes recolectar de tu tejado y dimensiona tu tanque de almacenamiento.';

const faqData = [
  {
    question: '¿Cuánta agua puedo recoger realmente de mi tejado?',
    answer: 'La regla general es que por cada metro cuadrado de techo y cada milímetro de lluvia, puedes recoger aproximadamente 1 litro de agua. Sin embargo, hay pérdidas por evaporación y filtración que se ajustan con el "coeficiente de escorrentía".',
  },
  {
    question: '¿Qué es el coeficiente de escorrentía?',
    answer: 'Es un porcentaje que indica cuánto agua se pierde según el material del techo. Un tejado de chapa o azulejo es muy eficiente (0.85-0.95), mientras que uno de grava o tierra es mucho menos eficiente (0.1-0.3).',
  },
  {
    question: '¿Cómo dimensionar el tanque de almacenamiento?',
    answer: 'Debes calcular el volumen de lluvia máxima esperada en un mes y cruzarlo con tu consumo mensual estimado. Un tanque demasiado pequeño desbordará en tormentas, y uno demasiado grande será innecesariamente caro.',
  },
  {
    question: '¿Es seguro beber agua de lluvia recolectada?',
    answer: 'No directamente. El agua arrastra polvo, excrementos de pájaros y partículas del aire. Para consumo humano, debe pasar por filtros de sedimentos, carbón activado y desinfección mediante luz UV o cloro.',
  },
];

const howToData = [
  {
    name: 'Medir la superficie horizontal',
    text: 'Mide el largo y ancho de la base de tu tejado (no la superficie inclinada, sino el área que proyecta sombras sobre el suelo).',
  },
  {
    name: 'Consultar la pluviosidad local',
    text: 'Busca en el servicio meteorológico nacional la precipitación media anual o mensual de tu zona en milímetros (mm).',
  },
  {
    name: 'Aplicar eficiencia de materiales',
    text: 'Selecciona el material de tu techo en nuestra calculadora para descontar el agua que se perderá por absorción o calor.',
  },
  {
    name: 'Calcular el volumen necesario',
    text: 'Usa el resultado de litros anuales para elegir un depósito que pueda almacenar al menos el 20-30% de la cosecha total para épocas de sequía.',
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

export const content: RainHarvesterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Configuración del Techo',
    headResults: 'Potencial de Cosecha',
    labelArea: 'Área del Techo',
    labelRainfall: 'Precipitación Anual',
    labelMaterial: 'Material del Techo',
    unitM2: 'm²',
    unitMm: 'mm',
    unitLiters: 'Litros',
    helpRainfall: '¿No lo sabes? Busca "precipitación media anual [tu ciudad]" en Google.',
    efficiencyTitle: 'Factor de Eficiencia',
    efficiencyNote: 'Se aplica una pérdida del 10% por filtros y evaporación.',
    resultTitle: 'Potencial de Cosecha Anual',
    equivalenciesTitle: 'Equivalencias Prácticas',
    labelFlushes: 'Descargas de WC',
    labelShowers: 'Duchas (10 min)',
    labelGarden: 'Riegos de Jardín',
    gardenArea: '(50m²)',
    materialMetal: 'Metal / Teja Esmaltada',
    materialClay: 'Teja Arábica / Arcilla',
    materialConcrete: 'Hormigón / Asfalto',
    materialGravel: 'Grava / Techo Verde',
  },
  seo: [
    {
      type: 'title',
      text: 'Cosecha de Agua de Lluvia: Autonomía y Sostenibilidad',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La mayoría de los propietarios desconocen el potencial de sus propios tejados. Un techo estándar puede capturar miles de litros de agua gratuita cada año. Esta herramienta cuantifica ese potencial, permitiéndote calcular exactamente cuánta agua puedes "cosechar" y determinar el tamaño ideal del tanque para almacenarla.',
    },
    {
      type: 'title',
      text: 'Lógica del Cálculo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La fórmula base para la recolección de agua de lluvia es simple pero poderosa:',
    },
    {
      type: 'paragraph',
      html: '<code style="display:block;padding:1rem;background:var(--bg-alt);border-radius:0.5rem;margin:1rem 0;font-family:monospace;">Volumen = Área × Precipitación × Coeficiente de Escorrentía × Eficiencia del Filtro</code>',
    },
    {
      type: 'list',
      items: [
        '<strong>Área:</strong> La huella de tu techo (largo × ancho proyectado).',
        '<strong>Precipitación:</strong> La lluvia caída en milímetros.',
        '<strong>Coeficiente:</strong> Qué tanta agua pierde tu techo (ej. absorción).',
        '<strong>Eficiencia:</strong> Pérdidas en los filtros previos al tanque (~10%).',
      ],
    },
    {
      type: 'title',
      text: '¿Por qué recolectar lluvia?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Ahorro:</strong> Reduce tu factura de agua significativamente.',
        '<strong>Jardinería:</strong> A las plantas les encanta el agua sin cloro ni cal.',
        '<strong>Resiliencia:</strong> Mantén una reserva de emergencia en caso de cortes.',
      ],
    },
    {
      type: 'title',
      text: 'Dimensionamiento del Tanque',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El error más común es comprar un tanque basándose solo en el presupuesto. Si es muy pequeño, desperdiciarás miles de litros por desbordamiento. Si es muy grande, gastarás dinero innecesariamente. Una regla general es tener capacidad para almacenar el agua de <strong>3 meses</strong> de lluvia promedio en tu zona, permitiéndote superar las estaciones secas.',
    },
  ],
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias Científicas',
  bibliography: [
    {
      name: 'FAO - Captación y almacenamiento de agua de lluvia',
      url: 'https://www.fao.org/3/a1348s/a1348s.pdf',
    },
    {
      name: 'Texas A&M AgriLife Extension - Rainwater Harvesting',
      url: 'https://rainwaterharvesting.tamu.edu/',
    },
    {
      name: 'Brad Lancaster - Rainwater Harvesting for Drylands',
      url: 'https://www.harvestingrainwater.com/',
    },
    {
      name: 'European Environment Agency - Water Resources',
      url: 'https://www.eea.europa.eu/en/topics/in-depth/water',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
