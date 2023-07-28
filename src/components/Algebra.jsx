import arrowUp from './photos/arrow-up-filled.png'
const Algebra = ({userPayingSystem}) =>{

    const Algebralessons = [
        {
            'name' : 'المحاضرة الاولي - ذات الحدين',
            'parts' :['تمهيد','الجزء الاول','الجزء الثاني','الجزء الثالث','أوبن بوك'],
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - ذات الحدين',
            'parts' :['الجزء الاول','الجزء الثاني','أوبن بوك'],
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : 'المحاضرة الثالثة - ذات الحدين',
            'parts' :['الجزء الاول','الجزء الثاني','أوبن بوك'],
            'exam' : 'امتحان ذات الحدين'
        },
        {
            'name' : 'المحاضرة الاولي - الاعداد المركبة',
            'parts' :['الجزء الاول','الجزء الثاني','أوبن بوك'],
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - الاعداد المركبة',
            'parts' :['الجزء الاول','الجزء الثاني','أوبن بوك'],
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : 'المحاضرة الثالثة - الاعداد المركبة',
            'parts' :['الجزء الاول','الجزء الثاني','أوبن بوك'],
            'exam' : 'امتحان الاعداد المركبة'
        }
        
        ,
        {
            'name' : 'المحاضرة الاولي - التباديل والتوافيق',
            'parts' :['أوبن بوك'],
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - التباديل والتوافيق',
            'parts' :['أوبن بوك'],
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : 'المحاضرة الثالثة - التباديل والتوافيق',
            'parts' :['الجزء الاول','الجزء الثاني','أوبن بوك'],
            'exam' : 'امتحان التباديل والتوافيق'
        },
        {
            'name' : 'المحاضرة الاولي - المحدادت',
            'parts' :['أوبن بوك'],
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - المحدادت',
            'parts' :['أوبن بوك'],
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : 'المحاضرة الثالثة - المحدادت',
            'parts' :['أوبن بوك'],
            'exam' : 'امتحان المحدادت'
        }

        ,
        {
            'name' : 'المحاضرة الاولي - المصفوفات',
            'parts' :['أوبن بوك'],
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - المصفوفات',
            'parts' :['أوبن بوك'],
            'exam' : 'امتحان المصفوفات'
        },

    ]
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

export default Algebra;