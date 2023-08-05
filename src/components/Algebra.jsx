import {useState} from 'react';
import {Link} from "react-router-dom";
import arrowUp from './photos/arrow-up-filled.png'
import LoginBtn from './login'

const Algebra = ({setVideoId, durationFunction, user, userPayingSystem}) =>{

    // State variable & dictionaries
    const Algebralessons =[
        {
            'name' : 'المحاضرة الاولي - ذات الحدين',
            'parts' :[
                {
                    'lessonName':'تمهيد',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=9UBMAJl3zwc&ab_channel=HanyAbdlgawad',
                    'duration':'0:12:47',
                    'codes':
                        ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo']
                },
                {
                    'lessonName':'الجزء الاول',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=x4hPH5Wreyk',
                    'duration':'1:23:5',
                    'codes':['iwfkhfsb', '9YYiizh', 'zfME@YOa', 'wE46NF9V', '4O$gkRvm', 'wc#r3pGP', 'nePeFQcu', '82WsqB@D', 'J7Bqjr7', '#wW8oy89', 'fZQ7DWF1', 'XPFM1#sR', 'PrlzVe33', 'pqc3b8Up', 'HxyVaqyS', '#GrJ7Mko', 'oOEBM#yu', 'XoadOoc2', 'e0bsSi1c', '1gKu#Wf', 'nQMPe6Eo', 'z0TzRvG@', '95p9gDKD', 'aWBdI3G', 'Nxw4lWGf', 'yPt8dIqh', 'jI@Clx#2', '6yEE6pgk', 'u4raH13P', 'S@faq#j', 'MEGeLQud', 'DRTRZhk@', 'Yfhm6jw0', 'jSuzoWh6', 'r8c4Vb1x', 'hJlt0E56', 'QCJEkUg', 'N0Xbk0g', 'x1nqrXkm', 'zo1smghb', 'V$7mQaR2', 'PK$q9rMI', 'wMOoH2KJ', 'jRnTi#ti', 'd$zIoBun', 'jcQ186m', 'o5t6LiFh', '4hJTj9z1', 'xmEHk7vC', 'wSOO7Tg5', 'sPUO7muT', 'cZ@FszkJ', 'itRejTx3', 'BJBGF@@e', 'oG@VDrYS', 'drtDCGTj', 'iyvv5O#', 'X#QUbbi5', 'yrrYqMk2', 'MxFSVeI']
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=E2MN8baiwOY&ab_channel=HanyAbdlgawad',
                    'duration':'0:51:56',
                    'codes':['ZRYR0skE', 'Jo5CC#il', '5mWX1lug', '$ufUve2', 'tPSncOnt', '$KvMyXjx', 'jDs1Mqz0', 'q28p$#aX', 'yV8EKT', 'ICeksS1c', 'ZqNLylB', '@yE9pLv', 'qM7olk8I', '7ypyuDDh', 'EXa29raq', '3wDQrtlL', 'MhvZZdHm', '6UFGgU$T', '26NwzOOl', 'weK$yGrk', 'ZUjJng#2', 'CXFoGNtY', '@LtDXVkE', 'IfriEvsN', 'UPolcsWy', 'YfcThaiu', 'X7LjSogT', 'pctgGvZh', 'N4J#Esta', 'sejw9BmV', 'ylbz$yYq', 'lR88Y5Up', 'KMr4Cv2', 'DqZcddv2', 'O6YSuqNq', '#bzI9MM', 'K2y3SLNb', 'BIPlrVG8', 'JBi2CZrh', 'QnrbWHco', 'Eifl@r7Q', 'bO5cYojV', '99S@J1uZ', 'Od$q1Tac', 'q@RspgWC', 'QWgoK92V', 'vJt@i5Hb', 'LTacVJae', 'Jw3s#3$T', 'KhQTJ5y2', 'esy6v0#8', 'pW9vmg0j', 'ZLZ6ptpc', 'K0e6q87h', 'ClFhftbX', 'qTZV2KYX', 'XhZVJFzx', 'tlJiomqd', 'QBZZ3d1g', 'Rh$#d#EB']
                },
                {
                    'lessonName':'أوبن بوك',
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=p2aDs2ddmgE&ab_channel=HanyAbdlgawad',
                    'duration':'0:15:22',
                    'codes':['JugSKpPy', 'XfgUZYV5', 'HZeX#Ls9', 'J0eUUpv', 'cYfluL0j', 'HdaBzKv5', 'otoU0LYs', 'y5x9aB@v', 'nHjgTR9z', '#TceYSSM', 'Faqi4jgS', 'G6H01Rlg', 'CaPL$KKS', 'PmECYjt7', 'UDlRd0D', 'obNBCMkp', 'OcGCsIfU', '$PRcSqx', '#i3qSjYR', '7mtepW0#', 'baywzW', '4SMCJu0', 'DRR5RZr', 'jzv910XX', 'HF3hkpaE', 'v@nouJzc', 'fUTTD4q@', 'TCghpERT', 'F6vxtanY', 'LS6D8OJ', 'JHxDjhxa', '$@#LHmjd', 'QctnDt7E', 'Xv9lsdUR', '4@#FzoIB', 'HdjOgiYo', 'c@Wy3I5', '9nrOY@#3', 'Pc21#uFN', 'shOj6udk', 'LlfG3MxO', 'CKxX0#QB', 'ZG9N63Eg', 'VtuMQbM9', 'lEm9g9W', 'iLj4bX2J', 'bNEFVC0', 'UT2CWEt', 'wkb7qRix', '@HIzEf40', 'XCOzEXxm', '4y6bEZwP', 'Qm142x22', 'Gz1wCDdp', 'Yfc4cs15', 'hxWXINI9', 'ufJwlx$', 'pYvmSkF', 'yG6NMYeU', 'EtgoSZcn']
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=q1Jcq314iFU&ab_channel=HanyAbdlgawad',
                    'duration':'1:20:59',
                    'codes':['KLiKnM4Z', 'UzXYnojX', 'mEXoDqZ', '77r1#e', 'vjiqv2g0', 'xhqvQNdZ', 'qOXhk1s', '76Z1HGd#', 'FNppY4Jn', 'FqjP3R7', 'hxhZ2XYJ', '1Y4w3Je', '$FaOyREz', 'CM5f1XFN', 'eNc0MXEP', '6Q2$ZZCb', 'mSCOLV9l', '4cxipwIw', 'H6bppf$', 'Jb9DRp1a', 'Sz1dy4gW', 'qN82r84G', 'F#Y7rTcc', 'wQDxwUT', 'QL54l9Pa', 'gwefXvyQ', 'BSSY1gV@', 'OVb2Zik5', 'S8uJ4pgr', 'rVVXhRd', '1s@Q#GlV', 'I3vj3#3u', 'F#j8nYp', '3YvHes23', '@EJ9WUE', 'YBftzcFD', 'voX4QLg@', 'mXoMI7pM', '59vO#4hX', '9y1GJb$u', 'hbPqdEtX', '$34kR1zz', '5587iVgx', '22#ugC', 'lFE152eZ', 'e5UpTqlJ', 'EFrcNW2P', '0zjnInTY', 'ssq208#9', 'wTOTkEsl', 'V5CQ5qnU', 'D7R2Sdfu', 'vEqjwojo', 'vwKaHr0$', 'T5prGlrK', 'h0o8WGwD', 'xSjY6USm', 'Eyf98Vgk', '4z4P9fT@', 'cbpV95y']
                },
                {
                    'lessonName':'أوبن بوك',
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المصفوفات'
        },
    ]
    const[refresh, setRefresh] = useState(true)
    const[show, setShow] = useState([])
    const[inputValue, setInputValue] = useState([])
    // essential functions
    const getIDfromURL = (url)=> {
        const videoID = url.split('v=')[1];
      
        if (videoID !== undefined) {
          return videoID.slice(0, 11);
        }
    }
    const handleVideoIDChange = (e)=>{
        // console.log(e.target.id)
        setVideoId(e.target.id)
        localStorage.setItem("videoId", e.target.id)
    }
    const checkCode = (code, id)=>{

        let arr;
        Algebralessons.map(obj =>{
                                obj.parts.map(part =>{
                                    if(getIDfromURL(part.link) ===id){
                                        arr = part.codes
                                    }
                                })
                            })

        let index = arr.findIndex(ele => ele ===code)
        if(index === -1){
            return false;
        }else{
            return true;
        }
    }
    const handleChange = (e) =>{
        let input = e.target.value 
        setInputValue(input)
    }
    const handleSubmit = (e) =>{
        let videoId = e.target.id
        let codeExist = checkCode(inputValue, videoId)
        if(codeExist){
            setShow([...show ,[videoId, codeExist]])
            document.getElementById(`form${videoId}`).remove()
            setRefresh(!refresh)
        }
    }
    // renders
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
                                                    {part.lessonName}
                                                    </li>
                                                    <li id={'form'+getIDfromURL(part.link)} key={'partInput'+num}>
                                                        <form>
                                                            <input
                                                                id={getIDfromURL(part.link)}
                                                                className='input-field'
                                                                type="text"
                                                                placeholder="Input code(case sensitive!)"
                                                                onChange={handleChange}
                                                                max='10'
                                                            />
                                                            <button id={getIDfromURL(part.link)} onClick={handleSubmit} style={{backgroundColor:'white',color:'black',fontWeight:'bold'}} >Check</button>
                                                        </form>
                                                    </li>
                                                    {show.map(arr =>{
                                                            if(arr[0] === getIDfromURL(part.link)){
                                                                return(
                                                                <li key={'partState'+num} >
                                                                    <Link className='play-btn' id={getIDfromURL(part.link)} onClick={handleVideoIDChange} to={'/Hany-AbdulGawed-platform/lessonView'} >  مشاهدة    </Link>
                                                                    <button id={getIDfromURL(part.link)} className='lesson-btn' style={{color:'#4bd84b',fontWeight:'bold'}}>  مفتوحة</button>
                                                                </li>)
                                                            }
                                                    })}
                                                    <li key={part.duration}>
                                                        {part.duration}
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
    if(userPayingSystem === 'MPS' || localStorage.getItem("userPayingSystem") === 'MPS'){
        return (<h1 style={{textAlign:'center', marginTop:'200px'}}>
            تحت الانشاء
        </h1>)
    }
    if(localStorage.getItem("userPayingSystem") === 'null' || localStorage.getItem("userPayingSystem") === 'none'){
        return (<h1 style={{textAlign:'center', marginTop:'200px'}}>
            نظام الاشتراك غير محدد
            <br/>
            يرجي اعادة تحميل الصفحة او تحديد نظام الاشتراك
        </h1>)
    }
}

export default Algebra;

/* 
    [
        {
            'name' : 'المحاضرة الاولي - ذات الحدين',
            'lessonName':'تمهيد',
            'codes':['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo']
        },
        {
            'name' : 'المحاضرة الاولي - ذات الحدين',
            'lessonName':'الجزء الاول',
            'codes':['iwfkhfsb', '9YYiizh', 'zfME@YOa', 'wE46NF9V', '4O$gkRvm', 'wc#r3pGP', 'nePeFQcu', '82WsqB@D', 'J7Bqjr7', '#wW8oy89', 'fZQ7DWF1', 'XPFM1#sR', 'PrlzVe33', 'pqc3b8Up', 'HxyVaqyS', '#GrJ7Mko', 'oOEBM#yu', 'XoadOoc2', 'e0bsSi1c', '1gKu#Wf', 'nQMPe6Eo', 'z0TzRvG@', '95p9gDKD', 'aWBdI3G', 'Nxw4lWGf', 'yPt8dIqh', 'jI@Clx#2', '6yEE6pgk', 'u4raH13P', 'S@faq#j', 'MEGeLQud', 'DRTRZhk@', 'Yfhm6jw0', 'jSuzoWh6', 'r8c4Vb1x', 'hJlt0E56', 'QCJEkUg', 'N0Xbk0g', 'x1nqrXkm', 'zo1smghb', 'V$7mQaR2', 'PK$q9rMI', 'wMOoH2KJ', 'jRnTi#ti', 'd$zIoBun', 'jcQ186m', 'o5t6LiFh', '4hJTj9z1', 'xmEHk7vC', 'wSOO7Tg5', 'sPUO7muT', 'cZ@FszkJ', 'itRejTx3', 'BJBGF@@e', 'oG@VDrYS', 'drtDCGTj', 'iyvv5O#', 'X#QUbbi5', 'yrrYqMk2', 'MxFSVeI']
        },
        {
            'name' : 'المحاضرة الاولي - ذات الحدين',
            'lessonName':'الجزء الثاني',
            'codes':['ZRYR0skE', 'Jo5CC#il', '5mWX1lug', '$ufUve2', 'tPSncOnt', '$KvMyXjx', 'jDs1Mqz0', 'q28p$#aX', 'yV8EKT', 'ICeksS1c', 'ZqNLylB', '@yE9pLv', 'qM7olk8I', '7ypyuDDh', 'EXa29raq', '3wDQrtlL', 'MhvZZdHm', '6UFGgU$T', '26NwzOOl', 'weK$yGrk', 'ZUjJng#2', 'CXFoGNtY', '@LtDXVkE', 'IfriEvsN', 'UPolcsWy', 'YfcThaiu', 'X7LjSogT', 'pctgGvZh', 'N4J#Esta', 'sejw9BmV', 'ylbz$yYq', 'lR88Y5Up', 'KMr4Cv2', 'DqZcddv2', 'O6YSuqNq', '#bzI9MM', 'K2y3SLNb', 'BIPlrVG8', 'JBi2CZrh', 'QnrbWHco', 'Eifl@r7Q', 'bO5cYojV', '99S@J1uZ', 'Od$q1Tac', 'q@RspgWC', 'QWgoK92V', 'vJt@i5Hb', 'LTacVJae', 'Jw3s#3$T', 'KhQTJ5y2', 'esy6v0#8', 'pW9vmg0j', 'ZLZ6ptpc', 'K0e6q87h', 'ClFhftbX', 'qTZV2KYX', 'XhZVJFzx', 'tlJiomqd', 'QBZZ3d1g', 'Rh$#d#EB']
        },
        {
            'name' : 'المحاضرة الثانية - ذات الحدين',
            'lessonName':'الجزء الاول',
            'codes':['JugSKpPy', 'XfgUZYV5', 'HZeX#Ls9', 'J0eUUpv', 'cYfluL0j', 'HdaBzKv5', 'otoU0LYs', 'y5x9aB@v', 'nHjgTR9z', '#TceYSSM', 'Faqi4jgS', 'G6H01Rlg', 'CaPL$KKS', 'PmECYjt7', 'UDlRd0D', 'obNBCMkp', 'OcGCsIfU', '$PRcSqx', '#i3qSjYR', '7mtepW0#', 'baywzW', '4SMCJu0', 'DRR5RZr', 'jzv910XX', 'HF3hkpaE', 'v@nouJzc', 'fUTTD4q@', 'TCghpERT', 'F6vxtanY', 'LS6D8OJ', 'JHxDjhxa', '$@#LHmjd', 'QctnDt7E', 'Xv9lsdUR', '4@#FzoIB', 'HdjOgiYo', 'c@Wy3I5', '9nrOY@#3', 'Pc21#uFN', 'shOj6udk', 'LlfG3MxO', 'CKxX0#QB', 'ZG9N63Eg', 'VtuMQbM9', 'lEm9g9W', 'iLj4bX2J', 'bNEFVC0', 'UT2CWEt', 'wkb7qRix', '@HIzEf40', 'XCOzEXxm', '4y6bEZwP', 'Qm142x22', 'Gz1wCDdp', 'Yfc4cs15', 'hxWXINI9', 'ufJwlx$', 'pYvmSkF', 'yG6NMYeU', 'EtgoSZcn']
        },
        {
            'name' : 'المحاضرة الثانية - ذات الحدين',
            'lessonName':'الجزء الاول',
            'codes':['KLiKnM4Z', 'UzXYnojX', 'mEXoDqZ', '77r1#e', 'vjiqv2g0', 'xhqvQNdZ', 'qOXhk1s', '76Z1HGd#', 'FNppY4Jn', 'FqjP3R7', 'hxhZ2XYJ', '1Y4w3Je', '$FaOyREz', 'CM5f1XFN', 'eNc0MXEP', '6Q2$ZZCb', 'mSCOLV9l', '4cxipwIw', 'H6bppf$', 'Jb9DRp1a', 'Sz1dy4gW', 'qN82r84G', 'F#Y7rTcc', 'wQDxwUT', 'QL54l9Pa', 'gwefXvyQ', 'BSSY1gV@', 'OVb2Zik5', 'S8uJ4pgr', 'rVVXhRd', '1s@Q#GlV', 'I3vj3#3u', 'F#j8nYp', '3YvHes23', '@EJ9WUE', 'YBftzcFD', 'voX4QLg@', 'mXoMI7pM', '59vO#4hX', '9y1GJb$u', 'hbPqdEtX', '$34kR1zz', '5587iVgx', '22#ugC', 'lFE152eZ', 'e5UpTqlJ', 'EFrcNW2P', '0zjnInTY', 'ssq208#9', 'wTOTkEsl', 'V5CQ5qnU', 'D7R2Sdfu', 'vEqjwojo', 'vwKaHr0$', 'T5prGlrK', 'h0o8WGwD', 'xSjY6USm', 'Eyf98Vgk', '4z4P9fT@', 'cbpV95y']
        },
    ]


*/



/* 
useEffect(()=>{
        const generateCodes= (num)=> {
            
            let pass = '';
            let array = [];
            let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                    'abcdefghijklmnopqrstuvwxyz0123456789@#$';
            for(let j =0; j < num; j++){
                for (let i = 1; i <= 8; i++) {
                    var char = Math.floor(Math.random()
                                * str.length + 1);
                      
                    pass += str.charAt(char)
                }
                array.push(pass)
                pass=''
            }
            return array;
        }
        // durationFunction()

        // generateCodes(60)
        // durationFunction('9UBMAJl3zwc')
        // durationFunction('x4hPH5Wreyk')
        // durationFunction('E2MN8baiwOY')
        // durationFunction('p2aDs2ddmgE')
        // durationFunction('q1Jcq314iFU')
    }, [])

*/

/* 
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


*/

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
                    'state':false,
                    'duration':'',
                    'link':'https://www.youtube.com/watch?v=9UBMAJl3zwc&ab_channel=HanyAbdlgawad',
                },
                {
                    'lessonName':'الجزء الاول',
                    'state':false,
                    'duration':'',
                    'link':'https://www.youtube.com/watch?v=x4hPH5Wreyk',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'duration':'',
                    'link':'https://www.youtube.com/watch?v=E2MN8baiwOY&ab_channel=HanyAbdlgawad',
                },
                {
                    'lessonName':'أوبن بوك',
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
                    'link':'https://www.youtube.com/watch?v=p2aDs2ddmgE&ab_channel=HanyAbdlgawad',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'duration':'',
                    'link':'https://www.youtube.com/watch?v=q1Jcq314iFU&ab_channel=HanyAbdlgawad',
                },
                {
                    'lessonName':'أوبن بوك',
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'أوبن بوك',
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
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
                    'state':false,
                    'duration':'',
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