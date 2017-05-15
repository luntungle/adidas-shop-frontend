import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

export default () => (
  <div className="product-card">
    <Link to="/details">
      <img alt="shoes" className="product-card-img" src={require('./shoes.jpg')} />
      <div className="product-price sale">$170</div>
    </Link>
  </div>
);
