import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setToken, setLoggedIn} from "../redux/features/login/loginSlice";
import {setProfileID, setName, setEmail, setFollowers} from "../redux/features/profile/profileSlice";


function Header(){

    const navigation=useNavigate();
    const dispatch=useDispatch();
    const isLoggedIn=useSelector((state)=>state.login.isLoggedin);
    const token=useSelector((state)=>state.login.token);
   
    const setProfileData=async function(e){
        
        //console.log(`Bearer ${token}`);
        const data=await axios.get("https://api.spotify.com/v1/me",
            {
                headers: {
                    Authorization: "Bearer "+ token,
                    "Content-Type": "application/json"
                }
            }
        )
        console.log(data);
        dispatch(setProfileID(data.data.id));
        dispatch(setName(data.data.display_name));
        dispatch(setEmail(data.data.email));
        dispatch(setFollowers(data.data.followers.total));
        
    }   

    useEffect(()=>{
        if(window.location.hash){
            const hash=window.location.hash;
            const token=hash.substring(1).split("&")[0].split("=")[1];

            //Setting the token
            dispatch(setToken(token));

            //Setting the isLoggedIn flag = true
            dispatch(setLoggedIn());

            //Setting the URL to blank erasing the token
            window.history.pushState({},null,"/");
            
        }
        if(isLoggedIn){
            setProfileData();
        }
    })
    return(
        <header>
            
            {
                isLoggedIn?
                <button onClick={()=>navigation("/me")} className="profile">
                    <div>
                        <FontAwesomeIcon icon={faUser}/>
                    </div>   
                    <p>
                    Profile       
                    </p>
                    <FontAwesomeIcon icon={faCaretDown}/>
                </button>:
                <button className="login">
                    <p onClick={async()=>{
                        //console.log("OKAY",process.env.REACT_APP_CALLBACK_URL)
                        //const data=await axios.get(`${process.env.REACT_APP_CALLBACK_URL}/`);
                        //console.log(data);
                        navigation("/login");
                    }}>LOGIN</p>
                </button>
            }
        </header>
    )
}

export default Header;