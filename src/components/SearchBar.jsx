import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "20px", // More curve
          border: "1px solid #ccc",
          flex: 1,
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 16px",
          borderRadius: "20px", // More curve
          border: "none",
          backgroundColor: "#4CAF50",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;