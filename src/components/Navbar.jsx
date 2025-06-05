import React, { useState } from "react";
import { Link } from "react-router-dom";

const mockUser = {
  name: "Amit Sharma",
  avatar: "", // put image url here if available, else will use initials
};

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 px-4 py-3 flex items-center justify-between shadow-md relative">
      {/* Left: Logo */}
      <Link to="/" className="text-white font-bold text-xl flex items-center gap-2">
        <img
          src="https://img.icons8.com/color/48/000000/tractor.png"
          alt="logo"
          className="w-8 h-8"
        />
        Agri Marketplace
      </Link>

      {/* Center: Tagline */}
      <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="text-white font-semibold text-lg tracking-wide whitespace-nowrap italic">
          Click. Cultivate. Conquer. With GreenGo
        </span>
      </div>

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
        <Link to="/profile" style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginLeft: 16,
          padding: "6px 16px",
          background: "#38a169",
          color: "#fff",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 500
        }}>
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "#276749",
              color: "#fff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 15,
              fontWeight: "bold",
              marginRight: 6,
              overflow: "hidden"
            }}
          >
            {mockUser.avatar
              ? <img src={mockUser.avatar} alt="profile" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
              : getInitials(mockUser.name)
            }
          </span>
          Profile
        </Link>
      </div>
    </nav>
  );
}