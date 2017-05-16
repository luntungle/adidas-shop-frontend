import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import List from './Product/List';
import Details from './Product/Details';
import './components/fonts/fonts.css';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0px;
  display: flex;
  flex-flow: row nowrap;
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
