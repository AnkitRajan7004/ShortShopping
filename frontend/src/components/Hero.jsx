import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-300 bg-gray-50 rounded-lg shadow-md overflow-hidden">

      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-start p-10 sm:py-20 sm:px-16 text-gray-900">
        
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[3px] bg-yellow-600 rounded"></div>
          <p className="font-semibold text-sm md:text-base tracking-wide text-yellow-600">FEATURED COLLECTION</p>
        </div>

        <h1 className="prata-regular text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
          Discover Your Style
        </h1>

        <div className="flex items-center gap-3 cursor-pointer group">
          <p className="font-semibold text-sm md:text-base text-gray-800 group-hover:text-yellow-800 transition-colors duration-300">
            EXPLORE NOW
          </p>
          <div className="w-10 h-[2px] bg-yellow-600 rounded group-hover:bg-yellow-800 transition-colors duration-300"></div>
        </div>
      </div>

      {/* Hero Right Side */}
      <img
        className="w-full sm:w-1/2 object-cover"
        src={assets.hero_img}
        alt="Hero Banner"
      />
    </div>
  );
};

export default Hero;
