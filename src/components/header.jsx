import {React, useState} from 'react';
import logoCroped from './photos/logo croped.png'
import LoginBtn from './login'
import LogoutBtn from './logout'


const Header = ({user}) =>{
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

    const handeNavDropDownMenu = () =>{
        return setShow(!show)
    }

    return(
        <header>
            <img id='logo' src={logoCroped} alt='logo' />
            <ul className='navbar'>
                {navber_name.map((obj) =>{
                                if(obj.id ===3){
                                    if(user){
                                        return(
                                            show ? 
                                            <li className={'item'+obj.id} key={'item'+obj.id}>
                                                <button onClick={handeNavDropDownMenu}  className='dropdown-span true'>{obj.arbicName}</button>
                                                <div className="dropdown">
                                                    {obj.dropDown.map(item=>{
                                                            if(item.EngName ==='#logout'){
                                                                return(<LogoutBtn/>)
                                                            }
                                                            if(item.EngName ==='#profile'){
                                                                return(<div className='dropdown-menu-info'>
                                                                    <img src={user.picture} alt='profile'/>
                                                                    <h2 className='dropdownitem-user-name' key={'dropdonwitem'+item.id}>{user.name}</h2>
                                                                </div>)
                                                            }
                                                            else{return(<p className={'dropdonwitem'+item.id} key={'dropdonwitem'+item.id}>{item.arbicName}</p>)}
                                                    })}   
                                                </div>
                                            </li>
                                            :
                                            <li className={'item'+obj.id} key={'item'+obj.id}>
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