import React from 'react';
import {useAuth0} from "@auth0/auth0-react";

const LogoutBtn =()=>{
    const { logout } =useAuth0();

    const hendleLogOut = () =>{
        logout({ logoutParams: { returnTo: 'http://localhost:3000/' } })
        localStorage.removeItem("userEmail")
        localStorage.removeItem("userName")
        localStorage.removeItem("userPicture")
        localStorage.removeItem("userPayingSystem")
        localStorage.removeItem("videoId")
        
    }
    return(<button onClick={hendleLogOut}>Log Out</button>);
}

export default LogoutBtn