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
      <div>
        <img src="/svg/loginWave.svg" alt="" />
        <p>SemiWaves</p>
      </div>
      
      <div class="wrapper">
        <h1 class="effect-wrapper">
          Packed with <span id="typed"></span>
          <span class="cursor">&nbsp;</span>
        </h1>
      </div>
    </>
  );
}
