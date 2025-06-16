import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import WPIStep from './components/test/steps/WPIStep';
import SymptomSeverityStep from './components/test/steps/SymptomSeverityStep';
import OtherSymptomsStep from './components/test/steps/OtherSymptomsStep';
import TestResults from './components/test/TestResults';

const FibromyalgiaTestComponent = () => {
  const [language, setLanguage] = useState('ar');
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [testData, setTestData] = useState({
    wpiScore: 0,
    ssScore2a: 0,
    ssScore2b: 0,
    wpiAreas: [],
    symptoms2a: { fatigue: 0, sleep: 0, cognitive: 0 },
    otherSymptoms: []
  });

  const isRTL = language === 'ar';

  const content = {
    ar: {
      title: 'أداة التقييم التفاعلية للفيبروميالجيا',
      description: 'احصل على نتائجك التفصيلية',
      disclaimer: 'هذه الأداة للتوعية وتوفير النتائج التفصيلية ولا تغني عن الاستشارة الطبية',
      buttons: {
        next: 'التالي',
        previous: 'السابق',
        showResults: 'عرض النتائج',
        restart: 'إعادة التقييم'
      }
    },
    en: {
      title: 'Interactive Fibromyalgia Assessment Tool',
      description: 'Get your detailed results',
      disclaimer: 'This tool is for awareness and providing detailed results and does not replace medical consultation',
      buttons: {
        next: 'Next',
        previous: 'Previous',
        showResults: 'Show Results',
        restart: 'Restart Assessment'
      }
    }
  };

  const handleShowResults = () => setShowResults(true);
  const restartTest = () => {
    setShowResults(false);
    setCurrentStep(1);
    setTestData({
      wpiScore: 0,
      ssScore2a: 0,
      ssScore2b: 0,
      wpiAreas: [],
      symptoms2a: { fatigue: 0, sleep: 0, cognitive: 0 },
      otherSymptoms: []
    });
  };

  if (showResults) {
    return <TestResults language={language} testData={testData} restartTest={restartTest} />;
  }

  return (
    <div className={`min-h-screen py-12 bg-gradient-to-br from-blue-50 to-purple-100 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6">
        <div className={`max-w-4xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Language Toggle */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-md"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">
                {language === 'ar' ? 'English' : 'العربية'}
              </span>
            </button>
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            {content[language].title}
          </h1>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
            <p className="text-yellow-800 text-center">{content[language].disclaimer}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              <div className={`flex ${isRTL ? 'space-x-reverse' : ''} space-x-4`}>
                {[1, 2, 3].map((step) => (
                  <div key={step} className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= step ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className={`bg-purple-600 h-2 rounded-full transition-all duration-300`} 
                   style={{ width: `${(currentStep / 3) * 100}%` }}></div>
            </div>
          </div>

          {/* Test Steps */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            {currentStep === 1 && (
              <WPIStep 
                language={language} 
                testData={testData} 
                setTestData={setTestData} 
                onNext={() => setCurrentStep(2)} 
                isRTL={isRTL}
              />
            )}

            {currentStep === 2 && (
              <SymptomSeverityStep 
                language={language} 
                testData={testData} 
                setTestData={setTestData}
                onNext={() => setCurrentStep(3)}
                onPrevious={() => setCurrentStep(1)}
                isRTL={isRTL}
              />
            )}

            {currentStep === 3 && (
              <OtherSymptomsStep 
                language={language} 
                testData={testData} 
                setTestData={setTestData}
                onShowResults={handleShowResults}
                onPrevious={() => setCurrentStep(2)}
                isRTL={isRTL}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FibromyalgiaTestComponent;