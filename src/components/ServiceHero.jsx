import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle2, Star } from 'lucide-react';

export default function ServiceHero({ title, subtitle, backgroundImage, heroFeatures }) {
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

  return (
    <section
      className="relative text-white pt-10 pb-14 md:py-28"
      style={{
        backgroundImage: `linear-gradient(rgba(10,20,60,0.72), rgba(10,20,60,0.65)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
          {title} in <span>{city}</span>
        </h1>
        <p className="text-blue-200 text-lg md:text-xl mb-3 max-w-2xl">{subtitle}</p>

        {/* Technician Available */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-green-400 inline-block animate-pulse"></span>
          <span className="text-green-300 font-semibold text-base">Technician Available Now</span>
        </div>

        {/* Feature bullets with stars */}
        {heroFeatures && heroFeatures.length > 0 && (
          <ul className="mb-7 space-y-2">
            {heroFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-base">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        )}

        <a
          href="tel:+12015033118"
          className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-xl px-10 py-4 rounded-xl transition-colors">
          <Phone className="w-6 h-6" />
          Give Us A Call
        </a>
      </div>
    </section>
  );
}