import React, { useEffect, useState } from "react";
import "./SectionBlack.css";
import icon3_2 from "../../Assets/icon3_2.png";
import icon3 from "../../Assets/icon3.png";
import axios from "axios";
import HelptipsCard from "./HelptipsCard/HelptipsCard";

function SectionBlack() {
  const HELPTIPS_API =
    "https://wknd-take-home-challenge-api.herokuapp.com/help-tips";

  const [helptips, setHelptips] = useState([]);

  const getHelptips = (API) => {
    const fetchData = async () => {
      const result = await axios(API);
      setHelptips(result.data);
    };
    fetchData();
  };

  useEffect(() => {
    getHelptips(HELPTIPS_API);
  }, [HELPTIPS_API]);

  return (
    <div className="sectionblack-container">
      <div className="sectionblack-title">POV</div>
      <div className="sectionblack-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur.{" "}
      </div>
      <div className="sectionblack-title">Resource</div>
      <div className="sectionblack-text">
        These cases are perfectly simple and easy to distinguish. In a free
        hour, when our power of choice is untrammelled and when nothing prevents
        our being able to do what we like best
      </div>
      <div className="sectionblack-title">Help & Tips</div>
      <img src={icon3} alt="icon3" className="sectionblack-icon1" />
      <div className="sectionblack-helptips-container">
        {helptips.length > 0 &&
          helptips.map((helptip) => (
            <HelptipsCard key={helptip.id} {...helptip} />
          ))}
      </div>
      <div className="sectionblack-title">You're all set.</div>
      <div className="sectionblack-text">
        The wise man therefore always holds in these matters to this principle
        of selection.
      </div>
      <img src={icon3_2} alt="icon3" className="sectionblack-icon2" />
    </div>
  );
}

export default SectionBlack;
