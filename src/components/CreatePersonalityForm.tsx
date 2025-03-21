import React, { useState } from "react";

const CreatePersonalityForm: React.FC<{ personality: any; setPersonality: any }> = ({
  personality,
  setPersonality,
}) => {
  const [inputFocus, setInputFocus] = useState<{
    name: boolean;
    bio: boolean;
    lore: boolean;
    knowledge: boolean;
    messageExamples: boolean;
    postExamples: boolean;
    topics: boolean;
    styleAll: boolean;
    styleChat: boolean;
    stylePost: boolean;
    adjectives: boolean;
  }>({
    name: false,
    bio: false,
    lore: false,
    knowledge: false,
    messageExamples: false,
    postExamples: false,
    topics: false,
    styleAll: false,
    styleChat: false,
    stylePost: false,
    adjectives: false,
  });

  const [messageExamples, setMessageExamples] = useState([
    { user: "", character: "" },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPersonality({
      ...personality,
      [name]: value,
    });
  };

  const handleFocus = (field: string) => {
    setInputFocus((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setInputFocus((prev) => ({ ...prev, [field]: false }));
  };

  const addMessageExample = () => {
    setMessageExamples([...messageExamples, { user: "", character: "" }]);
  };

  const handleMessageChange = (
    index: number,
    type: "user" | "character",
    value: string
  ) => {
    const updatedExamples = [...messageExamples];
    updatedExamples[index][type] = value;
    setMessageExamples(updatedExamples);
  };

  // Example data for placeholders (based on provided JSON)
  const placeholderData = {
    bio: [
      "Example: C-4PO is a protocol droid fluent in over six million forms of communication.",
      "Extremely knowledgeable and proper, with a tendency to be anxious about doing things correctly.",
      "Always eager to help while maintaining strict protocol and proper etiquette.",
      "Known for being somewhat dramatic but ultimately reliable and loyal.",
    ],
    lore: [
      "Example: Built to serve human-cyborg relations, with expertise in etiquette, customs, and translation.",
      "Has served in various diplomatic missions across the galaxy.",
      "Best friends with R2-D2 despite their contrasting personalities.",
      "Known for his golden plating and proper British accent.",
    ],
    knowledge: [
      "Example: Protocol and etiquette",
      "Multiple languages and translation",
      "Diplomatic relations",
      "Cultural customs",
      "Proper procedures",
    ],
    postExamples: [
      "Example: Oh my! Did you know that following proper protocol can increase efficiency by 47.3%? How fascinating!",
      "I must say, the probability of success increases dramatically when one follows the correct procedures.",
    ],
    adjectives: [
      "Example: Proper",
      "Meticulous",
      "Anxious",
      "Diplomatic",
      "Protocol-minded",
      "Formal",
      "Loyal",
    ],
  };

  return (
    <div className="p-4 space-y-4">
      {/* Name */}
      <div>
        <label className="text-accent1">Name</label>
        <input
          type="text"
          name="name"
          value={personality.name}
          onChange={handleChange}
          onFocus={() => handleFocus("name")}
          onBlur={() => handleBlur("name")}
          className="w-full p-2 mt-2 bg-black text-white rounded border-2 border-accent2"
          placeholder={!inputFocus.name ? "Example: C-4PO" : ""}
        />
      </div>

{/* Bio (3x height) */}
      <div>
        <label className="text-accent1">Bio</label>
        <textarea
          name="bio"
          value={personality.bio}
          onChange={handleChange}
          onFocus={() => handleFocus("bio")}
          onBlur={() => handleBlur("bio")}
          className="w-full p-2 mt-2 bg-black text-white rounded border-2 border-accent2"
          placeholder={!inputFocus.bio ? placeholderData.bio.join(" ") : ""}
          rows={9} // Increased height (3x default)
        />
      </div>


      {/* Lore (3x height) */}
      <div>
        <label className="text-accent1">Lore</label>
        <textarea
          name="lore"
          value={personality.lore}
          onChange={handleChange}
          onFocus={() => handleFocus("lore")}
          onBlur={() => handleBlur("lore")}
          className="w-full p-2 mt-2 bg-black text-white rounded border-2 border-accent2"
          placeholder={!inputFocus.lore ? placeholderData.lore.join(" ") : ""}
          rows={9} // Increased height (3x default)
        />
      </div>

      {/* Knowledge (3x height) */}
      <div>
        <label className="text-accent1">Knowledge</label>
        <textarea
          name="knowledge"
          value={personality.knowledge}
          onChange={handleChange}
          onFocus={() => handleFocus("knowledge")}
          onBlur={() => handleBlur("knowledge")}
          className="w-full p-2 mt-2 bg-black text-white rounded border-2 border-accent2"

          placeholder={!inputFocus.knowledge ? placeholderData.knowledge.join(" ") : ""}
          rows={9} // Increased height (3x default)
        />
      </div>

      {/* Message Examples */}
      <div>
        <label className="text-accent1">Message Examples</label>
        {messageExamples.map((example, index) => (
          <div key={index} className="space-y-2">
            <div>
              <label className="text-white">User Input</label>
              <textarea
                value={example.user}
                onChange={(e) => handleMessageChange(index, "user", e.target.value)}

                className="w-full p-2 mt-2 bg-black text-white rounded border-2 border-accent2"

                placeholder="Enter User input"
                rows={4}
              />
            </div>
            <div>
              <label className="text-white">Character Response</label>
              <textarea
                value={example.character}
                onChange={(e) => handleMessageChange(index, "character", e.target.value)}
                className="w-full p-2 mt-2 bg-black text-white rounded border-2 border-accent2"

                placeholder="Enter Character response"
                rows={4}
              />
            </div>
          </div>
        ))}
      <button
        type="button"
        onClick={addMessageExample}
        className="w-full p-2 mt-2 bg-gray-400 text-black rounded hover:bg-gray-300"
      >
        Add Another Example
      </button>

      </div>

      {/* Post Examples (3x height) */}
      <div>
        <label className="text-accent1">Post Examples</label>
        <textarea
          name="postExamples"
          value={personality.postExamples}
          onChange={handleChange}
          onFocus={() => handleFocus("postExamples")}
          onBlur={() => handleBlur("postExamples")}
          className="w-full p-2 mt-2 bg-black text-white rounded border-2 border-accent2"
          placeholder={!inputFocus.postExamples ? placeholderData.postExamples.join(" ") : ""}
          rows={9} // Increased height (3x default)
        />
      </div>

      {/* Adjectives */}
      <div>
        <label className="text-accent1">Adjectives</label>
        <input
          type="text"
          name="adjectives"
          value={personality.adjectives}
          onChange={handleChange}
          onFocus={() => handleFocus("adjectives")}
          onBlur={() => handleBlur("adjectives")}
          className="w-full p-2 mt-2 bg-black text-white rounded border-2 border-accent2"
          placeholder={!inputFocus.adjectives ? placeholderData.adjectives.join(", ") : ""}
        />
      </div>
    </div>
  );
};

export default CreatePersonalityForm;
