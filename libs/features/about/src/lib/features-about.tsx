import React from 'react';

import { Route, Link } from 'react-router-dom';

import './features-about.scss';

/* eslint-disable-next-line */
export interface FeaturesAboutProps {}

export function FeaturesAbout(props: FeaturesAboutProps) {
  return (
    <div>
      <h1>Welcome to features-about!</h1>

      <ul>
        <li>
          <Link to="/">features-about root</Link>
        </li>
      </ul>
      <Route
        path="/"
        render={() => <div>This is the features-about root route.</div>}
      />
    </div>
  );
}

export default FeaturesAbout;
