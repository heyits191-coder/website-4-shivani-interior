
import React from 'react';
// Fix: Bypassing environment-specific Framer Motion type resolution issues by casting to any
import { motion as motionBase } from 'framer-motion';
const motion = motionBase as any;
import { LayoutDashboard, Building2, Palmtree, Ruler, ArrowRight, Home } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className="group relative bg-[#F4F1EA] p-8 md:p-10 flex flex-col items-start transition-all duration-500 hover:border-[#FFB162]/40 border border-[#C9C1B1]/30 shadow-sm hover:shadow-xl overflow-hidden"
    >
      {/* Subtle Glow Background */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FFB162]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Icon with animated container */}
      <div className="mb-8 relative">
        <div className="w-14 h-14 flex items-center justify-center border border-[#2C3B4D]/10 text-[#A35139] group-hover:bg-[#FFB162] group-hover:text-[#1B2632] transition-all duration-500 transform group-hover:rotate-[360deg]">
          {icon}
        </div>
        <div className="absolute inset-0 bg-[#FFB162]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <h3 className="text-2xl font-display font-bold text-[#1B2632] mb-4 group-hover:text-[#A35139] transition-colors">
        {title}
      </h3>
      
      <p className="text-[#2C3B4D]/60 text-sm leading-relaxed mb-8 font-medium tracking-wide flex-grow">
        {description}
      </p>

      <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#A35139] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
        <span>Learn More</span>
        <ArrowRight size={12} />
      </div>
      
      {/* Corner Border Detail */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t border-r border-[#FFB162]/0 group-hover:w-8 group-hover:h-8 group-hover:border-[#FFB162]/40 transition-all duration-500" />
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const serviceData = [
    {
      icon: <Home size={28} />,
      title: "Residential Interior",
      description: "Customized luxury interiors for homes, villas, and apartments tailored to your lifestyle."
    },
    {
      icon: <Building2 size={28} />,
      title: "Commercial Interior",
      description: "Functional and aesthetic office, retail, and hospitality spaces designed for business growth."
    },
    {
      icon: <Palmtree size={28} />,
      title: "Exterior Design",
      description: "Modern and classic exterior solutions that define architectural identity and curb appeal."
    },
    {
      icon: <Ruler size={28} />,
      title: "Estimation & Planning",
      description: "Accurate cost estimation, material planning, and execution strategies for hassle-free projects."
    }
  ];

  return (
    <section id="interior" className="relative py-24 md:py-40 bg-[#EEE9DF] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFB162]/5 rounded-full blur-[150px] opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-4 mb-6"
          >
            <span className="w-12 h-[2px] bg-[#A35139]" />
            <span className="text-xs uppercase tracking-[0.5em] text-[#A35139] font-bold">What We Offer</span>
            <span className="w-12 h-[2px] bg-[#A35139]" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-[#1B2632] mb-6"
          >
            Our Expertise & Services
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#2C3B4D]/40 text-sm uppercase tracking-[0.25em] font-bold max-w-2xl mx-auto leading-relaxed"
          >
            Complete Residential, Commercial & Exterior Solutions
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
          {serviceData.map((service, index) => (
            <ServiceCard 
              key={index} 
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 overflow-hidden border border-[#C9C1B1] transition-all duration-300 hover:border-[#FFB162] bg-[#F4F1EA]"
          >
            <div className="relative z-10 flex items-center space-x-3 text-sm font-bold uppercase tracking-[0.4em] text-[#1B2632] group-hover:text-[#1B2632] transition-colors duration-300">
              <span>Explore All Services</span>
              <ArrowRight size={16} />
            </div>
            <div className="absolute inset-0 bg-[#FFB162] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
