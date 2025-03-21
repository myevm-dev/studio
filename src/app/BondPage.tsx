import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/card";
import Leaderboard from "../components/Leaderboard";

// Features array with agent information and share prices
const features = [
  { name: "Agent1", description: ".", pfp: "/agents/1.png", sharePrice: 12.34, status: "offline" as "online" },
  { name: "Agent2", description: ".", pfp: "/agents/2.png", sharePrice: 45.67, status: "offline" as "offline" },
  { name: "Agent3", description: ".", pfp: "/agents/3.png", sharePrice: 89.01, status: "online" as "online" },
  { name: "Agent4", description: ".", pfp: "/agents/4.png", sharePrice: 23.45, status: "offline" as "offline" },
  { name: "Agent5", description: ".", pfp: "/agents/5.png", sharePrice: 67.89, status: "online" as "online" },
  { name: "Agent6", description: ".", pfp: "/agents/6.png", sharePrice: 34.56, status: "online" as "offline" },
];

function ScrollToAgents() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#agents") {
      const agentSection = document.getElementById("agent-cards");
      if (agentSection) {
        agentSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

const BondPage: React.FC = () => {
  const [view, setView] = useState<"cards" | "leaderboard">("cards");

  return (
    <>
      <ScrollToAgents />
      <main className="pt-4">
        <Navbar />

        {/* Bond to Invest text above Agent Cards */}
        <section className="text-center mt-8">
          <h2 className="text-4xl font-semibold text-[#fff]">
            Buy Shares of Advanced Agent Strategies
          </h2>
        </section>

        {/* View Switching Buttons */}
        <section className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => setView("cards")}
            className={`px-6 py-2 rounded-lg ${
              view === "cards" ? "bg-[#fd01f5] text-black" : "bg-gray-700 text-white"
            } hover:bg-[#01fcfc] transition-colors`}
          >
            Buy Shares
          </button>
          <button
            onClick={() => setView("leaderboard")}
            className={`px-6 py-2 rounded-lg ${
              view === "leaderboard" ? "bg-[#fd01f5] text-black" : "bg-gray-700 text-white"
            } hover:bg-[#01fcfc] transition-colors`}
          >
            Leaderboard
          </button>
        </section>

        {/* Conditional Rendering of Cards or Leaderboard */}
        {view === "cards" ? (
          <section id="agent-cards" className="max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4">
            {features.map((props, index) => (
              <div key={index} className="col-span-10 sm:col-span-5">
                <Card
                  title={props.name}
                  pfp={props.pfp}
                  href={`/agent/${props.name}`}
                  sharePrice={props.sharePrice}
                  status={props.status}
                />
              </div>
            ))}
          </section>
        ) : (
          <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto mt-8">
            <Leaderboard />
          </section>
        )}
      </main>
    </>
  );
};

export default BondPage;
