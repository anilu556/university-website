import React, { Component } from 'react';
import './App.css';

import {Link} from 'react-router-dom'; 
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <h1 className="navbar__title"><Link className="links" to="/">WestSide University</Link></h1>
          <nav className="navbar__list">
            <ul>
              <li><Link className="links" to="/">Home</Link></li>
              <li><Link className="links" to="/about">About</Link></li>
            </ul>
          </nav>
        </div>

        <Routes />
      </div>
    );
  }
}

export default App;