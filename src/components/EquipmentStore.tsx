import React, { useState } from "react";

const EquipmentStore: React.FC = () => {
  const [currency, setCurrency] = useState(100); // Track user's currency (example)

  // Example items for the shop
  const personalityItems = [
    { id: 1, name: "Personality 1", price: 30, type: "personality" },
    { id: 2, name: "Personality 2", price: 40, type: "personality" },
    { id: 3, name: "Personality 3", price: 40, type: "personality" },
  ];

  // Example skills items
  const skillItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Skill ${i + 1}`,
    price: 10 + i * 5,
    type: "skill",
  }));

  // Example plugins items
  const pluginItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Plugin ${i + 1}`,
    price: 15 + i * 5,
    type: "plugin",
  }));

  const buyItem = (item: { name: string; price: number }) => {
    if (currency >= item.price) {
      setCurrency(currency - item.price);
    } else {
      alert("Not enough currency!");
    }
  };

  return (
    <div className="bg-black p-6 rounded-lg shadow-lg">


      {/* Personality Section */}
      <h4 className="text-[#fd01f5] text-lg font-bold mb-2">Personality</h4>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {personalityItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#333333] p-4 rounded-lg text-center text-white"
          >
            <div>{item.name}</div>
            <div>{`Price: ${item.price} Coins`}</div>
            <button
              onClick={() => buyItem(item)}
              className="mt-2 bg-[#fd01f5] text-white px-4 py-2 rounded-lg hover:bg-[#01fcfc]"
            >
              Buy
            </button>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <h4 className="text-[#fd01f5] text-lg font-bold mb-2">Skills</h4>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {skillItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#333333] p-4 rounded-lg text-center text-white"
          >
            <div>{item.name}</div>
            <div>{`Price: ${item.price} Coins`}</div>
            <button
              onClick={() => buyItem(item)}
              className="mt-2 bg-[#fd01f5] text-white px-4 py-2 rounded-lg hover:bg-[#01fcfc]"
            >
              Buy
            </button>
          </div>
        ))}
      </div>

      {/* Plugins Section */}
      <h4 className="text-[#fd01f5] text-lg font-bold mb-2">Plugins</h4>
      <div className="grid grid-cols-3 gap-4">
        {pluginItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#333333] p-4 rounded-lg text-center text-white"
          >
            <div>{item.name}</div>
            <div>{`Price: ${item.price} Coins`}</div>
            <button
              onClick={() => buyItem(item)}
              className="mt-2 bg-[#fd01f5] text-white px-4 py-2 rounded-lg hover:bg-[#01fcfc]"
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EquipmentStore;
