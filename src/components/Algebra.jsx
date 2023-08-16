/* eslint-disable array-callback-return */
import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import arrowUp from './photos/arrow-up-filled.png'
import LoginBtn from './login'
import * as CodeAPI from '../API/CodeAPI'
import * as UserAPI from '../API/UesrApi'
const dayjs  = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)


const Algebra = ({setVideoId, user, userPayingSystem, userCodes,setUserCodes }) =>{

    // dictionaries & State variable
    const Algebralessons =[
        {
            'name' : 'المحاضرة الاولي - ذات الحدين',
            'order':'algebra1',
            'codes': ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo'],
            'parts' :[
                {
                    'lessonName':'تمهيد',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=9UBMAJl3zwc&ab_channel=HanyAbdlgawad',
                    'duration':'0:12:47',
                    'codes':
                        ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo']
                },
                {
                    'lessonName':'الجزء الاول',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=x4hPH5Wreyk',
                    'duration':'1:23:5',
                    'codes':['iwfkhfsb', '9YYiizh', 'zfME@YOa', 'wE46NF9V', '4O$gkRvm', 'wc#r3pGP', 'nePeFQcu', '82WsqB@D', 'J7Bqjr7', '#wW8oy89', 'fZQ7DWF1', 'XPFM1#sR', 'PrlzVe33', 'pqc3b8Up', 'HxyVaqyS', '#GrJ7Mko', 'oOEBM#yu', 'XoadOoc2', 'e0bsSi1c', '1gKu#Wf', 'nQMPe6Eo', 'z0TzRvG@', '95p9gDKD', 'aWBdI3G', 'Nxw4lWGf', 'yPt8dIqh', 'jI@Clx#2', '6yEE6pgk', 'u4raH13P', 'S@faq#j', 'MEGeLQud', 'DRTRZhk@', 'Yfhm6jw0', 'jSuzoWh6', 'r8c4Vb1x', 'hJlt0E56', 'QCJEkUg', 'N0Xbk0g', 'x1nqrXkm', 'zo1smghb', 'V$7mQaR2', 'PK$q9rMI', 'wMOoH2KJ', 'jRnTi#ti', 'd$zIoBun', 'jcQ186m', 'o5t6LiFh', '4hJTj9z1', 'xmEHk7vC', 'wSOO7Tg5', 'sPUO7muT', 'cZ@FszkJ', 'itRejTx3', 'BJBGF@@e', 'oG@VDrYS', 'drtDCGTj', 'iyvv5O#', 'X#QUbbi5', 'yrrYqMk2', 'MxFSVeI']
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=_bw0kuOSdis&ab_channel=HanyAbdlgawad',
                    'duration':'0:51:56',
                    'codes':['ZRYR0skE', 'Jo5CC#il', '5mWX1lug', '$ufUve2', 'tPSncOnt', '$KvMyXjx', 'jDs1Mqz0', 'q28p$#aX', 'yV8EKT', 'ICeksS1c', 'ZqNLylB', '@yE9pLv', 'qM7olk8I', '7ypyuDDh', 'EXa29raq', '3wDQrtlL', 'MhvZZdHm', '6UFGgU$T', '26NwzOOl', 'weK$yGrk', 'ZUjJng#2', 'CXFoGNtY', '@LtDXVkE', 'IfriEvsN', 'UPolcsWy', 'YfcThaiu', 'X7LjSogT', 'pctgGvZh', 'N4J#Esta', 'sejw9BmV', 'ylbz$yYq', 'lR88Y5Up', 'KMr4Cv2', 'DqZcddv2', 'O6YSuqNq', '#bzI9MM', 'K2y3SLNb', 'BIPlrVG8', 'JBi2CZrh', 'QnrbWHco', 'Eifl@r7Q', 'bO5cYojV', '99S@J1uZ', 'Od$q1Tac', 'q@RspgWC', 'QWgoK92V', 'vJt@i5Hb', 'LTacVJae', 'Jw3s#3$T', 'KhQTJ5y2', 'esy6v0#8', 'pW9vmg0j', 'ZLZ6ptpc', 'K0e6q87h', 'ClFhftbX', 'qTZV2KYX', 'XhZVJFzx', 'tlJiomqd', 'QBZZ3d1g', 'Rh$#d#EB']
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
            'codes': ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo'],
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=p2aDs2ddmgE&ab_channel=HanyAbdlgawad',
                    'duration':'0:15:22',
                    'codes':['JugSKpPy', 'XfgUZYV5', 'HZeX#Ls9', 'J0eUUpv', 'cYfluL0j', 'HdaBzKv5', 'otoU0LYs', 'y5x9aB@v', 'nHjgTR9z', '#TceYSSM', 'Faqi4jgS', 'G6H01Rlg', 'CaPL$KKS', 'PmECYjt7', 'UDlRd0D', 'obNBCMkp', 'OcGCsIfU', '$PRcSqx', '#i3qSjYR', '7mtepW0#', 'baywzW', '4SMCJu0', 'DRR5RZr', 'jzv910XX', 'HF3hkpaE', 'v@nouJzc', 'fUTTD4q@', 'TCghpERT', 'F6vxtanY', 'LS6D8OJ', 'JHxDjhxa', '$@#LHmjd', 'QctnDt7E', 'Xv9lsdUR', '4@#FzoIB', 'HdjOgiYo', 'c@Wy3I5', '9nrOY@#3', 'Pc21#uFN', 'shOj6udk', 'LlfG3MxO', 'CKxX0#QB', 'ZG9N63Eg', 'VtuMQbM9', 'lEm9g9W', 'iLj4bX2J', 'bNEFVC0', 'UT2CWEt', 'wkb7qRix', '@HIzEf40', 'XCOzEXxm', '4y6bEZwP', 'Qm142x22', 'Gz1wCDdp', 'Yfc4cs15', 'hxWXINI9', 'ufJwlx$', 'pYvmSkF', 'yG6NMYeU', 'EtgoSZcn']
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=q1Jcq314iFU&ab_channel=HanyAbdlgawad',
                    'duration':'1:20:59',
                    'codes':[
                        'KLiKnM4Z', 'UzXYnojX', 'mEXoDqZ', '77r1#e', 
                        'vjiqv2g0', 'xhqvQNdZ', 'qOXhk1s', '76Z1HGd#',
                        'FNppY4Jn', 'FqjP3R7', 'hxhZ2XYJ', '1Y4w3Je', 
                        '$FaOyREz', 'CM5f1XFN', 'eNc0MXEP', '6Q2$ZZCb', 
                        'mSCOLV9l', '4cxipwIw', 'H6bppf$', 'Jb9DRp1a', 
                        'Sz1dy4gW', 'qN82r84G', 'F#Y7rTcc', 'wQDxwUT', 
                        'QL54l9Pa', 'gwefXvyQ', 'BSSY1gV@', 'OVb2Zik5', 
                        'S8uJ4pgr', 'rVVXhRd', '1s@Q#GlV', 'I3vj3#3u', 
                        'F#j8nYp', '3YvHes23', '@EJ9WUE', 'YBftzcFD', 
                        'voX4QLg@', 'mXoMI7pM', '59vO#4hX', '9y1GJb$u', 
                        'hbPqdEtX', '$34kR1zz', '5587iVgx', '22#ugC', 
                        'lFE152eZ', 'e5UpTqlJ', 'EFrcNW2P', '0zjnInTY', 
                        'ssq208#9', 'wTOTkEsl', 'V5CQ5qnU', 'D7R2Sdfu', 
                        'vEqjwojo', 'vwKaHr0$', 'T5prGlrK', 'h0o8WGwD', 
                        'xSjY6USm', 'Eyf98Vgk', '4z4P9fT@', 'cbpV95y']
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
                    'codes':[
                        'sTjL0R2H', 'm3bsbNzy', 'Lqtb1rqo', '7EFi0TyO',
                        'vs1F$4OM', 'W57grDnf', 'Bu2UNEOd', 'e1pZmuqr',
                        '@cYNLxvp', 'z9HhlzXE', 'x4ePT7Cu', 'r10DQNZn',
                        'wk257$8I', 'H9tRhAOJ', 'Im0UgOJG', 'a#JCMjj4',
                        'Sofe9fNW', '@PXxXkuZ', 'IUU32Pju', 'njovhWgw',
                        'c1cNsNPT', 'aijO6pr@', 'rw9vCBxA', 'Fp1u5QCz',
                        'cXrn92Qd', 'KFBnTgZp', 'a#uIkpw7', 'HLTr1rqq',
                        'OrjpLmuB', 'jAtukiK@', 'As2pHlN3', 'MgBJQJOd',
                        'uABjqQke', '4WCqCFZD', 'Tww$QSBc', 'rpWIsJ9N',
                        'ojmvnTmA', 'BcKVI6py', 'Ydu309X3', 't8@KULQ$',
                        'ObztRpVz', 'l6eWrWDA', 'hq4JDrO0', 'tvglK1P3',
                        '4T6ZbCnM', 'tdSgv5fy', 'MXXISxTk', 'YeDXqZ14',
                        'SJc3oFT@', 'n5nDQCOl', 'R9$vefox', '0QjW#IAT',
                        '7F3XYVc3', 'nsVNQDxh', '7mAPSU2N', 'rgWhr@8K',
                        'E36tXwGc', '2UAi7N$o', 'kDG4IdFf', 'iYehlk6T'
                      ]
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiUfoRzOTl8EK2rBqrKufCau',
                    'duration':'',
                }
            ],
            'exam' : 'امتحان ذات الحدين'
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
                    
                },
                {
                    'lessonName':'الأعداد المركبة - الجزء الأول',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=6siAmS5y7fM',
                    'duration':'1:31:22'
                },
                {
                    'lessonName':'مسائل الملزمة - ذات الحدين',
                    'state':false,
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiXeAyg2o473ddm5zh686okG',
                    'duration':'',
                },
                {
                    'lessonName':'مسائل الملزمة - الأعداد المركبة',
                    'state':false,
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiVDubz97QqhosX6loGoaHnf',
                    'duration':'',
                }
            ],
            'exam' : 'امتحان المحاضرة الرابعة'
        },
        {
            'name' : 'المحاضرة الثانية - الاعداد المركبة',
            'order':'algebra5',
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
            'codes': ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo'],
            'parts' :[
                {
                    'lessonName':'تمهيد',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=9UBMAJl3zwc&ab_channel=HanyAbdlgawad',
                    'duration':'0:12:47'
                    
                },
                {
                    'lessonName':'الجزء الاول',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=x4hPH5Wreyk',
                    'duration':'1:23:5',
                    'codes':['iwfkhfsb', '9YYiizh', 'zfME@YOa', 'wE46NF9V', '4O$gkRvm', 'wc#r3pGP', 'nePeFQcu', '82WsqB@D', 'J7Bqjr7', '#wW8oy89', 'fZQ7DWF1', 'XPFM1#sR', 'PrlzVe33', 'pqc3b8Up', 'HxyVaqyS', '#GrJ7Mko', 'oOEBM#yu', 'XoadOoc2', 'e0bsSi1c', '1gKu#Wf', 'nQMPe6Eo', 'z0TzRvG@', '95p9gDKD', 'aWBdI3G', 'Nxw4lWGf', 'yPt8dIqh', 'jI@Clx#2', '6yEE6pgk', 'u4raH13P', 'S@faq#j', 'MEGeLQud', 'DRTRZhk@', 'Yfhm6jw0', 'jSuzoWh6', 'r8c4Vb1x', 'hJlt0E56', 'QCJEkUg', 'N0Xbk0g', 'x1nqrXkm', 'zo1smghb', 'V$7mQaR2', 'PK$q9rMI', 'wMOoH2KJ', 'jRnTi#ti', 'd$zIoBun', 'jcQ186m', 'o5t6LiFh', '4hJTj9z1', 'xmEHk7vC', 'wSOO7Tg5', 'sPUO7muT', 'cZ@FszkJ', 'itRejTx3', 'BJBGF@@e', 'oG@VDrYS', 'drtDCGTj', 'iyvv5O#', 'X#QUbbi5', 'yrrYqMk2', 'MxFSVeI']
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=_bw0kuOSdis&ab_channel=HanyAbdlgawad',
                    'duration':'0:51:56',
                    'codes':['ZRYR0skE', 'Jo5CC#il', '5mWX1lug', '$ufUve2', 'tPSncOnt', '$KvMyXjx', 'jDs1Mqz0', 'q28p$#aX', 'yV8EKT', 'ICeksS1c', 'ZqNLylB', '@yE9pLv', 'qM7olk8I', '7ypyuDDh', 'EXa29raq', '3wDQrtlL', 'MhvZZdHm', '6UFGgU$T', '26NwzOOl', 'weK$yGrk', 'ZUjJng#2', 'CXFoGNtY', '@LtDXVkE', 'IfriEvsN', 'UPolcsWy', 'YfcThaiu', 'X7LjSogT', 'pctgGvZh', 'N4J#Esta', 'sejw9BmV', 'ylbz$yYq', 'lR88Y5Up', 'KMr4Cv2', 'DqZcddv2', 'O6YSuqNq', '#bzI9MM', 'K2y3SLNb', 'BIPlrVG8', 'JBi2CZrh', 'QnrbWHco', 'Eifl@r7Q', 'bO5cYojV', '99S@J1uZ', 'Od$q1Tac', 'q@RspgWC', 'QWgoK92V', 'vJt@i5Hb', 'LTacVJae', 'Jw3s#3$T', 'KhQTJ5y2', 'esy6v0#8', 'pW9vmg0j', 'ZLZ6ptpc', 'K0e6q87h', 'ClFhftbX', 'qTZV2KYX', 'XhZVJFzx', 'tlJiomqd', 'QBZZ3d1g', 'Rh$#d#EB']
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
            'codes': ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo'],
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=p2aDs2ddmgE&ab_channel=HanyAbdlgawad',
                    'duration':'0:15:22',
                    'codes':['JugSKpPy', 'XfgUZYV5', 'HZeX#Ls9', 'J0eUUpv', 'cYfluL0j', 'HdaBzKv5', 'otoU0LYs', 'y5x9aB@v', 'nHjgTR9z', '#TceYSSM', 'Faqi4jgS', 'G6H01Rlg', 'CaPL$KKS', 'PmECYjt7', 'UDlRd0D', 'obNBCMkp', 'OcGCsIfU', '$PRcSqx', '#i3qSjYR', '7mtepW0#', 'baywzW', '4SMCJu0', 'DRR5RZr', 'jzv910XX', 'HF3hkpaE', 'v@nouJzc', 'fUTTD4q@', 'TCghpERT', 'F6vxtanY', 'LS6D8OJ', 'JHxDjhxa', '$@#LHmjd', 'QctnDt7E', 'Xv9lsdUR', '4@#FzoIB', 'HdjOgiYo', 'c@Wy3I5', '9nrOY@#3', 'Pc21#uFN', 'shOj6udk', 'LlfG3MxO', 'CKxX0#QB', 'ZG9N63Eg', 'VtuMQbM9', 'lEm9g9W', 'iLj4bX2J', 'bNEFVC0', 'UT2CWEt', 'wkb7qRix', '@HIzEf40', 'XCOzEXxm', '4y6bEZwP', 'Qm142x22', 'Gz1wCDdp', 'Yfc4cs15', 'hxWXINI9', 'ufJwlx$', 'pYvmSkF', 'yG6NMYeU', 'EtgoSZcn']
                },
                {
                    'lessonName':'الجزء الثاني',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=q1Jcq314iFU&ab_channel=HanyAbdlgawad',
                    'duration':'1:20:59',
                    'codes':['KLiKnM4Z', 'UzXYnojX', 'mEXoDqZ', '77r1#e', 'vjiqv2g0', 'xhqvQNdZ', 'qOXhk1s', '76Z1HGd#', 'FNppY4Jn', 'FqjP3R7', 'hxhZ2XYJ', '1Y4w3Je', '$FaOyREz', 'CM5f1XFN', 'eNc0MXEP', '6Q2$ZZCb', 'mSCOLV9l', '4cxipwIw', 'H6bppf$', 'Jb9DRp1a', 'Sz1dy4gW', 'qN82r84G', 'F#Y7rTcc', 'wQDxwUT', 'QL54l9Pa', 'gwefXvyQ', 'BSSY1gV@', 'OVb2Zik5', 'S8uJ4pgr', 'rVVXhRd', '1s@Q#GlV', 'I3vj3#3u', 'F#j8nYp', '3YvHes23', '@EJ9WUE', 'YBftzcFD', 'voX4QLg@', 'mXoMI7pM', '59vO#4hX', '9y1GJb$u', 'hbPqdEtX', '$34kR1zz', '5587iVgx', '22#ugC', 'lFE152eZ', 'e5UpTqlJ', 'EFrcNW2P', '0zjnInTY', 'ssq208#9', 'wTOTkEsl', 'V5CQ5qnU', 'D7R2Sdfu', 'vEqjwojo', 'vwKaHr0$', 'T5prGlrK', 'h0o8WGwD', 'xSjY6USm', 'Eyf98Vgk', '4z4P9fT@', 'cbpV95y']
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
            'codes': ['ImOvuuod', '8McVJnj', 'Ja8Km6XR', 'flmYRBbC', 'dDRz1ekp', 'EBRD@lXS', '$WsHSNf', 'HRmIb$K1', '3MjRHRxb', 'DBhIMFX4', '4zP5XNwR', 'stuZZYrx', '@nTfK1R', 'R4fOE#9j', 'XduvVk9J', 'SLJFIxrQ', 'MIihCt18', 'EbuxZ0dI', 'QOq#3p9#', '58oWrGy2', 'p4lCl0DH', 'tMq8EuaK', 'KJM9VNTa', 'IUC@Uftr', 'DOsRmli2', 'al4hN@3', 'cKRar8f1', 'jpVOHpkO', 'GbfEzgmJ', 'dw2x#JUF', '6TtLNur', 'pEJeqCH0', 'nHH6#n1h', 'hox9tOP', 'cpcy0l@c', 'K7uE0evt', 'B@GtC472', 'gUGpEVPP', 'UkNUteE8', 'ligLV5hb', 'jpzF@jEJ', 'izK3l3xZ', 'gZZln2Zv', 'gfsTQL', 'fQ5OkQR3', 'uNDzenyZ', 'yQwpXFsp', '03I2EE02', 'QuC0jjTP', 'T@fmETd#', 'ZI#rjN0m', 'ymx8Rjjk', 'WBhy@m62', '@TtyavBq', 'SttEOZxT', 'FE1yteD', 'zuwSMzak', 'qNx3OkJ', 'V2X3NaX9', 'Fc3olDIo'],
            'parts' :[
                {
                    'lessonName':'الجزء الاول',
                    'state':false,
                    'duration':'1:25:30',
                    'link':'https://www.youtube.com/watch?v=CDm6yUoqDvk',
                },
                {
                    'lessonName':'مسائل الملزمة',
                    'state':false,
                    'duration':'',
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiUfoRzOTl8EK2rBqrKufCau',
                }
            ],
            'exam' : 'امتحان ذات الحدين',
            
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
                    'codes':[
                        '7Rqsj77q', 'V3CB6inX', 'fT88Y52h', 'oKz5QKkD',
                        '1Ax6rj1y', '4a9Xoe3o', 'C8wJz1Mi', 'vw1m6kwv',
                        'BPjLSxY9', 'yU9t7oqT', 'ZeyeLRT1', 'J67u6Pv3',
                        'BmdeMqnH', '0SSK0iBv', 'Y4kfY0J4', 'Vz76JzM6',
                        'i8X1AqvY', 'Ss1JtpfY', 'UU5v0W8B', 'eS7HDyJK',
                        'PdfqbM8i', 'NU1KQLBS', '7XHQOZPF', 'h7J0oLKY',
                        'x7wqcnAF', 'SrciFuSj', 'NySZJOeY', 'mGLRNYVV',
                        'fcBjv7TU', 'p4sczvNm', 'j579mDNx', 'OCCJcTHB',
                        'gDzizh0O', 'tTMCHnCz', 'eMPxGH3M', 'OvQ68MYX',
                        '6bLmtvnA', 'gNu938Pq', 'X8mCLOEY', 'MJNYaA1i',
                        'z2vHdUDU', 'GFdiMHjR', 'L8tKFgqa', 'bF6C66jR',
                        'tNo7Gwmi', '6XgFrTVS', 'ymHhoFDJ', 'Ni3iJFoR',
                        'NJ1gAKvY', 'eGKDDJTi', 'm5J935dG', 'kyh1KLMU',
                        '5LVLURfb', 'b2eTqrpT', 'UJNsOcnU', 'UvajM76s',
                        'iOLko4Bo', '7mMjfBez', 'OMm3jH6G', 'oE0ZJYbp'
                      ]
                },
                {
                    'lessonName':'الأعداد المركبة - الجزء الأول',
                    'state':false,
                    'link':'https://www.youtube.com/watch?v=6siAmS5y7fM',
                    'duration':'1:31:22',
                    'codes':[
                        'r1DYVSsy', 'tuwy7LVW', 'J1bOPTf4', 'nubJ2Sfc',
                        'joRmhV1U', 'OVU95iGK', 'aFhHnssh', 'rbpgLEyL',
                        '4mPvf6Z8', 'GvuE8PGX', 'WaJXsviy', '4xUvtUVC',
                        'ntUzJr5v', 'N8wPr0k4', 'ACKjCzZn', 'y2RUc4zp',
                        '0s8gTAPu', '0sp9N07m', 'YoXpKdpE', '9HA5aNUP',
                        'FGwO06of', 'zijWkYUG', 'Kd52NVzz', 'ZmUO79kS',
                        'gLeekNCg', '6LSTu0LO', 'K6n2QMFp', 'JwsA1D11',
                        'TSo3A4Yv', 'hdopcmnQ', 'iuJdHTw5', 'Ay1HEWpQ',
                        'JQf86enO', 'oy9EZNkU', 'SZ3wP0k6', 'Gq2Ks3yG',
                        '8yBsNFO4', 'rw5ZBTv0', 'pX6vU6hK', 'mc9idme2',
                        '91NNdWy9', 'fRy0Ne1S', 'hJhgr8Wy', '2NnXtAUY',
                        'RVBDwa7r', 'RsbmP9rP', '1ZUzLreB', 'zL6Xd2sg',
                        'bk6Towpe', 'd6TFDZfs', 'becwLq2Y', 'TTTgPuHU',
                        '22pnrtzR', '5bgwAFZL', '36y2tDAO', '6dwoui23',
                        'OUqyYt2M', 'SDWCy57V', 'zQSxLzLw', '913R5A82'
                      ]
                },
                {
                    'lessonName':'مسائل الملزمة - ذات الحدين',
                    'state':false,
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiXeAyg2o473ddm5zh686okG',
                    'duration':'',
                },
                {
                    'lessonName':'مسائل الملزمة - الأعداد المركبة',
                    'state':false,
                    'link':'https://www.youtube.com/playlist?list=PLzuKs18sUQiVDubz97QqhosX6loGoaHnf',
                    'duration':'',
                }
            ],
            'exam' : 'امتحان المحاضرة الرابعة'
        },
        {
            'name' : 'المحاضرة الثانية - الاعداد المركبة',
            'order':'algebra5',
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

    // essential functions
    const getIDfromURL = (url)=> {
        const videoID = url.split('v=')[1];
      
        if (videoID !== undefined) {
          return videoID.slice(0, 11);
        }
    }
    const handleVideoIDChange = (e)=>{
        setVideoId(e.target.id)
        localStorage.setItem("videoId", e.target.id)
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
                            let date = dayjs(userCodes.filter(obj => obj.order === lesson.order)[0].date);
                            let dataOfClose = dayjs(date.add(48, 'h')) ;
                            let diff = (dataOfClose).diff(dayjs().format())
                            let finalDate;
                            finalDate =  millisecondsToDays(diff);

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
                                                if(part.lessonName !== 'مسائل الملزمة'){
                                                    return(
                                                    <li key={'partObject'+num}>
                                                        <ul className='lesson-part'>
                                                            <li key={'partName'+num}>
                                                            {part.lessonName}
                                                            </li>
                                                            <li key={'partState'+num} >
                                                                <Link className='play-btn' id={getIDfromURL(part.link)} onClick={handleVideoIDChange} to={'/Hany-AbdulGawed-platform/lessonView'} >  مشاهدة    </Link>
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
                        let date = dayjs(userCodes.filter(obj => obj.order === lesson.order)[0].date);
                        let dataOfClose = dayjs(date.add(48, 'h')) ;
                        let diff = (dataOfClose).diff(dayjs().format())
                        let finalDate;
                        finalDate =  millisecondsToDays(diff);

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
                                            if(part.lessonName !== 'مسائل الملزمة'){
                                                return(
                                                <li key={'partObject'+num}>
                                                    <ul className='lesson-part'>
                                                        <li key={'partName'+num}>
                                                        {part.lessonName}
                                                        </li>
                                                        <li key={'partState'+num} >
                                                            <Link className='play-btn' id={getIDfromURL(part.link)} onClick={handleVideoIDChange} to={'/Hany-AbdulGawed-platform/lessonView'} >  مشاهدة    </Link>
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
