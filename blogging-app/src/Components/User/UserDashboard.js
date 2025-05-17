import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserDashboard.css"; // add your styles
import UserNavbar from "./UserNavbar";

const UserDashboard = () => {
  const [userName, setUserName] = useState("");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) return navigate("/login");

    axios.post(`http://localhost:3002/Blog/ViewOneUser/${userId}`)
      .then((res) => {
        const data = res.data.data;
        if (Array.isArray(data) && data.length > 0) {
          setUserName(data[0].Name);
        }
      })
      .catch((err) => {
        console.error("Error fetching name:", err);
      });
  }, [navigate, userId]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <div className="user-dashboard d-flex">

    <UserNavbar />
      <aside className="user-sidebar p-3 bg-light">
        <h5>Welcome, {userName}!</h5>
        <ul className="nav flex-column mt-4">
          <li><Link to="userprofile" className="nav-link">MyProfile</Link></li>
          <li><Link to="edit-profile" className="nav-link">Edit Profile</Link></li>
          <li><Link to="reset-password" className="nav-link">Change Password</Link></li>
          <li><Link to="userview-all-blogs" className="nav-link">View Blogs</Link></li>
        </ul>
      </aside>
      <main className="user-main-content">
              <Outlet />
            </main>
    
    
    
    
    
    
    
    
            </div>
  );
};

export default UserDashboard;
