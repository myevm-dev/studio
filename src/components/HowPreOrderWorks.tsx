// HowPreOrderWorks.tsx
import React from "react";

const HowPreOrderWorks: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#101010", // Dark background color
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid #fd01f5", // Border with accent1 color
        borderRadius: "10px", // Optional: Rounded corners
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "1.8rem",
          color: "#fd01f5", // Accent color for title
        }}
      >
        How Pre-Order Works
      </h2>

      <div style={{ marginTop: "30px", fontSize: "1.2rem", color: "#fff", textAlign: "center" }}>
        <h3 style={{ color: "#fd01f5" }}>Important Details</h3>
        <p>
          <strong>333 agents</strong> are available on each chain.
        </p>
        <p>
          <strong>Total Price</strong> 0.02 ETH
        </p>
        <p>
          Mint Day Price: <strong>0.016 ETH</strong>.
        </p>
        <p>
          Plus a <strong>0.004 down payment</strong> to preorder today.
        </p>
        <p>
          <strong>Minting starts when pre-order is filled</strong> and you have 7 days after the start of minting to mint your agent.
        </p>
        <p>
          After that, the agent will be sold to someone on the waiting list.
        </p>
      </div>
    </div>
  );
};

export default HowPreOrderWorks;
