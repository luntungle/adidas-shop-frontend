import React from 'react';
import Title from './Title';
import SaveButton from './SaveButton';
import './details.css';

export default () => (
  <div>
    <div className="wrapper">
      <Title />
      <SaveButton />
      <div className="product-details">
        <button className="product-color color-darkgrey" />
        <button className="product-color color-blue" />
        <button className="product-color color-black" />
        <button className="product-color color-lightgrey" />
        <span className="product-badge">sale</span>
        <h2 className="product-price-big">170$</h2>
      </div>

      <div className="product-img-big">
        <img alt="" src="images/shoes3_big.jpg" />
      </div>

      <div className="product-img-gallery">
        <img alt="" className="product-img-thumb" src="images/shoes3_1.jpg" />
        <img alt="" className="product-img-thumb" src="images/shoes3_2.jpg" />
        <img alt="" className="product-img-thumb" src="images/shoes3_3.jpg" />
        <img
          alt=""
          className="product-img-thumb"
          // className="thumb-outline"
          src="images/shoes3.jpg"
        />
        <div className="more-photos">
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        <p className="more-photos-text">see <br /> more <br /> photos</p>
      </div>

      <p className="company-text">
        <span className="company-name">Adidas</span> is a German
        multinational corporation, headquartered in Herzogenaurach, Germany, that
        designs and manufactures shoes, clothing and accessories.
      </p>

      <button className="product-buybutton">Buy now</button>
    </div>

  </div>
);
