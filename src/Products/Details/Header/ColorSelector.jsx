import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
width: 111px;
{''/* top: 4px;
margin-right: 20px; */}
`;

const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  margin: 0 3px;
  background-color: ${props => props.color};
`;

export default () => (
  <Wrapper>
    <Button color="#c5c5c5" />
    <Button color="#4d87ca" />
    <Button color="#000000" />
    <Button color="#e0e0e0" />
  </Wrapper>
);
