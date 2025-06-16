
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import SocialLinks from '@/components/SocialLinks';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Sheryar Khan
            </h3>
            <p className="text-slate-300 mb-4">
              {t('hero.title')}
            </p>
            <SocialLinks />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              {t('contact.title')}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4" />
                Email: 1215sheryarkhan@gmail.com
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4" />
                Phone: +923161290066
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4" />
                Location: Peshawar, Pakistan
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Links
            </h3>
            <a href="#about" className="block text-slate-300 hover:text-white transition-colors mb-1">
              {t('navbar.about')}
            </a>
            <a href="#projects" className="block text-slate-300 hover:text-white transition-colors mb-1">
              {t('navbar.projects')}
            </a>
            <a href="#experience" className="block text-slate-300 hover:text-white transition-colors mb-1">
              {t('navbar.experience')}
            </a>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
