import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { WildlifeCameraTrapEffortPlannerLocaleContent } from '../entry';

const slug = 'planejador-esforco-armadilhas-fotograficas';
const title = 'Planejador de esforço de armadilhas fotográficas';
const description = 'Planeje o esforço de armadilhas fotográficas, estime dias de câmera e a carga de revisão sem transformar o planejamento em uma estimativa populacional.';
const faqData = [
  { question: 'O que são dias de câmera?', answer: 'São o número de câmeras multiplicado pelo número de dias ativas. Descrevem o esforço de amostragem, não o número de animais em uma área.' },
  { question: 'O planejador calcula o tamanho da população?', answer: 'Não. Ele estima o esforço operacional e uma área nominal de planejamento. Abundância, densidade e ocupação exigem desenho validado e modelo que considere detecção imperfeita.' },
  { question: 'O que o espaçamento faz?', answer: 'Ele cria uma célula quadrada nominal para cada câmera e compara o alvo com o espaçamento de uma grade uniforme. Não é um raio de detecção.' },
  { question: 'Como usar o calendário de revisão?', answer: 'Use os pontos semanais para planejar visitas, baterias, armazenamento e revisão. Troque-os pelas visitas reais do seu protocolo de campo.' },
];
const howToData = [
  { name: 'Descrever a área de estudo', text: 'Informe a área que a instalação deve amostrar. O seletor métrico ou imperial preserva o valor físico ao alternar.' },
  { name: 'Planejar a disposição', text: 'Informe câmeras, duração e espaçamento-alvo. O desenho mostra uma grade relativa, não coordenadas nem zonas de detecção garantidas.' },
  { name: 'Estimar o volume de imagens', text: 'Informe eventos esperados por câmera por dia. O planejador multiplica pelos dias de câmera e distribui o total nas revisões.' },
  { name: 'Preparar registros de campo', text: 'Atribua identificadores únicos, registre a instalação e anote cada visita, mesmo quando nenhum animal for detectado.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pt' };

export const content: WildlifeCameraTrapEffortPlannerLocaleContent = {
  slug, title, description,
  ui: {
    areaPerCameraLabel: 'Área por câmera',
    labelSurveyArea: 'Área de estudo', labelCameraCount: 'Estações de câmera', labelDeploymentDays: 'Dias de instalação', labelSpacing: 'Espaçamento-alvo', labelTriggerRate: 'Eventos esperados por câmera por dia', unitHectares: 'ha', unitAcres: 'ac', unitMeters: 'm', unitFeet: 'ft', unitCameras: 'câmeras', unitDays: 'dias', unitEventsPerDay: 'eventos por dia', helpSurveyArea: 'Área que a instalação deve amostrar.', helpCameraCount: 'Câmeras ativas nesta campanha.', helpDeploymentDays: 'Dias entre a instalação e a retirada.', helpSpacing: 'Uma célula de planejamento, não um raio de detecção.', helpTriggerRate: 'Use uma taxa cautelosa de campanha semelhante ou teste.', unitSystemLabel: 'Sistema de medidas', metricLabel: 'Métrico', imperialLabel: 'Imperial', presetsTitle: 'Pontos de partida em campo', presetBackyard: 'Borda do quintal', presetWoodland: 'Mata mista', presetReserve: 'Grande reserva', mapLabel: 'Esquema relativo da instalação', mapCaption: 'Estações numeradas em uma grade relativa. As células ajudam no espaçamento, mas não são um mapa de cobertura do habitat.', stationLabel: 'estação', cameraDaysLabel: 'Dias de câmera', expectedEventsLabel: 'Eventos esperados', spacingLabel: 'Espaçamento da grade uniforme', reviewLoadLabel: 'Eventos por revisão', reviewScheduleTitle: 'Ritmo de revisão', reviewScheduleText: 'Os pontos semanais mostram o volume antes da instalação. Substitua-os pelas visitas do seu protocolo.', reviewDayLabel: 'Dia', reviewEventsLabel: 'eventos esperados', statusBalanced: 'Espaçamento aparentemente equilibrado', statusSparse: 'Estações aparentemente distantes', statusDense: 'Estações aparentemente próximas', statusReviewHeavy: 'A carga de revisão exige atenção', statusNeedsInput: 'Complete o plano de instalação', statusNote: 'Este é um plano de esforço. Ele não informa quantos animais vivem na área nem garante a detecção de uma espécie.', assumptionTitle: 'Hipóteses do modelo', assumptionText: 'A área nominal trata cada estação como uma célula quadrada baseada no espaçamento-alvo. Os eventos esperados supõem uma taxa constante entre câmeras e dias.', limitationTitle: 'Limites de campo', limitationText: 'Escolha locais pela espécie e pela pergunta, não só pela geometria. Registre identificadores, datas, orientação, altura, habitat e revisões sem detecção.',
  },
  seo: [
    { type: 'title', text: 'Planejar o esforço de armadilhas fotográficas', level: 2 },
    { type: 'paragraph', html: 'Um projeto de armadilhas fotográficas precisa responder a duas perguntas antes da instalação. Quanto esforço de amostragem a campanha representa? O fluxo esperado de imagens pode ser armazenado, revisado e documentado? Este planejador organiza isso em dias de câmera, eventos, esquema e revisões.' },
    { type: 'title', text: 'Usar dias de câmera para descrever o esforço', level: 3 },
    { type: 'paragraph', html: 'Dias de câmera são <code>estações de câmera × dias de instalação</code>. Doze câmeras ativas por 28 dias produzem 336 dias de câmera. Isso compara campanhas, mas não estima população e não corrige falhas, habitat ou comportamento.' },
    { type: 'list', items: ['<strong>Estações:</strong> dispositivos ativos durante a campanha.', '<strong>Dias:</strong> período previsto entre instalação e retirada.', '<strong>Taxa de eventos:</strong> eventos por câmera por dia, não cada foto de uma sequência.', '<strong>Revisões:</strong> planeje armazenamento, baterias, visitas e análise.'] },
    { type: 'title', text: 'Ler o esquema como apoio de campo', level: 3 },
    { type: 'paragraph', html: 'O esquema usa área, número de câmeras e espaçamento-alvo para mostrar uma disposição relativa. A área nominal é o número de estações vezes o espaçamento ao quadrado. Não é a área do sensor: terreno, vegetação, altura, orientação e comportamento mudam a probabilidade de detecção.' },
    { type: 'title', text: 'Preparar registros melhores antes da instalação', level: 3 },
    { type: 'paragraph', html: 'Defina a espécie-alvo e a pergunta. Dê um identificador estável a cada câmera e sessão. Registre data, local, altura, orientação, habitat, configurações e funcionamento. Uma revisão sem detecção também é uma observação do processo.' },
    { type: 'tip', title: 'Não transforme esforço em abundância', html: 'Armadilhas fotográficas têm detecção imperfeita. Use o planejador para o orçamento de campo e imagens e um desenho ecológico validado para ocupação, abundância, densidade ou mudança populacional.' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
