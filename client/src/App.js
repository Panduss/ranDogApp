import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RanDogData from './containers/ranDogPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RanDogData />
      </div>
    );
  }
}

export default App;
