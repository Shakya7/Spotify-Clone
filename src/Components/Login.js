import logo from "../images/spotify-logo-login-page.png";

const scope = [
    "user-read-private",
    "user-read-email",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-private",
    "playlist-modify-public",
    "user-top-read",
    "ugc-image-upload"
  ];

const client_ID=process.env.REACT_APP_CLIENT_ID;
const redirect_URI="http://localhost:3000";



let URL=`https://accounts.spotify.com/authorize?client_id=${client_ID}&response_type=token&redirect_uri=${redirect_URI}&scope=${scope.join(" ")}&show_dialog=true`;

function Login(){
    return(
        <div className="login-page">
            <div className="login-sec">
                <img src={logo} alt="logo"/>
                <p>Spotify</p>
            </div>
            <button><a href={URL}>LOGIN</a></button>
        </div>
    )

}
export default Login;