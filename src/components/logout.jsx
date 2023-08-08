import React from 'react';
import {useAuth0} from "@auth0/auth0-react";

const LogoutBtn =()=>{
    const { logout } =useAuth0();

    const hendleLogOut = () =>{
        localStorage.removeItem("userEmail")
        localStorage.removeItem("userName")
        localStorage.removeItem("userPicture")
        localStorage.removeItem("userPayingSystem")
        localStorage.removeItem("videoId")
        logout({ logoutParams: { returnTo: 'https://hany-abdulgawed-platform.web.app/' } })
        
    }
    return(<button onClick={hendleLogOut}>Log Out</button>);
}

export default LogoutBtn