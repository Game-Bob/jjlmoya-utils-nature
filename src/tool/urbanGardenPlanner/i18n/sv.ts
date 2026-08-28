import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { UrbanGardenPlannerLocaleContent } from '../entry';

const slug = 'kalkylator-jordvolym-och-regnvatten';
const title = 'Planerare för jord och regnvatten i stadsodlingen';
const description = 'Beräkna jordvolym för odlingslådor och uppskatta regnvatten för en liten stadsodling.';
const faqData = [
  { question: 'Hur mycket jord behövs till en odlingslåda?', answer: 'Fyll i odlingsytan och jordlagrets djup. Planeraren multiplicerar värdena och omvandlar resultatet till liter så att du kan beställa jord eller kompost.' },
  { question: 'Hur beräknar jag regnvatten till en odling?', answer: 'Fyll i uppsamlingsytan och regnets höjd. Därefter används en avrinningsfaktor på 85 procent och en insamlingsfaktor på 90 procent för en försiktig uppskattning.' },
  { question: 'Fungerar den för en balkonglåda?', answer: 'Ja. Använd lådans yta som odlingsyta, fyll i jorddjupet och lägg till taket eller skärmtaket som leder vatten till behållaren.' },
  { question: 'Är uppsamlat regnvatten säkert för ätbara växter?', answer: 'Inte automatiskt. Kontrollera uppsamlingsyta och behållare, ordna lämplig filtrering och dränering och följ lokala råd.' },
];
const howToData = [
  { name: 'Mät odlingsytan', text: 'Ange ytan för lådan, balkongen eller behållaren som ska fyllas med jord.' },
  { name: 'Välj jorddjup', text: 'Ange det planerade djupet i centimeter och räkna med att materialet kan sjunka.' },
  { name: 'Lägg till uppsamlingsyta', text: 'Ange tak, skärmtak eller annan yta som leder vatten till behållaren.' },
  { name: 'Testa ett regn', text: 'Ange nederbörden i millimeter och jämför vattnet med odlingens storlek.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'sv' };
export const content: UrbanGardenPlannerLocaleContent = {
  slug, title, description,
  ui: { eyebrow: 'En liten odling, mätt i levande lager', headInputs: 'Ställ in odlingen', headScene: 'Läs landskapet', labelGardenArea: 'Odlingsyta', labelDepth: 'Jorddjup', labelCollectionArea: 'Uppsamlingsyta', labelRainfall: 'Regnhändelse', unitSquareMeters: 'm²', unitCentimeters: 'cm', unitMillimeters: 'mm', unitLiters: 'L', helpGardenArea: 'Ytan för låda, balkong eller planteringskärl.', helpDepth: 'Jordlagret som ska fyllas.', helpCollectionArea: 'Ytan som leder vatten till behållaren.', helpRainfall: 'Prova ett nyligt regn eller lokal dimensionerande nederbörd.', presetsTitle: 'Börja med en form', presetBalcony: 'Balkonglåda', presetRaisedBed: 'Odlingslåda', presetCommunity: 'Gemensam odling', labelSoilNeeded: 'Jord som behövs', labelWaterCaptured: 'Uppsamlat vatten', labelGardenDepth: 'Över denna odling', labelWateringArea: 'Vid 10 mm vatten', sceneCatchment: 'Uppsamling', sceneGardenBed: 'Odlingsyta', sceneSoil: 'Jordlager', sceneWater: 'Uppsamlat vatten', statusBalanced: 'En användbar kombination för planering', statusLightCapture: 'En liten regnhändelse', statusDeepBed: 'Ett djupt jordlager', statusNoRain: 'Väntar på regn', statusNote: 'Använd översikten för att dimensionera material och jämföra scenarier. Den är inte en bevattningsordination.', assumptionTitle: 'Planeringsantaganden', assumptionText: 'Beräkningen behåller 85 procent av regnet som avrinning och 90 procent efter uppsamlingsförluster. En liter över en kvadratmeter motsvarar en millimeter vatten.', limitationTitle: 'Odla säkert', limitationText: 'Ordna dränering, undvik förorenade uppsamlingsytor och kontrollera lokala regler innan vattnet används på ätbara grödor.' },
  seo: [
    { type: 'title', text: 'Beräkna jord och regnvatten för en stadsodling', level: 2 },
    { type: 'paragraph', html: 'En odlingslåda, balkong eller gemensam odling väcker två praktiska frågor: hur många liter jord behövs och hur mycket regn kan en närliggande yta samla? Planeraren visar båda uppskattningarna tillsammans.' },
    { type: 'title', text: 'Formel för jordvolym', level: 3 },
    { type: 'paragraph', html: 'Formeln är <code>yta i m² × djup i cm × 10 = liter jord</code>. En odling på 12 m² med 30 cm djup behöver 3 600 liter före sättning, dränering och planteringsplan.' },
    { type: 'list', items: ['<strong>Odlingsyta:</strong> botten på låda, balkong eller kärl.', '<strong>Jorddjup:</strong> höjden på det planerade lagret.', '<strong>Uppsamlingsyta:</strong> tak, skärmtak eller annan tillförsel.', '<strong>Regn:</strong> nederbörd som testas i millimeter.'] },
    { type: 'title', text: 'Uppskatta regnvatten till odlingen', level: 3 },
    { type: 'paragraph', html: 'Uppskattningen börjar med <code>uppsamlingsyta × regn</code> och använder sedan 85 procent avrinning och 90 procent efter insamlingsförluster. Resultatet jämför scenarier och garanterar inte en viss vattenmängd.' },
    { type: 'title', text: 'Jämför scenarier offline', level: 3 },
    { type: 'paragraph', html: 'Testa förinställningarna för balkong, odlingslåda och gemensam odling och ersätt dem sedan med dina mått. Adress, karta, väderprognos och personuppgifter lämnar inte webbläsaren.' },
    { type: 'tip', title: 'Viktiga begränsningar', html: 'Dränering, vattenkvalitet, avdunstning, växtval och lokala regler kräver fortfarande mänsklig bedömning. Ett förorenat tak eller en förorenad behållare är inte automatiskt lämplig för ätbara grödor.' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
