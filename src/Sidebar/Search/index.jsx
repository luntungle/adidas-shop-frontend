import React from 'react';
import SearchIcon from './search-icon.svg';
import './search.css';

export default () => (
  <div className="search-form">
    <img
      src={SearchIcon}
      className="search-icon"
      alt="text for search icon"
    />
    <input type="search" name="search" className="search-input" />
  </div>
  );
