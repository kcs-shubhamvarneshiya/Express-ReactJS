import React, { useState, useEffect } from "react";
import "../../stylesheets/App.css";
import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined";
import ProfileComponent from "../admin/ProfileComponent";


export default function NavbarComponent(props) {
  const [data, setData] = useState([]);
  const [isProfileOptionVisible, setIsProfileOptionVisible] = useState(false);

  useEffect(() => {
    
  }, []);

  const toggleProfileOptions = ()=>{
    setIsProfileOptionVisible(!isProfileOptionVisible);
}

  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          Semi
          <span>
            <WavesOutlinedIcon />
          </span>
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
        <a href="/about">About Us</a>
        <a href="/product">Product</a>
        <a href="/login">Login</a>
        {/* {!localStorage.getItem("name") ? (
          <>
          <a href="/login">Login</a>
          <a href="/login">Registration</a>
        </>
          
        ) : (
          <small onClick={toggleProfileOptions}>{data}</small>
        )} */}
      </div>

      <div className="profile-component">
        {isProfileOptionVisible && <ProfileComponent />}
      </div>
    </div>
  );
}
