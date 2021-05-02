import React from "react";
import "./HelptipsCard.css";
import boxarrow from "../../../Assets/boxarrow.svg";

function HelptipsCard({ title, image }) {
  return (
    <div
      className="box"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <img src={image} alt={title} /> */}
      <div className="box-info">
        <div className="box-over">
          <h2>{title}</h2>
          <img src={boxarrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default HelptipsCard;
