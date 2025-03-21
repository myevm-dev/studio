import React from 'react';

interface PluginsSectionProps {
  items: string[];
}

const PluginsSection: React.FC<PluginsSectionProps> = ({ items }) => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-lg">
      <h3 className="text-[#fd01f5] font-semibold mb-2">Plugins</h3> {/* Updated to pink like Skills */}
      <div className="grid grid-cols-5 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-700 p-2 rounded-lg text-white hover:scale-105 transition-all duration-300">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PluginsSection;
