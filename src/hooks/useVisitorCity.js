import { useState, useEffect } from 'react';

// NJ bounding box (approximate)
const NJ_BOUNDS = { latMin: 38.9, latMax: 41.4, lngMin: -75.6, lngMax: -73.9 };

function isInNewJersey(lat, lng) {
  return (
    lat >= NJ_BOUNDS.latMin &&
    lat <= NJ_BOUNDS.latMax &&
    lng >= NJ_BOUNDS.lngMin &&
    lng <= NJ_BOUNDS.lngMax
  );
}

async function reverseGeocode(lat, lng) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
    { headers: { 'Accept-Language': 'en' } }
  );
  const data = await res.json();
  return (
    data?.address?.city ||
    data?.address?.town ||
    data?.address?.village ||
    null
  );
}

export default function useVisitorCity() {
  const [city, setCity] = useState(null);

  useEffect(() => {
    // 1. Check for ?city= URL param (Google Ads)
    const params = new URLSearchParams(window.location.search);
    const cityParam = params.get('city');
    if (cityParam) {
      setCity(decodeURIComponent(cityParam));
      return;
    }

    // 2. Try geolocation with accuracy <= 1km and within NJ
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;
        if (accuracy > 1000) return;
        if (!isInNewJersey(latitude, longitude)) return;
        const cityName = await reverseGeocode(latitude, longitude).catch(() => null);
        if (cityName) setCity(cityName);
      },
      () => {},
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
    );
  }, []);

  return city; // null = fallback to "Near Me"
}