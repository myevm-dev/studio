import React from "react";
import { Link } from "react-router-dom";
import { Item } from "../utils/items"; // Make sure to import the Item type

interface ItemChildCardProps {
  item: Item;
  onToggleDependencies: () => void;
  showDependencies: boolean;
}

const ItemChildCard: React.FC<ItemChildCardProps> = ({ item, onToggleDependencies, showDependencies }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        {/* Display the item information */}
        <img src={item.image} alt={item.name} className="w-32 h-32 rounded-full" />
        <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-400">{item.category}</p>

        {/* Go To Component Button */}
        <div className="mt-4 flex justify-center space-x-4">
          <Link to={`/item/${item.id}`} className="bg-[#fd01f5] text-white px-6 py-2 rounded-lg hover:bg-[#01fcfc] transition-colors">
            Go To Component
          </Link>
        </div>

        {/* Toggle Dependencies Button */}
        <div className="mt-4 flex justify-center space-x-4">
          <button
            onClick={onToggleDependencies}
            className="bg-[#fd01f5] text-white px-6 py-2 rounded-lg hover:bg-[#01fcfc] transition-colors"
          >
            {showDependencies ? "Hide Dependencies" : "View Dependencies"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemChildCard;
