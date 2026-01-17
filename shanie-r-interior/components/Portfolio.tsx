import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO } from '../constants';

const categories = ['All', 'Kitchen', 'Wardrobe', 'Living', 'Commercial'];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-gold-600 font-bold tracking-[0.2em] text-xs uppercase mb-2 block">Our Masterpieces</span>
            <h2 className="font-serif text-4xl md:text-6xl text-navy-900">Latest Projects</h2>
          </motion.div>
          
          {/* Filter Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-wrap gap-2"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                  filter === cat 
                    ? 'text-white shadow-lg shadow-navy-900/20' 
                    : 'text-gray-500 hover:text-navy-900 bg-white'
                }`}
              >
                <div className={`absolute inset-0 transition-all duration-300 ${filter === cat ? 'bg-navy-900' : 'bg-transparent group-hover:bg-gray-200'}`}></div>
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-[4/3]"
              >
                <motion.div 
                    className="w-full h-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    />
                </motion.div>
                
                {/* Modern Overlay */}
                <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="inline-block px-3 py-1 bg-gold-500 text-navy-950 text-[10px] font-bold uppercase tracking-widest rounded-sm mb-3">
                        {item.category}
                    </span>
                    <h3 className="text-white font-serif text-2xl">
                        {item.title}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-navy-200 text-navy-900 font-semibold rounded-full hover:bg-navy-900 hover:text-white transition-all duration-300 group">
            View All Projects
            <motion.span 
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;