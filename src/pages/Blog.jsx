import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Home as HomeIcon, DoorOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Signs Your Garage Door Spring Needs Replacement in NJ",
      excerpt: "Living in New Jersey means dealing with temperature changes. Learn the warning signs that indicate your garage door spring is about to fail and when to call for professional service in Bergen County.",
      image: "https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=800&auto=format&fit=crop&q=80",
      date: "January 25, 2026",
      readTime: "5 min read",
      category: "Maintenance"
    },
    {
      id: 2,
      title: "Garage Door Opener Types: Belt Drive vs Chain Drive vs Screw Drive",
      excerpt: "A comprehensive comparison of garage door opener types available in New Jersey. Learn which opener is best for your Maywood, Hackensack, or Morristown home.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80",
      date: "January 22, 2026",
      readTime: "7 min read",
      category: "Buying Guide"
    },
    {
      id: 3,
      title: "Garage Door Safety: Protecting Your Family in New Jersey",
      excerpt: "Essential safety tips every New Jersey homeowner should know. From sensor alignment to emergency release, keep your family safe with professional maintenance.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
      date: "January 18, 2026",
      readTime: "6 min read",
      category: "Safety"
    },
    {
      id: 4,
      title: "DIY Garage Door Maintenance Checklist (With Safety Warnings)",
      excerpt: "Monthly maintenance tasks you can safely do yourself, plus critical warnings about when to call a professional. Perfect for homeowners in Bergen, Passaic, and Morris Counties.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80",
      date: "January 15, 2026",
      readTime: "8 min read",
      category: "Maintenance"
    },
    {
      id: 5,
      title: "Why Your Garage Door Won't Open: 10 Common Problems & Solutions",
      excerpt: "Troubleshooting guide for the most common garage door issues in New Jersey homes. Learn what you can fix yourself and when to call ProLine Garage Door LLC.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
      date: "January 12, 2026",
      readTime: "10 min read",
      category: "Troubleshooting"
    },
    {
      id: 6,
      title: "Garage Door Insulation: Is It Worth It in New Jersey?",
      excerpt: "With NJ's cold winters and hot summers, proper garage door insulation can save you hundreds on energy bills. Learn about R-values and insulation types.",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop&q=80",
      date: "January 8, 2026",
      readTime: "6 min read",
      category: "Energy Efficiency"
    },
    {
      id: 7,
      title: "Torsion Springs vs Extension Springs: Which Does Your Garage Door Have?",
      excerpt: "Understanding the difference between torsion and extension springs is crucial for NJ homeowners. Learn which type you have and why it matters for repairs.",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&auto=format&fit=crop&q=80",
      date: "January 5, 2026",
      readTime: "5 min read",
      category: "Education"
    },
    {
      id: 8,
      title: "How to Prepare Your Garage Door for NJ Winter Weather",
      excerpt: "Protect your garage door from freezing temperatures, snow, and ice. Essential winterization tips for homeowners in Bergen, Passaic, and Morris Counties.",
      image: "https://images.unsplash.com/photo-1483086431886-3590a88317fe?w=800&auto=format&fit=crop&q=80",
      date: "January 2, 2026",
      readTime: "7 min read",
      category: "Seasonal"
    },
    {
      id: 9,
      title: "Smart Garage Door Openers: Wi-Fi Control for Your NJ Home",
      excerpt: "Upgrade to a smart garage door opener with smartphone control, scheduling, and alerts. Perfect for busy families in Hackensack, Paramus, and surrounding areas.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80",
      date: "December 28, 2025",
      readTime: "6 min read",
      category: "Technology"
    },
    {
      id: 10,
      title: "Garage Door Cable Replacement: When DIY Becomes Dangerous",
      excerpt: "WARNING: Broken cables are extremely dangerous. Learn why you should NEVER attempt DIY cable replacement and what to look for before calling a professional.",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format&fit=crop&q=80",
      date: "December 22, 2025",
      readTime: "5 min read",
      category: "Safety"
    },
    {
      id: 11,
      title: "Garage Door Off Track: Emergency Response Guide for NJ Homeowners",
      excerpt: "What to do when your garage door comes off track. Emergency safety steps and why you need immediate professional service in Bergen County.",
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop&q=80",
      date: "December 18, 2025",
      readTime: "4 min read",
      category: "Emergency"
    },
    {
      id: 12,
      title: "Garage Door Materials Guide: Steel, Wood, Aluminum, and Composite",
      excerpt: "Choosing the right material for your NJ climate. Compare durability, maintenance, and cost of different garage door materials available in New Jersey.",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&auto=format&fit=crop&q=80",
      date: "December 15, 2025",
      readTime: "9 min read",
      category: "Buying Guide"
    }
  ];

  const categories = ["All", "Maintenance", "Safety", "Buying Guide", "Troubleshooting", "Emergency", "Education", "Technology", "Seasonal"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940c0d91636ce363ecbf035/077bd7ae6_logo.png" 
                alt="ProLine Garage Door LLC" 
                className="h-10 md:h-12 w-auto"
              />
            </Link>
            <Link to={createPageUrl('Home')}>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                ← Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Garage Door Expertise Blog</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Expert tips, guides, and insights to help you maintain and improve your garage door
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-[73px] z-30">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}