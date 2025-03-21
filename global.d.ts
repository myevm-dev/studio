// src/global.d.ts
interface EthereumProvider {
    isMetaMask?: boolean;
    request: (args: { method: string; params?: Array<any> }) => Promise<any>;
  }
  
  interface Window {
    ethereum?: EthereumProvider;
  }
  