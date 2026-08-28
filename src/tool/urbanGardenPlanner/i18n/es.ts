import type { FAQPage, HowToThing, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { UrbanGardenPlannerLocaleContent } from '../entry';

const slug = 'calculadora-sustrato-y-captacion-agua-lluvia';
const title = 'Planificador de sustrato y agua de lluvia para huertos urbanos';
const description = 'Calcula el volumen de sustrato para bancales y estima la captación de agua de lluvia para huertos urbanos.';

const faqData = [
  { question: '¿Cuánta tierra necesito para un bancal?', answer: 'Introduce la superficie de cultivo y la profundidad del sustrato. La herramienta multiplica ambos valores y convierte el resultado a litros para estimar el pedido de tierra o compost.' },
  { question: '¿Cómo calculo el agua de lluvia para un huerto?', answer: 'Introduce la superficie de captación y la lluvia en milímetros. La herramienta aplica después un factor de escorrentía del 85 % y otro de captación del 90 % para obtener una estimación prudente.' },
  { question: '¿Puedo usarlo para una jardinera de balcón?', answer: 'Sí. Usa como superficie de cultivo el espacio de la jardinera, añade la profundidad prevista y escribe la superficie de tejado o toldo que alimenta el depósito.' },
  { question: '¿Es segura el agua de lluvia para plantas comestibles?', answer: 'No automáticamente. Revisa la superficie de captación y el depósito, garantiza filtrado y drenaje adecuados y consulta las normas locales antes de usarla en cultivos comestibles.' },
];

const howToData = [
  { name: 'Mide la superficie de cultivo', text: 'Introduce el área del bancal, balcón o recipiente que recibirá el sustrato.' },
  { name: 'Elige la profundidad', text: 'Escribe la profundidad prevista en centímetros, incluida la posible compactación del material.' },
  { name: 'Añade la superficie de captación', text: 'Introduce el tejado, toldo u otra superficie que conduce el agua al depósito.' },
  { name: 'Prueba una lluvia', text: 'Escribe la precipitación en milímetros y compara el agua captada con el tamaño del huerto.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'es' };

export const content: UrbanGardenPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    eyebrow: 'Un huerto pequeño, medido en capas vivas', headInputs: 'Define tu escena de huerto', headScene: 'Lee el paisaje', labelGardenArea: 'Superficie de cultivo', labelDepth: 'Profundidad del sustrato', labelCollectionArea: 'Superficie de captación', labelRainfall: 'Episodio de lluvia', unitSquareMeters: 'm²', unitCentimeters: 'cm', unitMillimeters: 'mm', unitLiters: 'L', helpGardenArea: 'La superficie del bancal, balcón o jardinera.', helpDepth: 'La capa de tierra que quieres rellenar.', helpCollectionArea: 'La superficie que envía agua al depósito.', helpRainfall: 'Prueba con un chubasco reciente o una lluvia de diseño local.', presetsTitle: 'Empieza con una forma', presetBalcony: 'Jardinera de balcón', presetRaisedBed: 'Bancal elevado', presetCommunity: 'Huerto comunitario', labelSoilNeeded: 'Sustrato necesario', labelWaterCaptured: 'Agua captada', labelGardenDepth: 'Sobre este huerto', labelWateringArea: 'Con 10 mm de agua', sceneCatchment: 'Captación', sceneGardenBed: 'Zona de cultivo', sceneSoil: 'Capa de suelo', sceneWater: 'Agua captada', statusBalanced: 'Una combinación útil para planificar', statusLightCapture: 'Un episodio de lluvia ligero', statusDeepBed: 'Un perfil de suelo profundo', statusNoRain: 'Esperando un episodio de lluvia', statusNote: 'Usa esta instantánea para dimensionar materiales y comparar escenarios. No es una receta de riego.', assumptionTitle: 'Supuestos de planificación', assumptionText: 'La estimación conserva el 85 % de la lluvia como escorrentía y el 90 % después de las pérdidas de captación. Un litro sobre un metro cuadrado equivale a un milímetro de agua.', limitationTitle: 'Usa el huerto con seguridad', limitationText: 'Prepara el drenaje, evita superficies de captación contaminadas y consulta las normas locales antes de usar agua recogida en cultivos comestibles.',
  },
  seo: [
    { type: 'title', text: 'Calcula el sustrato y el agua de lluvia de tu huerto urbano', level: 2 },
    { type: 'paragraph', html: 'Un bancal elevado, una terraza o un huerto comunitario plantean dos preguntas prácticas: ¿cuántos litros de sustrato hacen falta y cuánta lluvia puede recoger una superficie cercana? Este planificador pone ambas estimaciones en la misma escena.' },
    { type: 'title', text: 'Fórmula del volumen de sustrato', level: 3 },
    { type: 'paragraph', html: 'La cuenta es <code>superficie en m² × profundidad en cm × 10 = litros de sustrato</code>. Por ejemplo, un bancal de 12 m² con 30 cm de profundidad necesita 3.600 litros antes de considerar asentamiento, drenaje o diseño de plantación.' },
    { type: 'list', items: ['<strong>Superficie de cultivo:</strong> huerto, bancal, balcón o jardinera.', '<strong>Profundidad:</strong> altura prevista de la capa de sustrato.', '<strong>Captación:</strong> tejado, toldo u otra superficie de entrada.', '<strong>Lluvia:</strong> precipitación que quieres modelar en milímetros.'] },
    { type: 'title', text: 'Estimación de captación de agua de lluvia', level: 3 },
    { type: 'paragraph', html: 'El cálculo empieza con <code>superficie de captación × lluvia</code>. Después conserva el 85 % por pérdidas de escorrentía y el 90 % por pérdidas de recogida. El resultado es una estimación transparente para comparar escenarios, no una garantía de litros disponibles.' },
    { type: 'title', text: 'Compara escenarios sin conexión', level: 3 },
    { type: 'paragraph', html: 'Prueba una jardinera de balcón, un bancal y un huerto comunitario con los presets y reemplázalos por tus medidas. No necesitas dirección, mapa, previsión meteorológica ni conexión externa: los datos permanecen en el navegador.' },
    { type: 'tip', title: 'Límites importantes', html: 'El drenaje, la calidad del agua, la evaporación, las plantas y las normas locales siguen requiriendo una decisión humana. Un tejado o depósito contaminado no es automáticamente adecuado para cultivos comestibles.' },
  ],
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
