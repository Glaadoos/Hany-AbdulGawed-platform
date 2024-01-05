const partCreation = () =>{

    let array= [
        {
            "title":"المحاضرة الثانية والعشرون  ",
            "order":"calculus22",
            "parts":[
                {"name":" التكامل 2", "link":"8zV9wSVQ308","notebook":'1uKYrbKeQyR3yxCYLs0Hvgi6l-0mt3KTk',"homework":'1LDCI5gpCXpQw9_qWcPvmQTvorNYdPOD2'},
            ],
            "playlist":'https://www.youtube.com/playlist?list=PLzuKs18sUQiUfr-EB3ZN4F-ViNk-bZ0R4',
            'exam':{
                "examName":' أمتحان المحاضرة الثانية والعشرون',
                "link":'https://docs.google.com/forms/d/e/1FAIpQLSddBrDw1x3hrWx5KVirZQLKFLnTgMVt-svV1-uz3tT3OftFsA/viewform?usp=sharing'
            }
        },
        {
            "title":"المحاضرة الثالثة والعشرون  ",
            "order":"calculus23",
            "parts":[
                {"name":"التكامل 5 ", "link":"KBBfhtht70M","notebook":'1GzLYG9NkO8OG9UOYR_xgmBopjvTdosDK',"homework":'1hf2Vpw7Ad7Ni3tNcX1mDzN_WbFx4IS15'},
                
                
            ],
            "playlist":'https://www.youtube.com/playlist?list=PLzuKs18sUQiW_n3yHeL0qYbBgJHL8A6xr',
            'exam':{
                "examName":'أمتحان المحاضرة الثالثة والعشرون',
                "link":'https://docs.google.com/forms/d/e/1FAIpQLSfQYnOqMSMKDltkhJ_KtvJJaoioWGZ1Oo6PMLxP9p8iRKxEDg/viewform?usp=sharing'
            }
        },
        {
            "title":"المحاضرة الرابعة والعشرون  ",
            "order":"calculus2",
            "parts":[
                {"name":"التكامل 6 ", "link":"Iw_mudNrYxk","notebook":'1z22l0fKg2lQ-sXLlVVYCXZy52IewMD3z',"homework":'1VDD9H5YpHx-WSfH-hW_63-KOoDfhI7B7'},
                
                
            ],
            "playlist":'https://www.youtube.com/playlist?list=PLzuKs18sUQiU62z8o9ncdGUyNmXo0udP7',
            'exam':{
                "examName":'أمتحان المحاضرة الرابعة والعشرون',
            }
        },
    ]
    
/* 

1-

notebook:
    1:
    

homework:
    1:
    

1.https://www.youtube.com/playlist?list=PLzuKs18sUQiUfr-EB3ZN4F-ViNk-bZ0R4

2.https://www.youtube.com/playlist?list=PLzuKs18sUQiW_n3yHeL0qYbBgJHL8A6xr

3.https://www.youtube.com/playlist?list=PLzuKs18sUQiU62z8o9ncdGUyNmXo0udP7


exam
1*https://docs.google.com/forms/d/e/1FAIpQLSddBrDw1x3hrWx5KVirZQLKFLnTgMVt-svV1-uz3tT3OftFsA/viewform?usp=sharing

2*https://docs.google.com/forms/d/e/1FAIpQLSfQYnOqMSMKDltkhJ_KtvJJaoioWGZ1Oo6PMLxP9p8iRKxEDg/viewform?usp=sharing

3*





*/

let arr =array.map((lesson, num) =>{
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
