import {React} from 'react';
import logoCroped from './photos/logo croped.png'
import LoginBtn from './login'
import LogoutBtn from './logout'


const Header = ({user,show,handeNavDropDownMenu,currentUser,userPayingSystem}) =>{
    
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
                    'EngName' : '#payingsystem',
                    'arbicName' : ':نوع الاشتراك',
                },
                {
                    'id' :3,
                    'EngName' : '#logout',
                    'arbicName' : 'تسجيل الخروج',
                }
            ]
        }
    ]
    return(
        <header>
            <img id='logo' src={logoCroped} alt='logo' />
            <ul className='navbar'>
                {navber_name.map((obj) =>{
                                if(obj.id ===3){
                                    if(currentUser.name !=='' || user){
                                        return(
                                            show ? 
                                            <li className={'item'+obj.id} key={'item'+obj.id}>
                                                <button onClick={handeNavDropDownMenu}  className='dropdown-span true'>{obj.arbicName}</button>
                                                <div key={'dropdown'} className="dropdown">
                                                    {obj.dropDown.map(item=>{
                                                            if(item.EngName ==='#logout'){
                                                                return(<LogoutBtn show={show}/>)
                                                            }
                                                            if(item.EngName ==='#payingsystem'){
                                                                return(<p className={'dropdonwitem'+item.id} key={'dropdonwitem'+item.id}>{
                                                                    userPayingSystem === undefined ?
                                                                    'غير محدد'
                                                                    :
                                                                    userPayingSystem + item.arbicName
                                                                    }</p>)
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
                                        if(obj.EngName ==='#main'){
                                            return(<li className={'item'+obj.id} key={'item'+obj.id}>
                                            <a href='/'>{obj.arbicName}</a>
                                            </li>)
                                        }else{
                                            return(
                                                <li className={'item'+obj.id} key={'item'+obj.id}>
                                                    <a href={obj.EngName}>{obj.arbicName}</a>
                                                    </li>)
                                        }
                                }
                })}
            </ul>
        </header>
    )
}

export default Header;