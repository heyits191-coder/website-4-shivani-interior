
import React from 'react';
// Fix: Bypassing environment-specific Framer Motion type resolution issues by casting to any
import { motion as motionBase } from 'framer-motion';
const motion = motionBase as any;
import { Phone, MapPin, Clock, Instagram, Facebook, Linkedin, ArrowUp, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1B2632] pt-24 pb-12 overflow-hidden text-[#EEE9DF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="space-y-8">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-12 h-12 border border-[#FFB162] flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500 bg-[#EEE9DF]/5">
                <span className="text-[#FFB162] font-display font-bold text-2xl group-hover:-rotate-45 transition-transform duration-500">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold tracking-wider">Interior</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#FFB162] font-bold -mt-1">by Shivani</span>
              </div>
            </div>
            <p className="text-[#EEE9DF]/50 text-sm leading-relaxed font-medium italic">
              "10+ Years of Excellence in Lucknow. Designing spaces that define luxury and precision."
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.5em] text-[#FFB162] font-bold">Quick Links</h4>
            <ul className="space-y-5">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center space-x-2 text-[#EEE9DF]/40 text-sm hover:text-white transition-colors group">
                    <ChevronRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#FFB162]" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.5em] text-[#FFB162] font-bold">Contact Studio</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin size={18} className="text-[#FFB162] shrink-0 mt-1" />
                <span className="text-[#EEE9DF]/50 text-sm font-medium">R2X4+JQC, Lucknow, UP, India</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={18} className="text-[#FFB162] shrink-0" />
                <span className="text-[#EEE9DF]/50 text-sm font-medium">+91 94544 52770</span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs uppercase tracking-[0.5em] text-[#FFB162] font-bold">Social Connection</h4>
            <div className="flex space-x-5">
              {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#FFB162] hover:border-[#FFB162] transition-all bg-white/5">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-[10px] uppercase tracking-[0.2em] text-white/20">
          <p>© {currentYear} Interior by Shivani. All Rights Reserved.</p>
          <motion.button onClick={scrollToTop} whileHover={{ y: -5 }} className="group flex flex-col items-center text-[#FFB162]">
            <div className="w-12 h-12 border border-[#FFB162]/30 rounded-full flex items-center justify-center mb-2 group-hover:bg-[#FFB162] group-hover:text-[#1B2632] transition-all shadow-lg">
               <ArrowUp size={16} />
            </div>
            <span className="text-[8px] tracking-[0.4em] font-bold">Back to Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
