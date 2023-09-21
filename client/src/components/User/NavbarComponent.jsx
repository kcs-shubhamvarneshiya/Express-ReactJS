import React from "react";
import "../../stylesheets/index.css";

export default function NavbarComponent(props) {


  return (
    <div className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title">
      SemiWaves
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <a href="/">Home</a>
    <a href="/">About Us</a>
    <a href="/">Contact Us</a>
    <a href="/">Product</a>
    <a href="/login">Login</a>
  </div>
</div>
  );
}