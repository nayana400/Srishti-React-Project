import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";

const UserViewOneBlog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;

  if (!blog) {
    return (
      <div className="container mt-5 text-center">
        <p className="text-danger">No blog data found.</p>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          🔙 Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <UserNavbar />
      <div className="container" style={{ marginTop: "100px" }}>
        <h2 className="mb-3">{blog.Title}</h2>
        <h5 className="text-muted mb-4">{blog.SubTitle}</h5>

        {blog.image && (
          <img
            src={`http://localhost:3002/upload/${blog.image.filename}`}
            alt={blog.Title}
            className="img-fluid rounded mb-4"
            style={{ height: "500px", width: "900px", objectFit: "cover" }}
          />
        )}

        <p style={{ whiteSpace: "pre-wrap" }}>{blog.Discription}</p>

        <div className="mt-3">
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate(-1)}
          >
            🔙 Back to Blogs
          </button>
        </div>
      </div>
    </>
  );
};

export default UserViewOneBlog;
