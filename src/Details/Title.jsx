import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 64px;
  margin-top: 0;
  line-height: 1.0;
  margin-bottom: 14px;
`;

const Wrapper = styled.section`
  text-transform: uppercase;
  color: #3a3a3a;
  width: 226px;
  height: 128px;
  font-family: "avenir-next", Arial;
  font-weight: bold;
  position: relative;
  top: 26px;
  left: 30px;
  z-index: 1;
`;

export default () => (
  <Wrapper>
    <Title>Ultra<br />Boost</Title>
  </Wrapper>
);
