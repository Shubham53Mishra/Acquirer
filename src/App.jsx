import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrowseProjects from './pages/BrowseProjects';
import MyOffers from './pages/Offers';
import ProductDemo from './pages/productdemo';
import ProductDetails from './pages/ProductDetails';
import Overview from './pages/overview';
import Features from './pages/Features';
import Profile from './pages/Profile';
import CompanyDetails from './pages/Companydetails';
import Financialprofile from './pages/Financialprofile';
import InvestmentExperience from './pages/Investmentexperience';
import ReviewSubmit from './pages/Reviewsubmit';
import InvestorProfile from './pages/Investorprofile';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/BrowseProjects" element={<BrowseProjects />} />
      <Route path="/offers" element={<MyOffers />} />
      <Route path="/productdemo" element={<ProductDemo />} />
      <Route path="/productdetails" element={<ProductDetails />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/features" element={<Features />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/companydetails" element={<CompanyDetails />} />
      <Route path="/financialprofile" element={<Financialprofile />} />
      <Route path="/investmentexperience" element={<InvestmentExperience />} />
      <Route path="/reviewsubmit" element={<ReviewSubmit />} />
      <Route path="/investorprofile" element={<InvestorProfile />} />


    </Routes>
  );
}
