import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator'
import WelcomeDialog from './WelcomeDialog'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <Router>
        <div>
        <ul>
            <li>
              <Link to='/'>Welcome</Link>
            </li>
            <li>
              <Link to='/Calculator'>Calculator</Link>
            </li>
          </ul>  

      <hr />

<Route exact path="/" component={WelcomeDialog} />
<Route path="/Calculator" component={Calculator} />
        </div>

      </Router>
       
      
      </div>
    );
  }
}

export default App;
