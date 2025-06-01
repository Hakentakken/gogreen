import React from "react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <div className="max-w-2xl mx-auto mt-8 grid grid-cols-2 gap-4">
      <Link to="/section/land" className="bg-green-200 p-6 rounded shadow text-center font-bold">Land for Rent</Link>
      <Link to="/section/tractors" className="bg-yellow-200 p-6 rounded shadow text-center font-bold">Tractors & Equipment</Link>
      <Link to="/section/crops" className="bg-blue-200 p-6 rounded shadow text-center font-bold">Crops for Sale</Link>
      <Link to="/section/seeds" className="bg-purple-200 p-6 rounded shadow text-center font-bold">Seeds & Fertilizers</Link>
    </div>
  );
}