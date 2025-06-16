import React from 'react';
import { AlertCircle } from 'lucide-react';

const OtherSymptomsStep = ({ language, testData, setTestData, onPrevious, onShowResults }) => {
  const content = {
    ar: {
      title: 'الجزء 2ب - الأعراض الأخرى',
      instruction: 'حدد الأعراض التالية التي عانيت منها خلال الأسبوع الماضي',
      scoring: {
        title: 'نتيجة حساب الأعراض',
        ranges: [
          '0 أعراض = 0 نقطة',
          '1-10 أعراض = 1 نقطة',
          '11-24 عرض = 2 نقطة',
          '25 عرض أو أكثر = 3 نقاط'
        ]
      },
      buttons: {
        previous: 'السابق',
        next: 'التالي'
      }
    },
    en: {
      title: 'Part 2b - Other Symptoms',
      instruction: 'Check each of the following symptoms that you have experienced over the past week',
      scoring: {
        title: 'Symptom Score Calculation',
        ranges: [
          '0 symptoms = 0 points',
          '1-10 symptoms = 1 point',
          '11-24 symptoms = 2 points',
          '25+ symptoms = 3 points'
        ]
      },
      buttons: {
        previous: 'Previous',
        next: 'Next'
      }
    }
  };

  const calculateScore = (count) => {
    if (count === 0) return 0;
    if (count <= 10) return 1;
    if (count <= 24) return 2;
    return 3;
  };

  const handleSymptomToggle = (id) => {
    const newSymptoms = testData.otherSymptoms.includes(id)
      ? testData.otherSymptoms.filter(s => s !== id)
      : [...testData.otherSymptoms, id];

    const score = calculateScore(newSymptoms.length);

    setTestData({
      ...testData,
      otherSymptoms: newSymptoms,
      ssScore2b: score
    });
  };

  const symptoms = [
    { id: 'musclePain', name: { ar: 'ألم العضلات', en: 'Muscle pain' } },
    { id: 'ibs', name: { ar: 'متلازمة القولون العصبي', en: 'Irritable bowel syndrome' } },
    { id: 'fatigue', name: { ar: 'التعب/الإرهاق', en: 'Fatigue/tiredness' } },
    { id: 'cognition', name: { ar: 'مشاكل التفكير أو التذكر', en: 'Thinking or remembering problem' } },
    { id: 'muscleWeakness', name: { ar: 'ضعف العضلات', en: 'Muscle Weakness' } },
    { id: 'headache', name: { ar: 'الصداع', en: 'Headache' } },
    { id: 'abdominalPain', name: { ar: 'ألم/تقلصات في البطن', en: 'Pain/cramps in abdomen' } },
    { id: 'numbness', name: { ar: 'خدر/تنميل', en: 'Numbness/tingling' } },
    { id: 'dizziness', name: { ar: 'دوخة', en: 'Dizziness' } },
    { id: 'insomnia', name: { ar: 'أرق', en: 'Insomnia' } },
    { id: 'depression', name: { ar: 'اكتئاب', en: 'Depression' } },
    { id: 'constipation', name: { ar: 'إمساك', en: 'Constipation' } },
    { id: 'upperAbdominalPain', name: { ar: 'ألم في أعلى البطن', en: 'Pain in upper abdomen' } },
    { id: 'nausea', name: { ar: 'غثيان', en: 'Nausea' } },
    { id: 'nervousness', name: { ar: 'توتر', en: 'Nervousness' } },
    { id: 'chestPain', name: { ar: 'ألم في الصدر', en: 'Chest pain' } },
    { id: 'blurredVision', name: { ar: 'رؤية ضبابية', en: 'Blurred vision' } },
    { id: 'fever', name: { ar: 'حمى', en: 'Fever' } },
    { id: 'diarrhea', name: { ar: 'إسهال', en: 'Diarrhea' } },
    { id: 'dryMouth', name: { ar: 'جفاف الفم', en: 'Dry mouth' } },
    { id: 'itching', name: { ar: 'حكة', en: 'Itching' } },
    { id: 'wheezing', name: { ar: 'صفير في التنفس', en: 'Wheezing' } },
    { id: 'raynauds', name: { ar: 'ظاهرة رينود', en: "Raynaud's" } },
    { id: 'hives', name: { ar: 'شرى/طفح جلدي', en: 'Hives/welts' } },
    { id: 'tinnitus', name: { ar: 'طنين في الأذن', en: 'Ringing in ears' } },
    { id: 'vomiting', name: { ar: 'قيء', en: 'Vomiting' } },
    { id: 'heartburn', name: { ar: 'حرقة المعدة', en: 'Heartburn' } },
    { id: 'oralUlcers', name: { ar: 'قرح الفم', en: 'Oral ulcers' } },
    { id: 'tasteLoss', name: { ar: 'فقدان/تغير حاسة التذوق', en: 'Loss/change in taste' } },
    { id: 'seizures', name: { ar: 'نوبات صرع', en: 'Seizures' } },
    { id: 'dryEyes', name: { ar: 'جفاف العين', en: 'Dry eyes' } },
    { id: 'shortBreath', name: { ar: 'ضيق في التنفس', en: 'Shortness of breath' } },
    { id: 'appetiteLoss', name: { ar: 'فقدان الشهية', en: 'Loss of appetite' } },
    { id: 'rash', name: { ar: 'طفح جلدي', en: 'Rash' } },
    { id: 'sunSensitivity', name: { ar: 'حساسية للشمس', en: 'Sun sensitivity' } },
    { id: 'hearingDifficulties', name: { ar: 'صعوبات في السمع', en: 'Hearing difficulties' } },
    { id: 'easyBruising', name: { ar: 'سهولة التكدم', en: 'Easy bruising' } },
    { id: 'hairLoss', name: { ar: 'تساقط الشعر', en: 'Hair loss' } },
    { id: 'frequentUrination', name: { ar: 'كثرة التبول', en: 'Frequent urination' } },
    { id: 'painfulUrination', name: { ar: 'ألم عند التبول', en: 'Painful urination' } },
    { id: 'bladderSpasms', name: { ar: 'تشنجات المثانة', en: 'Bladder spasms' } }
  ];
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-4">
          {content[language].title}
        </h2>
        <p className="text-gray-300 mb-6">
          {content[language].instruction}
        </p>
        <img
          src="/Fibromyalgia/Diagnosing.jpg"
          alt="WPI Body Map"
          className="mx-auto rounded-2xl border border-blue-800/20 shadow-xl w-full max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {symptoms.map((symptom) => (
          <div
            key={symptom.id}
            onClick={() => handleSymptomToggle(symptom.id)}
            className={`p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 text-center font-medium text-sm
              ${testData.otherSymptoms.includes(symptom.id)
                ? 'bg-gradient-to-br from-purple-900/60 to-blue-900/60 border-purple-500/30 text-white'
                : 'bg-blue-900/20 border border-blue-800/20 text-gray-300'}
            `}
          >
            {symptom.name[language]}
          </div>
        ))}
      </div>

      <div className="bg-blue-900/30 rounded-2xl p-6 backdrop-blur-sm border border-blue-800/20">
        <div className="flex items-start gap-4">
          <AlertCircle className="text-blue-400 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-xl font-semibold text-blue-200 mb-2">
              {content[language].scoring.title}
            </h3>
            <div className="space-y-2">
              {content[language].scoring.ranges.map((range, index) => (
                <p key={index} className="text-gray-300">{range}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="mb-8 p-6 bg-blue-900/30 rounded-2xl backdrop-blur-sm border border-blue-800/20">
          <p className="text-xl font-semibold text-blue-200 mb-4">
            {language === 'ar' ? 'عدد الأعراض المحددة' : 'Number of Selected Symptoms'}: {testData.otherSymptoms.length}
          </p>
          <p className="text-xl font-semibold text-blue-200">
            {language === 'ar' ? 'النتيجة' : 'Score'}: {testData.ssScore2b}/3
          </p>
          <div className="w-full bg-blue-900/50 rounded-full h-3 mt-4">
            <div
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(testData.ssScore2b / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={onPrevious}
            className="px-8 py-3 rounded-xl bg-blue-900/30 text-gray-300 hover:bg-blue-900/50 transition-all duration-300 border border-blue-800/20"
          >
            {content[language].buttons.previous}
          </button>
          <button
            type="button"
            onClick={() => typeof onShowResults === 'function' && onShowResults()}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {content[language].buttons.next}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherSymptomsStep;
