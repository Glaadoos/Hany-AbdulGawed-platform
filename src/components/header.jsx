import {React, useState, useEffect} from 'react';
import logoCroped from './photos/logo croped.png'
import LoginBtn from './login'
import LogoutBtn from './logout'


const Header = ({user}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const navber_name =[
        {
            'id' :0,
            'EngName' : '#main',
            'arbicName' : 'الرئيسية'
        },
        {
            'id' :1,
            'EngName' : '#lectures',
            'arbicName' : 'المحاضرات'
        },
        {
            'id' :2,
            'EngName' : '#help',
            'arbicName' : 'مساعدة'
        },
        {
            'id' :3,
            'EngName' : '#account',
            'arbicName' : 'حسابي',
            'dropDown' : [
                {
                    'id' :0,
                    'EngName' : '#profile',
                    'arbicName' : 'صفحتي الشخصيه',
                },
                {
                    'id' :1,
                    'EngName' : '#ass',
                    'arbicName' : 'الحضور',
                },
                {
                    'id' :3,
                    'EngName' : '#logout',
                    'arbicName' : 'تسجيل الخروج',
                }
            ]
        }
    ]
    const [show, setShow] =useState(false);

    useEffect(()=>{
        if(user){
            localStorage.setItem("userEmail", user.email)
            localStorage.setItem("userName", user.name)
            localStorage.setItem("userPicture", user.picture)
            setCurrentUser({
                'name':user.name,
                'email':user.email,
                'picture':user.picture
            })
        }
        if(localStorage.getItem("userName")){
            setCurrentUser({
                'name':localStorage.getItem("userName"),
                'email':localStorage.getItem("userEmail"),
                'picture':localStorage.getItem("userPicture")
            })
        }
    },[user])

    const handeNavDropDownMenu = () =>{
        return setShow(!show)
    }
    return(
        <header>
            <img id='logo' src={logoCroped} alt='logo' />
            <ul className='navbar'>
                {navber_name.map((obj) =>{
                                if(obj.id ===3){
                                    if(currentUser || user){
                                        return(
                                            show ? 
                                            <li className={'item'+obj.id} key={'item'+obj.id}>
                                                <button onClick={handeNavDropDownMenu}  className='dropdown-span true'>{obj.arbicName}</button>
                                                <div key={'dropdown'} className="dropdown">
                                                    {obj.dropDown.map(item=>{
                                                            if(item.EngName ==='#logout'){
                                                                return(<LogoutBtn show={show}/>)
                                                            }
                                                            if(item.EngName ==='#profile'){
                                                                return(<div key={'dropdown-menu-info'} className='dropdown-menu-info'>
                                                                    <img src={currentUser.picture} alt='profile'/>
                                                                    <h2 className='dropdownitem-user-name' key={'dropdonwitem'+item.id}>{currentUser.name}</h2>
                                                                </div>)
                                                            }
                                                            else{return(<p className={'dropdonwitem'+item.id} key={'dropdonwitem'+item.id}>{item.arbicName}</p>)}
                                                    })}   
                                                </div>
                                            </li>
                                            :
                                            <li className={'item'+obj.id} key={obj.id+'item'}>
                                                <button onClick={handeNavDropDownMenu}  className='dropdown-span false'>{obj.arbicName}</button>
                                            </li>
                                        )
                                    }else{
                                        return(<LoginBtn/>)   
                                    }
                                }else{
                                    return(
                                        <li className={'item'+obj.id} key={'item'+obj.id}>
                                            <a href={obj.EngName}>{obj.arbicName}</a>
                                            </li>)
                                }
                })}
            </ul>
        </header>
    )
}

export default Header;