import {useState} from 'react';
import arrowUp from './photos/arrow-up-filled.png'
import LoginBtn from './login'

const SpatialEngineering = ({setVideoId, user, userPayingSystem}) =>{
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
    const addIdToOrigin = (id) =>{
        localStorage.setItem("videoId", id)
        setVideoId(id)
        window.location.pathname = `/Hany-AbdulGawed-platform/lessonView`
    }

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
                                                        <button onClick={() =>{addIdToOrigin(getIDfromURL(part.link))}}  className='lesson-btn'>{part.lessonName}</button>
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
        return(
            <div className='video-player'>
                <div>
                    <iframe title='video' width="800" height="443" type="text/html" src="https://www.youtube.com/embed/9OhPTtoYTFQ?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"></iframe>
                </div>
            </div>

        );
    }
}

export default SpatialEngineering;