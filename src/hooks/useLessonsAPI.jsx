import { useEffect } from "react"
import { useState } from "react"
import { getAll } from "../API/LessonsAPI"

export const useLessonsAPI = (branch) => {
    const [lessons, setLessons] = useState([])

   useEffect(() => {
    getAll(branch).then(data => setLessons(data))
   }, [branch])

   return lessons
}