import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, X, Menu, Star } from 'lucide-react';

const serviceLinks = [
  { label: 'Spring Repair', path: '/services/spring-repair' },
  { label: 'Cable Repair', path: '/services/cable-repair' },
  { label: 'Roller Replacement', path: '/services/roller-replacement' },
  { label: 'Panel Replacement', path: '/services/panel-replacement' },
  { label: 'Garage Door Openers', path: '/services/garage-door-openers' },
];

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Blog', path: '/blog' },
];

const GoogleLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5 flex-shrink-0">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Main Header: Logo + Phone */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 gap-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/0f4671081_WebsiteLOGO.png"
                alt="ProLine Garage Door LLC"
                className="h-16 md:h-20 w-auto"
              />
            </Link>

            {/* Google badge - desktop only */}
            <a
              href="https://www.google.com/maps/place/ProLine+Garage+Door/data=!4m2!3m1!1s0x0:0x7b39662917debd08?sa=X&ved=1t:2428&hl=en&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 border border-slate-200 rounded-xl px-4 py-2 hover:bg-slate-50 transition-colors"
            >
              <GoogleLogo />
              <div className="flex flex-col leading-none">
                <span className="text-xs text-slate-500 mb-0.5">Rated 5/5</span>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <span className="text-xs font-semibold text-slate-700 mt-0.5">Google Reviews</span>
              </div>
            </a>

            {/* Phone CTA */}
            <a href="tel:+12015033118" className="hidden md:flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-6 py-3 rounded-xl transition-colors flex-shrink-0">
              <Phone className="w-5 h-5" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-normal">Free On-Site Inspection</span>
                <span className="text-lg font-bold">(201) 503-3118</span>
              </div>
            </a>

            {/* Mobile phone */}
            <a href="tel:+12015033118" className="md:hidden flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-4 py-2.5 rounded-xl transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">Call Now</span>
            </a>
          </div>
        </div>

        {/* Trust Bar with Hamburger */}
        <div className="bg-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-2.5">
              {/* Trust items */}
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>Same Day Service</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>5/5 Rating on Google</span>
                </div>
              </div>
              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(true)}
                className="p-1.5 rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0 ml-4"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
          <div className="relative ml-auto w-80 max-w-full bg-white h-full shadow-2xl flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <img src="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/0f4671081_WebsiteLOGO.png" alt="ProLine" className="h-12 w-auto" />
              <button onClick={() => setMenuOpen(false)} className="p-2 rounded-lg hover:bg-slate-100">
                <X className="w-6 h-6 text-slate-700" />
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-1">
              {navLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-slate-800 font-semibold hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-3 pb-1 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Services</div>
              {serviceLinks.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 text-sm font-medium transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </nav>
            <div className="px-4 pb-8">
              <a
                href="tel:+12015033118"
                className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-4 rounded-xl transition-colors text-lg"
              >
                <Phone className="w-5 h-5" /> (201) 503-3118
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile bottom sticky CTA */}
      <a
        href="tel:+12015033118"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-yellow-500 flex items-center justify-center gap-3 py-4 shadow-2xl"
      >
        <Phone className="w-5 h-5 text-white" />
        <span className="text-white font-bold text-lg">(201) 503-3118</span>
      </a>
    </>
  );
}