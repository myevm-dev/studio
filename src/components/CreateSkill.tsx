import React, { useState } from "react";
import CreateSkillForm from "./CreateSkillForm";
import PreviewSkill from "./PreviewSkill";
import MetadataViewer from "./MetadataViewer";

const CreateSkill: React.FC = () => {
  const [skillData, setSkillData] = useState<{
    name: string;
    contractAddress: string;
    abi: string;
  }>({
    name: "",
    contractAddress: "",
    abi: "",
  });

  const handleSkillSubmit = (data: { name: string; contractAddress: string; abi: string }) => {
    setSkillData(data); // Save the submitted data to state
  };

  return (
    <div className="flex flex-col space-y-8">
      {/* Form and Preview Section (Responsive Layout) */}
      <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0">
        {/* Form Section */}
        <div className="bg-gray-900 p-8 rounded shadow-lg border-2 border-accent1 flex-1">
          <h2 className="text-3xl font-bold text-[#fd01f5]">Create Web3 Skill</h2>
          <CreateSkillForm onSubmit={handleSkillSubmit} />
        </div>

        {/* Preview Section */}
        <div className="bg-gray-900 p-8 rounded shadow-lg border-2 border-accent1 flex-1">
          <PreviewSkill skill={skillData} />
        </div>
      </div>

      {/* Metadata Viewer Section */}
      <div className="bg-gray-900 p-8 rounded shadow-lg border-2 border-accent1">
        <MetadataViewer />
      </div>
    </div>
  );
};

export default CreateSkill;
