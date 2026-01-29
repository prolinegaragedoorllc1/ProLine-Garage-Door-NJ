import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Home as HomeIcon, DoorOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop",
      title: "Complete Garage Door Replacement",
      category: "Replacement",
      description: "Replaced old damaged door with modern insulated model"
    },
    {
      id: 2,
      before: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
      title: "Spring Replacement & Tune-up",
      category: "Repair",
      description: "Replaced broken springs and performed full maintenance"
    },
    {
      id: 3,
      before: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop",
      title: "Opener Installation",
      category: "Installation",
      description: "Installed new smart garage door opener system"
    },
    {
      id: 4,
      before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop",
      title: "Track Realignment",
      category: "Repair",
      description: "Fixed off-track door and replaced damaged rollers"
    },
    {
      id: 5,
      before: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
      title: "Custom Door Installation",
      category: "Replacement",
      description: "Installed custom wood-look carriage style door"
    },
    {
      id: 6,
      before: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop",
      title: "Commercial Door Repair",
      category: "Commercial",
      description: "Repaired and upgraded commercial overhead door"
    }
  ];

  const categories = ['All', 'Replacement', 'Repair', 'Installation', 'Commercial'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

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
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work Gallery</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              See the transformations we've made for our satisfied customers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-[73px] z-30">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                  filter === category
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

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                      onClick={() => setSelectedImage(project)}>
                  <div className="relative">
                    <div className="grid grid-cols-2">
                      <div className="relative h-64">
                        <img
                          src={project.before}
                          alt={`${project.title} - Before`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Before
                        </div>
                      </div>
                      <div className="relative h-64">
                        <img
                          src={project.after}
                          alt={`${project.title} - After`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          After
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                      <p className="text-slate-600">{project.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <img
                    src={selectedImage.before}
                    alt="Before"
                    className="w-full h-auto rounded-lg"
                  />
                  <span className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
                    BEFORE
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={selectedImage.after}
                    alt="After"
                    className="w-full h-auto rounded-lg"
                  />
                  <span className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold">
                    AFTER
                  </span>
                </div>
              </div>
              <div className="text-white text-center mt-6">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-slate-300">{selectedImage.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}