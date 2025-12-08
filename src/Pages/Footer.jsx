import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function FooterComponent() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0d1b2a, #1b263b, #1e3c53)",
        padding: "150px",
        textAlign: "center",
        color: "#cdd4e0",
        // marginTop: "40px",
      }}
    >
      {/* Logo */}
      <div className="mb-2">
        <img
          src="/logo.png"    // Replace with your logo path
          alt="MARKAI"
          style={{ width: "55px", opacity: 0.9 }}
        />
      </div>

      {/* Company name */}
      <h5
        style={{
          fontWeight: "500",
          fontSize: "1rem",
          letterSpacing: "0.5px",
          color: "#9eb3c9",
        }}
      >
       
      </h5>

      {/* Copyright */}
      <p className="mt-2" style={{ fontSize: "0.9rem", color: "#b7c5d8" }}>
        © 2025 MARKAI Private Limited Solutions
      </p>
    </footer>
  );
}
