// PluginItems.tsx
import React from "react";

const PluginItems: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-[#fd01f5] mt-8">Web2 Plugin Items</h2>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {/* Discord Plugin Card */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl text-[#fd01f5]">Discord Plugin</h3>
          <p className="text-gray-400">Full Discord bot integration with voice, reactions, and more.</p>
          <button className="mt-2 px-4 py-2 bg-[#fd01f5] rounded">Buy Now</button>
        </div>
        
        {/* Lens Plugin Card */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl text-[#fd01f5]">Lens Plugin</h3>
          <p className="text-gray-400">Interact with decentralized social media platform Lens Protocol.</p>
          <button className="mt-2 px-4 py-2 bg-[#fd01f5] rounded">Buy Now</button>
        </div>
        
        {/* Slack Plugin Card */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl text-[#fd01f5]">Slack Plugin</h3>
          <p className="text-gray-400">Integrate AI with Slack to enhance team communication.</p>
          <button className="mt-2 px-4 py-2 bg-[#fd01f5] rounded">Buy Now</button>
        </div>
        
        {/* Telegram Plugin Card */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl text-[#fd01f5]">Telegram Plugin</h3>
          <p className="text-gray-400">Telegram bot integration with message handling and media processing.</p>
          <button className="mt-2 px-4 py-2 bg-[#fd01f5] rounded">Buy Now</button>
        </div>
        
        {/* Twitter Plugin Card */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl text-[#fd01f5]">Twitter Plugin</h3>
          <p className="text-gray-400">Automated posting, replying, and searching for Twitter interactions.</p>
          <button className="mt-2 px-4 py-2 bg-[#fd01f5] rounded">Buy Now</button>
        </div>
        
        {/* Farcaster Plugin Card */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl text-[#fd01f5]">Farcaster Plugin</h3>
          <p className="text-gray-400">Decentralized social network integration with Farcaster protocol.</p>
          <button className="mt-2 px-4 py-2 bg-[#fd01f5] rounded">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default PluginItems;
