import React from 'react';

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
      <div 
        className="bg-purple-600 h-2 rounded-full transition-all duration-300"
        style={{ width: `${(currentStep / 3) * 100}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
