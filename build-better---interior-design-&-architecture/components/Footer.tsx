import React from 'react';
import { Instagram, Linkedin, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold-400 flex items-center justify-center">
                <span className="text-xl font-serif text-gold-200">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-md tracking-widest text-white leading-none">BUILD</span>
                <span className="font-serif text-md tracking-widest text-gold-400 leading-none">BETTER</span>
              </div>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Elevating spaces through thoughtful architecture and impeccable interior design. Based in Mumbai, serving the world.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-serif text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-stone-400 hover:text-gold-400 transition-colors">
                <MapPin size={20} className="mt-1 shrink-0" />
                <span>
                  101, Solitaire Park,<br />
                  Andheri West, Mumbai,<br />
                  Maharashtra 400053
                </span>
              </li>
              <li className="flex items-center gap-3 text-stone-400 hover:text-gold-400 transition-colors">
                <Phone size={20} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-stone-400 hover:text-gold-400 transition-colors">
                <Mail size={20} />
                <span>hello@buildbetter.in</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-white font-serif text-lg">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-stone-400 hover:bg-gold-500 hover:text-dark-900 transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-stone-400 hover:bg-gold-500 hover:text-dark-900 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-stone-400 hover:bg-gold-500 hover:text-dark-900 transition-all duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
          <p>&copy; {new Date().getFullYear()} Build Better Interiors. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};