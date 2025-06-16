import React from 'react';
import { Users, Brain, Target } from 'lucide-react';

const StatsSection = ({ language }) => {
  const content = {
    ar: {
      stats: [
        {
          icon: Users,
          value: '7:1',
          label: 'نسبة الإصابة بين النساء للرجال'
        },
        {
          icon: Target,
          value: '12.4%',
          label: 'نسبة الإصابة بين طلاب الجامعات المصرية'
        },
        {
          icon: Brain,
          value: '14%',
          label: 'نسبة الإصابة بين العاملين في الصحة'
        }
      ]
    },
    en: {
      stats: [
        {
          icon: Users,
          value: '7:1',
          label: 'Female to male ratio'
        },
        {
          icon: Target,
          value: '12.4%',
          label: 'Prevalence among Egyptian students'
        },
        {
          icon: Brain,
          value: '14%',
          label: 'Prevalence among healthcare workers'
        }
      ]
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">
          {language === 'ar' ? 'إحصائيات مهمة' : 'Key Statistics'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {content[language].stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md text-center p-6 border border-purple-100 hover:shadow-lg transition duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4 mx-auto">
                <stat.icon size={32} />
              </div>
              <h3 className="text-4xl font-extrabold text-purple-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600 text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;