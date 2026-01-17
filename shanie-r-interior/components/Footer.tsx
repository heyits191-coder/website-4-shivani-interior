
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-navy-950 text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <a href="#home" className="inline-block mb-6">
              <span className="font-serif text-2xl font-bold tracking-tight">
                shanie <span className="text-gold-500 italic">R</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Architectural interior solutions for the modern Californian lifestyle. We curate spaces that blend urban luxury with timeless comfort.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors transform hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-xl font-semibold mb-6">Studio</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-gold-500 transition-colors text-xs uppercase tracking-widest flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gold-500 rounded-full group-hover:scale-150 transition-transform"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-xl font-semibold mb-6">Expertise</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">Residential Estates</li>
              <li className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">Penthouse Studios</li>
              <li className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">Modular Concepts</li>
              <li className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">Bespoke Curation</li>
              <li className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors">Renovations</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-xl font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <p>{COMPANY_INFO.address}</p>
              <p className="flex items-center gap-2 text-white">
                <span className="text-gold-500">Studio:</span> {COMPANY_INFO.phone}
              </p>
              <p className="flex items-center gap-2 text-white">
                <span className="text-gold-500">Enquiry:</span> {COMPANY_INFO.email}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-500"
        >
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
