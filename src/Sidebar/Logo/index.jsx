import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './adidaslogo.png';

const Img = styled.img`
  display: flex;
  justify-content: center;
  margin-top: 31px;
`;

export default () => (
  <Link to="/">
    <Img src={logo} alt="logo" />
  </Link>
);
