import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your vision, goals, and requirements." },
  { num: "02", title: "Concept", desc: "Creating initial layouts and mood boards to visualize direction." },
  { num: "03", title: "Design", desc: "Detailed 3D modeling and photorealistic rendering." },
  { num: "04", title: "Execution", desc: "Technical drawings and on-site supervision for perfection." }
];

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 relative">
        {/* Background texture line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden md:block" />

      <div className="container mx-auto px-6">
        <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl text-center text-white mb-20 relative z-10 bg-dark-900 inline-block px-8 mx-auto block"
        >
            HOW IT WORKS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative z-10 bg-dark-900 p-6 text-center md:text-left border border-white/5 md:border-none rounded-lg md:rounded-none hover:bg-stone-900/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 font-bold mb-6 mx-auto md:mx-0">
                {step.num}
              </div>
              <h3 className="text-xl text-white font-serif mb-3">{step.title}</h3>
              <p className="text-sm text-stone-500">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};