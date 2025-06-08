import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 shadow-md px-6 md:px-20 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-purple-600 text-3xl font-bold tracking-wide">
          Arif Ansari
        </h1>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl text-gray-800 cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:space-x-10 text-gray-700 font-medium absolute md:static w-full md:w-auto left-0 top-16 
            bg-white md:bg-transparent px-6 md:px-0 py-6 md:py-0 flex-col md:flex-row space-y-6 md:space-y-0 shadow-md md:shadow-none 
            transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'}`}
        >
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item, i) => (
            <li
              key={i}
              className="hover:text-purple-600 hover:scale-105 transition duration-200 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
