import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-10 sm:gap-5 text-center py-10 px-6 bg-gray-50 rounded-lg max-w-7xl mx-auto shadow-md text-gray-700 mb-10">
      {[{
        icon: assets.exchange_icon,
        title: 'Easy Exchange Policy',
        desc: 'We offer hassle-free exchange policy.'
      }, {
        icon: assets.quality_icon,
        title: '7 Days Return Policy',
        desc: 'We provide 7 days free return policy.'
      }, {
        icon: assets.support_img,
        title: 'Best Customer Support',
        desc: 'We provide 24/7 customer support.'
      }].map(({ icon, title, desc }, idx) => (
        <div
          key={idx}
          className="bg-yellow-50 rounded-xl p-6 flex flex-col items-center shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-default"
        >
          <img className="w-14 mb-5" src={icon} alt={`${title} Icon`} />
          <p className="font-semibold text-yellow-800 mb-2 text-lg">{title}</p>
          <p className="text-yellow-600 text-sm max-w-xs">{desc}</p>
        </div>
      ))}
    </div>
  );
};

export default OurPolicy;
