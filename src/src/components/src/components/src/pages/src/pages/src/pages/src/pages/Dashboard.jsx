// src/pages/Dashboard.jsx
import React from "react";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">NEFTIT Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold">Total NFTs</h2>
          <p>500k Minted | 400k Commons, 75k Rares, 25k Legendaries</p>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold">Burn Progress</h2>
          <p>50k Platinum | 5k Silver | 500 Gold</p>
        </div>
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold">Airdrop Status</h2>
          <p>NEFT Token: 5-6 Months | Gold Holders Eligible</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
