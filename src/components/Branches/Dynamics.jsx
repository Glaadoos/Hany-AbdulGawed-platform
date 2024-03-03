/* eslint-disable array-callback-return */
import {useState, Fragment} from 'react';
import {Link} from "react-router-dom";
import arrowUp from '.././photos/arrow-up-filled.png'
import LoginBtn from '../Essential/login'
import * as CodeAPI from '../../API/CodeAPI'
import * as UserAPI from '../../API/UesrApi'
const dayjs  = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const Dynamics = ({setVideoId, user, userPayingSystem, userCodes}) =>{
    // dictionaries & State variable & variables
    const Dynamicslesson = [
        {
            "name":"المحاضرة الأولي",
            "order":"dynamics01",
            "parts":[
                
                {
                    "lessonName":"تفاضل الدوال المتجهة",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=0FhYKMMLCI8",
                    "attachments":{
                        "notebook":"1lfCQcrCUKQruoy3uQhGRDAaWcuUdkKXC",
                        "homework":"1HbHqrA4jq0DpxakP5iobt2jVqLmeRe4d"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiX7zqDgAJbhdXXT8IdIMaxb"
                }
            ],
            "exam":[{"name":" أمتحان المحاضرة الأولي", "link":"https://docs.google.com/forms/d/e/1FAIpQLSet-gejCb6YeZkLBJq_RIerk2eWrc_9JF2tQaHpdE3xLkt8mA/viewform?usp=sf_link"}]
        },
        {
            "name":"المحاضرة الثانية",
            "order":"dynamics02",
            "parts":[
                
                {
                    "lessonName":"تكامل الدوال المتجهة",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=inUnHBeHrGQ",
                    "attachments":{
                        "notebook":"1xQk_L-pflJeuuQ7mpPKEX08TaW1oRSLF",
                        "homework":"1FoGRv5Vfor_E71dUnzGidk-5Jp5wlN6L"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiVrXZcG5SQ-BECURIUurOHq"
                }
            ],
            "exam":[{"name":" أمتحان المحاضرة الثانية", "link":"https://docs.google.com/forms/d/e/1FAIpQLSewUv2jTNql8cFe1PS7j3oNAGERztfEdLqVFhIifeNMI3o91w/viewform?usp=sf_link"}]
        },
        {
            "name":"المحاضرة الثالثة",
            "order":"dynamics03",
            "parts":[
                
                {
                    "lessonName":"كمية الحركة – نيوتن الاول ",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=v7Aq0RmFtXA",
                    "attachments":{
                        "notebook":"1UlEZuQoeF0iHWcOJ82nkpo6jbfSK-kt4",
                        "homework":"1epP0nxe--stAKOlgOyaCPEVrrUWMC0aW"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiU344gm4DALOlVTetm-2ctD"
                }
            ],
            'exam':[{"name":" أمتحان المحاضرة الثالثة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSdbxZKX6Nu3Ay3OWzxDKmmCkztcDG8qd4E59OSWb90j1HqW3w/viewform?usp=sf_link"}]
        }
    ]
    const DynamicsMPS = [
        {
            'name':':الشهر الاول',
            'data':[
                {
                    "name":"المحاضرة الأولي",
                    "order":"dynamics01",
                    "parts":[
                        {
                            "lessonName":"تفاضل الدوال المتجهة",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=0FhYKMMLCI8",
                            "attachments":{
                                "notebook":"1lfCQcrCUKQruoy3uQhGRDAaWcuUdkKXC",
                                "homework":"1HbHqrA4jq0DpxakP5iobt2jVqLmeRe4d"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiX7zqDgAJbhdXXT8IdIMaxb"
                        }
                    ],
                    "exam":[{"name":" أمتحان المحاضرة الأولي", "link":"https://docs.google.com/forms/d/e/1FAIpQLSet-gejCb6YeZkLBJq_RIerk2eWrc_9JF2tQaHpdE3xLkt8mA/viewform?usp=sf_link"}]
                },
                {
                    "name":"المحاضرة الثانية",
                    "order":"dynamics02",
                    "parts":[
                        
                        {
                            "lessonName":"تكامل الدوال المتجهة",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=inUnHBeHrGQ",
                            "attachments":{
                                "notebook":"1xQk_L-pflJeuuQ7mpPKEX08TaW1oRSLF",
                                "homework":"1FoGRv5Vfor_E71dUnzGidk-5Jp5wlN6L"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiVrXZcG5SQ-BECURIUurOHq"
                        }
                    ],
                    "exam":[{"name":" أمتحان المحاضرة الثانية", "link":"https://docs.google.com/forms/d/e/1FAIpQLSewUv2jTNql8cFe1PS7j3oNAGERztfEdLqVFhIifeNMI3o91w/viewform?usp=sf_link"}]
                },
                {
                    "name":"المحاضرة الثالثة",
                    "order":"dynamics03",
                    "parts":[
                        
                        {
                            "lessonName":"كمية الحركة – نيوتن الاول ",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=v7Aq0RmFtXA",
                            "attachments":{
                                "notebook":"1UlEZuQoeF0iHWcOJ82nkpo6jbfSK-kt4",
                                "homework":"1epP0nxe--stAKOlgOyaCPEVrrUWMC0aW"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiU344gm4DALOlVTetm-2ctD"
                        }
                    ],
                    'exam':[{"name":" أمتحان المحاضرة الثالثة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSdbxZKX6Nu3Ay3OWzxDKmmCkztcDG8qd4E59OSWb90j1HqW3w/viewform?usp=sf_link"}]
                }
            ]
        },
        
    ]
    const[exist, setExist] = useState([])
    const[inputValue, setInputValue] = useState([])
    
    
    // time for lectuer to close
    let hours=96;
    
    // Branch Name
    let branch = 'Dynamics'

    // essential functions
    const getIDfromURL = (url)=> {
        const videoID = url.split('v=')[1];
        if (videoID !== undefined) {
            return videoID.slice(0, 11);
        }
    }
    const handleVideoIDChange = (e)=>{
        let homework = e.target.dataset.homework || null;
        let notebook = e.target.dataset.notebook || null;
        setVideoId(e.target.id)
        localStorage.setItem("videoId", e.target.id)
        localStorage.setItem("homework", homework)
        localStorage.setItem("notebook", notebook)
        console.log(e)
    }
    const checkCode = async(code, order)=>{
        let codeexist;
        await Dynamicslesson.map(async(obj) =>{
                                if(obj.order ===order ){
                                    codeexist = await CodeAPI.getSpecific(branch, order, code).then(data => {return(data.codeExist)})
                                    const newArray = exist.filter(arr => arr[0] !== order)
                                    newArray.push([order, codeexist])
                                    setExist(newArray)
                                    if(codeexist === 1 && order.indexOf('revision') === -1){
                                        const deleted = await CodeAPI.UpdataOrderCodes(branch, order, code).then(data => {return(data)});
                                        if(!(deleted.message)){
                                            await UserAPI.updateAvailableCodes(branch,localStorage.getItem("userEmail"), [order, code])
                                            alert(`تم أضافة الكود بنجاح في : ${dayjs().format('D')}/${dayjs().format('MM')} الوقت ${dayjs().format('hh:mm:ss')} \n الكود متاح لثلاث ايام من هذا التاريخ`)
                                            window.location.reload();
                                        }
                                    }else{
                                        const deleted = await CodeAPI.UpdataOrderCodes(branch, order, code).then(data => {return(data)});
                                        if(!(deleted.message)){
                                            await UserAPI.updateAvailableCodes(branch, localStorage.getItem("userEmail"), [order, code])
                                            alert(` تمت اضافة المرجعة  \n  المراجعة مفتوحة دائما`)
                                            window.location.reload();
                                        }
                                    }
                                }
                            })

    }
    const handleChange = (e) =>{
        let input = e.target.value 
        setInputValue(input)
    }
    const handleSubmit = async(e) =>{
        let lessonOrder = e.target.id
        await checkCode(inputValue, lessonOrder)
    }
    const millisecondsToDays = (diff) =>{
        let cd = 24 * 60 * 60 * 1000;
        let ch = 60 * 60 * 1000;
        let d = Math.floor(diff / cd);
        let h = Math.floor( (diff - d * cd) / ch);
        let  m = Math.round( (diff - d * cd - h * ch) / 60000);
        let pad = function(n){ return n < 10 ? '0' + n : n; };
        
        if( m === 60 ){
            h++;
            m = 0;
        }
        if( h === 24 ){
            d++;
            h = 0;
        }
        return [`${d} days`, `${pad(h)} hours`, `${pad(m)} minutes`].join(', ');
    }
    const handleDateChange = (userCodes, order) => {
        if(userCodes.filter(obj => obj.order === order)[0].date !== 'Open'){
            let date = dayjs(userCodes.filter(obj => obj.order === order)[0].date);
            let dataOfClose = dayjs(date.add(hours, 'h')) ;
            let diff = (dataOfClose).diff(dayjs().format())
            return [diff, millisecondsToDays(diff)];
        }else{
            return['Open', 'Open']
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
    if(userPayingSystem === 'LPS' || localStorage.getItem("userPayingSystem") === 'LPS'){
        return(
            <div className="lessons-box">
                <h1 className="title"
                style={{textAlign:'right', marginRight: '2%'}}
                >:الديناميكا</h1>
                {Dynamicslesson.map((lesson,num) =>{
                    if(userCodes){  
                        if(userCodes.filter(obj => obj.order === lesson.order).length === 1){
                            let diff = handleDateChange(userCodes, lesson.order)[0]
                            let finalDate =  handleDateChange(userCodes, lesson.order)[1];
                            
                            return(
                                (diff < 345600000  && diff > 0) || finalDate === 'Open' ? 
                                    <div key={'lesson'+num} className="lesson">
                                        <div className='lesson-title'>
                                            <h1 className="lecture-name">{lesson.name}</h1>
                                            <img className="arrow-div" src={arrowUp} alt="arrow-up"/>
                                            <h4 
                                                style={{margin:'0 0 0 3%', textAlign:'left', width: 'fit-content'}}
                                            >
                                                {finalDate !== 'Open' ? 
                                                    
                                                    <>
                                                        :الوقت المتبقي للمحاضر<br/>
                                                        {finalDate}
                                                    </>
                                                
                                                :
                                                    ('Always Open')
                                            }
                                            </h4>
                                        </div>
                                        <ul className='lesson-parts'>
                                            {lesson.parts.map((part,num)=>{
                                                if(part.lessonName.search('مسائل الملزمة') === -1){
                                                    return(
                                                    <li key={'partObject'+num}>
                                                        <ul className='lesson-part'>
                                                            <li key={'partName'+num}>
                                                            {part.lessonName}
                                                            </li>
                                                            <li key={'partState'+num} >
                                                                <Link className='play-btn' id={getIDfromURL(part.link)} data-notebook={part.attachments.notebook || null} data-homework={part.attachments.homework || null} onClick={handleVideoIDChange} to={'/Hany-AbdulGawed-platform/lessonView'} >  مشاهدة    </Link>
                                                                <button id={getIDfromURL(part.link)} className='lesson-btn' style={{color:'#4bd84b',fontWeight:'bold'}}>  مفتوحة</button>
                                                            </li>
                                                            <li key={part.duration}>
                                                                {part.duration}
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    ); 
                                                }else{
                                                    return(
                                                        part.link !== 'soon' ? 

                                                        <li key={'partObject'+num}>
                                                            <ul className='lesson-part'>
                                                                <li key={'partName'+num}>
                                                                    {part.lessonName}
                                                                </li>
                                                                <li key={'partLink'+num}>
                                                                    <a target='_blank' rel="noreferrer"  style={{textDecoration: 'none'}} href={part.link}>القائمة</a>
                                                                </li>
                                                                </ul>
                                                            </li>
                                                        :
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
                                                    );
                                                }
                                            })}
                                        
                                        {
                                            lesson.exam.map(Exam =>{
                                                return(
                                                    Exam.link ?
                                                        <li key={'examObject'+num}>
                                                            <ul className='lesson-part'>
                                                                <li key={'name'+num}>
                                                                    {Exam.name }
                                                                </li>
                                                                <li key={'examLink'+num}>
                                                                    <a target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} href={Exam.link}>الاختبار</a>
                                                                </li>
                                                            </ul>
                                                        </li>     
                                                        :
                                                        ''
                                                )
                                            })
                                        }
                                        </ul>
                                    </div>
                                :
                                    <div key={'lesson'+num} className="lesson">
                                        <div className='lesson-title'>
                                            <h1 className="lecture-name">{lesson.name}</h1>
                                            <img className="arrow-div" src={arrowUp} alt="arrow-up"/>
                                            <h4 
                                                style={{margin:'0 0 0 3%', textAlign:'left', width: 'fit-content'}}
                                            >
                                                {'المحاضرة مغلقة'}
                                            </h4>
                                        </div>
                                        <ul className='lesson-parts'>
                                            {lesson.parts.map((part,num)=>{
                                                if(part.lessonName.search('مسائل الملزمة') !== -1){
                                                    return(
                                                        <li key={'partObject'+num}>
                                                            <ul className='lesson-part'>
                                                                <li key={'partName'+num}>
                                                                    {part.lessonName}
                                                                </li>
                                                                <li key={'partLink'+num}>
                                                                    <a target='_blank' rel="noreferrer"  style={{textDecoration: 'none'}} href={part.link}>القائمة</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    )
                                                }
                                                
                                            })}
                                            
                                            {
                                                lesson.exam.map(Exam =>{
                                                    return(
                                                        Exam.link ?
                                                            <li key={'examObject'+num}>
                                                                <ul className='lesson-part'>
                                                                    <li key={'name'+num}>
                                                                        {Exam.name }
                                                                    </li>
                                                                    <li key={'examLink'+num}>
                                                                        <a target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} href={Exam.link}>الاختبار</a>
                                                                    </li>
                                                                </ul>
                                                            </li>     
                                                            :
                                                            ''
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                            )
                        }else{
                            return(
                                <Fragment key={'lesson-fragment'+num}>
                                    <div key={'lesson'+num} className="lesson">
                                        <div className='lesson-title'>
                                            <h1 className="lecture-name">{lesson.name}</h1>
                                            <li id={'form'+lesson.order} key={'partInput'+num}>
                                                <form  onSubmit={e => e.preventDefault()}>
                                                    <input
                                                        id={lesson.order}
                                                        className='input-field'
                                                        type="text"
                                                        placehorder="Input code(case sensitive!)"
                                                        onChange={handleChange}
                                                        max='10'
                                                    />
                                                {inputValue.length !== 0 ?
                                                <button id={lesson.order} onClick={handleSubmit} style={{backgroundColor:'white',color:'black',fontWeight:'bold'}} >Check</button>
                                                :
                                                ''}
                                                </form>
                                                
                                            </li>
                                            {exist.map((ele, num) =>{
                                                    if(ele[0] === lesson.order){
                                                        if(ele[1] === 0){
                                                            return(
                                                                <li id='wrong'
                                                                    style={{color:'rgb(99, 2, 2)',fontWeight:'bold', listStyleType: 'none', marginRight:'8vw'}}
                                                                    key={'duration'+num}>
                                                                    كود غير صحيح
                                                                </li>
                                                        )
                                                        }
                                                    }
                                                })}
                                            <img className="arrow-div" src={arrowUp} alt="arrow-up"/>
                                        </div>
                                    </div>
                                    <ul key={'lesson-parts'+num} className='lesson-parts'>
                                        {lesson.parts.map((part,num)=>{
                                            if(part.lessonName.search('مسائل الملزمة') !== -1){
                                                return(
                                                    <li key={'partObject'+num}>
                                                        <ul className='lesson-part'>
                                                            <li key={'partName'+num}>
                                                                {part.lessonName}
                                                            </li>
                                                            <li key={'partLink'+num}>
                                                                <a target='_blank' rel="noreferrer"  style={{textDecoration: 'none'}} href={part.link}>القائمة</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                )
                                            }
                                            
                                        })}
                                        
                                        {
                                            lesson.exam.map(Exam =>{
                                                return(
                                                    Exam.link ?
                                                        <li key={'examObject'+num}>
                                                            <ul className='lesson-part'>
                                                                <li key={'name'+num}>
                                                                    {Exam.name }
                                                                </li>
                                                                <li key={'examLink'+num}>
                                                                    <a target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} href={Exam.link}>الاختبار</a>
                                                                </li>
                                                            </ul>
                                                        </li>     
                                                        :
                                                        ''
                                                )
                                            })
                                        }
                                    </ul>
                                </Fragment>
                            )
                        }
                    }
                })}
            </div>
        );
    }
    if(userPayingSystem === 'MPS' || localStorage.getItem("userPayingSystem") === 'MPS'){
        
        return(
            <div className="lessons-box">
                {DynamicsMPS.map((month) =>{
                    
                        return(
                            <Fragment>
                                <h2 className="title"
                                style={{textAlign:'right', marginRight: '2%'}}
                                >{month.name}</h2>
                                {month.data.map((lesson,num)=>{
                                    if(userCodes){  
                                        if(userCodes.filter(obj => obj.order === lesson.order).length === 1){
                                            let diff = handleDateChange(userCodes, lesson.order)[0]
                                            let finalDate =  handleDateChange(userCodes, lesson.order)[1];
                                            return(
                                                (diff < 345600000  && diff > 0) || finalDate === 'Open' ? 
                                                    <div key={'lesson'+num} className="lesson">
                                                        <div className='lesson-title'>
                                                            <h1 className="lecture-name">{lesson.name}</h1>
                                                            <img className="arrow-div" src={arrowUp} alt="arrow-up"/>
                                                            <h4 
                                                                style={{margin:'0 0 0 3%', textAlign:'left', width: 'fit-content'}}
                                                            >
                                                                {finalDate !== 'Open' ? 
                                                                    
                                                                    <>
                                                                        :الوقت المتبقي للمحاضر<br/>
                                                                        {finalDate}
                                                                    </>
                                                                
                                                                :
                                                                    ('Always Open')
                                                            }
                                                            </h4>
                                                        </div>
                                                        <ul className='lesson-parts'>
                                                            {lesson.parts.map((part,num)=>{
                                                                if(part.lessonName.search('مسائل الملزمة') === -1){
                                                                    return(
                                                                    <li key={'partObject'+num}>
                                                                        <ul className='lesson-part'>
                                                                            <li key={'partName'+num}>
                                                                            {part.lessonName}
                                                                            </li>
                                                                            <li key={'partState'+num} >
                                                                                <Link className='play-btn' id={getIDfromURL(part.link)} data-notebook={part.attachments.notebook || null} data-homework={part.attachments.homework || null} onClick={handleVideoIDChange} to={'/Hany-AbdulGawed-platform/lessonView'} >  مشاهدة    </Link>
                                                                                <button id={getIDfromURL(part.link)} className='lesson-btn' style={{color:'#4bd84b',fontWeight:'bold'}}>  مفتوحة</button>
                                                                            </li>
                                                                            <li key={part.duration}>
                                                                                {part.duration}
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    ); 
                                                                }else{
                                                                    return(
                                                                        part.link !== 'soon' ? 
                
                                                                        <li key={'partObject'+num}>
                                                                            <ul className='lesson-part'>
                                                                                <li key={'partName'+num}>
                                                                                    {part.lessonName}
                                                                                </li>
                                                                                <li key={'partLink'+num}>
                                                                                    <a target='_blank' rel="noreferrer"  style={{textDecoration: 'none'}} href={part.link}>القائمة</a>
                                                                                </li>
                                                                                </ul>
                                                                            </li>
                                                                        :
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
                                                                    );
                                                                }
                                                            })}
                                                        
                                                        {
                                                            lesson.exam.map(Exam =>{
                                                                return(
                                                                    Exam.link && Exam.name !== ''?
                                                                        <li key={'examObject'+Exam.name}>
                                                                            <ul className='lesson-part'>
                                                                                <li key={'name'+num}>
                                                                                    {Exam.name }
                                                                                </li>
                                                                                <li key={'examLink'+Exam.name}>
                                                                                    <a target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} href={Exam.link}>الاختبار</a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>     
                                                                        :
                                                                        ''
                                                                )
                                                            })
                                                        }
                                                        </ul>
                                                    </div>
                                                :
                                                    <div key={'lesson'+num} className="lesson">
                                                        <div className='lesson-title'>
                                                            <h1 className="lecture-name">{lesson.name}</h1>
                                                            <img className="arrow-div" src={arrowUp} alt="arrow-up"/>
                                                            <h4 
                                                                style={{margin:'0 0 0 3%', textAlign:'left', width: 'fit-content'}}
                                                            >
                                                                {'المحاضرة مغلقة'}
                                                            </h4>
                                                        </div>
                                                        <ul className='lesson-parts'>
                                                            {lesson.parts.map((part,num)=>{
                                                                if(part.lessonName.search('مسائل الملزمة') !== -1){
                                                                    return(
                                                                        <li key={'partObject'+num}>
                                                                            <ul className='lesson-part'>
                                                                                <li key={'partName'+num}>
                                                                                    {part.lessonName}
                                                                                </li>
                                                                                <li key={'partLink'+num}>
                                                                                    <a target='_blank' rel="noreferrer"  style={{textDecoration: 'none'}} href={part.link}>القائمة</a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    )
                                                                }
                                                                
                                                            })}
                                                            
                                                            {
                                                                lesson.exam.map(Exam =>{
                                                                    return(
                                                                        Exam.link ?
                                                                            <li key={'examObject'+Exam.name}>
                                                                                <ul className='lesson-part'>
                                                                                    <li key={'name'+Exam.name}>
                                                                                        {Exam.name }
                                                                                    </li>
                                                                                    <li key={'examLink'+Exam.name}>
                                                                                        <a target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} href={Exam.link}>الاختبار</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>     
                                                                            :
                                                                            ''
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                            )
                                        }else{
                                            return(
                                                <Fragment key={'lesson-fragment'+num}>
                                                    <div key={'lesson'+num} className="lesson">
                                                        <div className='lesson-title'>
                                                            <h1 className="lecture-name">{lesson.name}</h1>
                                                            <li id={'form'+lesson.order} key={'partInput'+num}>
                                                                <form  onSubmit={e => e.preventDefault()}>
                                                                    <input
                                                                        id={lesson.order}
                                                                        className='input-field'
                                                                        type="text"
                                                                        placehorder="Input code(case sensitive!)"
                                                                        onChange={handleChange}
                                                                        max='10'
                                                                    />
                                                                {inputValue.length !== 0 ?
                                                                <button id={lesson.order} onClick={handleSubmit} style={{backgroundColor:'white',color:'black',fontWeight:'bold'}} >Check</button>
                                                                :
                                                                ''}
                                                                </form>
                                                                
                                                            </li>
                                                            {exist.map((ele, num) =>{
                                                                    if(ele[0] === lesson.order){
                                                                        if(ele[1] === 0){
                                                                            return(
                                                                                <li id='wrong'
                                                                                    style={{color:'rgb(99, 2, 2)',fontWeight:'bold', listStyleType: 'none', marginRight:'8vw'}}
                                                                                    key={'duration'+num}>
                                                                                    كود غير صحيح
                                                                                </li>
                                                                        )
                                                                        }
                                                                    }
                                                                })}
                                                            <img className="arrow-div" src={arrowUp} alt="arrow-up"/>
                                                        </div>
                                                        <ul key={'lesson-parts'+num} className='lesson-parts'>
                                                            {lesson.parts.map((part,num)=>{
                                                                if(part.lessonName.search('مسائل الملزمة') !== -1){
                                                                    return(
                                                                        <li key={'partObject'+num}>
                                                                            <ul className='lesson-part'>
                                                                                <li key={'partName'+num}>
                                                                                    {part.lessonName}
                                                                                </li>
                                                                                <li key={'partLink'+num}>
                                                                                    <a target='_blank' rel="noreferrer"  style={{textDecoration: 'none'}} href={part.link}>القائمة</a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    )
                                                                }
                                                                
                                                            })}
                                                            
                                                            {
                                                                lesson.exam.map(Exam =>{
                                                                    return(
                                                                        Exam.link ?
                                                                            <li key={'examObject'+Exam.name}>
                                                                                <ul className='lesson-part'>
                                                                                    <li key={'name'+Exam.name}>
                                                                                        {Exam.name}
                                                                                    </li>
                                                                                    <li key={'examLink'+Exam.name}>
                                                                                        <a target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} href={Exam.link}>الاختبار</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>     
                                                                            :
                                                                            ''
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Fragment>
                                            )
                                        }
                                    }
                                })}
                            </Fragment>
                        );
                })
                }
            </div>
        );
    }
    if(localStorage.getItem("userPayingSystem") === 'null' || localStorage.getItem("userPayingSystem") === 'none'){
        return (<h1 style={{textAlign:'center', marginTop:'200px'}}>
            نظام الاشتراك غير محدد
            <br/>
            يرجي اعادة تحميل الصفحة او تحديد نظام الاشتراك
        </h1>)
    }
}

export default Dynamics;