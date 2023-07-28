import {React} from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './components/header'
import Main from './components/main'
import Lectures from './components/lectures'
import SpatialEngineering from './components/spatialEngineering'

import * as Api from './API/UesrApi'
import {useAuth0} from "@auth0/auth0-react";


function App() {
  const {user} = useAuth0();

  

  async function req(){
      const id=localStorage.getItem("userEmail")
      const name=localStorage.getItem("userName")
      const email=localStorage.getItem("userEmail")
      const payingSystem='MPS'

      const handelUserCreation = () =>{
        // Check if the user exist or not
        /* 
        const checkUserExist = await Api.getSpecific(email)
        
        if(!(checkUserExist.message === undefined)){
          // Create new user
          await Api.createUser(id,name,email,payingSystem)
        }else{
          console.log('user already exist')
        } 
      */
      }

      const handelUserUpdating = () =>{
        /* 
        // update user payingSystem
          await Api.updateUser(email,'LPS')
      */
      }
  }

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
