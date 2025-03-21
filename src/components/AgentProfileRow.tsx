import React from "react";

const agents = [
  { name: "Agent1", image: "/agents/1.png" },
  { name: "Agent2", image: "/agents/2.png" },
  { name: "Agent3", image: "/agents/3.png" },
  { name: "Agent4", image: "/agents/4.png" },
  { name: "Agent5", image: "/agents/5.png" },

];

const AgentProfileRow: React.FC = () => {
  return (
    <section className="profiles flex overflow-x-auto justify-center gap-6 p-4 h-full">
      {agents.map((agent, index) => (
        <div key={index} className="avatar flex flex-col items-center">
          <div className="avatar-img">
            <img
              src={agent.image}
              alt={agent.name}
              className="w-24 h-24 object-contain"
            />
          </div>
          <p className="text-center mt-2 text-sm font-medium">{agent.name}</p>
        </div>
      ))}
    </section>
  );
};

export default AgentProfileRow;

