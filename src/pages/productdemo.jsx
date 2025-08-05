/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import OtherNavbar from '../components/layout/OtherNavbar';
import ProductShowcase from '../components/ui/ProductShowcase';
import InteractiveDemo from '../components/ui/InteractiveDemo';
import InnovationCard from '../components/ui/InnovationCard';
import { Brain, HeartPulse, FlaskConical, MapPin, Clock, Eye, Star, Lock } from 'lucide-react';

const ProductDemo = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <OtherNavbar />
      {/* Main Card Full Width */}
      <div className="bg-white rounded-2xl shadow-lg mx-0 px-12 py-12 mt-8">
        {/* Header and Tabs inside card */}
        <div className="pb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-600">Browse Projects</h1>
          <p className="text-gray-500 mt-2 mb-4">Discover innovative startups and investment opportunities</p>
          <div className="flex gap-4 mt-2 mb-8">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Browse Projects</button>
            <button className="px-4 py-2 bg-gray-200 rounded">My Offers</button>
          </div>
          {/* Breadcrumb below buttons */}
          <div className="flex items-center gap-2 text-xs mb-6 text-gray-400">
            <span className="hover:underline cursor-pointer font-medium">← Back to Exchange</span>
            <span className="mx-2">|</span>
            <span className="font-medium text-gray-600">NeuroPath AI</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            {/* Trending Badge Card */}
            <div className="flex gap-2 mb-3">
              <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold shadow">
                <span className="text-lg">🔥</span> TRENDING
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold shadow">
                Series A Ready
              </span>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">NeuroPath AI</h2>
            <p className="text-gray-600 mb-2">
              Revolutionizing neurological disease detection platform using advanced imaging analysis.
            </p>
            {/* Tags with icons */}
            <div className="flex gap-2 mb-4">
              <span className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                <HeartPulse className="w-3 h-3" /> Healthcare
              </span>
              <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                <Brain className="w-3 h-3" /> AI/ML
              </span>
              <span className="flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                <FlaskConical className="w-3 h-3" /> Med Tech
              </span>
            </div>
            {/* Stats Row with icons */}
            <div className="flex gap-6 text-xs text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>Location:</span>
                <span className="font-medium">Global</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>Founded:</span>
                <span className="font-medium">2024</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>Views:</span>
                <span className="font-medium">2,437</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500" />
                <span>Rating:</span>
                <span className="font-medium">4.8</span>
              </div>
            </div>
            {/* Sub Navigation Tabs */}
            <div className="flex flex-wrap gap-4 mt-2 mb-6 text-sm font-medium">
              <span
                className={activeTab === 'overview' ? 'text-blue-600 underline cursor-pointer' : 'text-gray-700 cursor-pointer'}
                onClick={() => setActiveTab('overview')}
              >Overview</span>
              <span
                className={activeTab === 'technical' ? 'text-blue-600 underline cursor-pointer' : 'text-gray-700 cursor-pointer'}
                onClick={() => setActiveTab('technical')}
              >Technical Details</span>
              <span
                className={activeTab === 'features' ? 'text-blue-600 underline cursor-pointer' : 'text-gray-700 cursor-pointer'}
                onClick={() => setActiveTab('features')}
              >Features</span>
              <span
                className={activeTab === 'performance' ? 'text-blue-600 underline cursor-pointer' : 'text-gray-700 cursor-pointer'}
                onClick={() => setActiveTab('performance')}
              >Performance</span>
            </div>
            {/* Product Showcase */}
            <ProductShowcase />
          </div>
          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <InteractiveDemo />
            {/* Pitch Recorded Video (from InteractiveDemo) */}
            {/* Revolutionary Technology */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Revolutionary Technology</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                NeuroPath AI represents a paradigm shift in neurological disease detection, leveraging cutting-edge artificial intelligence to identify early-stage neurological disorders through advanced imaging analysis. Our proprietary algorithms can detect subtle patterns in brain scans.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                The technology integrates seamlessly with existing medical infrastructure, providing real-time analysis and comprehensive reports. With over 94% accuracy rate in clinical trials, we're setting new industry standards for neurological disease detection powered by cutting-edge deep learning algorithms at 97% accuracy.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                The platform seamlessly integrates with existing medical infrastructures, providing real-time analysis, comprehensive reports, and clinical decision support recommendations to healthcare providers across a wide range of neurological conditions and diagnostic imaging modalities.
              </p>
            </div>
          </div>
        </div>
        {/* Key Innovations Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <InnovationCard 
            title="Advanced Neural Networks" 
            icon="star" 
            color="purple"
            description="Proprietary AI algorithms trained on extensive medical datasets to achieve unprecedented accuracy levels in neurological diagnoses."
          />
          <InnovationCard 
            title="Lightning Fast Analysis" 
            icon="zap" 
            color="green"
            description="Real-time processing that delivers comprehensive diagnostic reports in under 30 seconds, compared to traditional methods taking hours."
          />
          <InnovationCard 
            title="Seamless Integration" 
            icon="link" 
            color="orange"
            description="Easy integration with existing hospital systems, EHRs, and medical imaging devices without disrupting workflows."
          />
          <InnovationCard 
            title="Intelligent Reporting" 
            icon="chart" 
            color="pink"
            description="Automated, comprehensive reporting with actionable insights that help medical professionals make informed decisions."
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDemo;