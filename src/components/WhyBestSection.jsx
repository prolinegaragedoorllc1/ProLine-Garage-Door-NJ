import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'High Quality Parts & Products',
  'Locally Owned & Operated',
  'Warranty on All Work',
  'After Sales Support',
  'Same-Day Response',
  'Upfront, Honest Pricing',
];

export default function WhyBestSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">

          {/* Image */}
          <div className="w-full lg:w-[45%] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/ca9e1d02b_generated_image.png"
                alt="ProLine Garage Door Technician"
                className="w-full h-full object-cover"
                style={{ maxHeight: '480px' }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight mb-6">
              What Makes Us The Best Garage Door Repair Company?
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              What makes us the best garage door company is our commitment to delivering exceptional service, superior craftsmanship, and reliable solutions for all your garage door needs. We prioritize customer satisfaction by offering fast response times, competitive pricing, and expert technicians who are trained to handle everything from minor repairs to complex installations.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              We ensure that every job is done right the first time, using high-quality parts that guarantee long-lasting performance — and we back every job with a service warranty.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Whether it's emergency service, routine maintenance, or installing a brand-new garage door, we stand out for our attention to detail, professionalism, and dedication to providing a seamless customer experience every step of the way.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-slate-700 font-semibold text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="tel:+12015033118"
                className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-lg px-10 py-4 rounded-xl transition-colors shadow-lg"
              >
                Call Now — Free Estimate
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}