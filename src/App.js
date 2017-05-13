import React, { Component } from 'react';
import Sidebar from './Sidebar/index.js';
import Content from './Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
