const partCreation = () =>{


let arr =arr.map((lesson, num) =>{
            return(
            `
            {
                "name":"${lesson.title}",
                "order":"${lesson.order}",
                "parts":[
                    ${
                        lesson.parts.map(part =>{
                            return(`
                    {
                        "lessonName":"${part.name}",
                        "duration":"",
                        "link":"https://www.youtube.com/watch?v=${part.link}",
                        "attachments":{
                            "notebook":"${part.notebook}",
                            "homework":"${part.homework}"
                        }
                    }`)})},
                    {
                        "lessonName":"مسائل الملزمة",
                        "duration":"",
                        "link":"${lesson.playlist}"
                    }
                ],
                ${
                    lesson.exam.link ? 
                    `"exam":[{"name":"${lesson.exam.examName}", "link":"${lesson.exam.link}"}]`
                    :
                    `"exam":[{"name":"${lesson.exam.examName}"}]`
                }
            }
            `
        )})

return (
    String(arr)
)
}

console.log(partCreation())
