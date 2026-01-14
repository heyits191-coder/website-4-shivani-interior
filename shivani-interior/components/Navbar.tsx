
import React, { useState, useEffect } from 'react';
// Fix: Added AnimatePresence and cast motion to any to bypass environment-specific type conflicts
import { motion as motionBase, AnimatePresence } from 'framer-motion';
const motion = motionBase as any;
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3 group cursor-pointer"
        >
          <div className="relative">
            <div className="w-10 h-10 border border-[#FFB162] flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500 bg-white/40">
              <span className="text-[#1B2632] font-display font-bold text-xl group-hover:-rotate-45 transition-transform duration-500">S</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-bold tracking-wider text-[#1B2632]">Interior</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#2C3B4D]/60 -mt-1 font-semibold">by Shivani</span>
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {['Experience', 'Residential', 'Commercial', 'Exterior', 'Estimators'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-[0.2em] font-medium text-[#2C3B4D]/70 hover:text-[#FFB162] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#FFB162] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Contact/CTA */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-3 text-[#2C3B4D]/80 hover:text-[#1B2632] transition-colors">
            <Phone size={16} className="text-[#A35139]" />
            <span className="text-sm font-semibold tracking-tight">+91 94544 52770</span>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: '#FF9B40' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-[#FFB162] text-[#1B2632] text-xs font-bold uppercase tracking-widest transition-all flex items-center space-x-2 shadow-lg shadow-orange-500/10"
          >
            <span>Inquiry</span>
            <ArrowRight size={14} />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#1B2632]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#EEE9DF] border-b border-[#2C3B4D]/10 py-12 px-6 flex flex-col space-y-8 lg:hidden shadow-2xl"
          >
             {['Experience', 'Residential', 'Commercial', 'Exterior', 'Estimators'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-display tracking-wide text-[#1B2632] border-b border-[#2C3B4D]/5 pb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-8 flex flex-col space-y-4">
              <span className="text-[#2C3B4D]/40 uppercase tracking-widest text-xs font-bold">Contact Us</span>
              <span className="text-xl font-display text-[#1B2632]">+91 94544 52770</span>
              <span className="text-sm text-[#2C3B4D]/70 font-medium">Lucknow, Uttar Pradesh</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
