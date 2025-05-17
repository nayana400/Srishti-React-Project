import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../Common/Navbar";
import adminimg from "../../assets/adminimg.webp"

function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check admin credentials
    if (credentials.email === "admin@gmail.com" && credentials.password === "admin123") {
      alert("✅ Admin Login Successful");
      localStorage.setItem("adminLoggedIn", "true");

      // Store the actual admin _id from MongoDB (Not a hardcoded value)
      localStorage.setItem("adminId", "681f8f889115defe7dc24758"); // Real MongoDB admin _id

      setLoggedIn(true);
    } else {
      alert("❌ Invalid admin credentials");
    }
  };

  if (loggedIn) return <Navigate to="/admin-dashboard" replace />;

  return (
    <>
      <Navbar />
      <div className="container-fluid min-vh-100 d-flex align-items-center mt-5">
  <div className="row w-100 shadow-lg bg-white rounded overflow-hidden">

    {/* Left Column – AdminLogin Form */}
    <div className="col-md-6 p-5">
      <h2 className="text-center mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} required />
          </div>

          <div className="mb-3">
          <label className="form-label">Password:</label>
          <input type="password" name="password" className="form-control" onChange={handleChange} required />
          </div>
          
          <div className="d-grid">
          <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>

      {/* Right Column – Image and Text */}
    <div className="col-md-6 bg-light d-flex flex-column justify-content-center align-items-center text-center p-5">
      <img
       src={adminimg} 
        alt="Login Illustration"
        className="img-fluid mb-4"
        style={{ maxHeight: "250px" }}
      />
      <h4 className="mb-2">Welcome Back!</h4>
      <p className="text-muted">Read insightful blogs, stay updated, and connect with great content curated just for you.</p>
    </div>

    </div>
    </div>
    </>
  );
}

export default AdminLogin;
