import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { DigitalCarbonLocaleContent } from '../index';

const slug = 'calculadora-huella-carbono-digital';
const title = 'Calculadora de Huella de Carbono Digital';
const description = 'Analiza el impacto medioambiental de cualquier página web. Estima el consumo energético y las emisiones de CO₂ por visita.';

const faqData = [
  {
    question: '¿Qué es la huella de carbono de una página web?',
    answer: 'Es la cantidad de gases de efecto invernadero, principalmente CO₂, que se emiten a la atmósfera como resultado de la energía consumida por los servidores, las redes de transmisión y el dispositivo del usuario para cargar y renderizar una web.',
  },
  {
    question: '¿Cómo se mide el impacto de una web?',
    answer: 'Se mide habitualmente en gramos de CO₂ equivalente (gCO₂e) por visita. Una web eficiente emite menos de 0,2 g de CO₂, mientras que una web poco optimizada puede superar los 2 o 3 g por carga.',
  },
  {
    question: '¿Por qué internet contamina?',
    answer: 'Porque toda la infraestructura necesaria (centros de datos, cables submarinos, routers WiFi, smartphones) funciona con electricidad que, en gran parte del mundo, todavía proviene de la quema de carbón o gas.',
  },
  {
    question: '¿Cómo puedo reducir el CO₂ de mi web?',
    answer: 'La forma más efectiva es reducir el peso de la página: optimiza imágenes (WebP), minimiza archivos CSS y JS, usa carga diferida (lazy loading) y elige un proveedor de hosting que utilice energías renovables.',
  },
];

const howToData = [
  {
    name: 'Introduce la URL',
    text: 'Escribe la dirección web de la página que quieres analizar en el campo de entrada.',
  },
  {
    name: 'Inicia el análisis',
    text: 'Pulsa el botón de analizar para que nuestra herramienta obtenga el peso estimado de los recursos de la página.',
  },
  {
    name: 'Revisa tu calificación',
    text: 'Obtén una nota de A+ a F basada en la eficiencia energética de la web analizada.',
  },
  {
    name: 'Aplica las mejoras',
    text: 'Utiliza la lista de consejos personalizados para reducir el peso de tu web y su impacto ambiental.',
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

export const content: DigitalCarbonLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Analizador de URL',
    headResults: 'Resultado del Impacto',
    headTips: 'Consejos de Optimización',
    labelUrl: 'URL de la Página',
    btnAnalyze: 'Analizar Web',
    btnAnalyzing: 'Analizando...',
    placeholderUrl: 'https://ejemplo.com',
    errorInvalidUrl: 'Por favor, introduce una URL válida.',
    errorFetchFailed: 'No se pudo analizar la web. Prueba con otra URL.',
    
    resultTitle: 'Huella de Carbono Digital',
    resultSubtitle: 'Eficiencia estimada de la página',
    co2PerVisit: 'CO₂ por visita',
    energyPerVisit: 'Energía consumida',
    co2Annual: 'CO₂ anual (100k visitas)',
    impactTitle: 'Impacto Real Anual',
    impactTrees: 'Árboles necesarios',
    impactKm: 'Km en coche (aprox.)',
    treesLabel: 'Árboles',
    kmLabel: 'Kilómetros',
    
    ratingExcellent: 'Excelente. Esta página consume muy poca energía comparada con la media global.',
    ratingVeryGood: 'Muy buena eficiencia. La página está bien optimizada y tiene un impacto mínimo.',
    ratingGood: 'Eficiencia aceptable. Hay margen de mejora pero está por debajo de la media.',
    ratingAverage: 'En la media. La página consume lo esperado en la web actual.',
    ratingPoor: 'Por encima de la media. Considera optimizar imágenes, scripts y fuentes.',
    ratingVeryPoor: 'Alto impacto. El peso de la página es significativo y debería reducirse.',
    ratingCritical: 'Impacto muy alto. Hay una gran oportunidad de reducir el tamaño de la página.',
    
    tipImages: 'Convierte imágenes a WebP o AVIF para reducir hasta un 70% su peso.',
    tipCompression: 'Activa Brotli o GZIP en el servidor para comprimir recursos.',
    tipLazyLoading: 'Usa lazy loading en imágenes y vídeos fuera del viewport.',
    tipHosting: 'Elige un hosting con energía renovable (Cloudflare, Netlify, Vercel).',
    tipThirdParty: 'Elimina scripts de analítica y widgets de terceros innecesarios.',
    tipFonts: 'Carga solo los pesos tipográficos que realmente usas.',
    tipCache: 'Configura cabeceras de caché HTTP para evitar re-descargas.',
  },
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referencias de Sostenibilidad Web',
  bibliography: [
    { name: 'Sustainable Web Design Model', url: 'https://sustainablewebdesign.org/' },
    { name: 'Website Carbon Calculator', url: 'https://www.websitecarbon.com/' },
    { name: 'The Green Web Foundation', url: 'https://www.thegreenwebfoundation.org/' },
    { name: 'W3C - Web Sustainability Guidelines', url: 'https://w3c.github.io/sustyweb/' },
  ],
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Huella de Carbono Digital: Cuánto CO₂ Genera tu Web',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Descubre el impacto medioambiental real de cualquier página web. Analiza su peso, estima los gramos de CO₂ por visita y aprende a reducir la contaminación digital de tus proyectos.',
    },
    {
      type: 'title',
      text: '¿Qué es la huella de carbono digital de una web?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cada vez que abres una página web, tu dispositivo, el router de casa, los cables submarinos y los servidores del otro lado del mundo consumen electricidad. Esa electricidad, en su mayor parte, sigue generándose quemando combustibles fósiles. El resultado: una cantidad real de <strong>CO₂ emitida a la atmósfera por cada visita</strong>.',
    },
    {
      type: 'paragraph',
      html: 'La <strong>huella de carbono digital</strong> de un sitio web se mide en gramos de CO₂ equivalente (gCO₂e) por visita. Una web media genera aproximadamente 0,5 g de CO₂ por carga. Aunque parece insignificante, un sitio con 100.000 visitas mensuales puede emitir más de 600 kg de CO₂ al año, el equivalente a conducir un coche de gasolina más de 3.000 km.',
    },
    {
      type: 'title',
      text: '¿Cómo se calcula el CO₂ de una página web?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El modelo de cálculo utilizado se basa en los estándares del <strong>Sustainable Web Design Model</strong>, que divide el consumo energético en cuatro tramos principales:',
    },
    {
      type: 'card',
      title: 'Transferencia de datos',
      html: 'El peso total de la página determina cuántos gigabytes se transfieren. El estándar considera <code>0,81 kWh/GB</code> para la infraestructura de red.',
    },
    {
      type: 'card',
      title: 'Dispositivo del usuario',
      html: 'El ordenador o móvil que recibe la página consume energía. Se estima en <code>0,52 kWh/GB</code> de datos procesados.',
    },
    {
      type: 'card',
      title: 'Intensidad de carbono',
      html: 'Se utiliza el valor de referencia mundial de <code>442 gCO₂/kWh</code> para convertir el consumo energético en emisiones.',
    },
    {
      type: 'card',
      title: 'Factor de caché',
      html: 'El modelo aplica un factor de <code>0,75</code> asumiendo que el 25% de los usuarios ya tienen recursos en caché.',
    },
    {
      type: 'title',
      text: '¿Qué significa la calificación de eficiencia?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>A+ y A:</strong> Menos de 0,2 g de CO₂. Sitios muy ligeros y optimizados.',
        '<strong>B:</strong> Entre 0,2 y 0,5 g. Por debajo de la media global.',
        '<strong>C:</strong> Entre 0,5 y 1 g. La media de la web actual.',
        '<strong>D y E:</strong> Entre 1 y 4 g. Páginas pesadas con impacto relevante.',
        '<strong>F:</strong> Más de 4 g por visita. Impacto muy alto.',
      ],
    },
    {
      type: 'title',
      text: 'Cómo reducir la huella de carbono de tu web',
      level: 2,
    },
    {
      type: 'card',
      title: 'Optimización de imágenes',
      html: 'Usa formatos como <strong>WebP o AVIF</strong> para reducir el tamaño hasta un 80% sin pérdida de calidad.',
    },
    {
      type: 'card',
      title: 'Compresión del servidor',
      html: 'Activar <strong>Brotli o GZIP</strong> reduce el tamaño de los archivos de texto hasta un 70%.',
    },
    {
      type: 'card',
      title: 'Hosting sostenible',
      html: 'Elegir un proveedor con <strong>energías renovables certificadas</strong> puede reducir el impacto casi un 100%.',
    },
    {
      type: 'card',
      title: 'Caché y CDN',
      html: 'Configura <strong>cabeceras de caché largas</strong> para evitar re-descargas innecesarias.',
    },
    {
      type: 'title',
      text: 'El impacto real de internet en el clima',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Internet representa entre el <strong>2% y el 4% de las emisiones globales de CO₂</strong>, cifra comparable a la industria de la aviación. Cada kilobyte que eliminas no solo hace tu web más rápida: reduce de forma medible la contaminación digital.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
