import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const serviceLinks = [
  { label: 'Garage Door Repair', path: '/garage-door-repair' },
  { label: 'Spring Repair', path: '/garage-door-spring-repair' },
  { label: 'Opener Repair', path: '/garage-door-opener-repair' },
  { label: 'Cable Repair', path: '/garage-door-cable-repair' },
  { label: 'Installation', path: '/garage-door-installation' },
  { label: 'Roller Replacement', path: '/services/roller-replacement' },
  { label: 'Panel Replacement', path: '/services/panel-replacement' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white py-14 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">ProLine Garage Door LLC</h3>
            <p className="text-slate-300 mb-2 text-sm">Locally owned & operated garage door service</p>
            <p className="text-slate-400 text-sm">Licensed · Insured · Bonded</p>
            <p className="text-slate-400 text-sm">HIC License #13VH14019600</p>
            <p className="text-green-400 font-semibold mt-4 text-sm">24/7 Emergency Service</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="text-slate-400 hover:text-blue-400 text-sm transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-1 border-t border-slate-700 pt-4">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Locations</p>
              <Link to="/garage-door-repair-bergen-county" className="block text-slate-400 hover:text-blue-400 text-sm transition-colors">Bergen County</Link>
              <Link to="/garage-door-repair-morristown" className="block text-slate-400 hover:text-blue-400 text-sm transition-colors">Morris County</Link>
              <Link to="/garage-door-repair-passaic-county" className="block text-slate-400 hover:text-blue-400 text-sm transition-colors">Passaic County</Link>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 mt-3">Pages</p>
              <Link to="/about" className="block text-slate-400 hover:text-blue-400 text-sm transition-colors">About Us</Link>
              <Link to="/faq" className="block text-slate-400 hover:text-blue-400 text-sm transition-colors">FAQ</Link>
              <Link to="/blog" className="block text-slate-400 hover:text-blue-400 text-sm transition-colors">Blog</Link>
              <Link to="/contact" className="block text-slate-400 hover:text-blue-400 text-sm transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">Contact</h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+12015033118" className="text-slate-200 hover:text-blue-400 font-semibold" dir="ltr">(201) 503-3118</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@prolinegaragedoorllc.com" className="text-slate-400 hover:text-blue-400 text-sm">info@prolinegaragedoorllc.com</a>
              </div>
            </div>
            <p className="text-slate-400 text-sm font-semibold">Serving All of New Jersey</p>
            <p className="text-slate-400 text-sm">Bergen County · Passaic County · Morris County & surrounding areas</p>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">© 2026 ProLine Garage Door LLC — All Rights Reserved</p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="text-slate-400 hover:text-blue-400">Privacy Policy</Link>
            <span className="text-slate-600">•</span>
            <Link to="/terms" className="text-slate-400 hover:text-blue-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}