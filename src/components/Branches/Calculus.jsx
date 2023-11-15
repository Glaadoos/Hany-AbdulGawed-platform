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

const Calculus = ({setVideoId, user, userPayingSystem, userCodes}) =>{

    // dictionaries & State variable & variables
    const Calculuslesson = [
        {
            "name":"المحاضرة الأولى",
            "order":"calculus01",
            "parts":[
                {
                    "lessonName":"أساسيات التفاضل ( هام جدا حتى لو شوفته قبل كده)",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=z2HmghHFhV0",
                    "attachments":{
                        "notebook":"1AzQ-wi_vaLKUUqHVQrIHyQUy_dLifoZL",
                        "homework":"1C7t8_tJYmj_I1MaCu94nL9tobZOvawOz"
                    }
                },
                {
                    "lessonName":"اشتقاق الدوال المثلثية",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=flQePNSYSFU",
                    "attachments":{
                        "notebook":"1AzQ-wi_vaLKUUqHVQrIHyQUy_dLifoZL",
                        "homework":"1C7t8_tJYmj_I1MaCu94nL9tobZOvawOz"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://www.youtube.com/playlist?list=PLzuKs18sUQiVd_e1e5Pka5M_7eN0pmjGD"
                }
            ],
            "exam":[{"name":"امتحان المحاضرة الاولي", "link":"https://docs.google.com/forms/d/1Pmms4AcDmvBELPYR_Rw_gVPXN5um1-W4C9mQhXDIFPc"}]
        },
        {
            "name":"المحاضرة الثانية",
            "order":"calculus02",
            "parts":[
                {
                    "lessonName":"الأشتقاق الضمني والبارامتري",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=uNzva1zrGmQ",
                    "attachments":{
                        "notebook":"1xjqLlAz94MROWcqVakEgYjjhsZV-RZC3",
                        "homework":"1UgF2VVPgbmNEgCgDNl48jfGSeBK7ueNQ"
                    }
                },  
                {
                    "lessonName":"المشتقات العليا",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=6n8pnOLUED0",
                    "attachments":{
                        "notebook":"1xjqLlAz94MROWcqVakEgYjjhsZV-RZC3",
                        "homework":"1UgF2VVPgbmNEgCgDNl48jfGSeBK7ueNQ"
                    }
                },   
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://drive.google.com/file/d/1xjqLlAz94MROWcqVakEgYjjhsZV-RZC3/view?usp=drive_link"
                }
            ],
            "exam":[{"name":"أمتحان المحاضرة الثانية", "link":"https://docs.google.com/forms/d/e/1FAIpQLSecGXKQheFWvacfg_S-2RLc_pMpbmrUc_1-o3IcoG3noLFXlg/viewform?usp=sf_link"}]
        },
        {
            "name":"المحاضرة الثالثة",
            "order":"calculus03",
            "parts":[
                {
                    "lessonName":"أثباتات المشتقات العليا - الجزء الاول ",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=Vklg2dwcm7k",
                    "attachments":{
                        "notebook":"13cknKGHms5w2nIQt9Z4CtPKVuYtmcSCQ",
                        "homework":""
                    }
                },
                {
                    "lessonName":"أثباتات المشتقات العليا - الجزء الثاني",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=SaFFJIPJqPY",
                    "attachments":{
                        "notebook":"",
                        "homework":"1ADsunQEo5-WXvp05zOjDE4T9b8CzTg8n"
                    }
                },       
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUw-UcrG1mPkVKNdW0bnP18"
                }
            ],
            "exam":[{"name":"أمتحان المحاضرة الثالثة", "link":"undefined"}]
        },
        {
            "name":"المحاضرة الرابعة",
            "order":"calculus04",
            "parts":[
                {
                    "lessonName":"مقدمة إيجاد الميل",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=aTH-OPFjork",
                    "attachments":{
                        "notebook":"",
                        "homework":""
                    }
                },
                {
                    "lessonName":"معادلتي المماس والعمودي - الجزء الأول",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=S6b5jtqSaqY",
                    "attachments":{
                        "notebook":"1ONZy5iTvSocBnZv6u7NS3cMFQQNPiUx-",
                        "homework":""
                    }
                },
                {
                    "lessonName":"معادلتي المماس والعمودي - الجزء الثاني",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=38DiQT_uhVw",
                    "attachments":{
                        "notebook":"",
                        "homework":"18AsWe6LtwxtOvD9WV5bqQLHfmGOWFwSb"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiWpEYseAUK9n8XY9E3uf7J8"
                }
            ],
            "exam":[{"name":"أمتحان المحاضرة الرابعة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSdi8HgwHFDClJcqjvnwms7Ax64J9WODlWT-rKs3-q8zOqxTxQ/viewform?usp=sharing"}]
        },
        {
            "name":"المحاضرة الخامسة",
            "order":"calculus05",
            "parts":[
                
                {
                    "lessonName":"تابع معادلتي المماس والعمودي  الجزء الأول",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=nxH823PmHX8",
                    "attachments":{
                        "notebook":"1nXDHCmhkjMFotp8lnyXHtsEI89Wpo1M0",
                        "homework":"1abULMnl86bNCACEQx3ccBPm7EJnqRMC2"
                    }
                },
                {
                    "lessonName":"تابع معادلتي المماس والعمودي  الجزء الثاني",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=lP43oSddprU",
                    "attachments":{
                        "notebook":"1nXDHCmhkjMFotp8lnyXHtsEI89Wpo1M0",
                        "homework":"1abULMnl86bNCACEQx3ccBPm7EJnqRMC2"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUubfv7CpC2zSu4s_8csnjf"
                }
            ],
            "exam":[{"name":"أمتحان المحاضرة الخامسة"}]
        },
        {
            "name":"المحاضرة السادسة",
            "order":"calculus06",
            "parts":[
                
                {
                    "lessonName":"المعدلات الزمنية المحاضرة الأولى الجزء الأول",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=CVH9bP1qgqw",
                    "attachments":{
                        "notebook":"1k3rhJpOkpLYycgXHXhuDVx-RTMo5svBO",
                        "homework":"1Ft3_sn6HLrIoJ26U6LPuOisNnzK_NkbC"
                    }
                },
                {
                    "lessonName":"المعدلات الزمنية المحاضرة الأولى الجزء الثاني",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=V9600l_9bhk",
                    "attachments":{
                        "notebook":"1k3rhJpOkpLYycgXHXhuDVx-RTMo5svBO",
                        "homework":"1Ft3_sn6HLrIoJ26U6LPuOisNnzK_NkbC"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUubfv7CpC2zSu4s_8csnjf"
                }
            ],
            "exam":[{"name":"أمتحان المحاضرة السادسة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSeBftgA-vmVuCxx-hwLbsVgqqg-MN7i2dE_0NojjyA7226NoA/viewform?usp=sharing"}]
        },
        {
            "name":"المحاضرة السابعة",
            "order":"calculus07",
            "parts":[
                
                {
                    "lessonName":"المعدلات الزمنية المحاضرة الثانية",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=0fzzANNaQio",
                    "attachments":{
                        "notebook":"1w09CVTLKLaAolrMZXRrua-Gfqn8zYOaV",
                        "homework":"10VtUgnDcKQDt-7G2FZXD2p7ocSwkMnce"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://m.youtube.com/playlist?list=PLzuKs18sUQiXCT6aIT57n13g2jrt5tj5q"
                }
            ],
            "exam":[{"name":"أمتحان المحاضرة السابعة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSeQMosz68LN251yp9sZ6QC1Rj1AaP_GEsriRZJPTZAACHi_7A/viewform?usp=sharing"}]
        },
        {
            "name":"المحاضرة الثامنةوالتاسعة",
            "order":"calculus08",
            "parts":[
                
                {
                    "lessonName":"المعدلات الزمنية المحاضرة الثالثة",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=HPraGx41Qb4",
                    "attachments":{
                        "notebook":"1XdSFEdpzNiy_xuqcGcTv3YnRMPuYb-cz",
                        "homework":"1BeXHisHEcK256b96vmBxK4eNPdejoDef"
                    }
                },
                {
                    "lessonName":"مقدمة الأسس واللوغاريتمات والنهايات",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=VQ5brdssQjU",
                    "attachments":{
                        "notebook":"19litg3eSYtT39KvA7qTnPAdGgs4IyuY8",
                        "homework":"1RyVcZmpzkkXVqG4wAHaXGImUpSOdz3Zc"
                    }
                },
                {
                    "lessonName":"1 مسائل الملزمة",
                    "duration":"",
                    "link":"https://m.youtube.com/playlist?list=PLzuKs18sUQiXCT6aIT57n13g2jrt5tj5q"
                },
                {
                    "lessonName":"2 مسائل الملزمة",
                    "duration":"",
                    "link":"https://www.youtube.com/playlist?list=PLzuKs18sUQiWZcWCBjJ3a1ymxCJs9-9LV"
                }
            ],
            "exam":[{"name":"أمتحان المحاضرة الثامنةوالتاسعة"}]
        },
        {
            "name":"المحاضرة العاشرة",
            "order":"calculus10",
            "parts":[
                {
                    "lessonName":"مشتقة الدوال الأسية",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=x6lMLbCkt8I",
                    "attachments":{
                        "notebook":"1frJg_rIWZnaSvdonE__zRLi7-EQmeB00",
                        "homework":"1gHAqx4CCH0eQxP8I8ufbNEypZx6RM-ZH"
                    }
                },
                {
                    "lessonName":"مشتقة الدوال اللوغاريتمية",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=7ohBWMJnZgU",
                    "attachments":{
                        "notebook":"1frJg_rIWZnaSvdonE__zRLi7-EQmeB00",
                        "homework":"1gHAqx4CCH0eQxP8I8ufbNEypZx6RM-ZH"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://www.youtube.com/playlist?list=PLzuKs18sUQiV9u8yoPHxDfa-lKqknsiVE"
                }
            ],
            "exam":[{"name":"أمتحان المحاضرة العاشرة", "link":'https://docs.google.com/forms/d/e/1FAIpQLSf8u8hPNFAET6AGZn697oyEbc0Pl4yQhZlFIdLtwIwqJdBJbg/viewform?usp=sharing'}]
        },
        {
            "name":"المحاضرة الحادية عشر",
            "order":"calculus11",
            "parts":[
                {
                    "lessonName":"مقدمة وتأسيس التكامل (هــام جدا)",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=1ck3OXvYL8M",
                    "attachments":{
                        "notebook":"1b0x3rCl12ZXpzqY26tbVNdYSq-6EUR-j",
                        "homework":"1luN-4vvAWs8m4LMlvRHq7_UfalODSpA7"
                    }
                },
                {
                    "lessonName":"تكامل الدوال الأسية واللوغاريتمية",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=5pGROC1z6_w",
                    "attachments":{
                        "notebook":"1b0x3rCl12ZXpzqY26tbVNdYSq-6EUR-j",
                        "homework":"1luN-4vvAWs8m4LMlvRHq7_UfalODSpA7"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://m.youtube.com/playlist?list=PLzuKs18sUQiUnR4zQa5Fyg5RK4tCHOpAJ"
                }
            ],
            "exam":[{"name":"أمتحان المحاضرة الحادية عشر", "link":'https://docs.google.com/forms/d/e/1FAIpQLSeHlp0PvdNVobbnODbsBhRpD0lbt8otcKrHjDZhGvnj2jW8zw/viewform?usp=sharing'}]
        },
        {
            "name":"المحاضرة الثانية عشر",
            "order":"calculus12",
            "parts":[
                
                {
                    "lessonName":"تطبيقات التكامل",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=mMZ1gYi0AO0",
                    "attachments":{
                        "notebook":"1TqxvIC1FX7U8Vsw2NbcWCPPo8vCoYOd7",
                        "homework":"11GcrPYonE6ZQj69SXNzHtuXjScgFCKtj"
                    }
                },
                {
                    "lessonName":"أفكار منوعة على الوحدة الثانية",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=FNqZ_rVtP_Y",
                    "attachments":{
                        "notebook":"1TqxvIC1FX7U8Vsw2NbcWCPPo8vCoYOd7",
                        "homework":"11GcrPYonE6ZQj69SXNzHtuXjScgFCKtj"
                    }
                },
                {
                    "lessonName":"حل النهايات بالآلة",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=xitXCumZ1Kg",
                    "attachments":{
                        "notebook":"1TqxvIC1FX7U8Vsw2NbcWCPPo8vCoYOd7",
                        "homework":"11GcrPYonE6ZQj69SXNzHtuXjScgFCKtj"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://m.youtube.com/playlist?list=PLzuKs18sUQiWgXM_MrzRbXT_oA8B9gKS4"
                }
            ],
            "exam":[{"name":"أمتحان المحاضرة الثانية عشر"}]
        }
        ,
        {
            "name":"المحاضرة الثالثة عشر",
            "order":"calculus13",
            "parts":[
                
                {
                    "lessonName":"سلوك الدالة المحاضرة الأولى",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=olv08dBmraI",
                    "attachments":{
                        "notebook":"1fbVfW6NJyyC24s72oienUvPB3Dtm3zXf",
                        "homework":"1mzoDx8uLbuPZJQC-KYUXHVTWLkN8lumj"
                    }
                },
                {
                    "lessonName":"مراجعة الاشتقاق",
                    "duration":"",
                    "link":"https://www.youtube.com/watch?v=naUddM3ixOk",
                    "attachments":{
                        "notebook":"1fbVfW6NJyyC24s72oienUvPB3Dtm3zXf",
                        "homework":"1mzoDx8uLbuPZJQC-KYUXHVTWLkN8lumj"
                    }
                },
                {
                    "lessonName":"مسائل الملزمة",
                    "duration":"",
                    "link":"https://www.youtube.com/playlist?list=PLzuKs18sUQiVEbG9UopR18gS8tcdifqfe"
                }
            ],
            "exam":[{"name":"أمتحان المحاضرة الثالثة عشر","link":'https://docs.google.com/forms/d/e/1FAIpQLSeiP6t3mgCc-k0lt1JKpr8aHRWq3uEo30tU2UG5rYT4xgkqBw/viewform?usp=sharing'}]
        }
    ]
    const CalculusMPS = [
        {
            'name':':الشهر الاول',
            'data':[
                {
                    "name":"المحاضرة الأولى",
                    "order":"calculus01",
                    "parts":[
                        {
                            "lessonName":"أساسيات التفاضل ( هام جدا حتى لو شوفته قبل كده)",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=z2HmghHFhV0",
                            "attachments":{
                                "notebook":"1AzQ-wi_vaLKUUqHVQrIHyQUy_dLifoZL",
                                "homework":"1C7t8_tJYmj_I1MaCu94nL9tobZOvawOz"
                            }
                        },
                        {
                            "lessonName":"اشتقاق الدوال المثلثية",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=flQePNSYSFU",
                            "attachments":{
                                "notebook":"1AzQ-wi_vaLKUUqHVQrIHyQUy_dLifoZL",
                                "homework":"1C7t8_tJYmj_I1MaCu94nL9tobZOvawOz"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://www.youtube.com/playlist?list=PLzuKs18sUQiVd_e1e5Pka5M_7eN0pmjGD"
                        }
                    ],
                    "exam":[{"name":"امتحان المحاضرة الاولي", "link":"https://docs.google.com/forms/d/1Pmms4AcDmvBELPYR_Rw_gVPXN5um1-W4C9mQhXDIFPc"}]
                },
                {
                    "name":"المحاضرة الثانية",
                    "order":"calculus02",
                    "parts":[
                        {
                            "lessonName":"الأشتقاق الضمني والبارامتري",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=uNzva1zrGmQ",
                            "attachments":{
                                "notebook":"1xjqLlAz94MROWcqVakEgYjjhsZV-RZC3",
                                "homework":"1UgF2VVPgbmNEgCgDNl48jfGSeBK7ueNQ"
                            }
                        },  
                        {
                            "lessonName":"المشتقات العليا",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=6n8pnOLUED0",
                            "attachments":{
                                "notebook":"1xjqLlAz94MROWcqVakEgYjjhsZV-RZC3",
                                "homework":"1UgF2VVPgbmNEgCgDNl48jfGSeBK7ueNQ"
                            }
                        },   
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://www.youtube.com/playlist?list=PLzuKs18sUQiUJ5YoXYQSnXNdIFKNCIOUV"
                        }
                    ],
                    "exam":[{"name":"أمتحان المحاضرة الثانية", "link":"https://docs.google.com/forms/d/e/1FAIpQLSecGXKQheFWvacfg_S-2RLc_pMpbmrUc_1-o3IcoG3noLFXlg/viewform?usp=sf_link"}]
                },
                {
                    "name":"المحاضرة الثالثة",
                    "order":"calculus03",
                    "parts":[
                        {
                            "lessonName":"أثباتات المشتقات العليا - الجزء الاول ",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=Vklg2dwcm7k",
                            "attachments":{
                                "notebook":"13cknKGHms5w2nIQt9Z4CtPKVuYtmcSCQ",
                                "homework":""
                            }
                        },
                        {
                            "lessonName":"أثباتات المشتقات العليا - الجزء الثاني",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=SaFFJIPJqPY",
                            "attachments":{
                                "notebook":"",
                                "homework":"1ADsunQEo5-WXvp05zOjDE4T9b8CzTg8n"
                            }
                        },       
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUw-UcrG1mPkVKNdW0bnP18"
                        }
                    ],
                    "exam":[{"name":"أمتحان المحاضرة الثالثة"}]
                },
                {
                    "name":"المحاضرة الرابعة",
                    "order":"calculus04",
                    "parts":[
                        {
                            "lessonName":"مقدمة إيجاد الميل",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=aTH-OPFjork",
                            "attachments":{
                                "notebook":"",
                                "homework":""
                            }
                        },
                        {
                            "lessonName":"معادلتي المماس والعمودي - الجزء الأول",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=S6b5jtqSaqY",
                            "attachments":{
                                "notebook":"1ONZy5iTvSocBnZv6u7NS3cMFQQNPiUx-",
                                "homework":""
                            }
                        },
                        {
                            "lessonName":"معادلتي المماس والعمودي - الجزء الثاني",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=38DiQT_uhVw",
                            "attachments":{
                                "notebook":"",
                                "homework":"18AsWe6LtwxtOvD9WV5bqQLHfmGOWFwSb"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiWpEYseAUK9n8XY9E3uf7J8"
                        }
                    ],
                    "exam":[{"name":"أمتحان المحاضرة الرابعة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSdi8HgwHFDClJcqjvnwms7Ax64J9WODlWT-rKs3-q8zOqxTxQ/viewform?usp=sharing"}]
                },
                {
                    "name":"المحاضرة الخامسة",
                    "order":"calculus05",
                    "parts":[
                        
                        {
                            "lessonName":"تابع معادلتي المماس والعمودي  الجزء الأول",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=nxH823PmHX8",
                            "attachments":{
                                "notebook":"1nXDHCmhkjMFotp8lnyXHtsEI89Wpo1M0",
                                "homework":"1abULMnl86bNCACEQx3ccBPm7EJnqRMC2"
                            }
                        },
                        {
                            "lessonName":"تابع معادلتي المماس والعمودي  الجزء الثاني",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=lP43oSddprU",
                            "attachments":{
                                "notebook":"1nXDHCmhkjMFotp8lnyXHtsEI89Wpo1M0",
                                "homework":"1abULMnl86bNCACEQx3ccBPm7EJnqRMC2"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUubfv7CpC2zSu4s_8csnjf"
                        }
                    ],
                    "exam":[{"name":"أمتحان المحاضرة الخامسة"}]
                },
                {
                    "name":"المحاضرة السادسة",
                    "order":"calculus06",
                    "parts":[
                        
                        {
                            "lessonName":"المعدلات الزمنية المحاضرة الأولى الجزء الأول",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=CVH9bP1qgqw",
                            "attachments":{
                                "notebook":"1k3rhJpOkpLYycgXHXhuDVx-RTMo5svBO",
                                "homework":"1Ft3_sn6HLrIoJ26U6LPuOisNnzK_NkbC"
                            }
                        },
                        {
                            "lessonName":"المعدلات الزمنية المحاضرة الأولى الجزء الثاني",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=V9600l_9bhk",
                            "attachments":{
                                "notebook":"1k3rhJpOkpLYycgXHXhuDVx-RTMo5svBO",
                                "homework":"1Ft3_sn6HLrIoJ26U6LPuOisNnzK_NkbC"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://youtube.com/playlist?list=PLzuKs18sUQiUubfv7CpC2zSu4s_8csnjf"
                        }
                    ],
                    "exam":[{"name":"أمتحان المحاضرة السادسة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSeBftgA-vmVuCxx-hwLbsVgqqg-MN7i2dE_0NojjyA7226NoA/viewform?usp=sharing"}]
                },
                {
                    "name":"المحاضرة السابعة",
                    "order":"calculus07",
                    "parts":[
                        
                        {
                            "lessonName":"المعدلات الزمنية المحاضرة الثانية",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=0fzzANNaQio",
                            "attachments":{
                                "notebook":"1w09CVTLKLaAolrMZXRrua-Gfqn8zYOaV",
                                "homework":"10VtUgnDcKQDt-7G2FZXD2p7ocSwkMnce"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://m.youtube.com/playlist?list=PLzuKs18sUQiXCT6aIT57n13g2jrt5tj5q"
                        }
                    ],
                    "exam":[{"name":"أمتحان المحاضرة السابعة", "link":"https://docs.google.com/forms/d/e/1FAIpQLSeQMosz68LN251yp9sZ6QC1Rj1AaP_GEsriRZJPTZAACHi_7A/viewform?usp=sharing"}]
                },
                {
                    "name":"المحاضرة الثامنةوالتاسعة",
                    "order":"calculus08",
                    "parts":[
                        
                        {
                            "lessonName":"المعدلات الزمنية المحاضرة الثالثة",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=HPraGx41Qb4",
                            "attachments":{
                                "notebook":"1XdSFEdpzNiy_xuqcGcTv3YnRMPuYb-cz",
                                "homework":"1BeXHisHEcK256b96vmBxK4eNPdejoDef"
                            }
                        },
                        {
                            "lessonName":"مقدمة الأسس واللوغاريتمات والنهايات",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=VQ5brdssQjU",
                            "attachments":{
                                "notebook":"19litg3eSYtT39KvA7qTnPAdGgs4IyuY8",
                                "homework":"1RyVcZmpzkkXVqG4wAHaXGImUpSOdz3Zc"
                            }
                        },
                        {
                            "lessonName":"1 مسائل الملزمة",
                            "duration":"",
                            "link":"https://m.youtube.com/playlist?list=PLzuKs18sUQiXCT6aIT57n13g2jrt5tj5q"
                        },
                        {
                            "lessonName":"2 مسائل الملزمة",
                            "duration":"",
                            "link":"https://www.youtube.com/playlist?list=PLzuKs18sUQiWZcWCBjJ3a1ymxCJs9-9LV"
                        }
                    ],
                    "exam":[{"name":"أمتحان المحاضرة الثامنةوالتاسعة"}]
                }
            ]
        },
        {
            'name':':الشهر الثاني',
            'data':[
                {
                    "name":"المحاضرة العاشرة",
                    "order":"calculus10",
                    "parts":[
                        {
                            "lessonName":"مشتقة الدوال الأسية",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=x6lMLbCkt8I",
                            "attachments":{
                                "notebook":"1frJg_rIWZnaSvdonE__zRLi7-EQmeB00",
                                "homework":"1gHAqx4CCH0eQxP8I8ufbNEypZx6RM-ZH"
                            }
                        },
                        {
                            "lessonName":"مشتقة الدوال اللوغاريتمية",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=7ohBWMJnZgU",
                            "attachments":{
                                "notebook":"1frJg_rIWZnaSvdonE__zRLi7-EQmeB00",
                                "homework":"1gHAqx4CCH0eQxP8I8ufbNEypZx6RM-ZH"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://www.youtube.com/playlist?list=PLzuKs18sUQiV9u8yoPHxDfa-lKqknsiVE"
                        }
                    ],
                    "exam":[{"name":"أمتحان المحاضرة العاشرة", "link":'https://docs.google.com/forms/d/e/1FAIpQLSf8u8hPNFAET6AGZn697oyEbc0Pl4yQhZlFIdLtwIwqJdBJbg/viewform?usp=sharing'}]
                },
                {
                    "name":"المحاضرة الحادية عشر",
                    "order":"calculus11",
                    "parts":[
                        {
                            "lessonName":"مقدمة وتأسيس التكامل (هــام جدا)",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=1ck3OXvYL8M",
                            "attachments":{
                                "notebook":"1b0x3rCl12ZXpzqY26tbVNdYSq-6EUR-j",
                                "homework":"1luN-4vvAWs8m4LMlvRHq7_UfalODSpA7"
                            }
                        },
                        {
                            "lessonName":"تكامل الدوال الأسية واللوغاريتمية",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=5pGROC1z6_w",
                            "attachments":{
                                "notebook":"1b0x3rCl12ZXpzqY26tbVNdYSq-6EUR-j",
                                "homework":"1luN-4vvAWs8m4LMlvRHq7_UfalODSpA7"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://m.youtube.com/playlist?list=PLzuKs18sUQiUnR4zQa5Fyg5RK4tCHOpAJ"
                        }
                    ],
                    "exam":[{"name":"أمتحان المحاضرة الحادية عشر", "link":'https://docs.google.com/forms/d/e/1FAIpQLSeHlp0PvdNVobbnODbsBhRpD0lbt8otcKrHjDZhGvnj2jW8zw/viewform?usp=sharing'}]
                },
                {
                    "name":"المحاضرة الثانية عشر",
                    "order":"calculus12",
                    "parts":[
                        
                        {
                            "lessonName":"تطبيقات التكامل",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=mMZ1gYi0AO0",
                            "attachments":{
                                "notebook":"1TqxvIC1FX7U8Vsw2NbcWCPPo8vCoYOd7",
                                "homework":"11GcrPYonE6ZQj69SXNzHtuXjScgFCKtj"
                            }
                        },
                        {
                            "lessonName":"أفكار منوعة على الوحدة الثانية",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=FNqZ_rVtP_Y",
                            "attachments":{
                                "notebook":"1TqxvIC1FX7U8Vsw2NbcWCPPo8vCoYOd7",
                                "homework":"11GcrPYonE6ZQj69SXNzHtuXjScgFCKtj"
                            }
                        },
                        {
                            "lessonName":"حل النهايات بالآلة",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=xitXCumZ1Kg",
                            "attachments":{
                                "notebook":"1TqxvIC1FX7U8Vsw2NbcWCPPo8vCoYOd7",
                                "homework":"11GcrPYonE6ZQj69SXNzHtuXjScgFCKtj"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://m.youtube.com/playlist?list=PLzuKs18sUQiWgXM_MrzRbXT_oA8B9gKS4"
                        }
                    ],
                    "exam":[{"name":"أمتحان المحاضرة الثانية عشر"}]
                }
                ,
                {
                    "name":"المحاضرة الثالثة عشر",
                    "order":"calculus13",
                    "parts":[
                        
                        {
                            "lessonName":"سلوك الدالة المحاضرة الأولى",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=olv08dBmraI",
                            "attachments":{
                                "notebook":"1fbVfW6NJyyC24s72oienUvPB3Dtm3zXf",
                                "homework":"1mzoDx8uLbuPZJQC-KYUXHVTWLkN8lumj"
                            }
                        },
                        {
                            "lessonName":"مراجعة الاشتقاق",
                            "duration":"",
                            "link":"https://www.youtube.com/watch?v=naUddM3ixOk",
                            "attachments":{
                                "notebook":"1fbVfW6NJyyC24s72oienUvPB3Dtm3zXf",
                                "homework":"1mzoDx8uLbuPZJQC-KYUXHVTWLkN8lumj"
                            }
                        },
                        {
                            "lessonName":"مسائل الملزمة",
                            "duration":"",
                            "link":"https://www.youtube.com/playlist?list=PLzuKs18sUQiVEbG9UopR18gS8tcdifqfe"
                        }
                    ],
                    "exam":[{"name":"أمتحان المحاضرة الثالثة عشر","link":'https://docs.google.com/forms/d/e/1FAIpQLSeiP6t3mgCc-k0lt1JKpr8aHRWq3uEo30tU2UG5rYT4xgkqBw/viewform?usp=sharing'}]
                }
            ]
        }
    ]
    const[exist, setExist] = useState([])
    const[inputValue, setInputValue] = useState([])
    
    
    // time for lectuer to close
    let hours=96;
    
    // Branch Name
    let branch = 'Calculus'

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
        await Calculuslesson.map(async(obj) =>{
                                if(obj.order ===order ){
                                    codeexist = await CodeAPI.getSpecific(branch, order, code).then(data => {return(data.codeExist)})
                                    const newArray = exist.filter(arr => arr[0] !== order)
                                    newArray.push([order, codeexist])
                                    setExist(newArray)
                                    if(codeexist === 1 && order.indexOf('revision') === -1){
                                        const deleted = await CodeAPI.UpdataOrderCodes(branch, order, code).then(data => {return(data)});
                                        if(!(deleted.message)){
                                            await UserAPI.updateAvailableCodes(localStorage.getItem("userEmail"), [order, code])
                                            alert(`تم أضافة الكود بنجاح في : ${dayjs().format('D')}/${dayjs().format('MM')} الوقت ${dayjs().format('hh:mm:ss')} \n الكود متاح لثلاث ايام من هذا التاريخ`)
                                            window.location.reload();
                                        }
                                    }else{
                                        const deleted = await CodeAPI.UpdataOrderCodes(branch, order, code).then(data => {return(data)});
                                        if(!(deleted.message)){
                                            await UserAPI.updateAvailableCodes(localStorage.getItem("userEmail"), [order, code])
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
                >:التفاضل</h1>
                {Calculuslesson.map((lesson,num) =>{
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
            </div>
        );
    }
    if(userPayingSystem === 'MPS' || localStorage.getItem("userPayingSystem") === 'LPS'){
        return(
            <div className="lessons-box">
                <h1 className="title"
                style={{textAlign:'right', marginRight: '2%'}}
                >:التفاضل</h1>
                
                {CalculusMPS.map((month) =>{
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
                                                                                <li key={'examName'+num}>
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
                                                                                    <li key={'examName'+Exam.name}>
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
                                                                                    <li key={'examName'+Exam.name}>
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

export default Calculus;