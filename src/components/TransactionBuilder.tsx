import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Action } from "../types/types";

const TransactionBuilder: React.FC = () => {
  const [transactionActions, setTransactionActions] = useState<Action[]>([]);

  // Add an action to the transaction builder
  const handleAddActionToTransaction = (action: Action) => {
    setTransactionActions((prevActions) => [...prevActions, action]);
  };

  // Remove an action from the transaction builder
  const handleRemoveAction = (index: number) => {
    setTransactionActions((prevActions) =>
      prevActions.filter((_, idx) => idx !== index)
    );
  };

  // Move an action up in the list
  const handleMoveUp = (index: number) => {
    if (index > 0) {
      setTransactionActions((prevActions) => {
        const updatedActions = [...prevActions];
        [updatedActions[index - 1], updatedActions[index]] = [
          updatedActions[index],
          updatedActions[index - 1],
        ];
        return updatedActions;
      });
    }
  };

  // Move an action down in the list
  const handleMoveDown = (index: number) => {
    if (index < transactionActions.length - 1) {
      setTransactionActions((prevActions) => {
        const updatedActions = [...prevActions];
        [updatedActions[index], updatedActions[index + 1]] = [
          updatedActions[index + 1],
          updatedActions[index],
        ];
        return updatedActions;
      });
    }
  };

  const [, drop] = useDrop(() => ({
    accept: "action",
    drop: (item: any) => handleAddActionToTransaction(item.action),
  }));

  return (
    <div ref={drop} className="h-full bg-gray-700 p-4 rounded-lg shadow-md">
      <h3 className="text-white text-lg mb-4">Transaction Builder</h3>

      <div className="bg-gray-600 p-4 rounded-lg min-h-[200px]">
        {transactionActions.length === 0 ? (
          <p className="text-white">Drag actions here to build a transaction.</p>
        ) : (
          <ul className="space-y-4">
            {transactionActions.map((action, idx) => (
              <ActionCard
                key={idx}
                index={idx}
                action={action}
                handleRemoveAction={handleRemoveAction}
                handleMoveUp={handleMoveUp}
                handleMoveDown={handleMoveDown}
                isLast={idx === transactionActions.length - 1}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const ActionCard: React.FC<{
  index: number;
  action: Action;
  handleRemoveAction: (index: number) => void;
  handleMoveUp: (index: number) => void;
  handleMoveDown: (index: number) => void;
  isLast: boolean;
}> = ({ index, action, handleRemoveAction, handleMoveUp, handleMoveDown, isLast }) => {
  return (
    <li className="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
      <div>
        <h3 className="text-white text-lg">{action.name}</h3>
        <p className="text-white text-sm">{action.description}</p>
      </div>

      <div className="flex flex-col items-center space-y-2">
        {/* Move Up Button */}
        <button
          className={`text-gray-400 hover:text-white ${
            index === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handleMoveUp(index)}
          disabled={index === 0}
        >
          ↑ 
        </button>

        {/* Remove Button */}
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => handleRemoveAction(index)}
        >
          × 
        </button>

        {/* Move Down Button */}
        <button
          className={`text-gray-400 hover:text-white ${
            isLast ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handleMoveDown(index)}
          disabled={isLast}
        >
          ↓ 
        </button>
      </div>
    </li>
  );
};

export default TransactionBuilder;
