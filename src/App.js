import {React, useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './components/header'
import Main from './components/main'
import Lectures from './components/lectures'
import {useAuth0} from "@auth0/auth0-react";

function App() {
  const {user} = useAuth0();
  const [Url, setUrl] = useState('');

  /* useEffect(()=>{
    window.location.pathname = Url
  },[]) */

  return(
    <div>
      <Header user={user}/>
      <Routes>
        <Route exac path='/' element={
          <div>
            <Main />
            <Lectures  />
          </div>
        }/>
        <Route path='/Hany-AbdulGawed-platform' element={
          <div>
            <Main />
            <Lectures  />
          </div>
        }/>
      </Routes>

    </div>
  )


}

export default App;
