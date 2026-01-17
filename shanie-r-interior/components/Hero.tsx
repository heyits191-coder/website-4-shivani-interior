
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const yBg = useTransform(scrollY, [0, 1000], [0, 400]);
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  const wordAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + (i * 0.1),
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <section ref={containerRef} id="home" className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-navy-950">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <div 
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80")',
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900/90"></div>
      </motion.div>

      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="container mx-auto px-4 z-10 text-center text-white"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block py-1 px-4 border border-gold-500/50 text-gold-400 rounded-full text-xs md:text-sm tracking-[0.2em] uppercase bg-navy-900/40 backdrop-blur-md font-medium">
            Est. 2012 | Los Angeles & California
          </span>
        </motion.div>

        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 overflow-hidden tracking-tight">
            <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-5">
              {["LUXURY", "BESPOKE", "INTERIORS"].map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordAnimation}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-5 mt-2">
               <motion.span
                  custom={3}
                  variants={wordAnimation}
                  initial="hidden"
                  animate="visible"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-amber-600 italic font-semibold"
                >
                  by shanie R interior
                </motion.span>
            </div>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 font-normal leading-relaxed opacity-80"
        >
          {COMPANY_INFO.tagline} Elevating Los Angeles residences through architectural precision and avant-garde design.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a 
            href="#contact" 
            className="relative px-8 py-3.5 bg-gold-500 text-navy-950 font-bold rounded-sm overflow-hidden group transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
          >
            <span className="relative z-10 flex items-center tracking-tight uppercase text-sm">
              Request Studio Visit
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/30 transform -translate-x-full skew-x-12 group-hover:animate-[shimmer_1s_infinite]"></div>
          </a>
          <a 
            href="#portfolio" 
            className="px-8 py-3.5 bg-transparent border border-white/30 text-white font-bold rounded-sm hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm tracking-tight uppercase text-sm"
          >
            Explore Projects
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500/0 via-gold-500 to-gold-500/0"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
