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
  // Return city / town / village
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
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;

        // Only use if accuracy is within 1 km AND user is in NJ
        if (accuracy > 1000) return;
        if (!isInNewJersey(latitude, longitude)) return;

        const cityName = await reverseGeocode(latitude, longitude).catch(() => null);
        if (cityName) setCity(cityName);
      },
      () => {}, // permission denied or error — silent
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
    );
  }, []);

  return city; // null = don't show city
}