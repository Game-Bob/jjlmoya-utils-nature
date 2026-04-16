import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { DigitalCarbonLocaleContent } from '../index';

const slug = 'digitalt-koldioxidavtryck-kalkylator';
const title = 'Kalkylator för digitalt koldioxidavtryck';
const description = 'Analysera miljöpåverkan av vilken webbsida som helst. Uppskatta energiförbrukning och CO₂-utsläpp per besök.';

const faqData = [
  {
    question: 'Vad är en webbplats koldioxidavtryck?',
    answer: 'Det är mängden växthusgaser, främst CO₂, som släpps ut i atmosfären som ett resultat av den energi som förbrukas av servrar, överföringsnätverk och användarens enhet för att ladda och rendera en webbsida.',
  },
  {
    question: 'Hur mäts en webbplats påverkan?',
    answer: 'Det mäts vanligtvis i gram koldioxidekvivalenter (gCO₂e) per besök. En effektiv webbplats släpper ut mindre än 0,2 g CO₂, medan en ooptimerad sida kan överstiga 2 eller 3 g per laddning.',
  },
  {
    question: 'Varför förorenar internet?',
    answer: 'Eftersom all nödvändig infrastruktur (datacenter, undersjöiska kablar, WiFi-routrar, smartphones) drivs med elektricitet som i stora delar av världen fortfarande kommer från förbränning av kol eller gas.',
  },
  {
    question: 'Hur kan jag minska min webbplats CO₂?',
    answer: 'Det mest effektiva sättet är att minska sidans vikt: optimera bilder (WebP), minifiera CSS- och JS-filer, använd lazy loading och välj en webbhotellsleverantör som använder förnybar energi.',
  },
];

const howToData = [
  {
    name: 'Ange URL',
    text: 'Skriv in webbadressen till den sida du vill analysera i inmatningsfältet.',
  },
  {
    name: 'Starta analys',
    text: 'Klicka på analysknappen för att låta vårt verktyg uppskatta vikten av sidans resurser.',
  },
  {
    name: 'Granska ditt betyg',
    text: 'Få ett betyg från A+ till F baserat på energieffektiviteten för den analyserade webbplatsen.',
  },
  {
    name: 'Tillämpa förbättringar',
    text: 'Använd listan med personliga tips för att minska din sids vikt och miljöpåverkan.',
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
  inLanguage: 'sv',
};

export const content: DigitalCarbonLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'URL-analysator',
    headResults: 'Resultat för påverkan',
    headTips: 'Optimeringstips',
    labelUrl: 'Sidans URL',
    btnAnalyze: 'Analysera webbplats',
    btnAnalyzing: 'Analyserar...',
    placeholderUrl: 'https://exempel.se',
    errorInvalidUrl: 'Ange en giltig URL.',
    errorFetchFailed: 'Kunde inte analysera webbplatsen. Prova en annan URL.',
    
    resultTitle: 'Digitalt koldioxidavtryck',
    resultSubtitle: 'Uppskattad sideffektivitet',
    co2PerVisit: 'CO₂ per besök',
    energyPerVisit: 'Förbrukad energi',
    co2Annual: 'Årlig CO₂ (100k besök)',
    impactTitle: 'Verklig årlig påverkan',
    impactTrees: 'Träd som krävs',
    impactKm: 'Körda km (ca)',
    treesLabel: 'Träd',
    kmLabel: 'Kilometer',
    
    ratingExcellent: 'Utmärkt. Denna sida förbrukar mycket lite energi jämfört med det globala genomsnittet.',
    ratingVeryGood: 'Mycket god effektivitet. Sidan är väl optimerad och har minimal påverkan.',
    ratingGood: 'Acceptabel effektivitet. Det finns utrymme för förbättringar men den är under genomsnittet.',
    ratingAverage: 'Genomsnittlig. Sidan förbrukar vad som förväntas på dagens webb.',
    ratingPoor: 'Över genomsnittet. Överväg att optimera bilder, skript och typsnitt.',
    ratingVeryPoor: 'Hög påverkan. Sidans vikt är betydande och bör minskas.',
    ratingCritical: 'Mycket hög påverkan. Det finns en stor möjlighet att minska sidans storlek.',
    
    tipImages: 'Konvertera bilder till WebP eller AVIF för att minska deras vikt med upp till 70 %.',
    tipCompression: 'Aktivera Brotli eller GZIP på servern för att komprimera resurser.',
    tipLazyLoading: 'Använd lazy loading på bilder och videor utanför visningsfönstret.',
    tipHosting: 'Välj webbhotell med förnybar energi (Cloudflare, Netlify, Vercel).',
    tipThirdParty: 'Ta bort onödiga analysskript och tredjepartswidgetar.',
    tipFonts: 'Ladda endast de typsnittsvikter du faktiskt använder.',
    tipCache: 'Konfigurera HTTP-cache-headers för att undvika onödiga nedladdningar.',
  },
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenser för webbhållbarhet',
  seo: [
    {
      type: 'title',
      text: 'Kalkylator för digitalt koldioxidavtryck: Hur mycket CO₂ din webbplats genererar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Upptäck den verkliga miljöpåverkan av vilken webbsida som helst. Analysera dess vikt, uppskatta gram CO₂ per besök och lär dig hur du minskar den digitala föroreningen i dina projekt.',
    },
    {
      type: 'title',
      text: 'Vad är en webbplats digitala koldioxidavtryck?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Varje gång du öppnar en webbsida förbrukar din enhet, hemrouter, undersjöiska kablar och servrar på andra sidan jorden elektricitet. Den elektriciteten genereras fortfarande till stor del genom förbränning av fossila bränslen. Resultatet: en verklig mängd <strong>CO₂ som släpps ut i atmosfären för varje besök</strong>.',
    },
    {
      type: 'paragraph',
      html: 'En webbplats <strong>digitala koldioxidavtryck</strong> mäts i gram koldioxidekvivalenter (gCO₂e) per besök. En genomsnittlig webbplats genererar cirka 0,5 g CO₂ per laddning. Även om det verkar obetydligt kan en webbplats med 100 000 månatliga besök släppa ut mer än 600 kg CO₂ per år, vilket motsvarar att köra en bensinbil mer än 3 000 km.',
    },
    {
      type: 'title',
      text: 'Hur mäts en webbplats CO₂?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Beräkningsmodellen som används är baserad på standarderna för <strong>Sustainable Web Design Model</strong>, som delar upp energiförbrukningen i fyra huvudsegment:',
    },
    {
      type: 'card',
      title: 'Dataöverföring',
      html: 'Sidans totala vikt avgör hur många gigabyte som överförs. Standarden tar hänsyn till <code>0,81 kWh/GB</code> för nätverksinfrastruktur.',
    },
    {
      type: 'card',
      title: 'Användarenhet',
      html: 'Datorn eller mobilen som tar emot sidan förbrukar energi. Den uppskattas till <code>0,52 kWh/GB</code> bearbetad data.',
    },
    {
      type: 'card',
      title: 'Koldioxidintensitet',
      html: 'Det globala referensvärdet på <code>442 gCO₂/kWh</code> används för att omvandla energiförbrukning till verkliga koldioxidutsläpp.',
    },
    {
      type: 'card',
      title: 'Caching faktor',
      html: 'Modellen tillämpar en faktor på <code>0,75</code> baserat på antagandet att 25 % av användarna redan har resurser cachade.',
    },
    {
      type: 'title',
      text: 'Vad betyder effektivitetsbetyget?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>A+ och A:</strong> Mindre än 0,2 g CO₂. Mycket lätta och optimerade webbplatser.',
        '<strong>B:</strong> Mellan 0,2 och 0,5 g. Under det globala genomsnittet.',
        '<strong>C:</strong> Mellan 0,5 och 1 g. Genomsnittet för dagens webb.',
        '<strong>D och E:</strong> Mellan 1 och 4 g. Tunga sidor med betydande påverkan.',
        '<strong>F:</strong> Mer än 4 g per besök. Mycket hög påverkan.',
      ],
    },
    {
      type: 'title',
      text: 'Hur man minskar sin webbplats koldioxidavtryck',
      level: 2,
    },
    {
      type: 'card',
      title: 'Biloptimering',
      html: 'Använd format som <strong>WebP eller AVIF</strong> för att minska storleken med upp till 80 % utan märkbar kvalitetsförlust.',
    },
    {
      type: 'card',
      title: 'Serverkomprimering',
      html: 'Att aktivera <strong>Brotli eller GZIP</strong> minskar storleken på textfiler med upp till 70 %.',
    },
    {
      type: 'card',
      title: 'Hållbart webbhotell',
      html: 'Att välja en leverantör med <strong>certifierad förnybar energi</strong> kan minska påverkan med nästan 100 %.',
    },
    {
      type: 'card',
      title: 'Cache och CDN',
      html: 'Konfigurera <strong>långa cache-headers</strong> för att undvika onödiga nedladdningar.',
    },
    {
      type: 'title',
      text: 'Internets verkliga påverkan på klimatet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Internet står för mellan <strong>2 % och 4 % av de globala CO₂-utsläppen</strong>, en siffra som är jämförbar med flygindustrin. Varje kilobyte du tar bort gör inte bara din webbplats snabbare: det minskar mätbart den digitala föroreningen.',
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
