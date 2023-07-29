import arrowUp from './photos/arrow-up-filled.png'

const SpatialEngineering = ({userPayingSystem}) =>{
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
   if(userPayingSystem === undefined){
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
}

export default SpatialEngineering;