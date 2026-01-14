
import React, { useState } from 'react';
// Fix: Bypassing environment-specific Framer Motion type resolution issues by casting to any
import { motion as motionBase, AnimatePresence } from 'framer-motion';
const motion = motionBase as any;
import { ArrowRight, Plus } from 'lucide-react';

type ProjectCategory = 'All' | 'Interior' | 'Exterior' | 'Commercial';

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  location: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "The Royal Villa",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63bac817?auto=format&fit=crop&q=80&w=1200",
    location: "Gomti Nagar, Lucknow"
  },
  {
    id: 2,
    title: "Luxe Penthouse",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    location: "Hazratganj, Lucknow"
  },
  {
    id: 3,
    title: "Corporate Headquarters",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    location: "Vibhuti Khand"
  },
  {
    id: 4,
    title: "Modern Estate",
    category: "Exterior",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    location: "Sushant Golf City"
  },
  {
    id: 5,
    title: "Boutique Showroom",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1200",
    location: "Indira Nagar"
  },
  {
    id: 6,
    title: "Zen Garden Suite",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1200",
    location: "Aliganj, Lucknow"
  }
];

const categories: ProjectCategory[] = ['All', 'Interior', 'Exterior', 'Commercial'];

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 md:py-40 bg-[#EEE9DF] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 mb-6"
            >
              <span className="w-12 h-[2px] bg-[#FFB162]" />
              <span className="text-xs uppercase tracking-[0.5em] text-[#FFB162] font-bold">Our Portfolio</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-[#1B2632] mb-6"
            >
              Our Signature Projects
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#2C3B4D]/40 text-sm uppercase tracking-[0.3em] font-bold"
            >
              Residential & Commercial Spaces We've Transformed
            </motion.p>
          </div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-x-8 gap-y-4 border-b border-[#C9C1B1]/30 pb-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold transition-all relative pb-2 ${
                  activeFilter === cat ? 'text-[#FFB162]' : 'text-[#2C3B4D]/40 hover:text-[#1B2632]'
                }`}
              >
                {cat}
                {activeFilter === cat && (
                  <motion.div 
                    layoutId="filter-underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB162]"
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-[4/5] overflow-hidden bg-[#C9C1B1]/10 border border-[#C9C1B1]/20 shadow-sm"
              >
                {/* Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#1B2632]/80 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out flex flex-col justify-end p-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-3">
                       <span className="w-8 h-[2px] bg-[#FFB162]" />
                       <span className="text-[10px] uppercase tracking-[0.3em] text-[#FFB162] font-bold">{project.category}</span>
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white">{project.title}</h3>
                    <p className="text-white/50 text-xs tracking-widest uppercase font-semibold">{project.location}</p>
                    
                    <button className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.5em] font-bold text-[#FFB162] pt-4 hover:text-white transition-colors">
                      <span>View Project</span>
                      <ArrowRight size={14} />
                    </button>
                  </motion.div>
                </div>

                {/* Hover Accent Icon */}
                <div className="absolute top-8 right-8 w-12 h-12 glass border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:rotate-90">
                  <Plus className="text-[#FFB162]" size={20} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
