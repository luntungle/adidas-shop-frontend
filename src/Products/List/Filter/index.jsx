import React from 'react';
import styled from 'styled-components';

import Gender from './Gender';
import Size from './Size';

const FilterBox = styled.nav`
  display: flex;
  align-items: center;
  padding: 12px 22px;
  width: auto;
  border-bottom: 3px solid #e7e7e7;
`;

const FilterImage = styled.div`
  width: 55px;
  height: 55px;
  margin-left: 0px;
  background: url(${require('./filter.png')}) no-repeat center #ebebeb;
  border: none;
  `;

export default () => (
  <FilterBox>
    <FilterImage />
    <Gender />
    <Size />
  </FilterBox>
);
