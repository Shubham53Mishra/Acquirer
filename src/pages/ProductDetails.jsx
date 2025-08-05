import React from 'react';
import OtherNavbar from '../components/layout/OtherNavbar';
import { MapPin, Star, TrendingUp, Medal, Eye, Clock, Cloud, Brain, CheckCircle, RefreshCw } from 'lucide-react';

const ProductDetails = () => {
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
                <span className="text-blue-600 underline cursor-pointer">Technical Details</span>
                <span className="text-gray-700 cursor-pointer">Overview</span>
                <span className="text-gray-700 cursor-pointer">Features</span>
                <span className="text-gray-700 cursor-pointer">Performance</span>
              </div>
              {/* Technical Architecture */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 border rounded p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2"><Brain className="w-4 h-4 text-indigo-600" /> AI/ML Technology Stack</h4>
                  <ul className="list-disc ml-4 text-gray-600 space-y-1">
                    <li>TensorFlow 2.12+ with custom CNN architectures</li>
                    <li>PyTorch for advanced research & experimentation</li>
                    <li>CUDA-optimized GPUs (NVIDIA RTX 4090)</li>
                    <li>Custom transformer models for sequence analysis</li>
                  </ul>
                </div>
                <div className="bg-gray-50 border rounded p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2"><Cloud className="w-4 h-4 text-blue-600" /> Cloud Infrastructure</h4>
                  <ul className="list-disc ml-4 text-gray-600 space-y-1">
                    <li>AWS multi-region with HIPAA compliance</li>
                    <li>Kubernetes orchestration for auto-scaling</li>
                    <li>Redis Cluster for sub-second responses</li>
                    <li>PostgreSQL with TimescaleDB for time-series data</li>
                  </ul>
                </div>
              </div>
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
