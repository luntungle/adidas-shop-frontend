import React from 'react';
import Filter from './Filter';
import Card from './Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './list.css';

export default () => {
  return (
    <div className="List">
      <Grid fluid>
        <Filter />

        <Row>
          <Col md={4}><Card /></Col>
          <Col md={4}><Card /></Col>
          <Col md={4}><Card /></Col>
        </Row>

        <Row>
          <Col md={4}><Card /></Col>
          <Col md={4}><Card /></Col>
          <Col md={4}><Card /></Col>
        </Row>

      </Grid>
    </div>
  );
};
