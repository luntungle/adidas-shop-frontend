import React from 'react';
import DropdownIcon from './dropdown-icon.svg';
// import MenuActiveItem from "./menu-active-item";
// import MenuLower from "./menu-lower";
// import MenuLinks from "./menu-links";
import './menu.css';

export default () => {
  return (
    <div
    // className="Menu"
    >
      <a href="#" className="nav-category active">
        Sports
        <img
          src={DropdownIcon}
          className="Dropdownicon"
          alt="text for dropdown icon"
        />
      </a>
      <nav className="sidebar-menu-lower">
        <div>
          <a href="#" className="nav-subcategory active">Shoes</a>
        </div>
        <div>
          <a href="#" className="nav-subcategory">Clothing</a>
        </div>
        <div>
          <a href="#" className="nav-subcategory">Accessories</a>
        </div>
      </nav>

      <nav>
        <div className="menu-links">
          <a href="#" className="nav-category">Brands</a>
        </div>
        <div className="menu-links">
          <a href="#" className="nav-category">Micoach</a>
        </div>
      </nav>
    </div>
  );
};
