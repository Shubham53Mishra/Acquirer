import React from 'react';
import { Filter } from 'lucide-react';

const FilterBar = ({ filterCategories, selectedFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-8">
      <div className="flex items-center space-x-2">
        <Filter size={20} className="text-gray-400" />
        <span className="text-sm font-medium text-gray-700">Filter by:</span>
      </div>
      
      {filterCategories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            category === selectedFilter 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;