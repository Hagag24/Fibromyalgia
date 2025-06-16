import React from 'react';
import { Info, Users, ChevronRight, ArrowRight } from 'lucide-react';

const AboutPage = ({ language, isRTL }) => {
  const content = {
    ar: {
      title: 'عن الفيبروميالجيا',
      description: 'معلومات شاملة عن متلازمة الفيبروميالجيا وأهمية فهمها',
      definition: 'الفيبروميالجيا هي متلازمة مزمنة ومعقدة تتميز بألم عضلي هيكلي منتشر، وتعب، واضطرابات في النوم، وخلل في الوظائف المعرفية، وزيادة في حساسية الألم.',
      prevalence: {
        title: 'معدل الانتشار',
        global: '2-4% من سكان العالم',
        gender: '80-90% من المصابين من النساء',
        age: 'يمكن أن تصيب أي فئة عمرية، لكنها أكثر شيوعاً في سن 30-50',
        egyptStudents: '12.4% بين طلاب الجامعات المصرية',
        healthWorkers: '14% بين العاملين في مجال الرعاية الصحية'
      },
      keyPoints: [
        'مرض معترف به عالمياً',
        'يؤثر على جودة الحياة بشكل كبير',
        'التشخيص والعلاج المبكر مهم',
        'يحتاج إلى نهج علاجي شامل',
        'يمكن السيطرة على الأعراض بالعلاج المناسب'
      ],
      impact: {
        title: 'التأثير على الحياة',
        areas: [
          {
            title: 'الصحة البدنية',
            points: [
              'ألم منتشر مزمن',
              'تعب وإرهاق مستمر',
              'صعوبات في النوم',
              'مشاكل في الحركة'
            ]
          },
          {
            title: 'الصحة النفسية',
            points: [
              'القلق والتوتر',
              'الاكتئاب',
              'تغيرات المزاج',
              'الضغط النفسي'
            ]
          },
          {
            title: 'الحياة اليومية',
            points: [
              'صعوبات في العمل',
              'تأثير على العلاقات الاجتماعية',
              'تحديات في الأنشطة اليومية',
              'تغيرات في نمط الحياة'
            ]
          }
        ]
      },
      awareness: {
        title: 'أهمية التوعية',
        points: [
          'زيادة الفهم المجتمعي',
          'تحسين التشخيص المبكر',
          'دعم المرضى وعائلاتهم',
          'تطوير خيارات العلاج'
        ]
      }
    },
    en: {
      title: 'About Fibromyalgia',
      description: 'Comprehensive information about fibromyalgia syndrome and its significance',
      definition: 'Fibromyalgia is a chronic, complex syndrome characterized by widespread musculoskeletal pain, fatigue, sleep disturbances, cognitive dysfunction, and heightened pain sensitivity.',
      prevalence: {
        title: 'Prevalence',
        global: '2-4% of global population',
        gender: '80-90% of patients are women',
        age: 'Can affect any age group, most common between 30-50',
        egyptStudents: '12.4% among Egyptian university students',
        healthWorkers: '14% among healthcare workers'
      },
      keyPoints: [
        'Globally recognized condition',
        'Significantly impacts quality of life',
        'Early diagnosis and treatment is crucial',
        'Requires comprehensive treatment approach',
        'Symptoms can be managed with proper treatment'
      ],
      impact: {
        title: 'Life Impact',
        areas: [
          {
            title: 'Physical Health',
            points: [
              'Chronic widespread pain',
              'Persistent fatigue',
              'Sleep difficulties',
              'Mobility issues'
            ]
          },
          {
            title: 'Mental Health',
            points: [
              'Anxiety and stress',
              'Depression',
              'Mood changes',
              'Psychological pressure'
            ]
          },
          {
            title: 'Daily Life',
            points: [
              'Work difficulties',
              'Impact on social relationships',
              'Daily activity challenges',
              'Lifestyle changes'
            ]
          }
        ]
      },
      awareness: {
        title: 'Importance of Awareness',
        points: [
          'Increase societal understanding',
          'Improve early diagnosis',
          'Support patients and families',
          'Advance treatment options'
        ]
      }
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-[#edf2fb] to-[#e0e7ff] animate-fade-in">
      <div className="container mx-auto px-6">
        <div className={`max-w-6xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-12 text-center animate-fade-up">
            {content[language].title}
          </h1>

          <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-lg p-8 mb-12 animate-fade-in delay-100">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center">
                <Info className="text-white" size={32} />
              </div>
              <p className="text-xl text-gray-800 leading-relaxed">
                {content[language].definition}
              </p>
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-lg p-8 mb-12 animate-fade-in delay-200">
            <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
              <Users className="text-indigo-600" size={28} />
              {content[language].prevalence.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(content[language].prevalence)
                .filter(([key]) => key !== 'title')
                .map(([key, value], index) => (
                  <div key={key} className="bg-white/70 rounded-xl p-4 text-center shadow">
                    <div className="text-2xl font-bold text-indigo-800 mb-2">{value}</div>
                    <div className="text-sm text-gray-700">
                      {language === 'ar' ? 
                        key === 'global' ? 'عالمياً' :
                        key === 'gender' ? 'النوع' :
                        key === 'age' ? 'العمر' :
                        key === 'egyptStudents' ? 'طلاب مصر' :
                        'العاملين الصحيين'
                        :
                        key === 'global' ? 'Globally' :
                        key === 'gender' ? 'Gender' :
                        key === 'age' ? 'Age' :
                        key === 'egyptStudents' ? 'Egyptian Students' :
                        'Healthcare Workers'
                      }
                    </div>
                  </div>
              ))}
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-lg p-8 mb-12 animate-fade-in delay-300">
            <div className="space-y-4">
              {content[language].keyPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-indigo-100/70 rounded-xl">
                  <ChevronRight className="text-indigo-700 flex-shrink-0" size={20} />
                  <p className="text-gray-800 font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in delay-400">
            {content[language].impact.areas.map((area, index) => (
              <div key={index} className="bg-white/40 backdrop-blur-xl rounded-3xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">{area.title}</h3>
                <div className="space-y-3">
                  {area.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start gap-3">
                      <ArrowRight className="text-indigo-600 flex-shrink-0 mt-1" size={16} />
                      <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-indigo-700 to-blue-700 rounded-3xl shadow-xl p-8 text-white animate-fade-in delay-500">
            <h2 className="text-2xl font-bold mb-6">
              {content[language].awareness.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content[language].awareness.points.map((point, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-white text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;