import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function BlogPost() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const postId = searchParams.get('id');

  const blogPosts = {
    1: {
      title: "5 Signs Your Garage Door Spring Needs Replacement in NJ",
      date: "January 25, 2026",
      readTime: "5 min read",
      category: "Maintenance",
      image: "https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=1200&auto=format&fit=crop&q=80",
      content: `
        <h2>Understanding Garage Door Springs in New Jersey Homes</h2>
        <p>Garage door springs are one of the most critical components of your garage door system. In New Jersey's varying climate, with cold winters and hot summers, these springs face constant stress that can lead to failure. At ProLine Garage Door LLC, we've seen countless spring failures across Bergen County, Passaic County, and Morris County.</p>

        <h2>Sign #1: Loud Bang or Popping Sound</h2>
        <p>One of the most dramatic signs of spring failure is a loud bang or popping noise. This sound occurs when a torsion spring breaks. Many homeowners in Maywood, Hackensack, and Paramus report hearing this sound late at night or early in the morning when temperature changes are most significant.</p>
        <p><strong>What to do:</strong> Do NOT attempt to open the door. The spring counterbalances the door's weight, and without it, the door can crash down. Call ProLine Garage Door LLC immediately at (201) 503-3118.</p>

        <h2>Sign #2: Door Won't Open or Opens Very Slowly</h2>
        <p>If your garage door refuses to open or opens just a few inches before stopping, your spring might be broken or severely weakened. This is especially common in older homes in Clifton, Morristown, and Wayne where springs haven't been replaced in years.</p>
        <p><strong>Safety Warning:</strong> Never force a door with a broken spring. The strain on your opener can burn out the motor, resulting in a much more expensive repair.</p>

        <h2>Sign #3: Visible Gap in the Spring</h2>
        <p>Torsion springs are located above your garage door. If you notice a gap of about 1-2 inches in the spring, it's broken. This is easily visible and is a clear sign you need immediate professional service.</p>

        <h2>Sign #4: Crooked or Uneven Door Movement</h2>
        <p>If your door hangs crooked or one side rises faster than the other, you might have a broken extension spring or an issue with one of your torsion springs. This is particularly dangerous and requires immediate attention from a licensed professional.</p>

        <h2>Sign #5: Excessive Noise During Operation</h2>
        <p>While some noise is normal, excessive squeaking, grinding, or straining sounds indicate your springs are wearing out. Regular maintenance can catch these issues before they become emergencies.</p>

        <h2>Why Choose Professional Spring Replacement in NJ?</h2>
        <p>Garage door spring replacement is one of the most dangerous DIY garage door repairs. Springs are under extreme tension - typically 200-400 pounds of force. According to the U.S. Consumer Product Safety Commission, thousands of injuries occur annually from garage door accidents, many involving springs.</p>

        <h3>Bergen County Spring Replacement Services</h3>
        <p>We provide same-day spring replacement throughout Bergen County including Maywood, Hackensack, Paramus, Fair Lawn, Ridgewood, and surrounding areas.</p>

        <h3>Passaic County Coverage</h3>
        <p>Our Passaic County service area includes Clifton, Paterson, Passaic, Wayne, and West Milford with fast response times for emergency spring repairs.</p>

        <h2>Spring Lifespan in New Jersey</h2>
        <p>Most garage door springs last 7-9 years or 10,000 cycles. However, New Jersey's climate can reduce this lifespan. Cold winters make metal brittle, while humidity in summer can cause rust.</p>

        <h2>Contact ProLine Garage Door LLC</h2>
        <p>Don't wait for a complete spring failure. If you notice any of these signs, call us at (201) 503-3118 for professional spring replacement service across Northern and Central New Jersey.</p>
      `
    },
    2: {
      title: "Garage Door Opener Types: Belt Drive vs Chain Drive vs Screw Drive",
      date: "January 22, 2026",
      readTime: "7 min read",
      category: "Buying Guide",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&auto=format&fit=crop&q=80",
      content: `
        <h2>Choosing the Right Garage Door Opener for Your NJ Home</h2>
        <p>Selecting a garage door opener might seem straightforward, but there are important differences between the three main types. At ProLine Garage Door LLC, we help homeowners in Bergen County, Essex County, and Morris County choose the right opener for their needs.</p>

        <h2>Belt Drive Openers: The Quiet Choice</h2>
        <p>Belt drive openers use a rubber belt to move your garage door up and down. These are the quietest option available and are perfect for homes in Hackensack, Morristown, and Clifton where the garage is attached to living spaces.</p>

        <h3>Pros of Belt Drive Openers:</h3>
        <ul>
          <li><strong>Ultra-Quiet Operation:</strong> Ideal if you have bedrooms above or adjacent to the garage</li>
          <li><strong>Smooth Performance:</strong> Less vibration than chain drives</li>
          <li><strong>Low Maintenance:</strong> Rubber belts don't need lubrication</li>
          <li><strong>Durability:</strong> Modern belts last 10-15 years</li>
        </ul>

        <h3>Cons of Belt Drive Openers:</h3>
        <ul>
          <li><strong>Higher Cost:</strong> Typically $100-200 more than chain drives</li>
          <li><strong>Not for Heavy Doors:</strong> Best for standard weight doors</li>
        </ul>

        <h3>Popular Models in New Jersey:</h3>
        <ul>
          <li>LiftMaster 8550W Elite Series (Wi-Fi enabled)</li>
          <li>Chamberlain B1381 (Battery backup)</li>
          <li>Genie SilentMax 1200 (Quiet operation)</li>
        </ul>

        <h2>Chain Drive Openers: The Reliable Workhorse</h2>
        <p>Chain drive openers are the most common type we install in Maywood, Paramus, and Wayne. They use a metal chain similar to a bicycle chain to lift the door.</p>

        <h3>Pros of Chain Drive Openers:</h3>
        <ul>
          <li><strong>Affordability:</strong> Most cost-effective option</li>
          <li><strong>Durability:</strong> Can handle heavy doors including insulated and wood doors</li>
          <li><strong>Reliable Performance:</strong> Proven technology that works in all conditions</li>
          <li><strong>Easy to Repair:</strong> Parts readily available</li>
        </ul>

        <h3>Cons of Chain Drive Openers:</h3>
        <ul>
          <li><strong>Noise:</strong> Louder than belt or screw drives</li>
          <li><strong>Vibration:</strong> Can transfer to attached living spaces</li>
          <li><strong>Maintenance:</strong> Requires periodic lubrication</li>
        </ul>

        <h3>Best For:</h3>
        <ul>
          <li>Detached garages in Bergen County</li>
          <li>Heavy insulated doors common in North Jersey</li>
          <li>Budget-conscious homeowners</li>
        </ul>

        <h2>Screw Drive Openers: The Low-Maintenance Option</h2>
        <p>Screw drive openers use a threaded steel rod that rotates to move a trolley that lifts the door. These are less common but have specific advantages.</p>

        <h3>Pros of Screw Drive Openers:</h3>
        <ul>
          <li><strong>Minimal Maintenance:</strong> Fewer moving parts to maintain</li>
          <li><strong>Fast Operation:</strong> Typically faster than chain or belt drives</li>
          <li><strong>Simple Design:</strong> Less likely to malfunction</li>
        </ul>

        <h3>Cons of Screw Drive Openers:</h3>
        <ul>
          <li><strong>Temperature Sensitive:</strong> Performance can vary in extreme NJ weather</li>
          <li><strong>Moderate Noise:</strong> Quieter than chain but louder than belt</li>
          <li><strong>Limited Availability:</strong> Fewer models to choose from</li>
        </ul>

        <h2>Smart Garage Door Openers for NJ Homes</h2>
        <p>All three opener types now come with Wi-Fi connectivity options. This allows you to control and monitor your garage door from your smartphone - perfect for busy families in Morristown, Clifton, and surrounding areas.</p>

        <h3>Smart Features to Consider:</h3>
        <ul>
          <li>Smartphone app control</li>
          <li>Real-time notifications when door opens/closes</li>
          <li>Guest access codes</li>
          <li>Integration with home automation systems</li>
          <li>Battery backup for power outages (common in NJ storms)</li>
        </ul>

        <h2>Horsepower Requirements for NJ Homes</h2>
        <p>Most residential garage doors in New Jersey require 1/2 HP or 3/4 HP openers:</p>
        <ul>
          <li><strong>1/2 HP:</strong> Single car doors, lightweight doors</li>
          <li><strong>3/4 HP:</strong> Double car doors, insulated doors, wood doors</li>
          <li><strong>1 HP or more:</strong> Oversized doors, commercial applications</li>
        </ul>

        <h2>Professional Installation Matters</h2>
        <p>While some homeowners attempt DIY installation, professional installation ensures proper safety sensor alignment, force adjustments, and optimal performance. ProLine Garage Door LLC installs all major brands throughout Bergen, Passaic, and Morris Counties.</p>

        <h2>Get Expert Advice</h2>
        <p>Still not sure which opener is right for your home? Contact ProLine Garage Door LLC at (201) 503-3118. We'll assess your door type, weight, and usage patterns to recommend the perfect opener for your needs.</p>
      `
    },
    3: {
      title: "Garage Door Safety: Protecting Your Family in New Jersey",
      date: "January 18, 2026",
      readTime: "6 min read",
      category: "Safety",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80",
      content: `
        <h2>Why Garage Door Safety Matters</h2>
        <p>Your garage door is the largest moving object in your home, weighing 200-500 pounds. According to the U.S. Consumer Product Safety Commission, garage doors cause approximately 20,000 injuries annually. As New Jersey's trusted garage door experts, ProLine Garage Door LLC prioritizes safety in every service call across Bergen County, Passaic County, and Essex County.</p>

        <h2>Safety Sensors: Your First Line of Defense</h2>
        <p>Modern garage doors come equipped with photoelectric sensors, typically installed 4-6 inches from the ground on both sides of the door opening.</p>

        <h3>How Safety Sensors Work:</h3>
        <p>These sensors project an invisible beam across the door opening. If anything breaks this beam while the door is closing, it immediately reverses direction. This prevents crushing injuries to children, pets, or property.</p>

        <h3>Testing Your Sensors (Do This Monthly):</h3>
        <ol>
          <li>Open your garage door fully</li>
          <li>Place a cardboard box or 2x4 board in the door's path</li>
          <li>Press the close button</li>
          <li>The door should reverse when it contacts the object</li>
        </ol>

        <p><strong>Important:</strong> If your door doesn't reverse, call ProLine Garage Door LLC immediately at (201) 503-3118. This is a serious safety hazard common in older homes in Maywood, Hackensack, and Morristown.</p>

        <h2>The Danger of Broken Springs</h2>
        <p>Garage door springs are under extreme tension - typically 200-400 pounds. When a spring breaks, it can cause serious injury or death.</p>

        <h3>WARNING Signs of Spring Problems:</h3>
        <ul>
          <li>Loud bang or popping noise</li>
          <li>Door won't open or opens partially</li>
          <li>Visible gap in the spring</li>
          <li>Door hangs crooked</li>
        </ul>

        <p><strong>NEVER attempt DIY spring replacement.</strong> This is the #1 cause of garage door-related injuries. Always call a licensed professional serving Bergen County, Passaic County, and Morris County.</p>

        <h2>Emergency Release Safety</h2>
        <p>Every garage door opener has a red emergency release cord. While essential for power outages, this can be dangerous if misused.</p>

        <h3>Safe Emergency Release Procedure:</h3>
        <ol>
          <li>Only use with door in DOWN position</li>
          <li>NEVER pull the release with door open or partially open</li>
          <li>Pull straight down, not at an angle</li>
          <li>Door should move freely - if stuck, call a professional</li>
        </ol>

        <h3>Why This Matters:</h3>
        <p>If you pull the emergency release while the door is up and the spring is broken, the door can crash down at full speed. This has caused fatalities in New Jersey and nationwide.</p>

        <h2>Child Safety: Keeping Kids Safe</h2>
        <p>Children are naturally curious about garage doors. Follow these rules to keep families in Clifton, Paramus, and Wayne safe:</p>

        <h3>Essential Child Safety Rules:</h3>
        <ul>
          <li><strong>Never Let Children Play Near the Door:</strong> Treat it like you would a car in the driveway</li>
          <li><strong>Keep Remotes Out of Reach:</strong> Store wall buttons at least 5 feet high</li>
          <li><strong>Teach "Never Run Under":</strong> Train children to never run or play under a moving door</li>
          <li><strong>Watch for Fingers:</strong> Pinch points between door sections can cause severe injuries</li>
        </ul>

        <h2>Annual Safety Inspections</h2>
        <p>Professional annual inspections can prevent 90% of garage door accidents. During an inspection, ProLine Garage Door LLC checks:</p>

        <ul>
          <li>Safety sensor alignment and function</li>
          <li>Spring condition and tension</li>
          <li>Cable condition and attachment</li>
          <li>Track alignment</li>
          <li>Hardware tightness</li>
          <li>Opener force settings</li>
          <li>Emergency release operation</li>
        </ul>

        <h2>Modern Safety Features</h2>
        <p>Newer garage door openers installed in Bergen County, Passaic County, and Morris County homes include additional safety features:</p>

        <h3>Force Settings:</h3>
        <p>Openers can detect resistance and automatically reverse. We adjust these to optimal sensitivity during installation.</p>

        <h3>Rolling Code Technology:</h3>
        <p>Prevents thieves from copying your remote signal - important for security in urban New Jersey areas.</p>

        <h3>Battery Backup:</h3>
        <p>Ensures your door works during power outages, which are common during NJ storms. Critical for attached garages where the door might be your only exit.</p>

        <h3>Manual Lock Disable:</h3>
        <p>Prevents someone from manually opening your door from outside when you're away.</p>

        <h2>What To Do In An Emergency</h2>
        <p>If someone is trapped under a garage door:</p>
        <ol>
          <li>Press the wall button or remote to reverse the door immediately</li>
          <li>If door won't reverse, pull the emergency release</li>
          <li>Call 911 if there's any injury</li>
          <li>Call ProLine Garage Door LLC at (201) 503-3118 for immediate repair</li>
        </ol>

        <h2>Schedule Your Safety Inspection Today</h2>
        <p>Don't wait for an accident. Contact ProLine Garage Door LLC at (201) 503-3118 for a comprehensive safety inspection. We serve all of Bergen County, Passaic County, Essex County, and Morris County with same-day service available.</p>

        <p><strong>Remember:</strong> A safe garage door is a properly maintained garage door. Trust the experts who've been keeping New Jersey families safe for over 10 years.</p>
      `
    },
    4: {
      title: "DIY Garage Door Maintenance Checklist (With Safety Warnings)",
      date: "January 15, 2026",
      readTime: "8 min read",
      category: "Maintenance",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&auto=format&fit=crop&q=80",
      content: `
        <h2>Monthly Maintenance You Can Safely Do Yourself</h2>
        <p>Regular maintenance can extend your garage door's life and prevent costly repairs. However, some maintenance is dangerous and should only be done by professionals. ProLine Garage Door LLC serves Bergen County, Passaic County, and Morris County homeowners with both DIY guidance and professional service.</p>

        <h2>⚠️ CRITICAL SAFETY WARNING ⚠️</h2>
        <div style="background: #fee; border-left: 4px solid #c00; padding: 15px; margin: 20px 0;">
          <h3 style="color: #c00;">NEVER ATTEMPT THESE REPAIRS:</h3>
          <ul>
            <li><strong>Spring Replacement:</strong> Springs are under 200-400 lbs of tension and can cause death or serious injury</li>
            <li><strong>Cable Replacement:</strong> Cables work with springs and are equally dangerous</li>
            <li><strong>Bottom Bracket Adjustment:</strong> Connected to spring tension</li>
            <li><strong>Track Removal:</strong> Can cause door collapse</li>
          </ul>
          <p><strong>If you encounter any of these issues, call ProLine Garage Door LLC at (201) 503-3118</strong></p>
        </div>

        <h2>Monthly Visual Inspection (5 Minutes)</h2>
        <p>Walk through this checklist every month - it only takes 5 minutes and can save thousands in repairs.</p>

        <h3>What to Look For:</h3>
        <ul>
          <li><strong>Springs:</strong> Look for gaps (sign of breakage) or rust. <em>Do not touch!</em></li>
          <li><strong>Cables:</strong> Check for fraying or broken strands. <em>Do not touch!</em></li>
          <li><strong>Rollers:</strong> Look for cracks, chips, or worn wheels</li>
          <li><strong>Tracks:</strong> Check for dents, bends, or debris</li>
          <li><strong>Hardware:</strong> Look for loose bolts or screws</li>
          <li><strong>Weatherstripping:</strong> Check for cracks or separation from door</li>
        </ul>

        <h2>Safe DIY Task #1: Lubrication (Every 3 Months)</h2>
        <p>Proper lubrication reduces wear and noise. This is safe and easy for homeowners in Maywood, Hackensack, and Clifton.</p>

        <h3>What You'll Need:</h3>
        <ul>
          <li>White lithium grease or garage door lubricant spray</li>
          <li>Clean cloth</li>
          <li>Step ladder</li>
        </ul>

        <h3>Step-by-Step Process:</h3>
        <ol>
          <li><strong>Close the door completely</strong> - never work on an open door</li>
          <li><strong>Roller Stems:</strong> Apply lubricant to metal roller stems (not the wheels if they're nylon)</li>
          <li><strong>Hinges:</strong> Put a drop of lubricant on each hinge pivot point</li>
          <li><strong>Tracks:</strong> Wipe down tracks with a clean cloth, but don't lubricate the inside</li>
          <li><strong>Springs:</strong> Lightly coat torsion springs (the ones above the door) with spray lubricant. <em>DO NOT touch or adjust!</em></li>
          <li><strong>Lock Mechanism:</strong> Apply lubricant to any manual locks</li>
          <li><strong>Opener Chain/Belt:</strong> For chain drives, apply lubricant to the chain. Skip this for belt drives.</li>
        </ol>

        <h3>Pro Tip for New Jersey Weather:</h3>
        <p>Lubricate more frequently in winter (every 2 months) as cold weather can cause lubricants to harden.</p>

        <h2>Safe DIY Task #2: Testing Safety Features (Monthly)</h2>
        <p>Federal law requires all garage door openers manufactured after 1993 to have safety features. Test these monthly.</p>

        <h3>Photo-Eye Sensor Test:</h3>
        <ol>
          <li>Open the garage door</li>
          <li>Place a cardboard box in the door's path</li>
          <li>Press close button</li>
          <li>Door should reverse when it touches the box</li>
        </ol>

        <p><strong>If it doesn't reverse:</strong> Check for sensor misalignment (LED lights should be solid, not blinking). If still not working, call (201) 503-3118.</p>

        <h3>Force Setting Test:</h3>
        <ol>
          <li>Close door halfway</li>
          <li>Hold bottom of door (with both hands on the outside)</li>
          <li>Door should immediately reverse with light resistance</li>
        </ol>

        <p><strong>If door doesn't reverse:</strong> This is a serious safety issue. Call ProLine Garage Door LLC immediately.</p>

        <h2>Safe DIY Task #3: Cleaning (Every 6 Months)</h2>
        <p>A clean door operates better and lasts longer - important for homes in Bergen County's varying climate.</p>

        <h3>Door Exterior:</h3>
        <ul>
          <li>Wash with car wash soap and water</li>
          <li>Rinse thoroughly</li>
          <li>Dry with soft cloth</li>
          <li>For wood doors: Apply wood cleaner and sealant annually</li>
        </ul>

        <h3>Track Cleaning:</h3>
        <ul>
          <li>Wipe down tracks with damp cloth</li>
          <li>Remove any debris or spiderwebs</li>
          <li>Check for moisture or rust - common in humid NJ summers</li>
        </ul>

        <h3>Sensor Cleaning:</h3>
        <ul>
          <li>Gently wipe photo-eye lenses with soft, dry cloth</li>
          <li>Remove any dust, spiderwebs, or debris</li>
          <li>Don't use cleaners - can damage sensors</li>
        </ul>

        <h2>Safe DIY Task #4: Tightening Hardware (Every 6 Months)</h2>
        <p>Vibration from daily use can loosen hardware over time.</p>

        <h3>What You Can Safely Tighten:</h3>
        <ul>
          <li><strong>Track Brackets:</strong> Use socket wrench to snug bolts</li>
          <li><strong>Hinge Screws:</strong> Check and tighten if loose</li>
          <li><strong>Opener Mounting Bolts:</strong> Ensure opener is secure to ceiling</li>
        </ul>

        <h3>⚠️ DO NOT TOUCH:</h3>
        <ul>
          <li>Bottom brackets (connected to cables)</li>
          <li>Spring mounting brackets</li>
          <li>Cable drums or clips</li>
        </ul>

        <h2>Safe DIY Task #5: Weatherstripping Replacement</h2>
        <p>Weatherstripping keeps New Jersey's cold air out in winter and maintains comfortable temperatures.</p>

        <h3>Signs You Need Replacement:</h3>
        <ul>
          <li>Cracks or brittleness</li>
          <li>Gaps when door is closed</li>
          <li>Drafts or light visible under door</li>
        </ul>

        <h3>DIY Replacement Process:</h3>
        <ol>
          <li>Measure bottom of door</li>
          <li>Purchase correct weatherstripping from hardware store</li>
          <li>Remove old stripping</li>
          <li>Clean track channel</li>
          <li>Slide new stripping into channel</li>
          <li>Trim excess</li>
        </ol>

        <h2>When to Call a Professional</h2>
        <p>Contact ProLine Garage Door LLC at (201) 503-3118 if you notice:</p>
        <ul>
          <li>Door operates slower than usual</li>
          <li>Door hangs crooked or uneven</li>
          <li>Loud grinding, squealing, or banging noises</li>
          <li>Door doesn't stay open (spring issue)</li>
          <li>Visible damage to cables, springs, or hardware</li>
          <li>Safety sensors aren't working properly</li>
          <li>Door is difficult to open manually</li>
        </ul>

        <h2>Professional Tune-Up Service</h2>
        <p>Even with regular DIY maintenance, we recommend professional tune-ups annually. ProLine Garage Door LLC's comprehensive service includes:</p>
        <ul>
          <li>Spring tension inspection and adjustment</li>
          <li>Complete safety test</li>
          <li>Track alignment</li>
          <li>Opener force adjustment</li>
          <li>Professional-grade lubrication</li>
          <li>Hardware inspection and tightening</li>
        </ul>

        <h2>Special Considerations for NJ Climate</h2>
        <p>New Jersey's weather requires extra attention:</p>

        <h3>Winter Maintenance:</h3>
        <ul>
          <li>Keep tracks clear of ice and snow</li>
          <li>Check weatherstripping more frequently</li>
          <li>Lubricate monthly instead of quarterly</li>
        </ul>

        <h3>Summer Maintenance:</h3>
        <ul>
          <li>Check for rust due to humidity</li>
          <li>Inspect wood doors for warping</li>
          <li>Ensure good ventilation in attached garages</li>
        </ul>

        <h2>Schedule Your Professional Service</h2>
        <p>Ready for a professional tune-up? ProLine Garage Door LLC provides comprehensive maintenance service throughout Bergen County, Passaic County, Essex County, and Morris County. Call (201) 503-3118 or visit our website for same-day service.</p>

        <p><strong>Remember:</strong> When in doubt, call a professional. Your safety is worth more than saving a few dollars on DIY repairs.</p>
      `
    }
  };

  const post = blogPosts[postId] || blogPosts[1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/fe741096e_logo-proline.png" 
                alt="ProLine Garage Door LLC" 
                className="h-10 md:h-12 w-auto"
              />
            </Link>
            <div className="flex gap-3">
              <Link to={createPageUrl('Blog')}>
                <Button variant="outline" className="border-slate-300">
                  ← Back to Blog
                </Button>
              </Link>
              <a href="tel:2015033118">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-ul:list-disc prose-ul:ml-6 prose-ol:list-decimal prose-ol:ml-6 prose-li:text-slate-700 prose-strong:text-slate-900"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Need Garage Door Service?</h3>
              <p className="text-blue-100 mb-6">
                ProLine Garage Door LLC provides professional garage door repair and maintenance across Bergen County, Passaic County, Essex County, and Morris County.
              </p>
              <div className="flex gap-4 flex-col sm:flex-row">
                <a href="tel:2015033118" className="flex-1">
                  <Button className="w-full bg-white text-blue-900 hover:bg-slate-100 text-lg py-6">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (201) 503-3118
                  </Button>
                </a>
                <Link to={createPageUrl('Home')} className="flex-1">
                  <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white/10 text-lg py-6">
                    Get Free Quote <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(blogPosts)
              .filter(([id]) => id !== postId)
              .slice(0, 3)
              .map(([id, relatedPost]) => (
                <Link key={id} to={`${createPageUrl('BlogPost')}?id=${id}`}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <span className="text-sm text-blue-600 font-semibold">{relatedPost.category}</span>
                      <h4 className="text-xl font-bold mt-2 mb-3 line-clamp-2">{relatedPost.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="w-4 h-4" />
                        {relatedPost.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}