import React from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import Header from './components/header'
import masterPhoto from './components/master SVG.png'

function App() {
  /* const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const {user} = useAuth0(); */

  return(
    <div>
      <Header />
      {<img src={masterPhoto} alt='master'/>}
    </div>
  )

  /* if(user){
    console.log(user)
    return(
      <div>
        <button onClick={() => loginWithRedirect()}>Log In</button>
        <button onClick={() => logout({ logoutParams: { returnTo: 'https://bahget.github.io/Hany-AbdulGawed-platform/' } })}>Log Out</button>
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
    );
  }else{
    return(
      <div>
        <button onClick={() => loginWithRedirect()}>Log In</button>
        <button onClick={() => logout({ logoutParams: { returnTo: 'https://bahget.github.io/Hany-AbdulGawed-platform/' } })}>Log Out</button>
      </div>
    );
  } */
}

export default App;
