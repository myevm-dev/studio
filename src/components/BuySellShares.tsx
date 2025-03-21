import React from "react";

interface BuySellSharesProps {
  onBuy: () => void;
  onSell: () => void;
}

const BuySellShares: React.FC<BuySellSharesProps> = ({ onBuy, onSell }) => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-lg text-white relative">
      {/* Title */}
      <h2 className="text-xl font-bold mb-4 text-[#fd01f5]">Buy & Sell Shares</h2>

      {/* Main Content */}
      <div className="text-[#01fcfc] mb-12">
        <p>.</p>
      </div>

      {/* Buttons at the Bottom */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-1/2 mr-2 transition duration-200 ease-in-out transform hover:scale-105"
          onClick={onBuy}
        >
          Buy
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg w-1/2 ml-2 transition duration-200 ease-in-out transform hover:scale-105"
          onClick={onSell}
        >
          Sell
        </button>
      </div>
    </div>
  );
};

export default BuySellShares;
