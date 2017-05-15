import React from 'react';
import styled from 'styled-components';
import Gender from './Gender';
import Size from './Size';

export const FilterBox = styled.nav`
  display: flex;
  align-items: center;
  width: 980px;
  border-bottom: 3px solid #e7e7e7;
  padding-left: 2px;
  padding-top: 11px;
  padding-bottom: 10px;
  padding-right: 0px;
  margin-bottom: 11px;
`;

export const FilterImage = styled.img`
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
