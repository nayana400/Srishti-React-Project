import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./Components/Common/Home";
import Signup from "./Components/User/Signup";
import Login from './Components/User/Login';
import ForgotPassword from './Components/User/ForgotPassword';
import ResetPassword from "./Components/User/ResetPassword";
import ResetSuccess from "./Components/User/ResetSuccess";
import UserDashboard from './Components/User/UserDashboard';
import UserProfile from './Components/User/UserProfile';
import EditProfile from './Components/User/EditProfile';
import UserViewAllBlogs from "./Components/User/UserViewAllBlogs";
import UserViewOneBlog from './Components/User/UserViewOneBlog';
import UserLogout from './Components/User/UserLogout';


import AdminLogin from "./Components/Admin/AdminLogin"
import AdminDashboard from './Components/Admin/AdminDashboard';
import ViewAllUsers from "./Components/Admin/ViewAllUsers";
import ViewOneUser from './Components/Admin/ViewOneUser';
import AdminLogout from './Components/Admin/AdminLogout';
import AddBlog from './Components/Blog/AddBlog';
import EditBlog from './Components/Blog/EditBlog';
import ViewAllBlogs from './Components/Blog/ViewAllBlogs';
import ViewOneBlog from './Components/Blog/ViewOneBlog';
import PendingUsers from './Components/Admin/PendingUsers';
import Statistics from "./Components/Admin/Statistics"


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/success" element={<ResetSuccess/>} />
        <Route path="/user-logout" element={<UserLogout/>} />
        <Route path="/userview-one-blog" element={<UserViewOneBlog />} />

        <Route path="/login" element={<Login />} />
        <Route path="/user-dashboard" element={<UserDashboard />} >
         <Route index element={<UserViewAllBlogs />} /> 
          <Route path="userview-all-blogs" element={<UserViewAllBlogs />} />
        <Route path="userprofile" element={<UserProfile />} />
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="reset-password" element={<ResetPassword />} />
       </Route>

        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>}>
        <Route index element={<Statistics />} /> 
        <Route path="view-all-users" element={<ViewAllUsers />} />     
        <Route path="add-blog" element={<AddBlog/>} />
        <Route path="view-all-blogs" element={<ViewAllBlogs/>} />
        <Route path="pendingusers" element={<PendingUsers/>} />
        </Route>
       
        <Route path="/view-one-user/:id" element={<ViewOneUser />} />
        <Route path="/view-one-blog" element={<ViewOneBlog/>} />
        <Route path="/edit-blog" element={<EditBlog/>} />
        <Route path="/admin-logout" element={<AdminLogout/>} />
        

        



      </Routes>
     
    </Router>
    
  );
}

export default App;
