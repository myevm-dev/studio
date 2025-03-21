import React, { useState } from "react";
import { ethers } from "ethers";
import { GpoSaleABI } from "../utils/GpoSaleABI";
import { checkAndSwitchChain } from "../utils/checkAndSwitchChain";

interface BuyPreOrderWithTokenProps {
  token: {
    symbol: string;
    name: string;
    image: string;
    color: string;
    gposale: string;
    address: string; // ERC-20 token address
    decimals: string; // Token decimals
  };
  chain: {
    id: number;
    name: string;
    rpc: string;
  }; // Add chain details here
  usdPrice: number;
  tokenQuantity: number;
  sold: number;
  totalunits: number;
}

const BuyPreOrderWithToken: React.FC<BuyPreOrderWithTokenProps> = ({
  token,
  chain,
  usdPrice,
  tokenQuantity,
  sold,
  totalunits,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const [copied, setCopied] = useState(false);

  // Format token address to short form: 0x1234...abcd
  const shortAddress = token.address
    ? `${token.address.slice(0, 6)}...${token.address.slice(-4)}`
    : "";

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(token.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

  const handlePreOrder = async () => {
    if (!window.ethereum) {
      alert("Please connect a wallet.");
      return;
    }

    setIsProcessing(true);

    try {
      // Check and switch to the correct chain
      await checkAndSwitchChain(ethers.toBeHex(chain.id));
      console.log("Chain switched successfully!");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const gpoAddress = token.gposale;
      const erc20Contract = new ethers.Contract(token.address, [
        "function approve(address spender, uint256 amount) external returns (bool)",
        "function allowance(address owner, address spender) external view returns (uint256)",
      ], signer);

      const approveAmount = ethers.parseUnits(
        (quantity * tokenQuantity).toString(),
        parseInt(token.decimals, 10) || 18
      );

      // Check allowance
      const allowance = await erc20Contract.allowance(await signer.getAddress(), gpoAddress);

      if (allowance.gte(approveAmount)) {
        console.log(`Sufficient allowance: ${allowance.toString()}`);
      } else {
        console.log(`Approving ${approveAmount} ${token.symbol}...`);
        const approveTx = await erc20Contract.approve(gpoAddress, approveAmount);
        await approveTx.wait();
        console.log("Token approved!");
      }

      // Call claim function
      const gpoContract = new ethers.Contract(gpoAddress, GpoSaleABI, signer);
      const pricePerToken = ethers.parseUnits(
        (usdPrice / tokenQuantity).toString(),
        parseInt(token.decimals, 10) || 18
      );

      const totalCost = ethers.parseUnits(
        (quantity * (usdPrice / tokenQuantity)).toString(),
        parseInt(token.decimals, 10) || 18
      );

      const tx = await gpoContract.claim(
        await signer.getAddress(),
        ethers.parseUnits(quantity.toString(), parseInt(token.decimals, 10) || 18),
        token.address,
        pricePerToken,
        {
          proof: [],
          quantityLimitPerWallet: 0,
          pricePerToken: 0,
          currency: ethers.ZeroAddress,
        },
        "0x",
        {
          value: totalCost,
        }
      );

      console.log("Transaction submitted:", tx.hash);
      await tx.wait();
      console.log("Transaction confirmed:", tx);
      alert("Pre-order successful!");
    } catch (err: unknown) {
      const error = err as { code?: number; message?: string };
      // Handle specific errors
      if (error?.code === 4902) {
        alert("Chain not found. Please add it to your wallet.");
      } else if (error?.message?.includes("User rejected the request")) {
        alert("You rejected the transaction.");
      } else {
        alert("Pre-order failed. See console for details.");
        console.error("Error during pre-order:", error);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  // Format USD cost to 4 decimals
  const usdText =
    usdPrice && usdPrice > 0
      ? `$${(usdPrice * quantity).toFixed(4)}`
      : "Coming Soon";

  // Format on-chain token cost (4 decimals)
  const costInTokens =
    tokenQuantity && tokenQuantity > 0
      ? `${(tokenQuantity * quantity).toFixed(4)} ${token.symbol}`
      : "No cost data";

  // Progress fraction
  const progress = totalunits ? sold / totalunits : 0;

  const isButtonDisabled = tokenQuantity <= 0 || isProcessing;

  return (
    <div className="token-card border-2 border-accent1 p-4 rounded-lg flex flex-col items-center">
      <p>Pre-Order with</p>
      <p
        className="text-lg text-center mb-5 font-bold"
        style={{ color: token.color }} // Apply token color dynamically
      >
        {token.symbol}
      </p>


      {/* Token logo */}
      <img src={token.image} alt={token.name} className="w-20 h-20 mb-1" />

      {/* Short token address (copyable) */}
      <div className="text-xs text-gray-400 mt-1 cursor-pointer">
        <span onClick={handleCopyAddress} className="underline hover:text-white">
          {shortAddress}
        </span>
        {copied && <span className="ml-2 text-green-400">Copied!</span>}
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center mt-4 space-x-2">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="px-3 py-1 bg-gray-800 text-white rounded-lg hover:bg-gray-600"
        >
          -
        </button>
        <span className="text-xl font-bold">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => Math.min(10, q + 1))}
          className="px-3 py-1 bg-gray-800 text-white rounded-lg hover:bg-gray-600"
        >
          +
        </button>
      </div>

      {/* Display USD price */}
      <p className="text-2xl mt-4 font-semibold">{usdText}</p>

      {/* Display on-chain token cost */}
      <p className="text-sm mt-3">
        <span className="text-accent2">Current Price</span>
        <br />
        <span className="text-white">{costInTokens}</span>
      </p>

{/* Pre-order button with tooltip */}
<div className="relative group">
  <button
    className="px-2 py-1 mt-5 bg-black text-accent1 border-2 border-accent2 rounded opacity-50 cursor-not-allowed"
    disabled // This makes the button always disabled
  >
    Pre-Order
  </button>
  {/* Tooltip */}
  <div className="absolute bottom-full mb-2 w-max bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100">
    Coming Soon
  </div>
</div>

      {/* Progress bar */}
      <div className="w-full mt-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between w-full px-2">
            <span className="text-xs">Progress</span>
            <span className="text-xs">
              {sold}/{totalunits}
            </span>
          </div>
          <div className="flex mb-0 items-center justify-between w-full">
            <div className="relative pt-1 w-full">
              <div className="flex mb-2">
                <div className="flex w-full">
                  <div
                    className="progress-bar h-2 rounded-full"
                    style={{
                      width: `${(progress * 100).toFixed(2)}%`,
                      backgroundColor:
                        progress >= 1 ? "#4caf50" : token.color,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end progress bar */}
    </div>
  );
};

export default BuyPreOrderWithToken;
