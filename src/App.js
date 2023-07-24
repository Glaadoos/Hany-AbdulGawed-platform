import React from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import Header from './components/header'
import Main from './components/main'
import {useAuth0} from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const {user} = useAuth0();

  return(
    <div>
      <Header
        user={user}
      />
      <Main />
    </div>
  )


}

export default App;
