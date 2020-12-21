import React from 'react';
import { MDBCardText } from 'mdbreact';
import { Link } from 'react-router-dom';
import { AppRoute, AccountRoutes, SettingRoutes } from '@aladdin/domain-models';
import './account-main.scss';

/* eslint-disable-next-line */
export interface AccountMainProps {
  accountRoute?: AccountSettingsList[];
}
interface AccountSettingsList {
  id?: number;
  title?: string;
  route?: string;
}

export const AccountMain: React.FC<AccountMainProps> = () => {
  const accountSettingsList = [
    {
      title: 'Update Profile',
      route: `/${AppRoute.settings}/${SettingRoutes.account}/${AccountRoutes.profile}`,
    },

    {
      title: 'Change Password',
      route: `/${AppRoute.settings}/${SettingRoutes.account}/${AccountRoutes.password}`,
    },
  ];
  const renderAccountSettingsList = accountSettingsList.map(
    (account, index) => {
      return (
        <MDBCardText
          key={index}
          tag="h2"
          className="account-card-content text-left py-2"
        >
          <Link to={account.route}>{account.title}</Link>
        </MDBCardText>
      );
    }
  );
  return <>{renderAccountSettingsList}</>;
};
