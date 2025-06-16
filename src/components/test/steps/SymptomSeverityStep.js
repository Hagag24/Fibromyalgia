import React from 'react';

const SymptomSeverityStep = ({ language, testData, setTestData, onNext, onPrevious, isRTL }) => {
  const content = {
    ar: {
      title: 'الجزء الثاني (أ): تقييم شدة الأعراض الأساسية',
      instruction: 'قيّم شدة هذه الأعراض خلال الأسبوع الماضي',
      symptoms: {
        fatigue: {
          title: 'التعب',
          description: 'الشعور بالإرهاق والتعب وانخفاض الطاقة'
        },
        sleep: {
          title: 'اضطرابات النوم',
          description: 'صعوبات في النوم أو النوم غير المريح'
        },
        cognitive: {
          title: 'الضباب الذهني',
          description: 'مشاكل في التركيز والذاكرة والتفكير الواضح'
        }
      },
      severity: {
        0: 'لا يوجد',
        1: 'خفيف',
        2: 'متوسط',
        3: 'شديد'
      },
      buttons: {
        previous: 'السابق',
        next: 'التالي'
      }
    },
    en: {
      title: 'Part 2A: Core Symptom Severity Assessment',
      instruction: 'Rate the severity of these symptoms during the past week',
      symptoms: {
        fatigue: {
          title: 'Fatigue',
          description: 'Feeling tired and having low energy'
        },
        sleep: {
          title: 'Sleep Problems',
          description: 'Trouble sleeping or unrefreshing sleep'
        },
        cognitive: {
          title: 'Cognitive Issues',
          description: 'Problems with thinking, memory, and concentration'
        }
      },
      severity: {
        0: 'None',
        1: 'Mild',
        2: 'Moderate',
        3: 'Severe'
      },
      buttons: {
        previous: 'Previous',
        next: 'Next'
      }
    }
  };

  const handleSeverityChange = (symptom, severity) => {
    setTestData(prev => ({
      ...prev,
      symptoms2a: { ...prev.symptoms2a, [symptom]: severity },
      ssScore2a: Object.values({ ...prev.symptoms2a, [symptom]: severity }).reduce((sum, val) => sum + val, 0)
    }));
  };

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
          {content[language].title}
        </h2>
        <p className="text-gray-300 mb-6">
          {content[language].instruction}
        </p>
      </div>

      <div className={`flex flex-col lg:flex-row ${isRTL ? 'lg:flex-row-reverse' : ''} gap-10 items-start`}>
        <div className={`w-full lg:w-1/2 ${isRTL ? 'order-2' : 'order-1'} flex justify-center`}>
          <img
            src="/Diagnosing.jpg"
            alt="Symptom Severity"
            className="rounded-2xl border border-blue-800/20 shadow-xl h-full object-contain max-h-[740px]"
          />
        </div>

        <div className={`w-full lg:w-1/2 ${isRTL ? 'order-1' : 'order-2'} space-y-8`}>
          {Object.entries(content[language].symptoms).map(([symptomKey, symptom]) => (
            <div key={symptomKey} className="p-6 rounded-2xl bg-blue-900/30 backdrop-blur-sm border border-blue-800/20">
              <h3 className="text-xl font-semibold text-blue-200 mb-2">
                {symptom.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {symptom.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[0, 1, 2, 3].map((severity) => (
                  <button
                    key={severity}
                    onClick={() => handleSeverityChange(symptomKey, severity)}
                    className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm font-medium
                      ${testData.symptoms2a[symptomKey] === severity
                        ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                        : 'bg-blue-900/20 text-gray-300 hover:bg-blue-900/40'}
                      border border-blue-800/20`}
                  >
                    {content[language].severity[severity]}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="mb-8 p-6 bg-blue-900/30 rounded-2xl backdrop-blur-sm border border-blue-800/20">
          <p className="text-xl font-semibold text-blue-200 mb-4">
            SS Score Part 2A: {testData.ssScore2a}/9
          </p>
          <div className="w-full bg-blue-900/50 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(testData.ssScore2a / 9) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={onPrevious}
            className="px-8 py-3 rounded-xl bg-blue-900/30 text-gray-300 hover:bg-blue-900/50 transition-all duration-300 border border-blue-800/20"
          >
            {content[language].buttons.previous}
          </button>
          <button
            onClick={onNext}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {content[language].buttons.next}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SymptomSeverityStep;
