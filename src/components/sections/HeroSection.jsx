import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          Prototype Vault
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore exciting and innovative ideas in the next big idea
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors">
          Submit Your Prototype
        </button>
      </div>
    </section>
  );
};

export default HeroSection;