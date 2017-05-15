import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000;
  color: #FFF;
  max-width: 414px;
  width: 100%;
  height: 1024px;
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