
import React from 'react';
// Fix: Bypassing environment-specific Framer Motion type resolution issues by casting to any
import { motion as motionBase } from 'framer-motion';
const motion = motionBase as any;
import { ChevronDown, ArrowRight, Award, MapPin, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-20 bg-[#EEE9DF]">
      {/* Background with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000")' }}
        />
        {/* Luxury Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EEE9DF] via-[#EEE9DF]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#EEE9DF] via-transparent to-transparent z-10" />
        
        {/* Soft Accent Blobs */}
        <div className="absolute top-[20%] left-[10%] w-[40rem] h-[40rem] bg-[#FFB162]/10 rounded-full blur-[140px] z-10 pointer-events-none animate-pulse" />
        <div className="absolute bottom-[10%] right-[0%] w-[30rem] h-[30rem] bg-[#A35139]/10 rounded-full blur-[140px] z-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-20 h-full py-12">
        {/* Left Side: Copy */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center space-y-10"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-4">
            <span className="w-12 h-[2px] bg-[#A35139]" />
            <span className="text-xs uppercase tracking-[0.5em] text-[#A35139] font-bold">10+ Years of Excellence</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-display leading-[1.1] text-gradient font-bold drop-shadow-sm">
            Expert In <br /> 
            <span className="italic font-light">Residential</span> & <br />
            Commercial <span className="text-[#A35139]">Interior</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-[#2C3B4D]/70 max-w-lg leading-relaxed font-medium">
            Premium interior and exterior design solutions crafted for Lucknow's finest spaces. Transforming your vision into timeless residential and commercial masterpieces.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: '#FF9B40' }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-[#FFB162] text-[#1B2632] font-bold uppercase tracking-widest flex items-center space-x-3 group shadow-xl shadow-orange-500/10"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(44, 59, 77, 0.05)' }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 border border-[#2C3B4D]/20 text-[#2C3B4D] font-bold uppercase tracking-widest hover:border-[#1B2632] transition-all"
            >
              View Our Projects
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center space-x-12 pt-8 border-t border-[#2C3B4D]/10">
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-[#1B2632]">Lucknow</span>
              <span className="text-[10px] uppercase tracking-widest text-[#2C3B4D]/40 font-bold">Headquarters</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-[#1B2632]">500+</span>
              <span className="text-[10px] uppercase tracking-widest text-[#2C3B4D]/40 font-bold">Projects Delivered</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-2xl font-display font-bold text-[#1B2632]">Top Rated</span>
              <span className="flex space-x-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-[#FFB162] text-[#FFB162]" />)}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          className="hidden lg:flex flex-col justify-center items-center relative"
        >
          {/* Main Visual Card */}
          <div className="relative w-full aspect-[4/5] glass rounded-sm overflow-hidden p-3 group shadow-2xl">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-5 transition-opacity duration-700 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <motion.div 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Interior Design" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] grayscale-[10%] group-hover:grayscale-0"
              />
            </motion.div>

            {/* Experience Badge Floating */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-32 h-32 glass border-[#FFB162]/30 border-2 rounded-full flex flex-col items-center justify-center z-30 shadow-2xl"
            >
              <Award className="text-[#A35139] mb-1" size={24} />
              <span className="text-xl font-display font-bold text-[#1B2632]">10+</span>
              <span className="text-[8px] uppercase tracking-tighter text-[#2C3B4D]/60 font-bold">Years Exp.</span>
            </motion.div>

            {/* Service Tags */}
            <div className="absolute bottom-10 left-10 space-y-2 z-30">
              {['RESIDENTIAL', 'COMMERCIAL', 'EXTERIOR'].map((tag, i) => (
                <motion.div 
                  key={tag}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + (i * 0.1) }}
                  className="px-4 py-1.5 bg-[#1B2632]/90 backdrop-blur-md border border-white/10 text-[10px] tracking-[0.3em] font-bold text-white"
                >
                  {tag}
                </motion.div>
              ))}
            </div>
            
            {/* Location Label */}
            <div className="absolute bottom-10 right-10 flex items-center space-x-2 z-30 bg-[#FFB162] px-3 py-1 text-[#1B2632]">
              <MapPin size={12} />
              <span className="text-[10px] font-bold tracking-widest">LUCKNOW, UP</span>
            </div>
          </div>

          {/* Decorative geometric elements */}
          <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full border border-[#2C3B4D]/5 pointer-events-none" />
          <div className="absolute -z-10 top-20 -right-20 w-40 h-40 border-r border-t border-[#FFB162]/20 pointer-events-none" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center space-y-2"
      >
        <span className="text-[9px] uppercase tracking-[0.5em] text-[#2C3B4D]/30 font-bold">Explore Our World</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-[#FFB162]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
