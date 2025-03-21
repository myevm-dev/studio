export const checkAndSwitchChain = async (chainId: string) => {
  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("Ethereum provider is not available. Please install MetaMask.");
  }

  try {
    const currentChainId = await window.ethereum.request({
      method: "eth_chainId",
    });
    if (currentChainId !== chainId) {
      console.log(`Switching chain to ${chainId}...`);
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId }],
      });
      console.log(`Switched to chain: ${chainId}`);
    }
  } catch (error: any) {
    if (error.code === 4902) {
      console.error(`Chain ${chainId} not found. Adding chain...`);
      // Customize chain details
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId,
            chainName: "Your Chain Name",
            rpcUrls: ["https://your.rpc.url"], // Replace with the chain's RPC URL
            nativeCurrency: {
              name: "ETH",
              symbol: "ETH",
              decimals: 18,
            },
            blockExplorerUrls: ["https://your.explorer.url"], // Replace with the chain's explorer URL
          },
        ],
      });
    } else {
      console.error("Error switching chain:", error);
      alert("Please switch to the correct chain in your wallet and try again.");
      throw error;
    }
  }
};
