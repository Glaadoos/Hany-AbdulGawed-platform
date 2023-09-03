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


const Algebra = ({setVideoId, user, userPayingSystem, userCodes}) =>{

    // dictionaries & State variable & variables
    const Algebralessons =[
        {
            'name' : 'المحاضرة الاولي - ذات الحدين',
            'order':'algebra1',
            'parts' :[
                {
                    'lessonName':'تمهيد',
                    'link':'https://www.youtube.com/watch?v=9UBMAJl3zwc&ab_channel=HanyAbdlgawad',
                    'duration':'0:12:47',
                    'attachments':{
                        'notebook':'',
                        'homework':'',
                    }
                },
                {
                    'lessonName':'الجزء الاول',
                    'link':'https://www.youtube.com/watch?v=x4hPH5Wreyk',
                    'duration':'1:23:5',
                    'attachments':{
                        'notebook':'1f-mr9jXcCjjJJwErEOtMUC-zq-PhFs85',
                        'homework':'15F-wJ0DT2t14KMs5UgqIfvBcfUiBR1FL',
                    }
                },
                {
                    'lessonName':'الجزء الثاني',
                    'link':'https://www.youtube.com/watch?v=_bw0kuOSdis&ab_channel=HanyAbdlgawad',
                    'duration':'0:51:56',
                    'attachments':{
                        'notebook':'1f-mr9jXcCjjJJwErEOtMUC-zq-PhFs85',
                        'homework':'15F-wJ0DT2t14KMs5UgqIfvBcfUiBR1FL',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'duration':'',
                    'link':'https://youtube.com/playlist?list=PLzuKs18sUQiUJV_-M7119zIydLre9e15F',
                }
            ],
            'exam': 
            [
                {
                    'name':'امتحان المحاضرة الاولي',
                    'link':'http://form-timer.com/start/c938161e'
                }
            ]
        },
        {
            'name' : 'المحاضرة الثانية - ذات الحدين',
            'order':'algebra2',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'link':'https://www.youtube.com/watch?v=p2aDs2ddmgE&ab_channel=HanyAbdlgawad',
                    'duration':'0:15:22',
                    'attachments':{
                        'notebook':'1GffPwtpFKN6IYzr9lbOe3f7JsXTQATZJ',
                        'homework':'131t1bJDrpL4drkWIKIMCAhWxBlEAPey-',
                    }
                },
                {
                    'lessonName':'الجزء الثاني',
                    'link':'https://www.youtube.com/watch?v=q1Jcq314iFU&ab_channel=HanyAbdlgawad',
                    'duration':'1:20:59',
                    'attachments':{
                        'notebook':'1GffPwtpFKN6IYzr9lbOe3f7JsXTQATZJ',
                        'homework':'131t1bJDrpL4drkWIKIMCAhWxBlEAPey-',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'duration':'',
                    'link':'https://youtube.com/playlist?list=PLzuKs18sUQiVn0qSngxfhvN1r29ce49-F',
                }
            ],
            'exam': 
            [
                {
                    'name':'امتحان المحاضرة الثانية',
                    'link':'http://form-timer.com/start/4b81b3a3'
                }
            ]
        },
        {
            'name' : 'المحاضرة الثالثة - ذات الحدين',
            'order':'algebra3',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'link':'https://www.youtube.com/watch?v=CDm6yUoqDvk',
                    'duration':'1:25:30',
                    'attachments':{
                        'notebook':'1GffPwtpFKN6IYzr9lbOe3f7JsXTQATZJ',
                        'homework':'1ZlfcraUobJKutBf9FQUaGZxjhqNjxFR9',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiUfoRzOTl8EK2rBqrKufCau',
                    'duration':'',
                }
            ],
            'exam': [{'name':'امتحان ذات الحدين بالسنتر'}]
        },
        {
            'name' : 'المحاضرة الرابعة',
            'order':'algebra4',
            'parts' :[
                {
                    'lessonName':'ذات الحدين - أفكار منوعة',
                    'link':'https://www.youtube.com/watch?v=X7g6jBlM6Q8',
                    'duration':'0:53:55',
                    'attachments':{
                        'notebook':'1dCwUeWs82eTLWfVRFcz-Rl6vRGQGyhOP',
                        'homework':'1lERGcFQ6WujClUb6U9RF_sWE5D2YM2B8',
                    }
                    
                },
                {
                    'lessonName':'الأعداد المركبة - الجزء الأول',
                    'link':'https://www.youtube.com/watch?v=6siAmS5y7fM',
                    'duration':'1:31:22',
                    'attachments':{
                        'notebook':'14kg3xszMZzjorFkNf_wFLmkxXysLYPCr',
                        'homework':'1_JM23Kp927RghA-vLkhXO64EO68rbRis',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة - ذات الحدين',
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiXeAyg2o473ddm5zh686okG',
                    'duration':'',
                    'attachments':{
                        'notebook':'14kg3xszMZzjorFkNf_wFLmkxXysLYPCr',
                        'homework':'1_JM23Kp927RghA-vLkhXO64EO68rbRis',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة - الأعداد المركبة',
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiVDubz97QqhosX6loGoaHnf',
                    'duration':'',
                }
            ],
            'exam': 
            [
                {
                    'name':'امتحان المحاضرة الرابعة',
                    'link':'http://form-timer.com/start/feaf2f11'
                }
            ]
        },
        {
            'name' : 'المحاضرة الثانية - الاعداد المركبة',
            'order':'algebra5',
            'parts' :[
                {
                    'lessonName':'الجزاء الاول - ديموافر',
                    'link':'https://www.youtube.com/watch?v=4UwJ63AC2-8',
                    'duration':'0:51:48',
                    'attachments':{
                        'notebook':'185o2RNhCWV1lwZ-dxHZPQW81Xk2t6Jsy',
                        'homework':'1-3S9QO5Fzk4CFJD5MC2_VJzlQuSpsNAt',
                    }
                },
                {
                    'lessonName':'تمهيد - حساب المثلثات',
                    'link':'https://www.youtube.com/watch?v=K-Aft0XWYSA',
                    'duration':'0:9:13',
                    'attachments':{
                        'notebook':'185o2RNhCWV1lwZ-dxHZPQW81Xk2t6Jsy',
                        'homework':'1-3S9QO5Fzk4CFJD5MC2_VJzlQuSpsNAt',
                    }
                },
                {
                    'lessonName':'الجزء الثاني - الصور المزيفة',
                    'link':'https://www.youtube.com/watch?v=T55NrKHVP3U',
                    'duration':'0:51:41',
                    'attachments':{
                        'notebook':'185o2RNhCWV1lwZ-dxHZPQW81Xk2t6Jsy',
                        'homework':'1-3S9QO5Fzk4CFJD5MC2_VJzlQuSpsNAt',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiVao18tpRANyiJhhOb71wOf',
                    'duration':'',
                }
            ],
            'exam': [{
                'name':'امتحان المحاضرة الثانية',
                'link':'https://form-timer.com/start/be96a2ce'
            }]
        },
        {
            'name' : 'المحاضرة الثالثة - الاعداد المركبة',
            'order':'algebra6',
            'parts' :[
                {
                    'lessonName':'الجذور التكعيبية للواحد الصحيح',
                    'duration':'2:0:2',
                    'link':'https://www.youtube.com/watch?v=j5vVG7RR6aE',
                    'attachments':{
                        'notebook':'10kcTo87_eThu8I-EvjJi9kayj2wV-WR6',
                        'homework':'1605Z4GAthosmG5VdVxwWoD1LqpGJ7fIt',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'duration':'',
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiUPoa7rb7b2uPb42W1zI5tT',
                }
            ],
            'exam': [{
                'name':'امتحان الاعداد المركبة',
                'link':'https://extendedforms.io/form/99f970fa-3dc9-4248-92d9-1b3b5d77ce2b/login'
            }]
        },
        {
            'name' : 'المحاضرة الرابعة - الاعداد المركبة',
            'order':'algebra7',
            'parts' :[
                {
                    'lessonName':'خواص المقياس والمرافق',
                    'duration':'0:58:10',
                    'link':'https://www.youtube.com/watch?v=qSq0tAqD7lo',
                    'attachments':{
                        'notebook':'14Gmlj9MRLsOTNqWwQ_aNyfWJLmqc3nFt',
                        'homework':'1tnL6esuG_awo5OJLJfc6ySeNU_d0vZkE',
                    }
                },
                {
                    'lessonName':'أفكار منوعة على الأعداد المركبة',
                    'duration':'1:29:27',
                    'link':'https://www.youtube.com/watch?v=9Aemw_MbfDI',
                    'attachments':{
                        'notebook':'14Gmlj9MRLsOTNqWwQ_aNyfWJLmqc3nFt',
                        'homework':'1tnL6esuG_awo5OJLJfc6ySeNU_d0vZkE',
                    }
                },
                {
                    'lessonName':'حل الأعداد المركبة بالآلة الحاسبة',
                    'duration':'0:15:22',
                    'link':'https://www.youtube.com/watch?v=Ca9MBvtIjr0',
                    'attachments':{
                        'notebook':'14Gmlj9MRLsOTNqWwQ_aNyfWJLmqc3nFt',
                        'homework':'1tnL6esuG_awo5OJLJfc6ySeNU_d0vZkE',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'duration':'',
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiXE9l37xW1Ccgr6B3XYCfbA',
                }
            ],
            'exam': [{'name':'امتحان المحاضرة الرابعة'}]
        },
        {
            'name' : 'المحاضرة الاولي - التباديل والتوافيق',
            'order':'algebra8',
            'parts' :[
                {
                    'lessonName':'التباديل',
                    'duration':'1:57:31',
                    'link':'https://www.youtube.com/watch?v=wFSO5u2l3KQ',
                    'attachments':{
                        'notebook':'1dZoq9i2nbX_m04T_WUzq42mEkMJlVDQD',
                        'homework':'1f5SYxuuNyYENO2ucfkl0ups1ft_2rBU1',
                    }
                },
                {
                    'lessonName':'الجزء الثاني',
                    'duration':'0:17:8',
                    'link':'https://www.youtube.com/watch?v=uhh5QO7XkTg',
                    'attachments':{
                        'notebook':'1dZoq9i2nbX_m04T_WUzq42mEkMJlVDQD',
                        'homework':'1f5SYxuuNyYENO2ucfkl0ups1ft_2rBU1',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'duration':'',
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiUWXV6bjufAjSglL3E1X6u9',
                },
            ],
            'exam' : [
                {'name':'امتحان التباديل 1', 'link':'https://fill.boloforms.com/proctor/1AT69qIwiwWEHVUB5Qv3cpm0JHjp2Tu5A4hsT4NJ_zrs?p=view'},
                {'name':'امتحان التباديل والتوافيق 2', 'link':'https://fill.boloforms.com/proctor/1AGZIsCf1YMD28Z5HKpCPJMcLCnaAGCWYF5Iq5TxJ4rE?p=view'}
            ]
        },
        {
            'name' : 'المحاضرة الثانية - التباديل والتوافيق',
            'order':'algebra9',
            'parts' :[
                {
                    'lessonName':'المحاضرة الثانية - التباديل والتوافيق',
                    'duration':'',
                    'link':'https://www.youtube.com/watch?v=b8AJwq_yJXc',
                    'attachments':{
                        'notebook':'1HEwfIA4gzAASGnFqg2A2311eHctGxl4E',
                        'homework':'1DrevoTpRLnfRWeL6Vw84SM8tcn0aPtcv',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'duration':'',
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiVSxrN_N5zjVdG6U59xE30w'
                }
            ],
            'exam': [{'name':'امتحان المحاضرة الثانية'}]
        },
        {
            'name' : 'المحاضرة الثالثة - التباديل والتوافيق',
            'order':'algebra10',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam': [{'name':'امتحان التباديل والتوافيق'}]
        },
        {
            'name' : 'المحاضرة الاولي - المحدادت',
            'order':'algebra11',
            'parts' :[
                {
                    'lessonName':'مسائل الملزمة',
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam': [{'name':'امتحان المحاضرة الاولي'}]
        },
        {
            'name' : 'المحاضرة الثانية - المحدادت',
            'order':'algebra12',
            'parts' :[
                {
                    'lessonName':'مسائل الملزمة',
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam': [{'name':'امتحان المحاضرة الثانية'}]
        },
        {
            'name' : 'المحاضرة الثالثة - المحدادت',
            'order':'algebra13',
            'parts' :[
                {
                    'lessonName':'مسائل الملزمة',
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam': [{'name':'امتحان المحدادت'}]
        },
        {
            'name' : 'المحاضرة الاولي - المصفوفات',
            'order':'algebra14',
            'parts' :[
                {
                    'lessonName':'مسائل الملزمة',
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam': [{'name':'امتحان المحاضرة الاولي'}]
        },
        {
            'name' : 'المحاضرة الثانية - المصفوفات',
            'order':'algebra15',
            'parts' :[
                {
                    'lessonName':'مسائل الملزمة',
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam': [{'name':'امتحان المصفوفات'}]
        },
    ]
    const AlgebralessonsMPS = [
        {
            'name':'الشهر الأول - أغسطس',
            'data':[
                    {
                        'name' : 'المحاضرة الاولي - ذات الحدين',
                        'order':'algebra1',
                        'parts' :[
                            {
                                'lessonName':'تمهيد',
                                'link':'https://www.youtube.com/watch?v=9UBMAJl3zwc&ab_channel=HanyAbdlgawad',
                                'duration':'0:12:47',
                                'attachments':{
                                    'notebook':'',
                                    'homework':'',
                                }
                            },
                            {
                                'lessonName':'الجزء الاول',
                                'link':'https://www.youtube.com/watch?v=x4hPH5Wreyk',
                                'duration':'1:23:5',
                                'attachments':{
                                    'notebook':'1f-mr9jXcCjjJJwErEOtMUC-zq-PhFs85',
                                    'homework':'15F-wJ0DT2t14KMs5UgqIfvBcfUiBR1FL',
                                }
                            },
                            {
                                'lessonName':'الجزء الثاني',
                                'link':'https://www.youtube.com/watch?v=_bw0kuOSdis&ab_channel=HanyAbdlgawad',
                                'duration':'0:51:56',
                                'attachments':{
                                    'notebook':'1f-mr9jXcCjjJJwErEOtMUC-zq-PhFs85',
                                    'homework':'15F-wJ0DT2t14KMs5UgqIfvBcfUiBR1FL',
                                }
                            },
                            {
                                'lessonName':'مسائل الملزمة',
                                'duration':'',
                                'link':'https://youtube.com/playlist?list=PLzuKs18sUQiUJV_-M7119zIydLre9e15F',
                            }
                        ],
                        'exam': 
                        [
                            {
                                'name':'امتحان المحاضرة الاولي',
                                'link':'http://form-timer.com/start/c938161e'
                            }
                        ]
                    },
                    {
                        'name' : 'المحاضرة الثانية - ذات الحدين',
                        'order':'algebra2',
                        'parts' :[
                            {
                                'lessonName':'الجزء الاول',
                                'link':'https://www.youtube.com/watch?v=p2aDs2ddmgE&ab_channel=HanyAbdlgawad',
                                'duration':'0:15:22',
                                'attachments':{
                                    'notebook':'1GffPwtpFKN6IYzr9lbOe3f7JsXTQATZJ',
                                    'homework':'131t1bJDrpL4drkWIKIMCAhWxBlEAPey-',
                                }
                            },
                            {
                                'lessonName':'الجزء الثاني',
                                'link':'https://www.youtube.com/watch?v=q1Jcq314iFU&ab_channel=HanyAbdlgawad',
                                'duration':'1:20:59',
                                'attachments':{
                                    'notebook':'1GffPwtpFKN6IYzr9lbOe3f7JsXTQATZJ',
                                    'homework':'131t1bJDrpL4drkWIKIMCAhWxBlEAPey-',
                                }
                            },
                            {
                                'lessonName':'مسائل الملزمة',
                                'duration':'',
                                'link':'https://youtube.com/playlist?list=PLzuKs18sUQiVn0qSngxfhvN1r29ce49-F',
                            }
                        ],
                        'exam': 
                        [
                            {
                                'name':'امتحان المحاضرة الثانية',
                                'link':'http://form-timer.com/start/4b81b3a3'
                            }
                        ]
                    },
                    {
                        'name' : 'المحاضرة الثالثة - ذات الحدين',
                        'order':'algebra3',
                        'parts' :[
                            {
                                'lessonName':'الجزء الاول',
                                'link':'https://www.youtube.com/watch?v=CDm6yUoqDvk',
                                'duration':'1:25:30',
                                'attachments':{
                                    'notebook':'1GffPwtpFKN6IYzr9lbOe3f7JsXTQATZJ',
                                    'homework':'1ZlfcraUobJKutBf9FQUaGZxjhqNjxFR9',
                                }
                            },
                            {
                                'lessonName':'مسائل الملزمة',
                                'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiUfoRzOTl8EK2rBqrKufCau',
                                'duration':'',
                            }
                        ],
                        'exam': [{'name':'امتحان ذات الحدين بالسنتر'}]
                    },
                    {
                        'name' : 'المحاضرة الرابعة',
                        'order':'algebra4',
                        'parts' :[
                            {
                                'lessonName':'ذات الحدين - أفكار منوعة',
                                'link':'https://www.youtube.com/watch?v=X7g6jBlM6Q8',
                                'duration':'0:53:55',
                                'attachments':{
                                    'notebook':'1dCwUeWs82eTLWfVRFcz-Rl6vRGQGyhOP',
                                    'homework':'1lERGcFQ6WujClUb6U9RF_sWE5D2YM2B8',
                                }
                                
                            },
                            {
                                'lessonName':'الأعداد المركبة - الجزء الأول',
                                'link':'https://www.youtube.com/watch?v=6siAmS5y7fM',
                                'duration':'1:31:22',
                                'attachments':{
                                    'notebook':'14kg3xszMZzjorFkNf_wFLmkxXysLYPCr',
                                    'homework':'1_JM23Kp927RghA-vLkhXO64EO68rbRis',
                                }
                            },
                            {
                                'lessonName':'مسائل الملزمة - ذات الحدين',
                                'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiXeAyg2o473ddm5zh686okG',
                                'duration':'',
                                'attachments':{
                                    'notebook':'14kg3xszMZzjorFkNf_wFLmkxXysLYPCr',
                                    'homework':'1_JM23Kp927RghA-vLkhXO64EO68rbRis',
                                }
                            },
                            {
                                'lessonName':'مسائل الملزمة - الأعداد المركبة',
                                'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiVDubz97QqhosX6loGoaHnf',
                                'duration':'',
                            }
                        ],
                        'exam': 
                        [
                            {
                                'name':'امتحان المحاضرة الرابعة',
                                'link':'http://form-timer.com/start/feaf2f11'
                            }
                        ]
                    },
                    {
                        'name' : 'المحاضرة الثانية - الاعداد المركبة',
                        'order':'algebra5',
                        'parts' :[
                            {
                                'lessonName':'الجزاء الاول - ديموافر',
                                'link':'https://www.youtube.com/watch?v=4UwJ63AC2-8',
                                'duration':'0:51:48',
                                'attachments':{
                                    'notebook':'185o2RNhCWV1lwZ-dxHZPQW81Xk2t6Jsy',
                                    'homework':'1-3S9QO5Fzk4CFJD5MC2_VJzlQuSpsNAt',
                                }
                            },
                            {
                                'lessonName':'تمهيد - حساب المثلثات',
                                'link':'https://www.youtube.com/watch?v=K-Aft0XWYSA',
                                'duration':'0:9:13',
                                'attachments':{
                                    'notebook':'185o2RNhCWV1lwZ-dxHZPQW81Xk2t6Jsy',
                                    'homework':'1-3S9QO5Fzk4CFJD5MC2_VJzlQuSpsNAt',
                                }
                            },
                            {
                                'lessonName':'الجزء الثاني - الصور المزيفة',
                                'link':'https://www.youtube.com/watch?v=T55NrKHVP3U',
                                'duration':'0:51:41',
                                'attachments':{
                                    'notebook':'185o2RNhCWV1lwZ-dxHZPQW81Xk2t6Jsy',
                                    'homework':'1-3S9QO5Fzk4CFJD5MC2_VJzlQuSpsNAt',
                                }
                            },
                            {
                                'lessonName':'مسائل الملزمة',
                                'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiVao18tpRANyiJhhOb71wOf',
                                'duration':'',
                            }
                        ],
                        'exam': [{
                            'name':'امتحان المحاضرة الثانية',
                            'link':'https://form-timer.com/start/be96a2ce'
                        }]
                    },
                    {
                        'name' : 'المحاضرة الثالثة - الاعداد المركبة',
                        'order':'algebra6',
                        'parts' :[
                            {
                                'lessonName':'الجذور التكعيبية للواحد الصحيح',
                                'duration':'2:0:2',
                                'link':'https://www.youtube.com/watch?v=j5vVG7RR6aE',
                                'attachments':{
                                    'notebook':'10kcTo87_eThu8I-EvjJi9kayj2wV-WR6',
                                    'homework':'1605Z4GAthosmG5VdVxwWoD1LqpGJ7fIt',
                                }
                            },
                            {
                                'lessonName':'مسائل الملزمة',
                                'duration':'',
                                'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiUPoa7rb7b2uPb42W1zI5tT',
                            }
                        ],
                        'exam': [{
                            'name':'امتحان الاعداد المركبة',
                            'link':'https://extendedforms.io/form/99f970fa-3dc9-4248-92d9-1b3b5d77ce2b/login'
                        }]
                    },
                    {
                        'name' : 'المحاضرة الرابعة - الاعداد المركبة',
                        'order':'algebra7',
                        'parts' :[
                            {
                                'lessonName':'خواص المقياس والمرافق',
                                'duration':'0:58:10',
                                'link':'https://www.youtube.com/watch?v=qSq0tAqD7lo',
                                'attachments':{
                                    'notebook':'14Gmlj9MRLsOTNqWwQ_aNyfWJLmqc3nFt',
                                    'homework':'1tnL6esuG_awo5OJLJfc6ySeNU_d0vZkE',
                                }
                            },
                            {
                                'lessonName':'أفكار منوعة على الأعداد المركبة',
                                'duration':'1:29:27',
                                'link':'https://www.youtube.com/watch?v=9Aemw_MbfDI',
                                'attachments':{
                                    'notebook':'14Gmlj9MRLsOTNqWwQ_aNyfWJLmqc3nFt',
                                    'homework':'1tnL6esuG_awo5OJLJfc6ySeNU_d0vZkE',
                                }
                            },
                            {
                                'lessonName':'حل الأعداد المركبة بالآلة الحاسبة',
                                'duration':'0:15:22',
                                'link':'https://www.youtube.com/watch?v=Ca9MBvtIjr0',
                                'attachments':{
                                    'notebook':'14Gmlj9MRLsOTNqWwQ_aNyfWJLmqc3nFt',
                                    'homework':'1tnL6esuG_awo5OJLJfc6ySeNU_d0vZkE',
                                }
                            },
                            {
                                'lessonName':'مسائل الملزمة',
                                'duration':'',
                                'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiXE9l37xW1Ccgr6B3XYCfbA',
                            }
                        ],
                        'exam': [{'name':'امتحان المحاضرة الرابعة'}]
                    },
                    {
                        'name' : 'المحاضرة الاولي - التباديل والتوافيق',
                        'order':'algebra8',
                        'parts' :[
                            {
                                'lessonName':'التباديل',
                                'duration':'1:57:31',
                                'link':'https://www.youtube.com/watch?v=wFSO5u2l3KQ',
                                'attachments':{
                                    'notebook':'1dZoq9i2nbX_m04T_WUzq42mEkMJlVDQD',
                                    'homework':'1f5SYxuuNyYENO2ucfkl0ups1ft_2rBU1',
                                }
                            },
                            {
                                'lessonName':'الجزء الثاني',
                                'duration':'0:17:8',
                                'link':'https://www.youtube.com/watch?v=uhh5QO7XkTg',
                                'attachments':{
                                    'notebook':'1dZoq9i2nbX_m04T_WUzq42mEkMJlVDQD',
                                    'homework':'1f5SYxuuNyYENO2ucfkl0ups1ft_2rBU1',
                                }
                            },
                            {
                                'lessonName':'مسائل الملزمة',
                                'duration':'',
                                'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiUWXV6bjufAjSglL3E1X6u9',
                            },
                        ],
                        'exam' : [
                            {'name':'امتحان التباديل 1', 'link':'https://fill.boloforms.com/proctor/1AT69qIwiwWEHVUB5Qv3cpm0JHjp2Tu5A4hsT4NJ_zrs?p=view'},
                            {'name':'امتحان التباديل والتوافيق 2', 'link':'https://fill.boloforms.com/proctor/1AGZIsCf1YMD28Z5HKpCPJMcLCnaAGCWYF5Iq5TxJ4rE?p=view'}
                        ]
                    },
                    {
                        'name' : 'المحاضرة الثانية - التباديل والتوافيق',
                        'order':'algebra9',
                        'parts' :[
                            {
                                'lessonName':'المحاضرة الثانية',
                                'duration':'',
                                'link':'https://www.youtube.com/watch?v=b8AJwq_yJXc',
                                'attachments':{
                                    'notebook':'1HEwfIA4gzAASGnFqg2A2311eHctGxl4E',
                                    'homework':'1DrevoTpRLnfRWeL6Vw84SM8tcn0aPtcv',
                                }
                            },
                            {
                                'lessonName':'مسائل الملزمة',
                                'duration':'',
                                'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiVSxrN_N5zjVdG6U59xE30w'
                            }
                        ],
                        'exam': [{'name':'امتحان المحاضرة الثانية'}]
                    },
                ]
        },
    ]
    const[exist, setExist] = useState([])
    const[inputValue, setInputValue] = useState([])
    // time for lectuer to close
    let hours=96;

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
    }
    const checkCode = async(code, order)=>{
        let codeexist;
        await Algebralessons.map(async(obj) =>{
                                if(obj.order ===order){
                                    codeexist = await CodeAPI.getSpecific('Algebra', order, code).then(data => {return(data.codeExist)})
                                    const newArray = exist.filter(arr => arr[0] !== order)
                                    newArray.push([order, codeexist])
                                    setExist(newArray)
                                    console.log(userCodes, exist)
                                    if(codeexist === 1){
                                        const deleted = await CodeAPI.UpdataOrderCodes('Algebra', order, code).then(data => {return(data)});
                                        if(!(deleted.message)){
                                            await UserAPI.updateAvailableCodes(localStorage.getItem("userEmail"), [order, code])
                                            alert(`تم أضافة الكود بنجاح في : ${dayjs().format('D')}/${dayjs().format('MM')} الوقت ${dayjs().format('hh:mm:ss')} \n الكود متاح لثلاث ايام من هذا التاريخ`)
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
        let date = dayjs(userCodes.filter(obj => obj.order === order)[0].date);
        let dataOfClose = dayjs(date.add(hours, 'h')) ;
        let diff = (dataOfClose).diff(dayjs().format())
        return [diff, millisecondsToDays(diff)];
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
                style={{textAlign:'right'}}
                >:الجبر</h1>
                {Algebralessons.map((lesson,num) =>{
                    if(userCodes){  
                        if(userCodes.filter(obj => obj.order === lesson.order).length === 1){
                            let diff = handleDateChange(userCodes, lesson.order)[0]
                            let finalDate =  handleDateChange(userCodes, lesson.order)[1];
                            return(
                                diff < 345600000  && diff > 0 ? 
                                    <div key={'lesson'+num} className="lesson">
                                        <div className='lesson-title'>
                                            <h1 className="lecture-name">{lesson.name}</h1>
                                            <img className="arrow-div" src={arrowUp} alt="arrow-up"/>
                                            <h4 
                                                style={{margin:'0 0 0 3%', textAlign:'left', width: 'fit-content'}}
                                            >
                                                {':الوقت المتبقي للمحاضر'}<br/>
                                                {finalDate}
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
                                                            <li key={'partObject'+num}>
                                                                <ul className='lesson-part'>
                                                                    <li key={'examName'+num}>
                                                                        {lesson.exam.name }
                                                                    </li>
                                                                    <li key={'examLink'+num}>
                                                                        <a target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} href={lesson.exam.link}>الاختبار</a>
                                                                    </li>
                                                                </ul>
                                                            </li>     
                                                            :
                                                            <li key={'exam'+num}>
                                                                {Exam.name}
                                                            </li>
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
                                                lesson.exam.map((Exam,num) =>{
                                                    return(
                                                        Exam.link ?
                                                            <li key={'partObject'+num}>
                                                                <ul className='lesson-part'>
                                                                    <li key={'examName'+num}>
                                                                        {lesson.exam.name }
                                                                    </li>
                                                                    <li key={'examLink'+num}>
                                                                        <a target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} href={lesson.exam.link}>الاختبار</a>
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
                                <Fragment>
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
                                                        <li key={'partObject'+num}>
                                                            <ul className='lesson-part'>
                                                                <li key={'examName'+num}>
                                                                    {lesson.exam.name }
                                                                </li>
                                                                <li key={'examLink'+num}>
                                                                    <a target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} href={lesson.exam.link}>الاختبار</a>
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
    if(userPayingSystem === 'MPS' || localStorage.getItem("userPayingSystem") === 'LPS'){
        return(
            <div className="lessons-box">
                <h1 className="title"
                style={{textAlign:'right'}}
                >:الجبر</h1>
                
                {AlgebralessonsMPS.map((month) =>{
                        return(
                            <Fragment>
                                <h2 className="title"
                                style={{textAlign:'right'}}
                                >{month.name}</h2>
                                {month.data.map((lesson,num)=>{
                                    if(userCodes){  
                                        if(userCodes.filter(obj => obj.order === lesson.order).length === 1){
                                            let diff = handleDateChange(userCodes, lesson.order)[0]
                                            let finalDate =  handleDateChange(userCodes, lesson.order)[1];
                                            return(
                                                diff < 345600000  && diff > 0 ? 
                                                    <div key={'lesson'+num} className="lesson">
                                                        <div className='lesson-title'>
                                                            <h1 className="lecture-name">{lesson.name}</h1>
                                                            <img className="arrow-div" src={arrowUp} alt="arrow-up"/>
                                                            <h4 
                                                                style={{margin:'0 0 0 3%', textAlign:'left', width: 'fit-content'}}
                                                            >
                                                                {':الوقت المتبقي للمحاضر'}<br/>
                                                                {finalDate}
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
                                                                                <li key={'examName'+num}>
                                                                                    {Exam.name }
                                                                                </li>
                                                                                <li key={'examLink'+num}>
                                                                                    <a target='_blank' rel="noreferrer" style={{textDecoration: 'none'}} href={Exam.link}>الاختبار</a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>     
                                                                        :
                                                                        <li key={'exam'+num}>
                                                                            {Exam.name}
                                                                        </li>
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
                                                                                    <li key={'examName'+num}>
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
                                                                                <li key={'examName'+num}>
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
export default Algebra;
