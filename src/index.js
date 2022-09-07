import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

//import { ReactKeycloakProvider } from '@react-keycloak/web'

//import keycloak from './keycloak'

import { BrowserRouter } from "react-router-dom";

/**

<ReactKeycloakProvider
authClient={keycloak}
initOptions={{onLoad: 'login-required'}}
>
  </ReactKeycloakProvider>
 */


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);