import React from 'react';
import { AlertCircle, Activity, Target, Brain, HelpCircle, ChevronRight } from 'lucide-react';

const SymptomsPage = ({ language, isRTL }) => {
  const content = {
    ar: {
      title: 'أعراض الفيبروميالجيا',
      description: 'تعرف على الأعراض الرئيسية والثانوية لمتلازمة الفيبروميالجيا',
      main: {
        title: 'الأعراض الرئيسية',
        items: [
          'ألم واسع الانتشار يستمر أكثر من 3 أشهر',
          'تعب وإرهاق مستمر',
          'اضطرابات النوم وعدم الاستيقاظ منتعشاً',
          'مشاكل في التركيز والذاكرة (ضباب الفيبرو)'
        ]
      },
      secondary: {
        title: 'الأعراض المصاحبة',
        items: [
          'تيبس العضلات',
          'صداع متكرر',
          'متلازمة القولون العصبي',
          'زيادة الحساسية للمس والضوء والصوت',
          'القلق والاكتئاب',
          'اضطرابات المزاج'
        ]
      },
      note: 'أعراض الفيبروميالجيا متغيرة ويمكن أن تتحسن أو تسوء فجأة',
      distribution: {
        title: 'توزيع الأعراض',
        sections: [
          {
            title: 'الألم المنتشر',
            description: '19 منطقة محددة للألم',
            icon: Target
          },
          {
            title: 'الأعراض الأساسية',
            description: 'التعب، النوم، التركيز',
            icon: Brain
          },
          {
            title: 'أعراض إضافية',
            description: 'أعراض جسدية متنوعة',
            icon: Activity
          }
        ]
      },
      faq: {
        title: 'أسئلة شائعة عن الأعراض',
        questions: [
          {
            q: 'هل تختلف شدة الأعراض من شخص لآخر؟',
            a: 'نعم، تختلف شدة وتأثير الأعراض بشكل كبير بين المرضى'
          },
          {
            q: 'هل يمكن أن تظهر الأعراض وتختفي؟',
            a: 'نعم، الأعراض متقلبة ويمكن أن تتحسن أو تسوء حسب عدة عوامل'
          },
          {
            q: 'متى يجب استشارة الطبيب؟',
            a: 'يجب استشارة الطبيب عند استمرار الألم المنتشر لأكثر من 3 أشهر'
          },
          {
            q: 'هل يمكن أن تتداخل الأعراض مع الحياة اليومية؟',
            a: 'نعم، يمكن أن تؤثر الأعراض على العمل والعلاقات والأنشطة اليومية'
          }
        ]
      }
    },
    en: {
      title: 'Fibromyalgia Symptoms',
      description: 'Learn about the primary and secondary symptoms of fibromyalgia syndrome',
      main: {
        title: 'Primary Symptoms',
        items: [
          'Widespread pain lasting more than 3 months',
          'Persistent fatigue and exhaustion',
          'Sleep disturbances and unrefreshing sleep',
          'Concentration and memory problems (fibro-fog)'
        ]
      },
      secondary: {
        title: 'Associated Symptoms',
        items: [
          'Muscle stiffness',
          'Recurrent headaches',
          'Irritable bowel syndrome',
          'Increased sensitivity to touch, light, and sound',
          'Anxiety and depression',
          'Mood disturbances'
        ]
      },
      note: 'Fibromyalgia symptoms are variable and can suddenly improve or worsen',
      distribution: {
        title: 'Symptom Distribution',
        sections: [
          {
            title: 'Widespread Pain',
            description: '19 specified pain areas',
            icon: Target
          },
          {
            title: 'Core Symptoms',
            description: 'Fatigue, Sleep, Cognition',
            icon: Brain
          },
          {
            title: 'Additional Symptoms',
            description: 'Various physical symptoms',
            icon: Activity
          }
        ]
      },
      faq: {
        title: 'FAQ About Symptoms',
        questions: [
          {
            q: 'Do symptoms vary in severity between individuals?',
            a: 'Yes, the severity and impact of symptoms vary significantly among patients'
          },
          {
            q: 'Can symptoms come and go?',
            a: 'Yes, symptoms are variable and can improve or worsen based on various factors'
          },
          {
            q: 'When should I see a doctor?',
            a: 'Consult a doctor if widespread pain persists for more than 3 months'
          },
          {
            q: 'Can symptoms interfere with daily life?',
            a: 'Yes, symptoms can affect work, relationships, and daily activities'
          }
        ]
      }
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-[#f1f5ff] to-[#dee8ff] animate-fade-in">
      <div className="container mx-auto px-6">
        <div className={`max-w-6xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-12 text-center animate-fade-up">
            {content[language].title}
          </h1>

          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 mb-16 animate-fade-in delay-100">
            <p className="text-xl text-gray-800 leading-relaxed text-center max-w-3xl mx-auto">
              {content[language].description}
            </p>
          </div>
          <div className="relative flex justify-center items-center mb-12">
            <img 
              src="/Symptoms.jpg" 
              alt={language === 'ar' ? 'أسباب الفيبروميالجيا' : 'Causes of Fibromyalgia'} 
              className="rounded-3xl shadow-2xl w-[480px] h-auto object-contain z-10"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {[content[language].main, content[language].secondary].map((section, i) => (
              <div key={i} className="bg-white/50 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-indigo-100 animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 ${i === 0 ? 'bg-gradient-to-r from-red-500 to-pink-500' : 'bg-gradient-to-r from-indigo-500 to-cyan-500'} rounded-xl flex items-center justify-center`}>
                    {(i === 0 ? <AlertCircle className="text-white" size={28} /> : <Activity className="text-white" size={28} />)}
                  </div>
                  <h2 className="text-2xl font-bold text-indigo-900">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-all duration-300">
                      <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-800 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/50 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-12 animate-fade-in delay-200 border border-indigo-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-8 text-center">
              {content[language].distribution.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content[language].distribution.sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="relative">
                      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center animate-pulse">
                        <Icon className="text-white" size={48} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {index === 0 ? '19' : index === 1 ? '3' : '40+'}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-indigo-900 mb-2">{section.title}</h3>
                    <p className="text-gray-700 text-sm">{section.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-yellow-100 border border-yellow-300 rounded-3xl p-8 mb-12 animate-fade-in delay-300">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  {language === 'ar' ? 'ملاحظة مهمة' : 'Important Note'}
                </h3>
                <p className="text-yellow-700 leading-relaxed">{content[language].note}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-xl rounded-3xl shadow-xl p-8 animate-fade-in delay-400 border border-indigo-100">
            <h2 className="text-2xl font-bold text-indigo-900 mb-8 text-center flex items-center justify-center gap-3">
              <HelpCircle className="text-teal-500" size={28} />
              {content[language].faq.title}
            </h2>
            <div className="space-y-6">
              {content[language].faq.questions.map((item, index) => (
                <div key={index} className="bg-white/60 rounded-xl p-6 border border-indigo-100">
                  <div className="flex items-start gap-3 mb-3">
                    <ChevronRight className="text-teal-500 flex-shrink-0 mt-1" size={20} />
                    <h3 className="text-lg font-semibold text-indigo-900">{item.q}</h3>
                  </div>
                  <p className="text-gray-700 ml-9">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomsPage;
