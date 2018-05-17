import React, { Component } from 'react';
import logo from './logo.svg';
import LoginPage from './containers/LoginPage'
import './App.css';
import RanDogData from './containers/ranDogPage'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


class App extends Component {
  render() {
    console.log("we're gettin it")
    return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={RanDogData} />
      </div>
    </Router>
    );
  }
}

export default App;
