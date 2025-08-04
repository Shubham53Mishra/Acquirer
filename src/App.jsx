import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrowseProjects from './pages/BrowseProjects';
import MyOffers from './pages/Offers';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/BrowseProjects" element={<BrowseProjects />} />
      <Route path="/offers" element={<MyOffers />} />
    </Routes>
  );
}
