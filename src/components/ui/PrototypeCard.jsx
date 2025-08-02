import React from 'react';
import { Eye, Heart } from 'lucide-react';

const PrototypeCard = ({ prototype }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className={`h-48 bg-gradient-to-br ${prototype.gradient} relative flex items-center justify-center`}>
        <div className="text-white text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-2">{prototype.title.split(' ')[0]}</h3>
          <p className="text-sm opacity-80">{prototype.category}</p>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white">
            Featured
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="font-semibold text-gray-800 mb-2 text-lg">{prototype.title}</h4>
        <p className="text-gray-600 text-sm mb-4">
          Explore exciting and innovative ideas in the next big idea.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {prototype.tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Eye size={16} />
              <span>{prototype.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart size={16} />
              <span>{prototype.likes}</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              View Details
            </button>
            <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Play Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrototypeCard;