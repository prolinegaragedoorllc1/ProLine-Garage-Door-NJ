import React from 'react';
import { Phone, Star } from 'lucide-react';
import useVisitorCity from '@/hooks/useVisitorCity';

export default function ServiceHero({ title, subtitle, backgroundImage, heroFeatures }) {
  const city = useVisitorCity();

  return (
    <section className="relative text-white pt-10 pb-14 md:py-28 overflow-hidden">
      {/* Real <img> for LCP */}
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        fetchpriority="high"
        loading="eager"
        decoding="sync"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(rgba(10,20,60,0.72), rgba(10,20,60,0.65))' }} />
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
          {title}{city ? <> in <span>{city}</span></> : ' Near You'}
        </h1>
        <p className="text-blue-200 text-lg md:text-xl mb-3 max-w-2xl">
          {typeof subtitle === 'string' && city ? subtitle.replace('New Jersey', city) : subtitle}
        </p>

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
          aria-label="Call ProLine Garage Door now"
          className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-xl px-10 py-4 rounded-xl transition-colors">
          <Phone className="w-6 h-6" aria-hidden="true" />
          Give Us A Call
        </a>
      </div>
    </section>
  );
}