import React, { useState } from 'react';
import FilterBar from '../ui/FilterBar';
import SearchBar from '../ui/SearchBar';
import PrototypeGrid from '../ui/PrototypeGrid';
import { FILTER_CATEGORIES } from '../../data/constants';

const BrowseSection = ({ prototypes }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPrototypes = prototypes.filter(prototype => {
    const matchesFilter = selectedFilter === 'All' || prototype.category === selectedFilter;
    const matchesSearch = prototype.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prototype.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });
  
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 lg:mb-0">Browse All Prototypes</h2>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">recent prototypes</span>
          <button className="text-blue-600 text-sm font-medium hover:underline">View All</button>
        </div>
      </div>

      <FilterBar 
        filterCategories={FILTER_CATEGORIES}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
      
      <SearchBar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <PrototypeGrid prototypes={filteredPrototypes} />

      <div className="text-center mt-12">
        <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
          Load More Prototypes
        </button>
      </div>
    </section>
  );
};

export default BrowseSection;