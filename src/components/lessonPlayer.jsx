

const LessonPlayer = ({videoId}) =>{
    console.log(videoId)
    return(
        <div className='video-player'>
            <div className="player">
                <iframe allow="fullscreen;" title='video' width="800" height="443" type="text/html" src={`https://www.youtube.com/embed/${videoId}?autoplay=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&`}></iframe>
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

