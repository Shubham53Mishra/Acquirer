import React from 'react';

const ProductDetails = () => {
  return (
    <div className="px-4 md:px-10 py-8 bg-gray-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold">Browse Projects</h1>
        <p className="text-gray-500 mt-2">Discover innovative startups and investment opportunities</p>

        {/* Tabs */}
        <div className="flex gap-4 mt-6 mb-4">
          <button className="px-4 py-2 bg-gray-200 rounded">Browse Projects</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">My Offers</button>
        </div>

        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-6">&larr; Back to Exchange / <span className="text-black font-medium">NeuroPath AI</span></p>

        {/* Card Box */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT: Summary */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3 text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">TRENDING</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Series A Ready</span>
              </div>

              <h2 className="text-2xl font-bold mb-2">NeuroPath AI</h2>
              <p className="text-sm text-gray-600 mb-4">
                Revolutionary AI-powered neurological disease detection platform using advanced imaging analysis
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 text-xs font-medium mb-4">
                <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded">Healthcare</span>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded">AI/ML</span>
                <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded">MedTech</span>
              </div>

              {/* Stats */}
              <div className="flex gap-4 text-xs text-gray-500 mb-6">
                <span>📍 Boston, USA</span>
                <span>• Updated 2 days ago</span>
                <span>• 2,407 views</span>
                <span>• ⭐ 4.9 rating</span>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-6 text-sm font-semibold border-b pb-2">
                <span className="text-blue-600 border-b-2 border-blue-600">Technical Details</span>
                <span className="text-gray-500">Overview</span>
                <span className="text-gray-500">Features</span>
                <span className="text-gray-500">Performance</span>
              </div>

              {/* Technical Architecture */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 border rounded p-4">
                  <h4 className="font-semibold mb-2">AI/ML Technology Stack</h4>
                  <ul className="list-disc ml-4 text-gray-600 space-y-1">
                    <li>TensorFlow 2.12+ with custom CNN architectures</li>
                    <li>PyTorch for advanced research & experimentation</li>
                    <li>CUDA-optimized GPUs (NVIDIA RTX 4090)</li>
                    <li>Custom transformer models for sequence analysis</li>
                  </ul>
                </div>
                <div className="bg-gray-50 border rounded p-4">
                  <h4 className="font-semibold mb-2">Cloud Infrastructure</h4>
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
            <div className="space-y-4">
              {/* Phase 1 */}
              <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded">
                <h5 className="font-semibold text-green-800 mb-1">Phase 1: Core AI Platform</h5>
                <p className="text-xs text-gray-700 mb-2">
                  Developed foundational AI models, trained on 250k+ scans, validated with 6 medical centers.
                </p>
                <div className="text-xs flex justify-between text-green-800">
                  <span>01-02-2023</span>
                  <span className="bg-green-600 text-white px-2 py-0.5 rounded">✔ COMPLETED</span>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded">
                <h5 className="font-semibold text-orange-800 mb-1">Phase 2: Clinical Validation & FDA Submission</h5>
                <p className="text-xs text-gray-700 mb-2">
                  Clinical trials across 20 centers, prepping FDA 510(k), achieving 96% accuracy benchmarks.
                </p>
                <div className="text-xs flex justify-between text-orange-800">
                  <span>Q2 2025 - Q3 2025</span>
                  <span className="bg-orange-500 text-white px-2 py-0.5 rounded">🔄 IN PROGRESS</span>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-indigo-100 border-l-4 border-indigo-600 p-4 rounded">
                <h5 className="font-semibold text-indigo-800 mb-1">Phase 3: Commercial Launch & Scale</h5>
                <p className="text-xs text-gray-700 mb-2">
                  FDA clearance, commercial launch, Series B fundraising, and international expansion.
                </p>
                <div className="text-xs flex justify-between text-indigo-800">
                  <span>Q3 2025 - Q1 2026</span>
                  <span className="bg-indigo-600 text-white px-2 py-0.5 rounded">🕒 PLANNED</span>
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
