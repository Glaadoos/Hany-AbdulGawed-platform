import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';


const LessonPlayer = ({videoId}) =>{
    let id =localStorage.getItem("videoId");
    const[ele, setEle] = useState('')
    const[time, setTime] = useState(0)
    const[duration, setDuration] = useState(0)
    const[currentTime, setCurrentTime] = useState(0)
    const[height, setHeight] = useState('')
    let videoplayer = document.querySelector('.player')
    

    
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
        // console.log(time)
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
                // console.log(ele.getCurrentTime() === time, time)
            
           
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
        console.log(ele)
    }
    }
    const pausebtn = ()=>{
    if(ele.h !== undefined && ele.h !== null){
        ele.pauseVideo()
    }
    }
    const setVolume = (e)=>{
    if(ele.h !== undefined && ele.h !== null){
        ele.setVolume(e.target.value)
    }
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

// console.log(time)

    return(
        <div className='video-player'>
            <div className="player" style={{padding:'10px'}}>
                <div
                    style={{position: 'absolute',width: '100%', height: '100%', top: '0', left: '0', opacity: '0'}}
                ></div>
                <div id="player">
                    <YouTube videoId={id} opts={opts} onReady={onPlayerReady} onStateChange={StateChange} />
                </div>

                <ul style={{backgroundColor: 'white'}}>
                    
                    <li>
                        <input type='range' min='0' max='100' onChange={setVolume} />
                        <label>Volume</label>
                    </li>
                    <li>
                        <p>{currentTime}</p>
                    </li>
                    <li>
                        <button onClick={pausebtn}>pause</button>
                    </li>
                    <li>
                        <button onClick={playbtn}>play</button>
                    </li>

                </ul>

                <ul style={{backgroundColor: 'white'}}>
                    <li>
                        <input style={{width: '730px', margin:'auto'}} type='range' min='0' max='100' value={duration}  onChange={setDurationtime} />
                        <label></label>
                    </li>
                </ul>

            </div>
            <div className="attachments">
                <h1 className="title"
                style={{textAlign:'center',padding:'16px'}}
                >المرفقات</h1>
                <h2 className="sub-attachments"
                style={{textAlign:'right'}}
                >:الملزمة</h2>
                <h2 className="sub-attachments"
                style={{textAlign:'right'}}
                >:الواجب</h2>
            </div>
        </div>

    );
}

export default LessonPlayer;

