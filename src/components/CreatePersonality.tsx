import React, { useState } from "react";
import CreatePersonalityForm from "./CreatePersonalityForm";
import PreviewPersonality from "./PreviewPersonality";
import ChatBox from "./ChatBox";
import PersonaViz from "./PersonaViz";

const CreatePersonality: React.FC = () => {
  const [personality, setPersonality] = useState({
    name: "",
    bio: "",
    lore: "",
    knowledge: "",
    messageExamples: [{ user: "", content: "" }],
    postExamples: "",
    topics: "",
    style: {
      all: "",
      chat: "",
      post: "",
    },
    adjectives: "",
    imageSrc: "",
  });

  // This function will force the image to be regenerated every time the "Update Preview" button is clicked
  const handleUpdatePreview = () => {
    setPersonality((prev) => ({
      ...prev,
      imageSrc: "", // Reset image source to trigger the generative image creation
    }));
  };

  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-x-8 p-8">
      {/* Left Side: Create Personality Form */}
      <div className="w-full md:w-1/2">
        <CreatePersonalityForm
          personality={personality}
          setPersonality={setPersonality}
        />
      </div>

      {/* Right Side: PersonaViz, ChatBox, and Preview */}
      <div className="w-full md:w-1/2 flex flex-col space-y-4">
        {/* ChatBox on top for mobile */}
        <div className="md:hidden">
          <ChatBox agentName={personality.name || "Agent"} />
        </div>

        {/* Persona Visualization */}
        <PersonaViz imageSrc={personality.imageSrc || ""} />

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            className="w-1/2 bg-accent1 text-black font-bold py-2 px-4 rounded hover:bg-accent2 mr-2"
            onClick={handleUpdatePreview}
          >
            Update Preview
          </button>
          <button className="w-1/2 bg-accent1 text-black font-bold py-2 px-4 rounded hover:bg-accent2 ml-2">
            Mint Persona
          </button>
        </div>

        {/* Preview Personality */}
        <PreviewPersonality personality={personality} />

        {/* ChatBox on larger screens */}
        <div className="hidden md:block">
          <ChatBox agentName={personality.name || "Agent"} />
        </div>
      </div>
    </div>
  );
};

export default CreatePersonality;
