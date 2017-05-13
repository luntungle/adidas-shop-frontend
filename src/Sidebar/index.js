import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import './sidebar.css';

export default () => {
  return (
    <div className="Sidebar">
      <Logo />
      <Search />
      <Menu />
    </div>
  );
};
