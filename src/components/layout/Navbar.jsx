import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Headstart</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Article</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Community</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Startups</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Agents</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Launch</a>
              <a href="#" className="text-blue-600 font-medium">Prototype</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Exchange</a>
            </nav>
          </div>
          
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;