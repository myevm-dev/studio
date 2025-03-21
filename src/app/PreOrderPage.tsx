import React from "react";
import PreOrderGroup from "../components/PreOrderGroup"; // Import the PreOrderGroup component

const PreOrderPage: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#000", // Dark background color
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh", // Ensure the container takes at least the full screen height
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Ensures content is aligned to the top
        alignItems: "center", // Center horizontally
      }}
    >
      {/* Add page header */}
      <h1 style={{ fontSize: "28px", textAlign: "center", marginBottom: "20px" }}>
        Pre-Order an Agent to get a free Brain Core,<br/> Personality, and GenCredit Token Airdrop
      </h1>

      {/* Directly render the PreOrderGroup component */}
      <PreOrderGroup />
    </div>
  );
};

export default PreOrderPage;
