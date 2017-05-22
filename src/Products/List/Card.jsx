import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Label from '../../components/Label';
import pic from '../../components/img/shoes.jpg';

const Image = styled.img`
  max-width:100%;
  height:auto;
  object-fit: contain;
`;

const Price = styled.span`
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 25px;
  font-family: "avenir-next";
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
  border-top: 9px solid #f4f4f4;
  background-image: linear-gradient(107deg, #0c09bf, #966dd8);
  color: #ffffff;
`;

const CardLink = styled(Link)`
  padding: 0;
  position: relative;
  color: #ffffff;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 8px 0px;
  margin-bottom: 8px;
  text-transform: uppercase;
  border: 9px solid #f4f4f4;
  text-decoration: none;
`;

export default () => (
  <CardLink to="/Details" title="Details page">
    <Label isList>sale</Label>
    <Image src={pic} alt="" />
    <Price>$170</Price>
  </CardLink>
);
