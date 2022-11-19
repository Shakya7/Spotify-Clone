import logo from "../images/spotify-logo-login-page.png";
import axios from "axios";
import {useEffect, useLayoutEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import SavingSpinner from "../loading-spinners/SavingSpinner";
import {setLoggedIn} from "../redux/features/login/loginSlice";
import {useDispatch} from "react-redux";
 
// const scope = [
//     "streaming",
//     "user-read-private",
//     "user-read-email",
//     "user-modify-playback-state",
//     "user-read-playback-state",
//     "user-read-currently-playing",
//     "user-read-recently-played",
//     "playlist-read-private",
//     "playlist-read-collaborative",
//     "playlist-modify-private",
//     "playlist-modify-public",
//     "user-top-read",
//     "ugc-image-upload"
//   ];

// const client_ID=process.env.REACT_APP_CLIENT_ID;
// const redirect_URI="http://localhost:3000";



// let URL=`https://accounts.spotify.com/authorize?client_id=${client_ID}&response_type=token&redirect_uri=${redirect_URI}&scope=${scope.join(" ")}&show_dialog=true`;


function Login(){
    const navigation=useNavigate();
    const dispatch=useDispatch();
    const [credentials,setCredentials]=useState({
        email:"",
        password:""
    });
    const [failure,setFailure]=useState(false);
    const [isLoading,setIsLoading]=useState(false);
    async function login(){
        try{
            let data=await axios.post(`${process.env.REACT_APP_CALLBACK_URL}/api/v1/users/login`,{
                email:credentials.email,
                password:credentials.password
            },{withCredentials:true});
            return data.data;
        }catch(err){
            throw err;
        }
    }

    useLayoutEffect(()=>{

    },[failure,isLoading])
    return(
        <div className="login-page">
            <div className="login-header">
                <img src={logo} alt="logo"/>
                <p>Spotify</p>
            </div>
            <hr/>
            <form className="login-main">
                <p>To continue, login to Spotify</p>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input onFocus={()=>setFailure(false)} id="email" type={"email"} placeholder="Email address" onChange={(e)=>setCredentials({
                        ...credentials,
                        email:e.target.value
                    })}/>
                </div>
                <div>
                    <label htmlFor="pw">Password</label>
                    <input onFocus={()=>setFailure(false)} id="pw" type={"password"} placeholder="Password" onChange={(e)=>setCredentials({
                        ...credentials,
                        password:e.target.value
                    })}/>
                </div>
                <div>
                    <button className="login-btn" onClick={async(e)=>{
                        e.preventDefault();
                        try{
                            setIsLoading(true);
                            const data=await login();
                            console.log(data);
                            dispatch(setLoggedIn());
                            setIsLoading(false);
                            navigation("/");
                        }catch(err){
                            console.log(err.message);
                            setIsLoading(false);
                            setFailure(true);
                        }
                    }}>{
                        !isLoading?"Login":
                        <div className="login-loading" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                            <p>Logging in...</p>
                            <SavingSpinner/>
                        </div>
                    }</button>

                </div>
                {failure?<p style={{color:"red",textAlign:"center"}}>Invalid email or password. Please try again.</p>:""}
                <p className="forgot-pw-link"style={{textAlign:"center"}}>Forgot password?</p>
            </form>
            <div className="login-footer">
                <b>Don't have an account yet?</b>
                <button onClick={(e)=>{
                    e.preventDefault();
                    navigation("/signup");
                }}>Signup</button>
            </div>
        </div>
    )

}
export default Login;