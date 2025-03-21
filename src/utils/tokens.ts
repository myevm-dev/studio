// tokens.ts
export interface Token {
  name: string;
  address: string;
  symbol: string;
  decimals: string;
  image: string;
  color: string;
  progress?: number[];
  dexpool: string;
  gposale: string;

}

export const baseTokens: Token[] = [
  {
    name: "USDbC",
    address: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
    symbol: "USDbC",
    decimals: "6",
    image: "/usdbclogo.png",
    color: "#6697ff", // Coinbase blue for USDbC
    dexpool: "0x0E635F8EeED4F7279d56692D552F034ECE136019",
    gposale: "0xaC94342fc2DC50E544D752C86750C1aBC29a1b51",


  },

  {
    name: "cbETH",
    address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
    symbol: "cbETH",
    decimals: "18",
    image: "/cbethlogo.png",
    color: "#6697ff", // Coinbase blue for cbETH
    dexpool: "0x9BB646BF0F4Da44bfaF3d899e774DE065731EDFe",
    gposale: "0x4409295C64d03Ef0d8263e175702BD8c2d6d86d4",
  },
  {
    name: "GenCredits",
    address: "Not live yet",
    symbol: "GenCredits",
    decimals: "18",
    image: "/studiologo.png",
    color: "#01ecec", 
    dexpool: "Placeholder",
    gposale: "Placeholder",

  },
  {
    name: "cbBTC",
    address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
    symbol: "cbBTC",
    decimals: "8",
    image: "/cbbtclogo.png",
    color: "#6697ff", // Coinbase blue for cbETH
    dexpool: "0x70acdf2ad0bf2402c957154f944c19ef4e1cbae1",
    gposale: "0xd4e04FB72936D52c66587681874CF75AedF4a1de",
  },
  {
    name: "WETH",
    address: "0x4200000000000000000000000000000000000006",
    symbol: "WETH",
    decimals: "18",
    image: "/wethlogo.png",
    color: "#fff", // Coinbase blue for cbETH
    dexpool: "0xd0b53d9277642d899df5c87a3966a349a798f224",
    gposale: "0xF30667dBd90868dB7AAb74Ad87E9671B8eED7F99",
  },


];

export const optimismTokens: Token[] = [
  {
    name: "USDC",
    address: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
    symbol: "USDC",
    decimals: "6",
    image: "/usdclogo.png",
    color: "#2775ca", // Coinbase blue for USDC
    dexpool: "0x1fb3cf6e48f1e7b10213e7b6d87d4c073c7fdb7b",
    gposale: "0x0a562239542A7aBb2e7817018b187e462C039C1B",

  },
  {
    name: "WETH",
    address: "0x4200000000000000000000000000000000000006",
    symbol: "WETH",
    decimals: "18",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH
    dexpool: "0x03af20bdaaffb4cc0a521796a223f7d85e2aac31",
    gposale: "0xF3F029Cdd7586Fc5F705bd206339507F1fbEd275",

  },
  {
    name: "GenCredits",
    address: "Not live yet",
    symbol: "GenCredits",
    decimals: "18",
    image: "/studiologo.png",
    color: "#01ecec", 
    dexpool: "Placeholder",
    gposale: "Placeholder",

  },
  {
    name: "OP",
    address: "0x4200000000000000000000000000000000000042",
    symbol: "OP",
    decimals: "18",
    image: "/optimismlogo.svg",
    color: "#ed1e2c", // Coinbase blue for OP
    dexpool:"0xfc1f3296458f9b2a27a0b91dd7681c4020e09d05",
    gposale: "0xB1B757e71438841E20FC0a71E6F9a38BA41a9dAf",

  },
  {
    name: "SNX",
    address: "0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4",
    symbol: "SNX",
    decimals: "18",
    image: "/snxlogo.png",
    color: "#01cefd", // Coinbase blue for SNX
    dexpool: "0x0392b358ce4547601befa962680bede836606ae2",
    gposale: "0xAe2a4e7a21193F9b26656cb4b2DCFDD9b4A2Be78",

  },

];

export const polygonTokens: Token[] = [
  {
    name: "USDC",
    address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    symbol: "USDC",
    decimals: "6",
    image: "/usdclogo.png",
    color: "#2775ca", // Coinbase blue for USDC
    dexpool: "0xb6e57ed85c4c9dbfef2a68711e9d6f36c56e0fcb",
    gposale: "0x9741E9eD8B9042A43523493271890333023bF706",

  },
  {
    name: "WETH",
    address: "0x11CD37bb86F65419713f30673A480EA33c826872",
    symbol: "WETH",
    decimals: "18",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH
    dexpool: "0x4ccd010148379ea531d6c587cfdd60180196f9b1",
    gposale: "0x1FD729f324B6FDd4F12464f970b587139B24b005",

  },
  {
    name: "GenCredits",
    address: "Not live yet",
    symbol: "GenCredits",
    decimals: "18",
    image: "/studiologo.png",
    color: "#01ecec", 
    dexpool: "Placeholder",
    gposale: "Placeholder",
  },
  {
    name: "WPOL",
    address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    symbol: "POL",
    decimals: "18",
    image: "/pollogo.png",
    color: "#8347e5", // Coinbase blue for POL
    dexpool: "0xa374094527e1673a86de625aa59517c5de346d32",
    gposale: "0xd43B8fd4248108359e104619a26C1B62251fDde5",
  },
  {
    name: "OLAS",
    address: "0xFEF5d947472e72Efbb2E388c730B7428406F2F95",
    symbol: "OLAS",
    decimals: "18",
    image: "/olaslogo.png",
    color: "#ffffff", // OLAS color
    dexpool: "0x62309056c759c36879cde93693e7903bf415e4bc",
    gposale: "0xcC162F6387Ab5c12a376E99103ff4628b4dcE913",
  },
];

export const arbitrumTokens: Token[] = [
  {
    name: "USDC",
    address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    symbol: "USDC",
    decimals: "6",
    image: "/usdclogo.png",
    color: "#2775ca", // Coinbase blue for USDC
    dexpool: "0xc6962004f452be9203591991d15f6b388e09e8d0",
    gposale: "0x01406239Ef672c35E4FD6113E4DBD8e3784CB780",
  },
  {
    name: "WETH",
    address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    symbol: "WETH",
    decimals: "18",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH
    dexpool: "0x641c00a822e8b671738d32a431a4fb6074e5c79d",
    gposale: "0xA49794ffA36f26C403000d1F2A501c5A78Db6b47",

  },
  {
    name: "GenCredits",
    address: "Not live yet",
    symbol: "GenCredits",
    decimals: "18",
    image: "/studiologo.png",
    color: "#01ecec", 
    dexpool: "Placeholder",
    gposale: "Placeholder",

  },
  {
    name: "ARB",
    address: "0x912CE59144191C1204E64559FE8253a0e49E6548",
    symbol: "ARB",
    decimals: "18",
    image: "/arblogo.png",
    color: "#12AAFF", // Coinbase blue for ARB
    dexpool: "0xc6f780497a95e246eb9449f5e4770916dcd6396a",
    gposale: "0x091C138224Aa7272924E1fAFF5c110e3de93F6a6",
  },
  {
    name: "SOL",
    address: "0x2bcC6D6CdBbDC0a4071e48bb3B969b06B3330c07",
    symbol: "SOL",
    decimals: "9",
    image: "/sollogo.png",
    color: "#03E1FF", // Coinbase blue for ARB
    dexpool: "0x622B5186384783BB805c12A808cCF07F41DE1Ff0",
    gposale: "0x180E767040263BAB041783C82fC826d85Afc6a5a",
  },
];

export const apeChainTokens: Token[] = [
  {
    name: "ApeUSD",
    address: "0xA2235d059F80e176D931Ef76b6C51953Eb3fBEf4",
    symbol: "ApeUSD",
    decimals: "18",
    image: "/usdclogo.png",
    color: "#2775ca", // White for ApeETH
    dexpool: "0x99556e210123da382eDEd3c72AA8DCb605C3c435",
    gposale: "0x3aC3d1Be569a11Db02f57a3cFB0C8f332283f689",
  },

  {
    name: "ApeETH",
    address: "0xcF800F4948D16F23333508191B1B1591daF70438",
    symbol: "ApeETH",
    decimals: "18",
    image: "/wethlogo.png",
    color: "#ffffff", // White for ApeETH
    dexpool: "0xea03aedda280ed21f39cb6084b4f84bacd3ebc31",
    gposale: "0x1b2aE5F73Fd1db012B982DF554509eF8b3efb6c4",
  },

  {
    name: "WAPE",
    address: "0x48b62137EdfA95a428D35C09E44256a739F6B557",
    symbol: "WAPE",
    decimals: "18",
    image: "/apelogo.png",
    color: "#0148d7", // Coinbase blue for APE
    dexpool: "0xcbbe0a6d394b34a486fe9c50bf37bf835cbbae51",
    gposale: "0xCf93435D2c00D64375fED1d287eA244c1a055f4c",
  },


];

export const abstractTokens: Token[] = [
  {
    name: "USDC",
    address: "Not live yet",
    symbol: "USDC",
    decimals: "6",
    image: "/usdclogo.png",
    color: "#2775ca", // Coinbase blue for USDC
    dexpool: "Placeholder",
    gposale: "Placeholder",

  },
  {
    name: "WETH",
    address: "Not live yet",
    symbol: "WETH",
    decimals: "18",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH
    dexpool: "Placeholder",
    gposale: "Placeholder",

  },
  {
    name: "GenCredits",
    address: "Not live yet",
    symbol: "GenCredits",
    decimals: "18",
    image: "/studiologo.png",
    color: "#01ecec", 
    dexpool: "Placeholder",
    gposale: "Placeholder",

  },
  {
    name: "PENGU",
    address: "Not live yet",
    symbol: "PENGU",
    decimals: "18",
    image: "/pengulogo.png",
    color: "#83a9f6", // PENGU color
    dexpool: "Placeholder",
    gposale: "Placeholder",

  },

];

export const unichainTokens: Token[] = [
  {
    name: "USDC",
    address: "0x078D782b760474a361dDA0AF3839290b0EF57AD6",
    symbol: "USDC",
    decimals: "6",
    image: "/usdclogo.png",
    color:" #2775ca", // Coinbase blue for USDC
    dexpool: "Placeholder",
    gposale: "Placeholder",

  },

  {
    name: "WETH",
    address: "0x4200000000000000000000000000000000000006",
    symbol: "WETH",
    decimals: "18",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH
    dexpool: "Placeholder",
    gposale: "Placeholder",

  },
  {
    name: "GenCredits",
    address: "Not live yet",
    symbol: "GenCredits",
    decimals: "18",
    image: "/studiologo.png",
    color: "#01ecec", 
    dexpool: "Placeholder",
    gposale: "Placeholder",

  },
  {
    name: "UNI",
    address: "Not live yet",
    symbol: "UNI",
    decimals: "18",
    image: "/unilogos.png",
    color: "#FF007A", // Coinbase blue for UNI
    dexpool: "Placeholder",
    gposale: "Placeholder",

  },
];

export const beraChainTokens: Token[] = [
  {
    name: "HONEY",
    address: "Not live yet",
    symbol: "HONEY",
    decimals: "6",
    image: "/honeylogo.png",
    color: "#e29d42", // HONEY color
    dexpool: "Placeholder",
    gposale: "Placeholder",
  },
  {
    name: "WETH",
    address: "Not live yet",
    symbol: "WETH",
    decimals: "18",
    image: "/wethlogo.png",
    color: "#ffffff", // White for WETH 
    dexpool: "Placeholder",
    gposale: "Placeholder",

  },
  
  {
    name: "GenCredits",
    address: "Not live yet",
    symbol: "GenCredits",
    decimals: "18",
    image: "/studiologo.png",
    color: "#01ecec", 
    dexpool: "Placeholder",
    gposale: "Placeholder",
 //   currentprice: "1000",
  },
  {
    name: "BERA",
    address: "Not live yet",
    symbol: "BERA",
    decimals: "18",
    image: "/beralogo.png",
    color: "#78350f", // HONEY color
    dexpool: "Placeholder",
    gposale: "Placeholder",
 //   currentprice: "Placeholder",
  },

];
