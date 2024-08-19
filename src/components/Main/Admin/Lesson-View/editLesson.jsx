import { useState } from "react"
import { updateSpecific } from "../../../../API/LessonsAPI"

export default function EditLesson({lesson, handleEdit}) {
    const [partId, setPartId] = useState('')
    const [examId, setExamId] = useState('')
    const [attachmentHomework, setAttachmentHomework] = useState('')
    const [attachmentNotebook, setAttachmentNotebook] = useState('')
    const [examName, setExamName] = useState([])
    const [examLink, setExamLink] = useState([])
    const [disabled, setDisabled] = useState(true)

    const handleParts = (e) => {
        const partId = e.target.dataset.partId
        setPartId(partId)
        const value = e.target.value
        const property = e.target.dataset.partProperty
        let part = lesson.parts.find(part => part._id === partId)
        part[property] = value
    }
    const handleAttachments = (e) => {
        const partId = e.target.dataset.partId
        const attachmentproperty = e.target.dataset.attachmentProperty
        const value = handleCutIdFromURL(e.target.value)
        setPartId(partId)
        if(attachmentproperty === 'homework') setAttachmentHomework(value)
        if(attachmentproperty === 'notebook') setAttachmentNotebook(value)
        let part = lesson.parts.find(part => part._id === partId)
        let attachments = part.attachments
        attachments[attachmentproperty] = value
    }
    const handleExam = (e) => {
        const examId = e.target.dataset.examId
        const examProperty = e.target.dataset.examProperty
        const value = e.target.value
        setExamId(examId)
        if(examProperty === 'name') setExamName(value)
        if(examProperty === 'link') setExamLink(value)
        let exam = lesson.exams.find(exam => exam._id === examId)
        exam[examProperty] = value
    }
    const handleSubmit = async() => {
        delete lesson._id
        delete lesson.__v
        lesson.parts.forEach((part) => {
            delete part._id
            if(part.attachments) delete part.attachments._id
        })
        lesson.exams.forEach((exam) => {
            delete exam._id
        })
        let res = await updateSpecific(lesson.branch, lesson.order, lesson).then(data => data)
        if(res) {
            setPartId('')
            setExamId('')
            handleEdit()
        }
    }
    const handleCutIdFromURL = (url) => {
        let start = url.indexOf('/d/') + 3
        let end = url.indexOf('/view')
        return url.slice(start, end)
    }

    return (
        <>
            <button onClick={handleEdit} id={"edit-btn"}></button>
            <h1 key={'parts'}>:الاجزاء</h1>
            {lesson.parts.map((part, index) => {
                return (
                    <form style={{visibility: partId === part._id || partId === '' ? 'visible' : 'hidden'}}>
                        <h2 key={'lessonName'+index}> {part.lessonName}</h2>

                        <h5 key={'lessonNametitle'+index}> الاسم</h5>
                        <input data-part-id={part._id} data-part-property={'lessonName'} key={'lessonNameinput'+index} type="text" onChange={(e) => handleParts(e)} placeholder={part.lessonName} />

                        <h5 key={'durationtitle'+index}> المدة</h5>
                        <input data-part-id={part._id} data-part-property={'duration'} key={'duration'+index} type="text" onChange={(e) => handleParts(e)} placeholder={part.duration} />

                        <h5 key={'linktitle'+index}> اللينك</h5>
                        <input data-part-id={part._id} data-part-property={'link'} key={'link'+index} type="text" onChange={(e) => handleParts(e)} placeholder={part.link} />
                        {part.attachments &&
                            <>
                                <hr/>
                                <h3 key={'attachmentstitle'+index}>:المرفقات</h3>

                                <h5 key={'attachmentstitlehomework'+index}> الواجب</h5>
                                <input 
                                    data-part-id={part._id} 
                                    data-attachment-property={'homework'}  
                                    key={'attachmentshomework'+index} 
                                    type="text" 
                                    onChange={(e) => handleAttachments(e)} 
                                    placeholder={part.attachments.homework} 
                                />

                                <h5 key={'attachmentstitlenotebook'+index}> الملزمة</h5>
                                <input 
                                    data-part-id={part._id}
                                    data-attachment-property={'notebook'} 
                                    key={'attachmentsnotework'+index} 
                                    type="text" 
                                    onChange={(e) => handleAttachments(e)} 
                                    placeholder={part.attachments.notebook}
                                />
                            </>
                        }
                        <hr/>
                        {
                            partId === part._id
                            &&
                            <button onClick={() => {setPartId('');setDisabled(false)}}>done</button>
                        }
                    </form>
                )
            })}
            <h1>:الامتحانات</h1>
            {lesson.exams.map((exam, index) => {
                    return (
                        <form style={{visibility: examId === exam._id || examId === '' ? 'visible' : 'hidden'}}>
                            <h5 key={'examName'+index}> الاسم</h5>
                            <input data-exam-id={exam._id} data-exam-property={'name'}  key={'examNameinput'+index} type="text" onChange={(e) => handleExam(e)} placeholder={exam.name} />
                            <h5 key={'linktitle'+index}> اللينك</h5>
                            <input data-exam-id={exam._id} data-exam-property={'link'} key={'link'+index} type="text" onChange={(e) => handleExam(e)} placeholder={exam.link} />
                            <hr/>
                        </form>
                    )
            })}
            <button style={{visibility: !disabled ? 'visible' : 'hidden'}} disabled={disabled} onClick={handleSubmit}>Submit</button> 
        </>
    )
}
