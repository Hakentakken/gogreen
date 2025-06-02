import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-600 px-4 py-3 flex items-center justify-between">
      <Link to="/" className="text-white font-bold text-xl">
        Agri Marketplace
      </Link>
      <div>
        <Link to="/login" className="text-white hover:underline mx-2">Login</Link>
        <Link to="/register" className="text-white hover:underline mx-2">Register</Link>
        <Link to="/dashboard" className="text-white hover:underline mx-2">Dashboard</Link>
        <Link to="/account" className="text-white hover:underline mx-2">Account</Link>
      </div>
    </nav>
  );
}