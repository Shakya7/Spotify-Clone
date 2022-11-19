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
                        navigation("/login");
                    }}>LOGIN</p>
                </button>
            }
        </header>
    )
}

export default Header;