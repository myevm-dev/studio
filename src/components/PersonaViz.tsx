import React from "react";
import GenerativePersonaImage from "./GenerativePersonaImage"; // Importing the default export

interface PersonaVizProps {
  imageSrc: string | null;  // Make sure the imageSrc can be null
}

const PersonaViz: React.FC<PersonaVizProps> = ({ imageSrc }) => {
  return (
    <div className="w-full aspect-square bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center border-2 border-accent1">
      {/* If imageSrc is provided, render the static image, otherwise render the generative image */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="Persona"
          className="object-cover w-full h-full" // Make sure the image covers the entire container
        />
      ) : (
        <GenerativePersonaImage /> // Show generative image if no imageSrc is provided
      )}
    </div>
  );
};

export default PersonaViz;
