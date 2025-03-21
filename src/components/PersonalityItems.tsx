// PersonalityItems.tsx
import React from "react";

const PersonalityItems: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-[#fd01f5] mt-8">Personality Items</h2>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {/* Placeholder Product Cards for Personality Items */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl text-[#fd01f5]">Personality Item 1</h3>
          <p className="text-gray-400">Description of personality item 1</p>
          <button className="mt-2 px-4 py-2 bg-[#fd01f5] rounded">Buy Now</button>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl text-[#fd01f5]">Personality Item 2</h3>
          <p className="text-gray-400">Description of personality item 2</p>
          <button className="mt-2 px-4 py-2 bg-[#fd01f5] rounded">Buy Now</button>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl text-[#fd01f5]">Personality Item 3</h3>
          <p className="text-gray-400">Description of personality item 3</p>
          <button className="mt-2 px-4 py-2 bg-[#fd01f5] rounded">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default PersonalityItems;
