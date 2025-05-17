import React from "react";
import { Link } from "react-router-dom";

import blogicon from "../../assets/blog1.png";

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="/">
          <img src={blogicon} alt="Blog Icon" width="50" height="50" />
          BlogConnect
        </a>

        <div className="d-flex gap-3">
          <Link to="/admin-dashboard" className="btn btn-outline-light">
            AdminProfile
          </Link>
          <Link to="/admin-logout" className="btn btn-outline-light">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
