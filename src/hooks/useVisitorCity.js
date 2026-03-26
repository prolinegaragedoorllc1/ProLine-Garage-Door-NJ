import { useState, useEffect } from 'react';

export default function useVisitorCity() {
  const [city, setCity] = useState('Your Area');

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(data => {
        const isUS = data.country_code === 'US';
        const isNJ = data.region === 'New Jersey';
        const hasCity = typeof data.city === 'string' && data.city.trim().length > 0;
        if (isUS && isNJ && hasCity) {
          setCity(data.city.trim());
        }
      })
      .catch(() => {});
  }, []);

  return city;
}