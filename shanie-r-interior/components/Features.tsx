import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FEATURES } from '../constants';
import { LucideIcon } from 'lucide-react';

interface TiltCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ title, description, icon: Icon, index }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative h-full bg-navy-800/40 backdrop-blur-md border border-white/5 p-8 rounded-xl group hover:border-gold-500/30 transition-colors"
    >
      <div 
        style={{ transform: "translateZ(50px)" }} 
        className="bg-navy-950 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-white/5 group-hover:border-gold-500/50 transition-colors duration-500"
      >
        <Icon className="text-gold-500 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 style={{ transform: "translateZ(30px)" }} className="text-xl font-serif font-semibold mb-3 text-white group-hover:text-gold-400 transition-colors">
        {title}
      </h3>
      <p style={{ transform: "translateZ(20px)" }} className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
        {description}
      </p>
      
      {/* Glow Effect */}
      <motion.div
        style={{
          background: useMotionTemplate`radial-gradient(
            250px circle at ${mouseX}px ${mouseY}px,
            rgba(245, 158, 11, 0.15),
            transparent 80%
          )`,
        }}
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />
    </motion.div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-navy-900 text-white relative overflow-hidden perspective-1000">
      {/* Decorative bg elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3], 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      ></motion.div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 uppercase tracking-[0.2em] text-xs font-bold"
          >
            Our Promise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl mt-3 font-bold"
          >
            Why Choose Us?
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-6"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <TiltCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;