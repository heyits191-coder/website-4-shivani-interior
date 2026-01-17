import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Box, Armchair, LayoutTemplate } from 'lucide-react';

const services = [
  {
    icon: <Armchair size={40} />,
    title: "Interior Visualization",
    description: "Showcase lighting, textures, and atmosphere of spaces before construction begins."
  },
  {
    icon: <Box size={40} />,
    title: "3D Modeling",
    description: "From accurate models to polished final renders, we bring technical drawings to life."
  },
  {
    icon: <LayoutTemplate size={40} />,
    title: "Exterior Visualization",
    description: "Bring facades, landscapes, and master plans to life with photorealistic renders."
  },
  {
    icon: <Ruler size={40} />,
    title: "Architectural Planning",
    description: "Comprehensive layout planning and structural design optimized for modern living."
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-dark-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">OUR SERVICES</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            We offer a comprehensive suite of design services tailored to meet the unique needs of every client.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-stone-900/50 p-10 border border-white/5 hover:border-gold-500/50 transition-all duration-300 group rounded-sm"
            >
              <div className="text-gold-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl text-white font-serif mb-4 group-hover:text-gold-200 transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};