import React from 'react';
import logoCroped from './logo croped.png'


const Header = () =>{

    const navber_name =['الرئيسية','المحاضرات','مساعدة','حسابي']

    return(
        <header>
            <img id='logo' src={logoCroped} alt='logo' />
            <ul className='navbar'>
                {navber_name.map((name,num) =>{
                                return(<li key={num}>{name}</li>)
                })}
            </ul>
        </header>
    )
}

export default Header;