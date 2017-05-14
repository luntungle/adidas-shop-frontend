import React from 'react';
import DropdownIcon from './dropdown-icon.svg';
import './menu.css';

export default () => (
  <div>
    <a href="/" className="nav-category active">
      Sports
      <img src={DropdownIcon} className="Dropdownicon" alt="text for dropdown icon" />
    </a>
    <nav className="sidebar-menu-lower">
      <a href="/" className="nav-subcategory active">Shoes</a>
      <a href="/" className="nav-subcategory">Clothing</a>
      <a href="/" className="nav-subcategory">Accessories</a>
    </nav>

    <nav>
      <div className="menu-links">
        <a href="/" className="nav-category">Brands</a>
      </div>
      <div className="menu-links">
        <a href="/" className="nav-category">Micoach</a>
      </div>
    </nav>
  </div>
);
