import React from 'react';
import { CheckCircle, TestTube, BookOpen } from 'lucide-react';

const DiagnosisPage = ({ language, isRTL }) => {
  const content = {
    ar: {
      title: 'تشخيص الفيبروميالجيا',
      description: 'كيف يتم تشخيص متلازمة الفيبروميالجيا والمعايير المستخدمة',
      criteria: {
        title: 'معايير التشخيص (ACR 2010/2011)',
        description: 'يتم التشخيص باستخدام مؤشرين رئيسيين:',
        wpi: {
          title: 'مؤشر انتشار الألم (WPI)',
          description: 'عدد المناطق المؤلمة من أصل 19 منطقة محددة'
        },
        ss: {
          title: 'مقياس شدة الأعراض (SS)',
          description: 'تقييم شدة الأعراض الأساسية والمصاحبة'
        },
        combinations: [
          'WPI ≥ 7 و SS ≥ 5',
          'أو WPI 3-6 و SS ≥ 9'
        ]
      },
      requirements: [
        'استمرار الأعراض لمدة 3 أشهر على الأقل',
        'عدم وجود اضطراب آخر يفسر الألم',
        'استبعاد الأمراض المشابهة'
      ]
    },
    en: {
      title: 'Fibromyalgia Diagnosis',
      description: 'How fibromyalgia syndrome is diagnosed and the criteria used',
      criteria: {
        title: 'Diagnostic Criteria (ACR 2010/2011)',
        description: 'Diagnosis uses two main indices:',
        wpi: {
          title: 'Widespread Pain Index (WPI)',
          description: 'Number of painful areas out of 19 specified regions'
        },
        ss: {
          title: 'Symptom Severity Score (SS)',
          description: 'Assessment of core and associated symptom severity'
        },
        combinations: [
          'WPI ≥ 7 and SS ≥ 5',
          'or WPI 3-6 and SS ≥ 9'
        ]
      },
      requirements: [
        'Symptoms present for at least 3 months',
        'No other disorder explaining the pain',
        'Exclusion of similar conditions'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1f5ff] to-[#dee8ff] py-20 animate-fade-in">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6 animate-fade-up">
            {content[language].title}
          </h1>
          <p className="text-xl text-gray-700">
            {content[language].description}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Diagnostic Criteria Card */}
          <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-indigo-100 shadow-xl animate-fade-in delay-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                <TestTube className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-indigo-900">
                {content[language].criteria.title}
              </h2>
            </div>
            
            <p className="text-gray-800 mb-6">
              {content[language].criteria.description}
            </p>

            {/* WPI Section */}
            <div className="mb-6 p-6 rounded-xl bg-indigo-50 border border-indigo-100">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                {content[language].criteria.wpi.title}
              </h3>
              <p className="text-gray-700">
                {content[language].criteria.wpi.description}
              </p>
            </div>

            {/* SS Section */}
            <div className="mb-6 p-6 rounded-xl bg-purple-50 border border-purple-100">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                {content[language].criteria.ss.title}
              </h3>
              <p className="text-gray-700">
                {content[language].criteria.ss.description}
              </p>
            </div>

            {/* Combinations */}
            <div className="space-y-3">
              {content[language].criteria.combinations.map((combination, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <p className="text-indigo-800 text-sm">{combination}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements Card */}
          <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-purple-100 shadow-xl animate-fade-in delay-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg">
                <BookOpen className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-purple-900">
                {language === 'ar' ? 'المتطلبات الأساسية' : 'Key Requirements'}
              </h2>
            </div>

            <div className="space-y-6">
              {content[language].requirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 border border-purple-100">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-800 text-sm leading-relaxed">{requirement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisPage;
