import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import dropdownIcon from './dropdownicon.svg';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #0e0e0e;
  padding-bottom: 260px;
`;

const MenuLine = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const TopLink = styled(NavLink)`
  font-size: 24px;
  text-transform: uppercase;
  cursor: pointer;
  padding-top: 15px;
  padding-bottom: 20px;
  color: #ffffff;
  text-align: center;
  font-family: "avenir-next";
  font-weight: 700;
  text-decoration: none;
`;

const SubLink = styled(NavLink)`
  font-family: "andale-mono";
  font-size: 24px;
  text-transform: uppercase;
  color: #2f2f2f
  padding-bottom: 25px;
  text-align: center;
  text-decoration: none;
  &:hover { color: #ffffff}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
`;

const Icon = styled.img`
  margin-bottom: 4px;
`;

export default () => (
  <StyledMenu>
    <MenuLine>
      <TopLink to="/">
        Football <Icon src={dropdownIcon} alt="drop-down icon" />
      </TopLink>
    </MenuLine>
    <Wrapper>
      <SubLink to="/">Shoes</SubLink>
      <SubLink to="/">Clothing</SubLink>
      <SubLink to="/">Accessories</SubLink>
    </Wrapper>
    <MenuLine>
      <TopLink to="/">Running <Icon src={dropdownIcon} alt="drop-down icon" /></TopLink>
    </MenuLine>
    <Wrapper>
      <SubLink to="/">Shoes</SubLink>
      <SubLink to="/">Clothing</SubLink>
      <SubLink to="/">Accessories</SubLink>
    </Wrapper>
    <MenuLine>
      <TopLink to="/">Basketball <Icon src={dropdownIcon} alt="drop-down icon" /></TopLink>
    </MenuLine>
    <Wrapper>
      <SubLink to="/">Shoes</SubLink>
      <SubLink to="/">Clothing</SubLink>
      <SubLink to="/">Accessories</SubLink>
    </Wrapper>
  </StyledMenu>
);
