import "./project-card.scss";
import React, { HTMLAttributes } from "react";
import { AladdinCard } from "@aladdin/ui-kit";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";
import {
  AppRoute,
  ProjectRoutes,
  SequencerRoute,
} from "@aladdin/domain-models";

export interface IProjectCardProps extends HTMLAttributes<HTMLElement> {
  name: string;
}
export const ProjectCard: React.FC<IProjectCardProps> = (
  props: IProjectCardProps
) => {
  return (
    <AladdinCard noContainer classes="project-profile-container mx-3">
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
          {props.name}
        </Link>
      </p>
      <div className="trash-container">
        <MDBIcon icon="trash" size="lg" />
      </div>
    </AladdinCard>
  );
};

export default ProjectCard;
