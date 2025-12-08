import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-section d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="home-title">
        Engineering Intelligence for <br /> Tomorrow
      </h1>

      <p className="home-subtitle">
        Empowering startups & enterprises through AI, Blockchain, and scalable cloud systems.
      </p>

      <div className="mt-3">
        <button className="btn btn-primary me-2 px-4">Get in Touch</button>
        <button className="btn btn-outline-primary px-4">Explore Services</button>
      </div>
    </div>
  );
}

export default Home;
