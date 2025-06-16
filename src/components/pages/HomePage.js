import React from 'react';
import HeroSection from '../sections/home/HeroSection';
import StatsSection from '../sections/home/StatsSection';
import FeaturesSection from '../sections/home/FeaturesSection';

const HomePage = ({ language, isRTL, setCurrentPage }) => {
  return (
    <div className="min-h-screen">
      <HeroSection language={language} isRTL={isRTL} setCurrentPage={setCurrentPage} />
      <StatsSection language={language} />
      <FeaturesSection language={language} />
    </div>
  );
};

export default HomePage;