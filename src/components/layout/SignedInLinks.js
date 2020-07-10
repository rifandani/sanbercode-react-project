import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// class based component
// using react-router-dom features
export default class SignedInLinks extends Component {
  render() {
    return (
      <>
        <ul className="right">
          <li>
            <NavLink to="/signup">SignUp</NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="btn btn-floating cyan lighten-1 hoverable pulse"
            >
              <i className="material-icons">person</i>
            </NavLink>
          </li>
        </ul>
      </>
    );
  }
}
