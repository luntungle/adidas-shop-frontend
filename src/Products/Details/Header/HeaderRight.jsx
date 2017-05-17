import React from 'react';
import styled from 'styled-components';
import Label from '../../../components/Label';
import ColorSelector from './ColorSelector';

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 250px;
  height: 160px;
  text-align: right;
  padding: 0;
  margin: 0;
`;

const Wrapper2 = styled.div`
  display: flex;
  width: 240px;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

const Price = styled.h3`
  {''/* position: absolute; */}
  top: 30px;
  text-align: right;
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
    <Wrapper2>
      <ColorSelector />
      <Label>sale</Label>
    </Wrapper2>
    <Price>170$</Price>
  </Wrapper>
);
