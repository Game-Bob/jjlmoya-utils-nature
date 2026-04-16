import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CricketThermometerUI } from '../ui';

const slug = 'termometro-grilo';
const title = 'Termómetro de Grilo – Calculadora de Temperatura da Lei de Dolbear';
const description =
  'Sem termómetro? Ouça os grilos. Calcule a temperatura exata contando os cri-cris com a nossa calculadora da Lei de Dolbear.';

const faqData = [
  {
    question: 'O que é a Lei de Dolbear?',
    answer:
      'Formulada em 1897 por Amos Dolbear, é uma observação científica que descobriu uma correlação linear entre a taxa de cri-cris dos grilos e a temperatura ambiente do ar.',
  },
  {
    question: 'Por que os grilos cantam mais rápido no calor?',
    answer:
      'Os grilos são animais de sangue frio (ectotermos). A velocidade dos seus processos metabólicos e contrações musculares depende da temperatura externa; quanto mais quente estiver, mais energia eles têm para emitir sons rapidamente.',
  },
  {
    question: 'Esta medição é precisa?',
    answer:
      'É surpreendentemente precisa para espécies como o grilo-das-árvores (Oecanthus fultoni), com uma margem de erro de cerca de 0,5°C se contado corretamente. No entanto, fatores como a humidade ou o vento podem alterar o resultado.',
  },
  {
    question: 'Qual grilo devo usar para o cálculo?',
    answer:
      'A fórmula original baseia-se no grilo-das-árvores. Para o grilo-do-campo comum, a relação é semelhante, mas a taxa tende a ser ligeiramente mais lenta.',
  },
];

const howToData = [
  {
    name: 'Encontre um grilo solitário',
    text: 'Encontre um local silencioso à noite onde possa ouvir claramente o canto de um único grilo para evitar confundir os ritmos.',
  },
  {
    name: 'Conte os cri-cris durante 15 segundos',
    text: 'Use um cronómetro e conte quantas estridulações o inseto emite em exatamente 15 segundos.',
  },
  {
    name: 'Introduza o valor',
    text: 'Toque no botão TAP ao ritmo dos cantos durante alguns segundos para que a calculadora calcule automaticamente os BPM.',
  },
  {
    name: 'Verifique a temperatura',
    text: 'O sistema aplicará a fórmula T(°C) = 10 + (N - 40) / 7 para lhe dar uma estimativa do calor ambiente em graus Celsius.',
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<CricketThermometerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências Científicas',
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
      text: 'Guia Completo: Como usar a Lei de Dolbear para Calcular a Temperatura',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sabia que pode saber a temperatura exata apenas ouvindo a natureza? Em 1897, o físico Amos Dolbear descobriu uma relação matemática precisa entre a taxa de cri-cris dos grilos e o calor ambiente. Esta ferramenta digitaliza essa descoberta para transformar o seu telemóvel num termómetro natural.',
    },
    {
      type: 'tip',
      title: 'Por que é que os grilos cantam?',
      html: '<p>O "canto" do grilo, ou <strong>estridulação</strong>, é na verdade um chamamento de acasalamento. Os machos esfregam as suas asas (não as suas pernas) para criar este som. Curiosamente, como são animais de sangue frio (ectotermos), a velocidade deste esfregar depende diretamente da energia térmica do ar.</p>',
    },
    {
      type: 'title',
      text: 'A Ciência: Ectotermia e Metabolismo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ao contrário dos mamíferos, que mantêm uma temperatura corporal constante, os insetos dependem do calor externo. As suas reações bioquímicas seguem a <strong>Equação de Arrhenius</strong>: quanto mais calor, mais rápida é a reação.',
    },
    {
      type: 'paragraph',
      html: 'Isto significa que para os músculos do grilo se contraírem e esfregarem as suas asas, eles precisam de reações enzimáticas. Se estiver frio, estas reações são lentas e o canto é vagaroso. Se estiver quente, o metabolismo acelera e a canção torna-se um trinado frenético.',
    },
    {
      type: 'title',
      text: 'A Fórmula de Dolbear',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Embora existam variações para diferentes espécies, a fórmula mais famosa é para o grilo-das-árvores (<em>Oecanthus fultoni</em>). Para obter a temperatura em graus Celsius:',
    },
    {
      type: 'code',
      code: 'T(°C) = 10 + (N - 40) / 7\n\nOnde N = número de cri-cris por minuto.',
      ariaLabel: 'Fórmula de Dolbear para calcular a temperatura a partir do canto dos grilos',
    },
    {
      type: 'paragraph',
      html: 'A nossa ferramenta faz isto automaticamente: mede o tempo entre os seus toques, calcula os cri-cris por minuto (BPM) e aplica a fórmula instantaneamente.',
    },
    {
      type: 'title',
      text: 'Factos Fascinantes',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Termómetros do Amor:</strong> Algumas teorias sugerem que as fêmeas preferem machos que cantam na frequência "correta" para a temperatura atual, pois isso indica que o macho é saudável e tem um metabolismo forte.',
        '<strong>Limite de Frio:</strong> Abaixo dos 10°C (50°F), a maioria dos grilos para de cantar porque o seu metabolismo é demasiado lento para sustentar o esforço muscular.',
        '<strong>Sincronização:</strong> Em noites quentes, milhares de grilos podem sincronizar os seus cantos, criando um impressionante efeito sonoro de "onda".',
      ],
    },
    {
      type: 'tip',
      title: 'Nota de Precisão',
      html: '<p>A precisão depende da espécie de grilo. Esta ferramenta está calibrada para o grilo-do-campo comum e o grilos-das-árvores. Fatores como a humidade ou o vento podem alterar o resultado em ±0,5°C.</p>',
    },
  ],
  ui: {
    labelWaiting: 'A aguardar...',
    labelTapping: 'Continue a tocar...',
    tapInstruction: 'Cada vez que ouvir um cri-cri',
    btnReset: 'Reiniciar',
    btnSoundOn: 'Som: Ligado',
    btnSoundOff: 'Som: Desligado',
    unitChirpsMin: 'cantos/min',
    faqTitle: 'Perguntas Frequentes',
    bibliographyTitle: 'Referências Científicas',
  },
};
