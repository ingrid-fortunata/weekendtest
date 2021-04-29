import React from "react";
import "./TestimonialCard.css";
import "react-slideshow-image/dist/styles.css";

function TestimonialCard({ testimony, by }) {
  return (
    <div className="each-slide">
      <h2>{by}</h2>
      <h6>{testimony}</h6>
    </div>
  );
}

export default TestimonialCard;
