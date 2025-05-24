// NewsletterBox.jsx
import React from 'react';

const NewsletterBox = () => {
  return (
    <div className="text-center px-4 sm:px-0 max-w-xl mx-auto bg-gray-50 rounded-lg shadow-lg py-16">
      <p className="text-3xl font-bold text-yellow-600">Subscribe now & get 20% off</p>
      <p className="text-gray-600 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-8 border border-yellow-400 rounded-lg pl-4 bg-yellow-100 shadow-md">
        <input
          className="w-full sm:flex-1 outline-none py-3 px-4 bg-yellow-50 rounded-lg text-yellow-700 placeholder-yellow-500"
          type="email"
          placeholder="Enter your email id"
          required
        />
        <button
          className="bg-yellow-500 text-white text-sm px-12 py-3 rounded-lg hover:bg-yellow-700 transition-colors duration-300"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
