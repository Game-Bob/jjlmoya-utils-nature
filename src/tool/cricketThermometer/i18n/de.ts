import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CricketThermometerUI } from '../ui';

const slug = 'grillen-thermometer';
const title = 'Grillen Thermometer – Dolbearsches Gesetz Temperaturrechner';
const description =
  'Kein Thermometer zur Hand? Hören Sie den Grillen zu. Berechnen Sie die exakte Temperatur, indem Sie das Zirpen mit unserem Dolbearsches Gesetz Rechner zählen.';

const faqData = [
  {
    question: 'Was ist das Dolbearsche Gesetz?',
    answer:
      'Es wurde 1897 von Amos Dolbear formuliert und ist eine wissenschaftliche Beobachtung, die eine lineare Korrelation zwischen der Zirp-Rate von Grillen und der Umgebungslufttemperatur feststellte.',
  },
  {
    question: 'Warum zirpen Grillen bei Hitze schneller?',
    answer:
      'Grillen sind wechselwarme Tiere (Ektothermen). Die Geschwindigkeit ihrer Stoffwechselprozesse und Muskelkontraktionen hängt von der Außentemperatur ab; je wärmer es ist, desto mehr Energie haben sie, um Geräusche schnell hintereinander zu erzeugen.',
  },
  {
    question: 'Ist diese Messung genau?',
    answer:
      'Sie ist überraschend genau für Arten wie die Schneegrille (Oecanthus fultoni), mit einer Fehlermarge von etwa 0,5°C bei korrekter Zählung. Faktoren wie Luftfeuchtigkeit oder Wind können das Ergebnis jedoch beeinflussen.',
  },
  {
    question: 'Welche Grille sollte ich für die Berechnung nutzen?',
    answer:
      'Die ursprüngliche Formel basiert auf der Schneegrille. Für die gewöhnliche Feldgrille ist das Verhältnis ähnlich, aber die Rate tendiert dazu, etwas langsamer zu sein.',
  },
];

const howToData = [
  {
    name: 'Finden Sie eine einsame Grille',
    text: 'Suchen Sie sich nachts einen ruhigen Ort, an dem Sie das Zirpen einer einzelnen Grille deutlich hören können, um die Rhythmen nicht zu verwechseln.',
  },
  {
    name: 'Zählen Sie das Zirpen für 15 Sekunden',
    text: 'Nutzen Sie eine Stoppuhr und zählen Sie, wie viele Stridulationen das Insekt in genau 15 Sekunden von sich gibt.',
  },
  {
    name: 'Geben Sie den Wert ein',
    text: 'Tippen Sie einige Sekunden lang im Rhythmus des Zirpens auf die TAP-Schaltfläche, damit der Rechner automatisch die BPM berechnet.',
  },
  {
    name: 'Überprüfen Sie die Temperatur',
    text: 'Das System wendet die Formel T(°C) = 10 + (N - 40) / 7 an, um Ihnen eine Schätzung der Umgebungswärme in Grad Celsius zu geben.',
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

export const content: ToolLocaleContent<CricketThermometerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Wissenschaftliche Referenzen',
  bibliography: [
    {
      name: 'The American Naturalist - Die Grille als Thermometer',
      url: 'https://www.jstor.org/stable/2453256',
    },
    {
      name: 'Wikipedia - Dolbearsches Gesetz',
      url: 'https://de.wikipedia.org/wiki/Dolbearsches_Gesetz',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Vollständiger Leitfaden: So nutzen Sie das Dolbearsche Gesetz zur Temperaturberechnung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wussten Sie, dass Sie die exakte Temperatur allein durch das Zuhören in der Natur bestimmen können? 1897 entdeckte der Physiker Amos Dolbear einen präzisen mathematischen Zusammenhang zwischen der Zirp-Rate von Grillen und der Umgebungswärme. Dieses Tool digitalisiert diese Entdeckung, um Ihr Smartphone in ein natürliches Thermometer zu verwandeln.',
    },
    {
      type: 'tip',
      title: 'Warum singen Grillen?',
      html: '<p>Der „Gesang“ der Grille, auch <strong>Stridulation</strong> genannt, ist eigentlich ein Paarungsruf. Die Männchen reiben ihre Flügel (nicht ihre Beine) aneinander, um diesen Laut zu erzeugen. Faszinierenderweise hängt die Geschwindigkeit dieses Reibens direkt von der Wärmeenergie der Luft ab, da Grillen wechselwarme Tiere (Ektothermen) sind.</p>',
    },
    {
      type: 'title',
      text: 'Die Wissenschaft: Ektothermie und Stoffwechsel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Im Gegensatz zu Säugetieren, die eine konstante Körpertemperatur aufrechterhalten, sind Insekten von äußerer Wärme abhängig. Ihre biochemischen Reaktionen folgen der <strong>Arrhenius-Gleichung</strong>: Je mehr Wärme, desto schneller die Reaktion.',
    },
    {
      type: 'paragraph',
      html: 'Das bedeutet, dass die Grillenmuskeln für die Kontraktion und das Reiben der Flügel enzymatische Reaktionen benötigen. Wenn es kalt ist, sind diese Reaktionen langsam und das Zirpen ist träge. Wenn es warm ist, beschleunigt sich der Stoffwechsel und der Gesang wird zu einem hektischen Triller.',
    },
    {
      type: 'title',
      text: 'Die Dolbear-Formel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Obwohl es Variationen für verschiedene Arten gibt, ist die bekannteste Formel die für die Schneegrille (<em>Oecanthus fultoni</em>). Um die Temperatur in Grad Celsius zu erhalten:',
    },
    {
      type: 'code',
      code: 'T(°C) = 10 + (N - 40) / 7\n\nMit N = Anzahl der Zirps pro Minute.',
      ariaLabel: 'Dolbearsche Formel zur Berechnung der Temperatur aus dem Grillenzirpen',
    },
    {
      type: 'paragraph',
      html: 'Unser Tool erledigt das automatisch: Es misst die Zeit zwischen Ihren Taps, berechnet die Zirps pro Minute (BPM) und wendet die Formel sofort an.',
    },
    {
      type: 'title',
      text: 'Faszinierende Fakten',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Thermometer der Liebe:</strong> Einige Theorien besagen, dass Weibchen Männchen bevorzugen, die in der „korrekten“ Frequenz für die aktuelle Temperatur singen, da dies darauf hindeutet, dass das Männchen gesund ist und einen starken Stoffwechsel hat.',
        '<strong>Kältegrenze:</strong> Unterhalb von 10°C (50°F) hören die meisten Grillen auf zu singen, da ihr Stoffwechsel zu langsam ist, um die muskuläre Anstrengung aufrechtzuerhalten.',
        '<strong>Synchronisation:</strong> In warmen Nächten können tausende Grillen ihr Zirpen synchronisieren und so einen beeindruckenden „Wellen“-Klangeffekt erzeugen.',
      ],
    },
    {
      type: 'tip',
      title: 'Hinweis zur Genauigkeit',
      html: '<p>Die Genauigkeit hängt von der Grillenart ab. Dieses Tool ist für die gewöhnliche Feldgrille und die Baumgrille kalibriert. Faktoren wie Luftfeuchtigkeit oder Wind können das Ergebnis um ±0,5°C verändern.</p>',
    },
  ],
  ui: {
    labelWaiting: 'Warten...',
    labelTapping: 'Weiter tippen...',
    tapInstruction: 'Jedes Mal, wenn Sie ein Zirpen hören',
    btnReset: 'Zurücksetzen',
    btnSoundOn: 'Ton: Ein',
    btnSoundOff: 'Ton: Aus',
    unitChirpsMin: 'Zirp/Min',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Wissenschaftliche Referenzen',
  },
};
