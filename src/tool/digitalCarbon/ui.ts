export interface DigitalCarbonUI extends Record<string, string> {
  headInputs: string;
  headResults: string;
  headTips: string;
  labelUrl: string;
  btnAnalyze: string;
  btnAnalyzing: string;
  placeholderUrl: string;
  errorInvalidUrl: string;
  errorFetchFailed: string;
  
  resultTitle: string;
  resultSubtitle: string;
  co2PerVisit: string;
  energyPerVisit: string;
  co2Annual: string;
  impactTitle: string;
  impactTrees: string;
  impactKm: string;
  treesLabel: string;
  kmLabel: string;
  
  ratingExcellent: string;
  ratingVeryGood: string;
  ratingGood: string;
  ratingAverage: string;
  ratingPoor: string;
  ratingVeryPoor: string;
  ratingCritical: string;
  
  tipImages: string;
  tipCompression: string;
  tipLazyLoading: string;
  tipHosting: string;
  tipThirdParty: string;
  tipFonts: string;
  tipCache: string;
}
