import React from "react";
import "./Home.css";
import blogillustration from "../../assets/blogIllustration.webp"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"

const Home = () => {
  return (
    <>
    <Navbar />
    
    <div className="hero-section">
      <div className="container d-flex align-items-center justify-content-between flex-wrap flex-lg-nowrap">
        
       
        <div className="hero-text">
          <h2>Welcome to the BlogConnect!</h2>
          <p>
             Explore a collection of articles
            carefully curated by our editorial team to inform, inspire, and
            engage you. From helpful tips and how-to guides to community updates
            and announcements — each blog post is created to provide valuable
            insights and enhance your experience. We invite you to read, learn,
            and stay connected. New content is added regularly, so don’t forget
            to check back often!
          </p>

          <Link to="/signup"><button className="btn btn-dark px-4 py-2 mt-3">Get Started</button></Link>
          
        </div> 
        <div className="hero-image">
          <img 
            src={blogillustration}
            alt="Blog illustration" 
            className="img-fluid rounded shadow"
          />
        </div>
      </div> 
    </div>
     <Footer />
    </>
  );
};

export default Home;
