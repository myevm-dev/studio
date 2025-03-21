import React, { useState } from "react";

// Function to parse ABI and separate read and write functions
const getFunctionNamesFromABI = (abi: string) => {
  try {
    const parsedABI = JSON.parse(abi);
    
    const readFunctions = parsedABI
      .filter((item: any) => item.type === "function" && (item.stateMutability === "view" || item.stateMutability === "pure"))
      .map((item: any) => item.name);

    const writeFunctions = parsedABI
      .filter((item: any) => item.type === "function" && (item.stateMutability !== "view" && item.stateMutability !== "pure"))
      .map((item: any) => item.name);

    return { readFunctions, writeFunctions };
  } catch (error) {
    console.error("Invalid ABI format", error);
    return { readFunctions: [], writeFunctions: [] };
  }
};

const PreviewSkill: React.FC<{ skill: { name: string; contractAddress: string; abi: string } }> = ({
  skill,
}) => {
  const { readFunctions, writeFunctions } = getFunctionNamesFromABI(skill.abi);
  
  // State to manage the abilities
  const [readAbilities, setReadAbilities] = useState<string[]>(readFunctions);
  const [writeAbilities, setWriteAbilities] = useState<string[]>(writeFunctions);

  // Function to remove an ability
  const removeAbility = (ability: string, type: "read" | "write") => {
    if (type === "read") {
      setReadAbilities((prev) => prev.filter((item) => item !== ability));
    } else {
      setWriteAbilities((prev) => prev.filter((item) => item !== ability));
    }
  };

  return (
    <div className="p-4 space-y-4 bg-black rounded border-2 border-accent1">
      <h3 className="text-2xl font-bold text-[#fd01f5]">Preview Skill</h3>

      <div>
        <h4 className="text-accent1 text-lg">Name</h4>
        <p className="text-gray-300">{skill.name || "Not Provided"}</p>
      </div>

      <div>
        <h4 className="text-accent1 text-lg">Contract Address</h4>
        <p className="text-gray-300">{skill.contractAddress || "Not Provided"}</p>
      </div>

      {/* Read Abilities */}
      <div>
        <h4 className="text-accent1 text-lg">Read Abilities (view/pure)</h4>
        {readAbilities.length > 0 ? (
          <ul className="text-gray-300">
            {readAbilities.map((ability, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{ability}</span>
                <button
                  onClick={() => removeAbility(ability, "read")}
                  className="text-red-500 hover:text-red-700"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-300">No read abilities available in the ABI.</p>
        )}
      </div>

      {/* Write Abilities */}
      <div>
        <h4 className="text-accent1 text-lg">Write Abilities (non-payable/payable)</h4>
        {writeAbilities.length > 0 ? (
          <ul className="text-gray-300">
            {writeAbilities.map((ability, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{ability}</span>
                <button
                  onClick={() => removeAbility(ability, "write")}
                  className="text-red-500 hover:text-red-700"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-300">No write abilities available in the ABI.</p>
        )}
      </div>
    </div>
  );
};

export default PreviewSkill;
