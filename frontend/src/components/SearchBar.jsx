import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  useEffect(() => {
    if (location.pathname.includes('collection') && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-[#fdfaf6] py-5 px-4 text-center shadow-sm">
      <div className="relative inline-flex items-center justify-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
        <input
          className="flex-1 py-3 px-5 pr-10 text-sm text-[#5e4b3c] bg-[#f5f2ed] border border-[#d6ccc2] rounded-full outline-none shadow-inner placeholder-[#a89f94] focus:ring-2 focus:ring-[#c0a98f]"
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={assets.search_icon}
          alt="Search"
          className="absolute right-4 w-4 h-4 pointer-events-none"
        />
      </div>
      <div className="mt-3">
        <img
          onClick={() => setShowSearch(false)}
          src={assets.cross_icon}
          alt="Close"
          className="w-4 h-4 mx-auto cursor-pointer hover:scale-110 transition-transform"
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
