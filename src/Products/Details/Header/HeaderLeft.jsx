import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: absolute;
  top: 26px;
  left:30px;
  width: 200px;
  font-weight: 700;
  padding-left: 420px;
`;

const Title = styled.h1`
  font-size: 64px;
  text-transform: uppercase;
  font-family: "avenir-next", Arial;
  margin: 0;
  line-height: 1.0;
  color: #3a3a3a;
`;

const SaveButton = styled.button`
  width: 75px;
  height: 75px;
  background: #e3e3e3;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: "avenir-next", Arial;
  text-transform: uppercase;
  border-radius: 100%;
  color: #ffffff;
  margin-top: 14px;
  font-size: 18px;
`;

export default () => (
  <Wrapper>
    <Title>Ultra<br />boost</Title>
    <SaveButton>Save</SaveButton>
  </Wrapper>
);
