import type {
  FAQPage,
  HowTo,
  SoftwareApplication,
  WithContext,
} from "schema-dts";
import { bibliography } from "../bibliography";
import type { CompostBinVolumeRatioCalculatorLocaleContent } from "../entry";

const slug = "komposter-volumen-braun-gruen-verhaeltnis-rechner";
const title = "Komposter Volumen und Braun Grün Verhältnis Rechner";
const description =
  "Berechnen Sie das Innenvolumen eines rechteckigen oder zylindrischen Komposters und prüfen Sie das praktische Verhältnis von Braunstoffen, Grünstoffen, Feuchtigkeit und Belüftung.";

const faq = [
  {
    question: "Wie berechnet man das Volumen eines Komposters?",
    answer:
      "Messen Sie den Innenraum des Behälters. Bei einem rechteckigen Komposter multiplizieren Sie Breite, Tiefe und Höhe und rechnen Kubikzentimeter in Liter um. Bei einem Zylinder nutzen Sie Pi mal Radius zum Quadrat mal Höhe.",
  },
  {
    question: "Was ist das richtige Verhältnis von Braunstoffen zu Grünstoffen?",
    answer:
      "Ein praktischer Richtwert sind zwei bis drei Teile kohlenstoffreiche Braunstoffe nach Volumen auf einen Teil stickstoffreiche Grünstoffe. Passen Sie die Mischung an Feuchtigkeit, Geruch und Durchlüftung an.",
  },
  {
    question: "Wie viel Kompost passt in den Behälter?",
    answer:
      "Vergleichen Sie das Gesamtvolumen Ihres Kompostguts mit dem Innenvolumen des Komposters. Lassen Sie stets ausreichend Raum für Belüftung und das regelmäßige Umschichten des Haufens.",
  },
  {
    question: "Was bedeutet die Feuchtigkeit eines ausgedrückten Schwamms?",
    answer:
      "Das Material sollte sich durchgehend feucht anfühlen, ohne bei leichtem Druck Wasser abzugeben. Trockener Kompost stoppt die mikrobielle Zersetzung, während zu nasser Kompost Luftlöcher verliert.",
  },
];

const howTo = [
  {
    name: "Form des Komposters wählen",
    text: "Wählen Sie rechteckig oder zylindrisch und geben Sie die Innenmaße in Zentimetern oder Zoll präzise ein.",
  },
  {
    name: "Materialvolumen eingeben",
    text: "Schätzen Sie das getrennte Volumen von braunen kohlenstoffreichen und grünen stickstoffreichen Abfällen ab.",
  },
  {
    name: "Feuchtigkeitsstufe einstellen",
    text: "Wählen Sie trocken, ausgedrückter Schwamm oder nass für passende Pflegetipps und Wartungshinweise.",
  },
  {
    name: "Ergebnis auswerten",
    text: "Nutzen Sie Kapazität, Füllstand und Mischungsverhältnis zur Anpassung von Belüftung, Materialzugabe und Feuchte.",
  },
];

const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title,
  description,
  step: howTo.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: title,
  description,
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "de",
};

export const content: CompostBinVolumeRatioCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    unitMetric: "Metrisch",
    unitImperial: "Imperial",
    shapeTitle: "Komposterform",
    shapeRectangular: "Rechteckig",
    shapeCylindrical: "Zylindrisch",
    widthLabel: "Innenbreite",
    depthLabel: "Innentiefe",
    diameterLabel: "Innendurchmesser",
    heightLabel: "Innenhöhe",
    brownLabel: "Braunstoffe",
    greenLabel: "Grünstoffe",
    moistureTitle: "Feuchtigkeitsgefühl",
    moistureDry: "Trocken",
    moistureSponge: "Ausgedrückter Schwamm",
    moistureWet: "Nass",
    moistureAdviceDry: "Trocken: Schrittweise befeuchten und umschichten.",
    moistureAdviceSponge: "Optimal: Feuchte wie ein ausgedrückter Schwamm halten.",
    moistureAdviceWet: "Nass: Trockenes Braunmaterial zugeben und wenden.",
    recipeTitle: "Empfohlene Mischung",
    recipeKitchen: "Küchenabfälle",
    recipeGarden: "Gartenabfälle",
    recipeLeafy: "Laubmischung",
    sceneTitle: "Schnitt durch den Komposthaufen",
    resultCapacity: "Innenvolumen des Komposters",
    resultMaterials: "Eingegebenes Material",
    resultRatio: "Verhältnis Braun zu Grün",
    resultFill: "Ausgenutzte Kapazität",
    brownTarget: "Zielmenge Braunstoffe",
    waterAction: "Feuchtigkeit",
    airAction: "Luft und Struktur",
    statusBalanced: "Gutes Startverhältnis",
    statusTooGreen: "Mehr Braunstoffe zugeben",
    statusTooBrown: "Mehr Grünstoffe zugeben",
    statusNoGreens: "Grünstoffe hinzufügen",
    statusOverfilled: "Komposter ist überfüllt",
    statusDry: "Haufen ist zu trocken",
    statusWet: "Haufen ist zu nass",
    statusGoodMoisture: "Feuchtigkeit im optimalen Bereich",
    statusNote: "Haufen regelmäßig umschichten für Belüftung.",
    volumeUnitLiters: "L",
    volumeUnitGallons: "gal",
    dimensionUnitCm: "cm",
    dimensionUnitIn: "in",
    formulaTitle: "Geometrische Volumenberechnung",
    formulaText:
      "Der Rechner ermittelt die echte Innenkapazität aus Ihren Abmessungen. Rechteckige Behälter nutzen Breite × Tiefe × Höhe. Zylindrische Behälter nutzen π × Radius² × Höhe. Alle Volumen werden auf dieselbe Einheit umgerechnet, bevor der Füllstand angezeigt wird.",
    practicalTitle: "Das Verhältnis ist ein Orientierungswert",
    practicalText:
      "Das Braunstoff-Ziel nutzt das Zwei- bis Dreifache des Grünstoffvolumens. Feuchtigkeit und Struktur sind ebenso wichtig: streben Sie ein Schwammgefühl an, erhalten Sie grobe Materialstrukturen und wenden Sie den Haufen bei Verdichtung.",
    localNote:
      "Alle Berechnungen finden lokal im Browser statt. Dies ist eine praktische Planungshilfe für Garten und Kompostierung im Haushalt.",
    resetLabel: "Zurücksetzen",
  },
  seo: [
    {
      type: "title",
      text: "Berechnen Sie das echte Volumen Ihres Komposters",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Ein Komposter-Volumenrechner hilft besonders dann zuverlässig, wenn er auf den tatsächlichen Innenmaßen basiert und nicht auf den äußeren Herstellerangaben. Geben Sie die Breite, Tiefe und Höhe eines rechteckigen Komposters oder den Durchmesser und die Höhe eines zylindrischen Modells ein. Das Ergebnis zeigt die verbleibende Nettokapazität in Litern oder Gallonen und vergleicht diese direkt mit der Menge der geplanten Abfälle.",
    },
    { type: "title", text: "Mathematische Formeln zur Volumenberechnung", level: 3 },
    {
      type: "paragraph",
      html: "Für rechteckige Komposter gilt die geometrische Formel <code>Breite × Tiefe × Höhe</code>. Wenn Sie die Messungen in Zentimetern durchführen, teilen Sie das Ergebnis in Kubikzentimetern durch 1.000, um das korrekte Volumen in Litern zu erhalten. Für zylindrische Behälter nutzen Sie <code>π × Radius² × Höhe</code>, wobei der Radius der Hälfte des Innendurchmessers entspricht. Messen Sie nur den nutzbaren Innenraum ohne Wandstärken oder Deckel.",
    },
    {
      type: "list",
      items: [
        "<strong>Rechteckiger Behälter:</strong> Breite × Tiefe × Höhe.",
        "<strong>Zylindrischer Behälter:</strong> π × Radius² × Höhe.",
        "<strong>Volumenumrechnung:</strong> 1.000 Kubikzentimeter entsprechen exakt 1 Liter.",
        "<strong>Füllstandsanzeige:</strong> Summe aus Braun- und Grünvolumen im Vergleich zur maximalen Innenkapazität.",
      ],
    },
    { type: "title", text: "Ausgewogenes Verhältnis zwischen Braunstoffen und Grünstoffen", level: 3 },
    {
      type: "paragraph",
      html: "Als bewährter Praxiswert gilt ein Mischungsverhältnis von zwei bis drei Teilen braunen kohlenstoffreichen Materialien auf einen Teil grüner stickstoffreicher Abfälle nach Volumen. Zu den Braunstoffen zählen trockenes Laub, zerkleinerter Karton und kleine Zweige. Grünstoffe umfassen frische Küchenabfälle, Rasenschnitt und Pflanzenteile. Der Rechner gibt den Zielbereich für Braunstoffe an, während die Feuchtigkeit und Durchlüftung den Zersetzungsprozess unterstützen.",
    },
    { type: "title", text: "Feuchtigkeit und Belüftung richtig steuern", level: 3 },
    {
      type: "paragraph",
      html: "Achten Sie auf die Konsistenz eines feuchten, gut ausgedrückten Schwamms. Zu trockener Kompost verlangsamt die biologische Aktivität der Mikroorganismen erheblich, während ein durchnässter Haufen an Sauerstoff verliert und unangenehme Gerüche entwickeln kann. Durch regelmäßiges Umschichten bringen Sie frischen Sauerstoff in den Komposthaufen.",
    },
    {
      type: "tip",
      title: "Praktischer Nutzungshinweis",
      html: "Dieses Volumenergebnis dient als nützlicher Richtwert für die Gartenpraxis und ersetzt keine chemische Laboranalyse des C:N-Verhältnisses. Beachten Sie stets die lokalen Vorgaben zur Eigenkompostierung.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
