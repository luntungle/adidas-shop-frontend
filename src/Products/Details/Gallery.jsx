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

const ThreeBars = styled.div`
  margin: 0 22px;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
`;

const Bar = styled.hr`
  margin: 3px;
  width: 159px;
  height: 3px;
  border-radius: 1.5px;
  border: none;
  background-color: #e7e7e7;
`;

const ButtonMore = styled.button`
  flex: 0 1 40px;
  width: 64px;
  text-align: left;
  font-family: 'avenir-next';
  font-size: 14px;
  font-weight: bold;
  color: #c0c0c0;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
`;

export default () => (
  <Gallery>
    <Thumb src={thumb1} alt="" />
    <Thumb src={thumb2} alt="" />
    <Thumb src={thumb3} alt="" />
    <Thumb src={thumb4} alt="" />
    <ThreeBars>
      <Bar /> <Bar /> <Bar />
    </ThreeBars>
    <ButtonMore>see more photos</ButtonMore>
  </Gallery>
);
