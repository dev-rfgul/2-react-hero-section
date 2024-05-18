"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="flex justify-between pl-11 pr-11 h-16 text-center bg-white text-black">
        <div>
          <img className="w-16 h-15" src="/images/logo.png" alt="logo" />
        </div>

        <div className="hidden md:flex m-4">
          <ul className="flex space-x-11">
            <li className="text-md">
              <a className="hover:text-gray-700" href="#">
                Home
              </a>
            </li>
            <li className="text-md">
              <a className="hover:text-gray-700" href="#">
                About Us
              </a>
            </li>
            <li className="text-md">
              <a className="hover:text-gray-700" href="#">
                Services
              </a>
            </li>
            <li className="text-md">
              <a className="hover:text-gray-700" href="#">
                Testimonials
              </a>
            </li>
            <li className="text-md">
              <a className="hover:text-gray-700" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex m-4">
          <button className="mr-4 bg-blue-300 hover:bg-blue-400 hover:font-extrabold rounded-md text-black h-9 w-24">
            Login
          </button>
          <button className="border-2 border-sky-500 hover:border-black font-bold rounded-md h-9 w-24 hover:bg-blue-300">
            Sign up
          </button>
        </div>

        <div className="md:hidden m-4 flex items-center">
          <button onClick={toggleMenu} className="text-xl">
            &#9776;
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white text-black px-11 py-4">
          <ul>
            <li className="py-2 border-b border-gray-300">
              <a className="block hover:text-gray-700" href="#">
                Home
              </a>
            </li>
            <li className="py-2 border-b border-gray-300">
              <a className="block hover:text-gray-700" href="#">
                About Us
              </a>
            </li>
            <li className="py-2 border-b border-gray-300">
              <a className="block hover:text-gray-700" href="#">
                Services
              </a>
            </li>
            <li className="py-2 border-b border-gray-300">
              <a className="block hover:text-gray-700" href="#">
                Testimonials
              </a>
            </li>
            <li className="py-2 border-b border-gray-300">
              <a className="block hover:text-gray-700" href="#">
                Contact Us
              </a>
            </li>
            <li className="py-2">
              <button className="w-full bg-blue-300 hover:bg-blue-400 hover:font-extrabold rounded-md text-black h-9">
                Login
              </button>
            </li>
            <li className="py-2">
              <button className="w-full border-2 border-sky-500 hover:border-black font-bold rounded-md h-9 hover:bg-blue-300">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
