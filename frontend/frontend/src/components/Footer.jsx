import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-gray-50 text-gray-800 mt-40 py-10 px-6 sm:px-16">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm">

        {/* Logo and description */}
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="ShortShopping Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-relaxed">
            ShortShopping offers you a quick and convenient shopping experience, bringing the best products at your fingertips. Discover, shop, and enjoy with ShortShopping!
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-semibold mb-5 border-b border-yellow-400 pb-2 text-yellow-700">
            COMPANY
          </p>
          <ul className="flex flex-col gap-2 text-gray-600 cursor-pointer hover:text-yellow-600 transition-colors duration-300">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-semibold mb-5 border-b border-yellow-400 pb-2 text-yellow-700">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>7004189931</li>
            <li>rajanankit47@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10">
        <hr className="border-yellow-300" />
        <p className="py-5 text-sm text-center text-gray-500 select-none">
          © 2024 shortshopping.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
