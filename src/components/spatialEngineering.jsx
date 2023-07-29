import arrowUp from './photos/arrow-up-filled.png'
import LoginBtn from './login'

const SpatialEngineering = ({user, userPayingSystem}) =>{
    const SpatialEngineeringlessons = [
        {
            'name' : ':المحاضرة الأولي',
            'parts' :['الجزء الاول:التمهيد','الجزء الثاني: معادلة الكرة في الفراغ'],
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : ':المحاضرة الثانية',
            'parts' :['الجزء الاول: المتجهات في الفراغ'],
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : ':المحاضرة الثالثة',
            'parts' :['الجزء الاول:الضرب القياسي'],
            'exam' : 'امتحان المحاضرة الثالثة'
        },
        {
            'name' : ':المحاضرة الرابعة',
            'parts' :['الجزء الاول: الضرب الاتجاهي'],
            'exam' : 'امتحان الهندسة الفراغية 1'
        },
        {
            'name' : ':المحاضرة الخامسة',
            'parts' :['الجزء الاول: معادلة الخط المستقيم'],
            'exam' : 'امتحان المحاضرة الخامسة'
        },
        {
            'name' : ':المحاضرة السادسة',
            'parts' :['الجزء الاول: معادلة المستوي'],
            'exam' : 'امتحان الهندسة الفراغية 2 '
        }
    ]
    
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
                            <ul>
                                {lesson.parts.map((part,num)=>{
                                    return(
                                        <li key={'partObject'+num}>
                                            <ul>
                                                <li key={'partName'+num}>{part}</li>
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