import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TRACKING_KEYS = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gad_source'];

// Store tracking params in sessionStorage on first load
function captureTrackingParams() {
  const params = new URLSearchParams(window.location.search);
  const stored = {};
  TRACKING_KEYS.forEach((key) => {
    const val = params.get(key);
    if (val) stored[key] = val;
  });
  if (Object.keys(stored).length > 0) {
    sessionStorage.setItem('_tracking_params', JSON.stringify(stored));
  }
}

// Fire a GA4 pageview with the current path, re-attaching stored tracking params
function firePageView(path) {
  if (typeof window.gtag !== 'function') return;
  
  const stored = JSON.parse(sessionStorage.getItem('_tracking_params') || '{}');
  const payload = { page_path: path };

  // Pass gclid directly so GA4 can attribute the session
  if (stored.gclid) payload.gclid = stored.gclid;
  if (stored.utm_source) payload.campaign_source = stored.utm_source;
  if (stored.utm_medium) payload.campaign_medium = stored.utm_medium;
  if (stored.utm_campaign) payload.campaign_name = stored.utm_campaign;

  window.gtag('event', 'page_view', payload);
}

// Capture on initial load
captureTrackingParams();

export default function TrackingParamPreserver() {
  const location = useLocation();

  useEffect(() => {
    firePageView(location.pathname + location.search);
  }, [location]);

  return null;
}