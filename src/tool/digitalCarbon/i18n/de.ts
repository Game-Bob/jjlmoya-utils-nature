import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { DigitalCarbonLocaleContent } from '../index';

const slug = 'digitaler-co2-fussabdruck-rechner';
const title = 'Rechner für den digitalen CO₂ Fußabdruck';
const description = 'Analysieren Sie die Umweltauswirkungen jeder Webseite. Schätzen Sie den Energieverbrauch und die CO₂-Emissionen pro Besuch.';

const faqData = [
  {
    question: 'Was ist der CO₂-Fußabdruck einer Website?',
    answer: 'Es ist die Menge an Treibhausgasen, primär CO₂, die in die Atmosphäre emittiert wird, resultierend aus der Energie, die von Servern, Übertragungsnetzen und dem Gerät des Nutzers verbraucht wird, um eine Webseite zu laden und darzustellen.',
  },
  {
    question: 'Wie wird die Auswirkung einer Website gemessen?',
    answer: 'Sie wird normalerweise in Gramm CO₂-Äquivalent (gCO₂e) pro Besuch gemessen. Eine effiziente Website emittiert weniger als 0,2 g CO₂, während eine nicht optimierte Seite 2 oder 3 g pro Ladevorgang überschreiten kann.',
  },
  {
    question: 'Warum verschmutzt das Internet die Umwelt?',
    answer: 'Weil die gesamte notwendige Infrastruktur (Rechenzentren, Unterseekabel, WLAN-Router, Smartphones) mit Strom betrieben wird, der in weiten Teilen der Welt immer noch aus der Verbrennung von Kohle oder Gas stammt.',
  },
  {
    question: 'Wie kann ich den CO₂-Ausstoß meiner Website reduzieren?',
    answer: 'Der effektivste Weg ist die Reduzierung des Seitengewichts: Optimieren Sie Bilder (WebP), minimieren Sie CSS- und JS-Dateien, nutzen Sie Lazy Loading und wählen Sie einen Hosting-Anbieter, der erneuerbare Energien nutzt.',
  },
];

const howToData = [
  {
    name: 'URL eingeben',
    text: 'Geben Sie die Webadresse der Seite, die Sie analysieren möchten, in das Eingabefeld ein.',
  },
  {
    name: 'Analyse starten',
    text: 'Klicken Sie auf die Schaltfläche "Analysieren", damit unser Tool das Gewicht der Ressourcen der Seite schätzen kann.',
  },
  {
    name: 'Bewertung prüfen',
    text: 'Erhalten Sie eine Note von A+ bis F basierend auf der Energieeffizienz der analysierten Website.',
  },
  {
    name: 'Verbesserungen anwenden',
    text: 'Nutzen Sie die Liste der personalisierten Tipps, um das Gewicht Ihrer Seite und deren Umweltauswirkungen zu reduzieren.',
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
  inLanguage: 'de',
};

export const content: DigitalCarbonLocaleContent = {
  slug,
  title,
  description,
  ui: {
    headInputs: 'URL-Analyzer',
    headResults: 'Ergebnis der Auswirkungen',
    headTips: 'Optimierungstipps',
    labelUrl: 'Seiten-URL',
    btnAnalyze: 'Website analysieren',
    btnAnalyzing: 'Analysiere...',
    placeholderUrl: 'https://beispiel.de',
    errorInvalidUrl: 'Bitte geben Sie eine gültige URL ein.',
    errorFetchFailed: 'Die Website konnte nicht analysiert werden. Versuchen Sie eine andere URL.',
    
    resultTitle: 'Digitaler CO₂-Fußabdruck',
    resultSubtitle: 'Geschätzte Seiteneffizienz',
    co2PerVisit: 'CO₂ pro Besuch',
    energyPerVisit: 'Verbrauchte Energie',
    co2Annual: 'Jährliches CO₂ (100k Besuche)',
    impactTitle: 'Reale jährliche Auswirkung',
    impactTrees: 'Benötigte Bäume',
    impactKm: 'Gefahrene km (ca.)',
    treesLabel: 'Bäume',
    kmLabel: 'Kilometer',
    
    ratingExcellent: 'Exzellent. Diese Seite verbraucht im Vergleich zum weltweiten Durchschnitt sehr wenig Energie.',
    ratingVeryGood: 'Sehr gute Effizienz. Die Seite ist gut optimiert und hat minimale Auswirkungen.',
    ratingGood: 'Akzeptable Effizienz. Es gibt Raum für Verbesserungen, liegt aber unter dem Durchschnitt.',
    ratingAverage: 'Durchschnittlich. Die Seite verbraucht das, was im heutigen Web zu erwarten ist.',
    ratingPoor: 'Über dem Durchschnitt. Erwägen Sie die Optimierung von Bildern, Skripten und Schriften.',
    ratingVeryPoor: 'Hohe Auswirkung. Das Seitengewicht ist signifikant und sollte reduziert werden.',
    ratingCritical: 'Sehr hohe Auswirkung. Es besteht eine große Chance, die Seitengröße zu reduzieren.',
    
    tipImages: 'Konvertieren Sie Bilder in WebP oder AVIF, um deren Gewicht um bis zu 70 % zu reduzieren.',
    tipCompression: 'Aktivieren Sie Brotli oder GZIP auf dem Server, um Ressourcen zu komprimieren.',
    tipLazyLoading: 'Nutzen Sie Lazy Loading für Bilder und Videos außerhalb des Sichtfelds.',
    tipHosting: 'Wählen Sie Hosting mit erneuerbarer Energie (Cloudflare, Netlify, Vercel).',
    tipThirdParty: 'Entfernen Sie unnötige Analyse-Skripte und Drittanbieter-Widgets.',
    tipFonts: 'Laden Sie nur die Schriftschnitte, die Sie tatsächlich verwenden.',
    tipCache: 'Konfigurieren Sie HTTP-Cache-Header, um erneute Downloads zu vermeiden.',
  },
  faq: faqData,
  howTo: howToData,
  seo: [
    {
      type: 'title',
      text: 'Rechner für den digitalen CO₂-Fußabdruck: Wie viel CO₂ Ihre Website erzeugt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Entdecken Sie die realen Umweltauswirkungen jeder Webseite. Analysieren Sie deren Gewicht, schätzen Sie den CO₂-Ausstoß pro Besuch und lernen Sie, wie Sie die digitale Verschmutzung Ihrer Projekte reduzieren können.',
    },
    {
      type: 'title',
      text: 'Was ist der digitale CO₂-Fußabdruck einer Website?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jedes Mal, wenn Sie eine Webseite öffnen, verbrauchen Ihr Gerät, Ihr Heimrouter, Unterseekabel und Server auf der anderen Seite der Welt Strom. Dieser Strom wird immer noch zu einem großen Teil durch die Verbrennung fossiler Brennstoffe erzeugt. Das Ergebnis: Eine reale Menge an <strong>CO₂, die bei jedem Besuch in die Atmosphäre emittiert wird</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Der <strong>digitale CO₂-Fußabdruck</strong> einer Website wird in Gramm CO₂-Äquivalent (gCO₂e) pro Besuch gemessen. Eine durchschnittliche Website erzeugt etwa 0,5 g CO₂ pro Ladevorgang. Obwohl das unbedeutend scheint, kann eine Seite mit 100.000 monatlichen Besuchen mehr als 600 kg CO₂ pro Jahr emittieren – was einer Fahrt von mehr als 3.000 km mit einem Benziner entspricht.',
    },
    {
      type: 'title',
      text: 'Wie wird das CO₂ einer Website berechnet?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das verwendete Berechnungsmodell basiert auf den Standards des <strong>Sustainable Web Design Model</strong>, das den Energieverbrauch in vier Hauptsegmente unterteilt:',
    },
    {
      type: 'card',
      title: 'Datentransfer',
      html: 'Das Gesamtgewicht der Seite bestimmt, wie viele Gigabyte übertragen werden. Der Standard sieht <code>0,81 kWh/GB</code> für die Netzwerkinfrastruktur vor.',
    },
    {
      type: 'card',
      title: 'Nutzergerät',
      html: 'Der Computer oder das Smartphone, das die Seite empfängt, verbraucht Energie. Dieser wird auf <code>0,52 kWh/GB</code> verarbeiteter Daten geschätzt.',
    },
    {
      type: 'card',
      title: 'Kohlenstoffintensität',
      html: 'Der globale Referenzwert von <code>442 gCO₂/kWh</code> wird verwendet, um den Energieverbrauch in reale Kohlenstoffemissionen umzurechnen.',
    },
    {
      type: 'card',
      title: 'Caching Faktor',
      html: 'Das Modell wendet einen Faktor von <code>0,75</code> an, unter der Annahme, dass 25 % der Nutzer die Ressourcen bereits im Cache haben.',
    },
    {
      type: 'title',
      text: 'Was bedeutet die Effizienzbewertung?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>A+ und A:</strong> Weniger als 0,2 g CO₂. Sehr leichte und optimierte Seiten.',
        '<strong>B:</strong> Zwischen 0.2 und 0.5 g. Unter dem globalen Durchschnitt.',
        '<strong>C:</strong> Zwischen 0.5 und 1 g. Der Durchschnitt im aktuellen Web.',
        '<strong>D und E:</strong> Zwischen 1 und 4 g. Schwere Seiten mit relevanten Auswirkungen.',
        '<strong>F:</strong> Mehr als 4 g pro Besuch. Sehr hohe Auswirkungen.',
      ],
    },
    {
      type: 'title',
      text: 'So reduzieren Sie den CO₂-Fußabdruck Ihrer Website',
      level: 2,
    },
    {
      type: 'card',
      title: 'Bildoptimierung',
      html: 'Verwenden Sie Formate wie <strong>WebP oder AVIF</strong>, um die Größe um bis zu 80 % zu reduzieren, ohne spürbaren Qualitätsverlust.',
    },
    {
      type: 'card',
      title: 'Server Komprimierung',
      html: 'Die Aktivierung von <strong>Brotli oder GZIP</strong> reduziert die Größe von Textdateien um bis zu 70 %.',
    },
    {
      type: 'card',
      title: 'Nachhaltiges Hosting',
      html: 'Die Wahl eines Anbieters mit <strong>zertifizierter erneuerbarer Energie</strong> kann die Auswirkungen um fast 100 % reduzieren.',
    },
    {
      type: 'card',
      title: 'Cache und CDN',
      html: 'Konfigurieren Sie <strong>lange Cache-Header</strong>, um unnötige erneute Downloads zu vermeiden.',
    },
    {
      type: 'title',
      text: 'Die realen Auswirkungen des Internets auf das Klima',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Internet macht zwischen <strong>2 % und 4 % der weltweiten CO₂-Emissionen</strong> aus – ein Wert, der mit der Luftfahrtindustrie vergleichbar ist. Jedes Kilobyte, das Sie einsparen, macht nicht nur Ihre Website schneller: Es reduziert messbar die digitale Verschmutzung.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
