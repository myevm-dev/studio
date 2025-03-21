// PreOrderAboutPage.tsx

import HowPreOrderWorks from "../components/HowPreOrderWorks"; // Import new component
import Roadmap from "../components/Roadmap"; // Import new component
import Access from "../components/Access"; // Import new component

const PreOrderAboutPage: React.FC = () => {




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
      }}
    >


      {/* Sections */}
      <div id="howPreOrder" style={{ padding: "40px 0" }}>
        <HowPreOrderWorks />
      </div>
      <div id="roadmap" style={{ padding: "40px 0" }}>
        <Roadmap />
      </div>
      <div id="access" style={{ padding: "40px 0" }}>
        <Access />
      </div>
    </div>
  );
};

export default PreOrderAboutPage;
