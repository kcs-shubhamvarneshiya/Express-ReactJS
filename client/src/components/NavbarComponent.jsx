import React from "react";
import "../stylesheets/index.css";

export default function NavbarComponent(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">
          SemiWaves
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">
              Home {props.email}
            </a>
            <a className="nav-item nav-link" href="/login">
              Login
            </a>
            <a className="nav-item nav-link" href="/">
              Pricing
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}