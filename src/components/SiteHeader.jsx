import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Star, ThumbsUp, X, Menu, ChevronDown } from 'lucide-react';

const serviceLinks = [
  { label: 'Garage Door Spring Repair', path: '/services/spring-repair' },
  { label: 'Garage Door Cable Repair', path: '/services/cable-repair' },
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

const trustItems = [
  { icon: Star, label: 'Same Day Service' },
  { icon: CheckCircle2, label: 'No Hidden Fees' },
  { icon: Star, label: '5/5 Rating Business' },
  { icon: ThumbsUp, label: '100% Satisfaction Guarantee' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Main Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        {/* Top row: logo + phone CTA (desktop) + hamburger */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 gap-4">
            {/* Hamburger - always visible */}
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors flex-shrink-0"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7 text-slate-700" />
            </button>

            {/* Logo - centered */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/0f4671081_WebsiteLOGO.png"
                alt="ProLine Garage Door LLC"
                className="h-14 md:h-18 w-auto"
                style={{ maxHeight: '72px' }}
              />
            </Link>

            {/* Phone CTA - desktop */}
            <a
              href="tel:+12015033118"
              className="hidden lg:flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-6 py-3 rounded-xl transition-colors flex-shrink-0"
            >
              <div className="flex flex-col leading-tight text-right">
                <span className="text-xs font-semibold opacity-90">Free On-Site Inspection</span>
                <span className="text-lg font-bold" dir="ltr">(201) 503-3118</span>
              </div>
              <Phone className="w-6 h-6" />
            </a>

            {/* Placeholder to balance layout on mobile */}
            <div className="lg:hidden w-10" />
          </div>
        </div>

        {/* Trust Bar */}
        <div className="bg-blue-900 text-white py-2">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar">
              {/* Mobile: hamburger inline with trust items */}
              <div className="flex items-center gap-4 md:gap-8 mx-auto">
                {trustItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 whitespace-nowrap text-sm font-medium flex-shrink-0">
                    <item.icon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet bottom sticky CTA */}
      <a
        href="tel:+12015033118"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-yellow-500 flex items-center justify-center gap-3 py-3 shadow-2xl"
      >
        <Phone className="w-5 h-5 text-white" />
        <div className="flex flex-col leading-tight">
          <span className="text-white text-xs font-semibold">Free On-Site Inspection</span>
          <span className="text-white font-bold text-xl" dir="ltr">(201) 503-3118</span>
        </div>
      </a>

      {/* Full-screen Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
          {/* Drawer - left side */}
          <div className="relative w-80 max-w-full bg-white h-full shadow-2xl flex flex-col overflow-y-auto">
            {/* Drawer header with trust bar */}
            <div className="bg-blue-900 text-white py-2.5 px-4 flex items-center justify-between">
              <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
                {trustItems.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 whitespace-nowrap text-xs font-medium flex-shrink-0">
                    <item.icon className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => setMenuOpen(false)} className="p-1.5 rounded-lg hover:bg-white/20 ml-2 flex-shrink-0">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Logo */}
            <div className="px-6 py-4 border-b border-slate-100">
              <img src="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/0f4671081_WebsiteLOGO.png" alt="ProLine" className="h-12 w-auto" />
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-4 py-4 space-y-0.5">
              {navLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-slate-800 font-semibold hover:bg-blue-50 hover:text-blue-700 transition-colors text-base"
                >
                  {l.label}
                </Link>
              ))}

              {/* Services expandable */}
              <div>
                <button
                  onClick={() => setServicesOpen(v => !v)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-slate-800 font-semibold hover:bg-blue-50 hover:text-blue-700 transition-colors text-base"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-0.5 space-y-0.5">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-700 text-sm font-medium transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Call CTA */}
            <div className="px-4 pb-8 pt-4 border-t border-slate-100">
              <a
                href="tel:+12015033118"
                className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-4 rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-semibold opacity-90">Free On-Site Inspection</span>
                  <span className="text-lg font-bold" dir="ltr">(201) 503-3118</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}