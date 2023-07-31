

const LessonPlayer = ({videoId}) =>{
    return(
        <div className='video-player'>
            <div className="player">
                <iframe allow="fullscreen;" title='video' width="800" height="443" type="text/html" src={`https://www.youtube.com/embed/${videoId}?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&`}></iframe>
                <script src="https://fast.wistia.com/embed/medias/6lyd7oxe97.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div className="wistia_responsive_padding" style={{padding:'62.5% 0 0 0',position:'relative'}}><div className="wistia_responsive_wrapper" style={{height:'100%',left:'0',position:'absolute',top:'0',width:'100%'}}><div className="wistia_embed wistia_async_6lyd7oxe97 seo=true videoFoam=true" style={{height:'100%',position:'relative',width:'100%'}}><div className="wistia_swatch" style={{height:'100%',left:'0',opacity:'0',overflow:'hidden',position:'absolute',top:'0',transition:'opacity 200ms',width:'100%'}}><img src="https://fast.wistia.com/embed/medias/6lyd7oxe97/swatch" style={{filter:'blur(5px)',height:'100%',objectFit:'contain',width:'100%'}} alt="" aria-hidden="true"/></div></div></div></div>
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

