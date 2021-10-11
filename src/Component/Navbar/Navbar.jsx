import React, { useState } from "react";



import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>D</span>HIRENDRA 
            <span> K</span>UMAR
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link  className="link" to="/home">Home</Link>
            </li>
            <li>
              <Link className="link" to="/about">About</Link>
            </li>
            <li>
              <Link className="link" to="/projects">Project</Link>
            </li>
            <li>
              <Link className="link" to="/contact">Contact</Link>
            </li>
            <li className="box">
              <a href="https://drive.google.com/uc?export=download&id=1T0Au1Tv_C8P5Ad7qo7zTg5ht1u0bds9Y">Download CV</a>
        
            </li>
            <li ><a href="https://drive.google.com/uc?export=download&id=1T0Au1Tv_C8P5Ad7qo7zTg5ht1u0bds9Y">Download CV</a></li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <span onClick={() => setShowMediaIcons(!showMediaIcons)} class="fa fa-bars">
             
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;