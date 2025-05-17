import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Common/Navbar";
import blogillustration from "../../assets/blogIllustration.webp"
const Login = () => {
  const [data, setData] = useState({ Email: "", Password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { Email, Password } = data;

    if (!Email.trim() || !Password.trim()) { 
    }

    axios.post("http://localhost:3002/Blog/UserLogin", { Email, Password })
      .then((response) => {
        const resData = response.data;

        if (resData.Message === "User Login Successfully") {
  const user = resData.data;

  if (!user.approved) {
    setError("Your account is not yet approved by the admin. Please wait for approval.");
    return;
  }

  const userId = user._id;
  localStorage.setItem("userId", userId);
  alert("Login Successful!");
  navigate('/user-dashboard', { state: { userId } });
}

      })
      .catch((error) => {
        console.error("Login error:", error);
        setError("An error occurred while connecting to the server.");
      });
  };

  const handleResetClick = () => {
    setData({ Email: "", Password: "" });
    navigate("/resetpassword");
  };

  return (
    <>
    <Navbar />
    <div className="container-fluid min-vh-100 d-flex align-items-center mt-5">
  <div className="row w-100 shadow-lg bg-white rounded overflow-hidden">

    {/* Left Column – Login Form */}
    <div className="col-md-6 p-5">
      <h2 className="text-center mb-4">Login</h2>

      {error && <div className="alert alert-danger text-center">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={data.Email}
            name="Email"
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={data.Password}
            name="Password"
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-3 text-end">
          <Link to="/forgot-password" className="text-decoration-none me-3">
            Forgot Password?
          </Link>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      
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
      <p className="text-muted">Read insightful blogs, stay updated, and connect with great content curated just for you.</p>
    </div>

  </div>
</div>
    </>
  );
};

export default Login;
