import './features-settings.scss';
import React from 'react';
import { Route } from 'react-router-dom';
import { Account } from './account/account';
import { AladdinCard } from '@aladdin/ui-kit';
import { SettingsMain } from './settings-main/settings-main';

import { AppRoute, SettingRoutes } from '@aladdin/domain-models';

import { Security } from './security/security';

/* Icon should display modal when clicked*/
export interface IFeaturesSettingsProps {
  title?: string;
}

export const FeaturesSettings = (props: IFeaturesSettingsProps) => {
  return (
    <>
      <Route
        exact
        path={`/${AppRoute.settings}`}
        component={() => {
          return <SettingsMain />;
        }}
      />
      <Route
        path={`/${AppRoute.settings}/${SettingRoutes.security}`}
        component={() => {
          return (
            <>
              <h1>Security Settings</h1>
              <AladdinCard fullWidth>
                <Security />
              </AladdinCard>
            </>
          );
        }}
      />

      <Route
        path={`/${AppRoute.settings}/${SettingRoutes.account}`}
        component={() => {
          return <Account />;
        }}
      />
    </>
  );
};
