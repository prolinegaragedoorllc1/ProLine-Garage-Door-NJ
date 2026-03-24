import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Phone, Clock, ChevronRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { articles } from './blog';

const articleContent = {
  'how-to-tell-if-garage-door-spring-is-broken': {
    intro: 'Your garage door relies on torsion or extension springs to counterbalance its weight — without them, the door won\'t move. When a spring breaks, the door becomes dangerous and inoperable. Here\'s how to identify the problem before it becomes an emergency.',
    sections: [
      {
        heading: 'Signs Your Spring May Be Broken',
        content: 'The most obvious sign is a loud bang — broken torsion springs snap under thousands of pounds of tension and sound like a gunshot inside the garage. Other signs include: the door only opens 6 inches and stops, the door feels extremely heavy when lifted manually, or you see a visible gap in the spring coil above the door.',
      },
      {
        heading: 'Torsion Springs vs. Extension Springs',
        content: 'Torsion springs run horizontally above the door and are the most common type in NJ homes. Extension springs run along the horizontal tracks on each side. Both can break, and both should be replaced by a professional — attempting DIY spring replacement is one of the most dangerous home repairs.',
      },
      {
        heading: 'What to Do If Your Spring Is Broken',
        content: 'Stop using the door immediately. Do not attempt to open it manually — the door can fall and cause serious injury. Use the side door of your garage if available, and call a professional for same-day service.',
      },
      {
        heading: 'How Long Do Garage Door Springs Last?',
        content: 'Most springs are rated for 10,000 cycles (one cycle = one open + one close). If you use your garage twice a day, that\'s roughly 7–10 years of life. Replacing both springs at the same time (even if only one is broken) is strongly recommended — the other spring is likely near the end of its life.',
      },
    ],
    tip: 'Pro Tip: Always replace springs in pairs. If one breaks, the other is close behind — and replacing both at once saves you a second service call.',
  },
  'garage-door-maintenance-checklist': {
    intro: 'Regular maintenance is the single best investment you can make for your garage door. A 30-minute annual inspection can prevent 80% of costly emergency repairs. Here\'s the complete checklist NJ homeowners should follow.',
    sections: [
      {
        heading: 'Visual Inspection (Every Month)',
        content: 'Look at the springs, cables, rollers, pulleys, and mounting hardware. Do you see any worn, broken, or loose components? Watch the door move — it should operate smoothly with no jerking or noise. Check that the door sits evenly in the frame when closed.',
      },
      {
        heading: 'Lubrication (Every 6 Months)',
        content: 'Apply white lithium grease or a silicone-based spray to: torsion springs, rollers (not the track), hinges, and the opener\'s drive chain or screw. Avoid WD-40 — it\'s a solvent, not a lubricant. Proper lubrication alone can eliminate 90% of garage door noise.',
      },
      {
        heading: 'Balance Test (Once a Year)',
        content: 'Disconnect the opener by pulling the emergency release cord. Lift the door manually to waist height and let go. It should stay in place — if it falls or rises, your springs are out of balance and need adjustment by a professional.',
      },
      {
        heading: 'Weatherstripping & Seals',
        content: 'Check the bottom seal and side seals for cracks, gaps, or compression loss. Worn seals let in cold air, moisture, pests, and dust. Replacement seals are inexpensive and dramatically improve energy efficiency.',
      },
      {
        heading: 'Safety Reversal Test',
        content: 'Place a 2x4 flat on the ground in the door\'s path and close the door. It should automatically reverse when it hits the board. If it doesn\'t, your safety sensors or force settings need immediate adjustment.',
      },
    ],
    tip: 'Pro Tip: Schedule a professional tune-up every 1–2 years. Technicians can spot worn components before they fail and complete a full adjustment that\'s difficult to do at home.',
  },
  'why-is-my-garage-door-so-loud': {
    intro: 'A noisy garage door is more than just annoying — it\'s often a warning signal. Different sounds point to different problems, and understanding what you\'re hearing can help you decide whether it\'s a quick fix or time to call a professional.',
    sections: [
      {
        heading: 'Squeaking or Squealing',
        content: 'This almost always means dry metal-on-metal contact — rollers, hinges, or springs that need lubrication. Apply white lithium grease to all moving metal parts (not the track itself). If the squeaking continues after lubrication, the rollers may be worn and need replacement.',
      },
      {
        heading: 'Grinding',
        content: 'Grinding is more serious. It typically indicates a roller that\'s lost its shape, a bent track, or debris caught in the track. Run your hand along the track (with the door closed) to feel for bends or obstructions. A severely bent track requires professional straightening or replacement.',
      },
      {
        heading: 'Banging or Popping',
        content: 'A single loud bang, especially at night or when the garage isn\'t in use, is often a broken torsion spring. If you hear this, don\'t use the door — call for service immediately.',
      },
      {
        heading: 'Rattling',
        content: 'Rattling is usually the easiest fix: loose bolts and nuts. Use a socket wrench to tighten all the hardware on the door and track. Don\'t overtighten — snug is enough. Check brackets, roller brackets, and hinges.',
      },
      {
        heading: 'The Opener Itself Is Loud',
        content: 'Chain-drive openers are the noisiest type. If noise is a concern, upgrading to a belt-drive opener is the most effective long-term solution. Belt drives are nearly silent and cost $150–$300 more than chain drives.',
      },
    ],
    tip: 'Pro Tip: Switching from metal rollers to nylon rollers (about $75–$100 for the set installed) is the single most effective way to reduce garage door noise.',
  },
  'garage-door-off-track-what-to-do': {
    intro: 'An off-track garage door looks alarming — and it is a genuine safety issue. Here\'s exactly what to do (and what to avoid) if your door has come off its tracks.',
    sections: [
      {
        heading: 'Stop Using the Door Immediately',
        content: 'This is the most important step. Forcing an off-track door open or closed can cause the cables to snap, the door panels to bend, or the door to fall completely. Disconnect the opener and do not touch the door until it\'s been assessed.',
      },
      {
        heading: 'What Causes a Door to Go Off Track?',
        content: 'The most common causes: hitting the door with a vehicle, a broken cable allowing one side to drop, worn or broken rollers that pop out of the track, or a significant impact to the track itself (like moving heavy items in the garage).',
      },
      {
        heading: 'Can You Fix It Yourself?',
        content: 'Minor misalignment — where the rollers have just barely slipped — can sometimes be corrected by hand. But in most cases, the track needs to be re-aligned using specialized tools and the cables need to be re-tensioned. Improper DIY repair is a leading cause of serious injury.',
      },
      {
        heading: 'What the Repair Involves',
        content: 'A technician will: inspect for bent track sections, re-seat all rollers, re-tension or replace cables if needed, and test the door balance after repair. Most off-track repairs are completed in 1–2 hours.',
      },
    ],
    tip: 'Pro Tip: After an off-track repair, always ask the technician to check the cables and rollers — these components are often worn when a door goes off track and should be replaced to prevent recurrence.',
  },
  'when-to-replace-vs-repair-garage-door': {
    intro: 'One of the most common questions we get: "Is it worth fixing my garage door, or should I just replace it?" Here\'s how to think through the decision.',
    sections: [
      {
        heading: 'Repair When:',
        content: 'The door is structurally sound with no cracked or severely dented panels. The issue is isolated — one broken spring, a faulty opener, or worn rollers. The door is less than 15 years old. The repair cost is less than 50% of replacement cost.',
      },
      {
        heading: 'Replace When:',
        content: 'Multiple panels are cracked, dented, or rotting. The door is more than 20 years old and has had repeated repairs. You\'re experiencing major structural warping or the door no longer sits level. You want better insulation, noise reduction, or curb appeal.',
      },
      {
        heading: 'The 50% Rule',
        content: 'A good rule of thumb: if the repair cost is more than 50% of the cost of a new door, replacement is the smarter investment. A new standard steel garage door with installation in NJ typically runs $800–$1,800 depending on size and style.',
      },
      {
        heading: 'Don\'t Forget ROI',
        content: 'A new garage door has one of the highest ROI of any home improvement project — averaging 90–100% return at resale. It also improves curb appeal and can reduce energy costs if your current door is uninsulated.',
      },
    ],
    tip: 'Pro Tip: We offer free on-site assessments. We\'ll give you an honest recommendation — we only suggest replacement when it genuinely makes more financial sense for you.',
  },
  'garage-door-opener-repair-guide': {
    intro: 'Garage door opener issues are frustrating but often solvable without a service call. Walk through these troubleshooting steps before calling a technician — you might save yourself the trip.',
    sections: [
      {
        heading: 'Remote or Keypad Not Working',
        content: 'Start with the basics: replace the batteries in the remote. If that doesn\'t work, reprogram the remote to the opener (instructions are in your opener\'s manual or online by model number). Check that nothing is blocking the photo-eye sensors at the bottom of the door — a blinking light on the opener motor usually indicates a sensor issue.',
      },
      {
        heading: 'The Motor Runs But the Door Doesn\'t Move',
        content: 'This usually means the trolley (the carriage that moves the door) has disconnected from the drive. Pull the emergency release cord and reconnect the trolley. If it keeps disconnecting, the trolley mechanism may be worn and need replacement.',
      },
      {
        heading: 'The Door Reverses Before Closing',
        content: 'Check the photo-eye sensors on both sides of the door — they should be aligned and pointing at each other (look for a solid green light). Clean the lenses with a soft cloth. If they\'re aligned and clean but the problem persists, the door\'s close-limit switch may need adjustment.',
      },
      {
        heading: 'The Opener Makes Noise But Door Won\'t Open or Close',
        content: 'If you hear the motor running but the door doesn\'t move, the drive gear inside the opener may be stripped. This is a common failure point on openers over 10 years old and usually requires either a gear replacement or a new opener unit.',
      },
      {
        heading: 'When to Replace the Opener',
        content: 'Openers over 15 years old lack modern safety features like automatic reversal and rolling code technology (which prevents code theft). If your opener lacks these features or requires frequent repairs, replacement is worth it — modern openers also add Wi-Fi control and battery backup.',
      },
    ],
    tip: 'Pro Tip: If your opener was manufactured before 1993, it doesn\'t have the UL-required auto-reverse safety feature. Replacement is recommended for safety reasons alone.',
  },
};

export default function BlogArticle() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  const content = articleContent[slug];

  if (!article || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    image: article.image,
    datePublished: article.date,
    author: { '@type': 'Organization', name: 'ProLine Garage Door LLC' },
    publisher: {
      '@type': 'Organization',
      name: 'ProLine Garage Door LLC',
      logo: { '@type': 'ImageObject', url: 'https://media.base44.com/images/public/6940c0d91636ce363ecbf035/0f4671081_WebsiteLOGO.png' },
    },
    description: article.excerpt,
  };

  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <PageLayout>

      {/* Article Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/30" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">
            {article.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-snug max-w-3xl">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 mt-3 text-slate-300 text-sm">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{article.readTime}</span>
            <span>·</span>
            <span>{article.date}</span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="container mx-auto px-4 max-w-3xl py-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to All Articles
        </Link>

        <p className="text-lg text-slate-700 leading-relaxed mb-8 font-medium">{content.intro}</p>

        {content.sections.map((section, i) => (
          <div key={i} className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{section.heading}</h2>
            <p className="text-slate-600 leading-relaxed">{section.content}</p>
          </div>
        ))}

        {/* Pro Tip Box */}
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6 my-8">
          <p className="text-slate-800 font-semibold leading-relaxed">{content.tip}</p>
        </div>

        {/* In-article CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 text-center my-10">
          <h3 className="text-white text-2xl font-bold mb-2">Need a Professional?</h3>
          <p className="text-slate-400 mb-6">Same-day service available throughout North New Jersey — no hidden fees.</p>
          <a
            href="tel:+12015033118"
            className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call (201) 503-3118
          </a>
        </div>

        {/* Other Articles */}
        {otherArticles.length > 0 && (
          <div className="mt-12 border-t border-slate-200 pt-10">
            <h3 className="text-xl font-bold text-slate-900 mb-6">More Garage Door Tips</h3>
            <div className="space-y-4">
              {otherArticles.map((a) => (
                <Link
                  key={a.slug}
                  to={`/blog/${a.slug}`}
                  className="flex gap-4 group items-center"
                >
                  <img src={a.image} alt={a.title} className="w-20 h-16 object-cover rounded-lg flex-shrink-0" />
                  <div>
                    <span className="text-xs text-blue-600 font-semibold">{a.category}</span>
                    <p className="text-slate-900 font-semibold group-hover:text-blue-600 transition-colors leading-snug">
                      {a.title}
                    </p>
                    <span className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" /> {a.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <section className="bg-blue-800 text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Fix Your Garage Door?</h2>
          <p className="text-blue-200 mb-8">Licensed, insured, and bonded — serving North New Jersey.</p>
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
    </>
  );
}