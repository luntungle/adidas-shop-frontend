import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0e0e0e;
  color: ##0e0e0e;
  flex-basis: 414px;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  min-height: 100vh;
  padding: 0;
  font-family: "avenir-next";
`;

export default () => (
  <Wrapper>
    <Logo />
    <Search />
    <Menu />
  </Wrapper>
);
