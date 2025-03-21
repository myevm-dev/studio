import React from 'react';

interface SkillsSectionProps {
  items: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ items }) => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-lg">
      <h3 className="text-[#fd01f5] font-semibold mb-2">Skills</h3> {/* Changed to pink */}
      <div className="grid grid-cols-5 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-700 p-2 rounded-lg text-white hover:scale-105 transition-all duration-300"> {/* Changed text color to white */}
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
