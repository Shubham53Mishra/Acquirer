import React from 'react';
import { Play } from 'lucide-react';

const InteractiveDemo = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Interactive Demo</h3>
        <div className="mb-4">
          <span className="block text-lg font-semibold text-gray-700">Confidential Prototype</span>
        </div>
        <div className="bg-indigo-600 rounded p-4 text-white text-center mb-4">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded mx-auto mb-2 flex items-center justify-center">
            <Play className="w-4 h-4" />
          </div>
          <h4 className="font-medium text-sm mb-1">Watch Live Demo</h4>
          <p className="text-xs text-indigo-100 mb-2">See our technology in action</p>
          <div className="flex gap-1 justify-center">
            <span className="bg-white text-indigo-600 px-2 py-0.5 rounded-full text-xs">Live</span>
            <span className="bg-white text-indigo-600 px-2 py-0.5 rounded-full text-xs">Interactive</span>
          </div>
        </div>
        <div className="bg-indigo-600 rounded p-4 text-white text-center">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded mx-auto mb-2 flex items-center justify-center">
            <Play className="w-4 h-4" />
          </div>
          <h4 className="font-medium text-sm mb-1">Pitch Recorded Video</h4>
          <p className="text-xs text-indigo-100">Watch recorded video demo</p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;
