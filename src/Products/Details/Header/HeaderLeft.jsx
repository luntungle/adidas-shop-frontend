import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: absolute;
  {''/* position: relative; */}
  top: 26px;
  left:30px;
  width: 200px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "avenir-next", Arial;
  padding-left: 420px;
`;

const Title = styled.h1`
  font-size: 64px;
  margin-top: 0;
  line-height: 1.0;
  margin-bottom: 14px;
  color: #3a3a3a;
`;

const SaveButton = styled.button`
  width: 75px;
  height: 75px;
  background: #e3e3e3;
  border: none;
  border-radius: 100%;
  color: #ffffff;
  font-size: 18px;
{''/* padding: 24px 14px 24px 14px; */}
`;

export default () => (
  <Wrapper>
    <Title>Ultra<br />boost</Title>
    <SaveButton>Save</SaveButton>
  </Wrapper>
);
