import React from "react";
import "../stylesheets/index.css";

export default function NavbarComponent(props) {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="logo">
            <a href="/">SemiWaves</a>
          </div>
          <ul className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">AboutUs</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
