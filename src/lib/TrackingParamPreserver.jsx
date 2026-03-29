import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TRACKING_KEYS = ['gclid', 'gbraid', 'wbraid', 'gad_source', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const STORAGE_KEY = '_gads_tracking';

function captureAndStoreParams() {
  const params = new URLSearchParams(window.location.search);
  const found = {};
  TRACKING_KEYS.forEach((key) => {
    const val = params.get(key);
    if (val) found[key] = val;
  });

  if (Object.keys(found).length > 0) {
    // Always overwrite with freshest click data
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...found, _ts: Date.now() }));
  }
}

function getStoredParams() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const data = JSON.parse(raw);
    // Expire after 90 days (Google Ads attribution window)
    const age = Date.now() - (data._ts || 0);
    if (age > 90 * 24 * 60 * 60 * 1000) {
      localStorage.removeItem(STORAGE_KEY);
      return {};
    }
    const { _ts, ...params } = data;
    return params;
  } catch {
    return {};
  }
}

function firePageView(path) {
  if (typeof window.gtag !== 'function') return;

  const stored = getStoredParams();

  const payload = { page_path: path };
  if (stored.gclid) payload.gclid = stored.gclid;
  if (stored.utm_source) payload.campaign_source = stored.utm_source;
  if (stored.utm_medium) payload.campaign_medium = stored.utm_medium;
  if (stored.utm_campaign) payload.campaign_name = stored.utm_campaign;
  if (stored.utm_term) payload.campaign_term = stored.utm_term;
  if (stored.utm_content) payload.campaign_content = stored.utm_content;

  window.gtag('event', 'page_view', payload);
}

// Run immediately on module load to capture params before React strips them
captureAndStoreParams();

export default function TrackingParamPreserver() {
  const location = useLocation();

  useEffect(() => {
    firePageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
}

// Export helper so forms can include gclid in their submissions
export function getTrackingParams() {
  return getStoredParams();
}