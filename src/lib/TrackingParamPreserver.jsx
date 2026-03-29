import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TRACKING_KEYS = ['gclid', 'gbraid', 'wbraid', 'gad_source', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const STORAGE_KEY = '_gads_tracking';

// ─── Storage helpers ──────────────────────────────────────────────────────────

function storeParams(params) {
  if (Object.keys(params).length === 0) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...params, _ts: Date.now() }));
}

export function getTrackingParams() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const data = JSON.parse(raw);
    // 90-day expiry (Google Ads attribution window)
    if (Date.now() - (data._ts || 0) > 90 * 24 * 60 * 60 * 1000) {
      localStorage.removeItem(STORAGE_KEY);
      return {};
    }
    const { _ts, ...rest } = data;
    return rest;
  } catch {
    return {};
  }
}

// ─── Capture params from URL ──────────────────────────────────────────────────

function parseTrackingFromURL(search) {
  const params = new URLSearchParams(search);
  const found = {};
  TRACKING_KEYS.forEach((key) => {
    const val = params.get(key);
    if (val) found[key] = val;
  });
  return found;
}

// ─── Inject stored params back into the URL (so GA4 auto-detects gclid) ──────

function injectParamsIntoURL(path, search) {
  const stored = getTrackingParams();
  if (Object.keys(stored).length === 0) return;

  const params = new URLSearchParams(search);
  let changed = false;

  TRACKING_KEYS.forEach((key) => {
    if (stored[key] && !params.get(key)) {
      params.set(key, stored[key]);
      changed = true;
    }
  });

  if (changed) {
    const newUrl = path + '?' + params.toString();
    window.history.replaceState(window.history.state, '', newUrl);
  }
}

// ─── Fire page_view with correct GA4 field names ─────────────────────────────

function firePageView(path, search) {
  if (typeof window.gtag !== 'function') return;

  const stored = getTrackingParams();
  const currentParams = parseTrackingFromURL(search);
  const tracking = { ...stored, ...currentParams };

  const payload = {
    page_path: path + (search || ''),
    page_location: window.location.href,
  };

  // GA4 reads these exact field names for traffic source attribution
  if (tracking.gclid)        payload.gclid          = tracking.gclid;
  if (tracking.gbraid)       payload.gbraid         = tracking.gbraid;
  if (tracking.wbraid)       payload.wbraid         = tracking.wbraid;
  if (tracking.utm_source)   payload.utm_source     = tracking.utm_source;
  if (tracking.utm_medium)   payload.utm_medium     = tracking.utm_medium;
  if (tracking.utm_campaign) payload.utm_campaign   = tracking.utm_campaign;
  if (tracking.utm_term)     payload.utm_term       = tracking.utm_term;
  if (tracking.utm_content)  payload.utm_content    = tracking.utm_content;

  window.gtag('event', 'page_view', payload);
}

// ─── On module load: capture params from URL immediately ─────────────────────
// This runs BEFORE React mounts, ensuring the landing-page gclid is never lost.
;(function captureOnLoad() {
  const fromURL = parseTrackingFromURL(window.location.search);
  if (Object.keys(fromURL).length > 0) {
    storeParams(fromURL);
  }
})();

// ─── React component ──────────────────────────────────────────────────────────

export default function TrackingParamPreserver() {
  const location = useLocation();

  useEffect(() => {
    // 1. Inject stored params back into the URL so GA4 auto-detects gclid
    injectParamsIntoURL(location.pathname, location.search);

    // 2. Also fire a manual page_view with attribution fields for belt-and-suspenders
    firePageView(location.pathname, location.search);
  }, [location.pathname, location.search]);

  return null;
}