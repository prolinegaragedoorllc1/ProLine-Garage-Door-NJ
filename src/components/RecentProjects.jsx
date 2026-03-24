import React, { useState } from 'react';
import { Phone } from 'lucide-react';

const projects = [
  {
    title: 'Spring Replacement',
    location: 'Paramus, NJ',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/6946e0e87_spring-repair.png',
  },
  {
    title: 'Opener Installation',
    location: 'Fair Lawn, NJ',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/90397e288_opener-repair.png',
  },
  {
    title: 'Full Door Tune-Up',
    location: 'Wayne, NJ',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/437d2a987_door-repair.png',
  },
  {
    title: 'Cable Replacement',
    location: 'Bergen County, NJ',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/6946e0e87_spring-repair.png',
  },
  {
    title: 'Off-Track Repair',
    location: 'Passaic County, NJ',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/437d2a987_door-repair.png',
  },
  {
    title: 'New Opener + Remote',
    location: 'Morris County, NJ',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/90397e288_opener-repair.png',
  },
];

export default function RecentProjects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">Recent Projects</h2>
          <p className="text-slate-600 text-xl">Real work, real results — across North New Jersey</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden cursor-pointer shadow-md"
              style={{ height: '260px' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ transform: hovered === i ? 'scale(1.07)' : 'scale(1)' }}
              />

              {/* Always-visible gradient bottom label */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-lg leading-tight">{project.title}</p>
                <p className="text-slate-300 text-sm">{project.location}</p>
              </div>

              {/* Hover overlay with CTA */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300"
                style={{
                  opacity: hovered === i ? 1 : 0,
                  background: 'rgba(10,20,60,0.72)',
                }}
              >
                <p className="text-white font-bold text-xl mb-1">{project.title}</p>
                <p className="text-blue-200 text-sm mb-5">{project.location}</p>
                <a
                  href="tel:+12015033118"
                  className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-6 py-3 rounded-xl transition-colors text-base"
                >
                  <Phone className="w-4 h-4" />
                  Get a Free Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 text-lg mb-4">Need the same service? We're ready to help today.</p>
          <a
            href="tel:+12015033118"
            className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-xl px-10 py-4 rounded-xl transition-colors"
          >
            <Phone className="w-6 h-6" />
            Call Now — Same Day Service
          </a>
        </div>
      </div>
    </section>
  );
}