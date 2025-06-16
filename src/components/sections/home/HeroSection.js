import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const HeroSection = ({ language, isRTL, setCurrentPage }) => {
  const content = {
    ar: {
      title: 'أداة تقييم الفيبروميالجيا التفاعلية',
      subtitle: 'اكتشف مستوى أعراضك وابدأ رحلتك نحو الفهم الأفضل',
      description: 'تقييم شامل لأعراض الفيبروميالجيا وفقاً للمعايير الطبية المعتمدة',
      button: 'ابدأ التقييم الآن'
    },
    en: {
      title: 'Interactive Fibromyalgia Assessment Tool',
      subtitle: 'Discover Your Symptoms Severity and Start Your Journey',
      description: 'Get a comprehensive assessment of your symptoms based on medical criteria',
      button: 'Start Assessment Now'
    }
  };

  const handleStartTest = () => {
    setCurrentPage('test');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a112f] to-[#1a1c40] text-white animate-fade-in py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Left Side */}
        <div className="md:w-1/2 w-full">
          <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/Fibromyalgia/Home.png"
              alt="Fibromyalgia Illustration"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40" />
          </div>
        </div>

        {/* Text Right Side */}
        <div className={`md:w-1/2 w-full ${isRTL ? 'text-right' : 'text-left'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-up">
            {content[language].title}
          </h1>

          <h2 className="text-2xl text-blue-200 mb-4 animate-fade-in delay-200">
            {content[language].subtitle}
          </h2>

          <p className="text-lg text-gray-300 mb-8 animate-fade-in delay-300">
            {content[language].description}
          </p>

          <button
            onClick={handleStartTest}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl gap-2 shadow-lg border border-blue-400/30 animate-fade-in delay-500"
          >
            {content[language].button}
            {isRTL ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
