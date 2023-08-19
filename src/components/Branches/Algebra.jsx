/* eslint-disable array-callback-return */
import {useState, Fragment} from 'react';
import {Link} from "react-router-dom";
import arrowUp from './photos/arrow-up-filled.png'
import LoginBtn from './login'
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
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=9UBMAJl3zwc&ab_channel=HanyAbdlgawad',
                    'duration':'0:12:47',
                    'attachments':{
                        'notebook':'',
                        'homework':'',
                    }
                },
                {
                    'lessonName':'الجزء الاول',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=x4hPH5Wreyk',
                    'duration':'1:23:5',
                    'attachments':{
                        'notebook':'1f-mr9jXcCjjJJwErEOtMUC-zq-PhFs85',
                        'homework':'15F-wJ0DT2t14KMs5UgqIfvBcfUiBR1FL',
                    }
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=_bw0kuOSdis&ab_channel=HanyAbdlgawad',
                    'duration':'0:51:56',
                    'attachments':{
                        'notebook':'1f-mr9jXcCjjJJwErEOtMUC-zq-PhFs85',
                        'homework':'15F-wJ0DT2t14KMs5UgqIfvBcfUiBR1FL',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'duration':'',
                    'link':'https://youtube.com/playlist?list=PLzuKs18sUQiUJV_-M7119zIydLre9e15F',
                }
            ],
            'exam': {
                'name':'امتحان المحاضرة الاولي',
                'link':'http://form-timer.com/start/c938161e'
            }
        },
        {
            'name' : 'المحاضرة الثانية - ذات الحدين',
            'order':'algebra2',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=p2aDs2ddmgE&ab_channel=HanyAbdlgawad',
                    'duration':'0:15:22',
                    'attachments':{
                        'notebook':'1GffPwtpFKN6IYzr9lbOe3f7JsXTQATZJ',
                        'homework':'131t1bJDrpL4drkWIKIMCAhWxBlEAPey-',
                    }
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=q1Jcq314iFU&ab_channel=HanyAbdlgawad',
                    'duration':'1:20:59',
                    'attachments':{
                        'notebook':'1GffPwtpFKN6IYzr9lbOe3f7JsXTQATZJ',
                        'homework':'131t1bJDrpL4drkWIKIMCAhWxBlEAPey-',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'duration':'',
                    'link':'https://youtube.com/playlist?list=PLzuKs18sUQiVn0qSngxfhvN1r29ce49-F',
                }
            ],
            'exam': {
                'name':'امتحان المحاضرة الثانية',
                'link':'http://form-timer.com/start/4b81b3a3'
            }
        },
        {
            'name' : 'المحاضرة الثالثة - ذات الحدين',
            'order':'algebra3',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=CDm6yUoqDvk',
                    'duration':'1:25:30',
                    'attachments':{
                        'notebook':'1GffPwtpFKN6IYzr9lbOe3f7JsXTQATZJ',
                        'homework':'1ZlfcraUobJKutBf9FQUaGZxjhqNjxFR9',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiUfoRzOTl8EK2rBqrKufCau',
                    'duration':'',
                }
            ],
            'exam' : ' امتحان ذات الحدين بالسنتر'
        },
        {
            'name' : 'المحاضرة الرابعة',
            'order':'algebra4',
            'parts' :[
                {
                    'lessonName':'ذات الحدين - أفكار منوعة',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=X7g6jBlM6Q8',
                    'duration':'0:53:55',
                    'attachments':{
                        'notebook':'1dCwUeWs82eTLWfVRFcz-Rl6vRGQGyhOP',
                        'homework':'1lERGcFQ6WujClUb6U9RF_sWE5D2YM2B8',
                    }
                    
                },
                {
                    'lessonName':'الأعداد المركبة - الجزء الأول',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=6siAmS5y7fM',
                    'duration':'1:31:22',
                    'attachments':{
                        'notebook':'14kg3xszMZzjorFkNf_wFLmkxXysLYPCr',
                        'homework':'1_JM23Kp927RghA-vLkhXO64EO68rbRis',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة - ذات الحدين',
                    'state':false,
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiXeAyg2o473ddm5zh686okG',
                    'duration':'',
                    'attachments':{
                        'notebook':'14kg3xszMZzjorFkNf_wFLmkxXysLYPCr',
                        'homework':'1_JM23Kp927RghA-vLkhXO64EO68rbRis',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة - الأعداد المركبة',
                    'state':false,
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiVDubz97QqhosX6loGoaHnf',
                    'duration':'',
                }
            ],
            'exam': {
                'name':'امتحان المحاضرة الرابعة',
                'link':'http://form-timer.com/start/feaf2f11'
            }
        },
        {
            'name' : 'المحاضرة الثانية - الاعداد المركبة',
            'order':'algebra5',
            'parts' :[
                {
                    'lessonName':'الجزاء الاول - ديموافر',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=4UwJ63AC2-8',
                    'duration':'',
                    'attachments':{
                        'notebook':'185o2RNhCWV1lwZ-dxHZPQW81Xk2t6Jsy',
                        'homework':'1-3S9QO5Fzk4CFJD5MC2_VJzlQuSpsNAt',
                    }
                },
                {
                    'lessonName':'تمهيد - حساب المثلثات',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=K-Aft0XWYSA',
                    'duration':'',
                    'attachments':{
                        'notebook':'185o2RNhCWV1lwZ-dxHZPQW81Xk2t6Jsy',
                        'homework':'1-3S9QO5Fzk4CFJD5MC2_VJzlQuSpsNAt',
                    }
                },
                {
                    'lessonName':'الجزء الثاني - الصور المزيفة',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=T55NrKHVP3U',
                    'duration':'',
                    'attachments':{
                        'notebook':'185o2RNhCWV1lwZ-dxHZPQW81Xk2t6Jsy',
                        'homework':'1-3S9QO5Fzk4CFJD5MC2_VJzlQuSpsNAt',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiVao18tpRANyiJhhOb71wOf',
                    'duration':'',
                }
            ],
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : 'المحاضرة الثالثة - الاعداد المركبة',
            'order':'algebra6',
            'codes': ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo'],
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان الاعداد المركبة'
        },
        {
            'name' : 'المحاضرة الاولي - التباديل والتوافيق',
            'order':'algebra7',
            'codes': ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo'],
            'parts' :[
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - التباديل والتوافيق',
            'order':'algebra8',
            'codes': ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo'],
            'parts' :[
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : 'المحاضرة الثالثة - التباديل والتوافيق',
            'order':'algebra9',
            'codes': ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo'],
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان التباديل والتوافيق'
        },
        {
            'name' : 'المحاضرة الاولي - المحدادت',
            'order':'algebra10',
            'codes': ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo'],
            'parts' :[
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - المحدادت',
            'order':'algebra11',
            'codes': ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo'],
            'parts' :[
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : 'المحاضرة الثالثة - المحدادت',
            'order':'algebra12',
            'codes': ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo'],
            'parts' :[
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحدادت'
        },
        {
            'name' : 'المحاضرة الاولي - المصفوفات',
            'order':'algebra13',
            'codes': ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo'],
            'parts' :[
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - المصفوفات',
            'order':'algebra14',
            'codes': ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo'],
            'parts' :[
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المصفوفات'
        },
    ]
    const AlgebralessonsMPS = [
        {
            'name' : 'المحاضرة الاولي - ذات الحدين',
            'order':'algebra1',
            'parts' :[
                {
                    'lessonName':'تمهيد',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=9UBMAJl3zwc&ab_channel=HanyAbdlgawad',
                    'duration':'0:12:47',
                    'attachments':{
                        'notebook':'',
                        'homework':'',
                    }
                },
                {
                    'lessonName':'الجزء الاول',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=x4hPH5Wreyk',
                    'duration':'1:23:5',
                    'attachments':{
                        'notebook':'1f-mr9jXcCjjJJwErEOtMUC-zq-PhFs85',
                        'homework':'15F-wJ0DT2t14KMs5UgqIfvBcfUiBR1FL',
                    }
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=_bw0kuOSdis&ab_channel=HanyAbdlgawad',
                    'duration':'0:51:56',
                    'attachments':{
                        'notebook':'1f-mr9jXcCjjJJwErEOtMUC-zq-PhFs85',
                        'homework':'15F-wJ0DT2t14KMs5UgqIfvBcfUiBR1FL',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'duration':'',
                    'link':'https://youtube.com/playlist?list=PLzuKs18sUQiUJV_-M7119zIydLre9e15F',
                }
            ],
            'exam': {
                'name':'امتحان المحاضرة الاولي',
                'link':'http://form-timer.com/start/c938161e'
            }
        },
        {
            'name' : 'المحاضرة الثانية - ذات الحدين',
            'order':'algebra2',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=p2aDs2ddmgE&ab_channel=HanyAbdlgawad',
                    'duration':'0:15:22',
                    'attachments':{
                        'notebook':'1GffPwtpFKN6IYzr9lbOe3f7JsXTQATZJ',
                        'homework':'131t1bJDrpL4drkWIKIMCAhWxBlEAPey-',
                    }
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=q1Jcq314iFU&ab_channel=HanyAbdlgawad',
                    'duration':'1:20:59',
                    'attachments':{
                        'notebook':'1GffPwtpFKN6IYzr9lbOe3f7JsXTQATZJ',
                        'homework':'131t1bJDrpL4drkWIKIMCAhWxBlEAPey-',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'duration':'',
                    'link':'https://youtube.com/playlist?list=PLzuKs18sUQiVn0qSngxfhvN1r29ce49-F',
                }
            ],
            'exam': {
                'name':'امتحان المحاضرة الثانية',
                'link':'http://form-timer.com/start/4b81b3a3'
            }
        },
        {
            'name' : 'المحاضرة الثالثة - ذات الحدين',
            'order':'algebra3',
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=CDm6yUoqDvk',
                    'duration':'1:25:30',
                    'attachments':{
                        'notebook':'1GffPwtpFKN6IYzr9lbOe3f7JsXTQATZJ',
                        'homework':'1ZlfcraUobJKutBf9FQUaGZxjhqNjxFR9',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiUfoRzOTl8EK2rBqrKufCau',
                    'duration':'',
                }
            ],
            'exam' : ' امتحان ذات الحدين بالسنتر'
        },
        {
            'name' : 'المحاضرة الرابعة',
            'order':'algebra4',
            'parts' :[
                {
                    'lessonName':'ذات الحدين - أفكار منوعة',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=X7g6jBlM6Q8',
                    'duration':'0:53:55',
                    'attachments':{
                        'notebook':'1dCwUeWs82eTLWfVRFcz-Rl6vRGQGyhOP',
                        'homework':'1lERGcFQ6WujClUb6U9RF_sWE5D2YM2B8',
                    }
                    
                },
                {
                    'lessonName':'الأعداد المركبة - الجزء الأول',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=6siAmS5y7fM',
                    'duration':'1:31:22',
                    'attachments':{
                        'notebook':'14kg3xszMZzjorFkNf_wFLmkxXysLYPCr',
                        'homework':'1_JM23Kp927RghA-vLkhXO64EO68rbRis',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة - ذات الحدين',
                    'state':false,
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiXeAyg2o473ddm5zh686okG',
                    'duration':'',
                    'attachments':{
                        'notebook':'14kg3xszMZzjorFkNf_wFLmkxXysLYPCr',
                        'homework':'1_JM23Kp927RghA-vLkhXO64EO68rbRis',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة - الأعداد المركبة',
                    'state':false,
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiVDubz97QqhosX6loGoaHnf',
                    'duration':'',
                }
            ],
            'exam': {
                'name':'امتحان المحاضرة الرابعة',
                'link':'http://form-timer.com/start/feaf2f11'
            }
        },
        {
            'name' : 'المحاضرة الثانية - الاعداد المركبة',
            'order':'algebra5',
            'parts' :[
                {
                    'lessonName':'الجزاء الاول - ديموافر',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=4UwJ63AC2-8',
                    'duration':'',
                    'attachments':{
                        'notebook':'185o2RNhCWV1lwZ-dxHZPQW81Xk2t6Jsy',
                        'homework':'1-3S9QO5Fzk4CFJD5MC2_VJzlQuSpsNAt',
                    }
                },
                {
                    'lessonName':'تمهيد - حساب المثلثات',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=K-Aft0XWYSA',
                    'duration':'',
                    'attachments':{
                        'notebook':'185o2RNhCWV1lwZ-dxHZPQW81Xk2t6Jsy',
                        'homework':'1-3S9QO5Fzk4CFJD5MC2_VJzlQuSpsNAt',
                    }
                },
                {
                    'lessonName':'الجزء الثاني - الصور المزيفة',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=T55NrKHVP3U',
                    'duration':'',
                    'attachments':{
                        'notebook':'185o2RNhCWV1lwZ-dxHZPQW81Xk2t6Jsy',
                        'homework':'1-3S9QO5Fzk4CFJD5MC2_VJzlQuSpsNAt',
                    }
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiVao18tpRANyiJhhOb71wOf',
                    'duration':'',
                }
            ],
            'exam' : 'امتحان المحاضرة الثانية'
        },
        {
            'name' : 'المحاضرة الثالثة - الاعداد المركبة',
            'order':'algebra6',
            'codes': ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo'],
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان الاعداد المركبة'
        },
        {
            'name' : 'المحاضرة الاولي - التباديل والتوافيق',
            'order':'algebra7',
            'codes': ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo'],
            'parts' :[
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الاولي'
        },
        {
            'name' : 'المحاضرة الثانية - التباديل والتوافيق',
            'order':'algebra8',
            'codes': ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo'],
            'parts' :[
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'duration':'',
                    'link':'soon',
                }
            ],
            'exam' : 'امتحان المحاضرة الثانية'
        }
    ]
    const[exist, setExist] = useState([])
    const[inputValue, setInputValue] = useState([])
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
                                diff < 259200000  && diff > 0 ? 
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
                                        
                                            {lesson.exam.name ?
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
                                                    {lesson.exam}
                                                </li>}
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
                                    </div>
                            )
                        }else{
                            return(
                                <Fragment>
                                    <div key={'lesson'+num} className="lesson">
                                        <div className='lesson-title'>
                                            <h1 className="lecture-name">{lesson.name}</h1>
                                            <li id={'form'+lesson.order} key={'partInput'+num}>
                                                <form onSubmit={e => e.preventDefault}>
                                                    <input
                                                        id={lesson.order}
                                                        className='input-field'
                                                        type="text"
                                                        placehorder="Input code(case sensitive!)"
                                                        onChange={handleChange}
                                                        max='10'
                                                    />
                                                    <button id={lesson.order} onClick={handleSubmit} style={{backgroundColor:'white',color:'black',fontWeight:'bold'}} >Check</button>
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
                                        
                                        {lesson.exam.name ?
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
                <h2 className="title"
                style={{textAlign:'right'}}
                >الشهر الاول - أغسطس</h2>
                {AlgebralessonsMPS.map((lesson,num) =>{
                    if(userCodes){  
                        if(userCodes.filter(obj => obj.order === lesson.order).length === 1){
                            let diff = handleDateChange(userCodes, lesson.order)[0]
                            let finalDate =  handleDateChange(userCodes, lesson.order)[1];
                            return(
                                diff < 259200000  && diff > 0 ? 
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
                                        
                                            {lesson.exam.name ?
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
                                                    {lesson.exam}
                                                </li>}
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
                                    </div>
                            )
                        }else{
                            return(
                                <Fragment>
                                    <div key={'lesson'+num} className="lesson">
                                        <div className='lesson-title'>
                                            <h1 className="lecture-name">{lesson.name}</h1>
                                            <li id={'form'+lesson.order} key={'partInput'+num}>
                                                <form onSubmit={e => e.preventDefault}>
                                                    <input
                                                        id={lesson.order}
                                                        className='input-field'
                                                        type="text"
                                                        placehorder="Input code(case sensitive!)"
                                                        onChange={handleChange}
                                                        max='10'
                                                    />
                                                    <button id={lesson.order} onClick={handleSubmit} style={{backgroundColor:'white',color:'black',fontWeight:'bold'}} >Check</button>
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
                                        
                                        {lesson.exam.name ?
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
    if(localStorage.getItem("userPayingSystem") === 'null' || localStorage.getItem("userPayingSystem") === 'none'){
        return (<h1 style={{textAlign:'center', marginTop:'200px'}}>
            نظام الاشتراك غير محدد
            <br/>
            يرجي اعادة تحميل الصفحة او تحديد نظام الاشتراك
        </h1>)
    }
}
export default Algebra;
