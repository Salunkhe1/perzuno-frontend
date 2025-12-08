import React from "react";
import "./Navbar.css";

export default function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand-lg custom-nav">
      <div className="container-fluid">

        {/* Logo + Title */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/logo.png" alt="logo" className="nav-logo" />
          <span className="brand-text ms-2">MARKAI PRIVATE LIMITED</span>
        </a>

        {/* Hamburger Icon */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="custom-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link nav-text" href="#home">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link nav-text" href="#services">Services</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
