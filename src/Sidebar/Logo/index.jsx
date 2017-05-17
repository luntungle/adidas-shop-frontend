import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import logo from './adidaslogo.png';

const Img = styled.a`
  display: flex;
  justify-content: center;
  margin-top: 31px;
`;

export default () => (
  <Img href="http://www.adidas.com">
    <img src={logo} alt="logo" />
  </Img>
);
