
import React from 'react';
// Fix: Bypassing environment-specific Framer Motion type resolution issues by casting to any
import { motion as motionBase } from 'framer-motion';
const motion = motionBase as any;
import { Phone, MapPin, Clock, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 md:py-40 bg-[#EEE9DF] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FFB162]/[0.05] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Side: Info */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center space-x-4 mb-6">
                <span className="w-12 h-[2px] bg-[#A35139]" />
                <span className="text-xs uppercase tracking-[0.5em] text-[#A35139] font-bold">Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-[#1B2632] mb-8 leading-tight">
                Let’s Build <br /> Something <br />
                <span className="text-gradient italic font-light">Beautiful Together</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-white border border-[#C9C1B1] flex items-center justify-center text-[#A35139] group-hover:bg-[#FFB162] group-hover:text-[#1B2632] transition-all duration-500 shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#A35139] font-bold mb-1">Call Us</h4>
                  <p className="text-xl font-display text-[#1B2632]">+91 94544 52770</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-white border border-[#C9C1B1] flex items-center justify-center text-[#A35139] group-hover:bg-[#FFB162] group-hover:text-[#1B2632] transition-all duration-500 shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#A35139] font-bold mb-1">Our Studio</h4>
                  <p className="text-[#2C3B4D]/70 font-semibold leading-relaxed">R2X4+JQC, Lucknow, <br />Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white p-8 md:p-12 border border-[#C9C1B1]/40 shadow-2xl relative">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#2C3B4D]/40 font-bold ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-[#EEE9DF]/20 border border-[#C9C1B1]/40 px-6 py-4 outline-none focus:border-[#FFB162] transition-colors text-[#1B2632] font-medium text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#2C3B4D]/40 font-bold ml-1">Phone Number</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-[#EEE9DF]/20 border border-[#C9C1B1]/40 px-6 py-4 outline-none focus:border-[#FFB162] transition-colors text-[#1B2632] font-medium text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#2C3B4D]/40 font-bold ml-1">Your Message</label>
                  <textarea rows={4} placeholder="Tell us about your dream project..." className="w-full bg-[#EEE9DF]/20 border border-[#C9C1B1]/40 px-6 py-4 outline-none focus:border-[#FFB162] transition-colors text-[#1B2632] font-medium text-sm resize-none"></textarea>
                </div>
                <motion.button whileHover={{ scale: 1.02, backgroundColor: '#FF9B40' }} whileTap={{ scale: 0.98 }} className="w-full py-5 bg-[#FFB162] text-[#1B2632] font-bold uppercase tracking-[0.4em] text-xs flex items-center justify-center space-x-4 shadow-xl transition-all">
                  <span>Request Free Consultation</span>
                  <Send size={14} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
