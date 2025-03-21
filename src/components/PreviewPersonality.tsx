import React from "react";

const PreviewPersonality: React.FC<{ personality: any }> = ({ personality }) => {
  return (
    <div className="p-4 space-y-4 bg-black rounded border-2 border-accent1">
      <h3 className="text-2xl font-bold text-[#fd01f5]">Preview Personality</h3>

      <div>
        <h4 className="text-accent1 text-lg">Name</h4>
        <p className="text-gray-300">{personality.name || "Not Provided"}</p>
      </div>

      <div>
        <h4 className="text-accent1 text-lg">Bio</h4>
        <p className="text-gray-300">{personality.bio || "Not Provided"}</p>
      </div>

      <div>
        <h4 className="text-accent1 text-lg">Lore</h4>
        <p className="text-gray-300">{personality.lore || "Not Provided"}</p>
      </div>

      <div>
        <h4 className="text-accent1 text-lg">Knowledge</h4>
        <p className="text-gray-300">{personality.knowledge || "Not Provided"}</p>
      </div>

      <div>
        <h4 className="text-accent1 text-lg">Message Examples</h4>
        <p className="text-gray-300">{personality.messageExamples[0].content || "Not Provided"}</p>
      </div>

      <div>
        <h4 className="text-accent1 text-lg">Post Examples</h4>
        <p className="text-gray-300">{personality.postExamples || "Not Provided"}</p>
      </div>

      <div>
        <h4 className="text-accent1 text-lg">Topics</h4>
        <p className="text-gray-300">{personality.topics || "Not Provided"}</p>
      </div>

      <div>
        <h4 className="text-accent1 text-lg">Style</h4>
        <div>
          <p className="text-gray-300">{`All: ${personality.style.all || "Not Provided"}`}</p>
          <p className="text-gray-300">{`Chat: ${personality.style.chat || "Not Provided"}`}</p>
          <p className="text-gray-300">{`Post: ${personality.style.post || "Not Provided"}`}</p>
        </div>
      </div>

      <div>
        <h4 className="text-accent1 text-lg">Adjectives</h4>
        <p className="text-gray-300">{personality.adjectives || "Not Provided"}</p>
      </div>
    </div>
  );
};

export default PreviewPersonality;
