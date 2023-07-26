import {React} from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './components/header'
import Main from './components/main'
import Lectures from './components/lectures'
import SpatialEngineering from './components/spatialEngineering'
import {useAuth0} from "@auth0/auth0-react";

function App() {
  const {user} = useAuth0();


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
        <Route path='/spatialEngineering' element={
          <SpatialEngineering />
        }/>
      </Routes>

    </div>
  )


}

export default App;
