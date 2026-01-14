
import React, { useEffect } from 'react';
// Fix: Bypassing environment-specific Framer Motion type resolution issues by casting to any
import { motion as motionBase } from 'framer-motion';
const motion = motionBase as any;
import { Shield, Clock, Users, Diamond, BarChart3, ArrowRight } from 'lucide-react';

interface USPItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const USPItem: React.FC<USPItemProps> = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group flex space-x-6 pb-8 border-b border-[#C9C1B1]/30 last:border-0 hover:bg-[#F4F1EA] transition-colors p-4 rounded-sm"
  >
    <div className="shrink-0 w-12 h-12 bg-white border border-[#A35139]/20 flex items-center justify-center text-[#A35139] group-hover:bg-[#FFB162] group-hover:text-[#1B2632] transition-all duration-500 transform group-hover:scale-110 shadow-sm">
      {icon}
    </div>
    <div className="space-y-2">
      <h4 className="text-lg font-display font-bold text-[#1B2632] group-hover:text-[#A35139] transition-colors">{title}</h4>
      <p className="text-[#2C3B4D]/60 text-sm leading-relaxed font-medium">{description}</p>
    </div>
  </motion.div>
);

export const WhyChooseUs: React.FC = () => {
  const uspPoints = [
    {
      icon: <Shield size={20} />,
      title: "10+ Years of Industry Experience",
      description: "Over a decade of delivering quality-driven interior & exterior projects across Lucknow."
    },
    {
      icon: <Diamond size={20} />,
      title: "Premium Quality Materials",
      description: "We use only high-quality, durable, and trusted materials to ensure longevity and luxury."
    },
    {
      icon: <Users size={20} />,
      title: "Skilled Engineers & Designers",
      description: "A team of experienced professionals ensuring technical perfection and aesthetic brilliance."
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Transparent Pricing & Estimation",
      description: "No hidden costs. Accurate planning and honest execution from day one to handover."
    },
    {
      icon: <Clock size={20} />,
      title: "End-to-End Solutions",
      description: "From initial design to final handover, we handle everything seamlessly for a hassle-free experience."
    }
  ];

  return (
    <section id="experience" className="relative py-24 md:py-40 bg-[#EEE9DF] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#A35139]/[0.02] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-1 h-32 bg-[#FFB162] opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="w-12 h-[2px] bg-[#FFB162]" />
                <span className="text-xs uppercase tracking-[0.5em] text-[#FFB162] font-bold">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-[#1B2632] mb-6 leading-tight">
                Why Clients Trust <br /> 
                <span className="text-gradient">Interior by Shivani</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {uspPoints.map((usp, idx) => (
                <USPItem key={idx} {...usp} index={idx} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: '#FF9B40' }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-[#FFB162] text-[#1B2632] text-xs font-bold uppercase tracking-[0.4em] flex items-center space-x-4 transition-all shadow-xl shadow-orange-500/10"
              >
                <span>Start Your Project With Us</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side: Imagery */}
          <div className="relative sticky top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm group shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=1200" 
                alt="Architectural Precision"
                className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2632]/40 via-transparent to-transparent opacity-60" />
              
              {/* Floating Trust Badges */}
              <div className="absolute bottom-10 left-10 right-10 grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="glass p-6 text-center shadow-lg"
                >
                  <div className="text-2xl font-display font-bold text-[#A35139]">150+</div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-[#1B2632]/50 font-bold">Projects Done</div>
                </motion.div>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="glass p-6 text-center border-[#FFB162]/40 shadow-lg"
                >
                  <div className="text-2xl font-display font-bold text-[#1B2632]">100%</div>
                  <div className="text-[8px] uppercase tracking-[0.2em] text-[#1B2632]/50 font-bold">On-Time Delivery</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
