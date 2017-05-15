import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Filter from './Filter';
import Card from './Card';

const Wrapper = styled.div`
padding: 0 15px;
display: flex;
flex-direction: column;
align-items: start;
margin-left: 10px;
`;

export default () => (
  <Wrapper>
    <Row>
      <Col xs={12}>
        <Row start="xs">
          <Col xs={6}><Filter /></Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={6} lg={4}><Card /></Col>
      <Col xs={12} sm={6} lg={4}><Card /></Col>
      <Col xs={12} sm={6} lg={4}><Card /></Col>
    </Row>
    <Row>
      <Col xs={12} sm={6} lg={4}><Card /></Col>
      <Col xs={12} sm={6} lg={4}><Card /></Col>
      <Col xs={12} sm={6} lg={4}><Card /></Col>
    </Row>
  </Wrapper>
);
