import React from "react";
import "./slider.css";
function Slider() {
  return (
    <>
      <header>
        <div className="header"></div>

        <div className="slider">
          <div className="slider--controls">
            <div className="slider--control">P</div>
            <div className="slider--control">N</div>
          </div>

          <div className="slider--width">
            <div className="slider--item">Murilo Santiago</div>
            <div className="slider--item">Murilo Santiago</div>
            <div className="slider--item">Murilo Santiago</div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Slider;
