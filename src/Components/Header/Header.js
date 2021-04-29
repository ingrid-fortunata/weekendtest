import React from "react";
import logo from "../../Assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div>
        <img src={logo} alt="wkn-logo" />
      </div>
      <div>
        <p className="header-morning">Good Morning</p>
        <p className="header-fellas">Fellas</p>
      </div>
    </div>
  );
}

export default Header;
