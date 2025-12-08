
import { createUser } from "../Services/userService";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(formData);
      alert("Message sent successfully!");
    } catch (error) {
      alert("Error sending message!");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0d1b2a, #1b263b, #1e3c53)",
        paddingTop: "80px",
        color: "white",
      }}
    >
      <div className="container" style={{ maxWidth: "650px" }}>
        <h1 className="text-center mb-3" style={{ fontWeight: "600" }}>
          Let's Build Together
        </h1>

        <p className="text-center mb-4" style={{ color: "#cdd4e0" }}>
          Tell us about your idea — we’ll help make it real.
        </p>

        <div
          className="p-4"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "16px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-light">Your Name *</label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter your name"
                onChange={handleChange}
                style={{
                  background: "transparent",
                  border: "1px solid #2c354a",
                  color: "white",
                }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-light">Email *</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={handleChange}
                style={{
                  background: "transparent",
                  border: "1px solid #2c354a",
                  color: "white",
                }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-light">Message *</label>
              <textarea
                name="message"
                rows="4"
                className="form-control"
                placeholder="Write your message"
                onChange={handleChange}
                style={{
                  background: "transparent",
                  border: "1px solid #2c354a",
                  color: "white",
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn w-100 mt-2"
              style={{
                padding: "12px",
                background: "linear-gradient(90deg, #7b2ff7, #00c6ff)",
                border: "none",
                fontSize: "1.1rem",
                fontWeight: "600",
                borderRadius: "10px",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
