import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccountSidebar from "./AccountSidebar"; // Import AccountSidebar

const Navbar: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state
  const [genCreditsBalance, setGenCreditsBalance] = useState<number>(0);
  const [isAccountPanelOpen, setIsAccountPanelOpen] = useState(false); // Track sidebar open state

  const fetchGenCreditsBalance = async () => {
    setGenCreditsBalance(0);
  };

  const connectWallet = async () => {
    if (window.ethereum && typeof window.ethereum.request === "function") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (err) {
        console.error("Error connecting wallet:", err);
      }
    } else {
      alert("MetaMask is not installed or Ethereum provider is unavailable.");
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setIsAccountPanelOpen(false); // Close the sidebar if disconnecting
  };

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) setAccount(accounts[0]);
      }
    };
    checkConnection();
    fetchGenCreditsBalance();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 border-b-2 border-[#fd01f5]">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 flex justify-between items-center h-10">
        {/* Logo and Title */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/studiologo.png"
            alt="Studio Logo"
            className="w-14 h-14 object-contain"
          />
          <span className="text-3xl font-bold text-[#fd01f5] hidden md:block">
            Studio
          </span>
        </a>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-10">
          <a
            href="/create"
            className="text-lg font-medium text-white hover:text-[#01fcfc] transition"
          >
            Create
          </a>
          <a
            href="/shop"
            className="text-lg font-medium text-white hover:text-[#01fcfc] transition"
          >
            Shop
          </a>
          <a
            href="/manage"
            className="text-lg font-medium text-white hover:text-[#01fcfc] transition"
          >
            Manage
          </a>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-lg font-medium text-white hover:text-[#01fcfc] transition"
            >
              More
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-black text-white shadow-lg mt-2 py-2 px-4 rounded">
                <a
                  href="/agents"
                  className="block py-1 text-sm hover:text-[#fd01f5]"
                >
                  Agents
                </a>
                <a
                  href="/overmind"
                  className="block py-1 text-sm hover:text-[#fd01f5]"
                >
                  Overmind
                </a>
                <a
                  href="https://myevm.network"
                  className="block py-1 text-sm hover:text-[#fd01f5]"
                >
                  About
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <Link to="/buy-gen-credits">
            <button className="px-4 py-2 bg-black text-white border-2 border-accent2 rounded hover:bg-[#333]">
              GenCredits: <span className="text-accent1">{genCreditsBalance}</span>
            </button>
          </Link>
          {account ? (
            <button
              onClick={() => setIsAccountPanelOpen(!isAccountPanelOpen)} // Toggle the sidebar
              className="px-4 py-2 bg-[#fd01f5] rounded hover:bg-[#fd01f5]/80 text-white font-bold"
            >
              Account
            </button>
          ) : (
            <button
              onClick={connectWallet}
              className="px-6 py-2 bg-[#01fcfc] rounded hover:bg-[#01fcfc]/80 text-black font-bold"
            >
              Connect
            </button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white px-4 py-2 space-y-2">
          <a
            href="/create"
            className="block text-lg font-medium text-white hover:text-[#01fcfc] transition"
          >
            Create
          </a>
          <a
            href="/shop"
            className="block text-lg font-medium text-white hover:text-[#01fcfc] transition"
          >
            Shop
          </a>
          <a
            href="/manage"
            className="block text-lg font-medium text-white hover:text-[#01fcfc] transition"
          >
            Manage
          </a>
          <a
            href="/agents"
            className="block text-lg font-medium text-white hover:text-[#fd01f5] transition"
          >
            Agents
          </a>
          <a
            href="/overmind"
            className="block text-lg font-medium text-white hover:text-[#fd01f5] transition"
          >
            Overmind
          </a>
          <a
            href="https://myevm.network"
            className="block text-lg font-medium text-white hover:text-[#fd01f5] transition"
          >
            About
          </a>
        </div>
      )}

      {/* Account Sidebar */}
      {isAccountPanelOpen && (
        <AccountSidebar
          account={account}
          onClose={() => setIsAccountPanelOpen(false)}
          disconnectWallet={disconnectWallet}
        />
      )}
    </nav>
  );
};

export default Navbar;
