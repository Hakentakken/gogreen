import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SlideShow from "../components/SlideShow";

export default function DashboardPage() {
  const handleSearch = (query) => {
    // You can implement search logic here
    alert(`Searching for: ${query}`);
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mt-8 mb-6">
        <SearchBar onSearch={handleSearch} />
      </div>
      <SlideShow />
      <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4 mt-8">
        <Link to="/section/land" className="bg-green-200 p-6 rounded shadow text-center font-bold">Land for Rent</Link>
        <Link to="/section/tractors" className="bg-yellow-200 p-6 rounded shadow text-center font-bold">Tractors & Equipment</Link>
        <Link to="/section/crops" className="bg-blue-200 p-6 rounded shadow text-center font-bold">Crops for Sale</Link>
        <Link to="/section/seeds" className="bg-purple-200 p-6 rounded shadow text-center font-bold">Seeds & Fertilizers</Link>
      </div>
    </div>
  );
}