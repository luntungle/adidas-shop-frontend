import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`;

const Thumb = styled.img`
  {''/* width: 15%;
  height: auto;
  margin-right: 5px;
  margin-left: 34px; */}
  width: 17%;
  height: auto;
  outline-color: #fff;
  cursor: pointer;
  margin: 0 14px;
  &:hover { outline: 4px solid #d8d8d8 }
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
  border: none;
  background: transparent;
  &:hover { color: #6e6e6e}
`;

export default () => (
  <Gallery>
    <Thumb src={require('../../../components/img/shoes3_1.jpg')} alt="" />
    <Thumb src={require('../../../components/img/shoes3_2.jpg')} alt="" />
    <Thumb src={require('../../../components/img/shoes3_3.jpg')} alt="" />
    <Thumb src={require('../../../components/img/shoes3.jpg')} alt="" />
    <ButtonMore>see more photos</ButtonMore>
  </Gallery>
);
