import React from 'react';
import PrototypeCard from './PrototypeCard';

const PrototypeGrid = ({ prototypes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {prototypes.map((prototype) => (
        <PrototypeCard key={prototype.id} prototype={prototype} />
      ))}
    </div>
  );
};

export default PrototypeGrid;