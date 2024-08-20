import { useEffect, useState } from "react"
import { getAll } from "../API/LessonsAPI"



export const useLessonsAPI = (branch) => {
    const [lessons, setLessons] = useState([])
    useEffect(() => {
        if(lessons.length !== 0) return lessons
        const getAllLessons = async () => {
            let res = await getAll(branch).then(data => data)
            setLessons(res.sort((a, b) => a.order.replace(branch, '') - b.order.replace(branch, '')))
        }
        getAllLessons();
    }, [branch])
    return lessons
}