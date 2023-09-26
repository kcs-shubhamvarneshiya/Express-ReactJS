import React, { useEffect } from "react";
import "../../stylesheets/index.css";

export default function SliderComponent() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `js/index.js`;
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="main-slider-container">
       <div className="sub-slider-container">
       <div className="wrapper">
          <div className="slider-heading">
            <p>SemiWaves</p>
          </div>
          <h1 className="effect-wrapper">
            Packed with <span id="typed"></span>
            <span className="cursor">&nbsp;</span>
          </h1>
        </div>
       </div>
        <div className="sub-slider-container">
        <div className="wave-png-container">
          <img src="images/15promax.png" alt="iphone 15" />
        </div>
        </div>
      </div>
    </>
  );
}
