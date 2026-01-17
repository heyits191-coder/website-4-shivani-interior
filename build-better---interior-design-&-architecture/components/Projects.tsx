import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: "Lumiere Residences", category: "Residential", image: "https://picsum.photos/800/600?random=1" },
  { id: 2, title: "Elysium Villas", category: "Architecture", image: "https://picsum.photos/800/600?random=2" },
  { id: 3, title: "The Grand Maison", category: "Interior", image: "https://picsum.photos/800/600?random=3" },
  { id: 4, title: "Serenity Suites", category: "Hospitality", image: "https://picsum.photos/800/600?random=4" },
  { id: 5, title: "Arbor Estate", category: "Landscape", image: "https://picsum.photos/800/600?random=5" },
  { id: 6, title: "Onyx Tower", category: "Commercial", image: "https://picsum.photos/800/600?random=6" },
];

export const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-2">SELECTED WORKS</h2>
            <div className="h-1 w-32 bg-gold-500 mt-4"></div>
          </motion.div>
          
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-stone-400 hover:text-gold-400 transition-colors mt-6 md:mt-0 uppercase tracking-widest text-sm"
          >
            View All Projects &rarr;
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative cursor-pointer overflow-hidden rounded-sm aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl font-serif text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="text-gold-400 uppercase tracking-widest text-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};