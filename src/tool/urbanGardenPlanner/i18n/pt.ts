import type { FAQPage, HowToThing, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { UrbanGardenPlannerLocaleContent } from '../entry';

const slug = 'calculadora-substrato-e-captacao-agua-chuva';
const title = 'Planejador de substrato e água da chuva para hortas urbanas';
const description = 'Calcule o volume de substrato para canteiros elevados e estime a captação de água da chuva para pequenas hortas urbanas.';
const faqData = [
  { question: 'De quanto substrato preciso para um canteiro elevado?', answer: 'Informe a área de cultivo e a profundidade do substrato. O planejador multiplica os valores e converte o resultado em litros para facilitar a compra de terra ou composto.' },
  { question: 'Como calcular a captação de água da chuva para uma horta?', answer: 'Informe a área de captação e a altura da chuva. O planejador aplica um fator de escoamento de 85 por cento e um fator de coleta de 90 por cento para uma estimativa cautelosa.' },
  { question: 'Posso usar a ferramenta para um vaso de varanda?', answer: 'Sim. Use a área do vaso como área de cultivo, informe a profundidade prevista e acrescente a área do telhado ou toldo que alimenta o recipiente.' },
  { question: 'A água da chuva captada é segura para plantas comestíveis?', answer: 'Não automaticamente. Verifique a superfície de captação e o recipiente, providencie filtragem e drenagem adequadas e siga as orientações locais.' },
];
const howToData = [
  { name: 'Meça o espaço de cultivo', text: 'Informe a área do canteiro, varanda ou recipiente que receberá o substrato.' },
  { name: 'Escolha a profundidade', text: 'Digite a profundidade planejada em centímetros, considerando a acomodação do material.' },
  { name: 'Adicione a área de captação', text: 'Informe o telhado, toldo ou outra superfície que conduz a água até o recipiente.' },
  { name: 'Teste um evento de chuva', text: 'Digite a chuva em milímetros e compare a água captada com o tamanho da horta.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pt' };
export const content: UrbanGardenPlannerLocaleContent = {
  slug, title, description,
  ui: { eyebrow: 'Uma horta pequena, medida em camadas vivas', headInputs: 'Defina a sua horta', headScene: 'Leia a paisagem', labelGardenArea: 'Área de cultivo', labelDepth: 'Profundidade do substrato', labelCollectionArea: 'Área de captação', labelRainfall: 'Evento de chuva', unitSquareMeters: 'm²', unitCentimeters: 'cm', unitMillimeters: 'mm', unitLiters: 'L', helpGardenArea: 'Área do canteiro, varanda ou vaso.', helpDepth: 'A camada de terra que quer preencher.', helpCollectionArea: 'A superfície que envia água para o recipiente.', helpRainfall: 'Experimente uma chuva recente ou uma chuva de projeto local.', presetsTitle: 'Comece por uma forma', presetBalcony: 'Vaso de varanda', presetRaisedBed: 'Canteiro elevado', presetCommunity: 'Horta comunitária', labelSoilNeeded: 'Substrato necessário', labelWaterCaptured: 'Água captada', labelGardenDepth: 'Sobre esta horta', labelWateringArea: 'Com 10 mm de água', sceneCatchment: 'Captação', sceneGardenBed: 'Área de cultivo', sceneSoil: 'Camada de solo', sceneWater: 'Água captada', statusBalanced: 'Uma combinação útil para planear', statusLightCapture: 'Um evento de chuva leve', statusDeepBed: 'Um perfil de solo profundo', statusNoRain: 'A aguardar um evento de chuva', statusNote: 'Use esta fotografia para dimensionar materiais e comparar cenários. Não é uma prescrição de rega.', assumptionTitle: 'Pressupostos de planeamento', assumptionText: 'A estimativa conserva 85 por cento da chuva como escoamento e 90 por cento depois das perdas de captação. Um litro sobre um metro quadrado equivale a um milímetro de água.', limitationTitle: 'Use a horta com segurança', limitationText: 'Garanta drenagem, evite superfícies de captação contaminadas e confirme as regras locais antes de usar água recolhida em plantas comestíveis.' },
  seo: [
    { type: 'title', text: 'Calcule substrato e água da chuva para uma horta urbana', level: 2 },
    { type: 'paragraph', html: 'Um canteiro elevado, uma varanda ou uma horta comunitária levantam duas perguntas práticas: quantos litros de substrato são necessários e quanta chuva pode ser recolhida por uma superfície próxima? Este planejador apresenta as duas estimativas em conjunto.' },
    { type: 'title', text: 'Fórmula do volume de substrato', level: 3 },
    { type: 'paragraph', html: 'A fórmula é <code>área em m² × profundidade em cm × 10 = litros de substrato</code>. Um canteiro de 12 m² com 30 cm de profundidade precisa de 3.600 litros antes de considerar acomodação, drenagem e o plano de cultivo.' },
    { type: 'list', items: ['<strong>Área de cultivo:</strong> base do canteiro, varanda ou vaso.', '<strong>Profundidade:</strong> altura planejada da camada de substrato.', '<strong>Captação:</strong> telhado, toldo ou outra superfície de entrada.', '<strong>Chuva:</strong> precipitação a testar em milímetros.'] },
    { type: 'title', text: 'Estime a captação de água da chuva', level: 3 },
    { type: 'paragraph', html: 'A estimativa começa com <code>área de captação × chuva</code> e aplica 85 por cento de escoamento e 90 por cento depois das perdas de coleta. O resultado compara cenários e não garante um volume disponível.' },
    { type: 'title', text: 'Compare cenários sem ligação', level: 3 },
    { type: 'paragraph', html: 'Experimente os presets de varanda, canteiro e horta comunitária e depois substitua-os pelas suas medidas. O endereço, o mapa, a previsão meteorológica e os dados pessoais não saem do navegador.' },
    { type: 'tip', title: 'Limites importantes', html: 'Drenagem, qualidade da água, evaporação, escolha das plantas e regras locais ainda exigem uma decisão humana. Um telhado ou recipiente contaminado não é automaticamente adequado para culturas comestíveis.' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
