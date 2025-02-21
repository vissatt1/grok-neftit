// src/pages/DiscoverPage.jsx
import React from "react";

const DiscoverPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Discover NEFTIT</h1>
      <p className="text-lg mb-4">
        500k Free NFTs, 50 Projects—Complete Quests, Burn for Platinum, Silver, Gold!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold">Quest #1</h2>
          <p>Follow @NEFTITxyz, Retweet, Solve Riddle—1k NFTs!</p>
          <button className="mt-2 bg-neon-green text-gray-900 px-4 py-2 rounded">
            Start Quest
          </button>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold">Burn Portal</h2>
          <p>Burn 10 Commons → 1 Platinum. Gold Airdrop Awaits!</p>
          <button className="mt-2 bg-neon-green text-gray-900 px-4 py-2 rounded">
            Burn Now
          </button>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold">Projects</h2>
          <p>50 Slots, 49 Left—Join for Free 10k NFTs!</p>
          <button className="mt-2 bg-neon-green text-gray-900 px-4 py-2 rounded">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;
