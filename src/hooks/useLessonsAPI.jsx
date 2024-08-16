import { useState } from "react"
import { getAll } from "../API/LessonsAPI"



export const useLessonsAPI = (branch) => {
    const [lessons, setLessons] = useState([])
    const getAllLessons = async () => {
        let res = await getAll(branch).then(data => data)
        setLessons(res[0].lessons)
    }
    getAllLessons();
    return lessons
}