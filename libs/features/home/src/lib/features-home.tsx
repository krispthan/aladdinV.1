import React from 'react';

import { Route, Link } from 'react-router-dom';

import './features-home.scss';

/* eslint-disable-next-line */
export interface FeaturesHomeProps {}

export function FeaturesHome(props: FeaturesHomeProps) {
  return (
    <div>
      <h1>Welcome to features-home!</h1>

      <ul>
        <li>
          <Link to="/">features-home root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the features-home root route.</div>}
      />
    </div>
  );
}

export default FeaturesHome;
