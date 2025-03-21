import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "?",
      answer: ".",
    },
    {
      question: "?",
      answer: ".",
    },
    {
      question: "?",
      answer: ".",
    },
    {
      question: "?",
      answer: ".",
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the current item open/close
  };

  return (
    <section className="max-w-screen-lg mx-auto py-8 bg-black text-white">
      <h1 className="text-4xl font-bold text-accent2 text-center mb-6">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-2 border-accent1 rounded-lg">
            <div
              className="flex justify-between items-center py-3 px-4 cursor-pointer bg-[#1a1a1a] rounded-t-lg hover:bg-[#fd01f5] hover:text-black transition"
              onClick={() => handleToggle(index)}
            >
              <h2 className="font-bold">{item.question}</h2>
              <span className="text-xl">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="py-3 px-4 bg-[#1a1a1a] rounded-b-lg">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

