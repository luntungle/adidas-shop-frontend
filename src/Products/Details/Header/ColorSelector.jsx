import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: inline-block;
position: relative;
top: 4px;
margin-right: 20px;

`;

const Button = styled.button`
  border: none;
  border-radius: 100%;
  width: 18px;
  height: 18px;
  margin: 0 3px;
  cursor: pointer;
  background-color: ${p => (p.color ? `${p.color};` : '#e0e0e0;')}
  margin-right: 13px;
`;

export default () => (
  <Wrapper>
    <Button />
    <Button color="#c5c5c5" />
    <Button color="#4d87ca" />
    <Button color="#000000" />
  </Wrapper>
);
