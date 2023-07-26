import React from 'react';

import Algebra from './photos/branches-images/Algebra.png'
import spatialEngineering from './photos/branches-images/spatialEngineering.jpg'
import Calculus from './photos/branches-images/Calculus.jpg'
import Statics from './photos/branches-images/Statics.jpg'
import Dynamics from './photos/branches-images/Dynamics.jpg'
import Revisiones from './photos/branches-images/Revisiones.png'


const Lectures = ()=>{

    const branches = [
    {
        'id' :0,
        'EngCode' : 'Calculus',
        'arbicCode' : 'التفاضل والتكامل',
        'imageSrc' : Calculus
    },
    {
        'id' :1,
        'EngCode' : 'spatialEngineering',
        'arbicCode' : 'الهندسة الفراغية',
        'imageSrc' : spatialEngineering
    },
    {
        'id' :2,
        'EngCode' : 'Algebra',
        'arbicCode' : 'الجبر',
        'imageSrc' : Algebra
    }
    ,
    {
        'id' :3,
        'EngCode' : 'Revisiones',
        'arbicCode' : 'المراجعات',
        'imageSrc' : Revisiones
    },
    {
        'id' :4,
        'EngCode' : 'Dynamics',
        'arbicCode' : 'الديناميكا',
        'imageSrc' : Dynamics
    },
    {
        'id' :5,
        'EngCode' : 'Statics',
        'arbicCode' : 'الاستاتيكا',
        'imageSrc' : Statics
    }
    ]

    const handleURLChange = (e) =>{
        const ele = e.target
        let Url='';
        Url = ele.attributes.value.value
        console.log(ele.attributes.value.value)
    
        window.location.pathname =Url
        
        
    }

    return(
        <div id='lectures' className='lectures'>
            <h1 className='title'>المحاضرات</h1>
            <ul className='branches-list'>
                {branches.map(obj =>{
                    return (
                        <li onClick={handleURLChange} className='branch' key={obj.EngCode} value={obj.EngCode}>
                            <h2 onClick={handleURLChange} className='branch-name' value={obj.EngCode}>{obj.arbicCode}</h2>
                            <img onClick={handleURLChange} className='branches-img' src={obj.imageSrc} value={obj.EngCode} alt={obj.EngCode}/>
                        </li>)
                })}
            </ul>
        </div>
    )
}

export default Lectures;