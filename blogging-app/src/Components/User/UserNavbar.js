import React from "react";
import { Link } from "react-router-dom";

import blogicon from "../../assets/blog1.png";

const UserNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="/">
          <img src={blogicon} alt="Blog Icon" width="50" height="50" />
          BlogConnect
        </a>

        <div className="d-flex gap-3">
          <Link to="/user-dashboard" className="btn btn-outline-light">
            MyProfile
          </Link>
          <Link to="/user-logout" className="btn btn-outline-light">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
