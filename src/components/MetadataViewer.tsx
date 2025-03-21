import React, { useState } from "react";

const MetadataViewer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 p-4 rounded border-2 border-accent1">
      <button
        onClick={toggleAccordion}
        className="text-[#fd01f5] font-bold text-lg w-full text-left py-2"
      >
        {isOpen ? "Hide Metadata" : "Show Metadata"}
      </button>
      {isOpen && (
        <div className="text-gray-300 mt-4">
          <p>Metadata will be displayed here in the future.</p>
        </div>
      )}
    </div>
  );
};

export default MetadataViewer;
