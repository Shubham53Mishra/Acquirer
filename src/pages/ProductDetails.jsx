import React from 'react';
import OtherNavbar from '../components/layout/OtherNavbar';
import { MapPin, Star, TrendingUp, Medal, Eye, Clock, Cloud, Brain, CheckCircle, RefreshCw } from 'lucide-react';

const ProductDetails = () => {
  const [activeTab, setActiveTab] = React.useState('Technical Details');

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <div className="mt-12">
        <OtherNavbar />
      </div>
      <div className="max-w-screen-xl mx-auto pt-8">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">Browse Projects</h1>
        <p className="text-gray-500 mt-2 mb-4">Discover innovative startups and investment opportunities</p>
        {/* Tabs */}
        <div className="flex gap-4 mt-2 mb-8">
          <button className="px-4 py-2 bg-gray-200 rounded">Browse Projects</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">My Offers</button>
        </div>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs mb-6 text-gray-400">
          <span className="hover:underline cursor-pointer font-medium">&larr; Back to Exchange</span>
          <span className="mx-2">|</span>
          <span className="font-medium text-gray-600">NeuroPath AI</span>
        </div>
        <div className="bg-white rounded-xl shadow p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LEFT: Summary & Technical Architecture */}
            <div>
              <div className="flex gap-2 mb-3">
                <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold shadow">
                  <TrendingUp className="w-4 h-4" /> TRENDING
                </span>
                <span className="flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold shadow">
                  <Medal className="w-4 h-4" /> Series A Ready
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">NeuroPath AI</h2>
              <p className="text-gray-600 mb-2">
                Revolutionary AI-powered neurological disease detection platform using advanced imaging analysis
              </p>
              {/* Tags */}
              <div className="flex gap-2 mb-4">
                <span className="flex items-center gap-1 px-2 py-1 bg-indigo-100 text-indigo-600 rounded text-xs">Healthcare</span>
                <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs">AI/ML</span>
                <span className="flex items-center gap-1 px-2 py-1 bg-pink-100 text-pink-600 rounded text-xs">Med Tech</span>
              </div>
              {/* Stats Row */}
              <div className="flex gap-6 text-xs text-gray-600 mb-6">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Boston, USA</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Updated 2 days ago</span>
                <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> 2,407 views</span>
                <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" /> 4.9 rating</span>
              </div>
              {/* Sub Navigation Tabs */}
              <div className="flex flex-wrap gap-4 mt-2 mb-6 text-sm font-medium">
                <span
                  className={`cursor-pointer ${activeTab === 'Overview' ? 'text-blue-600 underline' : 'text-gray-700'}`}
                  onClick={() => setActiveTab('Overview')}
                >
                  Overview
                </span>
                <span
                  className={`cursor-pointer ${activeTab === 'Technical Details' ? 'text-blue-600 underline' : 'text-gray-700'}`}
                  onClick={() => setActiveTab('Technical Details')}
                >
                  Technical Details
                </span>
                <span
                  className={`cursor-pointer ${activeTab === 'Features' ? 'text-blue-600 underline' : 'text-gray-700'}`}
                  onClick={() => setActiveTab('Features')}
                >
                  Features
                </span>
                <span
                  className={`cursor-pointer ${activeTab === 'Performance' ? 'text-blue-600 underline' : 'text-gray-700'}`}
                  onClick={() => setActiveTab('Performance')}
                >
                  Performance
                </span>
              </div>
              {/* Tab Content */}
              {activeTab === 'Overview' && (
                <div className="bg-white border rounded-xl shadow p-6 mt-2">
                  <h3 className="font-bold text-lg mb-4 text-gray-800">Overview</h3>
                  <p className="text-gray-700 text-base">This is the overview section. Add your overview content here.</p>
                </div>
              )}
              {activeTab === 'Technical Details' && (
                <div className="bg-white border rounded-xl shadow p-4 mt-2">
                  <h3 className="font-bold text-lg mb-4 text-gray-800">
                    Technical <span className="bg-blue-100 text-blue-700 px-1 py-0.5 rounded text-base">Architecture</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* AI/ML Technology Stack */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-green-100 text-green-700 rounded-full p-1"><Brain className="w-4 h-4" /></span>
                        <span className="font-bold text-base text-gray-800">AI/ML Technology Stack</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="bg-gray-50 rounded-lg border px-2 py-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
                          <span className="text-gray-800 text-sm">TensorFlow 2.12+ with custom CNN architectures</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg border px-2 py-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
                          <span className="text-gray-800 text-sm">PyTorch for advanced research & experimentation</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg border px-2 py-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
                          <span className="text-gray-800 text-sm">CUDA-optimized GPU processing (RTX 4090)</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg border px-2 py-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
                          <span className="text-gray-800 text-sm">Custom transformer models for sequence analysis</span>
                        </div>
                      </div>
                    </div>
                    {/* Cloud Infrastructure */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-gray-100 text-blue-700 rounded-full p-1"><Cloud className="w-4 h-4" /></span>
                        <span className="font-bold text-base text-gray-800">Cloud Infrastructure</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="bg-gray-50 rounded-lg border px-2 py-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-indigo-400 rounded-full inline-block"></span>
                          <span className="text-gray-800 text-sm">AWS multi-region deployment with HIPAA compliance</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg border px-2 py-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-indigo-400 rounded-full inline-block"></span>
                          <span className="text-gray-800 text-sm">Kubernetes orchestration for auto-scaling</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg border px-2 py-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-indigo-400 rounded-full inline-block"></span>
                          <span className="text-gray-800 text-sm">Redis Cluster for sub-second response times</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg border px-2 py-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-indigo-400 rounded-full inline-block"></span>
                          <span className="text-gray-800 text-sm">PostgreSQL with TimescaleDB for time-series data</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'Features' && (
                <div className="bg-white border rounded-xl shadow p-6 mt-2">
                  <h3 className="font-bold text-lg mb-4 text-gray-800">Features</h3>
                  <p className="text-gray-700 text-base">This is the features section. Add your features content here.</p>
                </div>
              )}
              {activeTab === 'Performance' && (
                <div className="bg-white border rounded-xl shadow p-6 mt-2">
                  <h3 className="font-bold text-lg mb-4 text-gray-800">Performance</h3>
                  <p className="text-gray-700 text-base">This is the performance section. Add your performance content here.</p>
                </div>
              )}
            </div>
            {/* RIGHT: Development Roadmap */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-gray-800">Development Roadmap</h4>
              <div className="space-y-4">
                {/* Phase 1 */}
                <div className="bg-green-600 rounded-lg p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold">Phase 1: Core AI Platform</h5>
                    <span className="bg-white text-green-600 px-4 py-1 rounded flex items-center gap-2 text-base font-bold shadow"><CheckCircle className="w-5 h-5" /> COMPLETED</span>
                  </div>
                  <p className="text-xs mb-2">Developed foundational AI models, completed initial training on 250k+ brain scans, and validated with 6 leading medical centers.</p>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-white text-green-600 px-2 py-0.5 rounded">01-02-2023</span>
                    <span className="bg-white text-green-600 px-2 py-0.5 rounded">500K+ reviews</span>
                  </div>
                </div>
                {/* Phase 2 */}
                <div className="bg-orange-500 rounded-lg p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold">Phase 2: Clinical Validation & FDA Submission</h5>
                    <span className="bg-white text-orange-500 px-4 py-1 rounded flex items-center gap-2 text-base font-bold shadow"><RefreshCw className="w-5 h-5" /> IN PROGRESS</span>
                  </div>
                  <p className="text-xs mb-2">Conducting clinical trials across 20 medical centers, preparing FDA 510(k) submission, and achieving 96%+ accuracy benchmarks.</p>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-white text-orange-500 px-2 py-0.5 rounded">Q2 2025 - Q3 2025</span>
                    <span className="bg-white text-orange-500 px-2 py-0.5 rounded">75% complete</span>
                  </div>
                </div>
                {/* Phase 3 */}
                <div className="bg-indigo-600 rounded-lg p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold">Phase 3: Commercial Launch & Scale</h5>
                    <span className="bg-white text-indigo-600 px-4 py-1 rounded flex items-center gap-2 text-base font-bold shadow"><Clock className="w-5 h-5" /> PLANNED</span>
                  </div>
                  <p className="text-xs mb-2">FDA clearance, commercial launch with 200+ healthcare systems, international expansion, and Series B fundraising.</p>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-white text-indigo-600 px-2 py-0.5 rounded">Q3 2025 - Q1 2026</span>
                    <span className="bg-white text-indigo-600 px-2 py-0.5 rounded">$1M target</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
