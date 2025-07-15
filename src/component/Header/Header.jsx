import React from 'react';
import logo from "./../../././../public/images/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { PiBell } from "react-icons/pi";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation(); // Get the current route path

  // Only show Login and Sign Up buttons on the Hero, Login, and Sign Up pages
  const showAuthButtons = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white border-b-2 border-gray-100">
      <div className="flex flex-wrap items-center justify-evenly w-full h-auto mr-10 py-3 gap-4">

        {/* Logo Section */}
        <Link to='/'>
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-[31px] h-[40px]" />
            <span className="text-gray-700 font-semibold text-lg">Byway</span>
          </div>
        </Link>

        {/* Categories Link */}
        <Link to="/category">
          <div className="text-gray-700 font-medium cursor-pointer">
            Categories
          </div>
        </Link>

        {/* Search Bar */}
        <div className="relative w-full max-w-[500px] flex-1">
          <span className="absolute left-3 top-2.5 text-gray-500">
            <LuSearch className="text-xl" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-[40px] pl-10 pr-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Nav Links, Cart, and Auth Buttons */}
        <div className="flex items-center gap-4">
          <ul className="flex gap-8 text-gray-700 font-medium">
            <li className="cursor-pointer">Teach on Byway</li>
          </ul>

          {/* Cart Icon (Always visible on all pages) */}
          <IoCartOutline className="text-2xl text-gray-700 cursor-pointer" />

          {/* Conditionally Render Auth Buttons (Only on Hero, Login, and SignUp pages) */}
          {showAuthButtons && (
            <>
              <Link to="/login">
                <button className="text-gray-700 border border-gray-400 px-4 py-1.5 font-medium">
                  Login
                </button>
              </Link>

              <Link to="/signup">
                <button className="bg-blue-500 text-white px-4 py-1.5 font-medium">
                  Sign Up
                </button>
              </Link>
            </>
          )}

          {/* Heart and Bell Icons (Always visible on all pages) */}
          <FiHeart />
          <PiBell />
        </div>
      </div>
    </div>
  );
}

export default Header