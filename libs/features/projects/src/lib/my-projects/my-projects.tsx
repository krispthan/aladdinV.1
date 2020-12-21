import './my-projects.scss';

import React from 'react';
import { AladdinCard } from '@aladdin/ui-kit';
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdbreact';
import {
  AppRoute,
  ProjectRoutes,
  SequencerRoute,
} from '@aladdin/domain-models';

export const MyProjects: React.FC = () => {
  return (
    <>
      <h1>My Projects</h1>
      <AladdinCard classes="projects-card mt-3" fullWidth>
        <AladdinCard classes="project-profile-container">
          <div className="plus-container">
            <Link
              to={`/${AppRoute.sequencer}/${SequencerRoute.Projects}/${ProjectRoutes.Create}`}
            >
              <MDBIcon icon="plus-circle" size="lg" />
            </Link>
          </div>
          <p className="font-bold">
            <Link
              to={`/${AppRoute.sequencer}/${SequencerRoute.Projects}/${ProjectRoutes.View}`}
            >
              Zika Project
            </Link>
          </p>
          <div className="trash-container">
            <MDBIcon icon="trash" size="lg" />
          </div>
        </AladdinCard>
      </AladdinCard>
    </>
  );
};
