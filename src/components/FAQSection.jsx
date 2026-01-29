import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <Card className="border border-slate-200 hover:border-blue-300 transition-colors">
      <CardContent className="p-0">
        <button
          onClick={onClick}
          className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
        >
          <span className="font-semibold text-lg text-slate-900">{question}</span>
          <ChevronDown
            className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Common Issues",
      questions: [
        {
          question: "Why won't my garage door open or close?",
          answer: "There are several reasons: dead remote batteries, misaligned photo-eye sensors, broken springs, damaged cables, or issues with the opener motor. Check the batteries first, then ensure nothing is blocking the sensors. If the problem persists, call us for professional diagnosis and repair."
        },
        {
          question: "What causes a garage door spring to break?",
          answer: "Garage door springs have a limited lifespan (typically 10,000-20,000 cycles). They break due to normal wear and tear, extreme temperature changes, rust and corrosion, or lack of maintenance. When a spring breaks, you'll hear a loud bang and the door won't open properly."
        },
        {
          question: "Why is my garage door making loud noises?",
          answer: "Loud noises usually indicate worn rollers, loose hardware, need for lubrication, damaged hinges, or worn springs. Regular maintenance and lubrication can prevent most noise issues. If the noise is sudden or severe, contact us immediately."
        },
        {
          question: "My garage door is off track - what should I do?",
          answer: "Never attempt to operate a garage door that's off track! This is dangerous and can cause serious injury or property damage. Disconnect the opener immediately and call us for professional service. Our technicians can safely realign your door."
        }
      ]
    },
    {
      category: "Maintenance & Prevention",
      questions: [
        {
          question: "How often should I maintain my garage door?",
          answer: "We recommend professional maintenance at least once per year. However, you should perform basic checks monthly: test the auto-reverse feature, inspect and tighten hardware, lubricate moving parts, and clean the tracks. Regular maintenance extends the life of your door and prevents costly repairs."
        },
        {
          question: "What parts of a garage door need regular lubrication?",
          answer: "Lubricate these components every 6 months: springs, hinges, rollers, tracks, and the opener chain or screw drive. Use a silicone-based or lithium-based lubricant - never WD-40, as it's a solvent, not a lubricant. This reduces friction and extends component life."
        },
        {
          question: "How long do garage door springs typically last?",
          answer: "Standard springs last 7-9 years or 10,000 cycles. High-cycle springs can last 25,000-100,000 cycles (20-30 years). Factors affecting lifespan include usage frequency, climate, and maintenance. We recommend replacing both springs at the same time, even if only one breaks."
        },
        {
          question: "Can I prevent my garage door from freezing shut?",
          answer: "Yes! Keep the bottom seal clean and in good condition, apply silicone spray to the seal to prevent ice adhesion, ensure proper drainage around the door, and run the door periodically during winter. If frozen, never force it open - use a heat gun or hair dryer to melt the ice."
        }
      ]
    },
    {
      category: "Service & Repairs",
      questions: [
        {
          question: "Do you offer same-day service?",
          answer: "Yes! We offer same-day service for most repairs in our service area. Call us before noon for the best chance of same-day appointment. Emergency repairs are available 24/7 for urgent situations like broken springs or doors that won't close."
        },
        {
          question: "How long does a typical garage door repair take?",
          answer: "Most repairs take 1-2 hours. Spring replacements typically take 30-60 minutes, opener repairs 1-2 hours, and off-track repairs 2-3 hours. Complete door replacements usually take 4-6 hours. We'll provide an accurate estimate when we diagnose the issue."
        },
        {
          question: "Do you provide warranties on your work?",
          answer: "Absolutely! We provide comprehensive warranties on both parts and labor. Warranty terms vary by service type and manufacturer. All our work is backed by our satisfaction guarantee - if you're not happy, we'll make it right."
        },
        {
          question: "What areas do you service?",
          answer: "We service all of North New Jersey, including Bergen, Passaic, Hudson, Essex, Morris, Union, Middlesex, Somerset, Warren, Sussex, and Hunterdon Counties. Call us to confirm we service your specific location."
        }
      ]
    },

    {
      category: "Safety & DIY",
      questions: [
        {
          question: "Can I replace garage door springs myself?",
          answer: "We strongly recommend against DIY spring replacement. Garage door springs are under extreme tension (150-200 pounds) and can cause serious injury or death if mishandled. This is one of the most dangerous home repairs. Professional service is always safer and often costs less than ER visits."
        },
        {
          question: "How do I test if my garage door auto-reverse is working?",
          answer: "Place a 2x4 board flat on the ground in the door's path. Close the door - it should reverse when it touches the board. Also test the photo-eye sensors by waving an object between them while closing. If either test fails, don't use the door and call us immediately."
        },
        {
          question: "What should I do in a garage door emergency?",
          answer: "For broken springs or cables: Don't operate the door and call us immediately. For stuck open doors: Use the manual release cord (red handle) to disconnect the opener, then carefully lower the door manually. For doors that won't close: Check for obstructions and sensor alignment, then call us if the issue persists."
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h3>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            Everything you need to know about garage door repair, maintenance, and our services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full"></span>
                {category.category}
              </h4>
              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const globalIndex = `${categoryIndex}-${index}`;
                  return (
                    <FAQItem
                      key={globalIndex}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === globalIndex}
                      onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA at the end */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-slate-50 border-blue-200">
            <CardContent className="p-8 md:p-12">
              <h4 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                Still Have Questions?
              </h4>
              <p className="text-lg text-slate-600 mb-6">
                Our experts are here to help! Get personalized answers and a free quote.
              </p>
              <div className="flex gap-4 flex-col sm:flex-row justify-center">
                <a href="tel:2015033118">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all">
                    Call (201) 503-3118
                  </button>
                </a>
                <button
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-300 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Get Free Quote
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}