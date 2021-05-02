import React from "react";
import icon2 from "../../../Assets/icon2.png";
import icon2_2 from "../../../Assets/icon2_2.png";
import "./PartB.css";

function PartB() {
  return (
    <div className="partb-container">
      <div className="partb-icon2">
        <img src={icon2} alt="icon2" />
      </div>
      <div className="partb-text">
        <p>
          <span style={{ color: "blue" }}>Deffinition;</span> a practice or
          exercise to test or improve one's fitness for athletic competition,
          ability, or performance to exhaust (something, such as a mine) by
          working to devise, arrange, or achieve by resolving difficulties.
          Merriam-Webster.com Dictionary.
        </p>
        <p className="partb-text-2">-weekend team</p>
      </div>
      <div className="partb-icon22">
        <img src={icon2_2} alt="icon2" />
      </div>
      {/* <div
        style={{
          fontSize: "2em",
          fontWeight: "900",
          margin: "0 0 6% 0",
          color: "white",
          textAlign: "center",
        }}
      >
        Testimonial
      </div> */}
    </div>
  );
}

export default PartB;
