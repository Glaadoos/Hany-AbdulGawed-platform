import React from "react";
import logoMOCH from "../photos/logoMonochrome.png"
import Flag from "../photos/flag.png"
import Facebook from "../photos/Icons/facebook.png"
import Telegram from "../photos/Icons/telegram.png"
import Whatsapp from "../photos/Icons/Whatsapp.png"
import { useState } from "react";
import { useEffect } from "react";


const Footer = () =>{
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        const handleWindowWidthChange = () =>{
           return setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowWidthChange);
        return () => {
            window.removeEventListener('resize', handleWindowWidthChange);
        };
    }, [])
    return (
        <footer>

            <img id='Flag' src={Flag} alt='Plastian flag'/>
            <img id='monochrome' src={logoMOCH} alt='monochromatic  logo'/>
            {
                width>=800 ? 
                    <ul className="social-media-icons">
                        {console.log('min')}
                        <li>
                            <a href="https://www.facebook.com/Mr.HanyAbdelgwad">
                                <img id='Facebook' className="social-media-icon" src={Facebook} alt='Facebook'/>    
                                <h4 className="social-media-icon-title"> أ/هاني عبدالجواد</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/+201554070665" rel="noreferrer" target="_blank">
                                <img id='Telegram' className="social-media-icon" src={Telegram} alt='Telegram'/>
                                <h4 className="social-media-icon-title">Telegram</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/qr/4Z25L5ZWVKUJJ1" rel="noreferrer" target="_blank">
                                <img id='Whatsapp' className="social-media-icon" src={Whatsapp} alt='Whatsapp'/>
                                <h4 className="social-media-icon-title">WhatsApp</h4>
                            </a>
                        </li>
                    </ul>
                    
                :
                <></>
            }
        </footer>
    );
}

export default Footer; 