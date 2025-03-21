import React, { useState } from "react";
import CommunityChat from "./CommunityChat"; // Import the CommunityChat component
import AgentVoting from "./AgentVoting"; // Import the AgentVoting component

const CommunitySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <div className="bg-gray-900 p-8 rounded shadow-lg">
      <h2 className="text-3xl font-bold text-accent1 w-full text-center">Community</h2>
      
      <div className="mt-4">
        {/* Tabs for Chat and Voting */}
        <div className="flex justify-center w-full space-x-8">
          <button
            className={`py-2 px-4 font-semibold text-lg ${activeTab === "chat" ? "text-[#fd01f5] border-b-2 border-[#fd01f5]" : "text-gray-400"}`}
            onClick={() => setActiveTab("chat")}
          >
            Chat
          </button>
          <button
            className={`py-2 px-4 font-semibold text-lg ${activeTab === "voting" ? "text-[#fd01f5] border-b-2 border-[#fd01f5]" : "text-gray-400"}`}
            onClick={() => setActiveTab("voting")}
          >
            Voting
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "chat" && (
            <CommunityChat communityName="ISAI" /> // Use the CommunityChat component here
          )}
          {activeTab === "voting" && (
            <AgentVoting /> // Add the AgentVoting component here
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
