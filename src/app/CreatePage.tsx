import React, { useState } from "react";
import CreatePersonality from "components/CreatePersonality";
import CreatePlugin from "components/CreatePlugin";
import CreateSkill from "components/CreateSkill";
import CreateComplex from "components/CreateComplex"; // Import CreateComplex

const CreatePage: React.FC = () => {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState<string>("personality");

  // Function to handle category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section className="text-center max-w-screen-lg mx-auto py-8">
      <h1 className="text-4xl font-bold text-[#fd01f5] mt-10">
        Create & Sell AI, Plugins, Web3 Skills
      </h1>
      <p className="text-2xl text-accent1 mt-4">
        Build and monetize no-code AI personalities, Web2 plugins, Web3 skills, and more.
      </p>

      {/* Category toggle buttons */}
      <div className="mt-6 mb-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => handleCategoryChange("personality")}
          className={`w-full sm:w-auto px-2 py-1 text-lg rounded ${
            activeCategory === "personality"
              ? "bg-[#fd01f5] text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Create Personality
        </button>
        <button
          onClick={() => handleCategoryChange("plugin")}
          className={`w-full sm:w-auto px-2 py-1 text-lg rounded ${
            activeCategory === "plugin" ? "bg-[#fd01f5] text-white" : "bg-gray-700 text-gray-300"
          }`}
        >
          Create Web2 Plugin
        </button>
        <button
          onClick={() => handleCategoryChange("skill")}
          className={`w-full sm:w-auto px-2 py-1 text-lg rounded ${
            activeCategory === "skill" ? "bg-[#fd01f5] text-white" : "bg-gray-700 text-gray-300"
          }`}
        >
          Create Web3 Skill
        </button>
        <button
          onClick={() => handleCategoryChange("complex")}
          className={`w-full sm:w-auto px-2 py-1 text-lg rounded ${
            activeCategory === "complex" ? "bg-[#fd01f5] text-white" : "bg-gray-700 text-gray-300"
          }`}
        >
          Create Complex
        </button>
      </div>

      {/* Conditionally render components based on active category */}
      {activeCategory === "personality" && <CreatePersonality />}
      {activeCategory === "plugin" && <CreatePlugin />}
      {activeCategory === "skill" && <CreateSkill />}
      {activeCategory === "complex" && <CreateComplex />} {/* This will render the CreateComplex component */}
    </section>
  );
};

export default CreatePage;
