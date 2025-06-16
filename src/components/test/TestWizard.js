import React, { useState } from 'react';
import WPIStep from './steps/WPIStep';
import SymptomSeverityStep from './steps/SymptomSeverityStep';
import OtherSymptomsStep from './steps/OtherSymptomsStep';
import TestResults from './TestResults';

const TestWizard = ({ language, isRTL, testData, setTestData }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);

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
    return (
      <div className="bg-gradient-to-br from-blue-950 via-purple-950 to-indigo-950 min-h-screen py-12">
        <div className="container mx-auto px-6">
          <TestResults 
            language={language}
            results={testData}
            restartTest={restartTest}
            isRTL={isRTL}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-12 bg-gradient-to-br from-blue-950 via-purple-950 to-indigo-950 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className={`flex ${isRTL ? 'space-x-reverse' : ''} space-x-6`}>
              {[1, 2, 3].map((step) => (
                <div key={step} 
                     className={`w-12 h-12 rounded-xl flex items-center justify-center transform transition-all duration-300 ${
                       currentStep >= step 
                         ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg scale-110' 
                         : 'bg-blue-900/30 text-gray-400 border border-blue-800/30'
                     }`}>
                  {step}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full bg-blue-900/30 rounded-full h-2 backdrop-blur-sm">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-500 shadow-lg" 
                 style={{ width: `${(currentStep / 3) * 100}%` }}></div>
          </div>
        </div>

        <div className="bg-blue-950/40 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-800/20 p-8">
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
              onShowResults={() => setShowResults(true)}
              onPrevious={() => setCurrentStep(2)}
              isRTL={isRTL}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TestWizard;
