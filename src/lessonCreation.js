const prePartCreation = () =>{
    let order=[];
    let titles=[
        'تابع الوحدة الثانية والثالثة',
    ];
    let parts = [
        {
            "order":0,
            "titles":[
                'أفكار منوعة على القوى المتوازية',
                'العزوم ثلاثي البعد - هام جدا'
            ]
        },
        
    ]
    let linkArr=[
        {"order":1,"links":['']},
    ];
    let playlists=[
        '',
            
    ];
    let notebooks=[
        {"order":0,"link":['']},
    ];
    let homeworks=[
        {"order":0,"link":['']}
    ];
    let exams=[
        [1,2,4,6],
        {
            "order":1,
            "name":'امتحان المحاضرة ',
            "link":""
        },
        
    ];

    order.map((order, rank) =>{
        let title = titles[rank];
        let partsOf=parts[rank].titles;
        let links=linkArr[rank].links;
        let playlist=playlists[rank];
        let notebook=notebooks[rank].link;
        let homework=homeworks[rank].link;
        
        // console.log(partsOf);
        let obj = `
        {
            "title":"${title}",
            "order":"${order}",
            "parts":[
                ${partsOf.map((part,r) =>{
                    return(`{"name":"${part}", "link":"${links[r]}","notebook":"${notebook}","homework":"${homework}"}\n`)
                })}
            ],
            "playlist":"${playlist}"
        },
        `

    // console.log(obj);

    })

}

const partCreation = () =>{

/* 
    {
        "title":"المحاضرة ",
        "order":"statics",
        "parts":[
            {"name":"", "link":"","notebook":'',"homework":''}
        ],
        "playlist":'',
        'exam':{
            "examName":' أمتحان المحاضرة',
            "link":''
        }
    }

*/


let array= [
    
]

    /* 

1-
2-
3-
4-
5-
6-
7-


notebook:
    1:

    2:

    3:
    
    4:
    
    5:
    
    6:
    
    7:

    

homework:
    1:

    2:

    3:
    
    4:
    
    5:
    
    6:
    
    7:

1.

2.

3.

4.

5.

6.

7.


exam
1*

2*

3*

4*

5*

6*

7*

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
                    `'exam':{
            "examName":"${lesson.exam.examName}", "link":"${lesson.exam.link}"}]`
                    :
                    `'exam':{
            "examName":"${lesson.exam.examName}"}]`
                }
            }
            `
        )})

return (
    console.log(String(arr))
)
}

partCreation()
