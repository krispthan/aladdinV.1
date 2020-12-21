import './features-claim.scss';
import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AppRoute, ClaimRoutes, SequencerRoute } from '@aladdin/domain-models';
import { ClaimProfile } from './claim-profile/claim-profile';
import { ClaimCode } from './claim-code/claim-code';
import { ClaimTab } from './models/claim-tab';
import { MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';

export const FeaturesClaim: React.FC = (props) => {
  const [changeRouteTitle, setChangeRouteTitle] = useState<string>('');
  const [activeItem, setAtiveItem] = useState<number>(ClaimTab.ClaimCode);

  const toggleTabs = (tab: ClaimTab) => {
    if (activeItem !== tab) {
      setAtiveItem(tab);
    }
  };

  return (
    <div>
      <h1>Credit Profile</h1>
      <MDBNav className="nav-tabs mt-2">
        <MDBNavItem>
          <MDBNavLink
            link
            to={`/${AppRoute.sequencer}/${SequencerRoute.Claim}/${ClaimRoutes.ClaimCode}`}
            active={activeItem === ClaimTab.ClaimCode}
            onClick={() => toggleTabs(ClaimTab.ClaimCode)}
            role="tab"
          >
            Claim Code
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to={`/${AppRoute.sequencer}/${SequencerRoute.Claim}/${ClaimRoutes.ClaimProfile}`}
            active={activeItem === ClaimTab.ClaimProfile}
            onClick={() => toggleTabs(ClaimTab.ClaimProfile)}
            role="tab"
          >
            Claim Profile
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>

      <Route
        exact
        path={`/${AppRoute.sequencer}/${SequencerRoute.Claim}`}
        render={() => {
          return (
            <Redirect
              to={`/${AppRoute.sequencer}/${SequencerRoute.Claim}/${ClaimRoutes.ClaimCode}`}
            />
          );
        }}
      />

      <Route
        path={`/${AppRoute.sequencer}/${SequencerRoute.Claim}/${ClaimRoutes.ClaimProfile}`}
        component={() => {
          toggleTabs(ClaimTab.ClaimProfile);
          setChangeRouteTitle('Claim Profile');
          return <ClaimProfile />;
        }}
      />
      <Route
        path={`/${AppRoute.sequencer}/${SequencerRoute.Claim}/${ClaimRoutes.ClaimCode}`}
        component={() => {
          toggleTabs(ClaimTab.ClaimCode);
          setChangeRouteTitle('Claim Code');
          return <ClaimCode />;
        }}
      />
    </div>
  );
};
