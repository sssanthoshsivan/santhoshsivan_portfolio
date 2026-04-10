import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-[#faf9f6] flex items-center justify-center z-50" role="status" aria-live="polite">
      <div className="text-center">
        <h1 className="text-4xl font-light text-gray-800 mb-8 animate-fade-in">வணக்கம்</h1>
        <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
          <path
            d="M 50 100 Q 75 75 100 100 Q 125 75 150 100 Q 125 125 100 100 Q 75 125 50 100"
            fill="none"
            stroke="#8B7355"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="path"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loading;