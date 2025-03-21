import React from "react";
import * as blockies from "ethereum-blockies";

interface ProfileDetailProps {
  profile: {
    name: string;
    address: string; // Ethereum address as a unique identifier
    rank: number;
    level: number;
    xp: { current: number; max: number };
    walletBalance: number;
    bio: string;
    status: string; // "active", "inactive", or "banned"
    socials: { twitter?: string; linkedin?: string; github?: string }; // Links to social profiles
  };
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({ profile }) => {
  // Generate a blockie image from the Ethereum address
  const blockieImage = (blockies as any)
    .create({ seed: profile.address.toLowerCase(), size: 8, scale: 16 })
    .toDataURL();

  const xpPercentage = (profile.xp.current / profile.xp.max) * 100;

  return (
    <div className="text-white flex flex-col items-center bg-black p-6 rounded-lg shadow-lg border-4 border-[#fd01f5] shadow-[0_0_15px_#fd01f5]">
      {/* Profile Info Row */}
      <div className="flex items-center justify-between w-full mb-4">
        {/* Avatar and Username */}
        <div className="flex items-center gap-4">
          <img
            src={blockieImage}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-[#01fcfc] transform hover:scale-105 transition-all duration-300"
          />
          <div>
            <h2 className="text-xl font-bold text-[#fd01f5]">{profile.name}</h2>
            <p className="text-[#01fcfc] text-lg">Rank: #{profile.rank}</p>
          </div>
        </div>

        {/* Wallet Balance */}
        <div className="text-2xl font-semibold mr-4">
          <span className="text-[#01fcfc]">Balance<br /></span>
          <span className="text-white">${profile.walletBalance.toFixed(2)}</span>
        </div>
      </div>

      {/* XP Progress Bar */}
      <div className="w-full mb-4">
        <div className="relative w-full bg-gray-700 rounded-full h-4">
          <div
            className="absolute top-0 left-0 h-4 rounded-full bg-gradient-to-r from-[#01fcfc] to-[#fd01f5]"
            style={{ width: `${xpPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-gray-300 mt-1 text-sm">
          <span className="text-[#fd01f5]">Level {profile.level}</span>
          <span className="text-[#01fcfc]">
            {profile.xp.current} / {profile.xp.max} XP
          </span>
        </div>
      </div>

      {/* Bio */}
      <div className="w-full text-center mb-4">
        <h3 className="text-xl font-semibold text-[#01fcfc] mb-2">About Me</h3>
        <p className="text-gray-300">{profile.bio}</p>
      </div>

      {/* Social Links */}
      <div className="flex gap-4">
        {profile.socials.twitter && (
          <a
            href={profile.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#01fcfc] hover:underline"
          >
            Twitter
          </a>
        )}
        {profile.socials.linkedin && (
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#01fcfc] hover:underline"
          >
            LinkedIn
          </a>
        )}
        {profile.socials.github && (
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#01fcfc] hover:underline"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileDetail;
