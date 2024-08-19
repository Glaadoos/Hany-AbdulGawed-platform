import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getSpecific } from '../../../../API/LessonsAPI';
import './lessons-view.css';
import NormalLessonView from './normalLessonView';
import EditLesson from './editLesson';

export default function LessonView() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [lesson, setLesson] = useState({});
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        let [order, branch] = [searchParams.get('order'), searchParams.get('branch')]
        const getLesson = async () => {
            let res = await getSpecific(branch, order).then(data => data)
            localStorage.setItem('lesson', JSON.stringify(res))
            setLesson(res)
        }
        if(localStorage.getItem('lesson') === null){
            getLesson()
        }
        if(JSON.parse(localStorage.getItem('lesson')).order === order){
            setLesson(JSON.parse(localStorage.getItem('lesson')))
        }
        if (JSON.parse(localStorage.getItem('lesson')).order !== order) {
            getLesson()
        }
        
    }, [searchParams])

    const handleEdit = () => {
        setEdit(!edit)
    }
    return (
        <>
            <div className="lesson-view">
                {
                    edit ? <EditLesson lesson={lesson} handleEdit={handleEdit} />: <NormalLessonView lesson={lesson} handleEdit={handleEdit} />
                }
            </div>
        </>
    )
}
