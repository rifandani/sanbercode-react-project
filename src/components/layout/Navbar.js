import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SignedInLinks from './SignedInLinks';

// class based component
// using react-router-dom
export default class Navbar extends Component {
  render() {
    return (
      <header className="navbarComponent">
        <nav className="nav-wrapper purple accent-4">
          <div className="container">
            <Link to="/" style={{ fontSize: '20px', color: 'cyan' }}>
              My Blog Posts
            </Link>
            <SignedInLinks />
          </div>
        </nav>
      </header>
    );
  }
}
