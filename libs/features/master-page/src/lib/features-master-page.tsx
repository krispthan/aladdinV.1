import React, { ReactNode } from 'react';

import { Route, Link } from 'react-router-dom';

import './features-master-page.scss';
import { Footer } from './footer/footer';
import Header from './header/header';

/* eslint-disable-next-line */
export interface FeaturesMasterPageProps {
  children: ReactNode;
}

export const FeaturesMasterPage: React.FC<FeaturesMasterPageProps> = (
  props
) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
