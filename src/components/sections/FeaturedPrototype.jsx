import React from 'react';

const FeaturedPrototype = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Prototypes</h2>
      
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
        <div className="lg:flex">
          <div className="lg:w-1/2 bg-gradient-to-br from-green-500 to-teal-600 p-8 lg:p-12 flex items-center justify-center">
            <div className="text-white text-center">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">AI Assistant</h3>
              <p className="text-lg opacity-90">Next-generation AI technology</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Personal Assistant</h3>
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">AI/ML</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Assistant</span>
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">Software</span>
            </div>
            <p className="text-gray-600 mb-6">
              A revolutionary AI assistant that understands context and provides intelligent responses for everyday tasks.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                View Details
              </button>
              <button className="border border-gray-300 text-gray-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Play Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrototype;