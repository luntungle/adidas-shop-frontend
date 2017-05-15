import { Row, Col } from 'react-flexbox-grid';
import React from 'react';
import Filter from './Filter';
import Card from './Card';

import './list.css';

export default () => (
  <div className="List">
    <Filter />
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

  </div>
);
