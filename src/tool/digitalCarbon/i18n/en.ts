import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { DigitalCarbonLocaleContent } from '../index';

const slug = 'digital-carbon-footprint-calculator';
const title = 'Digital Carbon Footprint Calculator';
const description = 'Analyze the environmental impact of any web page. Estimate energy consumption and CO₂ emissions per visit.';

const faqData = [
  {
    question: 'What is a website\'s carbon footprint?',
    answer: 'It is the amount of greenhouse gases, primarily CO₂, emitted into the atmosphere as a result of the energy consumed by servers, transmission networks, and the user\'s device to load and render a web page.',
  },
  {
    question: 'How is a website\'s impact measured?',
    answer: 'It is typically measured in grams of CO₂ equivalent (gCO₂e) per visit. An efficient website emits less than 0.2g of CO₂, while an unoptimized page can exceed 2 or 3g per load.',
  },
  {
    question: 'Why does the internet pollute?',
    answer: 'Because all the necessary infrastructure (data centers, undersea cables, WiFi routers, smartphones) runs on electricity that, in much of the world, still comes from burning coal or gas.',
  },
  {
    question: 'How can I reduce my website\'s CO₂?',
    answer: 'The most effective way is to reduce the page weight: optimize images (WebP), minify CSS and JS files, use lazy loading, and choose a hosting provider that uses renewable energy.',
  },
];

const howToData = [
  {
    name: 'Enter the URL',
    text: 'Type the web address of the page you want to analyze into the input field.',
  },
  {
    name: 'Start analysis',
    text: 'Click the analyze button to let our tool estimate the weight of the page resources.',
  },
  {
    name: 'Review your rating',
    text: 'Get an A+ to F grade based on the energy efficiency of the analyzed website.',
  },
  {
    name: 'Apply improvements',
    text: 'Use the list of personalized tips to reduce your site weight and environmental impact.',
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
  inLanguage: 'en',
};

export const content: DigitalCarbonLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'URL Analyzer',
    headResults: 'Impact Result',
    headTips: 'Optimization Tips',
    labelUrl: 'Page URL',
    btnAnalyze: 'Analyze Website',
    btnAnalyzing: 'Analyzing...',
    placeholderUrl: 'https://example.com',
    errorInvalidUrl: 'Please enter a valid URL.',
    errorFetchFailed: 'Could not analyze the website. Try another URL.',
    
    resultTitle: 'Digital Carbon Footprint',
    resultSubtitle: 'Estimated page efficiency',
    co2PerVisit: 'CO₂ per visit',
    energyPerVisit: 'Energy consumed',
    co2Annual: 'Annual CO₂ (100k visits)',
    impactTitle: 'Real Annual Impact',
    impactTrees: 'Trees required',
    impactKm: 'Driving km (approx.)',
    treesLabel: 'Trees',
    kmLabel: 'Kilometers',
    
    ratingExcellent: 'Excellent. This page consumes very little energy compared to the global average.',
    ratingVeryGood: 'Very good efficiency. The page is well optimized and has minimal impact.',
    ratingGood: 'Acceptable efficiency. There is room for improvement but it is below average.',
    ratingAverage: 'Average. The page consumes what is expected on the current web.',
    ratingPoor: 'Above average. Consider optimizing images, scripts, and fonts.',
    ratingVeryPoor: 'High impact. The page weight is significant and should be reduced.',
    ratingCritical: 'Very high impact. There is a great opportunity to reduce page size.',
    
    tipImages: 'Convert images to WebP or AVIF to reduce their weight by up to 70%.',
    tipCompression: 'Enable Brotli or GZIP on the server to compress resources.',
    tipLazyLoading: 'Use lazy loading on images and videos outside the viewport.',
    tipHosting: 'Choose horizontal with renewable energy (Cloudflare, Netlify, Vercel).',
    tipThirdParty: 'Remove unnecessary analytics scripts and third-party widgets.',
    tipFonts: 'Load only the typographic weights you actually use.',
    tipCache: 'Configure HTTP cache headers to avoid re-downloads.',
  },
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Web Sustainability References',
  seo: [
    {
      type: 'title',
      text: 'Digital Carbon Footprint Calculator: How Much CO₂ Your Website Generates',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Discover the real environmental impact of any web page. Analyze its weight, estimate the grams of CO₂ per visit, and learn how to reduce the digital pollution of your projects.',
    },
    {
      type: 'title',
      text: 'What is a website\'s digital carbon footprint?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Every time you open a web page, your device, home router, undersea cables, and servers on the other side of the world consume electricity. That electricity is still largely generated by burning fossil fuels. The result: a real amount of <strong>CO₂ emitted into the atmosphere for every visit</strong>.',
    },
    {
      type: 'paragraph',
      html: 'A website\'s <strong>digital carbon footprint</strong> is measured in grams of CO₂ equivalent (gCO₂e) per visit. An average website generates approximately 0.5g of CO₂ per load. Although it seems insignificant, a site with 100,000 monthly visits can emit more than 600kg of CO₂ per year, the equivalent of driving a gasoline car more than 3,000 km.',
    },
    {
      type: 'title',
      text: 'How is a website\'s CO₂ calculated?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The calculation model used is based on the <strong>Sustainable Web Design Model</strong> standards, which divides energy consumption into four main segments:',
    },
    {
      type: 'card',
      title: 'Data Transfer',
      html: 'The total weight of the page determines how many gigabytes are transferred. The standard considers <code>0.81 kWh/GB</code> for network infrastructure.',
    },
    {
      type: 'card',
      title: 'User Device',
      html: 'The computer or mobile receiving the page consumes energy. It is estimated at <code>0.52 kWh/GB</code> of processed data.',
    },
    {
      type: 'card',
      title: 'Carbon Intensity',
      html: 'The global reference value of <code>442 gCO₂/kWh</code> is used to convert energy consumption into real carbon emissions.',
    },
    {
      type: 'card',
      title: 'Caching Factor',
      html: 'The model applies a factor of <code>0.75</code> assuming that 25% of users already have resources cached.',
    },
    {
      type: 'title',
      text: 'What does the efficiency rating mean?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>A+ and A:</strong> Less than 0.2g of CO₂. Very light and optimized sites.',
        '<strong>B:</strong> Between 0.2 and 0.5g. Below the global average.',
        '<strong>C:</strong> Between 0.5 and 1g. The average for the current web.',
        '<strong>D and E:</strong> Between 1 and 4g. Heavy pages with relevant impact.',
        '<strong>F:</strong> More than 4g per visit. Very high impact.',
      ],
    },
    {
      type: 'title',
      text: 'How to reduce your website\'s carbon footprint',
      level: 2,
    },
    {
      type: 'card',
      title: 'Image Optimization',
      html: 'Use formats like <strong>WebP or AVIF</strong> to reduce size by up to 80% without noticeable quality loss.',
    },
    {
      type: 'card',
      title: 'Server Compression',
      html: 'Enabling <strong>Brotli or GZIP</strong> reduces the size of text files by up to 70%.',
    },
    {
      type: 'card',
      title: 'Sustainable Hosting',
      html: 'Choosing a provider with <strong>certified renewable energy</strong> can reduce impact by nearly 100%.',
    },
    {
      type: 'card',
      title: 'Cache and CDN',
      html: 'Configure <strong>long cache headers</strong> to avoid unnecessary re-downloads.',
    },
    {
      type: 'title',
      text: 'The real impact of the internet on climate',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The internet represents between <strong>2% and 4% of global CO₂ emissions</strong>, a figure comparable to the aviation industry. Every kilobyte you eliminate doesn\'t just make your website faster: it measurably reduces digital pollution.',
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
