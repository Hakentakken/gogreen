import React from "react";

const mockUser = {
  name: "Utkarsh Sharma",
  email: "utkarsh@example.com",
  phone: "+91 9876543210",
  joined: "2024-01-15",
  avatar:
    "https://ui-avatars.com/api/?name=Utkarsh+Sharma&background=43e97b&color=fff&size=128",
};

const recentPurchases = [
  { id: 1, name: "Organic Wheat", date: "2025-05-20" },
  { id: 2, name: "Fresh Tomatoes", date: "2025-05-18" },
  { id: 3, name: "Rice Seeds", date: "2025-05-10" },
  { id: 4, name: "Fertilizer", date: "2025-05-10" },
  { id: 5, name: "Waltermelon Seeds", date: "2025-05-10" }
];

const AccountPage = () => {
  return (
    <div
      style={{
        width: "calc(100vw - 200px)",
        margin: "40px 100px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      {/* Left: Account Info */}
      <div
        style={{
          flex: 2,
          padding: 24,
          borderRadius: 16,
          background: "#fff",
          boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
          minHeight: 320,
        }}
      >
        <h2 style={{ marginBottom: 24, color: "#388e3c" }}>
          Account Information
        </h2>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            marginBottom: 16,
            overflow: "visible",
          }}
        >
          <div style={{ flex: 1 }}>
            <strong>Name:</strong>
            <div>{mockUser.name}</div>
          </div>
          <img
            src={mockUser.avatar}
            alt="Avatar"
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              marginLeft: -100,
              border: "2px solid #43e97b",
              background: "#f6fff6",
              objectFit: "cover",
            }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <strong>Email:</strong>
          <div>{mockUser.email}</div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <strong>Phone:</strong>
          <div>{mockUser.phone}</div>
        </div>
        <div>
          <strong>Joined:</strong>
          <div>{mockUser.joined}</div>
        </div>
      </div>

      {/* Right: Recent Purchases Panel */}
      <div
        style={{
          width: 300,
          background: "#f8f8f8",
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(67,233,123,0.08)",
          padding: 20,
          marginLeft: 32,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
          {/* Cart Icon */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginRight: 8 }}
          >
            <circle cx="9" cy="21" r="1.5" fill="#43e97b" />
            <circle cx="18" cy="21" r="1.5" fill="#43e97b" />
            <path
              d="M2 3h2l2.68 13.39A2 2 0 0 0 8.62 18h7.76a2 2 0 0 0 1.94-1.61L21 6H6"
              stroke="#43e97b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontWeight: "bold", fontSize: 18, color: "#388e3c" }}>
            Recent Purchases
          </span>
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {recentPurchases.length === 0 ? (
            <li style={{ color: "#888" }}>No recent purchases.</li>
          ) : (
            recentPurchases.map((item) => (
              <li
                key={item.id}
                style={{
                  padding: "8px 0",
                  borderBottom: "1px solid #e0e0e0",
                  fontSize: 15,
                  color: "#333",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{item.name}</span>
                <span style={{ fontSize: 12, color: "#888" }}>{item.date}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default AccountPage;