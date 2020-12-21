import React, { useState } from 'react';

import './app.scss';

import { Route, Redirect } from 'react-router-dom';
import { FeaturesMasterPage } from '@aladdin/features/master-page';
import { FeaturesSettings } from '@aladdin/features/settings';
import { Featureslogin } from '@aladdin/features/login';
import { FeaturesAbout } from '@aladdin/features/about';
import { AppRoute } from '@aladdin/domain-models';
import { FeaturesFaq } from '@aladdin/features/faq';
import { FeaturesResources } from '@aladdin/features/resources';
import { FeaturesContactUs } from '@aladdin/features/contact-us';
import { FeaturesSequencer } from '@aladdin/features/sequencer';
import { FeaturesHome } from '@aladdin/features/home';
import { FeaturesRegister } from '@aladdin/features/register';

import { SharedForms } from '@aladdin/shared/forms';

import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface AppProps {
  activeRoute?: boolean;
}
const App: React.FC<AppProps> = () => {
  const routes = [
    { path: `/${AppRoute.home}`, component: FeaturesHome },
    { path: `/${AppRoute.about}`, component: FeaturesAbout },
    { path: `/${AppRoute.contacts}`, component: FeaturesContactUs },
    { path: `/${AppRoute.faq}`, component: FeaturesFaq },
    { path: `/${AppRoute.resources}`, component: FeaturesResources },
    { path: `/${AppRoute.settings}`, component: FeaturesSettings },
    { path: `/${AppRoute.sequencer}`, component: FeaturesSequencer },
    { path: `/${AppRoute.registration}`, component: FeaturesRegister },
    { path: `/${AppRoute.login}`, component: Featureslogin },
  ];
  const renderRoute = routes.map((route, index) => {
    return <Route key={index} path={route.path} component={route.component} />;
  });
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <FeaturesMasterPage>
          <Route
            exact
            path="/"
            component={() => {
              return <FeaturesHome />;
            }}
          />

          {renderRoute}
        </FeaturesMasterPage>
      </div>
    </DndProvider>
  );
};

export default App;
