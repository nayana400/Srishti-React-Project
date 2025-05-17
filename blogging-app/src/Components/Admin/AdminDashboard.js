import React from "react";
import { Link, Outlet, Navigate } from "react-router-dom";
import './AdminDashboard.css'; // Make sure this file exists
import AdminNavbar from "./AdminNavbar"

function AdminDashboard() {
  const isAdmin = localStorage.getItem("adminLoggedIn") === "true";
  if (!isAdmin) return <Navigate to="/adminlogin" replace />;

  return (
    <div className="admin-dashboard">

    <AdminNavbar />
      <aside className="admin-sidebar">
        <h2>Welcome, Admin</h2>
        <ul>
          <li><Link to="view-all-users">View All Users</Link></li>
          <li><Link to="add-blog">Add Blog</Link></li>
          <li><Link to="view-all-blogs">View Blogs</Link></li>
          <li><Link to="pendingusers">ToBeApproved</Link></li>
        </ul>
      </aside>
      <main className="admin-main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminDashboard;
