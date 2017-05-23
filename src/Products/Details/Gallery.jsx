import React from 'react';
import styled from 'styled-components';

import thumb1 from '../../components/img/shoes3_1.jpg';
import thumb2 from '../../components/img/shoes3_2.jpg';
import thumb3 from '../../components/img/shoes3_3.jpg';
import thumb4 from '../../components/img/shoes3_4.jpg';

const Gallery = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 0px 30px 0px 7px;
`;

const Thumb = styled.img`
  outline: none;
  cursor: pointer;
  margin: 0 7px;
  &:hover { outline: 4px solid #eaeaec }
`;

export default () => (
  <Gallery>
    <Thumb src={thumb1} alt="" />
    <Thumb src={thumb2} alt="" />
    <Thumb src={thumb3} alt="" />
    <Thumb src={thumb4} alt="" />
    <Thumb src={thumb2} alt="" />
  </Gallery>
);
