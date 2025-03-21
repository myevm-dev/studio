import React from "react";
import ProfileDetail from "../components/ProfileDetail";
import TaskTable from "../components/TaskTable";

const ProfilePage: React.FC = () => {
  const profile = {
    name: "John Doe",
    address: "0x1234567890abcdef1234567890abcdef12345678", // Ethereum address
    rank: 42,
    level: 5,
    xp: { current: 320, max: 500 }, // XP progress
    walletBalance: 1345.67, // Wallet balance
    bio: "Web3 developer and blockchain enthusiast.",
    status: "active", // Status: "active", "inactive", "banned"
    socials: {
      twitter: "https://twitter.com/yourhandle",
      linkedin: "https://linkedin.com/in/yourhandle",
      github: "https://github.com/yourhandle",
    },
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <main className="px-4 py-8">
        <ProfileDetail profile={profile} />
        <div className="mt-8">
          <TaskTable />
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
