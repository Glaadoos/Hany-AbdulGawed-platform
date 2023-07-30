import {React, useState, useEffect, useRef} from 'react';
import {Route, Routes} from 'react-router-dom'
import { BrowserRouter} from "react-router-dom";
import './App.css';
import Header from './components/header'
import Main from './components/main'
import Lectures from './components/lectures'
import SpatialEngineering from './components/spatialEngineering'
import Algebra from './components/Algebra'
import Calculus from './components/Calculus'
import Revisiones from './components/Revisiones'
import Dynamics from './components/Dynamics'
import Statics from './components/Statics'
import LessonPlayer from './components/lessonPlayer'
import SetPayingSystem from './components/SetPayingSystem'
import * as Api from './API/UesrApi'
import {useAuth0} from "@auth0/auth0-react";


function App() {
  const [currentUser, setCurrentUser] = useState({
    'name':'',
    'email':'',
    'picture':'',
    'payingSystem':''
});
  const [userPayingSystem, setPayingSystem] = useState(null);
  const [videoId, setVideoId] = useState(localStorage.getItem("videoId"));
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
  const handelUserUpdating = async (value) =>{
    if(userExist){
      // update user payingSystem
      await Api.updateUser(email,value)
    }
  }
  
  const getYoutubeVideoDuration = async(videoId)=>{
    const key1 = 'AIzaSyD8F0boLyJ33MtuH0V2f2t67Fip6QSZGFg'
    const key = 'AIzaSyAXPC5sP8ItkyMaVY5akzqqWvtjsYf1qfc'
    const id = videoId
    const url = `https://www.googleapis.com/youtube/v3/videos?key=${key}&part=contentDetails&id=${id}`
    let res;
    try{
      res = await fetch(url).then(res => res.json())
    }catch(err){
      console.log(err)
    }
    const data = await res
    return(data);
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
        if(!userExist){
          handelUserCreation();
        }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentUser.email, user])


  return(
    <div>
      <Header  user={user}  currentUser={currentUser} userPayingSystem={userPayingSystem}/>
      <Routes>
        <Route path='/Hany-AbdulGawed-platform' exact  element={
          <div>
            <Main />
            <Lectures  />
          </div>
        }/>
        <Route path='/' element={
          <div>
            <Main />
            <Lectures />
          </div>
        }/>
        <Route path='/Hany-AbdulGawed-platform/spatialEngineering' element={
          <SpatialEngineering setVideoId={setVideoId} user={email} userPayingSystem={userPayingSystem} />
        }/>
        <Route path='/Hany-AbdulGawed-platform/Algebra' element={
          <Algebra setVideoId={setVideoId} durationFunction={getYoutubeVideoDuration} user={email} userPayingSystem={userPayingSystem} />
        }/>
        <Route path='/Hany-AbdulGawed-platform/Calculus' element={
          <Calculus  />
        }/>
        <Route path='/Hany-AbdulGawed-platform/Dynamics' element={
          <Dynamics  />
        }/>
        <Route path='/Hany-AbdulGawed-platform/Statics' element={
          <Statics  />
        }/>
        <Route path='/Hany-AbdulGawed-platform/Revisiones' element={
          <Revisiones  />
        }/>
        <Route path={`/Hany-AbdulGawed-platform/lessonView`} element={
          <LessonPlayer videoId={videoId} />
        }/>
        <Route path={`/Hany-AbdulGawed-platform/PayingSystem`} element={
          <SetPayingSystem user={email} handelUserUpdating={handelUserUpdating}  userPayingSystem={userPayingSystem}/>
        }/>
      </Routes>

    </div>
  )
}

export default App;
