
import React, { useEffect, useState, useRef } from 'react';
// Fix: Bypassing environment-specific Framer Motion type resolution issues by casting to any
import { motion as motionBase, useScroll, useTransform, useInView } from 'framer-motion';
const motion = motionBase as any;
import { CheckCircle2, Trophy, Users, ShieldCheck, Calculator, ArrowRight } from 'lucide-react';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
}

const StatCounter: React.FC<StatProps> = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="text-4xl md:text-5xl font-display font-bold text-[#1B2632] mb-1">
        {count}{suffix}
      </div>
      <div className="text-[10px] uppercase tracking-[0.3em] text-[#2C3B4D]/40 font-bold">{label}</div>
    </div>
  );
};

export const About: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const img1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const features = [
    { icon: <Trophy size={20} />, text: "10+ Years Industry Experience" },
    { icon: <ShieldCheck size={20} />, text: "Residential & Commercial Specialists" },
    { icon: <Users size={20} />, text: "Expert Designers & Decorators" },
    { icon: <Calculator size={20} />, text: "Transparent Cost Estimation" },
    { icon: <CheckCircle2 size={20} />, text: "Turnkey Interior Solutions" },
  ];

  return (
    <section ref={containerRef} id="experience" className="relative py-24 md:py-40 bg-[#EEE9DF] overflow-hidden">
      {/* Decorative Background Text */}
      <div className="absolute top-20 right-0 pointer-events-none select-none overflow-hidden opacity-[0.03]">
        <span className="text-[20rem] font-display font-bold whitespace-nowrap leading-none text-[#2C3B4D]">AESTHETIC</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="w-12 h-[2px] bg-[#A35139]" />
                <span className="text-xs uppercase tracking-[0.5em] text-[#A35139] font-bold">About Our Legacy</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-[#1B2632] leading-tight mb-6">
                Crafting Timeless Spaces <br /> 
                <span className="italic font-light text-[#2C3B4D]/80">for Over a Decade</span>
              </h2>
              <p className="text-xl text-[#A35139] font-display italic mb-8">
                "Where Design Meets Functionality"
              </p>
              <p className="text-[#2C3B4D]/70 text-lg leading-relaxed max-w-2xl font-medium">
                Interior by Shivani is a Lucknow-based interior and exterior design firm with over 10 years of experience. We specialize in transforming residential and commercial spaces into elegant, functional, and timeless environments, focusing on aesthetic excellence.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-10 h-10 rounded-full border border-[#2C3B4D]/10 flex items-center justify-center text-[#A35139] group-hover:bg-[#FFB162] group-hover:text-[#1B2632] transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-[#2C3B4D]/80 group-hover:text-[#1B2632] transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-x-16 gap-y-8 pt-10 border-t border-[#2C3B4D]/10"
            >
              <StatCounter value={10} suffix="+" label="Years Experience" />
              <StatCounter value={150} suffix="+" label="Projects Done" />
              <StatCounter value={100} suffix="%" label="Client Satisfaction" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <button className="group flex items-center space-x-4 text-sm font-bold uppercase tracking-[0.3em] text-[#A35139] hover:text-[#1B2632] transition-colors">
                <span>Know More About Us</span>
                <div className="w-10 h-10 border border-[#A35139]/30 rounded-full flex items-center justify-center group-hover:w-12 transition-all">
                   <ArrowRight size={16} />
                </div>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full">
              {/* Main Image */}
              <motion.div 
                style={{ y: img1Y }}
                className="absolute inset-0 z-10 overflow-hidden border border-[#C9C1B1] shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Architecture Design" 
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              {/* Overlapping Secondary Image */}
              <motion.div 
                style={{ y: img2Y }}
                className="absolute -bottom-16 -left-12 md:-left-20 w-3/4 aspect-square z-20 glass p-2 shadow-2xl shadow-black/10"
              >
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1613490493576-7fde63bac817?auto=format&fit=crop&q=80&w=800" 
                    alt="Interior Detail" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Decorative Accent */}
              <div className="absolute top-1/2 -right-8 w-[2px] h-32 bg-[#FFB162] z-0 opacity-50" />
              <div className="absolute -top-8 -right-8 w-24 h-24 border-r-2 border-t-2 border-[#A35139]/30 z-0" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
