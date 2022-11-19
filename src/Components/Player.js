import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector } from "react-redux";

function Player(){
    const token=useSelector((state)=>state.login.token);
    const isLoggedIn=useSelector((state)=>state.login.isLoggedin);
    return(
        <div className="bottom-section">
            {isLoggedIn?<SpotifyPlayer token={token} uris={[]}/>:"Footer"}
        </div>
    )
}

export default Player;