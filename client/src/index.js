import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./UserContext";
import { TimeProvider } from "./TimeContext";
import FontStyles from "./FontStyles";

require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENTID}
      redirectUri={window.location.origin}
    >
      <UserProvider>
        <TimeProvider>
          <FontStyles />
          <App />
        </TimeProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
