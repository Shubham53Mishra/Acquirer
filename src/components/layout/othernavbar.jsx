import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons
import profilePic from '../../assets/profile.jpg'; // Profile picture

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    'AI Pitch',
    'Entrepreneurs',
    'Investors',
    'Agents',
    'Events',
    'Prototype',
    'Pricing',
    'Exchange',
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold text-blue-700">
          Headstart
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 text-sm">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href="#"
              className={`hover:text-blue-600 transition ${
                link === 'Prototype' ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Profile */}
        <div className="hidden md:flex items-center space-x-2">
          <img
            src={profilePic}
            alt="profile"
            className="w-8 h-8 rounded-full border"
          />
          <div className="text-sm text-gray-700">
            <p className="font-medium">John Smith</p>
            <p className="text-xs text-gray-500">Investor / Creator</p>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <nav className="flex flex-col space-y-3 text-gray-700">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className={`hover:text-blue-600 transition ${
                  link === 'Prototype' ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {link}
              </a>
            ))}
            {/* Mobile Profile */}
            <div className="mt-4 flex items-center space-x-2">
              <img
                src={profilePic}
                alt="profile"
                className="w-8 h-8 rounded-full border"
              />
              <div className="text-sm text-gray-700">
                <p className="font-medium">John Smith</p>
                <p className="text-xs text-gray-500">Investor / Creator</p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
