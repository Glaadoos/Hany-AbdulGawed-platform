import {React, useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './components/header'
import Main from './components/main'
import Lectures from './components/lectures'
import SpatialEngineering from './components/spatialEngineering'
import Algebra from './components/Algebra'
import * as Api from './API/UesrApi'
import {useAuth0} from "@auth0/auth0-react";


function App() {
  const [show, setShow] =useState(false);
  const [currentUser, setCurrentUser] = useState({
    'name':'',
    'email':'',
    'picture':'',
    'payingSystem':''
});
  const [userPayingSystem, setPayingSystem] = useState(null);
  const [userExist, setUserExist] = useState(false);
  const {user} = useAuth0();

  const id=localStorage.getItem("userEmail")
  const name=localStorage.getItem("userName")
  const email=localStorage.getItem("userEmail")


  const handleUserexist = async ()=>{
    // Check if the user on server side exist or not
    const checkUserExist = await Api.getSpecific(currentUser.email)
    if(checkUserExist.message === undefined){
      setUserExist(true)
      localStorage.setItem("userPayingSystem", checkUserExist.payingSystem)  
      setPayingSystem(checkUserExist.payingSystem)
    }else{
      setUserExist(false)
    }
  }
  const handelUserCreation = async () =>{   
    const checkUserExist = await Api.getSpecific(currentUser.email)
    if(!(checkUserExist.message === undefined)){
      // Create new user
      await Api.createUser(id,name,email,userPayingSystem)
    }  
  }
  const handelUserUpdating = async () =>{
    if(userExist){
      // update user payingSystem
      await Api.updateUser(email,'LPS')
    }
  }
  const handeNavDropDownMenu = () =>{
    return setShow(!show)
  }
  
  useEffect(()=>{
    if(user){
        localStorage.setItem("userEmail", user.email)
        localStorage.setItem("userName", user.name)
        localStorage.setItem("userPicture", user.picture)
        setCurrentUser({
            'name':user.name,
            'email':user.email,
            'picture':user.picture,
            'payingSystem':localStorage.getItem("userPayingSystem")|| userPayingSystem
        })

        handleUserexist();
        if(!userExist){
          handelUserCreation();
        }
    }
    if(localStorage.getItem("userName")){
        setCurrentUser({
            'name':localStorage.getItem("userName"),
            'email':localStorage.getItem("userEmail"),
            'picture':localStorage.getItem("userPicture"),
            'payingSystem':localStorage.getItem("userPayingSystem")|| userPayingSystem
        })

        handleUserexist();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentUser.email, user])

// console.log(userExist)


  return(
    <div>
      <Header user={user} show={show} handeNavDropDownMenu={handeNavDropDownMenu} currentUser={currentUser} userPayingSystem={userPayingSystem}/>
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
          <SpatialEngineering userPayingSystem={userPayingSystem} />
        }/>
        <Route path='/Algebra' element={
          <Algebra userPayingSystem={userPayingSystem} />
        }/>
      </Routes>

    </div>
  )
}

export default App;
