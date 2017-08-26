import React, { Component } from 'react';
import Button from 'antd/lib/button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <p>this is my first React code</p>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App">
          <Button type="primary">Button</Button>
        </div>
      </div>
      
    );
  }
}

export default App;
