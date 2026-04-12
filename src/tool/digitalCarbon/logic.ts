export interface DCFRating {
  label: string;
  color: string;
  pct: number;
  descKey: string;
}

export interface DCFResult {
  url: string;
  bytes: number;
  co2g: number;
  energyWh: number;
  co2Year: number;
  trees: string;
  km: string;
  pageSize: string;
  rating: DCFRating;
  tipKeys: string[];
}

const NET_KWH_PER_GB = 0.81;
const DEVICE_KWH_PER_GB = 0.52;
const CARBON_G_PER_KWH = 442;
const RETURN_RATIO = 0.75;

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function calcCO2(bytes: number): { co2g: number; energyWh: number } {
  const gb = (bytes / 1e9) * RETURN_RATIO;
  const energyKwh = (NET_KWH_PER_GB + DEVICE_KWH_PER_GB) * gb;
  return { co2g: energyKwh * CARBON_G_PER_KWH, energyWh: energyKwh * 1000 };
}

function getRating(co2g: number): DCFRating {
  if (co2g < 0.1) return { label: 'A+', color: '#10b981', pct: 5, descKey: 'ratingExcellent' };
  if (co2g < 0.2) return { label: 'A', color: '#22c55e', pct: 15, descKey: 'ratingVeryGood' };
  if (co2g < 0.5) return { label: 'B', color: '#84cc16', pct: 35, descKey: 'ratingGood' };
  if (co2g < 1.0) return { label: 'C', color: '#f59e0b', pct: 58, descKey: 'ratingAverage' };
  if (co2g < 2.0) return { label: 'D', color: '#f97316', pct: 72, descKey: 'ratingPoor' };
  if (co2g < 4.0) return { label: 'E', color: '#ef4444', pct: 88, descKey: 'ratingVeryPoor' };
  return { label: 'F', color: '#dc2626', pct: 98, descKey: 'ratingCritical' };
}

function getTipKeys(bytes: number): string[] {
  const keys: string[] = [];
  const kb = bytes / 1024;
  if (kb > 500) keys.push('tipImages');
  if (kb > 200) keys.push('tipCompression');
  if (kb > 300) keys.push('tipLazyLoading');
  keys.push('tipHosting');
  keys.push('tipThirdParty');
  if (kb > 1000) keys.push('tipFonts');
  keys.push('tipCache');
  return keys;
}

function extractHtml(text: string): string {
  try {
    const json = JSON.parse(text) as Record<string, unknown>;
    return (json.contents ?? json.body ?? text) as string;
  } catch {
    return text;
  }
}

export async function estimatePageSize(url: string): Promise<number> {
  const encoded = encodeURIComponent(url);
  const proxies = [
    `https://api.allorigins.win/get?url=${encoded}`,
    `https://corsproxy.io/?${encoded}`,
    `https://api.codetabs.com/v1/proxy/?quest=${encoded}`,
  ];
  
  for (const proxy of proxies) {
    try {
      const resp = await fetch(proxy, { signal: AbortSignal.timeout(10000) });
      if (!resp.ok) continue;
      const html = extractHtml(await resp.text());
      if (!html || html.length < 100) continue;
      return Math.round(new TextEncoder().encode(html).length * 5.5);
    } catch {
      continue;
    }
  }
  throw new Error('fetch_failed');
}

export function buildResult(url: string, bytes: number): DCFResult {
  const { co2g, energyWh } = calcCO2(bytes);
  const co2Year = (co2g * 100000) / 1000;
  return {
    url,
    bytes,
    co2g,
    energyWh,
    co2Year,
    trees: (co2Year / 21).toFixed(1),
    km: (co2Year / 0.21).toFixed(0),
    pageSize: formatBytes(bytes),
    rating: getRating(co2g),
    tipKeys: getTipKeys(bytes),
  };
}
