import React, { useState, useEffect, useRef } from 'react';
import { Phone, CheckCircle2, Mail, Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceLinks = [
  { label: 'Garage Door Spring Repair', path: '/services/spring-repair' },
  { label: 'Garage Door Cable Repair', path: '/services/cable-repair' },
  { label: 'Garage Door Roller Replacement', path: '/services/roller-replacement' },
  { label: 'Garage Door Panel Replacement', path: '/services/panel-replacement' },
  { label: 'Garage Door Openers', path: '/services/garage-door-openers' }
];

const GoogleLogo = () =>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5 flex-shrink-0">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>;

export default function PageLayout({ children }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!headerRef.current) return;
    const update = () => setHeaderHeight(headerRef.current.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Trust Bar - Sticky */}
      <div className="md:hidden bg-blue-800 text-white py-3 px-4 sticky top-0 z-40">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <CheckCircle2 className="w-4 h-4 text-yellow-400" />
            <span>Same Day Service</span>
          </div>
          <a href="tel:+12015033118" className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold px-4 py-2 rounded-lg transition-colors text-sm">
            Call Now!
          </a>
        </div>
      </div>

      {/* Header */}
      <header ref={headerRef} className="bg-white border-b border-slate-200 md:sticky md:top-0 md:z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4 gap-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="https://media.base44.com/images/public/6940c0d91636ce363ecbf035/0f4671081_WebsiteLOGO.png"
                alt="ProLine Garage Door LLC"
                className="h-20 md:h-28 w-auto"
              />
            </Link>

            {/* Services Nav Dropdown */}
            <div className="hidden md:block relative">
              <button
                onClick={() => setServicesOpen((v) => !v)}
                onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                className="flex items-center gap-1.5 text-slate-700 font-semibold text-base hover:text-blue-700 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen &&
                <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl z-50 min-w-[260px] py-2">
                  {serviceLinks.map((s) =>
                    <Link
                      key={s.path}
                      to={s.path}
                      className="block px-5 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-700 text-sm font-medium transition-colors"
                      onClick={() => {
                        setServicesOpen(false);
                        window.scrollTo(0, 0);
                      }}>
                      {s.label}
                    </Link>
                  )}
                </div>
              }
            </div>

            {/* Google Reviews Badge */}
            <a
              href="https://www.google.com/maps/place/ProLine+Garage+Door/data=!4m2!3m1!1s0x0:0x7b39662917debd08?sa=X&ved=1t:2428&hl=en&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-200 rounded-xl px-3 py-2 md:px-6 md:py-3 hover:bg-slate-50 transition-colors">
              <GoogleLogo />
              <div className="flex flex-col">
                <span className="text-xs md:text-sm text-slate-500 leading-none mb-1">Rated 5/5 Based On</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) =>
                    <Star key={i} className="w-3.5 h-3.5 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                  )}
                </div>
                <span className="text-xs md:text-sm font-semibold text-slate-700 mt-0.5">Google Reviews</span>
              </div>
            </a>

            {/* CTA Phone - Desktop only */}
            <a href="tel:+12015033118" className="hidden md:flex flex-shrink-0">
              <div className="bg-yellow-500 hover:bg-yellow-400 transition-colors rounded-xl px-8 py-4 flex items-center gap-4 cursor-pointer">
                <div className="bg-white/20 rounded-lg p-2.5">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-white text-sm font-semibold">Free On-Site Inspection</span>
                  <span className="text-white font-bold text-2xl md:text-3xl" dir="ltr">(201) 503-3118</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Sticky Call Button - Bottom */}
      <a
        href="tel:+12015033118"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-yellow-500 flex items-center justify-center gap-4 py-4 shadow-2xl">
        <div className="bg-white/20 rounded-full p-2">
          <Phone className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-white text-sm font-semibold">Free On-Site Inspection</span>
          <span className="text-white font-bold text-2xl" dir="ltr">(201) 503-3118</span>
        </div>
      </a>

      {/* Trust Bar - sticky below header (Desktop only) */}
      <div className="hidden md:block bg-blue-800 text-white py-2.5 sticky z-40" style={{ top: headerHeight }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-yellow-400" />
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

      {/* Main Content */}
      <main className="pb-20 lg:pb-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">ProLine Garage Door LLC</h3>
              <p className="text-slate-300 mb-2">Locally owned & operated garage door service</p>
              <p className="text-slate-400 text-sm">Licensed · Insured · Bonded</p>
              <p className="text-slate-400 text-sm">HIC License #13VH14019600</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-blue-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Phone</p>
                    <a href="tel:+12015033118" className="text-slate-200 hover:text-blue-400 font-semibold text-lg" dir="ltr">(201) 503-3118</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email</p>
                    <a href="mailto:info@prolinegaragedoorllc.com" className="text-slate-200 hover:text-blue-400">
                      info@prolinegaragedoorllc.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <a
                  href="https://www.google.com/maps/place/ProLine+Garage+Door/data=!4m2!3m1!1s0x0:0x7b39662917debd08?sa=X&ved=1t:2428&hl=en&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 mb-4">
                  View us on Google Maps →
                </a>
                <div className="rounded-xl overflow-hidden border border-slate-700">
                  <iframe
                    src="https://maps.google.com/maps?q=ProLine+Garage+Door+NJ&output=embed"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ProLine Garage Door LLC">
                  </iframe>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">Our Services</h3>
              <ul className="space-y-2 mb-6">
                {serviceLinks.map((s) =>
                  <li key={s.path}>
                    <Link to={s.path} onClick={() => window.scrollTo(0, 0)} className="text-slate-400 hover:text-blue-400 text-sm transition-colors">{s.label}</Link>
                  </li>
                )}
              </ul>
              <h3 className="text-xl font-bold mb-2 text-blue-400">Service Areas</h3>
              <p className="text-slate-300 font-semibold mb-1">Serving New Jersey</p>
              <p className="text-slate-400 text-sm mb-4">Paramus, Fair Lawn, Wayne, Bergen County, Passaic County, Morris County and surrounding areas.</p>
              <p className="text-slate-400 text-sm italic mb-6">We are a service-area business. We do not operate a walk-in storefront.</p>
              <div className="space-y-1 text-slate-400 text-sm">
                <p className="text-green-400 font-semibold">24/7 Emergency Service</p>
                <p>Available around the clock</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <p className="text-slate-400">© 2026 ProLine Garage Door LLC — All Rights Reserved</p>
                <span className="hidden md:block text-slate-600">•</span>
                <p className="text-slate-400 text-sm">NJ Home Improvement Contractor License HIC #13VH14019600</p>
              </div>
              <div className="flex gap-6 text-sm">
                <Link to="/privacy-policy" className="text-slate-400 hover:text-blue-400">Privacy Policy</Link>
                <span className="text-slate-600">•</span>
                <Link to="/terms" className="text-slate-400 hover:text-blue-400">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}