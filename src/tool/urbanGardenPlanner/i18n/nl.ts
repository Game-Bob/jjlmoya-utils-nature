import type { FAQPage, HowToThing, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { UrbanGardenPlannerLocaleContent } from '../entry';

const slug = 'berekenaar-potgrond-en-regenwater-stadstuin';
const title = 'Planner voor potgrond en regenwater in de stadstuin';
const description = 'Bereken het volume potgrond voor verhoogde bedden en schat regenwater voor een kleine stadstuin.';
const faqData = [
  { question: 'Hoeveel aarde heb ik nodig voor een verhoogd bed?', answer: 'Voer het teeltoppervlak en de substraatdiepte in. De planner vermenigvuldigt beide waarden en zet het resultaat om naar liters voor een betere bestelling van aarde of compost.' },
  { question: 'Hoe bereken ik regenwater voor een tuin?', answer: 'Voer het opvangoppervlak en de regenhoogte in. Daarna gebruikt de planner een afvoerfactor van 85 procent en een opvangfactor van 90 procent voor een voorzichtige planning.' },
  { question: 'Kan ik dit voor een balkonbak gebruiken?', answer: 'Ja. Gebruik het oppervlak van de bak als teeltoppervlak, vul de geplande diepte in en voeg het dak of de luifel toe die het vat voedt.' },
  { question: 'Is opgevangen regenwater veilig voor eetbare planten?', answer: 'Niet vanzelf. Controleer het opvangoppervlak en vat, zorg voor geschikte filtering en afvoer en volg plaatselijke richtlijnen.' },
];
const howToData = [
  { name: 'Meet de teeltruimte', text: 'Voer het oppervlak van het bed, balkon of vat in dat het substraat ontvangt.' },
  { name: 'Kies de substraatdiepte', text: 'Voer de geplande diepte in centimeters in en houd rekening met inklinking.' },
  { name: 'Voeg het opvangoppervlak toe', text: 'Voer het dak, de luifel of een ander oppervlak in dat water naar het vat leidt.' },
  { name: 'Test een regenbui', text: 'Voer de regenhoogte in millimeters in en vergelijk het water met de tuingrootte.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'nl' };
export const content: UrbanGardenPlannerLocaleContent = {
  slug, title, description,
  ui: { eyebrow: 'Een kleine tuin, gemeten in levende lagen', headInputs: 'Stel je tuin in', headScene: 'Lees het landschap', labelGardenArea: 'Teeltoppervlak', labelDepth: 'Substraatdiepte', labelCollectionArea: 'Oppervlak voor opvang', labelRainfall: 'Regenbui', unitSquareMeters: 'm²', unitCentimeters: 'cm', unitMillimeters: 'mm', unitLiters: 'L', helpGardenArea: 'Oppervlak van bed, balkon of plantenbak.', helpDepth: 'De grondlaag die je wilt vullen.', helpCollectionArea: 'Het oppervlak dat water naar je vat stuurt.', helpRainfall: 'Probeer een recente bui of lokale ontwerpregen.', presetsTitle: 'Begin met een vorm', presetBalcony: 'Balkonbak', presetRaisedBed: 'Verhoogd bed', presetCommunity: 'Volkstuin', labelSoilNeeded: 'Benodigd substraat', labelWaterCaptured: 'Opgevangen water', labelGardenDepth: 'Over deze tuin', labelWateringArea: 'Bij 10 mm water', sceneCatchment: 'Opvang', sceneGardenBed: 'Teeltruimte', sceneSoil: 'Grondlaag', sceneWater: 'Opgevangen water', statusBalanced: 'Een bruikbare planningcombinatie', statusLightCapture: 'Een lichte regenbui', statusDeepBed: 'Een diepe grondlaag', statusNoRain: 'Wacht op een regenbui', statusNote: 'Gebruik deze momentopname om materialen te kiezen en scenario s te vergelijken. Het is geen bewateringsadvies.', assumptionTitle: 'Planningsaannames', assumptionText: 'De schatting houdt 85 procent van de regen als afvoer en 90 procent na opvangverliezen over. Een liter over een vierkante meter is één millimeter water.', limitationTitle: 'Houd de tuin veilig', limitationText: 'Voorzie afvoer, vermijd vervuilde opvangoppervlakken en controleer lokale regels voor je opgevangen water op eetbare gewassen gebruikt.' },
  seo: [
    { type: 'title', text: 'Potgrond en regenwater voor een stadstuin berekenen', level: 2 },
    { type: 'paragraph', html: 'Een verhoogd bed, balkon of volkstuin roept twee praktische vragen op: hoeveel liter substraat is nodig en hoeveel regen kan een oppervlak in de buurt opvangen? Deze planner zet beide schattingen naast elkaar.' },
    { type: 'title', text: 'Formule voor het volume potgrond', level: 3 },
    { type: 'paragraph', html: 'De formule is <code>oppervlak in m² × diepte in cm × 10 = liter substraat</code>. Een bed van 12 m² met 30 cm diepte vraagt 3.600 liter vóór inklinking, drainage en beplantingsplan.' },
    { type: 'list', items: ['<strong>Teeltoppervlak:</strong> bodem van bed, balkon of plantenbak.', '<strong>Substraatdiepte:</strong> hoogte van de grondlaag.', '<strong>Opvangoppervlak:</strong> dak, luifel of andere toevoer.', '<strong>Regen:</strong> neerslag die je in millimeters test.'] },
    { type: 'title', text: 'Regenwater voor de tuin schatten', level: 3 },
    { type: 'paragraph', html: 'De schatting start met <code>opvangoppervlak × regenhoogte</code> en past daarna 85 procent afvoer en 90 procent opvang toe. Het resultaat vergelijkt scenario s en garandeert geen beschikbare hoeveelheid water.' },
    { type: 'title', text: 'Scenario s offline vergelijken', level: 3 },
    { type: 'paragraph', html: 'Probeer de presets voor balkon, verhoogd bed en volkstuin en vervang ze daarna door je metingen. Er gaan geen adres, kaart, weersverwachting of persoonsgegevens uit de browser.' },
    { type: 'tip', title: 'Belangrijke grenzen', html: 'Afvoer, waterkwaliteit, verdamping, plantenkeuze en lokale regels vragen nog steeds om menselijk oordeel. Een vervuild dak of vat is niet vanzelf geschikt voor eetbare gewassen.' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
