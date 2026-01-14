
import React, { useState, useEffect } from 'react';
// Fix: Bypassing environment-specific Framer Motion type resolution issues by casting to any
import { motion as motionBase, AnimatePresence } from 'framer-motion';
const motion = motionBase as any;
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#EEE9DF] selection:bg-[#FFB162] selection:text-[#1B2632]">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#EEE9DF]"
          >
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-8"
              >
                <div className="w-16 h-[2px] bg-[#FFB162] mb-2" />
                <h2 className="text-2xl font-display tracking-[0.2em] font-light text-[#1B2632]">Shivani</h2>
                <div className="w-16 h-[2px] bg-[#FFB162] mt-2 ml-auto" />
              </motion.div>
              <div className="w-48 h-[1px] bg-[#2C3B4D]/10 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-[#FFB162]"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Services />
              <Portfolio />
              <WhyChooseUs />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
