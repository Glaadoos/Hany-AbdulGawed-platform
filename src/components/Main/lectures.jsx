import * as React from 'react';
import {Link} from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';


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
    return(
        <div id='lectures' className='lectures'>
            <h1 className='title'>المحاضرات</h1>
            <Grid container spacing={2} columns={12}>
                {branches.map(obj =>{
                    return (
                        (obj.EngCode === 'Algebra') ?
                        <Grid xs={4} className={(obj.EngCode + '-branch' )} key={obj.EngCode}>
                            <Link 
                                style={{marginBottom:'10px'}}  
                                to={'/Hany-AbdulGawed-platform/'+obj.EngCode} className='branch-name' value={obj.EngCode}
                             >{obj.arbicCode}</Link>
                            <Link to={'/Hany-AbdulGawed-platform/'+obj.EngCode}>
                                <div
                                    style={{backgroundImage: `url('${obj.imageSrc}')`}}  
                                    className='branches-img' /* src={obj.imageSrc} */ 
                                ></div>
                             </Link>
                        </Grid>
                         :
                        <Grid xs={4} className='branch' key={obj.EngCode}>
                            <Link to={'/Hany-AbdulGawed-platform/'+obj.EngCode} className='branch-name' value={obj.EngCode}>{obj.arbicCode}</Link>
                            <Link to={'/Hany-AbdulGawed-platform/'+obj.EngCode}>
                                <div
                                    style={{backgroundImage: `url('${obj.imageSrc}')`, height:'150px'}}  
                                    className='branches-img' /* src={obj.imageSrc} */ 
                                ></div>
                             </Link>
                        </Grid>


                        
                            
                    )
                    })}
            </Grid>
        </div>
    )
}

export default Lectures;
