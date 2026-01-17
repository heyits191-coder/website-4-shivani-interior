
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900 shadow-lg py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex flex-col group">
          <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight ${scrolled ? 'text-white' : 'text-white'} transition-colors`}>
            shanie <span className="text-gold-500 group-hover:text-gold-400 transition-colors italic">R</span>
          </span>
          <span className="text-[0.6rem] tracking-[0.4em] text-gray-300 uppercase group-hover:text-white transition-colors">Interior Design</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item, index) => (
            <motion.a 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              key={item.label} 
              href={item.href} 
              className="text-xs uppercase tracking-widest font-semibold text-gray-200 hover:text-gold-500 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
          <motion.a 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-2 bg-gold-500 text-navy-900 px-6 py-2.5 rounded-sm font-bold hover:bg-gold-400 transition-all transform hover:scale-105"
          >
            <Phone size={14} />
            <span className="text-xs tracking-tighter uppercase">Connect Now</span>
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-navy-950 z-40"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 relative">
               <button 
                className="absolute top-6 right-6 text-white p-2"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>
              
              {NAV_ITEMS.map((item, index) => (
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  key={item.label} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif text-white hover:text-gold-500 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                href={`tel:${COMPANY_INFO.phone}`}
                className="mt-4 flex items-center gap-2 bg-gold-500 text-navy-900 px-8 py-3 rounded-full font-bold"
              >
                <Phone size={20} />
                <span>Call Studio</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
