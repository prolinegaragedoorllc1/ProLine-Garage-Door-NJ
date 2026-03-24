import React, { useState } from 'react';
import { Phone } from 'lucide-react';

const projects = [
  {
    title: 'Spring Replacement',
    location: 'Paramus, NJ',
    description: 'Torsion spring snapped — replaced both springs same day.',
    image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/7864d5cca_generated_image.png',
  },
  {
    title: 'Opener Installation',
    location: 'Fair Lawn, NJ',
    description: 'Belt-drive opener installed — near-silent operation.',
    image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/d454f09ac_generated_image.png',
  },
  {
    title: 'Off-Track Repair',
    location: 'Wayne, NJ',
    description: 'Rollers replaced and door re-aligned within 2 hours.',
    image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/8f122331d_generated_image.png',
  },
  {
    title: 'New Door Installation',
    location: 'Bergen County, NJ',
    description: 'Modern steel raised-panel door — curb appeal transformed.',
    image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/42ad8fe28_generated_image.png',
  },
  {
    title: 'Full Door Tune-Up',
    location: 'Passaic County, NJ',
    description: 'Lubrication, balance check, and hardware tightening.',
    image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/55372ee69_generated_image.png',
  },
  {
    title: 'Weatherseal Replacement',
    location: 'Morris County, NJ',
    description: 'Bottom seal replaced — door now fully weatherproofed.',
    image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/0d4cbef2c_generated_image.png',
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
                className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 px-5 text-center"
                style={{
                  opacity: hovered === i ? 1 : 0,
                  background: 'rgba(10,20,60,0.78)',
                }}
              >
                <p className="text-white font-bold text-xl mb-1">{project.title}</p>
                <p className="text-blue-200 text-sm mb-2">{project.location}</p>
                <p className="text-slate-300 text-sm mb-5 leading-snug">{project.description}</p>
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