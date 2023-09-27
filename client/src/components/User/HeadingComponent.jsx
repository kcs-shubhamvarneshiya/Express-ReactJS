import React from "react";
import "../../stylesheets/index.css";

export default function HeadingComponent(props) {
  return (
    <>
      <div className="main-head-container">
        <div className="sub-head-container">
          <p>{props.heading}</p>
          <h6>Packed with Features</h6>
        </div>
      </div>
    </>
  );
}
