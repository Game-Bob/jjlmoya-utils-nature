import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { WildlifeCameraTrapEffortPlannerLocaleContent } from '../entry';

const slug = 'planificador-esfuerzo-fototrampeo-fauna';
const title = 'Planificador de Esfuerzo con Cámaras Trampa';
const description = 'Planifica el esfuerzo de fototrampeo, estima días cámara y carga de revisión, y dibuja una red de campo sin afirmar tamaños de población.';
const faqData = [
  { question: '¿Qué son los días cámara?', answer: 'Los días cámara son el número de cámaras multiplicado por sus días activos. Describen el esfuerzo de muestreo, no el número de animales de una zona.' },
  { question: '¿Calcula el planificador el tamaño de una población?', answer: 'No. Estima esfuerzo operativo y una huella nominal de planificación. La abundancia, densidad y ocupación requieren un diseño validado y modelos que tengan en cuenta la detección imperfecta.' },
  { question: '¿Qué hace el campo de separación?', answer: 'Crea una celda cuadrada nominal para cada cámara y compara la separación objetivo con la separación de una cuadrícula uniforme. No es el radio de detección del sensor.' },
  { question: '¿Cómo uso el calendario de revisión?', answer: 'Usa los puntos semanales para planificar visitas y carga de imágenes. Compáralos con tu almacenamiento, baterías y capacidad de revisión, y registra cada visita real.' },
];
const howToData = [
  { name: 'Describe el área de estudio', text: 'Introduce el área que quieres muestrear. El conmutador Metric o Imperial conserva el valor físico al cambiar de unidades.' },
  { name: 'Dibuja el esfuerzo', text: 'Introduce cámaras, duración y separación objetivo. El dibujo muestra estaciones relativas, no coordenadas ni zonas de detección garantizadas.' },
  { name: 'Estima la carga de imágenes', text: 'Introduce las activaciones esperadas por cámara y día. El planificador las multiplica por los días cámara y las distribuye por revisiones semanales.' },
  { name: 'Prepara los registros de campo', text: 'Asigna identificadores únicos a cámaras y sesiones, anota la instalación y registra cada revisión, incluso cuando no haya detecciones.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'es' };

export const content: WildlifeCameraTrapEffortPlannerLocaleContent = {
  slug, title, description,
  ui: {
    areaPerCameraLabel: 'Área por cámara',
    labelSurveyArea: 'Área de estudio', labelCameraCount: 'Estaciones cámara', labelDeploymentDays: 'Días de despliegue', labelSpacing: 'Separación objetivo', labelTriggerRate: 'Activaciones esperadas por cámara y día', unitHectares: 'ha', unitAcres: 'ac', unitMeters: 'm', unitFeet: 'ft', unitCameras: 'cámaras', unitDays: 'días', unitEventsPerDay: 'eventos por día',
    helpSurveyArea: 'El área que quieres muestrear.', helpCameraCount: 'Cámaras activas en esta campaña.', helpDeploymentDays: 'Días entre instalación y retirada.', helpSpacing: 'Ayuda de planificación, no radio de detección.', helpTriggerRate: 'Usa una tasa prudente de una campaña comparable o de una prueba.', unitSystemLabel: 'Sistema de medida', metricLabel: 'Métrico', imperialLabel: 'Imperial', presetsTitle: 'Puntos de partida de campo', presetBackyard: 'Borde del jardín', presetWoodland: 'Bosque mixto', presetReserve: 'Gran reserva',
    mapLabel: 'Croquis relativo del despliegue', mapCaption: 'Estaciones numeradas en una cuadrícula relativa. Las celdas ayudan con la separación, pero no son un mapa de cobertura del hábitat.', stationLabel: 'estación', cameraDaysLabel: 'Días cámara', expectedEventsLabel: 'Eventos esperados', spacingLabel: 'Separación en cuadrícula', reviewLoadLabel: 'Eventos por revisión', reviewScheduleTitle: 'Ritmo de revisión', reviewScheduleText: 'Los puntos semanales hacen visible la carga de imágenes antes de salir al campo. Sustitúyelos por las visitas de tu protocolo.', reviewDayLabel: 'Día', reviewEventsLabel: 'eventos esperados',
    statusBalanced: 'La separación parece equilibrada', statusSparse: 'Las estaciones parecen muy separadas', statusDense: 'Las estaciones parecen muy juntas', statusReviewHeavy: 'La carga de revisión requiere atención', statusNeedsInput: 'Completa el plan de despliegue', statusNote: 'Este es un plan de esfuerzo. No indica cuántos animales viven en el área ni garantiza detectar una especie.', assumptionTitle: 'Supuestos del modelo', assumptionText: 'La huella nominal trata cada estación como una celda cuadrada basada en la separación objetivo. Los eventos esperados suponen que la tasa se mantiene constante en cámaras y días.', limitationTitle: 'Límites de campo', limitationText: 'Elige ubicaciones según la especie y la pregunta, no solo según la geometría. Registra IDs, fechas, orientación, altura, hábitat y revisiones sin detecciones para tener en cuenta la detección imperfecta.',
  },
  seo: [
    { type: 'title', text: 'Planifica el esfuerzo de muestreo con cámaras trampa', level: 2 },
    { type: 'paragraph', html: 'Un proyecto de fototrampeo tiene dos problemas antes de obtener una lista de especies. Primero, necesitas saber cuánto esfuerzo representa el despliegue. Después, necesitas saber si el flujo de imágenes puede revisarse, almacenarse y documentarse. Este planificador convierte esas preguntas en días cámara, eventos esperados, un croquis de estaciones y revisiones.' },
    { type: 'title', text: 'Usa los días cámara para describir el esfuerzo', level: 3 },
    { type: 'paragraph', html: 'Los días cámara se calculan como <code>estaciones cámara × días de despliegue</code>. Doce cámaras activas durante 28 días producen 336 días cámara. Sirve para comparar campañas, pero no estima poblaciones ni corrige fallos, diferencias de hábitat o comportamiento.' },
    { type: 'list', items: ['<strong>Estaciones cámara:</strong> dispositivos activos en la campaña.', '<strong>Días de despliegue:</strong> días previstos entre instalación y retirada.', '<strong>Tasa de activación:</strong> eventos por cámara y día, no cada imagen de una ráfaga.', '<strong>Revisiones:</strong> usa la carga esperada para planificar almacenamiento, baterías y visitas.'] },
    { type: 'title', text: 'Interpreta el croquis como ayuda de campo', level: 3 },
    { type: 'paragraph', html: 'El croquis usa el área, el número de cámaras y la separación objetivo para mostrar una disposición relativa. La huella nominal es el número de estaciones por la separación al cuadrado. Es una ayuda geométrica transparente, no el área que detecta un sensor. El terreno, la vegetación, los caminos, la altura, la orientación y el comportamiento cambian la probabilidad de detección.' },
    { type: 'title', text: 'Prepara registros antes de instalar', level: 3 },
    { type: 'paragraph', html: 'Define las especies objetivo y la pregunta del muestreo antes de colocar las cámaras. Asigna un identificador estable a cada cámara y sesión. Registra fecha, ubicación, altura, orientación, hábitat, configuración y funcionamiento en la instalación y en cada revisión. Una revisión sin detecciones también debe conservarse.' },
    { type: 'tip', title: 'No conviertas esfuerzo en abundancia', html: 'Las cámaras trampa sufren detección imperfecta. Usa esta herramienta para presupuestar esfuerzo y revisión de imágenes, y un diseño ecológico validado cuando necesites ocupación, abundancia, densidad o cambios poblacionales.' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
