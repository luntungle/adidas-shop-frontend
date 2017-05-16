import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Filter from './Filter';
import Card from './Card';

const Main = styled.main`
  flex: 1;
`;

const Wrapper = styled.div`
  margin: 16px 22px;
`;

export default () => (
  <Main>
    <Filter />
    <Wrapper>
      <Row>
        <Col xs={12} sm={6} lg={4}><Card /></Col>
        <Col xs={12} sm={6} lg={4}><Card /></Col>
        <Col xs={12} sm={6} lg={4}><Card /></Col>
        <Col xs={12} sm={6} lg={4}><Card /></Col>
        <Col xs={12} sm={6} lg={4}><Card /></Col>
        <Col xs={12} sm={6} lg={4}><Card /></Col>
      </Row>
    </Wrapper>
  </Main>
);
