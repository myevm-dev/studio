// src/ethereum-blockies.d.ts
declare module "ethereum-blockies" {
    interface BlockiesProps {
      seed: string;
      size: number;
      scale: number;
      className?: string;
    }
  
    const Blockies: React.FC<BlockiesProps>;
  
    export default Blockies;
  }
  