import React, { useState } from "react";

interface CommunityChatProps {
  communityName: string;
}

const CommunityChat: React.FC<CommunityChatProps> = ({ communityName }) => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [message, setMessage] = useState<string>("");

  // Handle sending a message
  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { sender: "You", text: message }]);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "Community", text: `Community responds to: "${message}"` }, // Placeholder response
      ]);
      setMessage(""); // Clear the input field
    }
  };

  return (
    <div className="text-white">
      {/* Chat Window: Display previous messages */}
      <div className="bg-black p-4 rounded-lg h-60 overflow-auto mb-4 border border-[#fd01f5]">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-2 rounded-lg max-w-xs ${
                  msg.sender === "You" ? "bg-[#fd01f5]" : "bg-[#01fcfc]"
                } text-black`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="flex items-center space-x-2">
        <textarea
          className="w-full h-16 p-2 bg-black rounded-lg text-white placeholder-[#01fcfc]"
          placeholder={`Type your message to the ${communityName} community...`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          onClick={sendMessage}
          className="bg-[#fd01f5] text-white px-4 py-2 rounded-lg hover:bg-[#01fcfc]"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CommunityChat;
