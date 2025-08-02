// src/App.jsx
import React from 'react';
import Navbar from './components/layout/Navbar'; // ✅ make sure path is correct
import HeroSection from './components/sections/HeroSection';
import FeaturedPrototype from './components/sections/FeaturedPrototype';
import BrowseSection from './components/sections/BrowseSection';
import { prototypes } from './data/prototypes';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar /> {/* ✅ use it */}
      <HeroSection />
      <FeaturedPrototype />
      <BrowseSection prototypes={prototypes} />
      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Prototype Vault</h1>
        <p className="mt-4 text-gray-600">Explore and submit ideas</p>
      </div>
    </div>
  );
}
