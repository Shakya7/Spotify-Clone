import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setToken, setLoggedIn} from "../redux/features/login/loginSlice";


function Header(){

    const navigation=useNavigate();
    const dispatch=useDispatch();
    const isLoggedIn=useSelector((state)=>state.login.isLoggedin);
    const token=useSelector((state)=>state.login.token);
   
    const getName=async function(e){
        e.preventDefault();
        console.log(token);
        console.log(`Bearer ${token}`);
        const data=await axios.get("https://api.spotify.com/v1/me",
            {
                headers: {
                    Authorization: "Bearer "+ token,
                    "Content-Type": "application/json"
                }
            }
        )
        console.log(data);
        
    }   
    
    useEffect(()=>{
        console.log("Checking");
        if(window.location.hash){
            const hash=window.location.hash;
            const token=hash.substring(1).split("&")[0].split("=")[1];
            console.log(token);

            //Setting the token
            dispatch(setToken(token));

            //Setting the isLoggedIn flag = true
            dispatch(setLoggedIn());

            //Setting the URL to blank erasing the token
            window.history.pushState({},null,"/");
            
            
        }
    })
    return(
        <header>
            
            {
                isLoggedIn?
                <button className="profile">
                    <div>
                        <FontAwesomeIcon icon={faUser}/>
                    </div>   
                    <p onClick={getName}>
                    Profile       
                    </p>
                    <FontAwesomeIcon icon={faCaretDown}/>
                </button>:
                <button className="login">
                    <p onClick={()=>navigation("/login")}>LOGIN</p>
                </button>
            }
        </header>
    )
}

export default Header;