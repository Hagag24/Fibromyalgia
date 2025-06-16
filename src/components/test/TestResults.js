import React from 'react';
import { CheckCircle, AlertCircle, RotateCcw, Info } from 'lucide-react';

const TestResults = ({ language, results, restartTest, isRTL }) => {
  const content = {
    ar: {
      title: 'نتائج التقييم التفصيلية',
      wpiSection: {
        title: 'مؤشر انتشار الألم (WPI)',
        description: 'عدد مناطق الألم في الجسم',
        outOf: 'من أصل 19 منطقة'
      },
      ssSection: {
        title: 'مقياس شدة الأعراض (SS)',
        part2a: 'الجزء 2أ - الأعراض الأساسية',
        part2b: 'الجزء 2ب - الأعراض المصاحبة',
        totalScore: 'المجموع الكلي',
        outOf: 'من أصل 12 نقطة'
      },
      criteria: {
        title: 'معايير التشخيص المرجعية',
        condition1: {
          title: 'المعيار الأول',
          description: 'مؤشر الألم المنتشر ≥ 7 ودرجة شدة الأعراض ≥ 5'
        },
        condition2: {
          title: 'المعيار الثاني',
          description: 'مؤشر الألم المنتشر بين 3-6 ودرجة شدة الأعراض ≥ 9'
        }
      },
      result: {
        meetsTitle: 'النتائج تتوافق مع معايير متلازمة الفيبروميالجيا',
        notMeetsTitle: 'النتائج لا تتوافق حالياً مع معايير التشخيص',
        meetsDescription: 'يُنصح بمناقشة هذه النتائج مع طبيب مختص للتقييم الشامل والتشخيص النهائي',
        notMeetsDescription: 'إذا استمرت الأعراض لديك، يُرجى استشارة الطبيب المختص'
      },
      disclaimer: 'هذا التقييم مخصص لأغراض توعوية فقط ولا يُغني عن التشخيص الطبي المتخصص',
      restartButton: 'إعادة التقييم'
    },
    en: {
      title: 'Detailed Assessment Results',
      wpiSection: {
        title: 'Widespread Pain Index (WPI)',
        description: 'Number of painful body areas',
        outOf: 'out of 19 areas'
      },
      ssSection: {
        title: 'Symptom Severity Score (SS)',
        part2a: 'Part 2A - Core Symptoms',
        part2b: 'Part 2B - Additional Symptoms',
        totalScore: 'Total Score',
        outOf: 'out of 12 points'
      },
      criteria: {
        title: 'Diagnostic Reference Criteria',
        condition1: {
          title: 'First Criterion',
          description: 'WPI ≥ 7 and SS Score ≥ 5'
        },
        condition2: {
          title: 'Second Criterion',
          description: 'WPI 3-6 and SS Score ≥ 9'
        }
      },
      result: {
        meetsTitle: 'Results Match Fibromyalgia Criteria',
        notMeetsTitle: 'Results Currently Don\'t Match Criteria',
        meetsDescription: 'We recommend discussing these results with a specialist for comprehensive evaluation',
        notMeetsDescription: 'If symptoms persist, please consult with a medical specialist'
      },
      disclaimer: 'This assessment is for educational purposes only and does not replace professional medical diagnosis',
      restartButton: 'Restart Assessment'
    }
  };

  const totalSSScore = results.ssScore2a + results.ssScore2b;
  const meetsCriteria = (results.wpiScore >= 7 && totalSSScore >= 5) || 
                       (results.wpiScore >= 3 && results.wpiScore <= 6 && totalSSScore >= 9);

  return (
    <div className={`space-y-8 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* نتيجة التقييم العامة */}
      <div className={`p-8 rounded-3xl relative overflow-hidden ${
        meetsCriteria 
          ? 'bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/30'
          : 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30'
      }`}>
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            {meetsCriteria ? (
              <AlertCircle size={40} className="text-yellow-500 flex-shrink-0" />
            ) : (
              <CheckCircle size={40} className="text-blue-500 flex-shrink-0" />
            )}
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {meetsCriteria ? content[language].result.meetsTitle : content[language].result.notMeetsTitle}
            </h2>
          </div>
          <p className="text-gray-300 text-center mb-6 max-w-2xl mx-auto">
            {meetsCriteria ? content[language].result.meetsDescription : content[language].result.notMeetsDescription}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/50 backdrop-blur-sm"></div>
      </div>

      {/* تفاصيل النتائج */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* مؤشر انتشار الألم */}
        <div className="bg-blue-950/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/20">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
            {content[language].wpiSection.title}
          </h3>
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-bold text-blue-400">{results.wpiScore}</span>
            <span className="text-gray-400">{content[language].wpiSection.outOf}</span>
          </div>
          <div className="w-full bg-blue-900/50 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(results.wpiScore / 19) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            {content[language].wpiSection.description}
          </p>
        </div>

        {/* درجة شدة الأعراض */}
        <div className="bg-blue-950/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/20">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
            {content[language].ssSection.title}
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-300">{content[language].ssSection.part2a}</span>
              <span className="text-blue-400 font-semibold">{results.ssScore2a}/9</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-300">{content[language].ssSection.part2b}</span>
              <span className="text-blue-400 font-semibold">{results.ssScore2b}/3</span>
            </div>
            <div className="pt-4 border-t border-blue-800/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl text-gray-200">{content[language].ssSection.totalScore}</span>
                <span className="text-2xl font-bold text-blue-400">{totalSSScore}/12</span>
              </div>
              <div className="w-full bg-blue-900/50 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${(totalSSScore / 12) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* معايير التشخيص */}
      <div className="bg-blue-950/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/20">
        <div className="flex items-start gap-3">
          <Info className={`text-blue-400 flex-shrink-0 mt-1 ${isRTL ? 'ml-3' : 'mr-3'}`} size={24} />
          <div className="flex-1">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
              {content[language].criteria.title}
            </h3>
            <div className="space-y-4">
              <div className={`p-4 rounded-xl ${
                results.wpiScore >= 7 && totalSSScore >= 5
                  ? 'bg-green-900/30 border-green-500/30'
                  : 'bg-blue-900/30 border-blue-800/20'
              } border`}>
                <div className="flex items-center gap-2 mb-2">
                  {results.wpiScore >= 7 && totalSSScore >= 5 ? (
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-blue-800/40 flex-shrink-0"></div>
                  )}
                  <h4 className="text-gray-200">{content[language].criteria.condition1.title}</h4>
                </div>
                <p className="text-gray-400 text-sm">{content[language].criteria.condition1.description}</p>
              </div>

              <div className={`p-4 rounded-xl ${
                results.wpiScore >= 3 && results.wpiScore <= 6 && totalSSScore >= 9
                  ? 'bg-green-900/30 border-green-500/30'
                  : 'bg-blue-900/30 border-blue-800/20'
              } border`}>
                <div className="flex items-center gap-2 mb-2">
                  {results.wpiScore >= 3 && results.wpiScore <= 6 && totalSSScore >= 9 ? (
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  ) : (
                    <div className="w-5 h-5 rounded-full border-2 border-blue-800/40 flex-shrink-0"></div>
                  )}
                  <h4 className="text-gray-200">{content[language].criteria.condition2.title}</h4>
                </div>
                <p className="text-gray-400 text-sm">{content[language].criteria.condition2.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* تنبيه وزر إعادة التقييم */}
      <div className="text-center space-y-6">
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          {content[language].disclaimer}
        </p>
        <button
          onClick={restartTest}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
        >
          <RotateCcw size={20} className={isRTL ? 'ml-2' : 'mr-2'} />
          {content[language].restartButton}
        </button>
      </div>
    </div>
  );
};

export default TestResults;
