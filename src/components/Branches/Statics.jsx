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

const Statics = ({setVideoId, user, userPayingSystem, userCodes}) =>{

    // dictionaries & State variable & variables
    const Staticslesson = [
        {
            "name":"المحاضرة الأولي ",
            "order":"statics01",
            "parts":[
                {
                    "lessonName":"",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=eQzsrHHmk3c",
                    "attachments":{
                        "notebook":"1bVX-b2iZN7wWYZjJDXJ5F1SxjnaK5BL9",
                        "homework":"133RAV86-KzNvlM2hHgVBfXGIBS25IhZO"
                    }
                },
                {
                    "lessonName":"",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=x9eu8SvzFDs",
                    "attachments":{
                        "notebook":"1bVX-b2iZN7wWYZjJDXJ5F1SxjnaK5BL9",
                        "homework":"133RAV86-KzNvlM2hHgVBfXGIBS25IhZO"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiVjhkZPl18zMLFIK2VMWqA0"
                }
            ],
            "exam":[{"name":"أمتحان المحاضرة الأولي", "link":"https://docs.google.com/forms/d/e/1FAIpQLSeN4Qc2Tyrj2IDV7-KDCinwVMBLr8N6WOjzkcqLVWIUyNST5w/viewform?usp=sharing"}]
        },
        {
            "name":"المحاضرة الثانية ",
            "order":"statics02",
            "parts":[
                
                {
                    "lessonName":"",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=-O1MZKxBZMk",
                    "attachments":{
                        "notebook":"1MCyc-KnBbTINPt9j6VhBjQu3URwJJtyk",
                        "homework":"1V-ouQ8BV1206xwkByKIuZAQorwYY-G_t"
                    }
                },
                {
                    "lessonName":"",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=csspzBus71w",
                    "attachments":{
                        "notebook":"1MCyc-KnBbTINPt9j6VhBjQu3URwJJtyk",
                        "homework":"1V-ouQ8BV1206xwkByKIuZAQorwYY-G_t"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiXN_4FfhTYcEjo3pTDWDU8t"
                }
            ],
            "exam":[{"name":" أمتحان المحاضرة الثانية ", "link":"https://docs.google.com/forms/d/e/1FAIpQLSe8lzO4gJHan7Tb1VkwiG-Yk5TL2V0-c5gZc3_dZLDjaG97UA/viewform?usp=sf_link"}]
        },
        {
            "name":"المحاضرة الثالثة ",
            "order":"statics03",
            "parts":[
                {
                    "lessonName":"",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=FCPGhIArk-k",
                    "attachments":{
                        "notebook":"1qebMDdi-DskqyZi3NQit-A9Iu-9lhc_Z",
                        "homework":"1c0hQEigG7ArixJkc8DqEs7tug41lAV05"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiWGUZA5K6gGwgiy0zHElRnA"
                }
            ],
            "exam":[{"name":"أمتحان المحاضرة الثالثة"}]
        },
        {
            "name":"المحاضرة الرابعة  ",
            "order":"statics04",
            "parts":[
                
                {
                    "lessonName":"العزوم 1",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=_tz4EfHGMJU",
                    "attachments":{
                        "notebook":"1ogb1kT7oIuKMc79LpZ5BD_9WDFCJ8Qq3",
                        "homework":"1pQAw9FRhSg_Cu1Klk5eM0ESCJ_vI2k7g"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiWRGhK5XySzZokN9yeBbBhT"
                }
            ],
            "exam":[{"name":" أمتحان المحاضرة الرابعة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSfNl7GFBvqlP3fD-FWIHasnc4AGqxFkdcTGPb1ZmeMxBGM0zg/viewform?usp=sf_link"}]
        },
        {
            "name":"المحاضرة الخامسة  ",
            "order":"statics05",
            "parts":[
                
                {
                    "lessonName":"العزوم 2",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=QcoEipY5te0",
                    "attachments":{
                        "notebook":"1gADTGxTZyQ26JAjcxuVNeh7X_u4WOMQN",
                        "homework":"1istXXUREy_0-NxRpdYXk1TKselvtQmIX"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiXCS4M9fk8jA5Mj8tpbY8oe"
                }
            ],
            "exam":[{"name":" أمتحان المحاضرة الخامسة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSfNl7GFBvqlP3fD-FWIHasnc4AGqxFkdcTGPb1ZmeMxBGM0zg/viewform?usp=sf_link"}]
        },
        {
            "name":"المحاضرة السادسة  ",
            "order":"statics06",
            "parts":[
                
                {
                    "lessonName":"العزوم 3",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=UUu7f2ofBVk",
                    "attachments":{
                        "notebook":"1zbVqhFm-OMDKHgyJcPURvl5yZ77xpoQK",
                        "homework":"1smorqIh-ltQO790z7JhnBJFISGhR4D7h"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUoBasTbWBnqo_lmSbJQTUT&feature=shared"
                }
            ],
            "exam":[{"name":" أمتحان المحاضرة السادسة"}]
        },
        {
            "name":"المحاضرة السابعة",
            "order":"statics07",
            "parts":[
                {
                    "lessonName":"القوي المتوازية 1",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=1WT1HXPu3WY",
                    "attachments":{
                        "notebook":"1keJTnDQ0lrkD-iSjmjwWbVaBYaHoqpAx",
                        "homework":"1cYtmny4wXNEv3v5YRD35Ut9287TxQLfw"
                    }
                },
                {
                    "lessonName":"القوي المتوازية 2",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=Pd56b52dT8g",
                    "attachments":{
                        "notebook":"1keJTnDQ0lrkD-iSjmjwWbVaBYaHoqpAx",
                        "homework":"1cYtmny4wXNEv3v5YRD35Ut9287TxQLfw"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiXFuGet0lGuFrMtfceynhX6"
                }
            ],
            "exam":[{"name":" أمتحان المحاضرة السابعة", "link":"https://docs.google.com/forms/d/1rWpGdMvM75Q4_WtoABQlzW7hOKHAiLU0-5ucph_Q1XA/edit?usp=forms_home"}]
        },
        {
            "name":"المحاضرة الثامنة",
            "order":"statics08",
            "parts":[
                {
                    "lessonName":"القوي المتوازية 3",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=-850dK8L7XQ",
                    "attachments":{
                        "notebook":"1T2oql79kQMGlhEJZQSPvxaooRkIhCtRg",
                        "homework":"1s__t_KO8JJnifRA-50bbKEiiGf3Q_lmi"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiU0LbruTCvMysTw7FLmSO43"
                }
            ],
            "exam":[{"name":" أمتحان المحاضرة الثامنة", "link":"https://docs.google.com/forms/d/1vUFgWV0i4gYFy6Zdjxp9OcMN5t0NDyegp0kjnGGHDDk/edit"}]
        },
        {
            "name":"تابع الوحدة الثانية والثالثة",
            "order":"statics_09",
            "parts":[
                
                {
                    "lessonName":"أفكار منوعة على القوى المتوازية",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=m8Iy7dseAao",
                    "attachments":{
                        "notebook":"11UlmP56flSmTveNOhQNOhRyZ7bJjDXVA",
                        "homework":"1ZXKdx57x8NKFFtGIyBOL9CN8PnLWP4M7"
                    }
                },
                {
                    "lessonName":"العزوم ثلاثي البعد - هام جدا",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=iZHzvDxDEAs",
                    "attachments":{
                        "notebook":"11UlmP56flSmTveNOhQNOhRyZ7bJjDXVA",
                        "homework":"1ZXKdx57x8NKFFtGIyBOL9CN8PnLWP4M7"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":""
                }
            ],
            "exam":[{"name":"أمتحان"}]
        },
        {
            "name":"المحاضرة التاسعة",
            "order":"statics09",
            "parts":[
                {
                    "lessonName":"الازدواج - المحاضرة الأولى",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=YuzZkjfM2WU",
                    "attachments":{
                        "notebook":"1lXB0-7fgrTvqSimlOwJJZ3mV1HKoErS8",
                        "homework":"1rz1KzJIthIjSyevfyS-MhKEXDZWSmAaN "
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUEV8nmmVFAQcIv8rYO7fJD"
                }
            ],
            "exam":[{"name":" أمتحان المحاضرة التاسعة", "link":"https://docs.google.com/forms/d/1k6AsxiJ5-8IaJnEZi7bIPhMsvnKFUzOBrXt9qP3zgXI/edit?usp=forms_home"}]
        },
        {
            "name":"المحاضرة العاشرة",
            "order":"statics10",
            "parts":[
                {
                    "lessonName":"الازدواج 2",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=9bfYKnYUBfk",
                    "attachments":{
                        "notebook":"18wAhA0tZmIBX3DjhHlDw-Pupx-y6WjnX",
                        "homework":"1ql7q3xiULory5RW10g3RwF6T3LmQI_cN"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiV89j9JxTfN8pqf5bPiMaWn"
                }
            ],
            "exam":[{"name":" أمتحان المحاضرة العاشرة", "link":"https://docs.google.com/forms/d/1k6AsxiJ5-8IaJnEZi7bIPhMsvnKFUzOBrXt9qP3zgXI/edit?usp=forms_home"}]
        },
        {
            "name":"المحاضرة الحادية عشرة",
            "order":"statics11",
            "parts":[
                
                {
                    "lessonName":"الازدواج 3",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=427G7jPmVbQ",
                    "attachments":{
                        "notebook":"14qylanAJQoZ6IztbsPVk77OMAJ4u7TkA",
                        "homework":"1q4aUg3MeEk2YV2TsddVgIUQwJt8WI_bs"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiX0R6HnAxk832RdC-aNS4nJ"
                }
            ],
            "exam":[{"name":" أمتحان المحاضرة الحادية عشرة"}]
        },
        {
            "name":"المحاضرة الثانية عشرة",
            "order":"statics12",
            "parts":[
                
                {
                    "lessonName":"مركز الثقل 1 ",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=PtJGwxt2BRo",
                    "attachments":{
                        "notebook":"12YXW8RFjHrCCt-7NbPHd0OdN1jeOH2Tk",
                        "homework":"1Bhz8veipKJ4PzwT-_l7a8Azsiv_dfKEM"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUoyZlnITgZAFS-gmpxqacG"
                }
            ],
            "exam":[{"name":" أمتحان المحاضرة الثانية عشرة", "link":"https://docs.google.com/forms/d/1k6AsxiJ5-8IaJnEZi7bIPhMsvnKFUzOBrXt9qP3zgXI/edit?usp=forms_home"}]
        },
        {
            "name":"المحاضرة الثالثة عشر",
            "order":"statics13",
            "parts":[
                
                {
                    "lessonName":"مركز الثقل 2",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=xG6JE94Uenc",
                    "attachments":{
                        "notebook":"1d7brPJWIrP1fSAC8D1osNCi2Bf0f93Fr",
                        "homework":"12O9SS4rGkT3o_RyA1bR0iZMDzdOFluoV"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUuCtOGLh7W8f3IKnHRFpnv"
                }
            ],
            "exam":[{"name":" أمتحان المحاضرة الثالثة عشر"}]
        },
        {
            "name":"المحاضرة الرابعة عشر",
            "order":"statics14",
            "parts":[
                {
                    "lessonName":"الاتزان العام 1",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=RwFJ3F38K_I",
                    "attachments":{
                        "notebook":"1bwTc23MCEc8lccuYV-lGSSqeJebilg1D",
                        "homework":"1zYDdE15bo5MA_uJNZHghNTgXSDsvkfBt"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiVcFUt41Esa4L4kB4eHxoBr"
                }
            ],
            "exam":[{"name":" أمتحان المحاضرة الرابعة عشر", "link":"https://docs.google.com/forms/d/1k6AsxiJ5-8IaJnEZi7bIPhMsvnKFUzOBrXt9qP3zgXI/edit?usp=forms_home"}]
        },
        {
            "name":"المحاضرة الخامسة عشر",
            "order":"statics15",
            "parts":[
                
                {
                    "lessonName":"الاتزان العام 2",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=KNrbPIcCPS4",
                    "attachments":{
                        "notebook":"1H8k6Hry9jn1zvgxrKtzyJW6DkSFm5zS9",
                        "homework":"19lGyPnKCed8nlAvXuIEQvMsvekCAHf0X"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://www.youtube.com/playlist?list=PLzuKs18sUQiUFUcraMEFXj19U_uJvSxuQ"
                }
            ],
            "exam":[{"name":" أمتحان المحاضرة الخامسة عشر"}]
        },
        {
            'name' : 'مراجعة الاستاتيكا',
            'order':'revision01',
            'parts' :[
                {
                    'lessonName':'مسائل الملزمة',
                    'duration':'',
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiWL5MAiFyCk6bASZLakVCMz',
                }
            ],
            'exam' : [{'name':'امتحان التباديل والتوافيق'}]
        }
        
    ]
    const StaticsMPS = [
        {
            'name':':الشهر الاول',
            'data':[
                {
                    "name":"المحاضرة الأولي ",
                    "order":"statics01",
                    "parts":[
                        {
                            "lessonName":"الاحتكاك 1",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=eQzsrHHmk3c",
                            "attachments":{
                                "notebook":"1bVX-b2iZN7wWYZjJDXJ5F1SxjnaK5BL9",
                                "homework":"133RAV86-KzNvlM2hHgVBfXGIBS25IhZO"
                            }
                        },
                        {
                            "lessonName":"حل المعادلات بالالة",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=x9eu8SvzFDs",
                            "attachments":{
                                "notebook":"1bVX-b2iZN7wWYZjJDXJ5F1SxjnaK5BL9",
                                "homework":"133RAV86-KzNvlM2hHgVBfXGIBS25IhZO"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiVjhkZPl18zMLFIK2VMWqA0"
                        }
                    ],
                    "exam":[{"name":"أمتحان المحاضرة الأولي", "link":"https://docs.google.com/forms/d/e/1FAIpQLSeN4Qc2Tyrj2IDV7-KDCinwVMBLr8N6WOjzkcqLVWIUyNST5w/viewform?usp=sharing"}]
                },
                {
                    "name":"المحاضرة الثانية ",
                    "order":"statics02",
                    "parts":[
                        
                        {
                            "lessonName":"الاحتكاك 2",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=-O1MZKxBZMk",
                            "attachments":{
                                "notebook":"1MCyc-KnBbTINPt9j6VhBjQu3URwJJtyk",
                                "homework":"1V-ouQ8BV1206xwkByKIuZAQorwYY-G_t"
                            }
                        },
                        {
                            "lessonName":"تابع الاحتكاك 2 - أسئلة اختر",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=csspzBus71w",
                            "attachments":{
                                "notebook":"1MCyc-KnBbTINPt9j6VhBjQu3URwJJtyk",
                                "homework":"1V-ouQ8BV1206xwkByKIuZAQorwYY-G_t"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiXN_4FfhTYcEjo3pTDWDU8t"
                        }
                    ],
                    "exam":[{"name":" أمتحان المحاضرة الثانية ", "link":"https://docs.google.com/forms/d/e/1FAIpQLSe8lzO4gJHan7Tb1VkwiG-Yk5TL2V0-c5gZc3_dZLDjaG97UA/viewform?usp=sf_link"}]
                },
                {
                    "name":"المحاضرة الثالثة ",
                    "order":"statics03",
                    "parts":[
                        {
                            "lessonName":"الاحتكاك 3",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=FCPGhIArk-k",
                            "attachments":{
                                "notebook":"1qebMDdi-DskqyZi3NQit-A9Iu-9lhc_Z",
                                "homework":"1c0hQEigG7ArixJkc8DqEs7tug41lAV05"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiWGUZA5K6gGwgiy0zHElRnA"
                        }
                    ],
                    "exam":[{"name":"أمتحان المحاضرة الثالثة"}]
                },
                {
                    "name":"المحاضرة الرابعة  ",
                    "order":"statics04",
                    "parts":[
                        
                        {
                            "lessonName":"العزوم 1",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=_tz4EfHGMJU",
                            "attachments":{
                                "notebook":"1ogb1kT7oIuKMc79LpZ5BD_9WDFCJ8Qq3",
                                "homework":"1pQAw9FRhSg_Cu1Klk5eM0ESCJ_vI2k7g"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiWRGhK5XySzZokN9yeBbBhT"
                        }
                    ],
                    "exam":[{"name":" أمتحان المحاضرة الرابعة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSfNl7GFBvqlP3fD-FWIHasnc4AGqxFkdcTGPb1ZmeMxBGM0zg/viewform?usp=sf_link"}]
                },
                {
                    "name":"المحاضرة الخامسة  ",
                    "order":"statics05",
                    "parts":[
                        
                        {
                            "lessonName":"العزوم 2",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=QcoEipY5te0",
                            "attachments":{
                                "notebook":"1gADTGxTZyQ26JAjcxuVNeh7X_u4WOMQN",
                                "homework":"1istXXUREy_0-NxRpdYXk1TKselvtQmIX"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiXCS4M9fk8jA5Mj8tpbY8oe"
                        }
                    ],
                    "exam":[{"name":" أمتحان المحاضرة الخامسة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSfNl7GFBvqlP3fD-FWIHasnc4AGqxFkdcTGPb1ZmeMxBGM0zg/viewform?usp=sf_link"}]
                },
                {
                    "name":"المحاضرة السادسة",
                    "order":"statics06",
                    "parts":[
                        
                        {
                            "lessonName":"العزوم 3",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=UUu7f2ofBVk",
                            "attachments":{
                                "notebook":"1zbVqhFm-OMDKHgyJcPURvl5yZ77xpoQK",
                                "homework":"1smorqIh-ltQO790z7JhnBJFISGhR4D7h"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUoBasTbWBnqo_lmSbJQTUT&feature=shared"
                        }
                    ],
                    "exam":[{"name":" أمتحان المحاضرة السادسة"}]
                },
                {
                    "name":"المحاضرة السابعة",
                    "order":"statics07",
                    "parts":[
                        {
                            "lessonName":"القوي المتوازية 1",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=1WT1HXPu3WY",
                            "attachments":{
                                "notebook":"1keJTnDQ0lrkD-iSjmjwWbVaBYaHoqpAx",
                                "homework":"1cYtmny4wXNEv3v5YRD35Ut9287TxQLfw"
                            }
                        },
                        {
                            "lessonName":"القوي المتوازية 2",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=Pd56b52dT8g",
                            "attachments":{
                                "notebook":"1keJTnDQ0lrkD-iSjmjwWbVaBYaHoqpAx",
                                "homework":"1cYtmny4wXNEv3v5YRD35Ut9287TxQLfw"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiXFuGet0lGuFrMtfceynhX6"
                        }
                    ],
                    "exam":[{"name":" أمتحان المحاضرة السابعة", "link":"https://docs.google.com/forms/d/1rWpGdMvM75Q4_WtoABQlzW7hOKHAiLU0-5ucph_Q1XA/edit?usp=forms_home"}]
                },
                {
                    "name":"المحاضرة الثامنة",
                    "order":"statics08",
                    "parts":[
                        {
                            "lessonName":"القوي المتوازية 3",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=-850dK8L7XQ",
                            "attachments":{
                                "notebook":"1T2oql79kQMGlhEJZQSPvxaooRkIhCtRg",
                                "homework":"1s__t_KO8JJnifRA-50bbKEiiGf3Q_lmi"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiU0LbruTCvMysTw7FLmSO43"
                        }
                    ],
                    "exam":[{"name":" أمتحان المحاضرة الثامنة", "link":"https://docs.google.com/forms/d/1vUFgWV0i4gYFy6Zdjxp9OcMN5t0NDyegp0kjnGGHDDk/edit"}]
                }
            ]
        },
        {
            'name':':الشهر الثاني',
            'data':[
                {
                    "name":"تابع الوحدة الثانية والثالثة",
                    "order":"statics_09",
                    "parts":[
                        
                        {
                            "lessonName":"أفكار منوعة على القوى المتوازية",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=m8Iy7dseAao",
                            "attachments":{
                                "notebook":"11UlmP56flSmTveNOhQNOhRyZ7bJjDXVA",
                                "homework":"1ZXKdx57x8NKFFtGIyBOL9CN8PnLWP4M7"
                            }
                        },
                        {
                            "lessonName":"العزوم ثلاثي البعد - هام جدا",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=iZHzvDxDEAs",
                            "attachments":{
                                "notebook":"11UlmP56flSmTveNOhQNOhRyZ7bJjDXVA",
                                "homework":"1ZXKdx57x8NKFFtGIyBOL9CN8PnLWP4M7"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":""
                        }
                    ],
                    "exam":[{"name":"أمتحان"}]
                },
                {
                    "name":"المحاضرة التاسعة",
                    "order":"statics09",
                    "parts":[
                        
                        {
                            "lessonName":"الازدواج - المحاضرة الأولى",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=YuzZkjfM2WU",
                            "attachments":{
                                "notebook":"1lXB0-7fgrTvqSimlOwJJZ3mV1HKoErS8",
                                "homework":"1rz1KzJIthIjSyevfyS-MhKEXDZWSmAaN"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUEV8nmmVFAQcIv8rYO7fJD"
                        }
                    ],
                    "exam":[{"name":" أمتحان المحاضرة التاسعة", "link":"https://docs.google.com/forms/d/1k6AsxiJ5-8IaJnEZi7bIPhMsvnKFUzOBrXt9qP3zgXI/edit?usp=forms_home"}]
                },
                {
                    "name":"المحاضرة العاشرة",
                    "order":"statics10",
                    "parts":[
                        
                        {
                            "lessonName":"الازدواج 2",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=9bfYKnYUBfk",
                            "attachments":{
                                "notebook":"18wAhA0tZmIBX3DjhHlDw-Pupx-y6WjnX",
                                "homework":"1ql7q3xiULory5RW10g3RwF6T3LmQI_cN"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiV89j9JxTfN8pqf5bPiMaWn"
                        }
                    ],
                    "exam":[{"name":" أمتحان المحاضرة العاشرة", "link":"https://docs.google.com/forms/d/1k6AsxiJ5-8IaJnEZi7bIPhMsvnKFUzOBrXt9qP3zgXI/edit?usp=forms_home"}]
                },
                {
                    "name":"المحاضرة الحادية عشرة",
                    "order":"statics11",
                    "parts":[
                        
                        {
                            "lessonName":"الازدواج 3",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=427G7jPmVbQ",
                            "attachments":{
                                "notebook":"14qylanAJQoZ6IztbsPVk77OMAJ4u7TkA",
                                "homework":"1q4aUg3MeEk2YV2TsddVgIUQwJt8WI_bs"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiX0R6HnAxk832RdC-aNS4nJ"
                        }
                    ],
                    "exam":[{"name":" أمتحان المحاضرة الحادية عشرة"}]
                },
                {
                    "name":"المحاضرة الثانية عشرة",
                    "order":"statics12",
                    "parts":[
                        
                        {
                            "lessonName":"مركز الثقل 1 ",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=PtJGwxt2BRo",
                            "attachments":{
                                "notebook":"12YXW8RFjHrCCt-7NbPHd0OdN1jeOH2Tk",
                                "homework":"1Bhz8veipKJ4PzwT-_l7a8Azsiv_dfKEM"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUoyZlnITgZAFS-gmpxqacG"
                        }
                    ],
                    "exam":[{"name":" أمتحان المحاضرة الثانية عشرة", "link":"https://docs.google.com/forms/d/1k6AsxiJ5-8IaJnEZi7bIPhMsvnKFUzOBrXt9qP3zgXI/edit?usp=forms_home"}]
                },
                {
                    "name":"المحاضرة الثالثة عشر",
                    "order":"statics13",
                    "parts":[
                        
                        {
                            "lessonName":"مركز الثقل 2",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=xG6JE94Uenc",
                            "attachments":{
                                "notebook":"1d7brPJWIrP1fSAC8D1osNCi2Bf0f93Fr",
                                "homework":"12O9SS4rGkT3o_RyA1bR0iZMDzdOFluoV"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUuCtOGLh7W8f3IKnHRFpnv"
                        }
                    ],
                    "exam":[{"name":" أمتحان المحاضرة الثالثة عشر"}]
                },
                {
                    "name":"المحاضرة الرابعة عشر",
                    "order":"statics14",
                    "parts":[
                        
                        {
                            "lessonName":"الاتزان العام 1",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=RwFJ3F38K_I",
                            "attachments":{
                                "notebook":"1d7brPJWIrP1fSAC8D1osNCi2Bf0f93Fr",
                                "homework":"1zYDdE15bo5MA_uJNZHghNTgXSDsvkfBt"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiVcFUt41Esa4L4kB4eHxoBr"
                        }
                    ],
                    "exam":[{"name":" أمتحان المحاضرة الرابعة عشر", "link":"https://docs.google.com/forms/d/1k6AsxiJ5-8IaJnEZi7bIPhMsvnKFUzOBrXt9qP3zgXI/edit?usp=forms_home"}]
                },
                {
                    "name":"المحاضرة الخامسة عشر",
                    "order":"statics15",
                    "parts":[
                        
                        {
                            "lessonName":"الاتزان العام 2",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=KNrbPIcCPS4",
                            "attachments":{
                                "notebook":"1bwTc23MCEc8lccuYV-lGSSqeJebilg1D",
                                "homework":"19lGyPnKCed8nlAvXuIEQvMsvekCAHf0X"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://www.youtube.com/playlist?list=PLzuKs18sUQiUFUcraMEFXj19U_uJvSxuQ"
                        }
                    ],
                    "exam":[{"name":" أمتحان المحاضرة الخامسة عشر"}]
                },
                {
                    'name' : 'مراجعة الاستاتيكا',
                    'order':'revision01',
                    'parts' :[
                        {
                            'lessonName':'مسائل الملزمة',
                            'duration':'',
                            'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiWL5MAiFyCk6bASZLakVCMz',
                        }
                    ],
                    'exam' : [{'name':'امتحان التباديل والتوافيق'}]
                }
            ]
        },
    ]
    const[exist, setExist] = useState([])
    const[inputValue, setInputValue] = useState([])
    
    
    // time for lectuer to close
    let hours=96;
    
    // Branch Name
    let branch = 'Statics'

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
        await Staticslesson.map(async(obj) =>{
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
                >:الاستاتيكا</h1>
                {Staticslesson.map((lesson,num) =>{
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
                {StaticsMPS.map((month) =>{
                    
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

export default Statics;