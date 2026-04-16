import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { RainHarvesterLocaleContent } from '../index';

const slug = 'calculadora-agua-da-chuva';
const title = 'Calculadora de Recolha de Água da Chuva';
const description = 'Calcule quanta água da chuva pode recolher do seu telhado e dimensione o seu tanque de armazenamento.';

const faqData = [
  {
    question: 'Quanta água posso realmente recolher do meu telhado?',
    answer: 'A regra geral é que, para cada metro quadrado de telhado e cada milímetro de chuva, pode recolher aproximadamente 1 litro de água. No entanto, existem perdas por evaporação e filtração ajustadas com o "coeficiente de escoamento".',
  },
  {
    question: 'O que é o coeficiente de escoamento?',
    answer: 'É uma percentagem que indica quanta água é perdida dependendo do material do telhado. Um telhado de metal ou cerâmica é muito eficiente (0,85-0,95), enquanto um telhado de cascalho ou terra é muito menos eficiente (0,1-0,3).',
  },
  {
    question: 'Como dimensiono o tanque de armazenamento?',
    answer: 'Deve calcular o volume máximo de chuva esperado num mês e cruzá-lo com o seu consumo mensal estimado. Um tanque demasiado pequeno transbordará em tempestades, e um demasiado grande será desnecessariamente caro.',
  },
  {
    question: 'É seguro beber água da chuva recolhida?',
    answer: 'Não diretamente. A água transporta poeira, excrementos de aves e partículas transportadas pelo ar. Para consumo humano, deve passar por filtros de sedimentos, carvão ativado e desinfeção por luz UV ou cloro.',
  },
];

const howToData = [
  {
    name: 'Meça a superfície horizontal',
    text: 'Meça o comprimento e a largura da base do seu telhado (não a superfície inclinada, mas a área que projeta sombras no chão).',
  },
  {
    name: 'Verifique a pluviosidade local',
    text: 'Pesquise no serviço meteorológico nacional a precipitação média anual ou mensal na sua área em milímetros (mm).',
  },
  {
    name: 'Aplique a eficiência do material',
    text: 'Selecione o material do seu telhado na nossa calculadora para descontar a água que se perderá por absorção ou calor.',
  },
  {
    name: 'Calcule o volume necessário',
    text: 'Use o resultado dos litros anuais para escolher um tanque que possa armazenar pelo menos 20-30% da colheita total para períodos secos.',
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

export const content: RainHarvesterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Configurações do Telhado',
    headResults: 'Potencial de Recolha',
    labelArea: 'Área do Telhado',
    labelRainfall: 'Pluviosidade Anual',
    labelMaterial: 'Material do Telhado',
    unitM2: 'm²',
    unitMm: 'mm',
    unitLiters: 'Litros',
    helpRainfall: 'Não sabe? Pesquise "precipitação média anual [sua cidade]" no Google.',
    efficiencyTitle: 'Fator de Eficiência',
    efficiencyNote: 'É aplicada uma perda de 10% para filtros e evaporação.',
    resultTitle: 'Potencial de Recolha Anual',
    equivalenciesTitle: 'Equivalentes Práticos',
    labelFlushes: 'Descargas de Autoclismo',
    labelShowers: 'Duches (10 min)',
    labelGarden: 'Rega de Jardim',
    gardenArea: '(50m²)',
    materialMetal: 'Metal / Telha Vidrada',
    materialClay: 'Telha Árabe / Barro',
    materialConcrete: 'Betão / Asfalto',
    materialGravel: 'Cascalho / Telhado Verde',
  },
  seo: [
    {
      type: 'title',
      text: 'Recolha de Água da Chuva: Autonomia e Sustentabilidade',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A maioria dos proprietários ignora o potencial dos seus próprios telhados. Um telhado comum pode captar milhares de litros de água gratuita todos os anos. Esta ferramenta quantifica esse potencial, permitindo-lhe calcular exatamente quanta água pode "colher" e determinar o tamanho ideal do tanque para armazenamento.',
    },
    {
      type: 'title',
      text: 'Lógica de Cálculo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A fórmula base para a recolha de água da chuva é simples, mas poderosa:',
    },
    {
      type: 'paragraph',
      html: '<code style="display:block;padding:1rem;background:var(--bg-alt);border-radius:0.5rem;margin:1rem 0;font-family:monospace;">Volume = Área × Pluviosidade × Coeficiente de Escoamento × Eficiência do Filtro</code>',
    },
    {
      type: 'list',
      items: [
        '<strong>Área:</strong> A base do seu telhado (comprimento × largura projetada).',
        '<strong>Pluviosidade:</strong> Chuva caída em milímetros.',
        '<strong>Coeficiente:</strong> Quanta água o seu telhado perde (ex: absorção).',
        '<strong>Eficiência:</strong> Perdas nos filtros pré-tanque (~10%).',
      ],
    },
    {
      type: 'title',
      text: 'Porquê Recolher Água da Chuva?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Poupança:</strong> Reduza significativamente a sua fatura de água.',
        '<strong>Jardinagem:</strong> As plantas adoram água sem cloro ou calcário.',
        '<strong>Resiliência:</strong> Mantenha uma reserva de emergência para o caso de cortes.',
      ],
    },
    {
      type: 'title',
      text: 'Dimensionamento do Tanque',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O erro mais comum é comprar um tanque baseando-se apenas no orçamento. Se for demasiado pequeno, desperdiçará milhares de litros devido ao transbordo. Se for demasiado grande, gastará dinheiro desnecessariamente. Uma regra geral é ter capacidade para armazenar <strong>3 meses</strong> da pluviosidade média da sua zona, o que lhe permite atravessar as estações secas.',
    },
  ],
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referências Científicas',
  bibliography: [
    {
      name: 'FAO - Rainwater Harvesting and Storage',
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
  schemas: [faqSchema, howToSchema, appSchema],
};
