import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Header(props){


    const navigation=useNavigate();

   
    const [data, setData]=useState({});

    const getName=async function(e){
        e.preventDefault();
        console.log(props.tkn);
        console.log(`Bearer ${props.tkn}`);
        const data=await axios.get("https://api.spotify.com/v1/me",
            {
                headers: {
                    Authorization: "Bearer "+ props.tkn,
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
            props.settoken(token);
            props.setTheLogin(true);
            window.history.pushState({},null,"/");
            
            
        }
    })
    return(
        <header>
            
            {
                props.logged?
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