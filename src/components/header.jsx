import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import logoCroped from './photos/logo croped.png'
import LoginBtn from './login'
import LogoutBtn from './logout'



const Header = ({user,show,currentUser,userPayingSystem}) =>{
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const StyledMenu = styled((props) => (
        <Menu
          elevation={0}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          {...props}
        />
      ))(() => ({
        '& .css-6hp17o-MuiList-root-MuiMenu-list': {
            display:'flex',
            flexDirection: 'column',
            background: 'rgba(255, 255, 255, 0.15)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(90px)'
        },
        '& .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root': {
            margin:'auto'
        },
        '& .css-1x7jfmm-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
            borderRadius:'10px',
            background: 'rgba(255, 255, 255, 0.15)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(90px)'
            
        },
      }));

    const navber_name =[
        {
            'id' :0,
            'EngName' : '#main',
            'arbicName' : 'الرئيسية'
        },
        {
            'id' :1,
            'EngName' : '/#lectures',
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
                                            <div>
                                                <Button
                                                    id="fade-button"
                                                    aria-controls={open ? 'fade-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                    onClick={handleClick}
                                                    className='dropdown-span'
                                                >
                                                    حسابي
                                                </Button>
                                                <StyledMenu
                                                    id="demo-customized-menu"
                                                    MenuListProps={{
                                                    'aria-labelledby': 'demo-customized-button',
                                                    }}
                                                    anchorEl={anchorEl}
                                                    open={open}
                                                    onClose={handleClose}
                                                >
                                                    <MenuItem onClick={handleClose}>
                                                        <div key={'dropdown-menu-info'} className='dropdown-menu-info'>
                                                            <img src={currentUser.picture} alt='profile'/>
                                                            <h2 className='dropdownitem-user-name' key={'dropdonwitem'}>{currentUser.name}</h2>
                                                        </div>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleClose}>
                                                        <p className={'dropdonwitem'} key={'dropdonwitem'}>{
                                                            userPayingSystem === undefined ?
                                                            'غير محدد'
                                                            :
                                                            userPayingSystem + ':نوع الاشتراك'
                                                            }</p>
                                                    </MenuItem>
                                                    <MenuItem onClick={handleClose}><LogoutBtn show={show}/></MenuItem>
                                                </StyledMenu>
                                            </div> 
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