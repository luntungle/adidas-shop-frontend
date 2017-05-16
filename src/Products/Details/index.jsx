import React from 'react';
import styled from 'styled-components';

import HeaderLeft from './Header/HeaderLeft';
import HeaderRight from './Header/HeaderRight2';
import Gallery from './Gallery';
import CompanyText from './CompanyText';
import BuyButton from './BuyButton';

const Main = styled.main`
  flex-grow: 2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`

`;

const BigPicture = styled.img`
  margin: 0 auto;
  display: block;
  width: 80%;
`;

export default () => (
  <Main>
    <Container>
      <HeaderLeft />
      <HeaderRight />
      <BigPicture src={require('../../components/img/shoes3_big.jpg')} alt="Bigger" />
      <Gallery />
      <CompanyText />
    </Container>
    <BuyButton />

  </Main>
);
