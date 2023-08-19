import React from 'react';
import masterPhoto from './photos/master SVG.png'


const Main = () =>{
    return(
        <main id='main' className='main'>
            <pre className='main-text'>
                <h1 className='master-name'>هاني عبدالجواد</h1>
                <h1 className='solgen'>
                    معلم الرياضيات
                    <br/>
                     للثانوية العامة والأزهرية
                     </h1>
            </pre>
            <img id='master' src={masterPhoto} alt='master'/>
        </main>
    )
}

export default Main;