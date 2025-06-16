import React from 'react';
import { Heart, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = ({ language, isRTL, setCurrentPage }) => {
  const content = {
    ar: {
      disclaimer: 'هذا الموقع لأغراض تعليمية وتوعوية فقط ولا يغني عن استشارة الطبيب',
      copyright: 'جميع الحقوق محفوظة د. حجاج © 2025',
      contact: 'تواصل معنا',
      email: 'mo24102002@gmailom',
      phone: '+20 1092350920',
      social: 'تابعنا على وسائل التواصل الاجتماعي',
      links: {
        title: 'روابط سريعة',
        items: [
          { id: 'about', text: 'عن المرض' },
          { id: 'symptoms', text: 'الأعراض' },
          { id: 'diagnosis', text: 'التشخيص' },
          { id: 'treatment', text: 'العلاج' },
          { id: 'test', text: 'أداة التقييم' }
        ]
      }
    },
    en: {
      disclaimer: 'This website is for educational purposes only and does not replace medical consultation',
      copyright: 'All rights reserved Dr.Hagag © 2025',
      contact: 'Contact Us',
      email: 'info@fibroaware.com',
      phone: '+20 1092350920',
      social: 'Follow us on social media',
      links: {
        title: 'Quick Links',
        items: [
          { id: 'about', text: 'About' },
          { id: 'symptoms', text: 'Symptoms' },
          { id: 'diagnosis', text: 'Diagnosis' },
          { id: 'treatment', text: 'Treatment' },
          { id: 'test', text: 'Assessment Tool' }
        ]
      }
    }
  };

  return (
    <footer className="bg-gradient-to-t from-purple-950 to-blue-950 text-gray-100 border-t border-purple-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Logo and Description */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="inline-block bg-white border border-purple-300 rounded-full p-[2px] m-3 shadow-md ring-2 ring-purple-500/40 ring-offset-2 animate-pulse">
  <img
    src={language === 'ar' ? '/Fibromyalgia/FibroAware_logo_Arabic.svg' : '/Fibromyalgia/FibroAware_logo_English.svg'}
    alt="FibroAware Logo"
    className="h-12 hover:scale-105 transition-transform duration-300"
  />
          </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {content[language].disclaimer}
            </p>
          </div>

          {/* Quick Links */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg font-semibold text-purple-100 mb-4">
              {content[language].links.title}
            </h3>
            <ul className="space-y-2">
              {content[language].links.items.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg font-semibold text-purple-100 mb-4">
              {content[language].contact}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-purple-400" />
                <span className="text-gray-400 hover:text-white transition duration-300">
                  {content[language].email}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-purple-400" />
                <span className="text-gray-400 hover:text-white transition duration-300">
                  {content[language].phone}
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className="text-lg font-semibold text-purple-100 mb-4">
              {content[language].social}
            </h3>
            <div className="flex gap-4">
              <a href="#" className="hover:scale-110 transition-transform text-purple-400 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="hover:scale-110 transition-transform text-purple-400 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="hover:scale-110 transition-transform text-purple-400 hover:text-white"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-800 pt-6 text-center">
          <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
            {content[language].copyright}
            <Heart size={16} className="text-purple-400 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
