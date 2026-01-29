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
      title: "5 Signs Your Garage Door Spring Needs Replacement",
      excerpt: "Learn the warning signs that indicate your garage door spring is about to fail and what to do about it.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
      date: "January 15, 2026",
      readTime: "5 min read",
      category: "Maintenance"
    },
    {
      id: 2,
      title: "How to Choose the Right Garage Door Opener",
      excerpt: "A comprehensive guide to selecting the perfect garage door opener for your home and needs.",
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop",
      date: "January 10, 2026",
      readTime: "7 min read",
      category: "Buying Guide"
    },
    {
      id: 3,
      title: "Garage Door Safety: Essential Tips for Families",
      excerpt: "Keep your family safe with these essential garage door safety tips and best practices.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
      date: "January 5, 2026",
      readTime: "6 min read",
      category: "Safety"
    },
    {
      id: 4,
      title: "DIY Garage Door Maintenance Checklist",
      excerpt: "Follow this monthly maintenance checklist to keep your garage door in perfect condition.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
      date: "December 28, 2025",
      readTime: "8 min read",
      category: "Maintenance"
    },
    {
      id: 5,
      title: "Understanding Garage Door Insulation Benefits",
      excerpt: "Discover how proper garage door insulation can save you money and improve comfort.",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop",
      date: "December 20, 2025",
      readTime: "5 min read",
      category: "Energy Efficiency"
    },
    {
      id: 6,
      title: "Common Garage Door Problems and Quick Fixes",
      excerpt: "Troubleshoot the most common garage door issues with our expert solutions.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop",
      date: "December 15, 2025",
      readTime: "10 min read",
      category: "Troubleshooting"
    }
  ];

  const categories = ["All", "Maintenance", "Safety", "Buying Guide", "Energy Efficiency", "Troubleshooting"];
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
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg shadow-lg">
                <div className="relative">
                  <HomeIcon className="w-6 h-6 text-white" />
                  <DoorOpen className="w-3 h-3 text-orange-400 absolute -bottom-0.5 -right-0.5" />
                </div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-slate-900">
                  ProLine Garage Door <span className="text-xs text-slate-500">LLC</span>
                </h1>
              </div>
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