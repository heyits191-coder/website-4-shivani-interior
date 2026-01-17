import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
             <img src="https://picsum.photos/1920/1080?grayscale&blur=5" className="w-full h-full object-cover" alt="texture" />
        </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-stone-900/80 backdrop-blur-md p-8 md:p-12 rounded-xl border border-white/5 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Have a Project in Mind?</h2>
            <p className="text-stone-400">Tell us about your project, and we'll prepare a customized proposal.</p>
          </motion.div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-wider text-stone-500">Name</label>
                <input
                  type="text"
                  className="w-full bg-black/30 border border-stone-800 rounded-md p-4 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-wider text-stone-500">Email</label>
                <input
                  type="email"
                  className="w-full bg-black/30 border border-stone-800 rounded-md p-4 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider text-stone-500">Message</label>
              <textarea
                rows={4}
                className="w-full bg-black/30 border border-stone-800 rounded-md p-4 text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"
                placeholder="Tell us about your space..."
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-gold-500 text-dark-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
              >
                Send Request <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};