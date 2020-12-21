import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';

import './log-in.scss';

/* eslint-disable-next-line */
export interface LogInProps {}

export class LogIn extends Component<LogInProps> {
  render() {
    return (
      <div>
        <p>Welcome to log-in!</p>

        <ul>
          <li>
            <Link to="/">log-in root</Link>
          </li>
        </ul>
        <Route
          path="/"
          render={() => <div>This is the log-in root route.</div>}
        />
      </div>
    );
  }
}

export default LogIn;
