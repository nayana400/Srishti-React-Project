import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Common/Navbar";
import blogillustration from "../../assets/blogIllustration.webp"

const ForgotPassword = () => {
  const [data, setData] = useState({ Email: "", Password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.Email.trim() || !data.Password.trim()) {
      setError("Both Email and New Password are required!");
      return;
    }

    axios
      .post("http://localhost:3002/Blog/ForgotPassword", {
        Email: data.Email,
        Password: data.Password,
      })
      .then((response) => {
        if (response.data.message === "Spotted User") {
          setError("");
          alert("Password reset successful!");
          navigate("/login");
        } else {
          setError("Email not found or update failed!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("An error occurred. Please try again later.");
      });
  };

  return (
    <>
      <Navbar />

      <div className="container-fluid  d-flex min-vh-100 align-items-center mt-5">
        <div className="row w-100 shadow-lg bg-white rounded overflow-hidden">
          {/* Left Column – Form */}
          <div className="col-md-6 p-5">
            <h3 className="text-center mb-4">Forgot Password</h3>

            {error && (
              <div className="alert alert-danger text-center">{error}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Enter your Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="Email"
                  value={data.Email}
                  onChange={handleChange}
                  placeholder="example@example.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Enter New Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="Password"
                  value={data.Password}
                  onChange={handleChange}
                  placeholder="New Password"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>

          {/* Right Column – Image and Text */}
          <div className="col-md-6 bg-light d-flex flex-column justify-content-center align-items-center text-center p-5">
            <img
              src={blogillustration}
              alt="Login Illustration"
              className="img-fluid mb-4"
              style={{ maxHeight: "250px" }}
            />
            <h4 className="mb-2">Welcome Back!</h4>
            <p className="text-muted">
              Read insightful blogs, stay updated, and connect with great
              content curated just for you.
            </p>
          </div>
       
       </div>
      </div>
    </>
  );
};

export default ForgotPassword;
