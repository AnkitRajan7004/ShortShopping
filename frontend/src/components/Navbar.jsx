import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, navigate, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium bg-gray-100 px-6 shadow-md sticky top-0 z-50">

      <Link to="/">
        <img className="w-36" src={assets.logo} alt="ShortShopping Logo" />
      </Link>

      <ul className="hidden sm:flex gap-8 text-sm text-gray-700 font-semibold">
        {['/', '/collection', '/about', '/contact'].map((path, i) => {
          const label = ['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'][i];
          return (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 transition-colors duration-300 cursor-pointer
                ${
                  isActive
                    ? 'text-yellow-600'
                    : 'text-gray-700 hover:text-yellow-600'
                }`
              }
            >
              <p>{label}</p>
            </NavLink>
          );
        })}
      </ul>

      <div className="flex items-center gap-6 text-gray-700">
        <img
          onClick={() => {
            setShowSearch(true);
            navigate('/collection');
          }}
          className="w-5 cursor-pointer hover:text-yellow-600 transition-colors"
          src={assets.search_icon}
          alt="Search"
        />

        <div className="group relative">
          <img
            onClick={() => navigate('/login')}
            className="w-5 cursor-pointer hover:text-yellow-600 transition-colors"
            src={assets.profile_icon}
            alt="Profile"
          />

          {/* Dropdown Menu */}
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-20">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-gray-50 text-gray-800 rounded shadow-lg">
              <p className="cursor-pointer hover:text-yellow-600 transition-colors">My Profile</p>
              <p
                onClick={() => navigate('/orders')}
                className="cursor-pointer hover:text-yellow-600 transition-colors"
              >
                Orders
              </p>
              <p className="cursor-pointer hover:text-yellow-600 transition-colors">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img
            className="w-5 min-w-5 cursor-pointer hover:text-yellow-600 transition-colors"
            src={assets.cart_icon}
            alt="Cart"
          />
          <p className="absolute right-[-6px] bottom-[-6px] w-5 text-center leading-5 bg-yellow-600 text-white aspect-square rounded-full text-xs font-semibold">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          className="w-6 cursor-pointer sm:hidden hover:text-yellow-600 transition-colors"
          src={assets.menu_icon}
          alt="Menu"
        />
      </div>

      {/* Sidebar Menu For Small Screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-gray-100 transition-all duration-300 ease-in-out ${
          visible ? 'w-3/4 sm:w-1/3' : 'w-0'
        } shadow-lg z-50`}
      >
        <div className="flex flex-col text-gray-800 h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-3 p-4 cursor-pointer hover:text-yellow-600 transition-colors"
          >
            <img className="h-5 rotate-180" src={assets.dropdown_icon} alt="Back" />
            <p className="font-semibold">Back</p>
          </div>
          {['/', '/collection', '/about', '/contact'].map((path, i) => {
            const label = ['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'][i];
            return (
              <NavLink
                key={label}
                onClick={() => setVisible(false)}
                to={path}
                className={({ isActive }) =>
                  `py-3 pl-8 border-b border-gray-300 hover:bg-yellow-100 transition-colors cursor-pointer ${
                    isActive ? 'bg-yellow-100 font-bold text-yellow-600' : 'text-gray-800'
                  }`
                }
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
