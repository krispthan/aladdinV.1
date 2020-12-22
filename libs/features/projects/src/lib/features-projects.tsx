import "./features-projects.scss";
import React from "react";
import { CreateProject } from "./create-project/create-project";
import { Route } from "react-router-dom";
import { AladdinSearchbar } from "@aladdin/ui-kit";
import {
  AppRoute,
  ProjectRoutes,
  SequencerRoute,
} from "@aladdin/domain-models";
import ViewProject from "./view-project/view-project";
import { MyProjects } from "./my-projects/my-projects";

/* User should be able to click on the project card to create a new project card
api to delete the project 
api to create new project using post request
*/
export interface FeaturesProjectsProps {}

export const FeaturesProjects = (props: FeaturesProjectsProps) => {
  return (
    <>
      <Route
        exact
        path={`/${AppRoute.sequencer}/${SequencerRoute.Projects}/`}
        component={MyProjects}
      />
      <Route
        path={`/${AppRoute.sequencer}/${SequencerRoute.Projects}/${ProjectRoutes.Create}`}
        component={CreateProject}
      />

      <Route
        path={`/${AppRoute.sequencer}/${SequencerRoute.Projects}/${ProjectRoutes.View}`}
        component={ViewProject}
      />
    </>
  );
};

export default FeaturesProjects;
