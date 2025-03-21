import React, { useState } from "react";

interface Skill {
  name: string;
  contractAddress: string;
  abi: string;
}

const CreateSkillForm: React.FC<{ onSubmit: (data: Skill) => void }> = ({ onSubmit }) => {
  const [skill, setSkill] = useState<Skill>({
    name: "",
    contractAddress: "",
    abi: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSkill((prevSkill) => ({
      ...prevSkill,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(skill);
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div>
        <label className="text-accent1">Name</label>
        <input
          type="text"
          name="name"
          value={skill.name}
          onChange={handleChange}
          className="w-full p-2 bg-black text-white rounded border-2 border-accent2"
          placeholder="Enter skill name"
        />
      </div>

      <div>
        <label className="text-accent1">Contract Address</label>
        <input
          type="text"
          name="contractAddress"
          value={skill.contractAddress}
          onChange={handleChange}
          className="w-full p-2 bg-black text-white rounded border-2 border-accent2"
          placeholder="Enter contract address"
        />
      </div>

      <div>
        <label className="text-accent1">ABI</label>
        <textarea
          name="abi"
          value={skill.abi}
          onChange={handleChange}
          className="w-full p-2 bg-black text-white rounded border-2 border-accent2"
          placeholder="Enter ABI"
          rows={4}
        />
      </div>

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-accent1 text-black font-bold py-2 px-4 rounded hover:bg-accent2"
        >
          Load Abilites
        </button>
      </div>
    </form>
  );
};

export default CreateSkillForm;
