import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Label from '../../components/Label';

const Card = styled.div`
  padding: 9px;
  position: relative;
  color: #ffffff;
  background-color: #f4f4f4;
  margin: 8px 0px;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const Image = styled.img`
  max-width:100%;
  height:auto;
  object-fit: fill;
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
const CardLink = styled(Link)`
  text-decoration: none;
`;

export default () => (
  <Card>
    <Label />
    <CardLink to="/Details" title="Details page">
      <Image src={require('../../components/img/shoes.jpg')} alt="" />
      <Price>$170</Price>
    </CardLink>
  </Card>
);
