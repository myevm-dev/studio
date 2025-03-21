import React, { useState, useEffect } from "react";
import PreOrderCard from "./PreOrderCard";
import { chains } from "../utils/chains";
import { ethers } from "ethers";
import axios from "axios";

import { GpoSaleABI } from "../utils/GpoSaleABI";

import {
  baseTokens,
  optimismTokens,
  polygonTokens,
  arbitrumTokens,
  apeChainTokens,
  abstractTokens,
  unichainTokens,
  beraChainTokens,
} from "../utils/tokens";

interface DexscreenerResponse {
  pair: {
    priceUsd: string;
  };
}

interface Token {
  name: string;
  symbol: string;
  dexpool: string;
  gposale: string;
  decimals?: number | string;
}

const PreOrderGroup: React.FC = () => {
  const [progressData, setProgressData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const visibleChains = chains;

  const getTokensForChain = (chainName: string): Token[] => {
    switch (chainName) {
      case "Base":
        return baseTokens;
      case "Optimism":
        return optimismTokens;
      case "Polygon":
        return polygonTokens;
      case "Arbitrum":
        return arbitrumTokens;
      case "ApeChain":
        return apeChainTokens;
      case "Abstract":
        return abstractTokens;
      case "Unichain":
        return unichainTokens;
      case "BeraChain":
        return beraChainTokens;
      default:
        return [];
    }
  };

  const fetchProgressData = async () => {
    try {
      const allProgressPromises = visibleChains.map(async (chain) => {
        const provider = new ethers.JsonRpcProvider(chain.rpc);
        const tokens = getTokensForChain(chain.name);

        const tokenPromises = tokens.map(async (token) => {
          let totalSupply = 0;
          let dexPriceUsd = 0;
          let onChainPricePerToken = 0;

          if (token.gposale) {
            try {
              const saleContract = new ethers.Contract(
                token.gposale,
                ["function totalSupply() public view returns (uint256)"],
                provider
              );
              const rawTotalSupply = await saleContract.totalSupply();
              totalSupply = parseFloat(ethers.formatUnits(rawTotalSupply, 18));
            } catch (error) {
              console.error(`Error fetching totalSupply for ${token.name}:`, error);
            }
          }

          if (token.dexpool) {
            try {
              const res = await axios.get<DexscreenerResponse>(
                `https://api.dexscreener.com/latest/dex/pairs/${chain.name.toLowerCase()}/${token.dexpool.toLowerCase()}`
              );
              dexPriceUsd = parseFloat(res.data?.pair?.priceUsd || "0");
            } catch (error) {
              console.error(`Error fetching Dex price for ${token.symbol}:`, error);
            }
          }

          if (token.gposale) {
            try {
              const gpoContract = new ethers.Contract(token.gposale, GpoSaleABI, provider);
              const conditionId = await gpoContract.getActiveClaimConditionId();
              const condition = await gpoContract.getClaimConditionById(conditionId);

              const decimals =
                typeof token.decimals === "string"
                  ? parseInt(token.decimals, 10)
                  : token.decimals || 18;

              const rawPrice = condition.pricePerToken;
              onChainPricePerToken = parseFloat(ethers.formatUnits(rawPrice, decimals));
            } catch (error) {
              console.error(`Error fetching on-chain price for ${token.name}:`, error);
            }
          }

          const finalPrice = dexPriceUsd * onChainPricePerToken;

          return {
            totalSupply,
            finalPrice,
          };
        });

        const tokenData = await Promise.all(tokenPromises);

        const totalSold = tokenData.reduce((acc, data) => acc + data.totalSupply, 0);
        const prices = tokenData.map((data) => data.finalPrice).filter((price) => price > 0);
        const bestPrice = prices.length ? Math.min(...prices) : 0;

        return {
          id: chain.id,
          name: chain.name,
          image: chain.image,
          color: chain.color,
          sold: totalSold,
          totalunits: 500,
          bestPrice,
        };
      });

      const allProgressData = await Promise.all(allProgressPromises);
      setProgressData(allProgressData);
    } catch (error) {
      console.error("Error fetching progress data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProgressData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-0 bg-black min-h-screen">
      {loading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="w-60 h-80 bg-gray-800 animate-pulse rounded-lg"></div>
        ))
      ) : (
        progressData.map((chainProgress) => (
          <PreOrderCard key={chainProgress.id} chain={chainProgress} />
        ))
      )}
    </div>
  );
};

export default PreOrderGroup;