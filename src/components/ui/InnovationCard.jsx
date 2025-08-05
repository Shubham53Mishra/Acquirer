import React from 'react';
import { Star, Zap, Link, BarChart3 } from 'lucide-react';

const InnovationCard = ({ title, icon, color, description }) => {
  const getIcon = () => {
    switch (icon) {
      case 'star':
        return <Star className="w-4 h-4" />;
      case 'zap':
        return <Zap className="w-4 h-4" />;
      case 'link':
        return <Link className="w-4 h-4" />;
      case 'chart':
        return <BarChart3 className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'purple':
        return 'bg-purple-100 text-purple-600';
      case 'green':
        return 'bg-green-100 text-green-600';
      case 'orange':
        return 'bg-orange-100 text-orange-600';
      case 'pink':
        return 'bg-pink-100 text-pink-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded p-4 hover:shadow-sm transition-shadow">
      <div className={`w-8 h-8 ${getColorClasses()} rounded mb-3 flex items-center justify-center`}>
        {getIcon()}
      </div>
      <h5 className="font-medium text-sm mb-1 text-gray-600">{title}</h5>
      <p className="text-xs text-gray-700">
        {description || "Short description about this feature."}
      </p>
    </div>
  );
};

export default InnovationCard;