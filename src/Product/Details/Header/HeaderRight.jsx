import React from 'react';
import styled from 'styled-components';
import Label from '../../../components/Label';
import ColorSelector from '../ColorSelector';

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`;

const Price = styled.h3`
  {''/* position: absolute; */}
  top: 50px;
  font-family: "avenir-next", Arial;
  font-size: 80px;
  font-weight: 700;
  color: #e2e2e2;
  margin: 5px 0px;
  padding: 0;
  max-width:100%;
`;

export default () => (
  <Wrapper>
    <ColorSelector />
    <Label />
    <Price>170$</Price>
  </Wrapper>
);
