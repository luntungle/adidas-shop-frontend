import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import './card.css';
// import Label from "../../Label";

export default class Card extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="product-card">
          <a href="#">
            <span className="product-label">sale</span>
            {/* <img className="product-card-img" src="./images/shoes.jpg" /> */}
            <img
              alt=""
              className="product-card-img"
              src={require('./shoes.jpg')}
            />
            <div className="product-price sale">$170</div>
          </a>
        </div>
      </div>
    );
  }
}
