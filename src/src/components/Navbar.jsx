// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const connectWallet = () => {
    // Placeholder—add Web3.js/MetaMask later
    alert("Wallet Connect Coming Soon!");
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-neon-green">
        NEFTIT
      </Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-neon-green">Discover</Link>
        <Link to="/dashboard" className="hover:text-neon-green">Dashboard</Link>
        <Link to="/profile/0x0" className="hover:text-neon-green">Profile</Link>
        <button
          onClick={connectWallet}
          className="bg-neon-green text-gray-900 px-4 py-2 rounded hover:bg-green-400"
        >
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
