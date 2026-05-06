import { useState, useEffect } from 'react';

// NJ bounding box (approximate)
const NJ_BOUNDS = { latMin: 38.9, latMax: 41.4, lngMin: -75.6, lngMax: -73.9 };

// Complete list of all NJ municipalities (lowercase)
const NJ_CITIES = new Set([
  // Bergen County
  'allendale', 'alpine', 'bergenfield', 'bogota', 'carlstadt', 'cliffside park',
  'closter', 'cresskill', 'demarest', 'dumont', 'east rutherford', 'edgewater',
  'elmwood park', 'emerson', 'englewood', 'englewood cliffs', 'fair lawn', 'fairview',
  'fort lee', 'franklin lakes', 'garfield', 'glen rock', 'hackensack', 'harrington park',
  'hasbrouck heights', 'haworth', 'hillsdale', 'ho ho kus', 'leonia', 'little ferry',
  'lodi', 'lyndhurst', 'mahwah', 'maywood', 'midland park', 'montvale', 'moonachie',
  'new milford', 'north arlington', 'northvale', 'norwood', 'oakland', 'old tappan',
  'oradell', 'palisades park', 'paramus', 'park ridge', 'ramsey', 'ridgefield',
  'ridgefield park', 'ridgewood', 'river edge', 'river vale', 'rochelle park',
  'rockleigh', 'rutherford', 'saddle brook', 'saddle river', 'south hackensack',
  'teaneck', 'tenafly', 'teterboro', 'upper saddle river', 'waldwick', 'wallington',
  'westwood', 'wood ridge', 'woodcliff lake', 'wyckoff',

  // Burlington County
  'bass river', 'beverly', 'bordentown', 'burlington', 'chesterfield', 'cinnaminson',
  'delanco', 'delran', 'eastampton', 'edgewater park', 'evesham', 'fieldsboro',
  'florence', 'hainesport', 'lumberton', 'mansfield', 'maple shade', 'medford',
  'medford lakes', 'moorestown', 'mount holly', 'mount laurel', 'new hanover',
  'north hanover', 'palmyra', 'pemberton', 'riverside', 'riverton', 'shamong',
  'southampton', 'springfield', 'tabernacle', 'washington township', 'westampton',
  'willingboro', 'woodland', 'wrightstown',

  // Camden County
  'audubon', 'audubon park', 'barrington', 'bellmawr', 'berlin', 'brooklawn',
  'camden', 'cherry hill', 'chesilhurst', 'clementon', 'collingswood', 'gloucester city',
  'gloucester township', 'haddon heights', 'haddonfield', 'haddon township',
  'hi nella', 'laurel springs', 'lawnside', 'lindenwold', 'magnolia', 'merchantville',
  'mount ephraim', 'oaklyn', 'pennsauken', 'pine hill', 'pine valley', 'runnemede',
  'somerdale', 'stratford', 'tavistock', 'voorhees', 'waterford', 'winslow',
  'woodlynne',

  // Cape May County
  'avalon', 'cape may', 'cape may court house', 'cape may point', 'dennis',
  'lower', 'middle', 'north wildwood', 'ocean city', 'sea isle city', 'stone harbor',
  'upper', 'west cape may', 'west wildwood', 'wildwood', 'wildwood crest',
  'woodbine',

  // Cumberland County
  'bridgeton', 'commercial', 'deerfield', 'downe', 'fairfield', 'greenwich',
  'hopewell', 'lawrence', 'millville', 'shiloh', 'stow creek', 'upper deerfield',
  'vineland',

  // Essex County
  'belleville', 'bloomfield', 'caldwell', 'cedar grove', 'east orange',
  'essex fells', 'fairfield', 'glen ridge', 'irvington', 'livingston', 'maplewood',
  'millburn', 'montclair', 'newark', 'north caldwell', 'nutley', 'orange',
  'roseland', 'short hills', 'south orange', 'verona', 'west caldwell',
  'west orange',

  // Gloucester County
  'clayton', 'deptford', 'east greenwich', 'elk', 'franklin', 'glassboro',
  'greenwich', 'harrison', 'logan', 'mantua', 'monroe', 'national park',
  'newfield', 'paulsboro', 'pitman', 'south harrison', 'swedesboro',
  'washington', 'wenonah', 'west deptford', 'westville', 'woodbury',
  'woodbury heights', 'woolwich',

  // Hudson County
  'bayonne', 'east newark', 'guttenberg', 'harrison', 'hoboken', 'jersey city',
  'kearny', 'north bergen', 'secaucus', 'union city', 'weehawken',
  'west new york',

  // Hunterdon County
  'alexandria', 'bethlehem', 'bloomsbury', 'califon', 'clinton', 'clinton township',
  'delaware', 'east amwell', 'flemington', 'franklin', 'frenchtown', 'glen gardner',
  'hampton', 'high bridge', 'holland', 'kingwood', 'lambertville', 'lebanon',
  'lebanon township', 'milford', 'musconetcong', 'raritan township', 'readington',
  'stockton', 'tewksbury', 'union', 'west amwell',

  // Mercer County
  'east windsor', 'ewing', 'hamilton', 'hightstown', 'hopewell', 'hopewell township',
  'lambertville', 'lawrence', 'pennington', 'princeton', 'princeton junction',
  'robbinsville', 'trenton', 'west windsor', 'white horse',

  // Middlesex County
  'carteret', 'dunellen', 'east brunswick', 'edison', 'helmetta', 'highland park',
  'jamesburg', 'metuchen', 'middlesex', 'milltown', 'monroe', 'new brunswick',
  'north brunswick', 'old bridge', 'perth amboy', 'piscataway', 'plainsboro',
  'sayreville', 'south amboy', 'south brunswick', 'south river', 'spotswood',
  'woodbridge',

  // Monmouth County
  'aberdeen', 'allenhurst', 'allentown', 'asbury park', 'atlantic highlands',
  'avon by the sea', 'belmar', 'bradley beach', 'brielle', 'colts neck',
  'deal', 'eatontown', 'englishtown', 'fair haven', 'farmingdale', 'freehold',
  'freehold township', 'hazlet', 'highlands', 'holmdel', 'howell', 'interlaken',
  'keansburg', 'keyport', 'lake como', 'little silver', 'loch arbour',
  'long branch', 'manasquan', 'marlboro', 'matawan', 'middletown', 'millstone',
  'monmouth beach', 'neptune', 'neptune city', 'ocean', 'oceanport', 'red bank',
  'roosevelt', 'rumson', 'sea bright', 'sea girt', 'shrewsbury', 'spring lake',
  'spring lake heights', 'tinton falls', 'union beach', 'upper freehold',
  'wall', 'west long branch',

  // Morris County
  'boonton', 'boonton township', 'butler', 'chatham', 'chatham township',
  'chester', 'chester township', 'denville', 'dover', 'east hanover',
  'florham park', 'hanover', 'harding', 'jefferson', 'kinnelon', 'lake hiawatha',
  'landing', 'lincoln park', 'long hill', 'madison', 'mendham', 'mendham township',
  'mine hill', 'montville', 'morris', 'morris plains', 'morristown',
  'mountain lakes', 'mount arlington', 'mount olive', 'netcong', 'parsippany',
  'peapack gladstone', 'pequannock', 'randolph', 'riverdale', 'rockaway',
  'rockaway township', 'roxbury', 'stanhope', 'victory gardens', 'washington',
  'wharton', 'whippany',

  // Ocean County
  'barnegat', 'barnegat light', 'bay head', 'beach haven', 'beachwood',
  'berkeley', 'brick', 'island heights', 'jackson', 'lacey', 'lakehurst',
  'lakewood', 'lavallette', 'little egg harbor', 'long beach', 'manchester',
  'mantoloking', 'ocean', 'ocean gate', 'pine beach', 'plumsted', 'point pleasant',
  'point pleasant beach', 'seaside heights', 'seaside park', 'ship bottom',
  'south toms river', 'stafford', 'surf city', 'toms river', 'tuckerton',

  // Passaic County
  'bloomingdale', 'clifton', 'haledon', 'hawthorne', 'little falls',
  'north haledon', 'passaic', 'paterson', 'pompton lakes', 'prospect park',
  'ringwood', 'totowa', 'wanaque', 'wayne', 'west milford', 'woodland park',

  // Salem County
  'alloway', 'carneys point', 'elmer', 'elsinboro', 'lower alloways creek',
  'mannington', 'oldmans', 'penns grove', 'pennsville', 'pilesgrove',
  'pittsgrove', 'quinton', 'salem', 'upper pittsgrove', 'woodstown',

  // Somerset County
  'basking ridge', 'bedminster', 'bernards', 'bernardsville', 'bound brook',
  'branchburg', 'bridgewater', 'far hills', 'franklin', 'gladstone',
  'green brook', 'hillsborough', 'manville', 'millstone', 'montgomery',
  'north plainfield', 'peapack', 'raritan', 'rocky hill', 'somerset',
  'somerville', 'south bound brook', 'warren', 'watchung',

  // Sussex County
  'andover', 'andover township', 'branchville', 'byram', 'frankford',
  'franklin', 'fredon', 'green', 'hamburg', 'hardyston', 'hopatcong',
  'independence', 'jefferson', 'Lafayette', 'montague', 'newton',
  'ogdensburg', 'sandyston', 'sparta', 'stanhope', 'stillwater', 'sussex',
  'unity', 'vernon', 'wantage',

  // Union County
  'berkeley heights', 'clark', 'cranford', 'elizabeth', 'fanwood', 'garwood',
  'hillside', 'kenilworth', 'linden', 'mountainside', 'new providence',
  'plainfield', 'rahway', 'roselle', 'roselle park', 'scotch plains',
  'springfield', 'summit', 'union', 'westfield', 'winfield',

  // Warren County
  'allamuchy', 'alpha', 'belvidere', 'blairstown', 'frelinghuysen',
  'greenwich', 'hackettstown', 'hardwick', 'harmony', 'hope', 'independence',
  'knowlton', 'liberty', 'lopatcong', 'mansfield', 'mount olive', 'oxford',
  'pahaquarry', 'phillipsburg', 'pohatcong', 'washington', 'white',
  'white township',
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