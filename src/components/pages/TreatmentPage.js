import React from 'react';
import { TestTube, Heart, AlertCircle, CheckCircle } from 'lucide-react';

const TreatmentPage = ({ language, isRTL }) => {
  const content = {
    ar: {
      title: 'علاج الفيبروميالجيا',
      description: 'تعرف على خيارات العلاج المتاحة لمتلازمة الفيبروميالجيا',
      approach: 'يعتمد العلاج على نهج متعدد الأوجه يجمع بين العلاج الدوائي وغير الدوائي',
      pharmacological: {
        title: 'العلاج الدوائي',
        fda: {
          title: 'الأدوية المعتمدة من FDA',
          items: ['بريجابالين (Lyrica)', 'دولوكستين (Cymbalta)', 'ميلناسيبران (Savella)']
        },
        other: {
          title: 'خيارات أخرى',
          items: ['مضادات الاكتئاب ثلاثية الحلقات', 'مضادات التشنجات', 'مسكنات خفيفة']
        }
      },
      nonPharmacological: {
        title: 'العلاج غير الدوائي',
        items: [
          'العلاج النفسي والسلوكي المعرفي',
          'التمارين الرياضية المنتظمة',
          'تحسين نظام النوم',
          'إدارة التوتر والاسترخاء',
          'نظام غذائي صحي',
          'العلاج الطبيعي'
        ]
      },
      importantNotes: {
        title: 'ملاحظات مهمة',
        items: [
          'يجب أن يكون العلاج مخصصاً لكل مريض',
          'قد يستغرق تحديد العلاج المناسب بعض الوقت',
          'المتابعة المنتظمة مع الطبيب ضرورية',
          'يمكن دمج عدة أنواع من العلاج للحصول على أفضل النتائج'
        ]
      }
    },
    en: {
      title: 'Fibromyalgia Treatment',
      description: 'Learn about available treatment options for fibromyalgia syndrome',
      approach: 'Treatment relies on a multidisciplinary approach combining pharmacological and non-pharmacological strategies',
      pharmacological: {
        title: 'Pharmacological Treatment',
        fda: {
          title: 'FDA-Approved Medications',
          items: ['Pregabalin (Lyrica)', 'Duloxetine (Cymbalta)', 'Milnacipran (Savella)']
        },
        other: {
          title: 'Other Options',
          items: ['Tricyclic antidepressants', 'Anticonvulsants', 'Mild analgesics']
        }
      },
      nonPharmacological: {
        title: 'Non-Pharmacological Treatment',
        items: [
          'Cognitive behavioral therapy',
          'Regular exercise',
          'Sleep hygiene improvement',
          'Stress management and relaxation',
          'Healthy diet',
          'Physical therapy'
        ]
      },
      importantNotes: {
        title: 'Important Notes',
        items: [
          'Treatment should be individualized for each patient',
          'Finding the right treatment combination may take time',
          'Regular follow-up with healthcare provider is essential',
          'Multiple treatment approaches can be combined for best results'
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

          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 mb-12 text-center animate-fade-in delay-100">
            <p className="text-lg text-gray-800 leading-relaxed">
              {content[language].approach}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-indigo-100 transition-transform duration-500 hover:-translate-y-2">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
                <TestTube className="text-indigo-500 animate-bounce" size={28} />
                {content[language].pharmacological.title}
              </h2>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-indigo-700 mb-4">
                  {content[language].pharmacological.fda.title}
                </h3>
                <div className="space-y-3">
                  {content[language].pharmacological.fda.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition duration-300">
                      <CheckCircle className="text-indigo-500 animate-pulse" size={16} />
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-4">
                  {content[language].pharmacological.other.title}
                </h3>
                <div className="space-y-3">
                  {content[language].pharmacological.other.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition duration-300">
                      <CheckCircle className="text-purple-500 animate-pulse" size={16} />
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-green-100 transition-transform duration-500 hover:-translate-y-2">
              <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                <Heart className="text-green-500 animate-bounce" size={28} />
                {content[language].nonPharmacological.title}
              </h2>
              <div className="space-y-4">
                {content[language].nonPharmacological.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition duration-300">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1 animate-pulse" size={20} />
                    <p className="text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-yellow-100 border border-yellow-300 rounded-3xl shadow-xl p-8 transition-transform duration-500 hover:-translate-y-2">
            <h2 className="text-2xl font-bold text-yellow-800 mb-6 flex items-center gap-3">
              <AlertCircle className="text-yellow-500 animate-bounce" size={28} />
              {content[language].importantNotes.title}
            </h2>
            <div className="space-y-4">
              {content[language].importantNotes.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-yellow-50 hover:bg-yellow-100 rounded-xl transition duration-300">
                  <CheckCircle className="text-yellow-600 flex-shrink-0 mt-1 animate-pulse" size={20} />
                  <p className="text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentPage;
