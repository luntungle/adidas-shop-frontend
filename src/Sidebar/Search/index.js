import React from "react";
import Searchicon from "./search-icon.svg";
import "./search.css";

export default () => {
  return (
    <div className="search-form">
      <img
        src={Searchicon}
        className="search-icon"
        alt="text for search icon"
      />
      <input type="search" name="search" className="search-input" />
    </div>
  );
};
