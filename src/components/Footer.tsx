
import React from 'react';
import { TranslatedText } from '@/components/TranslatedText';
import SocialLinks from '@/components/SocialLinks';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              <TranslatedText>Sheryar Khan</TranslatedText>
            </h3>
            <p className="text-slate-300 mb-4">
              <TranslatedText>Computer Science Graduate & Full-Stack Developer</TranslatedText>
            </p>
            <SocialLinks />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              <TranslatedText>Contact</TranslatedText>
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4" />
                <TranslatedText>Email: 1215sheryarkhan@gmail.com</TranslatedText>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4" />
                <TranslatedText>Phone: +923161290066</TranslatedText>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4" />
                <TranslatedText>Location: Peshawar, Pakistan</TranslatedText>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              <TranslatedText>Links</TranslatedText>
            </h3>
            <a href="#about" className="block text-slate-300 hover:text-white transition-colors mb-1">
              <TranslatedText>About</TranslatedText>
            </a>
            <a href="#projects" className="block text-slate-300 hover:text-white transition-colors mb-1">
              <TranslatedText>Projects</TranslatedText>
            </a>
            <a href="#experience" className="block text-slate-300 hover:text-white transition-colors mb-1">
              <TranslatedText>Experience</TranslatedText>
            </a>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400">
          <TranslatedText>{`© ${currentYear.toString()} Sheryar Khan. All rights reserved.`}</TranslatedText>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
