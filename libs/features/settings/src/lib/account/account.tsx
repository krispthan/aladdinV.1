import "./account.scss";
import React from "react";
import { AccountRoutes, AppRoute, SettingRoutes } from "@aladdin/domain-models";
import { AladdinCard } from "@aladdin/ui-kit";
import { Route } from "react-router-dom";
import { UpdateProfile } from "../account/update-profile/update-profile";
import { Password } from "../account/password-form/password";
import { AccountMain } from "./account-main/account-main";

/**** My Account page should display two links:
 *  Update Profile and the corresponding route to page
 *  Update Password and the corresponding route to page
 * ****/

export const Account: React.FC = () => {
  return (
    <>
      <Route
        exact
        path={`/${AppRoute.settings}/${SettingRoutes.account}`}
        component={() => {
          return (
            <>
              <h1 className="mx-auto d-inline-block">Account Profile</h1>
              <AccountMain />
            </>
          );
        }}
      />
      <Route
        path={`/${AppRoute.settings}/${SettingRoutes.account}/${AccountRoutes.profile}`}
        component={() => {
          return (
            <>
              <h1 className="pb-3">Update Profile</h1>
              <UpdateProfile />
            </>
          );
        }}
      />
      <Route
        exact
        path={`/${AppRoute.settings}/${SettingRoutes.account}/${AccountRoutes.password}`}
        component={() => {
          return (
            <>
              <h1 className="px-3 mx-auto d-inline-block">Update Password</h1>
              <AladdinCard header="I want to change my password">
                <Password />
              </AladdinCard>
            </>
          );
        }}
      />
    </>
  );
};

export default Account;
