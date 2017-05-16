import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-family: "avenir-next";
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  color: ${props => (props.isActive ? '#4d42f8' : '#d6d6d6')};
  padding: 0px 5px;
  cursor: pointer;
  &:hover {color: #4d42f8; }
`;

export default () => (
  <Wrapper>
    <Button isActive>Men</Button>
    <Button>Women</Button>
  </Wrapper>
);
