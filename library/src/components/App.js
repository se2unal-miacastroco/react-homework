import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../styles/App.css';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Doggy Stuff</h1>
          <Link id="list" to='/dogList'> Doggy List </Link>
        </header>
      </div>
    );
  }
}

export default App;
