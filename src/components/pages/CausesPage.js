import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

const CausesPage = ({ language, isRTL }) => {
  const content = {
    ar: {
      title: 'أسباب الفيبروميالجيا',
      description: 'تعرف على العوامل المختلفة التي قد تسبب متلازمة الفيبروميالجيا',
      categories: [
        {
          title: 'العوامل العصبية',
          description: 'تغييرات في الجهاز العصبي',
          details: [
            'تغيرات في معالجة الألم في الدماغ',
            'خلل في نظام المعالجة المركزي',
            'فرط حساسية الجهاز العصبي',
            'تغيرات في مستويات الناقلات العصبية'
          ]
        },
        {
          title: 'العوامل الجينية',
          description: 'دور العوامل الوراثية',
          details: [
            'جينات حساسية الألم (ADRB2, TRPV3)',
            'الجينات الالتهابية (TNF)',
            'تاريخ عائلي للفيبروميالجيا',
            'عوامل وراثية مؤهبة'
          ]
        },
        {
          title: 'العوامل البيئية والنفسية',
          description: 'تجارب حياتية وظروف محددة',
          details: [
            'عدوى أو أمراض محفزة',
            'صدمة جسدية أو نفسية',
            'التوتر المزمن',
            'قلة النشاط البدني والسمنة'
          ]
        },
        {
          title: 'اختلال التوازن الهرموني',
          description: 'خلل في الهرمونات المنظمة للألم',
          details: [
            'انخفاض السيروتونين',
            'نقص النورادرينالين',
            'خلل في الدوبامين',
            'تغيرات في مستويات هرمون التوتر'
          ]
        }
      ],
      note: 'من المهم فهم أن الفيبروميالجيا قد تنتج عن تفاعل معقد بين عدة عوامل مجتمعة'
    },
    en: {
      title: 'Causes of Fibromyalgia',
      description: 'Learn about the various factors that may cause fibromyalgia syndrome',
      categories: [
        {
          title: 'Neurological Factors',
          description: 'Changes in the nervous system',
          details: [
            'Alterations in pain processing in the brain',
            'Central processing system dysfunction',
            'Nervous system hypersensitivity',
            'Changes in neurotransmitter levels'
          ]
        },
        {
          title: 'Genetic Factors',
          description: 'Role of hereditary factors',
          details: [
            'Pain sensitivity genes (ADRB2, TRPV3)',
            'Inflammatory genes (TNF)',
            'Family history of fibromyalgia',
            'Genetic predisposition'
          ]
        },
        {
          title: 'Environmental & Psychological Factors',
          description: 'Specific life experiences and conditions',
          details: [
            'Triggering infections or illnesses',
            'Physical or psychological trauma',
            'Chronic stress',
            'Physical inactivity and obesity'
          ]
        },
        {
          title: 'Hormonal Imbalances',
          description: 'Dysfunction in pain-regulating hormones',
          details: [
            'Decreased serotonin',
            'Norepinephrine deficiency',
            'Dopamine dysfunction',
            'Stress hormone alterations'
          ]
        }
      ],
      note: "It's important to understand that fibromyalgia may result from a complex interaction of multiple factors"
    }
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-[#f1f5ff] to-[#dee8ff] animate-fade-in">
      <div className="container mx-auto px-6">
        <div className={`max-w-6xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>

          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-12 text-center animate-fade-up">
            {content[language].title}
          </h1>

          <div className="bg-white/50 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-12 animate-fade-in delay-100">
            <p className="text-xl text-gray-800 leading-relaxed text-center max-w-3xl mx-auto">
              {content[language].description}
            </p>
          </div>

          <div className="relative flex justify-center items-center mb-12">
            <img 
              src="/causes.jpg" 
              alt={language === 'ar' ? 'أسباب الفيبروميالجيا' : 'Causes of Fibromyalgia'} 
              className="rounded-3xl shadow-2xl w-[280px] h-auto object-contain z-10"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {content[language].categories.map((category, index) => (
              <div key={index} className="bg-white/50 backdrop-blur-xl rounded-3xl shadow-xl p-8 animate-fade-in">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-indigo-900">{category.title}</h2>
                  <p className="text-gray-700 text-sm leading-relaxed">{category.description}</p>
                </div>
                <div className="space-y-4">
                  {category.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-all duration-300">
                      <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-800 text-sm leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-100 border border-yellow-300 rounded-3xl p-8 animate-fade-in delay-300">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  {language === 'ar' ? 'ملاحظة مهمة' : 'Important Note'}
                </h3>
                <p className="text-yellow-700 leading-relaxed">
                  {content[language].note}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CausesPage;
