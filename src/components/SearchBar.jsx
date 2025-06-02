import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    if (onSearch) onSearch(query);
    if (!history.includes(query)) {
      setHistory([query, ...history]);
    }
    setShowDropdown(false);
  };

  const handleSelect = (item) => {
    setQuery(item);
    setShowDropdown(false);
    if (onSearch) onSearch(item);
  };

  const handleDelete = (item, e) => {
    e.stopPropagation();
    setHistory(history.filter((h) => h !== item));
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "8px", width: "100%" }}
        autoComplete="off"
      >
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          style={{
            padding: "8px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            flex: 1,
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            borderRadius: "20px",
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
      {showDropdown && history.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            right: 0,
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            zIndex: 10,
            maxHeight: "180px",
            overflowY: "auto",
          }}
        >
          {history
            .filter((item) =>
              item.toLowerCase().includes(query.toLowerCase())
            )
            .map((item, idx, arr) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 12px",
                  cursor: "pointer",
                  borderBottom:
                    idx !== arr.length - 1 ? "1px solid #eee" : "none",
                  background: item === query ? "#f6fff6" : "#fff",
                }}
                onClick={() => handleSelect(item)}
              >
                <span style={{ flex: 1 }}>{item}</span>
                <span
                  onClick={(e) => handleDelete(item, e)}
                  style={{
                    marginLeft: 8,
                    color: "#888",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: 16,
                    borderRadius: "50%",
                    width: 20,
                    height: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s",
                  }}
                  title="Delete"
                  onMouseOver={(e) =>
                    (e.currentTarget.style.background = "#eee")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  &#10005;
                </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;