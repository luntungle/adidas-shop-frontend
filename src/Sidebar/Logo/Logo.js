import React from "react";
import adidaslogo from "./adidas-logo.png";
import "./adidaslogo.css";

export default () => {
  return (
    // а нужен вообще этот враппер?
    (
      <div className="adidaslogo-wrapper">
        <img
          src={adidaslogo}
          className="adidas-logo"
          alt="text for adidas logo"
        />
      </div>
    )
  );
};
