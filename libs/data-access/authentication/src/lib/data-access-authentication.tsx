import React from "react";
import axios from "axios";

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
  const token;
  const instance = axios.create({
    baseURL: 'http://localhost/api/',
    headers: {'Authorization': 'basic '+ token}
  });
  
  instance.get('/path')
  .then(response => {
      return response.data;
  }
  .catch((e)=> console.log(e))
  return (
    <div>
      <h1>Welcome to data-access-authentication!</h1>
    </div>
  );
};

// export default DataAccessAuthentication;
