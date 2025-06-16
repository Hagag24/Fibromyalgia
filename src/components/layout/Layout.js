import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, language, setLanguage, isRTL, currentPage, setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div 
      className={`min-h-screen flex flex-col font-sans bg-gradient-to-b from-white via-blue-50 to-purple-50 transition-all duration-500 ${isRTL ? 'rtl' : 'ltr'}`} 
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Navbar 
        language={language} 
        setLanguage={setLanguage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isRTL={isRTL}
      />
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-6 animate-fadeIn">
        {children}
      </main>
<Footer language={language} isRTL={isRTL} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Layout;
