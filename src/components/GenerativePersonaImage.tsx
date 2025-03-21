import React, { useEffect, useRef } from 'react';
// Cast the Blockies module to `any` to avoid TypeScript errors
import Blockies from 'ethereum-blockies';

const GenerativePersonaImage: React.FC = () => {
  const address = "0x" + Math.random().toString(36).substring(2, 15); // Generate a random address-like string
  const blockieRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (blockieRef.current) {
      // Generate a blockie with larger blocks (50x50)
      const blockie = (Blockies as any).create({ 
        seed: address, 
        size: 50,   // Size of each pixel block
        scale: 5    // Scale to adjust the block size in the output image
      });
      blockieRef.current.src = blockie.toDataURL();
    }
  }, [address]);

  return (
    <div
      className="w-full h-full flex items-center justify-center bg-gray-900 rounded-lg"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#1a1a1a",
        borderRadius: "8px",
      }}
    >
      <img
        ref={blockieRef}
        alt="Blockie"
        className="w-full h-full object-cover" // Ensure it fills the container
        style={{
          border: "2px solid #fd01f5",
          boxShadow: "0 0 10px #fd01f5, 0 0 20px #01fcfc, 0 0 30px #ef476f",
        }}
      />
      <style>
        {`
          .neon-blockie {
            border: 2px solid #fd01f5;
            box-shadow: 0 0 10px #fd01f5, 0 0 20px #01fcfc, 0 0 30px #ef476f;
          }
        `}
      </style>
    </div>
  );
};

export default GenerativePersonaImage;
