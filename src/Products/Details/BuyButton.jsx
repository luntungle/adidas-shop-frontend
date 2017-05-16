import React from 'react';
import styled from 'styled-components';

const BuyButton = styled.button`
  position: fixed;
  bottom: 0;
  height: 115px;
  width: calc(100% - 414px);
  font-family: "avenir-next", Arial;
  font-weight: 700;
  font-size: 34px;
  text-transform: uppercase;
  font-size: 32px;
  text-align: center;
  color: #ffffff;
  border: 0;
  cursor: pointer;
  background-image: linear-gradient(to right, #4949aa, #27275d);
`;

export default () => <BuyButton>Buy Now</BuyButton>;
