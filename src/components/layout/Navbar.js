import React from 'react';
import { Globe } from 'lucide-react';

const Navbar = ({ language, setLanguage, currentPage, setCurrentPage, isRTL }) => {
  const links = [
    { id: 'home', ar: 'الرئيسية', en: 'Home' },
    { id: 'about', ar: 'عن الفيبروميالجيا', en: 'About Fibromyalgia' },
    { id: 'causes', ar: 'الأسباب والعوامل', en: 'Causes' },
    { id: 'symptoms', ar: 'الأعراض والعلامات', en: 'Symptoms' },
    { id: 'diagnosis', ar: 'التشخيص والتقييم', en: 'Diagnosis' },
    { id: 'treatment', ar: 'خيارات العلاج', en: 'Treatment' },
    { id: 'test', ar: 'أداة التقييم', en: 'Assessment Tool' }
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-r from-white/80 via-blue-50/80 to-purple-50/80 border-b border-purple-200 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <img
              src={language === 'ar' ? '/FibroAware_logo_Arabic.svg' : '/FibroAware_logo_English.svg'}
              alt="FibroAware Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className={`hidden md:flex items-center gap-4 text-sm font-medium ${isRTL ? 'justify-end' : 'justify-start'} ${isRTL ? 'mr-8' : 'ml-8'}`}>
            {links.map((link) => (
        <button
          key={link.id}
          onClick={() => setCurrentPage(link.id)}
          className={`relative px-4 py-2 rounded-full transition duration-300 ease-in-out overflow-hidden group font-semibold
            ${currentPage === link.id
              ? 'bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-md'
              : 'text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600'}`}
        >
          <span className="relative z-10">{link[language]}</span>
        </button>

            ))}
          </div>

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-700 border border-purple-300 rounded-full hover:bg-purple-50 transition duration-300"
          >
            <Globe size={16} />
            <span>{language === 'ar' ? 'English' : 'العربية'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;