import './features-sequencer.scss';
import React from 'react';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { Redirect, Route, Link } from 'react-router-dom';
import { FeaturesProjects } from '@aladdin/features/projects';

import { Featureslogin } from '@aladdin/features/login';

import { FeaturesUploadData } from '@aladdin/features/upload-data';

import { FeaturesManageSamples } from '@aladdin/features/manage-samples';

import { FeaturesAnalysis } from '@aladdin/features/analysis';

import { FeaturesReport } from '@aladdin/features/report';

import { FeaturesDashboard } from '@aladdin/features/dashboard';

import { AppRoute, SequencerRoute } from '@aladdin/domain-models';

import SequencerNavigation from './sequencer-navigation/sequencer-navigation';
import { FeaturesClaim } from '@aladdin/features/claim';

export const FeaturesSequencer = () => {
  return (
    <div>
      <MDBRow>
        <MDBCol className="dashboard-sidenav-col">
          <SequencerNavigation />
        </MDBCol>
        <MDBCol xl="10" lg="9" sm="9">
          <Route
            exact
            path={`/${AppRoute.sequencer}`}
            render={() => {
              return (
                <Redirect
                  to={`/${AppRoute.sequencer}/${SequencerRoute.Dashboard}`}
                />
              );
            }}
          />
          <Route
            path={`/${AppRoute.sequencer}/${SequencerRoute.Dashboard}`}
            component={FeaturesDashboard}
          />
          <Route
            path={`/${AppRoute.sequencer}/${SequencerRoute.Claim}`}
            component={FeaturesClaim}
          />
          <Route
            path={`/${AppRoute.sequencer}/${SequencerRoute.Projects}/`}
            component={FeaturesProjects}
          />
          <Route
            path={`/${AppRoute.sequencer}/${SequencerRoute.UploadData}`}
            component={FeaturesUploadData}
          />
          <Route
            path={`/${AppRoute.sequencer}/${SequencerRoute.ManageSamples}`}
            component={FeaturesManageSamples}
          />

          <Route
            path={`/${AppRoute.sequencer}/${SequencerRoute.Analysis}`}
            component={FeaturesAnalysis}
          />

          <Route
            path={`/${AppRoute.sequencer}/${SequencerRoute.Report}`}
            component={FeaturesReport}
          />
          <div className="backpage-container d-flex py-4">
            <MDBIcon
              className="position-relative"
              icon="arrow-left"
              size="lg"
            />
            <p className="mx-3">
              <Link to={`/${AppRoute.sequencer}/${SequencerRoute.Dashboard}`}>
                Back to Dashboard
              </Link>
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default FeaturesSequencer;
