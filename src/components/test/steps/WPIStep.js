import React from 'react';

const WPIStep = ({ language, testData, setTestData, onNext, isRTL }) => {
  const content = {
    ar: {
      title: 'الجزء الأول: مؤشر انتشار الألم (WPI)',
      instruction: 'حدد المناطق التي شعرت فيها بالألم خلال الأسبوع الماضي',
      noAreas: 'لم يتم تحديد أي منطقة',
      fewAreas: 'عدد قليل من المناطق',
      widespread: 'ألم واسع الانتشار',
      next: 'التالي'
    },
    en: {
      title: 'Part 1: Widespread Pain Index (WPI)',
      instruction: 'Select areas where you felt pain during the past week',
      noAreas: 'No areas selected',
      fewAreas: 'Few areas selected',
      widespread: 'Widespread pain',
      next: 'Next'
    }
  };

  const painAreas = [
    { id: 'shoulderLeft', name: { ar: 'الكتف الأيسر', en: 'Left shoulder' } },
    { id: 'shoulderRight', name: { ar: 'الكتف الأيمن', en: 'Right shoulder' } },
    { id: 'upperArmLeft', name: { ar: 'الذراع العلوي الأيسر', en: 'Left upper arm' } },
    { id: 'upperArmRight', name: { ar: 'الذراع العلوي الأيمن', en: 'Right upper arm' } },
    { id: 'lowerArmLeft', name: { ar: 'الذراع السفلي الأيسر', en: 'Left lower arm' } },
    { id: 'lowerArmRight', name: { ar: 'الذراع السفلي الأيمن', en: 'Right lower arm' } },
    { id: 'hipLeft', name: { ar: 'الورك الأيسر', en: 'Left hip' } },
    { id: 'hipRight', name: { ar: 'الورك الأيمن', en: 'Right hip' } },
    { id: 'upperLegLeft', name: { ar: 'الفخذ الأيسر', en: 'Left thigh' } },
    { id: 'upperLegRight', name: { ar: 'الفخذ الأيمن', en: 'Right thigh' } },
    { id: 'lowerLegLeft', name: { ar: 'الساق اليسرى', en: 'Left lower leg' } },
    { id: 'lowerLegRight', name: { ar: 'الساق اليمنى', en: 'Right lower leg' } },
    { id: 'jaw', name: { ar: 'الفك', en: 'Jaw' } },
    { id: 'chest', name: { ar: 'الصدر', en: 'Chest' } },
    { id: 'abdomen', name: { ar: 'البطن', en: 'Abdomen' } },
    { id: 'upperBack', name: { ar: 'أعلى الظهر', en: 'Upper back' } },
    { id: 'lowerBack', name: { ar: 'أسفل الظهر', en: 'Lower back' } },
    { id: 'neck', name: { ar: 'الرقبة', en: 'Neck' } },
    { id: 'headache', name: { ar: 'الصداع', en: 'Headache' } }
  ];

  const handleAreaSelection = (areaId) => {
    setTestData(prev => {
      const updatedAreas = prev.wpiAreas.includes(areaId)
        ? prev.wpiAreas.filter(id => id !== areaId)
        : [...prev.wpiAreas, areaId];
      return {
        ...prev,
        wpiAreas: updatedAreas,
        wpiScore: updatedAreas.length
      };
    });
  };

  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
          {content[language].title}
        </h2>
        <p className="text-gray-300 mb-6">{content[language].instruction}</p>
      </div>

      <div className={`flex flex-col lg:flex-row ${isRTL ? 'lg:flex-row-reverse' : ''} gap-10 items-start`}>
        <div className={`w-full lg:w-1/2 flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
          <img
            src="/Diagnosing.jpg"
            alt="WPI Body Map"
            className="rounded-2xl border border-blue-800/20 shadow-xl h-full object-contain max-h-[740px]"
          />
        </div>

        <div className={`w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 ${isRTL ? 'order-first' : 'order-last'}`}>
          {painAreas.map((area) => (
            <div
              key={area.id}
              onClick={() => handleAreaSelection(area.id)}
              className={`p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 text-center font-medium text-sm
                ${testData.wpiAreas.includes(area.id)
                  ? 'bg-gradient-to-br from-purple-900/60 to-blue-900/60 border-purple-500/30 text-white'
                  : 'bg-blue-900/20 border border-blue-800/20 text-gray-300'}
              `}
            >
              {area.name[language]}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="mb-8 p-6 bg-blue-900/30 rounded-2xl backdrop-blur-sm border border-blue-800/20">
          <p className="text-xl font-semibold text-blue-200 mb-4">
            WPI Score: {testData.wpiScore}/19
          </p>
          <div className="w-full bg-blue-900/50 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(testData.wpiScore / 19) * 100}%` }}
            ></div>
          </div>
          <p className="text-gray-300 mt-4">
            {testData.wpiScore === 0 && content[language].noAreas}
            {testData.wpiScore > 0 && testData.wpiScore < 7 && content[language].fewAreas}
            {testData.wpiScore >= 7 && content[language].widespread}
          </p>
        </div>

        <button
          onClick={onNext}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {content[language].next}
        </button>
      </div>
    </div>
  );
};

export default WPIStep;
