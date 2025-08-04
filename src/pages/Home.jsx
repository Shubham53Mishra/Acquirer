import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import FeaturedPrototype from '../components/sections/FeaturedPrototype';
import BrowseSection from '../components/sections/BrowseSection';
import { prototypes } from '../data/prototypes';

const Home = () => (
  <div className="min-h-screen bg-gray-50">
    <Navbar />
    <HeroSection />
    <FeaturedPrototype />
    <BrowseSection prototypes={prototypes} />
  </div>
);

export default Home;
