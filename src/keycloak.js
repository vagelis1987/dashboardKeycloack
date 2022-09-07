


import Keycloak from 'keycloak-js';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak({
  url: 'http://10.0.3.10:8080/auth/',
  realm: 'Vessel-IT-KB',
  clientId: 'react-app',
});

export default keycloak;
