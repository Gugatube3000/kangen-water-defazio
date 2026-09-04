/**
 * /api/water-report?zip=33602
 *
 * Generates an in-site tap-water report from live, free, no-key government data:
 *   1. ZIP  -> city/state/lat/lon        (api.zippopotam.us)
 *   2. lat/lon -> county                 (US Census geocoder)
 *   3. county -> public-water-system stats + violations  (EPA ECHO SDW)
 *
 * EWG holds the only by-ZIP contaminant-LEVEL aggregation and has no public API,
 * so we return EWG / EPA "How's My Waterway" / local-CCR deep links (pre-filled)
 * alongside the live EPA numbers rather than scraping EWG.
 */

async function fetchJson(url: string, ms = 7000): Promise<any | null> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    const r = await fetch(url, {
      signal: ctrl.signal,
      headers: { "User-Agent": "DeFazioWaterWellness/1.0 (educational)" },
    });
    if (!r.ok) return null;
    return await r.json();
  } catch {
    return null;
  } finally {
    clearTimeout(t);
  }
}

function num(v: unknown): number {
  const n = parseInt(String(v ?? ""), 10);
  return Number.isFinite(n) ? n : 0;
}

export default async function handler(req: any, res: any) {
  const zip = String(req.query?.zip ?? "").replace(/[^0-9]/g, "").slice(0, 5);
  if (zip.length !== 5) {
    return res.status(400).json({ error: "Please enter a valid 5-digit ZIP code." });
  }

  // 1) ZIP -> place
  const zp = await fetchJson(`https://api.zippopotam.us/us/${zip}`);
  const place = zp?.places?.[0];
  if (!place) {
    return res.status(404).json({
      error: "We couldn't find that ZIP code. Double-check the digits.",
    });
  }
  const city: string = place["place name"];
  const state: string = place["state abbreviation"];
  const stateName: string = place["state"];
  const lat = place["latitude"];
  const lon = place["longitude"];

  // 2) lat/lon -> county (Census geocoder)
  let county = "";
  const geo = await fetchJson(
    `https://geocoding.geo.census.gov/geocoder/geographies/coordinates?x=${lon}&y=${lat}&benchmark=Public_AR_Current&vintage=Current_Current&format=json&layers=Counties`
  );
  const countyObj = geo?.result?.geographies?.["Counties"]?.[0];
  if (countyObj) county = countyObj.BASENAME || "";

  // 3) county -> EPA ECHO drinking-water summary
  let epa: {
    systems: number;
    violations3yr: number;
    seriousViolators: number;
    enforcement: number;
  } | null = null;

  if (county && state) {
    const echo = await fetchJson(
      `https://echodata.epa.gov/echo/sdw_rest_services.get_systems?output=JSON&p_st=${encodeURIComponent(
        state
      )}&p_co=${encodeURIComponent(county)}`
    );
    const r = echo?.Results;
    if (r && r.Message === "Success") {
      epa = {
        systems: num(r.QueryRows),
        violations3yr: num(r.V3Rows),
        seriousViolators: num(r.SVRows),
        enforcement: num(r.FEARows),
      };
    }
  }

  const links = {
    ewg: `https://www.ewg.org/tapwater/search-results.php?zip5=${zip}`,
    waterway: `https://mywaterway.epa.gov/community/${zip}/overview`,
    ccr: `https://www.google.com/search?q=${encodeURIComponent(
      `${city} ${stateName} water quality report CCR consumer confidence report`
    )}`,
  };

  return res.status(200).json({
    zip,
    city,
    state,
    stateName,
    county,
    epa, // may be null if county/ECHO lookup failed — UI degrades gracefully
    links,
  });
}
