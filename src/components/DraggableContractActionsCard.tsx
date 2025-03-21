import React from "react";
import { useDrag } from "react-dnd";
import { Action } from "../types/types";

const DraggableContractActionCard: React.FC<{ action: Action }> = ({ action }) => {
  const [, drag] = useDrag(() => ({
    type: "action",
    item: { action }, // Pass the entire action object
  }));

  console.log("DraggableCard Action:", action); // Debugging line

  return (
    <div
      ref={drag}
      className="bg-gray-700 p-4 rounded-lg mb-4 shadow-md flex items-center gap-4"
      style={{ cursor: "grab" }}
    >
      {/* Ensure image exists and render it */}
      {action.image ? (
        <img
          src={action.image}
          alt={`${action.name} logo`}
          className="w-10 h-10 rounded-full"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
          <span className="text-white">No Image</span>
        </div>
      )}
      <div>
        <h3 className="text-white text-lg">{action.name}</h3>
        <p className="text-white text-sm">{action.description}</p>
      </div>
    </div>
  );
};

export default DraggableContractActionCard;
