import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Intro Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
              WHO <span className="text-gold-400">WE ARE</span>
            </h2>
            <div className="h-1 w-24 bg-gold-500"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-stone-400 text-lg leading-relaxed"
          >
            At Build Better, we believe design is not just about aesthetics—it's about creating 
            environments that enhance the human experience. Based in the heart of Mumbai, 
            our firm bridges the gap between functional architecture and artistic interior design.
          </motion.p>
        </div>
      </div>
    </section>
  );
};