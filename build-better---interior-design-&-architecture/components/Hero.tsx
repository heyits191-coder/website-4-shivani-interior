import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full"
        >
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
              alt="Modern Interior Design"
              className="w-full h-full object-cover opacity-70"
            />
        </motion.div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-transparent to-dark-900" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
             <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tight mb-8 font-bold">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-stone-400">DESIGN</span>
              <span className="block text-gold-200">THAT</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-stone-400">SPEAKS.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-2xl text-stone-200 max-w-xl mb-12 font-light tracking-wide leading-relaxed"
          >
            Elevating lifestyles through visionary architecture and bespoke interiors. 
            <span className="text-gold-400 font-normal"> Build Better</span> creates spaces that inspire.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-white text-dark-900 rounded-none font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-gold-400"
            >
              <span className="relative z-10 flex items-center gap-3">
                View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
              </span>
            </a>
            
            <a 
              href="#contact"
              className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 transition-colors uppercase tracking-widest text-sm font-semibold backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      {/* Decorative Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 right-12 hidden lg:block"
      >
         <div className="w-40 h-40 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md bg-white/5 relative group">
            <div className="absolute inset-0 rounded-full border border-gold-400/30 scale-110 group-hover:scale-125 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
            <div className="text-center">
                <span className="block text-gold-400 font-bold text-3xl font-serif">10+</span>
                <span className="block text-white text-xs tracking-widest uppercase mt-1">Years of<br/>Excellence</span>
            </div>
         </div>
      </motion.div>
    </section>
  );
};