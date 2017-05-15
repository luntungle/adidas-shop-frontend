import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DropdownIcon from './DropdownIcon';
import './menu.css';

const StyledMenu = styled.nav`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
`;

const MenuLine = styled.div`
  margin: 10px 0;
`;

const TopLink = styled(Link)`
font-size: 24px;
text-transform: uppercase;
color: #3c3c3c;
cursor: pointer;
padding-bottom: 25px;
text-align: center;
font-family: "avenir-next";
font-weight: 700;
${p => p.IsSelected && 'color: #ffffff;'}
&:hover {color: #ffffff;}
`;

const SubLink = styled(Link)`
font-family: "andale-mono";
font-size: 24px;
text-transform: uppercase;
color: #3c3c3c;
padding-bottom: 25px;
text-align: center;
${p => p.IsSelected && 'color: #ffffff;'}
&:hover {color: #ffffff;}
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 16px;
`;

export default () => (
  <StyledMenu>
    <MenuLine>
      <TopLink to="/" IsSelected>
        Sports<DropdownIcon />
      </TopLink>
    </MenuLine>
    <Wrapper>
      <SubLink to="/" IsSelected>Shoes</SubLink>
      <SubLink to="/">Clothing</SubLink>
      <SubLink to="/">Accessories</SubLink>
    </Wrapper>

    <MenuLine>
      <TopLink to="/">Brands</TopLink>
    </MenuLine>
    <MenuLine>
      <TopLink to="/">Micoach</TopLink>
    </MenuLine>
  </StyledMenu>
);
