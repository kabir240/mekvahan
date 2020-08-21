import React, { Component } from 'react';
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import LoginForm from './Components/LoginComponent/LoginComponent';
import Home from './Components/HomeComponent/HomeComponent';


class App extends Component {
  render() {
    return (
      <Router>
      <LoginForm path="/" />
      <Home path="/home" />
      </Router>
    );
  }
}

export default App;
