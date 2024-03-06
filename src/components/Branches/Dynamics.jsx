/* eslint-disable array-callback-return */
import {useState, Fragment} from 'react';
import {Link} from "react-router-dom";
import arrowUp from '.././photos/arrow-up-filled.png'
import LoginBtn from '../Essential/login'
import * as CodeAPI from '../../API/CodeAPI'
import * as UserAPI from '../../API/UesrApi'
const dayjs  = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const Dynamics = ({setVideoId, user, userPayingSystem, userCodes}) =>{
    // dictionaries & State variable & variables
    const Dynamicslesson = [
        {
            "name":"المحاضرة الأولي",
            "order":"dynamics01",
            "parts":[
                {
                    "lessonName":"تفاضل الدوال المتجهة",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=0FhYKMMLCI8",
                    "attachments":{
                        "notebook":"1lfCQcrCUKQruoy3uQhGRDAaWcuUdkKXC",
                        "homework":"1HbHqrA4jq0DpxakP5iobt2jVqLmeRe4d"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiX7zqDgAJbhdXXT8IdIMaxb"
                }
            ],
            "exam":[{"name":" أمتحان المحاضرة الأولي", "link":"https://docs.google.com/forms/d/e/1FAIpQLSet-gejCb6YeZkLBJq_RIerk2eWrc_9JF2tQaHpdE3xLkt8mA/viewform?usp=sf_link"}]
        },
        {
            "name":"المحاضرة الثانية",
            "order":"dynamics02",
            "parts":[
                {
                    "lessonName":"تكامل الدوال المتجهة",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=inUnHBeHrGQ",
                    "attachments":{
                        "notebook":"1xQk_L-pflJeuuQ7mpPKEX08TaW1oRSLF",
                        "homework":"1FoGRv5Vfor_E71dUnzGidk-5Jp5wlN6L"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiVrXZcG5SQ-BECURIUurOHq"
                }
            ],
            "exam":[{"name":" أمتحان المحاضرة الثانية", "link":"https://docs.google.com/forms/d/e/1FAIpQLSewUv2jTNql8cFe1PS7j3oNAGERztfEdLqVFhIifeNMI3o91w/viewform?usp=sf_link"}]
        },
        {
            "name":"المحاضرة الثالثة",
            "order":"dynamics03",
            "parts":[
                {
                    "lessonName":"كمية الحركة – نيوتن الاول ",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=v7Aq0RmFtXA",
                    "attachments":{
                        "notebook":"1UlEZuQoeF0iHWcOJ82nkpo6jbfSK-kt4",
                        "homework":"1epP0nxe--stAKOlgOyaCPEVrrUWMC0aW"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiU344gm4DALOlVTetm-2ctD"
                }
            ],
            'exam':[{"name":" أمتحان المحاضرة الثالثة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSdbxZKX6Nu3Ay3OWzxDKmmCkztcDG8qd4E59OSWb90j1HqW3w/viewform?usp=sf_link"}]
        },
        {
            "name":"المحاضرة الرابعة",
            "order":"dynamics04",
            "parts":[
                {
                    "lessonName":"نيوتن الثاني",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=Z1qWAcNvct4",
                    "attachments":{
                        "notebook":"1lB4h4dggB1TejPhL6EFJLuDdjaQ3bXEI",
                        "homework":"1XXD7L7MWkud6r3zj_J1ljxjjDrak6rn_"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiWoA0zJ3_Y_MmvfY__4VXmZ"
                }
            ],
            'exam':[{
        "name":"امتحان المحاضرة الرابعة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSezMjWtA5LsZ6zD_kW6b9ejdHHm6ud_D6kALl6GyG1XcnRIvQ/viewform?usp=sf_link"}]
        } ,
        {
            "name":"المحاضرة الخامسة",
            "order":"dynamics05",
            "parts":[
                {
                    "lessonName":"نيوتن الثالث",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=5XCNJA7zr3Q",
                    "attachments":{
                        "notebook":"1UoSa8SHhK_JL22eHdPbHNJdxzI4HHk03",
                        "homework":"14pBZ7-lD8SEGHqxC8xwurKIhykWqSdRp"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiWuuB9JmYZ7fUK-2Y6SNI4z"
                }
            ],
            'exam':[{
        "name":"امتحان المحاضرة الخامسة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSc3Qcf4p9XPunvEbUcoHAzILmOpNtX02_nR2ydLCSGqTlPoIA/viewform?usp=sharing"}]
        } ,
        {
            "name":"المحاضرة السادسة",
            "order":"dynamics06",
            "parts":[
                {
                    "lessonName":"البكرات",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=1TjIitNe2bM",
                    "attachments":{
                        "notebook":"1PoCiTpwnsdBGBicMTi5yzW4b6mI8PNqw",
                        "homework":"1JkLWkaWPFSAsWP_QTe03xk64uw3MuB0f"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiWSpHhuGfiZ8iTo7xLiGlP5"
                }
            ],
            'exam':[{
        "name":"امتحان المحاضرة السادسة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSfWviIDfpITCFQ2-ZzLGM3mLFofZ9p3x4s8R9lDqCehmxDhVw/viewform?usp=sharing"}]
        } ,
        {
            "name":"المحاضرة السابعة",
            "order":"dynamics07",
            "parts":[
                {
                    "lessonName":"تابع البكرات",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=.",
                    "attachments":{
                        "notebook":"16QKQ_pvYOpotymR3SlJ62gyERwpHZj-a",
                        "homework":"1Dp4nCdwtV3yqd3J3ycZ1ZyUoD0sIpxEK"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiVnlbbfmZsgtreGwWSSGJKO"
                }
            ],
            'exam':[{
        "name":"امتحان المحاضرة السابعة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSfaMS19dCnBSz5FESMKH5Oe3gjZeLC8dgjDqYnk-V0hIC1ynw/viewform?usp=sharing"}]
        } ,
        {
            "name":"المحاضرة الثامنة",
            "order":"dynamics08",
            "parts":[
                {
                    "lessonName":"الدفع",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=X32yExKAiN4",
                    "attachments":{
                        "notebook":"1HUdJQGjwWiuDAC9EsJzeRysHvUfJf3kY",
                        "homework":"1d3EuqaCukpWBrjj4VB3C0ZM9zp8lvUtR"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiXSEFUds1HLyD9ino4IIif5"
                }
            ],
            'exam':[{
        "name":"امتحان المحاضرة الثامنة", "link":"https://docs.google.com/forms/d/e/1FAIpQLScka4jayAfr5rpkKScX4VUzbgqrclPrYnxWZZ6iMy50a_XXnQ/viewform?usp=sharing"}]
        } ,
        {
            "name":"المحاضرة التاسعة",
            "order":"dynamics09",
            "parts":[
                {
                    "lessonName":"التصادم",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=.",
                    "attachments":{
                        "notebook":"1yrLUGkB7lGmnUBuWOcMm59SE37w2annJ",
                        "homework":"12JDT2NPYsCK3IMM9JrwOBYkNkriJja8Y"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiU3k_4AYOYMKj2N9n9Ndd_s"
                }
            ],
            'exam':[{
        "name":"امتحان المحاضرة التاسعة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSf6Ksu0uRobpSKqFH2HqbgLMjMEk_Srber5B9ekTNnuayiehQ/viewform?usp=sharing"}]
        } ,
        {
            "name":"المحاضرة العاشرة",
            "order":"dynamics10",
            "parts":[
                {
                    "lessonName":"الشغل",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=Ugwf-jjnoQs",
                    "attachments":{
                        "notebook":"14yw8Gxt0aIP12BgTmTf5gL_sGRPVchAx",
                        "homework":"1iwoOG3m3ElmPRvA6pAzD48dWj3QNlm-o"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiU3k_4AYOYMKj2N9n9Ndd_s"
                }
            ],
            'exam':[{
        "name":"امتحان المحاضرة العاشرة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSfor7wZbOb6wNIKsIvzwFOcTvOZELVbkMexoSgGOVRGt0qxOA/viewform?usp=sharing"}]
        } ,
        {
            "name":"المحاضرة الحادية عشرة",
            "order":"dynamics11",
            "parts":[
                {
                    "lessonName":"مبدأ الشغل – طاقة الوضع",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=UdkOI9wFPxM",
                    "attachments":{
                        "notebook":"1b4HmYRsz3gExf6I06ELjeu-a3_xHQ0Kh",
                        "homework":"1RUOgkqrnGWHrz2MBpspuFtknlBO6Bvzs"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUeAS6JB9v9oY7NdqLO8zL7"
                }
            ],
            'exam':[{
        "name":"امتحان المحاضرة الحادية عشرة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSf6Ksu0uRobpSKqFH2HqbgLMjMEk_Srber5B9ekTNnuayiehQ/viewform?usp=sharing"}]
        } ,
        {
            "name":"المحاضرة الثانية عشرة ",
            "order":"dynamics12",
            "parts":[
                {
                    "lessonName":"تابع طاقة الوضع",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=cvc_Zihh0ks",
                    "attachments":{
                        "notebook":"1j38ObAvkpMQidKdOYgJebYmUR9QITM0T",
                        "homework":"1huxZx3d_hzFthcepZEylDNvqHhc3HAAH"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUeAS6JB9v9oY7NdqLO8zL7"
                }
            ],
            'exam':[{"name":"امتحان المحاضرة الثانية عشرة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSf6Ksu0uRobpSKqFH2HqbgLMjMEk_Srber5B9ekTNnuayiehQ/viewform?usp=sharing"}]
        },
        {
            "name":"المحاضرة الثالثة عشرة",
            "order":"dynamics13",
            "parts":[
                {
                    "lessonName":"القدرة",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=SSMScAOZu-A",
                    "attachments":{
                        "notebook":"14yw8Gxt0aIP12BgTmTf5gL_sGRPVchAx",
                        "homework":"1iwoOG3m3ElmPRvA6pAzD48dWj3QNlm-o"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiU3_x54k_JztpV1sbPrhWU"
                }
            ],
            'exam':[{
        "name":"امتحان المحاضرة الثالثة عشرة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSf6Ksu0uRobpSKqFH2HqbgLMjMEk_Srber5B9ekTNnuayiehQ/viewform?usp=sharing"}]
        }
    ]
    const DynamicsMPS = [
        {
            'name':':الشهر الاول',
            'data':[
                {
                    "name":"المحاضرة الأولي",
                    "order":"dynamics01",
                    "parts":[
                        {
                            "lessonName":"تفاضل الدوال المتجهة",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=0FhYKMMLCI8",
                            "attachments":{
                                "notebook":"1lfCQcrCUKQruoy3uQhGRDAaWcuUdkKXC",
                                "homework":"1HbHqrA4jq0DpxakP5iobt2jVqLmeRe4d"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiX7zqDgAJbhdXXT8IdIMaxb"
                        }
                    ],
                    "exam":[{"name":" أمتحان المحاضرة الأولي", "link":"https://docs.google.com/forms/d/e/1FAIpQLSet-gejCb6YeZkLBJq_RIerk2eWrc_9JF2tQaHpdE3xLkt8mA/viewform?usp=sf_link"}]
                },
                {
                    "name":"المحاضرة الثانية",
                    "order":"dynamics02",
                    "parts":[
                        {
                            "lessonName":"تكامل الدوال المتجهة",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=inUnHBeHrGQ",
                            "attachments":{
                                "notebook":"1xQk_L-pflJeuuQ7mpPKEX08TaW1oRSLF",
                                "homework":"1FoGRv5Vfor_E71dUnzGidk-5Jp5wlN6L"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiVrXZcG5SQ-BECURIUurOHq"
                        }
                    ],
                    "exam":[{"name":" أمتحان المحاضرة الثانية", "link":"https://docs.google.com/forms/d/e/1FAIpQLSewUv2jTNql8cFe1PS7j3oNAGERztfEdLqVFhIifeNMI3o91w/viewform?usp=sf_link"}]
                },
                {
                    "name":"المحاضرة الثالثة",
                    "order":"dynamics03",
                    "parts":[
                        {
                            "lessonName":"كمية الحركة – نيوتن الاول ",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=v7Aq0RmFtXA",
                            "attachments":{
                                "notebook":"1UlEZuQoeF0iHWcOJ82nkpo6jbfSK-kt4",
                                "homework":"1epP0nxe--stAKOlgOyaCPEVrrUWMC0aW"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiU344gm4DALOlVTetm-2ctD"
                        }
                    ],
                    'exam':[{"name":" أمتحان المحاضرة الثالثة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSdbxZKX6Nu3Ay3OWzxDKmmCkztcDG8qd4E59OSWb90j1HqW3w/viewform?usp=sf_link"}]
                },
                {
                    "name":"المحاضرة الرابعة",
                    "order":"dynamics04",
                    "parts":[
                        {
                            "lessonName":"نيوتن الثاني",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=Z1qWAcNvct4",
                            "attachments":{
                                "notebook":"1lB4h4dggB1TejPhL6EFJLuDdjaQ3bXEI",
                                "homework":"1XXD7L7MWkud6r3zj_J1ljxjjDrak6rn_"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiWoA0zJ3_Y_MmvfY__4VXmZ"
                        }
                    ],
                    'exam':[{
                "name":"امتحان المحاضرة الرابعة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSezMjWtA5LsZ6zD_kW6b9ejdHHm6ud_D6kALl6GyG1XcnRIvQ/viewform?usp=sf_link"}]
                } ,
                {
                    "name":"المحاضرة الخامسة",
                    "order":"dynamics05",
                    "parts":[
                        {
                            "lessonName":"نيوتن الثالث",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=5XCNJA7zr3Q",
                            "attachments":{
                                "notebook":"1UoSa8SHhK_JL22eHdPbHNJdxzI4HHk03",
                                "homework":"14pBZ7-lD8SEGHqxC8xwurKIhykWqSdRp"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiWuuB9JmYZ7fUK-2Y6SNI4z"
                        }
                    ],
                    'exam':[{
                "name":"امتحان المحاضرة الخامسة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSc3Qcf4p9XPunvEbUcoHAzILmOpNtX02_nR2ydLCSGqTlPoIA/viewform?usp=sharing"}]
                } ,
                {
                    "name":"المحاضرة السادسة",
                    "order":"dynamics06",
                    "parts":[
                        {
                            "lessonName":"البكرات",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=1TjIitNe2bM",
                            "attachments":{
                                "notebook":"1PoCiTpwnsdBGBicMTi5yzW4b6mI8PNqw",
                                "homework":"1JkLWkaWPFSAsWP_QTe03xk64uw3MuB0f"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiWSpHhuGfiZ8iTo7xLiGlP5"
                        }
                    ],
                    'exam':[{
                "name":"امتحان المحاضرة السادسة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSfWviIDfpITCFQ2-ZzLGM3mLFofZ9p3x4s8R9lDqCehmxDhVw/viewform?usp=sharing"}]
                } ,
                {
                    "name":"المحاضرة السابعة",
                    "order":"dynamics07",
                    "parts":[
                        {
                            "lessonName":"تابع البكرات",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=.",
                            "attachments":{
                                "notebook":"16QKQ_pvYOpotymR3SlJ62gyERwpHZj-a",
                                "homework":"1Dp4nCdwtV3yqd3J3ycZ1ZyUoD0sIpxEK"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiVnlbbfmZsgtreGwWSSGJKO"
                        }
                    ],
                    'exam':[{
                "name":"امتحان المحاضرة السابعة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSfaMS19dCnBSz5FESMKH5Oe3gjZeLC8dgjDqYnk-V0hIC1ynw/viewform?usp=sharing"}]
                } ,
                {
                    "name":"المحاضرة الثامنة",
                    "order":"dynamics08",
                    "parts":[
                        {
                            "lessonName":"الدفع",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=X32yExKAiN4",
                            "attachments":{
                                "notebook":"1HUdJQGjwWiuDAC9EsJzeRysHvUfJf3kY",
                                "homework":"1d3EuqaCukpWBrjj4VB3C0ZM9zp8lvUtR"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiXSEFUds1HLyD9ino4IIif5"
                        }
                    ],
                    'exam':[{
                "name":"امتحان المحاضرة الثامنة", "link":"https://docs.google.com/forms/d/e/1FAIpQLScka4jayAfr5rpkKScX4VUzbgqrclPrYnxWZZ6iMy50a_XXnQ/viewform?usp=sharing"}]
                } ,
            ]
        },
        {
            'name':':الشهر الثان',
            'data':[
                {
                    "name":"المحاضرة التاسعة",
                    "order":"dynamics09",
                    "parts":[
                        {
                            "lessonName":"التصادم",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=.",
                            "attachments":{
                                "notebook":"1yrLUGkB7lGmnUBuWOcMm59SE37w2annJ",
                                "homework":"12JDT2NPYsCK3IMM9JrwOBYkNkriJja8Y"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiU3k_4AYOYMKj2N9n9Ndd_s"
                        }
                    ],
                    'exam':[{
                "name":"امتحان المحاضرة التاسعة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSf6Ksu0uRobpSKqFH2HqbgLMjMEk_Srber5B9ekTNnuayiehQ/viewform?usp=sharing"}]
                } ,
                {
                    "name":"المحاضرة العاشرة",
                    "order":"dynamics10",
                    "parts":[
                        {
                            "lessonName":"الشغل",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=Ugwf-jjnoQs",
                            "attachments":{
                                "notebook":"14yw8Gxt0aIP12BgTmTf5gL_sGRPVchAx",
                                "homework":"1iwoOG3m3ElmPRvA6pAzD48dWj3QNlm-o"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiU3k_4AYOYMKj2N9n9Ndd_s"
                        }
                    ],
                    'exam':[{
                "name":"امتحان المحاضرة العاشرة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSfor7wZbOb6wNIKsIvzwFOcTvOZELVbkMexoSgGOVRGt0qxOA/viewform?usp=sharing"}]
                } ,
                {
                    "name":"المحاضرة الحادية عشرة",
                    "order":"dynamics11",
                    "parts":[
                        {
                            "lessonName":"مبدأ الشغل – طاقة الوضع",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=UdkOI9wFPxM",
                            "attachments":{
                                "notebook":"1b4HmYRsz3gExf6I06ELjeu-a3_xHQ0Kh",
                                "homework":"1RUOgkqrnGWHrz2MBpspuFtknlBO6Bvzs"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUeAS6JB9v9oY7NdqLO8zL7"
                        }
                    ],
                    'exam':[{
                "name":"امتحان المحاضرة الحادية عشرة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSf6Ksu0uRobpSKqFH2HqbgLMjMEk_Srber5B9ekTNnuayiehQ/viewform?usp=sharing"}]
                } ,
                {
                    "name":"المحاضرة الثانية عشرة ",
                    "order":"dynamics12",
                    "parts":[
                        {
                            "lessonName":"تابع طاقة الوضع",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=cvc_Zihh0ks",
                            "attachments":{
                                "notebook":"1j38ObAvkpMQidKdOYgJebYmUR9QITM0T",
                                "homework":"1huxZx3d_hzFthcepZEylDNvqHhc3HAAH"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUeAS6JB9v9oY7NdqLO8zL7"
                        }
                    ],
                    'exam':[{"name":"امتحان المحاضرة الثانية عشرة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSf6Ksu0uRobpSKqFH2HqbgLMjMEk_Srber5B9ekTNnuayiehQ/viewform?usp=sharing"}]
                },
                {
                    "name":"المحاضرة الثالثة عشرة",
                    "order":"dynamics13",
                    "parts":[
                        {
                            "lessonName":"القدرة",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=SSMScAOZu-A",
                            "attachments":{
                                "notebook":"14yw8Gxt0aIP12BgTmTf5gL_sGRPVchAx",
                                "homework":"1iwoOG3m3ElmPRvA6pAzD48dWj3QNlm-o"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiU3_x54k_JztpV1sbPrhWU"
                        }
                    ],
                    'exam':[{
                "name":"امتحان المحاضرة الثالثة عشرة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSf6Ksu0uRobpSKqFH2HqbgLMjMEk_Srber5B9ekTNnuayiehQ/viewform?usp=sharing"}]
                }
            ]
        },
        
    ]
    const[exist, setExist] = useState([])
    const[inputValue, setInputValue] = useState([])
    
    
    // time for lectuer to close
    let hours=96;
    
    // Branch Name
    let branch = 'Dynamics'

    // essential functions
    const getIDfromURL = (url)=> {
        const videoID = url.split('v=')[1];
        if (videoID !== undefined) {
            return videoID.slice(0, 11);
        }
    }
    const handleVideoIDChange = (e)=>{
        let homework = e.target.dataset.homework || null;
        let notebook = e.target.dataset.notebook || null;
        setVideoId(e.target.id)
        localStorage.setItem("videoId", e.target.id)
        localStorage.setItem("homework", homework)
        localStorage.setItem("notebook", notebook)
        console.log(e)
    }
    const checkCode = async(code, order)=>{
        let codeexist;
        await Dynamicslesson.map(async(obj) =>{
                                if(obj.order ===order ){
                                    codeexist = await CodeAPI.getSpecific(branch, order, code).then(data => {return(data.codeExist)})
                                    const newArray = exist.filter(arr => arr[0] !== order)
                                    newArray.push([order, codeexist])
                                    setExist(newArray)
                                    if(codeexist === 1 && order.indexOf('revision') === -1){
                                        const deleted = await CodeAPI.UpdataOrderCodes(branch, order, code).then(data => {return(data)});
                                        if(!(deleted.message)){
                                            await UserAPI.updateAvailableCodes(branch,localStorage.getItem("userEmail"), [order, code])
                                            alert(`تم أضافة الكود بنجاح في : ${dayjs().format('D')}/${dayjs().format('MM')} الوقت ${dayjs().format('hh:mm:ss')} \n الكود متاح لثلاث ايام من هذا التاريخ`)
                                            window.location.reload();
                                        }
                                    }else{
                                        const deleted = await CodeAPI.UpdataOrderCodes(branch, order, code).then(data => {return(data)});
                                        if(!(deleted.message)){
                                            await UserAPI.updateAvailableCodes(branch, localStorage.getItem("userEmail"), [order, code])
                                            alert(` تمت اضافة المرجعة  \n  المراجعة مفتوحة دائما`)
                                            window.location.reload();
                                        }
                                    }
                                }
                            })

    }
    const handleChange = (e) =>{
        let input = e.target.value 
        setInputValue(input)
    }
    const handleSubmit = async(e) =>{
        let lessonOrder = e.target.id
        await checkCode(inputValue, lessonOrder)
    }
    const millisecondsToDays = (diff) =>{
        let cd = 24 * 60 * 60 * 1000;
        let ch = 60 * 60 * 1000;
        let d = Math.floor(diff / cd);
        let h = Math.floor( (diff - d * cd) / ch);
        let  m = Math.round( (diff - d * cd - h * ch) / 60000);
        let pad = function(n){ return n < 10 ? '0' + n : n; };
        
        if( m === 60 ){
            h++;
            m = 0;
        }
        if( h === 24 ){
            d++;
            h = 0;
        }
        return [`${d} days`, `${pad(h)} hours`, `${pad(m)} minutes`].join(', ');
    }
    const handleDateChange = (userCodes, order) => {
        if(userCodes.filter(obj => obj.order === order)[0].date !== 'Open'){
            let date = dayjs(userCodes.filter(obj => obj.order === order)[0].date);
            let dataOfClose = dayjs(date.add(hours, 'h')) ;
            let diff = (dataOfClose).diff(dayjs().format())
            return [diff, millisecondsToDays(diff)];
        }else{
            return['Open', 'Open']
        }  
    }
    

    if(user === null){
        return (
            <h1 style={{textAlign:'center', marginTop:'200px'}}>
                يرجي تسجيل الدخول
                <br />
                <LoginBtn/>
            </h1>
        )
    }
    if(userPayingSystem === null){
        return (<h1 style={{textAlign:'center', marginTop:'200px'}}>
            نظام الاشتراك غير محدد
            <br/>
            يرجي اعادة تحميل الصفحة او تحديد نظام الاشتراك
        </h1>)
    }
    if(userPayingSystem === 'LPS' || localStorage.getItem("userPayingSystem") === 'LPS'){
        return(
            <div className="lessons-box">
                <h1 className="title"
                style={{textAlign:'right', marginRight: '2%'}}
                >:الديناميكا</h1>
                {Dynamicslesson.map((lesson,num) =>{
                    if(userCodes){  
                        if(userCodes.filter(obj => obj.order === lesson.order).length === 1){
                            let diff = handleDateChange(userCodes, lesson.order)[0]
                            let finalDate =  handleDateChange(userCodes, lesson.order)[1];
                            
                            return(
                                (diff < 345600000  && diff > 0) || finalDate === 'Open' ? 
                                    <div key={'lesson'+num} className="lesson">
                                        <div className='lesson-title'>
                                            <h1 className="lecture-name">{lesson.name}</h1>
                                            <img className="arrow-div" src={arrowUp} alt="arrow-up"/>
                                            <h4 
                                                style={{margin:'0 0 0 3%', textAlign:'left', width: 'fit-content'}}
                                            >
                                                {finalDate !== 'Open' ? 
                                                    
                                                    <>
                                                        :الوقت المتبقي للمحاضر<br/>
                                                        {finalDate}
                                                    </>
                                                
                                                :
                                                    ('Always Open')
                                            }
                                            </h4>
                                        </div>
                                        <ul className='lesson-parts'>
                                            {lesson.parts.map((part,num)=>{
                                                if(part.lessonName.search('مسائل الملزمة') === -1){
                                                    return(
                                                    <li key={'partObject'+num}>
                                                        <ul className='lesson-part'>
                                                            <li key={'partName'+num}>
                                                            {part.lessonName}
                                                            </li>
                                                            <li key={'partState'+num} >
                                                                <Link className='play-btn' id={getIDfromURL(part.link)} data-notebook={part.attachments.notebook || null} data-homework={part.attachments.homework || null} onClick={handleVideoIDChange} to={'/Hany-AbdulGawed-platform/lessonView'} >  مشاهدة    </Link>
                                                                <button id={getIDfromURL(part.link)} className='lesson-btn' style={{color:'#4bd84b',fontWeight:'bold'}}>  مفتوحة</button>
                                                            </li>
                                                            <li key={part.duration}>
                                                                {part.duration}
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    ); 
                                                }else{
                                                    return(
                                                        part.link !== 'soon' ? 

                                                        <li key={'partObject'+num}>
                                                            <ul className='lesson-part'>
                                                                <li key={'partName'+num}>
                                                                    {part.lessonName}
                                                                </li>
                                                                <li key={'partLink'+num}>
                                                                    <a target='_blank' rel="noreferrer"  style={{textDecoration: 'none'}} href={part.link}>القائمة</a>
                                                                </li>
                                                                </ul>
                                                            </li>
                                                        :
                                                        <li key={'partObject'+num}>
                                                            <ul className='lesson-part'>
                                                                <li key={'partName'+num}>{part.lessonName}</li>
                                                                <li
                                                                    style={{color:'#64ec64',fontWeight:'bold'}}
                                                                    key={'duration'+num}>
                                                                    ستتوفر قريبا
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    );
                                                }
                                            })}
                                        
                                        {
                                            lesson.exam.map(Exam =>{
                                                return(
                                                    Exam.link ?
                                                        <li key={'examObject'+num}>
                                                            <ul className='lesson-part'>
                                                                <li key={'name'+num}>
                                                                    {Exam.name }
                                                                </li>
                                                                <li key={'examLink'+num}>
                                                                    <a target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} href={Exam.link}>الاختبار</a>
                                                                </li>
                                                            </ul>
                                                        </li>     
                                                        :
                                                        ''
                                                )
                                            })
                                        }
                                        </ul>
                                    </div>
                                :
                                    <div key={'lesson'+num} className="lesson">
                                        <div className='lesson-title'>
                                            <h1 className="lecture-name">{lesson.name}</h1>
                                            <img className="arrow-div" src={arrowUp} alt="arrow-up"/>
                                            <h4 
                                                style={{margin:'0 0 0 3%', textAlign:'left', width: 'fit-content'}}
                                            >
                                                {'المحاضرة مغلقة'}
                                            </h4>
                                        </div>
                                        <ul className='lesson-parts'>
                                            {lesson.parts.map((part,num)=>{
                                                if(part.lessonName.search('مسائل الملزمة') !== -1){
                                                    return(
                                                        <li key={'partObject'+num}>
                                                            <ul className='lesson-part'>
                                                                <li key={'partName'+num}>
                                                                    {part.lessonName}
                                                                </li>
                                                                <li key={'partLink'+num}>
                                                                    <a target='_blank' rel="noreferrer"  style={{textDecoration: 'none'}} href={part.link}>القائمة</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    )
                                                }
                                                
                                            })}
                                            
                                            {
                                                lesson.exam.map(Exam =>{
                                                    return(
                                                        Exam.link ?
                                                            <li key={'examObject'+num}>
                                                                <ul className='lesson-part'>
                                                                    <li key={'name'+num}>
                                                                        {Exam.name }
                                                                    </li>
                                                                    <li key={'examLink'+num}>
                                                                        <a target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} href={Exam.link}>الاختبار</a>
                                                                    </li>
                                                                </ul>
                                                            </li>     
                                                            :
                                                            ''
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                            )
                        }else{
                            return(
                                <Fragment key={'lesson-fragment'+num}>
                                    <div key={'lesson'+num} className="lesson">
                                        <div className='lesson-title'>
                                            <h1 className="lecture-name">{lesson.name}</h1>
                                            <li id={'form'+lesson.order} key={'partInput'+num}>
                                                <form  onSubmit={e => e.preventDefault()}>
                                                    <input
                                                        id={lesson.order}
                                                        className='input-field'
                                                        type="text"
                                                        placehorder="Input code(case sensitive!)"
                                                        onChange={handleChange}
                                                        max='10'
                                                    />
                                                {inputValue.length !== 0 ?
                                                <button id={lesson.order} onClick={handleSubmit} style={{backgroundColor:'white',color:'black',fontWeight:'bold'}} >Check</button>
                                                :
                                                ''}
                                                </form>
                                                
                                            </li>
                                            {exist.map((ele, num) =>{
                                                    if(ele[0] === lesson.order){
                                                        if(ele[1] === 0){
                                                            return(
                                                                <li id='wrong'
                                                                    style={{color:'rgb(99, 2, 2)',fontWeight:'bold', listStyleType: 'none', marginRight:'8vw'}}
                                                                    key={'duration'+num}>
                                                                    كود غير صحيح
                                                                </li>
                                                        )
                                                        }
                                                    }
                                                })}
                                            <img className="arrow-div" src={arrowUp} alt="arrow-up"/>
                                        </div>
                                    </div>
                                    <ul key={'lesson-parts'+num} className='lesson-parts'>
                                        {lesson.parts.map((part,num)=>{
                                            if(part.lessonName.search('مسائل الملزمة') !== -1){
                                                return(
                                                    <li key={'partObject'+num}>
                                                        <ul className='lesson-part'>
                                                            <li key={'partName'+num}>
                                                                {part.lessonName}
                                                            </li>
                                                            <li key={'partLink'+num}>
                                                                <a target='_blank' rel="noreferrer"  style={{textDecoration: 'none'}} href={part.link}>القائمة</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                )
                                            }
                                            
                                        })}
                                        
                                        {
                                            lesson.exam.map(Exam =>{
                                                return(
                                                    Exam.link ?
                                                        <li key={'examObject'+num}>
                                                            <ul className='lesson-part'>
                                                                <li key={'name'+num}>
                                                                    {Exam.name }
                                                                </li>
                                                                <li key={'examLink'+num}>
                                                                    <a target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} href={Exam.link}>الاختبار</a>
                                                                </li>
                                                            </ul>
                                                        </li>     
                                                        :
                                                        ''
                                                )
                                            })
                                        }
                                    </ul>
                                </Fragment>
                            )
                        }
                    }
                })}
            </div>
        );
    }
    if(userPayingSystem === 'MPS' || localStorage.getItem("userPayingSystem") === 'MPS'){
        
        return(
            <div className="lessons-box">
                {DynamicsMPS.map((month) =>{
                    
                        return(
                            <Fragment>
                                <h2 className="title"
                                style={{textAlign:'right', marginRight: '2%'}}
                                >{month.name}</h2>
                                {month.data.map((lesson,num)=>{
                                    if(userCodes){  
                                        if(userCodes.filter(obj => obj.order === lesson.order).length === 1){
                                            let diff = handleDateChange(userCodes, lesson.order)[0]
                                            let finalDate =  handleDateChange(userCodes, lesson.order)[1];
                                            return(
                                                (diff < 345600000  && diff > 0) || finalDate === 'Open' ? 
                                                    <div key={'lesson'+num} className="lesson">
                                                        <div className='lesson-title'>
                                                            <h1 className="lecture-name">{lesson.name}</h1>
                                                            <img className="arrow-div" src={arrowUp} alt="arrow-up"/>
                                                            <h4 
                                                                style={{margin:'0 0 0 3%', textAlign:'left', width: 'fit-content'}}
                                                            >
                                                                {finalDate !== 'Open' ? 
                                                                    
                                                                    <>
                                                                        :الوقت المتبقي للمحاضر<br/>
                                                                        {finalDate}
                                                                    </>
                                                                
                                                                :
                                                                    ('Always Open')
                                                            }
                                                            </h4>
                                                        </div>
                                                        <ul className='lesson-parts'>
                                                            {lesson.parts.map((part,num)=>{
                                                                if(part.lessonName.search('مسائل الملزمة') === -1){
                                                                    return(
                                                                    <li key={'partObject'+num}>
                                                                        <ul className='lesson-part'>
                                                                            <li key={'partName'+num}>
                                                                            {part.lessonName}
                                                                            </li>
                                                                            <li key={'partState'+num} >
                                                                                <Link className='play-btn' id={getIDfromURL(part.link)} data-notebook={part.attachments.notebook || null} data-homework={part.attachments.homework || null} onClick={handleVideoIDChange} to={'/Hany-AbdulGawed-platform/lessonView'} >  مشاهدة    </Link>
                                                                                <button id={getIDfromURL(part.link)} className='lesson-btn' style={{color:'#4bd84b',fontWeight:'bold'}}>  مفتوحة</button>
                                                                            </li>
                                                                            <li key={part.duration}>
                                                                                {part.duration}
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    ); 
                                                                }else{
                                                                    return(
                                                                        part.link !== 'soon' ? 
                
                                                                        <li key={'partObject'+num}>
                                                                            <ul className='lesson-part'>
                                                                                <li key={'partName'+num}>
                                                                                    {part.lessonName}
                                                                                </li>
                                                                                <li key={'partLink'+num}>
                                                                                    <a target='_blank' rel="noreferrer"  style={{textDecoration: 'none'}} href={part.link}>القائمة</a>
                                                                                </li>
                                                                                </ul>
                                                                            </li>
                                                                        :
                                                                        <li key={'partObject'+num}>
                                                                            <ul className='lesson-part'>
                                                                                <li key={'partName'+num}>{part.lessonName}</li>
                                                                                <li
                                                                                    style={{color:'#64ec64',fontWeight:'bold'}}
                                                                                    key={'duration'+num}>
                                                                                    ستتوفر قريبا
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    );
                                                                }
                                                            })}
                                                        
                                                        {
                                                            lesson.exam.map(Exam =>{
                                                                return(
                                                                    Exam.link && Exam.name !== ''?
                                                                        <li key={'examObject'+Exam.name}>
                                                                            <ul className='lesson-part'>
                                                                                <li key={'name'+num}>
                                                                                    {Exam.name }
                                                                                </li>
                                                                                <li key={'examLink'+Exam.name}>
                                                                                    <a target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} href={Exam.link}>الاختبار</a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>     
                                                                        :
                                                                        ''
                                                                )
                                                            })
                                                        }
                                                        </ul>
                                                    </div>
                                                :
                                                    <div key={'lesson'+num} className="lesson">
                                                        <div className='lesson-title'>
                                                            <h1 className="lecture-name">{lesson.name}</h1>
                                                            <img className="arrow-div" src={arrowUp} alt="arrow-up"/>
                                                            <h4 
                                                                style={{margin:'0 0 0 3%', textAlign:'left', width: 'fit-content'}}
                                                            >
                                                                {'المحاضرة مغلقة'}
                                                            </h4>
                                                        </div>
                                                        <ul className='lesson-parts'>
                                                            {lesson.parts.map((part,num)=>{
                                                                if(part.lessonName.search('مسائل الملزمة') !== -1){
                                                                    return(
                                                                        <li key={'partObject'+num}>
                                                                            <ul className='lesson-part'>
                                                                                <li key={'partName'+num}>
                                                                                    {part.lessonName}
                                                                                </li>
                                                                                <li key={'partLink'+num}>
                                                                                    <a target='_blank' rel="noreferrer"  style={{textDecoration: 'none'}} href={part.link}>القائمة</a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    )
                                                                }
                                                                
                                                            })}
                                                            
                                                            {
                                                                lesson.exam.map(Exam =>{
                                                                    return(
                                                                        Exam.link ?
                                                                            <li key={'examObject'+Exam.name}>
                                                                                <ul className='lesson-part'>
                                                                                    <li key={'name'+Exam.name}>
                                                                                        {Exam.name }
                                                                                    </li>
                                                                                    <li key={'examLink'+Exam.name}>
                                                                                        <a target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} href={Exam.link}>الاختبار</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>     
                                                                            :
                                                                            ''
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                            )
                                        }else{
                                            return(
                                                <Fragment key={'lesson-fragment'+num}>
                                                    <div key={'lesson'+num} className="lesson">
                                                        <div className='lesson-title'>
                                                            <h1 className="lecture-name">{lesson.name}</h1>
                                                            <li id={'form'+lesson.order} key={'partInput'+num}>
                                                                <form  onSubmit={e => e.preventDefault()}>
                                                                    <input
                                                                        id={lesson.order}
                                                                        className='input-field'
                                                                        type="text"
                                                                        placehorder="Input code(case sensitive!)"
                                                                        onChange={handleChange}
                                                                        max='10'
                                                                    />
                                                                {inputValue.length !== 0 ?
                                                                <button id={lesson.order} onClick={handleSubmit} style={{backgroundColor:'white',color:'black',fontWeight:'bold'}} >Check</button>
                                                                :
                                                                ''}
                                                                </form>
                                                                
                                                            </li>
                                                            {exist.map((ele, num) =>{
                                                                    if(ele[0] === lesson.order){
                                                                        if(ele[1] === 0){
                                                                            return(
                                                                                <li id='wrong'
                                                                                    style={{color:'rgb(99, 2, 2)',fontWeight:'bold', listStyleType: 'none', marginRight:'8vw'}}
                                                                                    key={'duration'+num}>
                                                                                    كود غير صحيح
                                                                                </li>
                                                                        )
                                                                        }
                                                                    }
                                                                })}
                                                            <img className="arrow-div" src={arrowUp} alt="arrow-up"/>
                                                        </div>
                                                        <ul key={'lesson-parts'+num} className='lesson-parts'>
                                                            {lesson.parts.map((part,num)=>{
                                                                if(part.lessonName.search('مسائل الملزمة') !== -1){
                                                                    return(
                                                                        <li key={'partObject'+num}>
                                                                            <ul className='lesson-part'>
                                                                                <li key={'partName'+num}>
                                                                                    {part.lessonName}
                                                                                </li>
                                                                                <li key={'partLink'+num}>
                                                                                    <a target='_blank' rel="noreferrer"  style={{textDecoration: 'none'}} href={part.link}>القائمة</a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    )
                                                                }
                                                                
                                                            })}
                                                            
                                                            {
                                                                lesson.exam.map(Exam =>{
                                                                    return(
                                                                        Exam.link ?
                                                                            <li key={'examObject'+Exam.name}>
                                                                                <ul className='lesson-part'>
                                                                                    <li key={'name'+Exam.name}>
                                                                                        {Exam.name}
                                                                                    </li>
                                                                                    <li key={'examLink'+Exam.name}>
                                                                                        <a target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} href={Exam.link}>الاختبار</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>     
                                                                            :
                                                                            ''
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </Fragment>
                                            )
                                        }
                                    }
                                })}
                            </Fragment>
                        );
                })
                }
            </div>
        );
    }
    if(localStorage.getItem("userPayingSystem") === 'null' || localStorage.getItem("userPayingSystem") === 'none'){
        return (<h1 style={{textAlign:'center', marginTop:'200px'}}>
            نظام الاشتراك غير محدد
            <br/>
            يرجي اعادة تحميل الصفحة او تحديد نظام الاشتراك
        </h1>)
    }
}

export default Dynamics;