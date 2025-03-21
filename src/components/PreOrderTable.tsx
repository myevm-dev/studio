import React, { useState, useEffect } from "react";
import axios from "axios";
import { chains, Chain } from "../utils/chains";
import PreOrderTableCard from "./PreOrderTableCard";
import getGPOSupply from "../utils/getGPOSupply";


// Export PreOrderChain interface so it can be used in other files
export interface PreOrderChain extends Chain {
  progress: number;
  price: number;
}

interface EthPriceResponse {
  ethereum: {
    usd: number;
  };
}

const PreOrderTable: React.FC = () => {
  const [ethPrice, setEthPrice] = useState<number | null>(null);

  // Fetch ETH price on component mount
  useEffect(() => {
    axios
      .get<EthPriceResponse>("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd")
      .then((response) => {
        setEthPrice(response.data.ethereum.usd);
      })
      .catch((error) => {
        console.error("Error fetching ETH price:", error);
      });
  }, []);

  // Add GPO supply values dynamically
  const preOrderChains: PreOrderChain[] = chains.map((chain) => {
    const GPOaddress = chain.GPOaddress || '0x0000000000000000000000000000000000000000';
    const totalSupply = getGPOSupply(chain.id, GPOaddress); // Fetch total supply

    // Assuming the total supply is in whole numbers (no need to scale by 1000)
    const totalSupplyNum = totalSupply ? Number(totalSupply) : 1; // Use default of 1 if supply is 0 or invalid

    return {
      ...chain,
      progress: totalSupplyNum > 0 ? 1 / totalSupplyNum : 0,  // Calculate progress based on total supply
      price: 0.004,  // Set price to 0.004 ETH for each chain
    };
  });

  const handlePayETH = (chainName: string) => {
    console.log(`Pay ETH for ${chainName}`);
    // Logic for processing ETH payment
  };

  const handlePayCard = (chainName: string) => {
    console.log(`Pay Card for ${chainName}`);
    // Logic for processing Card payment
  };

  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      {/* Pre-Order Table */}
      <table
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          borderCollapse: "collapse",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <thead
          style={{
            backgroundColor: "#222222",
            borderBottom: "2px solid #444444",
          }}
        >
          <tr>
            <th style={{ padding: "15px", fontSize: "1.2rem", textAlign: "left", color: "#fff" }}>Chain Name</th>
            <th style={{ padding: "15px", fontSize: "1.2rem", textAlign: "left", color: "#fff" }}>Progress</th>
            <th style={{ padding: "15px", fontSize: "1.2rem", textAlign: "center", color: "#fff" }}>Current Price</th>
            <th style={{ padding: "15px", fontSize: "1.2rem", textAlign: "center", color: "#fff" }}>Pre-Order</th>
          </tr>
        </thead>
        <tbody>
          {preOrderChains.map((chain, index) => (
            <PreOrderTableCard
              key={index}
              chain={chain}
              ethPrice={ethPrice}
              onPayETH={handlePayETH}
              onPayCard={handlePayCard}
            />
          ))}
        </tbody>
      </table>

      {/* GPO Leaderboard */}
      <div style={{ marginTop: "40px" }}>

      </div>
    </div>
  );
};

export default PreOrderTable;
