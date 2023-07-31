import {useState} from 'react';
import {Link} from "react-router-dom";
import arrowUp from './photos/arrow-up-filled.png'
import LoginBtn from './login'

const SpatialEngineering = ({setVideoId, user, userPayingSystem}) =>{
    // State variable & dictionaries
    const SpatialEngineeringlessons = [
        {
            'name' : ':المحاضرة الأولي',
            'parts' :[
                {
                    'lessonName':'الجزء الاول:التمهيد',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني: معادلة الكرة في الفراغ',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : ':المحاضرة الثانية',
            'parts' :[
                {
                    'lessonName':'الجزء الاول: المتجهات في الفراغ',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : ':المحاضرة الثالثة',
            'parts' :[
                {
                    'lessonName':'الجزء الاول:الضرب القياسي',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الثالثة'
        },
        {
            'name' : ':المحاضرة الرابعة',
            'parts' :[
                {
                    'lessonName':'الجزء الاول: الضرب الاتجاهي',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان الهندسة الفراغية 1'
        },
        {
            'name' : ':المحاضرة الخامسة',
            'parts' :[
                {
                    'lessonName':'الجزء الاول: معادلة الخط المستقيم',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الخامسة'
        },
        {
            'name' : ':المحاضرة السادسة',
            'parts' :[
                {
                    'lessonName':'الجزء الاول: معادلة المستوي',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان الهندسة الفراغية 2 '
        }
    ]
    const[videoDuration, setVideoDuration] = useState([])
    
    // essential functions
    const getIDfromURL = (url)=> {
        const videoID = url.split('v=')[1];
      
        if (videoID !== undefined) {
          return videoID.slice(0, 11);
        }
      
        console.log('The supplied URL is not a valid youtube URL');
        return '';
    }

    // renders
    if(user === null){
        return (<h1 style={{textAlign:'center', marginTop:'200px'}}>
            يرجي تسجيل الدخول
            <br />
            <LoginBtn/>
    </h1>)
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
                >:الهندسة الفراغية</h1>
                {SpatialEngineeringlessons.map((lesson,num) =>{
                    return(
                        <div key={'lesson'+num} className="lesson">
                            <div className='lesson-title'>
                                <h1 className="lecture-name">{lesson.name}</h1>
                                <img className="arrow-div" src={arrowUp} alt="arrow-up"/>
                            </div>
                            <ul className='lesson-parts'>
                                {lesson.parts.map((part,num)=>{
                                    
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
        )
    }
    if(userPayingSystem === 'MPS'){
        return (<h1 style={{textAlign:'center', marginTop:'200px'}}>
            تحت الانشاء
        </h1>);
    }
}

export default SpatialEngineering;