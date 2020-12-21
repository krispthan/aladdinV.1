import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';

import './guards.scss';

/* eslint-disable-next-line */
export interface GuardsProps {}

export class Guards extends Component<GuardsProps> {
  render() {
    return (
      <div>
        <p>Welcome to guards!</p>

        <ul>
          <li>
            <Link to="/">guards root</Link>
          </li>
        </ul>
        <Route
          path="/"
          render={() => <div>This is the guards root route.</div>}
        />
      </div>
    );
  }
}

export default Guards;
