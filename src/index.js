import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
        <Auth0Provider
        domain="dev-ygrskzanm044w3be.us.auth0.com"
        clientId="vpwQ42rBahM2eVuTCkNFscsYWfnf1Wzo"
        authorizationParams={{
          redirect_uri: 'https://bahget.github.io/Hany-AbdulGawed-platform/'
        }}
        >
          <App />
        </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);


