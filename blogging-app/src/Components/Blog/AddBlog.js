import React, { useState } from "react";
import axios from "axios";
import "./AddBlog.css";

function AddBlog() {
  const [formData, setFormData] = useState({
    Title: "",
    SubTitle: "",
    Discription: "",
    image: null,
  });

  const adminId = localStorage.getItem("adminId"); // Get the admin _id from localStorage

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.Title || !formData.SubTitle || !formData.Discription || !formData.image) {
      alert("All fields are required!");
      return;
    }

    const data = new FormData();
    data.append("Title", formData.Title);
    data.append("SubTitle", formData.SubTitle);
    data.append("Discription", formData.Discription);
    data.append("image", formData.image);
    data.append("UserId", adminId); // Send the admin _id as the UserId

    try {
      const res = await axios.post("http://localhost:3002/Blog/addBlog", data);
      alert("Blog added successfully!");
      setFormData({
        Title: "",
        SubTitle: "",
        Discription: "",
        image: null,
      });
    } catch (err) {
      console.error(err);
      alert("Failed to add blog.");
    }
  };

  return (
    <div className="add-blog-container mt-5">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit} className="add-blog-form" encType="multipart/form-data">
        <label>Title</label>
        <input type="text" name="Title" value={formData.Title} onChange={handleChange} />

        <label>Upload Image</label>
        <input type="file" name="image" accept="image/*" onChange={handleFileChange} />

        <label>Sub Title</label>
        <input type="text" name="SubTitle" value={formData.SubTitle} onChange={handleChange} />

        <label>Description</label>
        <textarea name="Discription" value={formData.Discription} onChange={handleChange} rows="5" />

        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
}

export default AddBlog;
