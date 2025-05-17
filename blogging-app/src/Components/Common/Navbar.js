import React from "react";
import { Link } from "react-router-dom";

import blogicon from "../../assets/blog1.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="/">
          <img src={blogicon} alt="Blog Icon" width="50" height="50" />
          BlogConnect
        </a>

        <div className="d-flex gap-3">
          <Link to="/login" className="btn btn-outline-light">
            Login
          </Link>
          <Link to="/signup" className="btn btn-light px-4">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
