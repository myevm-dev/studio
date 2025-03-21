// Placeholder Items List
export interface Item {
    id: number;
    name: string;
    category: string;
    image: string;
    type: string;
    dependencies?: number[]; 
  }
  
  // Example list of items
  export const items: Item[] = [
    {
      id: 1,
      name: "Xcom",
      category: "plugin",
      image: "/xlogo.png", // Replace with actual image URL
      type: "approved",
      dependencies: [2, 3], // Xcom depends on Discord and Email
    },
    {
      id: 2,
      name: "Discord",
      category: "plugin",
      image: "/discordlogo.png", // Replace with actual image URL
      type: "approved",
      dependencies: [3, 4], // Xcom depends on Discord and Email
    },
    {
      id: 3,
      name: "Email",
      category: "plugin",
      image: "/emaillogo.png", // Replace with actual image URL
      type: "approved",
      dependencies: [5, 6], // Xcom depends on Discord and Email
    },
    {
      id: 4,
      name: "Wikipedia",
      category: "plugin",
      image: "/wikilogo.png", // Replace with actual image URL
      type: "approved",
      dependencies: [7, 8], // Xcom depends on Discord and Email
    },
    {
      id: 5,
      name: "Github",
      category: "plugin",
      image: "/githublogo.png", // Replace with actual image URL
      type: "approved",
      dependencies: [9, 10], // Xcom depends on Discord and Email
    },
    {
      id: 6,
      name: "Giphy",
      category: "plugin",
      image: "/giphylogo.png", // Replace with actual image URL
      type: "approved",
      dependencies: [11, 12], // Xcom depends on Discord and Email
    },
  
    {
      id: 7,
      name: "Aave",
      category: "skill",
      image: "/aavelogo.png", // Replace with actual image URL
      type: "approved",
      dependencies: [1, 18], // Xcom depends on Discord and Email
    },
    {
      id: 8,
      name: "Uniswap",
      category: "skill",
      image: "/unilogo.png", // Replace with actual image URL
      type: "approved",
      dependencies: [2, 3], // Xcom depends on Discord and Email
    },
    {
      id: 9,
      name: "Stargate",
      category: "skill",
      image: "/stargatelogo.png", // Replace with actual image URL
      type: "approved",
      dependencies: [13, 14], // Xcom depends on Discord and Email
    },
    {
      id: 10,
      name: "Opensea",
      category: "skill",
      image: "/opensealogo.webp", // Replace with actual image URL
      type: "approved",
      dependencies: [1, 15], // Xcom depends on Discord and Email
    },
    {
      id: 11,
      name: "WETH",
      category: "skill",
      image: "/wethlogo.png", // Replace with actual image URL
      type: "approved",
      dependencies: [6, 9], // Xcom depends on Discord and Email
    },
  
    {
      id: 12,
      name: "DeepTrading",
      category: "wisdom",
      image: "/tensorflowlogo.png", // Replace with actual image URL
      type: "approved",
      dependencies: [2, 5], // Xcom depends on Discord and Email
    },
    {
      id: 13,
      name: "UniV3 TickMath",
      category: "wisdom",
      image: "/unilogo.png", // Replace with actual image URL
      type: "approved",
      dependencies: [2, 3], // Xcom depends on Discord and Email
    },
    {
      id: 14,
      name: "BehavioralPsychology",
      category: "wisdom",
      image: "/psychology.png", // Replace with actual image URL
      type: "approved",
      dependencies: [2, 3], // Xcom depends on Discord and Email
    },
    {
      id: 15,
      name: "Shortest Path",
      category: "wisdom",
      image: "/shortpath.png", // Replace with actual image URL
      type: "approved",
      dependencies: [2, 3], // Xcom depends on Discord and Email
    },
    {
      id: 16,
      name: "Drum & Bass Music",
      category: "wisdom",
      image: "/drumbass.png", // Replace with actual image URL
      type: "approved",
      dependencies: [2, 3], // Xcom depends on Discord and Email
    },
  
    {
      id: 17,
      name: "Business Reporter",
      category: "personality",
      image: "/bizreporter.png", // Replace with actual image URL
      type: "approved",
      dependencies: [2, 3], // Xcom depends on Discord and Email
    },
    {
      id: 18,
      name: "Youtube Shill",
      category: "personality",
      image: "/ytshill.png", // Replace with actual image URL
      type: "approved",
      dependencies: [], // Xcom depends on Discord and Email
    },
    {
      id: 19,
      name: "Business Hippie",
      category: "personality",
      image: "/bizhippie.png", // Replace with actual image URL
      type: "approved",
      dependencies: [2, 3], // Xcom depends on Discord and Email
    },
    {
      id: 20,
      name: "Moggish Cook",
      category: "personality",
      image: "/moggishcook.png", // Replace with actual image URL
      type: "approved",
      dependencies: [2, 3], // Xcom depends on Discord and Email
    },
    {
      id: 21,
      name: "Experienced Data Scientist",
      category: "personality",
      image: "/datascientist.png", // Replace with actual image URL
      type: "approved",
      dependencies: [], // Xcom depends on Discord and Email
    },
  ];
  