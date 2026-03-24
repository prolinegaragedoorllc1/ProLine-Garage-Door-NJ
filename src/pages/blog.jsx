import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, ChevronRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

export const articles = [
  {
    slug: 'how-to-tell-if-garage-door-spring-is-broken',
    title: 'How to Tell If Your Garage Door Spring Is Broken',
    excerpt: 'A broken spring is the #1 reason garage doors stop working. Learn the warning signs before it becomes an emergency.',
    image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/7864d5cca_generated_image.png',
    readTime: '4 min read',
    category: 'Spring Repair',
    date: 'March 2026',
  },
  {
    slug: 'garage-door-maintenance-checklist',
    title: 'Annual Garage Door Maintenance Checklist for NJ Homeowners',
    excerpt: 'Keep your garage door running smoothly year-round with this simple maintenance routine any homeowner can follow.',
    image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/55372ee69_generated_image.png',
    readTime: '5 min read',
    category: 'Maintenance',
    date: 'March 2026',
  },
  {
    slug: 'why-is-my-garage-door-so-loud',
    title: 'Why Is My Garage Door So Loud? (And How to Fix It)',
    excerpt: 'Grinding, squeaking, or banging? Learn what each noise means and which ones need immediate professional attention.',
    image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/d454f09ac_generated_image.png',
    readTime: '4 min read',
    category: 'Noise & Performance',
    date: 'February 2026',
  },
  {
    slug: 'garage-door-off-track-what-to-do',
    title: 'Garage Door Off Track? Here\'s What to Do (And What NOT to Do)',
    excerpt: 'An off-track garage door is dangerous. Find out what causes it, when you can fix it yourself, and when to call a pro.',
    image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/8f122331d_generated_image.png',
    readTime: '5 min read',
    category: 'Emergency Repairs',
    date: 'February 2026',
  },
  {
    slug: 'when-to-replace-vs-repair-garage-door',
    title: 'Repair vs. Replace: When Should You Get a New Garage Door?',
    excerpt: 'Not sure whether to fix your existing door or invest in a new one? This guide walks you through the decision.',
    image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/42ad8fe28_generated_image.png',
    readTime: '6 min read',
    category: 'Installation',
    date: 'January 2026',
  },
  {
    slug: 'garage-door-opener-repair-guide',
    title: 'Garage Door Opener Not Working? Troubleshooting Guide',
    excerpt: 'Before calling a technician, walk through these common opener issues and their solutions — from remote problems to motor failure.',
    image: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/d454f09ac_generated_image.png',
    readTime: '5 min read',
    category: 'Opener Repair',
    date: 'January 2026',
  },
];

export default function Blog() {
  return (
    <PageLayout>

      {/* Hero */}
      <section className="bg-blue-800 text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Garage Door Tips & Maintenance</h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto">
            Expert advice from ProLine Garage Door LLC — helping New Jersey homeowners keep their doors safe, quiet, and reliable.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {articles.map((article) => (
             <Link
               key={article.slug}
               to={`/blog/${article.slug}`}
               onClick={() => window.scrollTo(0, 0)}
               className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
             >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>
                  <h2 className="text-slate-900 font-bold text-lg leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm">
                    Read Article <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-slate-900 text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Need a Garage Door Expert in NJ?</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Our licensed technicians serve Bergen, Passaic, and Morris County with same-day service.
          </p>
          <a
            href="tel:+12015033118"
            className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-xl px-10 py-4 rounded-xl transition-colors"
          >
            <Phone className="w-6 h-6" />
            Call (201) 503-3118
          </a>
        </div>
      </section>
    </PageLayout>
  );
}