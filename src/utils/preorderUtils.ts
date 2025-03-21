// preorderutils.ts

export interface ChainInfo {
    chainId: number;
    gpoTokenAddress: string;
    gpoTokenLink: string;
    wethAddress: string;
  }
  
  export const chains: Record<number, ChainInfo> = {
    8453: {
      chainId: 8453,
      gpoTokenAddress: '0xF30667dBd90868dB7AAb74Ad87E9671B8eED7F99',
      gpoTokenLink: 'https://basescan.org/address/0xF30667dBd90868dB7AAb74Ad87E9671B8eED7F99',
      wethAddress: '0x4200000000000000000000000000000000000006',
    },
    10: {
      chainId: 10,
      gpoTokenAddress: '0xF3F029Cdd7586Fc5F705bd206339507F1fbEd275',
      gpoTokenLink: 'https://optimistic.etherscan.io/address/0xF3F029Cdd7586Fc5F705bd206339507F1fbEd275',
      wethAddress: '0x4200000000000000000000000000000000000006',
    },
    137: {
      chainId: 137,
      gpoTokenAddress: '0x1FD729f324B6FDd4F12464f970b587139B24b005',
      gpoTokenLink: 'https://polygonscan.com/address/0x1FD729f324B6FDd4F12464f970b587139B24b005',
      wethAddress: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    },
    42161: {
      chainId: 42161,
      gpoTokenAddress: '0xA49794ffA36f26C403000d1F2A501c5A78Db6b47',
      gpoTokenLink: 'https://arbiscan.io/address/0xA49794ffA36f26C403000d1F2A501c5A78Db6b47',
      wethAddress: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    },
    33139: {
      chainId: 33139,
      gpoTokenAddress: '0x1b2aE5F73Fd1db012B982DF554509eF8b3efb6c4',
      gpoTokenLink: 'https://apechain.calderaexplorer.xyz/address/0x1b2aE5F73Fd1db012B982DF554509eF8b3efb6c4',
      wethAddress: '0xcF800F4948D16F23333508191B1B1591daF70438',
    },
  };
  
  export const getChainInfo = (chainId: number): ChainInfo | undefined => {
    return chains[chainId];
  };
  
  export const getGpoTokenAddress = (chainId: number): string | undefined => {
    return chains[chainId]?.gpoTokenAddress;
  };
  
  export const getWethAddress = (chainId: number): string | undefined => {
    return chains[chainId]?.wethAddress;
  };
  
  export const getGpoTokenLink = (chainId: number): string | undefined => {
    return chains[chainId]?.gpoTokenLink;
  };
  