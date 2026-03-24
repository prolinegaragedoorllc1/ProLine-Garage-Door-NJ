import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const GoogleLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5 flex-shrink-0">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

const reviews = [
  {
    name: 'Michael R.',
    location: 'Paramus, NJ',
    rating: 5,
    date: '2 weeks ago',
    text: 'Called ProLine when my torsion spring snapped at 7am and my car was stuck in the garage. They picked up immediately and had a technician at my door within 2 hours. The repair was done fast, pricing was upfront with no surprises. Highly recommend for anyone in Bergen County.',
    avatar: 'M',
    color: 'bg-blue-600',
  },
  {
    name: 'Sarah T.',
    location: 'Wayne, NJ',
    rating: 5,
    date: '1 month ago',
    text: 'Fantastic experience. My garage door came off the track and they were out the same day. The technician explained everything clearly before starting work and had it fixed in under 2 hours. Very professional, clean work, and fair pricing.',
    avatar: 'S',
    color: 'bg-green-600',
  },
  {
    name: 'David K.',
    location: 'Fair Lawn, NJ',
    rating: 5,
    date: '1 month ago',
    text: 'Used ProLine for a full door replacement. From quote to installation everything was smooth. New door looks great, the team was punctual, and they cleaned up everything after. Would absolutely use them again.',
    avatar: 'D',
    color: 'bg-purple-600',
  },
  {
    name: 'Jennifer M.',
    location: 'Clifton, NJ',
    rating: 5,
    date: '6 weeks ago',
    text: 'My opener stopped working randomly and I was in a panic. ProLine came out quickly, diagnosed the issue (motor stripped), and replaced it the same visit. Super knowledgeable technician, honest about what was needed. No upselling, just straight talk.',
    avatar: 'J',
    color: 'bg-orange-600',
  },
  {
    name: 'Robert L.',
    location: 'Morristown, NJ',
    rating: 5,
    date: '2 months ago',
    text: 'Had a full tune-up done after our door was getting loud and shaky. Night and day difference — quiet, smooth, and balanced. Technician took the time to show me what was worn and why it needed attention. 5 stars without hesitation.',
    avatar: 'R',
    color: 'bg-red-600',
  },
  {
    name: 'Amanda C.',
    location: 'Bergen County, NJ',
    rating: 5,
    date: '2 months ago',
    text: 'ProLine replaced my weatherstripping and cables in one visit. They arrived on time, worked efficiently, and left everything spotless. Pricing was very reasonable compared to two other quotes I got. This is the company I\'ll call from now on.',
    avatar: 'A',
    color: 'bg-teal-600',
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function ReviewCard({ review, expanded, onToggle }) {
  const TRUNCATE_LENGTH = 140;
  const isLong = review.text.length > TRUNCATE_LENGTH;
  const displayText = expanded || !isLong
    ? review.text
    : review.text.slice(0, TRUNCATE_LENGTH) + '…';

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 flex flex-col h-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-base flex-shrink-0`}>
            {review.avatar}
          </div>
          <div>
            <p className="font-bold text-slate-900 text-sm leading-tight">{review.name}</p>
            <p className="text-slate-400 text-xs">{review.location}</p>
          </div>
        </div>
        <GoogleLogo />
      </div>

      {/* Stars + date */}
      <div className="flex items-center gap-2 mb-3">
        <StarRating count={review.rating} />
        <span className="text-xs text-slate-400">{review.date}</span>
      </div>

      {/* Review text */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1">
        "{displayText}"
      </p>

      {isLong && (
        <button
          onClick={onToggle}
          className="mt-3 text-blue-600 hover:text-blue-700 text-xs font-semibold self-start transition-colors"
        >
          {expanded ? 'Show less ↑' : 'Read more ↓'}
        </button>
      )}
    </div>
  );
}

export default function GoogleReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const autoRef = useRef(null);

  // How many cards to show based on window
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerPage(1);
      else if (window.innerWidth < 1024) setPerPage(2);
      else setPerPage(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const total = reviews.length;
  const maxIndex = total - perPage;

  const goTo = (idx, dir) => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(Math.max(0, Math.min(idx, maxIndex)));
      setIsAnimating(false);
    }, 250);
  };

  const prev = () => goTo(current - 1, 'left');
  const next = () => goTo(current + 1, 'right');

  // Auto-advance
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 4500);
    return () => clearInterval(autoRef.current);
  }, [maxIndex]);

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 4500);
  };

  const handlePrev = () => { prev(); resetAuto(); };
  const handleNext = () => { next(); resetAuto(); };

  const visible = reviews.slice(current, current + perPage);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <GoogleLogo />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Google Reviews</h2>
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-slate-700 font-bold text-lg">5.0</span>
            <span className="text-slate-400 text-sm">· Rated on Google</span>
          </div>
          <p className="text-slate-500 text-base">What our customers across North New Jersey say about us</p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Nav buttons */}
          <button
            onClick={handlePrev}
            disabled={current === 0}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-md hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button
            onClick={handleNext}
            disabled={current >= maxIndex}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-md hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>

          {/* Cards */}
          <div
            className="grid gap-5 transition-opacity duration-250"
            style={{
              gridTemplateColumns: `repeat(${perPage}, 1fr)`,
              opacity: isAnimating ? 0 : 1,
            }}
          >
            {visible.map((review, i) => (
              <ReviewCard
                key={review.name}
                review={review}
                expanded={!!expanded[review.name]}
                onToggle={() => setExpanded((prev) => ({ ...prev, [review.name]: !prev[review.name] }))}
              />
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i, i > current ? 'right' : 'left'); resetAuto(); }}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 h-2.5 bg-blue-600' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/ProLine+Garage+Door/data=!4m2!3m1!1s0x0:0x7b39662917debd08?sa=X&ved=1t:2428&hl=en&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-blue-300 text-slate-700 font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm text-sm"
          >
            <GoogleLogo />
            View All Reviews on Google
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
}