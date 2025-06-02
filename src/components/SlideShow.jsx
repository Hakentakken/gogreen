import React, { useState, useEffect } from "react";
import image1 from "../Photo/image1.jpg";
import image2 from "../Photo/image2.jpg";
import image3 from "../Photo/image3.jpg"; 

const images = [image1, image2, image3];

const SlideShow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [current]);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      style={{
        width: "calc(100vw - 100px)",
        height: "320px",
        margin: "10px auto",
        overflow: "hidden",
        borderRadius: "0",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        position: "relative",
        background: "#eee",
      }}
    >
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`slide-${idx}`}
          style={{
            width: "100%",
            height: "320px",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: idx === current ? 1 : 0,
            transition: "opacity 0.8s ease-in-out",
            zIndex: idx === current ? 2 : 1,
          }}
        />
      ))}

      {/* Left Arrow */}
      <button
        onClick={goToPrev}
        style={{
          position: "absolute",
          top: "50%",
          left: 16,
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.6)", // translucent white
          border: "none",
          borderRadius: "50%",
          width: 48,
          height: 48,
          fontSize: 28,
          color: "#000", // arrow color black
          boxShadow: "0 4px 16px rgba(67,233,123,0.15)",
          cursor: "pointer",
          zIndex: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.3s, box-shadow 0.3s",
          backdropFilter: "blur(2px)",
        }}
        aria-label="Previous Slide"
        onMouseOver={e => {
          e.currentTarget.style.background = "rgba(255,255,255,0.85)";
          e.currentTarget.style.boxShadow = "0 6px 24px rgba(67,233,123,0.25)";
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = "rgba(255,255,255,0.6)";
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(67,233,123,0.15)";
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        style={{
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.6)", // translucent white
          border: "none",
          borderRadius: "50%",
          width: 48,
          height: 48,
          fontSize: 28,
          color: "#000", // arrow color black
          boxShadow: "0 4px 16px rgba(67,233,123,0.15)",
          cursor: "pointer",
          zIndex: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.3s, box-shadow 0.3s",
          backdropFilter: "blur(2px)",
        }}
        aria-label="Next Slide"
        onMouseOver={e => {
          e.currentTarget.style.background = "rgba(255,255,255,0.85)";
          e.currentTarget.style.boxShadow = "0 6px 24px rgba(67,233,123,0.25)";
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = "rgba(255,255,255,0.6)";
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(67,233,123,0.15)";
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 6l6 6-6 6" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
          zIndex: 3,
        }}
      >
        {images.map((_, idx) => (
          <span
            key={idx}
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: idx === current ? "#388e3c" : "#eee",
              display: "inline-block",
              border: "1px solid #388e3c",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
