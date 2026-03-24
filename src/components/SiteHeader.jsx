import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, MapPin, X, Menu, Wrench, ChevronDown } from 'lucide-react';

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

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Main Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
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

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((l) => (
                <Link key={l.path} to={l.path} className="text-slate-700 font-medium hover:text-blue-700 transition-colors">
                  {l.label}
                </Link>
              ))}
              <div className="relative group">
                <button className="text-slate-700 font-medium hover:text-blue-700 transition-colors">Services ▾</button>
                <div className="absolute top-full left-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 min-w-[240px] py-2 hidden group-hover:block">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="block px-5 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 text-sm font-medium transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Phone CTA */}
            <a href="tel:+12015033118" className="hidden md:flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-6 py-3 rounded-xl transition-colors flex-shrink-0">
              <Phone className="w-5 h-5" /> (201) 503-3118
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7 text-slate-700" />
            </button>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="bg-blue-800 text-white py-2.5">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                <span>5/5 Rating on Google</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
          {/* Drawer */}
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
              <div className="pt-2 pb-1 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Services</div>
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