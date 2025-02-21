// src/pages/ProfilePage.jsx
import React from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { userId } = useParams();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Profile: {userId}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold">Your NFTs</h2>
          <p>Common: 10 | Rare: 2 | Legendary: 1 | Platinum: 0</p>
          <button className="mt-2 bg-neon-green text-gray-900 px-4 py-2 rounded">
            Burn for Upgrade
          </button>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold">Quest Progress</h2>
          <p>3/5 Tasks Complete—Claim 5 NFTs!</p>
          <button className="mt-2 bg-neon-green text-gray-900 px-4 py-2 rounded">
            Claim Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
