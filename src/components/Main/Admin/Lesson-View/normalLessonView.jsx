import React from 'react'

export default function NormalLessonView({lesson, handleEdit}) {
    return (
        <>
            <button onClick={handleEdit} id={"edit-btn"}></button>
            <h1 key={'branch'}>{lesson.branch} :الفرع </h1>
                <h1 key={'order'}>{lesson.order} :الترتيب
            </h1>
            <h1 key={'name'}>الأسم: {lesson.name}</h1>
            
            <h1>:الاجزاء</h1>
            <ul className='parts'>
            {
            lesson.parts &&
            lesson.parts.map((part, index) => {
                return (
                    <>
                        <li key={'lessonName'+index}>
                            {part.lessonName}
                        </li>
                        <li key={'lessonLink'+index} className='part-link'>{part.link}</li>
                        <li key={'duration'+index} className='part-link'>{part.duration}</li>
                        <hr/>
                        {part.attachments &&
                            <>
                                <h3>:المرفقات</h3>
                                <li key={'attachmenthomework'+index}>
                                    {part.attachments.homework}
                                    :الواجب
                                </li>
                                <li key={'attachmentnotebook'+index} className='part-link'>
                                    {part.attachments.notebook} 
                                    :الملزمة
                                </li>
                            </>
                        }
                        <hr/>
                    </>
                )
            })
            }
            </ul>

            <h1>:الامتحانات</h1>
            <ul className='parts'>
            {
                lesson.exams
                &&
                lesson.exams.map((exam, index) => {
                    return (
                        <>
                            <li key={'examName'+index}>
                                {exam.name}
                            </li>
                            <li key={'examLink'+index} className='part-link'>{exam.link}</li>
                        </>
                    )
                })
            }
            </ul>
        </>
    )
}
