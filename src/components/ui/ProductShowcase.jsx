import React from 'react';
import { Lock } from 'lucide-react';

const ProductShowcase = () => {
  return (
    <div>
      <h3 className="text-base font-medium mb-3 text-gray-700">Product Showcase</h3>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="aspect-square bg-blue-600 rounded flex flex-col items-center justify-center text-white text-xs">
          <Lock className="w-4 h-4 mb-1" />
          <span>Potential Content</span>
        </div>
        <div className="aspect-square bg-blue-600 rounded flex flex-col items-center justify-center text-white text-xs">
          <Lock className="w-4 h-4 mb-1" />
          <span>Potential Content</span>
        </div>
        <div className="aspect-square bg-blue-600 rounded flex flex-col items-center justify-center text-white text-xs relative">
          <div className="absolute top-1 right-1 bg-black bg-opacity-60 text-white text-xs px-1 rounded">
            123 × 19
          </div>
          <Lock className="w-4 h-4 mb-1" />
          <span>Potential Content</span>
        </div>
      </div>

      {/* Confidential Prototype Banner */}
      <div className="bg-orange-50 border border-orange-200 rounded p-3">
        <div className="flex items-center gap-2 mb-1">
          <Lock className="w-4 h-4 text-orange-600" />
          <span className="font-medium text-sm">Confidential Prototype</span>
        </div>
        <p className="text-xs text-gray-600 mb-2">
          This prototype contains proprietary intellectual property (IP) and is 
          classified as confidential. Access requires proper authorization and NDA.
        </p>
        <button className="bg-orange-500 text-white px-3 py-1 rounded text-xs font-medium hover:bg-orange-600 transition-colors">
          Sign in to Access Content
        </button>
      </div>
    </div>
  );
};

export default ProductShowcase;