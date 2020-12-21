import React, { Component } from 'react';
import { MainNavComponent } from './navigation/navigation';
import { Route, Link } from 'react-router-dom';

import './header.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export class Header extends Component<HeaderProps> {
  render() {
    return (
      <header className="fixed-top">
        <MainNavComponent />
      </header>
    );
  }
}

export default Header;
