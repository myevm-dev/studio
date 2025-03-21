import { chains } from "../utils/chains"; // Import the 'chains' array
import { Chain } from "../utils/chains"; // Import the 'Chain' interface

const ChainHorizontalBar = ({
  selectedChain,
  setSelectedChain,
}: {
  selectedChain: Chain | null; // Use 'Chain' here for a single selected chain
  setSelectedChain: (chain: Chain) => void; // 'Chain' is the type for an individual chain
}) => {
  // Function to switch chain in MetaMask
  const switchChain = async (chain: Chain) => {
    if (!window.ethereum) {
      alert("MetaMask is not installed.");
      return;
    }

    try {
      // Attempt to switch to the selected chain
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${chain.id.toString(16)}` }], // Convert chainId to hexadecimal
      });
    } catch (error: any) {
      // If the chain is not added, prompt the user to add it
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: `0x${chain.id.toString(16)}`,
                chainName: chain.name,
                rpcUrls: [chain.rpc],
                nativeCurrency: {
                  name: chain.symbol,
                  symbol: chain.symbol,
                  decimals: 18,
                },
                blockExplorerUrls: [chain.explorerUrl],
              },
            ],
          });
        } catch (addError) {
          console.error("Failed to add chain:", addError);
          alert("Failed to add the chain to MetaMask.");
        }
      } else {
        console.error("Failed to switch chain:", error);
        alert("Failed to switch the chain in MetaMask.");
      }
    }
  };

  const handleChainSelect = async (chain: Chain) => {
    if (!window.ethereum) {
      alert("MetaMask is not installed.");
      return;
    }

    try {
      // Check if the wallet is connected
      const accounts = await window.ethereum.request({
        method: "eth_accounts", // Request the connected accounts
      });

      if (accounts.length === 0) {
        // If no accounts are connected, prompt the user to connect their wallet
        await window.ethereum.request({ method: "eth_requestAccounts" });
      }

      // Once the wallet is connected, proceed with switching the chain
      await switchChain(chain); // Switch the chain in MetaMask
      setSelectedChain(chain); // Update the selected chain in the state
    } catch (error) {
      console.error("Error handling chain selection:", error);
      alert("Error handling chain selection.");
    }
  };

  return (
    <div className="py-2">
      {/* Horizontal Bar for mobile (8 logos across the top) */}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 px-2">
        {chains.slice(0, 8).map((chain) => (
          <div
            key={chain.id}
            onClick={() => handleChainSelect(chain)}
            className={`flex items-center justify-center bg-gray-800 p-2 rounded-lg cursor-pointer transition-shadow hover:shadow-lg ${
              selectedChain?.id === chain.id
                ? "border-4 border-[#fd01f5] bg-[#fd01f5] text-white"
                : "text-gray-300"
            }`}
          >
            <img
              src={chain.image || "default-image-url"} // Fallback image URL if not provided
              alt={chain.name}
              className="w-10 h-10 object-contain" // Square logos
            />
            {/* Show chain name only on larger screens */}
            <span className="text-white font-bold text-lg hidden sm:inline-block ml-2">
              {chain.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChainHorizontalBar;
