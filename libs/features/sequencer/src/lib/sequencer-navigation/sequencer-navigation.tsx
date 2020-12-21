import './sequencer-navigation.scss';
import { MDBSideNavLink } from 'mdbreact';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { AppRoute, SequencerRoute } from '@aladdin/domain-models';

export class SequencerNavigation extends Component {
  constructor(props) {
    super(props);
  }
  rSNL(to, text) {
    return (
      <MDBSideNavLink to={to} onClick={() => null}>
        {text}
      </MDBSideNavLink>
    );
  }

  render() {
    const dashboardNav = [
      {
        title: 'Dashboard',
        route: `/${AppRoute.sequencer}/${SequencerRoute.Dashboard}`,
      },
      {
        title: 'Claim',
        route: `/${AppRoute.sequencer}/${SequencerRoute.Claim}`,
      },
      {
        title: 'Project',
        route: `/${AppRoute.sequencer}/${SequencerRoute.Projects}`,
      },
      {
        title: 'Upload Data',
        route: `/${AppRoute.sequencer}/${SequencerRoute.UploadData}`,
      },
      {
        title: 'Manage Samples',
        route: `/${AppRoute.sequencer}/${SequencerRoute.ManageSamples}`,
      },
      {
        title: 'Run Analysis',
        route: `/${AppRoute.sequencer}/${SequencerRoute.Analysis}`,
      },
      {
        title: 'Report',
        route: `/${AppRoute.sequencer}/${SequencerRoute.Report}`,
      },
    ];
    const renderDashboardNav = dashboardNav.map((nav, index) => {
      return (
        <li key={index} className="py-2">
          <Link to={nav.route}>{nav.title}</Link>
        </li>
      );
    });
    return (
      <>
        <div className="nav-separator"></div>
        <div className="dashboard-nav-container">
          <ul className="p-0 pt-5">{renderDashboardNav}</ul>
        </div>
      </>
    );
  }
}

export default SequencerNavigation;
