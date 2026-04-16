import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SeedCalculatorUI } from '../ui';

const slug = 'calculadora-sementes';
const title = 'Calculadora de Espaçamento de Sementes e Calibração de Semeadora';
const description =
  'Ferramenta de precisão para agricultores. Calcule o espaçamento ideal entre sementes com base na população alvo e largura da linha, e analise o esforço da semeadora em diferentes velocidades de trabalho.';

const faqData = [
  {
    question: 'Como é calculado o espaçamento das sementes?',
    answer:
      'Um hectare (10.000 m²) é dividido pela largura da linha para obter o total de metros lineares de sementeira. A população alvo é então dividida por esses metros para determinar quantas sementes colocar por metro linear.',
  },
  {
    question: 'Qual é a população alvo por hectare?',
    answer:
      'É o número ideal de plantas por 10.000 metros quadrados. Depende do tipo de cultura, fertilidade do solo e disponibilidade de água. Por exemplo, o milho irrigado requer tipicamente 85.000 a 95.000 sementes por hectare.',
  },
  {
    question: 'Como a percentagem de germinação afeta o cálculo?',
    answer:
      'Nem todas as sementes semeadas irão emergir. Se um lote de sementes tem 95% de germinação, deve aumentar a taxa de sementeira em 5% para atingir a população final de plantas desejada.',
  },
  {
    question: 'Porque é que a calibração da semeadora é tão importante?',
    answer:
      'Uma taxa de sementeira muito densa causa competição entre plantas e grãos menores. Uma taxa muito esparsa desperdiça espaço e potencial de rendimento. A precisão é a chave para a rentabilidade.',
  },
];

const howToData = [
  {
    name: 'Insira a população alvo',
    text: 'Defina quantas sementes ou plantas deseja por hectare de acordo com a recomendação técnica para a sua variedade.',
  },
  {
    name: 'Defina a largura da linha',
    text: 'Meça a distância entre os discos ou sulcadores da sua semeadora (tipicamente 50, 70 ou 75 cm).',
  },
  {
    name: 'Ajuste a taxa de germinação',
    text: 'Insira a percentagem de emergência esperada para compensar as perdas naturais no campo.',
  },
  {
    name: 'Obtenha o ajuste mecânico',
    text: 'Use o valor de sementes por metro ou cm entre sementes para ajustar os carretos ou o monitor da sua máquina.',
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

export const content: ToolLocaleContent<SeedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências Científicas',
  bibliography: [
    {
      name: 'KWS Espanha',
      url: 'https://www.kws.com/es/es/',
    },
    {
      name: 'Ministério da Agricultura de Espanha (MAPA)',
      url: 'https://www.mapa.gob.es/es/agricultura/temas/producciones-agricolas/cultivos-herbaceos/',
    },
    {
      name: 'Yara Espanha',
      url: 'https://www.yara.es/nutricion-vegetal/maiz/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Guia Técnico de Sementeira de Precisão',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ajustar a transmissão de uma semeadora requer saber exatamente quantas sementes devem cair por metro linear de sulco. Os manuais das máquinas costumam fornecer tabelas aproximadas, mas fatores como a <strong>patinagem da roda de tração</strong> ou o tamanho da semente podem alterar a realidade. Esta ferramenta dá-lhe o valor teórico perfeito: o <strong>espaçamento alvo entre sementes</strong>.',
    },
    {
      type: 'tip',
      title: 'A Fórmula Matemática',
      html: '<p>Para agrónomos e curiosos, aqui está a base do cálculo:</p><pre>Espaçamento (cm) = 10.000.000 / (População × Largura da Linha)</pre><ul><li><strong>10.000.000:</strong> Fator de conversão de Ha para cm².</li><li><strong>População:</strong> Sementes por hectare.</li><li><strong>Largura da Linha:</strong> Distância entre linhas em cm.</li></ul>',
    },
    {
      type: 'title',
      text: 'Porquê usar esta calculadora?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Se medir no campo e as suas sementes estiverem mais próximas ou mais afastadas do que o espaçamento alvo, a sua máquina está <strong>mal calibrada</strong>. Esta ferramenta também analisa a frequência de dosagem (Hz) do disco de sementes a diferentes velocidades de trabalho, alertando-o para o risco de falha de singulação.',
    },
    {
      type: 'title',
      text: 'Chaves para uma Sementeira de Qualidade',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Singulação:</strong> Evite duplos e falhas. Uma singulação de 99% mantém a competição entre plantas equilibrada.',
        '<strong>Espaçamento Uniforme:</strong> O coeficiente de variação deve ser inferior a 0,3. Desvios superiores a 5 cm reduzem o potencial de rendimento.',
        '<strong>Profundidade:</strong> Crítica para uma emergência uniforme. Ajuste a carga da roda de pressão de acordo com a humidade do solo.',
      ],
    },
    {
      type: 'title',
      text: 'Métodos de Verificação no Campo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Método 1/1000 Hectare:</strong> Meça uma distância específica ao longo de um sulco que represente 1/1000 de um hectare. Conte as sementes e multiplique por 1.000. Para linhas de 70 cm a distância é 14,28 m; para linhas de 52,5 cm é 19,05 m.',
    },
    {
      type: 'paragraph',
      html: '<strong>Método da Roda de Tração:</strong> Levante a máquina, marque a roda de tração e gire-a o equivalente a 1/100 de hectare. Recolha as sementes num balde e pese ou conte-as para verificar a calibração.',
    },
    {
      type: 'title',
      text: 'Tabela de Referência por Cultura',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Milho:</strong> 60.000 a 95.000 sementes/Ha. Alta resposta à densidade em híbridos modernos.',
        '<strong>Soja:</strong> 250.000 a 450.000 sementes/Ha. Grande capacidade de compensação em baixas densidades.',
        '<strong>Girassol:</strong> 40.000 a 55.000 sementes/Ha. Muito sensível à densidade; o excesso reduz o diâmetro do capítulo.',
        '<strong>Colza:</strong> 300.000 a 600.000 sementes/Ha. Semente muito pequena; requer um excelente contacto com o solo.',
      ],
    },
  ],
  ui: {
    headCrop: 'Selecione a sua Cultura',
    headParams: 'Parâmetros',
    headAnalysis: 'Análise em Tempo Real',
    labelPopulation: 'População',
    unitSeedsHa: 'Sementes/Ha',
    labelRowWidth: 'Largura da Linha',
    unitCm: 'Centímetros',
    labelWorkSpeed: 'Velocidade de Trabalho',
    unitKmh: 'km/h',
    labelCalibration: 'Calibração do Disco',
    labelSpacingDesc: 'Distância exata entre cada semente na linha.',
    labelMachineStress: 'Esforço da Máquina',
    labelSeedsM: 'Sementes / Metro',
    labelPlantsM2: 'Plantas / m²',
    labelSpeedMs: 'Metros / Seg',
    labelHaBag: 'Ha / Saco (80k)',
    statusStandby: 'EM ESPERA',
    statusVolumetric: 'FLUXO VOLUMÉTRICO',
    statusOptimal: 'DOSAGEM IDEAL',
    statusHighSpeed: 'ALTA VELOCIDADE',
    statusPlateLimiter: 'LIMITE DO DISCO',
    cropCorn: 'Milho Grão',
    cropSilage: 'Milho Silagem',
    cropSunflower: 'Girassol',
    cropSorghum: 'Sorgo',
    cropSoy: 'Soja',
    cropBeet: 'Beterraba Sacarina',
    cropRapeseed: 'Colza',
    noteCorn: 'Alta precisão exigida',
    noteSilage: 'Densidade média-alta',
    noteSunflower: 'Sensível à velocidade',
    noteSorghum: 'Fluxo contínuu ou disco',
    noteSoy: 'Alta população',
    noteBeet: 'Sementeira superficial crítica',
    noteRapeseed: 'Semente muito pequena',
    faqTitle: 'Perguntas Frequentes',
    bibliographyTitle: 'Referências Científicas',
  },
};
