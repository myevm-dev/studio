import React from "react";

interface ProgressCardProps {
  avatar: string;
  username: string;
  rank: number;
  level: number;
  xp: { current: number; max: number };
  walletBalance: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  avatar,
  username,
  rank,
  level,
  xp,
  walletBalance,
}) => {
  return (
    <div className="text-white flex flex-col items-center bg-black p-6 rounded-lg shadow-lg border-4 border-[#fd01f5] shadow-[0_0_15px_#fd01f5]">
      {/* Profile Info Row */}
      <div className="flex items-center justify-between w-full mb-4">
        {/* Avatar and Username */}
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-[#01fcfc] transform hover:scale-105 transition-all duration-300" // Neon border for avatar
          />
          <div>
            <h2 className="text-xl font-bold text-[#fd01f5]">{username}</h2> {/* Neon text color for username */}
            <p className="text-[#01fcfc] text-lg">Rank: #{rank}</p> {/* Neon text color for rank */}
          </div>
        </div>
        {/* Wallet Balance */}
        <div className="text-2xl font-semibold mr-4">
          <span className="text-[#01fcfc]">Balance<br/></span>{" "}
          <span className="text-white">${walletBalance.toFixed(2)}</span>
        </div>
      </div>

      {/* XP Progress */}
      <div className="w-full">
        <div className="relative w-full bg-gray-700 rounded-full h-4">
          <div
            className="absolute top-0 left-0 h-4 rounded-full bg-gradient-to-r from-[#01fcfc] to-[#fd01f5]" // Gradient progress bar
            style={{ width: `${(xp.current / xp.max) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-gray-300 mt-1 text-sm">
          <span className="text-[#fd01f5]">Level {level}</span> {/* Neon text color for level */}
          <span className="text-[#01fcfc]">
            {xp.current} / {xp.max} XP {/* Neon text color for XP progress */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
