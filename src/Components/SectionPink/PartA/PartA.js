import React from "react";
import icon1 from "../../../Assets/icon1.png";
import "./PartA.css";

function PartA() {
  return (
    <div className="parta-container">
      <center className="parta-contain">
        <h1 className="parta-contain-title">Weekend From Home</h1>
        <p className="parta-contain-p">
          <i>Stay active with a little workout</i>
        </p>

        <div>
          <img src={icon1} alt="icon1" className="parta-icon1" />
          <button className="parta-button">Let's Go</button>
        </div>
      </center>
    </div>
  );
}

export default PartA;
