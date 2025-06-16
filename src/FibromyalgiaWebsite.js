import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import CausesPage from './components/pages/CausesPage';
import SymptomsPage from './components/pages/SymptomsPage';
import DiagnosisPage from './components/pages/DiagnosisPage';
import TreatmentPage from './components/pages/TreatmentPage';
import TestWizard from './components/test/TestWizard';

const FibromyalgiaWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('ar');
  const [testData, setTestData] = useState({
    wpiScore: 0,
    ssScore2a: 0,
    ssScore2b: 0,
    wpiAreas: [],
    symptoms2a: { fatigue: 0, sleep: 0, cognitive: 0 },
    otherSymptoms: []
  });

  const isRTL = language === 'ar';

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': 
        return <HomePage language={language} isRTL={isRTL} setCurrentPage={setCurrentPage} />;
      case 'about': 
        return <AboutPage language={language} isRTL={isRTL} setCurrentPage={setCurrentPage} />;
      case 'causes': 
        return <CausesPage language={language} isRTL={isRTL} setCurrentPage={setCurrentPage} />;
      case 'symptoms': 
        return <SymptomsPage language={language} isRTL={isRTL} setCurrentPage={setCurrentPage} />;
      case 'diagnosis': 
        return <DiagnosisPage language={language} isRTL={isRTL} setCurrentPage={setCurrentPage} />;
      case 'treatment': 
        return <TreatmentPage language={language} isRTL={isRTL} setCurrentPage={setCurrentPage} />;
      case 'test': 
        return <TestWizard 
                 language={language} 
                 isRTL={isRTL} 
                 testData={testData}
                 setTestData={setTestData}
               />;
      default: 
        return <HomePage language={language} isRTL={isRTL} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <Layout 
      language={language}
      setLanguage={setLanguage}
      isRTL={isRTL}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    >
      {renderCurrentPage()}
    </Layout>
  );
};

export default FibromyalgiaWebsite;