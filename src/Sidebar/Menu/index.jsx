import React from 'react';
import styled from 'styled-components';

import Menuitem from './menuItem';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #0e0e0e;
  padding-bottom: 260px;
`;

export default () => (
  <StyledMenu>
    <Menuitem title="Football" />
    <Menuitem title="Running" />
    <Menuitem title="Basketball" />
  </StyledMenu>
);
