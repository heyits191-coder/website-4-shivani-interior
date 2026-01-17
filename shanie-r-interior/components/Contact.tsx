
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12 p-10 md:p-14 bg-navy-900 text-white relative overflow-hidden"
          >
             {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

             <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Start Your Architectural Journey</h2>
             <p className="text-gray-300 mb-12">Visit our Beverly Hills studio or reach out to discuss your next estate transformation.</p>

             <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 p-3 rounded-lg group-hover:bg-gold-500/20 transition-colors">
                    <Phone className="text-gold-500 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Direct Line</p>
                    <p className="font-semibold text-lg">{COMPANY_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 p-3 rounded-lg group-hover:bg-gold-500/20 transition-colors">
                    <Mail className="text-gold-500 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email Studio</p>
                    <p className="font-semibold text-lg">{COMPANY_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-white/10 p-3 rounded-lg group-hover:bg-gold-500/20 transition-colors">
                    <MapPin className="text-gold-500 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="font-semibold leading-snug">{COMPANY_INFO.address}</p>
                  </div>
                </div>
             </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-7/12 bg-white p-6 md:p-14"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-gold-500 focus:ring-0 outline-none transition-colors" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-gold-500 focus:ring-0 outline-none transition-colors" placeholder="+1 (___) ___ - ____" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Project Type</label>
                <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-gold-500 focus:ring-0 outline-none transition-colors">
                  <option>Residential Estate</option>
                  <option>Luxury Kitchen</option>
                  <option>Commercial Penthouse</option>
                  <option>Bespoke Furniture</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Project Vision</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-gold-500 focus:ring-0 outline-none transition-colors" placeholder="Describe your dream space..."></textarea>
              </div>

              <button type="submit" className="w-full bg-navy-900 hover:bg-navy-950 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                <span>Inquire Now</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 w-full h-80 rounded-xl overflow-hidden shadow-lg border-4 border-white"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.15234149957!2d-118.40058952428236!3d34.06560937315147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc00298a0001%3A0x6a24699e1d88a29a!2sWilshire%20Blvd%2C%20Beverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
