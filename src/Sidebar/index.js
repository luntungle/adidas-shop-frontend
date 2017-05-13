import React from 'react';
import Adidaslogo from './Logo/Logo.js';
import Search from './Search/index.js';
import Menu from './Menu';
import './sidebar.css';

export default () => {
  return (
    <div className="Sidebar">
      <Adidaslogo />
      <Search />
      <Menu />
    </div>
  );
};
