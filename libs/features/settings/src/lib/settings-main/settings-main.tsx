import './settings-main.scss';
import React from 'react';
import { MDBCardText } from 'mdbreact';
import { AppRoute, SettingRoutes } from '@aladdin/domain-models';

export const SettingsMain: React.FC = () => {
  const accountSettingsList = [
    {
      title: 'Account Settings',
      route: `/${AppRoute.settings}/${SettingRoutes.account}`,
    },
    {
      title: 'Security Settings',
      route: `/${AppRoute.settings}/${SettingRoutes.security}`,
    },
  ];
  const renderSettingsRoute = accountSettingsList.map((setting, index) => {
    return (
      <MDBCardText key={index} className="account-card-content pt-3">
        <a href={setting.route}> {setting.title}</a>
      </MDBCardText>
    );
  });
  return (
    <div className="settings-wrapper">
      <h1>Account Settings</h1>
      {renderSettingsRoute}
    </div>
  );
};
