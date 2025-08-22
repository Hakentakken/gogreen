import React, { useState } from "react";

const crops = [
  { name: "Spinach", color: "#4ade80", emoji: "🥬" },
  { name: "Tomato", color: "#f87171", emoji: "🍅" },
  { name: "Carrot", color: "#fbbf24", emoji: "🥕" },
];

const CropCard = ({ name, color, emoji }) => {
  const [moisture, setMoisture] = useState(45);
  const [pumpOn, setPumpOn] = useState(false);

  const handleStart = () => setPumpOn(true);
  const handleStop = () => setPumpOn(false);

  return (
    <div
      style={{
        maxWidth: 320,
        minWidth: 260,
        margin: "1.5rem",
        padding: "2rem 1.5rem",
        background: "#fff",
        borderRadius: 20,
        boxShadow: "0 4px 24px #0002",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: `2px solid ${color}`,
        transition: "box-shadow 0.2s, border 0.2s",
      }}
    >
      <div style={{ fontSize: 48, marginBottom: 8 }}>{emoji}</div>
      <h3 style={{ marginBottom: 20, color, fontWeight: 700, letterSpacing: 1 }}>{name}</h3>
      <label style={{ fontWeight: 500, marginBottom: 6 }}>Soil Moisture</label>
      <div
        style={{
          background: "#e5e7eb",
          borderRadius: 12,
          height: 28,
          marginBottom: 18,
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${moisture}%`,
            background: moisture < 30 ? "#f87171" : moisture < 60 ? color : "#34d399",
            height: "100%",
            borderRadius: 12,
            transition: "width 0.5s",
          }}
        />
        <span
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            fontWeight: 600,
            color: "#374151",
            fontSize: 15,
          }}
        >
          {moisture}%
        </span>
      </div>
      <div style={{ display: "flex", gap: 14, width: "100%", marginBottom: 10 }}>
        <button
          onClick={handleStart}
          style={{
            flex: 1,
            padding: "0.6rem 0",
            background: pumpOn ? "#34d399" : "#10b981",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 15,
            cursor: "pointer",
            boxShadow: pumpOn ? "0 2px 8px #34d39944" : "0 1px 4px #0001",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
        >
          Start Pump
        </button>
        <button
          onClick={handleStop}
          style={{
            flex: 1,
            padding: "0.6rem 0",
            background: !pumpOn ? "#f87171" : "#ef4444",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 15,
            cursor: "pointer",
            boxShadow: !pumpOn ? "0 2px 8px #f8717144" : "0 1px 4px #0001",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
        >
          Stop Pump
        </button>
      </div>
      <div style={{ marginTop: 10, fontWeight: 500, fontSize: 15 }}>
        Pump Status:{" "}
        <span style={{ color: pumpOn ? "#059669" : "#b91c1c", fontWeight: 700 }}>
          {pumpOn ? "Running" : "Stopped"}
        </span>
      </div>
    </div>
  );
};

const Your_Field_Page = () => {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "2rem",
        marginTop: "2rem",
        flexWrap: "wrap",
        background: "linear-gradient(135deg, #f0fdf4 0%, #fef9c3 100%)",
      }}
    >
      {crops.map((crop) => (
        <CropCard key={crop.name} name={crop.name} color={crop.color} emoji={crop.emoji} />
      ))}
    </div>
  );
};

export default Your_Field_Page;