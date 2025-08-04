<<<<<<< HEAD
// src/App.jsx
import React from 'react';
import Home from './pages/Home';

export default function App() {
  return (
    <Home />
  );
}
=======
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
>>>>>>> acquirer-new-branch
