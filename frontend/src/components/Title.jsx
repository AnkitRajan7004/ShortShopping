import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-5 items-center mb-6">
      <p className="text-[#a89f94] tracking-wide text-lg sm:text-xl">
        {text1}{' '}
        <span className="text-[#5e4b3c] font-semibold text-2xl sm:text-3xl">{text2}</span>
      </p>
      <span className="w-16 sm:w-20 h-2 sm:h-3 bg-[#c0a98f] rounded-full"></span>
    </div>
  );
};

export default Title;
