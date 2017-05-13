import React, { Component } from 'react';
import Sidebar from './Sidebar';
import List from './List';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <List />
        </div>
      </Router>
    );
  }
}

export default App;
