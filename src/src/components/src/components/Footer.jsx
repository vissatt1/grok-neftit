// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-center">
      <p>© 2025 NEFTIT - 500k NFTs, Gas-Free Quests, Burn to Gold</p>
      <div className="mt-2">
        <a href="https://twitter.com/NEFTITxyz" className="mx-2 hover:text-neon-green">Twitter</a>
        <a href="https://discord.gg/NEFTIT" className="mx-2 hover:text-neon-green">Discord</a>
        <a href="mailto:connect@neftit.xyz" className="mx-2 hover:text-neon-green">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
