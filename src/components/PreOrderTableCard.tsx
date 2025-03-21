// PreOrderTableCard.tsx
import React from "react";
import { PreOrderChain } from "./PreOrderTable";  // Correctly import PreOrderChain type

interface PreOrderTableCardProps {
  chain: PreOrderChain;
  ethPrice: number | null;
  onPayETH: (chainName: string) => void;
  onPayCard: (chainName: string) => void;
}

const PreOrderTableCard: React.FC<PreOrderTableCardProps> = ({
  chain,
  ethPrice,
  onPayETH,
  onPayCard
}) => {
  return (
    <tr style={{ backgroundColor: "#333333" }}>
      <td style={{ padding: "12px 15px", fontSize: "1rem", textAlign: "left", color: "#fff" }}>
        {chain.name}
      </td>
      <td style={{ padding: "12px 15px", display: "flex", alignItems: "center" }}>
        <div style={{ width: "100%", height: "18px", borderRadius: "5px", backgroundColor: "#555" }}>
          <div style={{
            width: `${(chain.progress / 333) * 100}%`,
            height: "100%",
            borderRadius: "5px",
            backgroundColor: chain.color
          }} />
        </div>
        <span style={{ fontSize: "1rem", whiteSpace: "nowrap" }}>
          {chain.progress} / 333
        </span>
      </td>
      <td style={{ padding: "12px 15px", fontSize: "1rem", textAlign: "center", color: "#fff" }}>
        {ethPrice ? (
          `0.004 ETH (${(ethPrice * 0.004).toFixed(2)} USD)`
        ) : (
          "Loading..."
        )}
      </td>
      <td style={{ textAlign: "center", padding: "12px 15px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button
            style={{
              backgroundColor: "#fd01f5",
              color: "white",
              padding: "8px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              fontSize: "0.9rem"
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#01fcfc")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#fd01f5")}
            onClick={() => onPayETH(chain.name)}
          >
            Pay WETH
          </button>
          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "8px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              fontSize: "0.9rem"
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#45a049")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
            onClick={() => onPayCard(chain.name)}
          >
            Pay Card
          </button>
        </div>
      </td>
    </tr>
  );
};

export default PreOrderTableCard;
