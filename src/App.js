import React from "react";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import SectionPage from "./pages/SectionPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ backgroundColor: "#F5E6CC", minHeight: "100vh" }}>
      <Navbar />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/section/:section" element={<SectionPage />} />
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;