import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { WildlifeCameraTrapEffortPlannerLocaleContent } from '../entry';

const slug = 'wildkamera-einsatzplan-wildtiermonitoring';
const title = 'Planer für den Einsatz von Wildkameras';
const description = 'Plane Kameraaufwand, schätze Kameratage und Bildprüfung und skizziere ein Einsatzraster ohne Aussagen zur Populationsgröße.';
const faqData = [
  { question: 'Was sind Kameratage?', answer: 'Kameratage sind die Anzahl der Kameras multipliziert mit der Zahl ihrer aktiven Tage. Sie beschreiben den Stichprobenaufwand, nicht die Zahl der Tiere in einem Gebiet.' },
  { question: 'Berechnet der Planer die Größe einer Wildtierpopulation?', answer: 'Nein. Er schätzt den Arbeitsaufwand und eine nominale Planungsfläche. Populationsgröße, Abundanz und Belegung erfordern ein validiertes Studiendesign und ein Modell für unvollständige Entdeckung.' },
  { question: 'Was bewirkt der Abstand?', answer: 'Der Abstand erzeugt eine nominale quadratische Planungszelle pro Kamera und vergleicht sie mit dem gleichmäßigen Rasterabstand aus Fläche und Kamerazahl. Er ist kein Erfassungsradius.' },
  { question: 'Wie nutze ich den Prüfplan?', answer: 'Nutze die Wochenpunkte als Arbeitsrhythmus. Vergleiche die erwartete Ereignismenge mit Speicher, Batterien und Prüfkapazität und protokolliere jeden echten Besuch.' },
];
const howToData = [
  { name: 'Untersuchungsfläche beschreiben', text: 'Gib die Fläche ein, die der Einsatz untersuchen soll. Der Schalter Metric oder Imperial bewahrt den physikalischen Wert beim Wechsel.' },
  { name: 'Einsatzraster planen', text: 'Gib Kamerazahl, Einsatzdauer und Zielabstand ein. Die Skizze zeigt Stationen als Planungsraster, nicht als Koordinaten oder garantierte Erfassungszonen.' },
  { name: 'Bildaufwand schätzen', text: 'Gib erwartete Auslösungen pro Kamera und Tag ein. Der Planer multipliziert sie mit den Kameratagen und verteilt sie auf Wochenpunkte.' },
  { name: 'Feldprotokoll vorbereiten', text: 'Vergib eindeutige Kamera- und Sitzungscodes, notiere Aufstellung und erfasse jede Kontrolle, auch wenn kein Tier erkannt wurde.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'de' };

export const content: WildlifeCameraTrapEffortPlannerLocaleContent = {
  slug, title, description,
  ui: {
    areaPerCameraLabel: 'Fläche pro Kamera',
    labelSurveyArea: 'Untersuchungsfläche', labelCameraCount: 'Kamerastationen', labelDeploymentDays: 'Einsatztage', labelSpacing: 'Zielabstand der Stationen', labelTriggerRate: 'Erwartete Auslösungen pro Kamera und Tag',
    unitHectares: 'ha', unitAcres: 'ac', unitMeters: 'm', unitFeet: 'ft', unitCameras: 'Kameras', unitDays: 'Tage', unitEventsPerDay: 'Ereignisse pro Tag',
    helpSurveyArea: 'Die Fläche, die der Einsatz untersuchen soll.', helpCameraCount: 'Aktive Kameras dieser Kampagne.', helpDeploymentDays: 'Tage zwischen Aufbau und Abbau.', helpSpacing: 'Eine Planungshilfe, kein Erfassungsradius.', helpTriggerRate: 'Nutze einen vorsichtigen Wert aus einem vergleichbaren Einsatz oder Test.',
    unitSystemLabel: 'Messsystem', metricLabel: 'Metrisch', imperialLabel: 'Imperial', presetsTitle: 'Startpunkte fuer das Feld', presetBackyard: 'Waldrand am Haus', presetWoodland: 'Mischwald', presetReserve: 'Grosses Schutzgebiet',
    mapLabel: 'Relative Skizze des Kameraeinsatzes', mapCaption: 'Nummerierte Stationen in einem relativen Planungsraster. Die Zellen helfen beim Abstand, sind aber keine Habitatkarte.', stationLabel: 'Station', cameraDaysLabel: 'Kameratage', expectedEventsLabel: 'Erwartete Ereignisse', spacingLabel: 'Abstand im gleichmäßigen Raster', reviewLoadLabel: 'Ereignisse pro Kontrolle', reviewScheduleTitle: 'Kontrollrhythmus', reviewScheduleText: 'Wochenpunkte machen den Bildaufwand sichtbar, bevor die Kameras ausgebracht werden. Ersetze sie durch die Besuche deines Feldprotokolls.', reviewDayLabel: 'Tag', reviewEventsLabel: 'Ereignisse erwartet',
    statusBalanced: 'Abstand wirkt ausgewogen', statusSparse: 'Stationen wirken weit verteilt', statusDense: 'Stationen wirken eng verteilt', statusReviewHeavy: 'Prüfaufwand braucht Aufmerksamkeit', statusNeedsInput: 'Vollständigen Einsatzplan eingeben', statusNote: 'Dies ist ein Aufwandsplan. Er sagt nicht, wie viele Tiere im Gebiet leben, und garantiert keine Artentdeckung.',
    assumptionTitle: 'Annahmen des Modells', assumptionText: 'Die nominale Fläche behandelt jede Station als quadratische Zelle aus dem Zielabstand. Die Ereignisse setzen voraus, dass die Auslöserate bei allen Kameras und an allen Tagen gleich bleibt.', limitationTitle: 'Grenzen im Feld', limitationText: 'Wähle Standorte nach Art und Fragestellung, nicht nur nach Geometrie. Notiere Kamera-IDs, Daten, Ausrichtung, Höhe, Habitat und Leerprüfungen, damit unvollständige Entdeckung später berücksichtigt werden.',
  },
  seo: [
    { type: 'title', text: 'Aufwand fuer Fotofallen planen', level: 2 },
    { type: 'paragraph', html: 'Ein Fotofallenprojekt hat vor der Artenliste zwei Planungsfragen. Wie viel Stichprobenaufwand stellt der Einsatz dar? Und kann das erwartete Bildaufkommen geprueft, gespeichert und dokumentiert werden? Dieser Planer macht daraus Kameratage, erwartete Ereignisse, eine relative Stationsskizze und Kontrollpunkte.' },
    { type: 'title', text: 'Kameratage als Aufwand nutzen', level: 3 },
    { type: 'paragraph', html: 'Kameratage berechnen sich als <code>Kamerastationen × Einsatztage</code>. Zwölf Kameras für 28 Tage ergeben 336 Kameratage. Das hilft beim Vergleich zweier Kampagnen, ist aber keine Populationsschätzung und korrigiert weder Ausfälle noch Habitatunterschiede oder Tierverhalten.' },
    { type: 'list', items: ['<strong>Kamerastationen:</strong> die aktiven Geraete der Kampagne.', '<strong>Einsatztage:</strong> die geplanten Tage zwischen Aufbau und Abbau.', '<strong>Ausloeserate:</strong> Ereignisse pro Kamera und Tag, nicht jede einzelne Aufnahme einer Serie.', '<strong>Kontrollpunkte:</strong> Aufwand fuer Speicher, Batterien, Besuche und Bildpruefung planen.'] },
    { type: 'title', text: 'Die Feldskizze als Planungshilfe lesen', level: 3 },
    { type: 'paragraph', html: 'Die Skizze nutzt Flaeche, Kamerazahl und Zielabstand fuer eine relative Anordnung. Die nominale Flaeche ist Stationszahl mal Zielabstand im Quadrat. Das ist eine transparente Geometriehilfe, aber keine Sensorflaeche. Gelaende, Vegetation, Wege, Hoehe, Ausrichtung und Verhalten veraendern die Entdeckungswahrscheinlichkeit.' },
    { type: 'title', text: 'Vor dem Einsatz bessere Aufzeichnungen vorbereiten', level: 3 },
    { type: 'paragraph', html: 'Definiere vor dem Aufbau Zielarten und Fragestellung. Vergib stabile Kennungen fuer Kamera und Einsatz. Erfasse bei Aufbau und Kontrolle Datum, Ort, Hoehe, Ausrichtung, Habitat, Einstellungen und Funktionsstatus. Auch eine Kontrolle ohne Fund ist ein echter Eintrag.' },
    { type: 'tip', title: 'Aufwand nicht mit Abundanz verwechseln', html: 'Fotofallen haben eine unvollstaendige Entdeckung. Nutze den Planer fuer Feldaufwand und Bildbearbeitung und ein validiertes oekologisches Design fuer Belegung, Abundanz, Dichte oder Populationsveraenderung.' },
  ],
  faq: faqData, howTo: howToData, bibliography, schemas: [faqSchema, howToSchema, appSchema],
};
