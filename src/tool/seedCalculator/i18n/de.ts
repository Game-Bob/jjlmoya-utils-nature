import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SeedCalculatorUI } from '../ui';

const slug = 'saatgutabstand-saehmaschinen-rechner';
const title = 'Saatgutabstand und Sähmaschinenrechner';
const description =
  'Präzisionswerkzeug für Landwirte. Berechnen Sie den idealen Abstand zwischen den Samen basierend auf der Zielpopulation und der Reihenbreite und analysieren Sie die Belastung der Sähmaschine bei verschiedenen Arbeitsgeschwindigkeiten.';

const faqData = [
  {
    question: 'Wie wird der Samenabstand berechnet?',
    answer:
      'Ein Hektar (10.000 m²) wird durch die Reihenbreite geteilt, um die gesamten linearen Aussaatmeter zu erhalten. Die Zielpopulation wird dann durch diese Meter geteilt, um zu bestimmen, wie viele Samen pro linearem Meter abgelegt werden müssen.',
  },
  {
    question: 'Was ist die Zielpopulation pro Hektar?',
    answer:
      'Es ist die ideale Anzahl an Pflanzen pro 10.000 Quadratmeter. Sie hängt von der Kulturart, der Bodenfruchtbarkeit und der Wasserverfügbarkeit ab. Bewässerter Mais erfordert beispielsweise typischerweise 85.000 bis 95.000 Samen pro Hektar.',
  },
  {
    question: 'Wie beeinflusst der Keimprozentsatz die Berechnung?',
    answer:
      'Nicht alle ausgesäten Samen gehen auf. Wenn eine Saatgutpartie eine Keimfähigkeit von 95 % aufweist, müssen Sie die Aussaatmenge um 5 % erhöhen, um die gewünschte Endpflanzenpopulation zu erreichen.',
  },
  {
    question: 'Warum ist die Kalibrierung der Sähmaschine so wichtig?',
    answer:
      'Eine zu dichte Aussaatmenge verursacht Konkurrenz zwischen den Pflanzen und führt zu kleineren Körnern. Eine zu geringe Menge verschwendet Platz und Ertragspotenzial. Präzision ist der Schlüssel zur Rentabilität.',
  },
];

const howToData = [
  {
    name: 'Zielpopulation eingeben',
    text: 'Legen Sie fest, wie viele Samen oder Pflanzen Sie pro Hektar wünschen, entsprechend der technischen Empfehlung für Ihre Sorte.',
  },
  {
    name: 'Reihenbreite einstellen',
    text: 'Messen Sie den Abstand zwischen den Sähscheiben oder Scharen Ihrer Sähmaschine (typischerweise 50, 70 oder 75 cm).',
  },
  {
    name: 'Keimrate anpassen',
    text: 'Geben Sie den erwarteten Auflaufprozentsatz ein, um natürliche Verluste auf dem Feld auszugleichen.',
  },
  {
    name: 'Mechanische Einstellung erhalten',
    text: 'Verwenden Sie den Wert für Samen pro Meter oder cm Abstand zwischen den Samen, um die Zahnräder oder den Monitor Ihrer Maschine einzustellen.',
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

export const content: ToolLocaleContent<SeedCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Wissenschaftliche Referenzen',
  bibliography: [
    {
      name: 'KWS Spanien',
      url: 'https://www.kws.com/es/es/',
    },
    {
      name: 'Spanisches Landwirtschaftsministerium (MAPA)',
      url: 'https://www.mapa.gob.es/es/agricultura/temas/producciones-agricolas/cultivos-herbaceos/',
    },
    {
      name: 'Yara Spanien',
      url: 'https://www.yara.es/nutricion-vegetal/maiz/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Technischer Leitfaden zur Präzisionsaussaat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um das Getriebe einer Sähmaschine einzustellen, muss man genau wissen, wie viele Samen pro linearem Meter Furche fallen müssen. Maschinenhandbücher geben meist Näherungstabellen an, aber Faktoren wie der <strong>Schlupf des Antriebsrads</strong> oder die Samengröße können die Realität verändern. Dieses Tool liefert Ihnen den perfekten theoretischen Wert: den <strong>Zielabstand zwischen den Samen</strong>.',
    },
    {
      type: 'tip',
      title: 'Die mathematische Formel',
      html: '<p>Für Agronomen und Neugierige ist hier die Basis der Berechnung:</p><pre>Abstand (cm) = 10.000.000 / (Population × Reihenbreite)</pre><ul><li><strong>10.000.000:</strong> Umrechnungsfaktor von Ha in cm².</li><li><strong>Population:</strong> Samen pro Hektar.</li><li><strong>Reihenbreite:</strong> Abstand zwischen den Reihen in cm.</li></ul>',
    },
    {
      type: 'title',
      text: 'Warum diesen Rechner verwenden?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wenn Sie auf dem Feld messen und Ihre Samen enger beieinander oder weiter auseinander liegen als der Zielabstand, ist Ihre Maschine <strong>schlecht kalibriert</strong>. Dieses Tool analysiert auch die Dosierfrequenz (Hz) der Sähscheibe bei verschiedenen Arbeitsgeschwindigkeiten und warnt Sie vor dem Risiko von Vereinzelungsverlusten.',
    },
    {
      type: 'title',
      text: 'Schlüssel zur Qualitätsaussaat',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Vereinzelung:</strong> Vermeiden Sie Doppelbelegungen und Fehlstellen. Eine 99%ige Vereinzelung hält die Konkurrenz zwischen den Pflanzen im Gleichgewicht.',
        '<strong>Gleichmäßiger Abstand:</strong> Der Variationskoeffizient sollte weniger als 0,3 betragen. Abweichungen von mehr als 5 cm verringern das Ertragspotenzial.',
        '<strong>Tiefe:</strong> Entscheidend für einen gleichmäßigen Auflauf. Passen Sie den Druck der Andruckrollen an die Bodenfeuchtigkeit an.',
      ],
    },
    {
      type: 'title',
      text: 'Methoden zur Überprüfung auf dem Feld',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>1/1000 Hektar Methode:</strong> Messen Sie eine bestimmte Strecke entlang einer Furche ab, die 1/1000 eines Hektars entspricht. Zählen Sie die Samen und multiplizieren Sie mit 1.000. Bei 70 cm Reihenabstand beträgt die Strecke 14,28 m; bei 52,5 cm sind es 19,05 m.',
    },
    {
      type: 'paragraph',
      html: '<strong>Antriebsrad-Methode:</strong> Heben Sie die Maschine an, markieren Sie das Antriebsrad und drehen Sie es so oft, wie es 1/100 Hektar entspricht. Sammeln Sie die Samen in einem Eimer und wiegen oder zählen Sie diese, um die Kalibrierung zu überprüfen.',
    },
    {
      type: 'title',
      text: 'Referenztabelle nach Kulturart',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Mais:</strong> 60.000 bis 95.000 Samen/Ha. Hohe Reaktion auf Dichte bei modernen Hybriden.',
        '<strong>Sojabohnen:</strong> 250.000 bis 450.000 Samen/Ha. Große Kompensationsfähigkeit bei niedrigen Dichten.',
        '<strong>Sonnenblume:</strong> 40.000 bis 55.000 Samen/Ha. Sehr empfindlich gegenüber Dichte; Übermaß verringert Korbdurchmesser.',
        '<strong>Raps:</strong> 300.000 bis 600.000 Samen/Ha. Sehr kleiner Samen; erfordert exzellenten Bodenkontakt.',
      ],
    },
  ],
  ui: {
    headCrop: 'Wählen Sie Ihre Kultur',
    headParams: 'Parameter',
    headAnalysis: 'Echtzeit-Analyse',
    labelPopulation: 'Population',
    unitSeedsHa: 'Samen/Ha',
    labelRowWidth: 'Reihenbreite',
    unitCm: 'Zentimeter',
    labelWorkSpeed: 'Arbeitsgeschwindigkeit',
    unitKmh: 'km/h',
    labelCalibration: 'Scheibenkalibrierung',
    labelSpacingDesc: 'Exakter Abstand zwischen den Samen in der Reihe.',
    labelMachineStress: 'Maschinenbelastung',
    labelSeedsM: 'Samen / Meter',
    labelPlantsM2: 'Pflanzen / m²',
    labelSpeedMs: 'Meter / Sek',
    labelHaBag: 'Ha / Sack (80k)',
    statusStandby: 'STANDBY',
    statusVolumetric: 'VOLUMENFLUSS',
    statusOptimal: 'OPTIMALE DOSIERUNG',
    statusHighSpeed: 'HOHE GESCHWINDIGKEIT',
    statusPlateLimiter: 'SCHEIBENLIMIT',
    cropCorn: 'Körnermais',
    cropSilage: 'Silomais',
    cropSunflower: 'Sonnenblume',
    cropSorghum: 'Sorghum',
    cropSoy: 'Sojabohne',
    cropBeet: 'Zuckerrübe',
    cropRapeseed: 'Raps',
    noteCorn: 'Hohe Präzision erforderlich',
    noteSilage: 'Mittelhohe Dichte',
    noteSunflower: 'Geschwindigkeitsempfindlich',
    noteSorghum: 'Kontinuierlicher Fluss oder Scheibe',
    noteSoy: 'Hohe Population',
    noteBeet: 'Kritische flache Aussaat',
    noteRapeseed: 'Sehr kleiner Samen',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Wissenschaftliche Referenzen',
  },
};
