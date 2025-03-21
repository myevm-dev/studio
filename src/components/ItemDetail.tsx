import React from "react";
import { Item } from "../utils/items"; // Assuming we have an Item type

interface ItemDetailProps {
  item: Item;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
  return (
    <div className="text-white flex flex-col items-center bg-black p-6 rounded-lg shadow-lg border-4 border-[#fd01f5] shadow-[0_0_15px_#fd01f5] mb-6">
      {/* Item Info */}
      <div className="flex flex-col items-center mb-4">
        {/* Item Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-40 h-40 rounded-full border-4 border-[#01fcfc] transform hover:scale-105 transition-all duration-300"
        />
        <h2 className="mt-2 text-2xl font-bold text-[#fd01f5]">{item.name}</h2>

        {/* Approved Badge */}
        {item.type === "approved" && (
          <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mt-2">
            Approved
          </div>
        )}
      </div>

      {/* Additional Item Info can be added here */}
    </div>
  );
};

export default ItemDetail;
