// Roadmap.tsx
import React from "react";

const Roadmap: React.FC = () => {
  return (
    <div
      className="bg-[#101010] text-white p-10 min-h-screen flex flex-col items-center border-2 border-accent1 rounded-lg"
    >
      <h2 className="text-center mb-8 text-2xl text-accent1">
        Roadmap
      </h2>
      <p className="text-lg text-white">
        Check out the roadmap to understand the stages of the ISAI Agent's journey and future milestones.
      </p>
    </div>
  );
};

export default Roadmap;
