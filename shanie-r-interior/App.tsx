
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from './constants';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 2.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-navy-950 flex flex-col items-center justify-center text-white"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="overflow-hidden mb-4 text-center">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-serif text-3xl md:text-5xl font-bold tracking-wider"
          >
            shanie <span className="text-gold-500 italic">R</span>
          </motion.h1>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-[0.6rem] tracking-[0.4em] uppercase text-gray-400 block mt-2"
          >
            Interior Design
          </motion.span>
        </div>
        <div className="w-48 h-[1px] bg-white/20 relative overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
            className="absolute inset-0 bg-gold-500"
          ></motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xs tracking-[0.3em] text-gray-500 uppercase"
        >
          Los Angeles • California
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <div className="font-sans antialiased text-slate-800 bg-gray-50 overflow-hidden">
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar />
      
      <main className="relative">
        <Hero />
        <Features />
        <Services />
        <Portfolio />
        <About />
        
        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-navy-900 text-white text-center relative overflow-hidden group">
          <motion.div 
            className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"
          ></motion.div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-3xl md:text-5xl font-bold mb-6"
            >
              Curate Your Space
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Book a bespoke consultation with our lead architectural designers.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
               <a 
                 href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`} 
                 className="relative overflow-hidden bg-white/5 border border-white/20 text-white px-8 py-4 rounded-sm font-bold shadow-lg transition-all hover:scale-105 hover:bg-white/10 flex items-center justify-center gap-2 group"
               >
                  <MessageCircle /> WhatsApp Studio
               </a>
               <a 
                 href={`tel:${COMPANY_INFO.phone}`} 
                 className="relative overflow-hidden bg-gold-500 text-navy-900 px-8 py-4 rounded-sm font-bold shadow-lg transition-all hover:scale-105 hover:shadow-gold-500/30 flex items-center justify-center gap-2 group"
               >
                  <Phone size={20} /> Call Now
               </a>
            </motion.div>
          </div>
        </section>

        <Contact />
      </main>
      
      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`} 
        className="fixed bottom-6 right-6 z-50 bg-navy-900 text-gold-500 p-4 rounded-full shadow-2xl border border-gold-500/20"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
};

export default App;
