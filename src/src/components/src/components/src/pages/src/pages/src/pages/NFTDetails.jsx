// src/pages/NFTDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

const NFTDetails = () => {
  const { nftId } = useParams();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">NFT #{nftId}</h1>
      <div className="bg-gray-800 p-4 rounded">
        <h2 className="text-xl font-semibold">Details</h2>
        <p>Tier: Platinum | Chain: Polygon | Burn Value: 10 Commons</p>
        <button className="mt-2 bg-neon-green text-gray-900 px-4 py-2 rounded">
          Burn This NFT
        </button>
      </div>
    </div>
  );
};

export default NFTDetails;
