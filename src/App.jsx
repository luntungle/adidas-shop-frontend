import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'normalize.css';

import Sidebar from './Sidebar';
import List from './Products/List';
import Details from './Products/Details';

import './fonts.css';

const Wrapper = styled.div`
  margin: 0px;
  display: flex;
  flex-flow: row nowrap;
  font-family: "avenir-next";
`;

export default () => (
  <Router>
    <Wrapper>
      <Sidebar />
      <Route exact path="/" component={List} />
      <Route path="/Details" component={Details} />
    </Wrapper>
  </Router>
);
