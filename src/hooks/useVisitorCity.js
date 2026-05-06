import { useState, useEffect } from 'react';

// NJ bounding box (approximate)
const NJ_BOUNDS = { latMin: 38.9, latMax: 41.4, lngMin: -75.6, lngMax: -73.9 };

// Whitelist of NJ cities/towns (lowercase for matching)
const NJ_CITIES = new Set([
  'paramus', 'fair lawn', 'fairlawn', 'wayne', 'hackensack', 'toms river', 'new brunswick',
  'hoboken', 'jersey city', 'paterson', 'elizabeth', 'edison', 'trenton', 'camden',
  'clifton', 'passaic', 'union city', 'east orange', 'bayonne', 'vineland', 'new ark', 'newark',
  'north bergen', 'west new york', 'perth amboy', 'woodbridge', 'hamilton', 'lakewood',
  'maplewood', 'montclair', 'bloomfield', 'belleville', 'nutley', 'kearny', 'harrison',
  'east rutherford', 'rutherford', 'lyndhurst', 'carlstadt', 'wood ridge', 'wallington',
  'garfield', 'lodi', 'saddle brook', 'elmwood park', 'river edge', 'new milford',
  'bergenfield', 'dumont', 'cresskill', 'demarest', 'closter', 'northvale', 'norwood',
  'harrington park', 'emerson', 'park ridge', 'woodcliff lake', 'hillsdale', 'westwood',
  'river vale', 'township', 'ramsey', 'mahwah', 'allendale', 'waldwick', 'ridgewood',
  'glen rock', 'hawthorne', 'prospect park', 'haledon', 'totowa', 'little falls',
  'woodland park', 'pompton lakes', 'riverdale', 'butler', 'kinnelon', 'lincoln park',
  'rockaway', 'dover', 'landing', 'wharton', 'mine hill', 'victory gardens',
  'randolph', 'roxbury', 'ledgewood', 'succasunna', 'netcong', 'stanhope', 'hopatcong',
  'sparta', 'sussex', 'franklin', 'hamburg', 'hardyston', 'vernon', 'wantage',
  'ogdensburg', 'stockholm', 'sparta township',
  'teaneck', 'englewood', 'fort lee', 'palisades park', 'ridgefield', 'ridgefield park',
  'hasbrouck heights', 'wood ridge', 'maywood', 'rochelle park', 'bogota', 'leonia',
  'edgewater', 'cliffside park', 'fairview', 'little ferry', 'south hackensack',
  'teterboro', 'moonachie', 'east rutherford',
  'morristown', 'parsippany', 'madison', 'chatham', 'florham park', 'hanover',
  'whippany', 'cedar knolls', 'denville', 'boonton', 'mountain lakes', 'lake hiawatha',
  'pine brook', 'montville', 'towaco', 'lincoln park',
  'summit', 'westfield', 'cranford', 'linden', 'rahway', 'clark', 'garwood',
  'kenilworth', 'roselle', 'roselle park', 'springfield', 'union', 'hillside',
  'irvington', 'orange', 'south orange', 'west orange', 'glen ridge', 'verona',
  'cedar grove', 'essex fells', 'caldwell', 'north caldwell', 'west caldwell',
  'livingston', 'millburn', 'short hills', 'east hanover',
  'freehold', 'red bank', 'long branch', 'asbury park', 'neptune', 'ocean',
  'brick', 'point pleasant', 'wall', 'belmar', 'spring lake', 'manasquan',
  'matawan', 'aberdeen', 'keyport', 'keansburg', 'hazlet', 'holmdel',
  'marlboro', 'morganville', 'old bridge', 'sayreville', 'south amboy',
  'south river', 'milltown', 'highland park', 'piscataway', 'metuchen',
  'carteret', 'sewaren', 'avenel', 'iselin', 'fords', 'colonia', 'port reading',
  'dunellen', 'bound brook', 'somerville', 'bridgewater', 'martinsville',
  'basking ridge', 'bernardsville', 'far hills', 'peapack', 'gladstone',
  'flemington', 'clinton', 'pittstown', 'annandale', 'whitehouse',
  'cherry hill', 'voorhees', 'moorestown', 'mount laurel', 'marlton',
  'medford', 'lumberton', 'hainesport', 'mount holly', 'bordentown',
  'burlington', 'beverly', 'riverside', 'delran', 'cinnaminson', 'palmyra',
  'riverton', 'maple shade', 'mount ephraim', 'audubon', 'collingswood',
  'haddon heights', 'barrington', 'gloucester city', 'bellmawr', 'runnemede',
  'stratford', 'turnersville', 'sewell', 'washington township',
  'atlantic city', 'ventnor', 'margate', 'longport', 'somers point',
  'pleasantville', 'egg harbor', 'galloway', 'absecon', 'northfield',
  'linwood', 'ocean city', 'sea isle city', 'avalon', 'stone harbor',
  'wildwood', 'cape may',
  'millville', 'vineland', 'bridgeton', 'upper deerfield', 'fairfield',
  'glassboro', 'pitman', 'deptford', 'woodbury', 'national park',
  'wenonah', 'mantua', 'mullica hill', 'harrison township',
]);

function extractCityFromKeyword(keyword) {
  const decoded = decodeURIComponent(keyword).replace(/\+/g, ' ').trim().toLowerCase();

  // Try to match longest city name first (greedy match)
  let bestMatch = null;
  for (const city of NJ_CITIES) {
    if (decoded.includes(city)) {
      if (!bestMatch || city.length > bestMatch.length) {
        bestMatch = city;
      }
    }
  }

  if (!bestMatch) return null;
  // Title-case
  return bestMatch.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

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
    // 1. Check for ?city= URL param (Google Ads with {keyword})
    const params = new URLSearchParams(window.location.search);
    const cityParam = params.get('city');
    if (cityParam) {
      const extracted = extractCityFromKeyword(cityParam);
      if (extracted) {
        setCity(extracted);
        return;
      }
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

  return city;
}