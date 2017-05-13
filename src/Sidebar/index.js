import React from 'react';
import Adidaslogo from './Logo';
import Search from './Search';
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
