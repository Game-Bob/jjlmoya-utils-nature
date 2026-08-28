import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { UrbanGardenPlannerLocaleContent } from '../entry';

const slug = 'gartenboden-und-regenwasser-planer';
const title = 'Planer für Gartenboden und Regenwasser';
const description = 'Berechne das Substratvolumen für Hochbeete und schätze die Regenwassermenge für kleine Stadtgärten.';

const faqData = [
  { question: 'Wie viel Erde brauche ich für ein Hochbeet?', answer: 'Gib die Anbaufläche und die Substrattiefe ein. Der Planer multipliziert beide Werte und rechnet das Ergebnis in Liter um, damit du Erde oder Kompost besser bestellen kannst.' },
  { question: 'Wie berechne ich Regenwasser für einen Garten?', answer: 'Gib die Sammelfläche und die Niederschlagshöhe ein. Der Planer wendet danach einen Abflussfaktor von 85 Prozent und einen Sammelfaktor von 90 Prozent als vorsichtige Planungsschätzung an.' },
  { question: 'Funktioniert der Planer für einen Balkon?', answer: 'Ja. Verwende die Fläche des Pflanzbereichs, die geplante Substrattiefe und die Dach- oder Vordachfläche, die deinen Behälter speist.' },
  { question: 'Ist gesammeltes Regenwasser für essbare Pflanzen sicher?', answer: 'Nicht automatisch. Prüfe Sammelfläche und Behälter, sorge für geeignete Filter und Entwässerung und beachte die örtlichen Hinweise.' },
];

const howToData = [
  { name: 'Anbaufläche messen', text: 'Gib die Fläche des Beets, Balkons oder Pflanzgefäßes ein, die das Substrat aufnehmen soll.' },
  { name: 'Substrattiefe festlegen', text: 'Trage die geplante Tiefe in Zentimetern ein, einschließlich möglicher Setzung.' },
  { name: 'Sammelfläche eintragen', text: 'Gib die Dach-, Vordach- oder andere Fläche ein, die Wasser in den Behälter leitet.' },
  { name: 'Regenereignis testen', text: 'Trage eine Niederschlagshöhe in Millimetern ein und vergleiche das Wasser mit der Gartengröße.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'de' };

export const content: UrbanGardenPlannerLocaleContent = {
  slug,
  title,
  description,
  ui: {
    eyebrow: 'Ein kleiner Garten, in lebendigen Schichten gemessen', headInputs: 'Gartenszene festlegen', headScene: 'Die Landschaft lesen', labelGardenArea: 'Anbaufläche', labelDepth: 'Substrattiefe', labelCollectionArea: 'Sammelfläche', labelRainfall: 'Regenereignis', unitSquareMeters: 'm²', unitCentimeters: 'cm', unitMillimeters: 'mm', unitLiters: 'L', helpGardenArea: 'Fläche von Beet, Balkon oder Pflanzgefäß.', helpDepth: 'Die Bodenschicht, die du auffüllen möchtest.', helpCollectionArea: 'Fläche, die Wasser in deinen Behälter leitet.', helpRainfall: 'Teste einen Schauer oder ein örtliches Planungsereignis.', presetsTitle: 'Mit einer Form beginnen', presetBalcony: 'Balkonbeet', presetRaisedBed: 'Hochbeet', presetCommunity: 'Gemeinschaftsgarten', labelSoilNeeded: 'Benötigtes Substrat', labelWaterCaptured: 'Gesammeltes Wasser', labelGardenDepth: 'Auf dieser Gartenfläche', labelWateringArea: 'Bei 10 mm Wasser', sceneCatchment: 'Sammelfläche', sceneGardenBed: 'Anbaufläche', sceneSoil: 'Bodenschicht', sceneWater: 'Gesammeltes Wasser', statusBalanced: 'Eine brauchbare Planungskombination', statusLightCapture: 'Ein kleines Regenereignis', statusDeepBed: 'Ein tiefes Bodenprofil', statusNoRain: 'Warte auf ein Regenereignis', statusNote: 'Nutze diese Momentaufnahme zum Vergleichen von Materialien und Szenarien. Sie ist keine Bewässerungsempfehlung.', assumptionTitle: 'Planungsannahmen', assumptionText: 'Die Schätzung rechnet mit 85 Prozent Abfluss und 90 Prozent nach Verlusten bei der Sammlung. Ein Liter auf einem Quadratmeter entspricht einem Millimeter Wasser.', limitationTitle: 'Garten sicher nutzen', limitationText: 'Sorge für Entwässerung, vermeide belastete Sammelflächen und prüfe örtliche Regeln, bevor du Regenwasser für essbare Pflanzen verwendest.',
  },
  seo: [
    { type: 'title', text: 'Gartenboden und Regenwasser für kleine Flächen berechnen', level: 2 },
    { type: 'paragraph', html: 'Ein Hochbeet, ein Balkon und ein Gemeinschaftsgarten brauchen dieselbe praktische Klarheit: Wie viel Substrat wird benötigt und wie viel Regenwasser kann eine verfügbare Fläche ungefähr sammeln? Dieser Planer stellt beide Schätzungen nebeneinander.' },
    { type: 'title', text: 'Formel für das Substratvolumen', level: 3 },
    { type: 'paragraph', html: 'Die Rechnung lautet <code>Fläche in m² × Tiefe in cm × 10 = Liter Substrat</code>. Ein Beet mit 12 m² Fläche und 30 cm Tiefe benötigt damit 3.600 Liter, bevor Setzung, Drainageschichten oder die konkrete Bepflanzung berücksichtigt werden.' },
    { type: 'list', items: ['<strong>Anbaufläche:</strong> Grundfläche von Beet, Balkon oder Pflanzgefäß.', '<strong>Substrattiefe:</strong> geplante Höhe der Bodenschicht.', '<strong>Sammelfläche:</strong> Dach, Vordach oder andere Zuflussfläche.', '<strong>Regenereignis:</strong> Niederschlagshöhe in Millimetern.'] },
    { type: 'title', text: 'Regenwasser für den Garten schätzen', level: 3 },
    { type: 'paragraph', html: 'Die Wassermenge beginnt mit <code>Sammelfläche × Niederschlag</code>. Danach werden 85 Prozent für Abflussverluste und 90 Prozent für Verluste bei der Sammlung angesetzt. So entsteht eine nachvollziehbare Schätzung statt eines Versprechens über die tatsächlich verfügbare Wassermenge.' },
    { type: 'title', text: 'Szenarien offline vergleichen', level: 3 },
    { type: 'paragraph', html: 'Teste ein Balkonbeet, ein Hochbeet und eine größere Gemeinschaftsfläche mit den Presets und ersetze sie danach durch deine Messwerte. Der Planer benötigt keine Adresse, Karte oder Wetterverbindung und bleibt im Browser.' },
    { type: 'tip', title: 'Wichtige Grenzen', html: 'Entwässerung, Wasserqualität, Verdunstung, Pflanzenwahl und örtliche Vorschriften brauchen weiterhin eine menschliche Entscheidung. Belastete Dächer oder Behälter sind für essbare Pflanzen nicht automatisch geeignet.' },
  ],
  faq: faqData,
  howTo: howToData,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
