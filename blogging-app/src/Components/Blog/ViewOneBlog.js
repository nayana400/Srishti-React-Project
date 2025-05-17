import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AdminNavbar from "../Admin/AdminNavbar";

const ViewOneBlog = () => {
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

  const handleEdit = () => {
    navigate("/edit-blog", { state: { blog } });
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const res = await axios.post("http://localhost:3002/Blog/deleteBlog", {
          id: blog._id,
        });

        if (res.status === 200) {
          alert("Blog deleted successfully!");
          navigate("/admin-dashboard", {
            state: { userId: blog.UserId?._id },
          });
        } else {
          alert(
            "Failed to delete blog. Server responded with status: " + res.status
          );
        }
      } catch (error) {
        console.error("Delete error:", error);
        alert("An error occurred while deleting the blog.");
      }
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="container" style={{ marginTop: "100px" }}>
        <h2 className="mb-3">{blog.Title}</h2>
        <h5 className="text-muted mb-4">{blog.SubTitle}</h5>

        {blog.image && (
          <img
            src={`http://localhost:3002/upload/${blog.image.filename}`}
            alt={blog.Title}
            className="img-fluid rounded mb-4"
            style={{ maxHeight: "500px",width: '85%', objectFit: "cover" }}
          />
        )}

        <p style={{ whiteSpace: "pre-wrap" }}>{blog.Discription}</p>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary" onClick={handleEdit}>
            ✏️ Edit
          </button>
          <button className="btn btn-outline-danger" onClick={handleDelete}>
            🗑️ Delete
          </button>
        </div>

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

export default ViewOneBlog;
