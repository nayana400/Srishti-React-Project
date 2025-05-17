import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardStats = () => {
  const [userCount, setUserCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch users
    const fetchUsers = axios.post('http://localhost:3002/Blog/ViewAllUsers');
    // Fetch blogs
    const fetchBlogs = axios.post('http://localhost:3002/Blog/ViewBlog');

    Promise.all([fetchUsers, fetchBlogs])
      .then(([userRes, blogRes]) => {
        const users = userRes.data?.data || [];
        const approvedUsers = users.filter(user => user.approved && user.isActive);
        setUserCount(approvedUsers.length);

        const blogs = blogRes.data?.data || [];
        setBlogCount(blogs.length);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container mt-5 ">
    <br/>
      {loading ? (
        <p className="text-center">Loading statistics...</p>
      ) : (
        <div className="row text-center">
          {/* User Count Column */}
          <div className="col-md-6 mb-4">
            <div className="card shadow p-4">
              <h4>👤 Total Approved Users</h4>
              <h2>{userCount}</h2>
            </div>
          </div>

          {/* Blog Count Column */}
          <div className="col-md-6 mb-4">
            <div className="card shadow p-4">
              <h4>📰 Total Blogs</h4>
              <h2>{blogCount}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardStats;
