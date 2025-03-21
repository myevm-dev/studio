import React from "react";
import "./Footer.css"; // Import the custom CSS file with .isai-gradient-text class

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 text-center py-6"> {/* Reduced padding */}
      <div>
        <img src="/isailogo.png" alt="ISAI Logo" className="mx-auto mb-2 w-10 h-10" />
        <p className="isai-gradient-text text-lg">ISAI Inside Docs</p>
      </div>
    </footer>
  );
};

export default Footer;
