import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function ServiceFAQ({ serviceType }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = {
    "Broken Spring Replacement": [
      {
        question: "How do I know if my garage door spring is broken?",
        answer: "Common signs include: the door won't open, you hear a loud bang, the door feels heavy, or there's a visible gap in the spring. If you notice any of these, call us immediately for same-day service."
      },
      {
        question: "How long do garage door springs last?",
        answer: "Standard springs last 7-9 years or 10,000 cycles. We install high-cycle springs rated for 25,000-50,000 cycles, providing 2-3x longer life and better value."
      },
      {
        question: "Is it dangerous to replace springs myself?",
        answer: "Yes, extremely dangerous. Garage door springs are under high tension and can cause serious injury. Always hire a professional for spring replacement."
      },
      {
        question: "How long does spring replacement take?",
        answer: "Most spring replacements are completed within 1-2 hours, including safety inspection and testing."
      }
    ],
    "Garage Door Opener Repair": [
      {
        question: "Why won't my garage door opener work?",
        answer: "Common causes include dead batteries in remote, misaligned safety sensors, power outages, or worn gears. We diagnose and fix all opener issues quickly."
      },
      {
        question: "Should I repair or replace my opener?",
        answer: "If your opener is over 15 years old or needs expensive repairs, replacement is often more cost-effective. We'll provide honest recommendations."
      },
      {
        question: "Do you install smart garage door openers?",
        answer: "Yes! We install and set up Wi-Fi enabled smart openers that let you control your door from your smartphone."
      },
      {
        question: "What brands do you service?",
        answer: "We service all major brands including LiftMaster, Chamberlain, Genie, Craftsman, and more."
      }
    ],
    "Maintenance & Tune-up": [
      {
        question: "How often should I get garage door maintenance?",
        answer: "We recommend professional maintenance once per year to prevent breakdowns and extend the life of your door."
      },
      {
        question: "What's included in a tune-up?",
        answer: "Our 20-point inspection includes lubrication, safety sensor check, track alignment, spring tension adjustment, and full system testing."
      },
      {
        question: "Will maintenance prevent all problems?",
        answer: "Regular maintenance catches 90% of issues before they become emergencies, saving you money and preventing inconvenient breakdowns."
      },
      {
        question: "How long does maintenance take?",
        answer: "A complete tune-up typically takes 45-60 minutes."
      }
    ],
    "Door Off Track Repair": [
      {
        question: "What causes a garage door to come off track?",
        answer: "Common causes include hitting the door with a vehicle, broken cables, worn rollers, or loose hardware. It requires immediate professional attention."
      },
      {
        question: "Can I use my door if it's off track?",
        answer: "No, never try to operate a door that's off track. This can cause serious damage and injury. Call us for emergency service."
      },
      {
        question: "How quickly can you fix it?",
        answer: "We offer emergency service and can typically repair off-track doors within 2-4 hours of your call."
      },
      {
        question: "Will my door work properly after repair?",
        answer: "Yes, we realign the tracks, replace damaged components, and test thoroughly to ensure safe, smooth operation."
      }
    ],
    "Cable Replacement": [
      {
        question: "How do I know if my cables need replacement?",
        answer: "Signs include frayed cables, uneven door movement, door hanging to one side, or visible damage. Broken cables require immediate attention."
      },
      {
        question: "What happens if a cable breaks?",
        answer: "A broken cable can cause the door to slam down suddenly, creating a serious safety hazard. Never operate a door with damaged cables."
      },
      {
        question: "Do you replace both cables?",
        answer: "Yes, we always recommend replacing both cables even if only one is broken, as they wear at similar rates."
      },
      {
        question: "How long do cables last?",
        answer: "Quality cables typically last 8-12 years with proper maintenance. We use heavy-duty cables for maximum durability."
      }
    ],
    "Emergency Repairs": [
      {
        question: "What qualifies as a garage door emergency?",
        answer: "Broken springs, snapped cables, off-track doors, or any issue preventing you from accessing your vehicle or securing your home."
      },
      {
        question: "Are you really available 24/7?",
        answer: "Yes! We have technicians on call around the clock for genuine emergencies. Call (201) 503-3118 anytime."
      },
      {
        question: "Do you charge extra for emergency service?",
        answer: "Emergency service rates may vary depending on time and day. We'll always quote pricing upfront before starting work."
      },
      {
        question: "How fast can you arrive?",
        answer: "Our average emergency response time is 1-2 hours, depending on your location and current call volume."
      }
    ]
  };

  const faqs = faqData[serviceType] || [];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          {serviceType} FAQs
        </h3>
        <p className="text-slate-600 text-lg">Common questions about this service</p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto mb-10">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
            >
              <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed bg-slate-50">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8">
        <h4 className="text-2xl font-bold text-slate-900 mb-3">Still Have Questions?</h4>
        <p className="text-slate-600 mb-6">Call us now and speak with our expert technicians</p>
        <a href="tel:2015033118">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8">
            <Phone className="w-5 h-5 mr-2" />
            Call (201) 503-3118
          </Button>
        </a>
      </div>
    </div>
  );
}