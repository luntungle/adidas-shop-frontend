import React from 'react';
import styled from 'styled-components';

const PinkSale = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  font-family: 'avenir-next-bold', Arial;
  color: #fff;
  position: absolute;
  right: 17px;
  top: 17px;
  display: inline-block;
  width: 76px;
  padding: 6px 0;
  text-align: center;
  background: #ff5c5c;
`;
export default () => <PinkSale>sale</PinkSale>;
