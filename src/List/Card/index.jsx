import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Label from '../../Label';

const PrCard = styled.div`
padding: 9px;
position: relative;
color: #ffffff;
background-color: #f4f4f4;
margin: 8px 0px;
margin-bottom: 8px;
text-transform: uppercase;
`;

const PrImage = styled.img`
  max-width:100%;
  height:auto;
`;

const Price = styled.span`
display: block;
text-align: center;
padding: 25px;
font-family: "avenir-next";
font-weight: bold;
font-size: 24px;
text-decoration: none;
background-image: linear-gradient(107deg, #0c09bf, #966dd8);
color: #ffffff;
`;

export default () => (
  <PrCard>
    <Label />
    <Link to="/Details" title="Details page">
      <PrImage src={require('./shoes.jpg')} alt="" />
      <Price>$170</Price>
    </Link>
  </PrCard>
);