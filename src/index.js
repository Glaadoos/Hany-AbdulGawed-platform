import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
const redirect_url= 'https://hanyabdlgawad.online/'
root.render(
    <HashRouter >
        <Auth0Provider
        
        authorizationParams={{
          redirect_uri:  redirect_url
        }}
        >
          <App redirect_url={redirect_url} />
        </Auth0Provider>
    </HashRouter>
);