import React from 'react';
import { Brain, Activity, BarChart, Globe2, Book, Users } from 'lucide-react';

const FeaturesSection = ({ language, isRTL }) => {
  const content = {
    ar: {
      title: 'مميزات أداة التقييم',
      subtitle: 'تجربة تقييم متكاملة وموثوقة',
      features: [
        { title: 'تقييم شامل', description: 'تقييم دقيق لجميع مناطق الألم والأعراض المصاحبة', icon: Brain },
        { title: 'نتائج فورية', description: 'نتائج تفصيلية ومخططات توضيحية فورية', icon: BarChart },
        { title: 'معايير طبية', description: 'متوافق مع المعايير الطبية المعتمدة عالمياً', icon: Activity },
        { title: 'دعم لغوي', description: 'دعم كامل للغة العربية والإنجليزية', icon: Globe2 },
        { title: 'محتوى تعليمي', description: 'معلومات شاملة عن المرض وطرق العلاج', icon: Book },
        { title: 'مجتمع داعم', description: 'منصة للتوعية ودعم المرضى وعائلاتهم', icon: Users }
      ]
    },
    en: {
      title: 'Assessment Tool Features',
      subtitle: 'Comprehensive and reliable assessment experience',
      features: [
        { title: 'Comprehensive Assessment', description: 'Accurate evaluation of all pain areas and associated symptoms', icon: Brain },
        { title: 'Instant Results', description: 'Detailed results and visual charts provided instantly', icon: BarChart },
        { title: 'Medical Standards', description: 'Compliant with globally recognized medical criteria', icon: Activity },
        { title: 'Language Support', description: 'Full Arabic and English language support', icon: Globe2 },
        { title: 'Educational Content', description: 'Comprehensive information about the condition and treatments', icon: Book },
        { title: 'Supportive Community', description: 'Platform for awareness and supporting patients and families', icon: Users }
      ]
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-blue-950 via-purple-950 to-indigo-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-300">{content[language].subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {content[language].features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-6 border border-purple-800/20 shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative group"
              >
                <div className="flex items-start gap-4 relative z-10 flex-col sm:flex-row sm:items-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-700 to-purple-700 flex items-center justify-center border border-purple-700 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Icon size={28} className="text-white group-hover:text-blue-100" />
                  </div>
                  <div className={`${isRTL ? 'text-right' : 'text-left'} mt-4 sm:mt-0`}>
                    <h3 className="text-lg font-semibold text-purple-100 mb-1 group-hover:scale-105 transition-transform">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-purple-500/30 rounded-full opacity-0 group-hover:opacity-100 transition duration-700 animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-blue-500/30 rounded-full opacity-0 group-hover:opacity-100 transition duration-700 animate-pulse delay-150"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
