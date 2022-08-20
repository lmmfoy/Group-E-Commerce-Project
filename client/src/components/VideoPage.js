import styled from "styled-components";
import videoBg from "../media/videoBg.mp4"


const VideoPage = () => {
    return(
        <VideoStyle>
            <video src= {videoBg} autoPlay loop muted/>
            <div className="VideoText">
                <h1>WATCH IN</h1>
                <p> Discover the broad selection of  watches</p>
            </div>
        </VideoStyle>
    )
}


const VideoStyle = styled.div`
width: 100%;
height: 100vh;
video{
    width: 100%;
    height: 70%;
    object-fit:cover;
}

.VideoText{
    position: absolute;
    width: 100%;
    height: 30%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    color: white;
    h1{
        font-size: 50px;
    }
    p{
        font-size: 30px;
    }
}
`
export default VideoPage;