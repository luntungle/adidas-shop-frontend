import React from 'react';
import styled from 'styled-components';

import searchicon from './searchicon.svg';

const Wrapper = styled.div`
  display: flex;
  border-bottom: 4px solid #373737;
  margin-top: 31px;
  margin-bottom: 150px;
  max-width: 370px;
`;

const Icon = styled.img`
  width: 30px;
  height: 28px;
  margin-bottom: 9px;
`;

const Input = styled.input`
  background-color: #0e0e0e;
  color: #fff;
  padding-left: 12px;
  font-size: 24px;
  width: 370px;
  border: none;
  outline: none;
`;

export default () => (
  <Wrapper>
    <Icon src={searchicon} alt="looking-glass" />
    <Input />
  </Wrapper>
);
