import React from "react";
import { useParams } from "react-router-dom";
import ItemDependencyTree from "../components/ItemDependencyTree";
import ItemDetail from "../components/ItemDetail"; // Import the ItemDetail component
import { items } from "../utils/items"; // Assuming we have an items array

const ItemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from URL params

  // Ensure the ID is a valid number
  const itemId = id ? Number(id) : NaN;

  // Find the item by ID from the items list
  const item = !isNaN(itemId) ? items.find((item) => item.id === itemId) : undefined;

  // If item is not found, return a 404-style message
  if (!item) {
    return (
      <div className="p-6 bg-gray-900 text-white">
        <p>Item not found!</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-900 text-white">
      {/* Display the ItemDetail above the tree */}
      <ItemDetail item={item} />
      
      {/* Display the ItemDependencyTree */}
      <ItemDependencyTree item={item} />
    </div>
  );
};

export default ItemPage;
