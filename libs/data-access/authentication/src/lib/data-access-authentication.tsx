import React from "react";

import "./data-access-authentication.scss";

/* Handles Authentication */

export interface DataAccessAuthenticationProps {
  login;
  logout;
  currentUser;
}

export const DataAccessAuthentication = (
  props: DataAccessAuthenticationProps
) => {
  return (
    <div>
      <h1>Welcome to data-access-authentication!</h1>
    </div>
  );
};

// export default DataAccessAuthentication;
