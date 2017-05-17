import React from 'react';
import styled from 'styled-components';
import Label from '../../../components/Label';
import ColorSelector from './ColorSelector';

const Wrapper = styled.div`
top: 30px;
right: 32px;
position: absolute;
text-align: right;
z-index: 1;
`;

// const Wrapper2 = styled.div`
//   display: flex;
//   position: absolute;
//   width: 240px;
//   height: 60px;
//   text-align: right;
//   justify-content: space-between;
// `;

const Price = styled.h3`
  {''/* position: absolute; */}
  margin-top: 20px;
position: relative;
z-index: 1;
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
