import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // For mobile menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10 top-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold">
              Open Source v13
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#planning" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Planning
              </a>
              <a href="#historique" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Historique
              </a>
              <a href="#team" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Team
              </a>
              <a href="#sponsors" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Sponsors
              </a>
              <a href="#ar-section" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Augmented Reality
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#planning" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
              Planning
            </a>
            <a href="#historique" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
              Historique
            </a>
            <a href="#team" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
              Team
            </a>
            <a href="#sponsors" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
              Sponsors
            </a>
            <a href="#ar-section" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
              Augmented Reality
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
