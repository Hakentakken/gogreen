import React from "react";

const mockUser = {
  name: "Amit Sharma",
  email: "amit.sharma@example.com",
  phone: "+91 9876543210",
  address: "123 Green Avenue, Delhi, India",
  role: "Farmer",
  joined: "Jan 2024",
  avatar: "",
};

const Profile = () => {
  const { name, email, phone, address, role, joined, avatar } = mockUser;

  return (
    <div style={{
      background: "#e6fff7", // match main page background
      minHeight: "100vh",
      padding: "0",
    }}>
      <div style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 24,
        background: "#f6fff8",
        borderRadius: 16,
        boxShadow: "0 2px 12px rgba(56,161,105,0.08)",
        border: "1px solid #38a169",
        textAlign: "center"
      }}>
        <div style={{ marginBottom: 24 }}>
          <div style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            background: "#38a169",
            color: "#fff",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,
            fontWeight: "bold",
            marginBottom: 12,
            marginTop: 8,
          }}>
            {avatar ? (
              <img src={avatar} alt={name} style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
            ) : (
              name.split(" ").map(n => n[0]).join("").toUpperCase()
            )}
          </div>
          <h2 style={{ margin: "8px 0 4px 0", color: "#22543d" }}>{name}</h2>
          <div style={{ color: "#38a169", fontWeight: 500 }}>{role}</div>
          {/* Update Button */}
          <a
            href="#"
            style={{
              display: "inline-block",
              marginTop: 10,
              fontSize: 14,
              color: "#38a169",
              background: "#e6f9ed",
              border: "1px solid #38a169",
              borderRadius: 6,
              padding: "4px 14px",
              textDecoration: "none",
              fontWeight: 500,
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseOver={e => {
              e.target.style.background = "#38a169";
              e.target.style.color = "#fff";
            }}
            onMouseOut={e => {
              e.target.style.background = "#e6f9ed";
              e.target.style.color = "#38a169";
            }}
          >
            Update
          </a>
        </div>
        <div style={{ textAlign: "left", margin: "0 auto", maxWidth: 300 }}>
          <div style={{ marginBottom: 10 }}>
            <strong>Email:</strong> <span style={{ color: "#22543d" }}>{email}</span>
          </div>
          <div style={{ marginBottom: 10 }}>
            <strong>Phone:</strong> <span style={{ color: "#22543d" }}>{phone}</span>
          </div>
          <div style={{ marginBottom: 10 }}>
            <strong>Address:</strong> <span style={{ color: "#22543d" }}>{address}</span>
          </div>
          <div>
            <strong>Joined:</strong> <span style={{ color: "#22543d" }}>{joined}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;