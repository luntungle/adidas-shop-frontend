import React from 'react';
import styled from 'styled-components';

import HeaderLeft from './Header/HeaderLeft';
import HeaderRight from './Header/HeaderRight';
import CompanyText from './CompanyText';
import BuyButton from './BuyButton';

const BigPicture = styled.img`
  margin: 0 auto;
  display: block;
  width: 80%;
`;

export default () => (
  <div>
    {/* вот сейчас на этом ебаном диве висят отступы, из-за которых всё едет.  или нет */}
    <HeaderLeft />
    <HeaderRight />
    <BigPicture src={require('../../components/img/shoes3_big.jpg')} alt="More" />
    {/* <Gallery />
    <MorePhotos /> */}
    <BuyButton />
    <CompanyText />
  </div>
);
