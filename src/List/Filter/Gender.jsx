import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  {/* сверить с css  */}
  padding: 0 15px;
  display: flex;
  align-items: center;
`;

const Btn = styled.button`
  background: none;
  border: none;
  font-family: "avenir-next";
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  color: #d6d6d6;
  padding: 0px 5px;
  cursor: pointer;
  &:hover {color: #4d42f8; }
`;

const BtnActive = styled(Btn)`
  color: #4d42f8;
`;

export default () => (
  <Wrapper>
    <BtnActive>Men</BtnActive>
    <Btn>Women</Btn>
  </Wrapper>
);
