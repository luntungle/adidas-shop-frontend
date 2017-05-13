import React, { Component } from 'react';
import './card.css';
import Label from '../../Label';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    return (
      <div className="product-card">
        <Link to="/details">
          <Label />
          <img
            alt=""
            className="product-card-img"
            src={require('./shoes.jpg')}
          />
          <div className="product-price sale">$170</div>
        </Link>
      </div>
    );
  }
}
