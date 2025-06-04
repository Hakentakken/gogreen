import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 px-4 py-3 flex items-center justify-between shadow-md relative">
      <Link to="/" className="text-white font-bold text-xl flex items-center gap-2">
        <img
          src="https://img.icons8.com/color/48/000000/tractor.png"
          alt="logo"
          className="w-8 h-8"
        />
        Agri Marketplace
      </Link>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>
      {/* Nav links */}
      <div
        className={`
          flex-col md:flex-row md:flex items-center absolute md:static top-full left-0 w-full md:w-auto bg-blue-600 md:bg-transparent z-20
          transition-all duration-300 ease-in-out
          ${open ? "flex" : "hidden md:flex"}
        `}
      >
        <Link
          to="/about"
          className="text-green-100 hover:text-green-300 font-medium px-4 py-2 transition"
          onClick={() => setOpen(false)}
        >
          About Us
        </Link>
        <Link
          to="/login"
          className="text-white hover:text-blue-200 px-4 py-2 transition"
          onClick={() => setOpen(false)}
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-white hover:text-blue-200 px-4 py-2 transition"
          onClick={() => setOpen(false)}
        >
          Register
        </Link>
        <Link
          to="/dashboard"
          className="text-white hover:text-blue-200 px-4 py-2 transition"
          onClick={() => setOpen(false)}
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}