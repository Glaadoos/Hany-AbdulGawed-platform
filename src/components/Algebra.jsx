import {useState} from 'react';
import {Link} from "react-router-dom";
import arrowUp from './photos/arrow-up-filled.png'
import LoginBtn from './login'
const Algebra = ({setVideoId, durationFunction, user, userPayingSystem}) =>{
    
    const Algebralessons = [
        {
            'name' : 'المحاضرة الاولي - ذات الحدين',
            'parts' :[
                {
                    'lessonName':'تمهيد',
                    'link':'https://www.youtube.com/watch?v=9UBMAJl3zwc&ab_channel=HanyAbdlgawad',
                },
                {
                    'lessonName':'الجزء الاول',
                    'link':'https://www.youtube.com/watch?v=x4hPH5Wreyk',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'link':'https://www.youtube.com/watch?v=E2MN8baiwOY&ab_channel=HanyAbdlgawad',
                },
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - ذات الحدين',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'link':'https://www.youtube.com/watch?v=p2aDs2ddmgE&ab_channel=HanyAbdlgawad',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'link':'https://www.youtube.com/watch?v=q1Jcq314iFU&ab_channel=HanyAbdlgawad',
                },
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : 'المحاضرة الثالثة - ذات الحدين',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان ذات الحدين'
        },
        {
            'name' : 'المحاضرة الاولي - الاعداد المركبة',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - الاعداد المركبة',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : 'المحاضرة الثالثة - الاعداد المركبة',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان الاعداد المركبة'
        },
        {
            'name' : 'المحاضرة الاولي - التباديل والتوافيق',
            'parts' :[
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - التباديل والتوافيق',
            'parts' :[
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : 'المحاضرة الثالثة - التباديل والتوافيق',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان التباديل والتوافيق'
        },
        {
            'name' : 'المحاضرة الاولي - المحدادت',
            'parts' :[
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - المحدادت',
            'parts' :[
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : 'المحاضرة الثالثة - المحدادت',
            'parts' :[
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحدادت'
        },
        {
            'name' : 'المحاضرة الاولي - المصفوفات',
            'parts' :[
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - المصفوفات',
            'parts' :[
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المصفوفات'
        },

    ]
    const[videoDuration, setVideoDuration] = useState([])

    
    const getIDfromURL = (url)=> {
        const videoID = url.split('v=')[1];
      
        if (videoID !== undefined) {
          return videoID.slice(0, 11);
        }
      
        console.log('The supplied URL is not a valid youtube URL');
        return '';
    }
    const getDuration = async(id)=>{
        /* await durationFunction(id).then((res) => {
             var match = res.items[0].contentDetails.duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    
            match = match.slice(1).map((x)=> {
                if (x != null) {
                    return x.replace(/\D/, '');
                }
                return x;
            });
             var hours = (parseInt(match[0]) || 0);
            var minutes = (parseInt(match[1]) || 0);
            var seconds = (parseInt(match[2]) || 0);
            // console.log(videoDuration.filter(video => video.id=id))
            return([...videoDuration, {"id":id, "duration":`${hours}:${minutes}:${seconds}`}])
        }) */
        
        var hours = Math.floor(Math.random()* 10);
        var minutes = Math.floor(Math.random()* 10);
        var seconds = Math.floor(Math.random()* 10);
        
        const arr = videoDuration.filter(video =>video.id ===id).length >=1 ? false:true
        if(arr){
            setVideoDuration([...videoDuration, {"id":id, "duration":`${hours}:${minutes}:${seconds}`}])
        }

    }
    const fetchDuration = async(link)=> {
        if(link !== 'soon'){
            let id = await getIDfromURL(link)
            getDuration(id)
        }
    }

    if(user === null){
        return (
            <h1 style={{textAlign:'center', marginTop:'200px'}}>
                يرجي تسجيل الدخول
                <br />
                <LoginBtn/>
            </h1>
        )
    }
    if(userPayingSystem === null){
        return (<h1 style={{textAlign:'center', marginTop:'200px'}}>
            نظام الاشتراك غير محدد
            <br/>
            يرجي اعادة تحميل الصفحة او تحديد نظام الاشتراك
        </h1>)
    }
    if(userPayingSystem === 'LPS'){
        return(
            <div className="lessons-box">
                <h1 className="title"
                style={{textAlign:'right'}}
                >:الجبر</h1>
                {Algebralessons.map((lesson,num) =>{
                    return(
                        <div key={'lesson'+num} className="lesson">
                            <div className='lesson-title'>
                                <h1 className="lecture-name">{lesson.name}</h1>
                                <img className="arrow-div" src={arrowUp} alt="arrow-up"/>
                            </div>
                            <ul className='lesson-parts'>
                                {lesson.parts.map((part,num)=>{
                                    fetchDuration(part.link) 
                                    return(
                                        part.link === 'soon' ?
                                            <li key={'partObject'+num}>
                                                <ul className='lesson-part'>
                                                    <li key={'partName'+num}>{part.lessonName}</li>
                                                    <li
                                                        style={{color:'#64ec64',fontWeight:'bold'}}
                                                        key={'duration'+num}>
                                                        ستتوفر قريبا
                                                    </li>
                                                </ul>
                                            </li>
                                        :
                                            <li key={'partObject'+num}>
                                                <ul className='lesson-part'>
                                                    <li key={'partName'+num}>
                                                        <Link to={'/Hany-AbdulGawed-platform/lessonView'}><button className='lesson-btn'>{part.lessonName}</button></Link>
                                                    </li>
                                                    <li key={videoDuration}>
                                                        {videoDuration.filter(video => video.id ===getIDfromURL(part.link)).map(video =>  video.duration)}
                                                    </li>
                                                </ul>
                                            </li>
                                    )   
                                })}
                                {<li key={'exam'+num}>
                                    {lesson.exam}
                                </li>}
                            </ul>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Algebra;

/* 
code with fade in out

    import {useState} from 'react';
import {Link} from "react-router-dom";
import arrowUp from './photos/arrow-up-filled.png'
import LoginBtn from './login'
const Algebra = ({setVideoId, durationFunction, user, userPayingSystem}) =>{
    
    const Algebralessons = [
        {
            'name' : 'المحاضرة الاولي - ذات الحدين',
            'parts' :[
                {
                    'lessonName':'تمهيد',
                    'link':'https://www.youtube.com/watch?v=9UBMAJl3zwc&ab_channel=HanyAbdlgawad',
                },
                {
                    'lessonName':'الجزء الاول',
                    'link':'https://www.youtube.com/watch?v=x4hPH5Wreyk',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'link':'https://www.youtube.com/watch?v=E2MN8baiwOY&ab_channel=HanyAbdlgawad',
                },
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'showParts':false,
            'exam' : 'امتحان المحاضرة الاولي',
            
        },
        {
            'name' : 'المحاضرة الثانية - ذات الحدين',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'link':'https://www.youtube.com/watch?v=p2aDs2ddmgE&ab_channel=HanyAbdlgawad',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'link':'https://www.youtube.com/watch?v=q1Jcq314iFU&ab_channel=HanyAbdlgawad',
                },
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'showParts':false,
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : 'المحاضرة الثالثة - ذات الحدين',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'showParts':false,
            'exam' : 'امتحان ذات الحدين'
        },
        {
            'name' : 'المحاضرة الاولي - الاعداد المركبة',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'showParts':false,
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - الاعداد المركبة',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'showParts':false,
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : 'المحاضرة الثالثة - الاعداد المركبة',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'showParts':false,
            'exam' : 'امتحان الاعداد المركبة'
        },
        {
            'name' : 'المحاضرة الاولي - التباديل والتوافيق',
            'parts' :[
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'showParts':false,
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - التباديل والتوافيق',
            'parts' :[
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'showParts':false,
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : 'المحاضرة الثالثة - التباديل والتوافيق',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'showParts':false,
            'exam' : 'امتحان التباديل والتوافيق'
        },
        {
            'name' : 'المحاضرة الاولي - المحدادت',
            'parts' :[
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'showParts':false,
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - المحدادت',
            'parts' :[
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'showParts':false,
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : 'المحاضرة الثالثة - المحدادت',
            'parts' :[
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'showParts':false,
            'exam' : 'امتحان المحدادت'
        },
        {
            'name' : 'المحاضرة الاولي - المصفوفات',
            'parts' :[
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'showParts':false,
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - المصفوفات',
            'parts' :[
                {
                    'lessonName':'أوبن بوك',
                    'link':'soon',
                }
            ],
            'showParts':false,
            'exam' : 'امتحان المصفوفات'
        },

    ]
    const[videoDuration, setVideoDuration] = useState([])
    const [show, setshow] = useState(true)
    const [updata, setUpdata] = useState(false)

    const getIDfromURL = (url)=> {
        const videoID = url.split('v=')[1];
      
        if (videoID !== undefined) {
          return videoID.slice(0, 11);
        }
      
        console.log('The supplied URL is not a valid youtube URL');
        return '';
    }
    const getDuration = async(id)=>{
             await durationFunction(id).then((res) => {
             var match = res.items[0].contentDetails.duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    
            match = match.slice(1).map((x)=> {
                if (x != null) {
                    return x.replace(/\D/, '');
                }
                return x;
            });
             var hours = (parseInt(match[0]) || 0);
            var minutes = (parseInt(match[1]) || 0);
            var seconds = (parseInt(match[2]) || 0);
            // console.log(videoDuration.filter(video => video.id=id))
            return([...videoDuration, {"id":id, "duration":`${hours}:${minutes}:${seconds}`}])
        }) 
        
        var hours = Math.floor(Math.random()* 10);
        var minutes = Math.floor(Math.random()* 10);
        var seconds = Math.floor(Math.random()* 10);
        
        const arr = videoDuration.filter(video =>video.id ===id).length >=1 ? false:true
        if(arr){
            setVideoDuration([...videoDuration, {"id":id, "duration":`${hours}:${minutes}:${seconds}`}])
        }

    }
    const fetchDuration = async(link)=> {
        if(link !== 'soon'){
            let id = await getIDfromURL(link)
            getDuration(id)
        }
    }
    const handelClick = (e)=> {
        Algebralessons.map(lesson => {
            if(lesson.name ===e.target.innerText){
                // console.log(Algebralessons)
                setUpdata(lesson.showParts)
                return lesson.showParts = !lesson.showParts
            }
        })
    }

    // console.log(show)
    if(user === null){
        return (
            <h1 style={{textAlign:'center', marginTop:'200px'}}>
                يرجي تسجيل الدخول
                <br />
                <LoginBtn/>
            </h1>
        )
    }
    if(userPayingSystem === null){
        return (<h1 style={{textAlign:'center', marginTop:'200px'}}>
            نظام الاشتراك غير محدد
            <br/>
            يرجي اعادة تحميل الصفحة او تحديد نظام الاشتراك
        </h1>)
    }
    if(userPayingSystem === 'LPS'){
        return(
            <div className="lessons-box">
                <h1 className="title"
                style={{textAlign:'right'}}
                >:الجبر</h1>
                {Algebralessons.map((lesson,num) =>{
                    return(
                        <div id={lesson.name} key={'lesson'+num} className="lesson">
                            <div onClick={handelClick} className='lesson-title'>
                                <h1 className="lecture-name">{lesson.name}</h1>
                                <img style={updata?{rotate: '180deg'}:{rotate: '0deg'}} className="arrow-div" src={arrowUp} alt="arrow-up"/>
                            </div>
                            {lesson.showParts === true?
                                <ul className='lesson-parts'>
                                {lesson.parts.map((part,num)=>{
                                    fetchDuration(part.link) 
                                    return(
                                        part.link === 'soon' ?
                                            <li key={'partObject'+num}>
                                                <ul className='lesson-part'>
                                                    <li key={'partName'+num}>{part.lessonName}</li>
                                                    <li
                                                        style={{color:'#64ec64',fontWeight:'bold'}}
                                                        key={'duration'+num}>
                                                        ستتوفر قريبا
                                                    </li>
                                                </ul>
                                            </li>
                                        :
                                            <li key={'partObject'+num}>
                                                <ul className='lesson-part'>
                                                    <li key={'partName'+num}>
                                                        <Link to={'/Hany-AbdulGawed-platform/lessonView'}><button className='lesson-btn'>{part.lessonName}</button></Link>
                                                    </li>
                                                    <li key={videoDuration}>
                                                        {videoDuration.filter(video => video.id ===getIDfromURL(part.link)).map(video =>  video.duration)}
                                                    </li>
                                                </ul>
                                            </li>
                                    )   
                                })}
                                {<li key={'exam'+num}>
                                    {lesson.exam}
                                </li>}
                                </ul>
                            :
                                show
                            }
                        </div>
                    )
                })}
            </div>
        );
    }
}

*/