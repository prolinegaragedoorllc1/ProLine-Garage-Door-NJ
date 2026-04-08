import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'High Quality Parts & Products',
  'Locally Owned & Operated',
  'Warranty',
  'After Sales Support',
  'Same-Day Response',
  'Upfront, Honest Pricing',
];

export default function WhyBestSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12 max-w-6xl mx-auto">

          {/* Image - aligned to top */}
          <div className="w-full lg:w-[44%] flex-shrink-0 lg:self-start">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/851f60c8d_generated_image.png"
                alt="ProLine Garage Door Technician at work"
                className="w-full object-cover object-top"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight mb-6">
              What Makes Us The Best Garage Door Repair Company?
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              What makes us the best garage door company is our commitment to delivering exceptional service, superior craftsmanship, and reliable solutions for all your garage door needs. We prioritize customer satisfaction by offering fast response times, competitive pricing, and expert technicians trained to handle everything from minor repairs to complex installations.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              We make sure every job is done right the first time, using quality parts built for long-lasting performance — and we stand behind our work.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Whether it's emergency service, routine maintenance, or a full door installation, we stand out for our attention to detail, honesty, and commitment to a smooth experience every step of the way.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-slate-700 font-semibold text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="tel:+12015033118"
              aria-label="Call ProLine Garage Door for a free estimate"
              className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold text-lg px-10 py-4 rounded-xl transition-colors shadow-lg"
            >
              Call Now — Free Estimate
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}