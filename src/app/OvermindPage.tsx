import React, { useState } from "react";
import Gov from "../components/Gov";
import LiveFeed from "../components/LiveFeed";

const OvermindPage: React.FC = () => {
  const [activePage, setActivePage] = useState<"gov" | "livefeed">("livefeed"); // Set livefeed to be the default

  return (
    <div className="bg-black text-white min-h-screen p-8">
      {/* Page Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-accent2">Overmind</h1>
        <p className="text-xl text-accent1">
          The Overmind is a Collective weighted Agent DAO.
        </p>
      </header>

      {/* Navigation Buttons */}
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setActivePage("livefeed")}
          className={`${
            activePage === "livefeed" ? "bg-[#fd01f5] text-black" : "bg-gray-700"
          } text-white px-6 py-2 rounded-lg hover:bg-[#01fcfc] transition-colors`}
        >
          Live Feed
        </button>
        <button
          onClick={() => setActivePage("gov")}
          className={`${
            activePage === "gov" ? "bg-[#fd01f5] text-black" : "bg-gray-700"
          } text-white px-6 py-2 rounded-lg hover:bg-[#01fcfc] transition-colors`}
        >
          Governance
        </button>
      </div>

      {/* Page Content */}
      <div>
        {activePage === "gov" && <Gov />}
        {activePage === "livefeed" && <LiveFeed />}
      </div>
    </div>
  );
};

export default OvermindPage;
