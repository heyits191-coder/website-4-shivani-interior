
import React from 'react';
import { motion } from 'framer-motion';
import { TEAM, COMPANY_INFO } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-50 skew-x-12 translate-x-20 -z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
           {/* Image Content (Left) */}
           <motion.div 
             className="lg:w-5/12 relative"
          >
            {/* Animated Decor Background */}
            <motion.div 
              animate={{ rotate: [3, 6, 3], scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 bg-gold-100 rounded-2xl -z-10 rotate-3"
            ></motion.div>

            {/* Founder Image with Mask Reveal */}
            <motion.div 
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0 0 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                className="rounded-xl overflow-hidden shadow-2xl h-[450px] md:h-[600px] w-full"
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={TEAM.imageUrl} 
                alt={TEAM.name} 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Experience Badge */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
               whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
               whileHover={{ y: -5, scale: 1.05 }}
               className="absolute -bottom-6 -right-4 md:right-[-30px] bg-navy-900 p-6 rounded-lg shadow-2xl border-t-4 border-gold-500 max-w-[220px] text-white"
            >
               <p className="text-4xl font-extrabold text-gold-500">10+</p>
               <p className="text-sm text-gray-300 leading-tight mt-1 font-medium tracking-wide">Years of Excellence in Interior Design</p>
            </motion.div>
          </motion.div>

          {/* Text Content (Right) */}
          <div className="lg:w-7/12 pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="flex items-center gap-4 mb-4">
                    <span className="h-[2px] w-12 bg-gold-500"></span>
                    <span className="text-gold-600 font-bold tracking-widest text-sm uppercase">About The Founder</span>
                </div>
                
                <h2 className="text-4xl lg:text-6xl font-extrabold text-navy-900 mb-2 leading-tight tracking-tight">
                  {TEAM.name}
                </h2>
                <span className="text-navy-500 font-bold tracking-wide text-lg mb-8 block uppercase">
                  {TEAM.role}
                </span>
                
                <p className="text-2xl text-navy-800 font-medium italic leading-relaxed mb-8 border-l-4 border-gold-500 pl-6 opacity-90">
                  "{TEAM.description}"
                </p>

                <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                  Under her leadership, <span className="font-bold text-navy-900">{COMPANY_INFO.name}</span> has grown into a premier destination for luxury interiors. We are committed to premium quality backed by expert engineering and modern manufacturing technology.
                </p>

                {/* Stats / Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {TEAM.stats?.map((stat, idx) => (
                    <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + (idx * 0.1) }}
                        className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl shadow-lg shadow-gray-100 border border-gray-50 hover:border-gold-500/30 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="text-gold-600 w-5 h-5" />
                      </div>
                      <span className="text-navy-900 font-bold text-sm">{stat}</span>
                    </motion.div>
                  ))}
                </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
