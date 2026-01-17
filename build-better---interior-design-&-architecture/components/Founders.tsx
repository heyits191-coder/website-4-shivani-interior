import React from 'react';
import { motion } from 'framer-motion';

export const Founders: React.FC = () => {
  return (
    <section className="py-24 bg-dark-800 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
        >
             <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">THE <span className="text-gold-400">VISIONARIES</span></h2>
             <p className="text-stone-400 max-w-xl mx-auto">The minds behind the mastery.</p>
        </motion.div>

        {/* Founders Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Founder 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm mb-6 relative">
               <div className="absolute inset-0 bg-gold-900/10 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                 alt="Parth Gupta" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
               />
            </div>
            <h3 className="text-2xl text-white font-serif mb-1">Parth Gupta</h3>
            <p className="text-gold-400 text-sm tracking-widest uppercase mb-4 font-bold">Founder & Lead Architect</p>
            <p className="text-stone-400 text-sm leading-relaxed border-t border-white/10 pt-4">
              With a vision for structural elegance, Parth brings years of architectural expertise, ensuring every project stands on a foundation of precision and beauty.
            </p>
          </motion.div>

          {/* Founder 2 - Staggered layout on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="group relative md:mt-24"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm mb-6 relative">
               <div className="absolute inset-0 bg-gold-900/10 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
               <img 
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                 alt="Pallavi" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
               />
            </div>
            <h3 className="text-2xl text-white font-serif mb-1">Pallavi</h3>
            <p className="text-gold-400 text-sm tracking-widest uppercase mb-4 font-bold">Co-Founder & Interior Head</p>
            <p className="text-stone-400 text-sm leading-relaxed border-t border-white/10 pt-4">
              Pallavi breathes life into spaces. Her keen eye for textures, lighting, and fabrics creates interiors that are warm, inviting, and distinctly luxurious.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};