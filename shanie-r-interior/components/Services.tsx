import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="h-[360px] w-full [perspective:1000px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d]"
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl border-b-4 border-transparent hover:border-gold-500 transition-all duration-300 group [backface-visibility:hidden] flex flex-col items-start justify-between z-10">
          <div>
            <div className="mb-6 p-4 bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-navy-900 group-hover:scale-110 transition-all duration-300">
              <service.icon className="w-8 h-8 text-navy-900 group-hover:text-gold-500 transition-colors" />
            </div>
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
          <button
            onClick={() => setIsFlipped(true)}
            className="flex items-center text-navy-900 font-semibold text-sm group hover:text-gold-600 transition-colors mt-4"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 ml-2 text-gold-500 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full bg-navy-900 p-8 rounded-xl shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-xl font-bold text-gold-500 mb-6 border-b border-white/10 pb-2">
              {service.title}
            </h3>
            <ul className="space-y-3">
              {service.details.map((detail, i) => (
                <li key={i} className="flex items-start text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => setIsFlipped(false)}
            className="flex items-center text-white/80 hover:text-white font-medium text-sm transition-colors mt-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Go Back</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl text-navy-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-xl mx-auto"
          >
            Comprehensive interior solutions tailored to your lifestyle and needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;