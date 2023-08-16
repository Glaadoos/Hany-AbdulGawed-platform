import { useEffect, useState } from 'react';
// import YouTube from 'react-youtube';
import ReactDRMPlayer from "../DRM player/index"
// import Player from './Player/player'
// import ShakaPlayer from 'shaka-player-react';
// import Plyr from 'plyr';
const shaka = require('shaka-player');


const LessonPlayer = ({videoId}) =>{
    let id =localStorage.getItem("videoId");
    // console.log(id)
    const[ele, setEle] = useState('')
    const[time, setTime] = useState(0)
    const[duration, setDuration] = useState(0)
    const[speed, setSpeed] = useState(1)
    const[size, setSize] = useState({
        width:'',
        height:''
    })
    const[volume, setVideoVolume] = useState(50)

    const[currentTime, setCurrentTime] = useState(0)

    
    useEffect(()=>{
        if(ele){
            let Currenthours = Math.round(time/3600)
            let Currentminutes = (time/60).toString().slice(0, (time/60).toString().indexOf('.')).slice(0, 2) || 0;
            let Currentseconds = (time).toString().slice(0, (time).toString().indexOf('.')).slice(0, 2) || 0;
            let Durationhours = Math.round(ele.getDuration()/3600)
            let Durationminutes = (ele.getDuration()/60).toString().slice(0, (ele.getDuration()/60).toString().indexOf('.')).slice(0, 2) || 0;
            let Durationseconds = (ele.getDuration()).toString().slice(0, (ele.getDuration()).toString().indexOf('.')).slice(0, 2) || 0;
            setCurrentTime(`${Currenthours}:${Currentminutes}:${Currentseconds} / ${Durationhours}:${Durationminutes}:${Durationseconds}`)
            setDuration((time*100) / ele.getDuration())
        }
    }, [ele, time] )

    /*
     const onPlayerStateChange = () =>{
        console.log('player state change')

    }


    let playerexist = document.querySelector('#player')
    let player;
    if(playerexist !== null){
         player = new YTPlayer('#player', {
            videoId:id,
            captions:false,
            controls: false,
            related:false,
            modestBranding:false,
            playerVars: { 
                'autoplay': 1,
                
                'autohide': 1,
                'wmode': 'opaque',
                'origin': 'http://localhost:3000'
            },
        })

        player.load(id)
        player.setVolume(100)
        
    }
*/
    setInterval(()=>{
        if(ele){
            setTime(ele.getCurrentTime())
            setSize(ele.getSize())
        }
    }, 1000)
    const onPlayerReady= (event) => {
        setEle(event.target)
        setTime(event.target.getCurrentTime())
    }
    const opts= {
    videoId:id,
    rel:0,
    height: '400',
    width: '790',
    fov:120,
    playerVars: { 
        height: '420',
        width: '700',
        'autoplay': 1,
        'autohide': 1,
        'wmode': 'opaque',
        'origin': 'http://localhost:3000',
        captions:false,
        controls: 0,
        rel:0,
        modestBranding:1,
    },
    };
    const playbtn = ()=>{
    if(ele.h !== undefined && ele.h !== null){
        ele.playVideo()
        console.log(ele.getSize())
    }
    }
    const pausebtn = ()=>{
    if(ele.h !== undefined && ele.h !== null){
        ele.pauseVideo()
    }
    }
    const fullScreen = ()=>{
        if(document.querySelector('.fullScreen')){
            document.querySelector('.hidden-div').classList.remove("fullScreen");
            document.querySelector('.fullScreen').classList.remove("fullScreen");
            document.querySelector('.controls').classList.remove("fullScreen-margin");
            document.querySelector('.slider').classList.remove("fullScreen-margin");
        }else{
            document.querySelector('.hidden-div').classList.add("fullScreen");
            document.getElementsByTagName("iframe")[0].className = "fullScreen";
            document.querySelector('.controls').classList.add("fullScreen-margin");
            document.querySelector('.slider').classList.add("fullScreen-margin");
            
        }
    }
    const setVolume = (e)=>{
    if(ele.h !== undefined && ele.h !== null){
        ele.setVolume(e.target.value)
        setVideoVolume(e.target.value)
    }
    }
    const setSpeedplayer = (e)=>{
        ele.setPlaybackRate(Number(e.target.value))
        setSpeed(e.target.value)
    }
    const setDurationtime = (e)=>{
    if(ele.h !== undefined && ele.h !== null){
        ele.seekTo((e.target.value * ele.getDuration())/100, true)
        setDuration((time*100) / ele.getDuration())
    }
    }
    const StateChange = (e) =>{
        setTime(e.target.getCurrentTime())
    }

    // const player = new Plyr((document.getElementById('player')));


    return(
        <div className='video-player'>
            <div className="player">
                <div id="player">
                    {/* <div
                        className='hidden-div'
                    ></div> */}
                    {/* <YouTube videoId={id} opts={opts} onReady={onPlayerReady} iframeClassName='iframe-player' onStateChange={StateChange} /> */}
                    <ReactDRMPlayer 
                        src={`https://www.youtube.com/embed/${id}`} 
                        onPlayerError={(error) => {console.log(error)}}
                        onPlaybackError={(error) => {console.log(error)}}
                        widevineLicenseURI={`https://widevine.gumlet.com/licence/64d7440aaf86935081c6cd72`}
                        width="640" 
                        height="264" 
                        controls 
                        muted
                        preload="none"
                        autoPlay={false}
                    />
                    {/* <Player /> */}
                    {/* <ShakaPlayer autoPlay src={`https://www.youtube.com/watch?v=${id}?origin=https://plyr.io`} /> */}
                    {/* <div id="player" data-plyr-provider="youtube" controls={['play-large', 'play', 'current-time', 'mute', 'volume', 'settings', 'fullscreen']} data-plyr-embed-id={id}></div> */}
                </div>

                {/* <ul className='controls' style={{backgroundColor: 'white', zIndex:'199'}}>
                    <li className='volume'>
                        <input className='volume-range' type='range' min='0' max='100' onChange={setVolume} /><br/>
                        <label className='volume-value'>Volume: {volume}</label>
                    </li>
                    <li className='speed'>
                        <input className='speed-range' type='range' min='.25' max='2' step='.25' placeholder='speed' value={speed} onChange={setSpeedplayer} /><br/>
                        <label className='speed-value' id="speed">Speed: {speed+'x'}</label>
                    </li>
                    <li>
                        <p className='speed-value'>{currentTime}</p>
                    </li>             
                    <li>
                        <button onClick={playbtn}>play</button>
                        <button onClick={fullScreen}>Full Screen</button>
                        <button onClick={pausebtn}>pause</button>
                    </li>

                </ul>

                <ul className='slider' style={{backgroundColor: 'white', flexDirection: 'column-reverse', zIndex:'199'}}>                  
                    <li>
                        <input className='video-slider' style={{width: '730px', margin:'auto'}} type='range' min='0' max='100' step='1' value={duration}  onChange={setDurationtime} />
                        <label></label>
                    </li>
                </ul> */}

            </div>
            <div className="attachments">
                <h1 className="title"
                style={{textAlign:'center',padding:'16px'}}
                >المرفقات</h1>
                <h2 className="sub-attachments"
                style={{textAlign:'right'}}
                >:الملزمة</h2>

                {
                    id ==='x4hPH5Wreyk'?
                        <iframe title='ذات الحدين 1' src="https://drive.google.com/file/d/1f-mr9jXcCjjJJwErEOtMUC-zq-PhFs85/preview" width="640" height="600" allow="autoplay"></iframe>
                    :
                    ''
                }
                {
                    id ==='p2aDs2ddmgE'?
                    <iframe title='ذات الحدين 2'  src="https://drive.google.com/file/d/113sHKV0n6NUG3-PFqN6SPkw2WsdXFBg2/preview" width="640" height="480" allow="autoplay"></iframe>
                    :
                    ''
                }

                <h2 className="sub-attachments"
                style={{textAlign:'right'}}
                >:الواجب</h2>
                 {
                    id ==='x4hPH5Wreyk'?
                    <iframe title='ذات الحدين 1' src="https://drive.google.com/file/d/15F-wJ0DT2t14KMs5UgqIfvBcfUiBR1FL/preview" width="640" height="480" allow="autoplay"></iframe>
                    :
                    ''
                }
                 {
                    id ==='p2aDs2ddmgE'?
                    <iframe title='ذات الحدين 2' src="https://drive.google.com/file/d/131t1bJDrpL4drkWIKIMCAhWxBlEAPey-/preview" width="640" height="480" allow="autoplay"></iframe>
                    :
                    ''
                }
            </div>
        </div>

    );
}

export default LessonPlayer;


/* 

<iframe width="1663" height="770" src="https://www.youtube.com/embed/bJFO1JTfohs" title="الحجرات وق لهبة الله الشيخ مصطفي اسماعيل" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

*/