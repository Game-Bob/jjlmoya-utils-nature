import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { DigitalCarbonLocaleContent } from '../index';

const slug = 'calculadora-pegada-carbono-digital';
const title = 'Calculadora de Pegada de Carbono Digital';
const description = 'Analise o impacto ambiental de qualquer página web. Estime o consumo de energia e as emissões de CO₂ por visita.';

const faqData = [
  {
    question: 'O quê é a pegada de carbono de um website?',
    answer: 'É a quantidade de gases de efeito estufa, principalmente CO₂, emitidos para a atmosfera como resultado da energia consumida pelos servidores, redes de transmissão e pelo dispositivo do utilizador para carregar e renderizar uma página web.',
  },
  {
    question: 'Como se mede o impacto de um website?',
    answer: 'É normalmente medido em gramas de CO₂ equivalente (gCO₂e) por visita. Um website eficiente emite menos de 0,2g de CO₂, enquanto uma página não otimizada pode exceder 2 ou 3g por carregamento.',
  },
  {
    question: 'Por que é que a internet polui?',
    answer: 'Porque toda a infraestrutura necessária (centros de dados, cabos submarinos, routers WiFi, smartphones) funciona com eletricidade que, em grande parte do mundo, ainda provém da queima de carvão ou gás.',
  },
  {
    question: 'Como posso reduzir o CO₂ do meu website?',
    answer: 'A forma mais eficaz é reduzir o peso da página: otimizar imagens (WebP), minificar ficheiros CSS e JS, usar lazy loading e escolher um fornecedor de alojamento que utilize energia renovável.',
  },
];

const howToData = [
  {
    name: 'Introduza o URL',
    text: 'Digite o endereço web da página que deseja analisar no campo de entrada.',
  },
  {
    name: 'Inicie a análise',
    text: 'Clique no botão de análise para permitir que a nossa ferramenta estime o peso dos recursos da página.',
  },
  {
    name: 'Reveja a sua classificação',
    text: 'Obtenha uma nota de A+ a F baseada na eficiência energética do website analisado.',
  },
  {
    name: 'Aplique melhorias',
    text: 'Use a lista de dicas personalizadas para reduzir o peso do seu site e o seu impacto ambiental.',
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

export const content: DigitalCarbonLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'Analisador de URL',
    headResults: 'Resultado do Impacto',
    headTips: 'Dicas de Otimização',
    labelUrl: 'URL da Página',
    btnAnalyze: 'Analisar Website',
    btnAnalyzing: 'Analisando...',
    placeholderUrl: 'https://exemplo.pt',
    errorInvalidUrl: 'Por favor, introduza um URL válido.',
    errorFetchFailed: 'Não foi possível analisar o website. Tente outro URL.',
    
    resultTitle: 'Pegada de Carbono Digital',
    resultSubtitle: 'Eficiência estimada da página',
    co2PerVisit: 'CO₂ por visita',
    energyPerVisit: 'Energia consumida',
    co2Annual: 'CO₂ Anual (100k visitas)',
    impactTitle: 'Impacto Anual Real',
    impactTrees: 'Árvores necessárias',
    impactKm: 'km conduzidos (aprox.)',
    treesLabel: 'Árvores',
    kmLabel: 'Quilómetros',
    
    ratingExcellent: 'Excelente. Esta página consome muito pouca energia em comparação com a média global.',
    ratingVeryGood: 'Eficiência muito boa. A página está bem otimizada e tem um impacto mínimo.',
    ratingGood: 'Eficiência aceitável. Há margem para melhoria, mas está abaixo da média.',
    ratingAverage: 'Média. A página consome o que é esperado na web atual.',
    ratingPoor: 'Acima da média. Considere otimizar imagens, scripts e fontes.',
    ratingVeryPoor: 'Alto impacto. O peso da página é significativo e deve ser reduzido.',
    ratingCritical: 'Impacto muito alto. Há uma excelente oportunidade para reduzir o tamanho da página.',
    
    tipImages: 'Converta imagens para WebP ou AVIF para reduzir o seu peso até 70%.',
    tipCompression: 'Ative Brotli ou GZIP no servidor para comprimir recursos.',
    tipLazyLoading: 'Use lazy loading em imagens e vídeos fora do viewport.',
    tipHosting: 'Escolha um alojamento com energia renovável (Cloudflare, Netlify, Vercel).',
    tipThirdParty: 'Remova scripts de análise desnecessários e widgets de terceiros.',
    tipFonts: 'Carregue apenas os pesos tipográficos que realmente utiliza.',
    tipCache: 'Configure cabeçalhos de cache HTTP para evitar novos downloads.',
  },
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referências de Sustentabilidade Web',
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Pegada de Carbono Digital: Quanto CO₂ o seu Website gera',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Descubra o impacto ambiental real de qualquer página web. Analise o seu peso, estime as gramas de CO₂ por visita e aprenda como reduzir a poluição digital dos seus projetos.',
    },
    {
      type: 'title',
      text: 'O que é a pegada de carbono digital de um website?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sempre que abre uma página web, o seu dispositivo, router doméstico, cabos submarinos e servidores do outro lado do mundo consomem eletricidade. Essa eletricidade ainda é, em grande parte, gerada pela queima de combustíveis fósseis. O resultado: uma quantidade real de <strong>CO₂ emitido para a atmosfera por cada visita</strong>.',
    },
    {
      type: 'paragraph',
      html: 'A <strong>pegada de carbono digital</strong> de um website é medida em gramas de CO₂ equivalente (gCO₂e) por visita. Um website médio gera aproximadamente 0,5g de CO₂ por carregamento. Embora pareça insignificante, um site com 100.000 visitas mensais pode emitir mais de 600kg de CO₂ por ano, o equivalente a conduzir um carro a gasolina por mais de 3.000 km.',
    },
    {
      type: 'title',
      text: 'Como é calculado o CO₂ de um website?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O modelo de cálculo utilizado baseia-se nos padrões do <strong>Sustainable Web Design Model</strong>, que divide o consumo de energia em quatro segmentos principais:',
    },
    {
      type: 'card',
      title: 'Transferência de Dados',
      html: 'O peso total da página determina quantos gigabytes são transferidos. O padrão considera <code>0,81 kWh/GB</code> para infraestrutura de rede.',
    },
    {
      type: 'card',
      title: 'Dispositivo do Utilizador',
      html: 'O computador ou telemóvel que recebe a página consome energia. É estimado em <code>0,52 kWh/GB</code> de dados processados.',
    },
    {
      type: 'card',
      title: 'Intensidade de Carbono',
      html: 'O valor de referência global de <code>442 gCO₂/kWh</code> é utilizado para converter o consumo de energia em emissões reais de carbono.',
    },
    {
      type: 'card',
      title: 'Factor de Cache',
      html: 'O modelo aplica um factor de <code>0,75</code> assumindo que 25% dos utilizadores já têm recursos em cache.',
    },
    {
      type: 'title',
      text: 'O que significa a classificação de eficiência?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>A+ e A:</strong> Menos de 0,2g de CO₂. Sites muito leves e otimizados.',
        '<strong>B:</strong> Entre 0,2 e 0,5g. Abaixo da média global.',
        '<strong>C:</strong> Entre 0,5 e 1g. A média para a web atual.',
        '<strong>D e E:</strong> Entre 1 e 4g. Páginas pesadas com impacto relevante.',
        '<strong>F:</strong> Mais de 4g por visita. Impacto muito alto.',
      ],
    },
    {
      type: 'title',
      text: 'Como reduzir a pegada de carbono do seu website',
      level: 2,
    },
    {
      type: 'card',
      title: 'Otimização de Imagens',
      html: 'Use formatos como <strong>WebP ou AVIF</strong> para reduzir o tamanho até 80% sem perda de qualidade percetível.',
    },
    {
      type: 'card',
      title: 'Compressão do Servidor',
      html: 'Ativar <strong>Brotli ou GZIP</strong> reduz o tamanho de ficheiros de texto em até 70%.',
    },
    {
      type: 'card',
      title: 'Alojamento Sustentável',
      html: 'Escolher um fornecedor com <strong>energia renovável certificada</strong> pode reduzir o impacto em quase 100%.',
    },
    {
      type: 'card',
      title: 'Cache e CDN',
      html: 'Configure <strong>cabeçalhos de cache longos</strong> para evitar downloads desnecessários.',
    },
    {
      type: 'title',
      text: 'O impacto real da internet no clima',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A internet representa entre <strong>2% e 4% das emissões globais de CO₂</strong>, um valor comparável à indústria da aviação. Cada kilobyte que elimina não torna apenas o seu website mais rápido: reduz de forma mensurável a poluição digital.',
    },
  ],
  bibliography: [
    { name: 'Sustainable Web Design Model', url: 'https://sustainablewebdesign.org/' },
    { name: 'Website Carbon Calculator', url: 'https://www.websitecarbon.com/' },
    { name: 'The Green Web Foundation', url: 'https://www.thegreenwebfoundation.org/' },
    { name: 'W3C - Web Sustainability Guidelines', url: 'https://w3c.github.io/sustyweb/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
