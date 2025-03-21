import React from "react";
import { useNavigate } from "react-router-dom";

interface PreOrderCardProps {
  chain: {
    name: string;
    image?: string;
    color: string;
    id: string;
    sold: number;
    totalunits: number;
    bestPrice?: number;
  };
}

const PreOrderCard: React.FC<PreOrderCardProps> = ({ chain }) => {
  const navigate = useNavigate();
  const defaultImage = "/defaultLogo.png";
  const imageSrc = chain.image || defaultImage;

  // If bestPrice is zero or undefined, treat as "no price yet".
  const hasPrice = chain.bestPrice && chain.bestPrice > 0;

  const handlePreOrderClick = () => {
    if (hasPrice) {
      navigate(`/chain/${chain.id}`);
    }
  };

  const progress = (chain.sold / chain.totalunits) * 100;

  return (
    <div className="max-w-sm w-full bg-gray-900 shadow-md rounded-lg p-4 m-2 mb-2 border-2 border-[#fd01f5]">
      <div className="h-16 w-16 mx-auto mb-4">
        <img src={imageSrc} alt={`${chain.name} logo`} className="h-full w-full object-contain" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-100 mb-2">
          {chain.name}
        </h3>

        <p className="text-gray-400 text-lg mb-4">
          Best Price ~${chain.bestPrice?.toFixed(4) || "0.0000"}
        </p>

        <div className="text-sm text-gray-300 mb-2">
          {chain.sold} / {chain.totalunits} Sold
        </div>
        <div className="w-full h-2 bg-gray-600 rounded-full mb-4">
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              backgroundColor: progress >= 100 ? "#4caf50" : chain.color,
            }}
          />
        </div>

        <button
          className="text-black py-2 px-4 rounded-lg hover:opacity-80 focus:outline-none"
          style={{ backgroundColor: chain.color }}
          onClick={handlePreOrderClick}
        >
          {hasPrice ? "Pre-Order Soon" : "Coming Soon"}
        </button>
      </div>
    </div>
  );
};

export default PreOrderCard;
