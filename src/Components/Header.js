import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setLoggedIn} from "../redux/features/login/loginSlice";
import {setProfileID, setName, setEmail} from "../redux/features/profile/profileSlice";

function Header(){

    const navigation=useNavigate();
    const dispatch=useDispatch();
    const isLoggedIn=useSelector((state)=>state.login.isLoggedin);

    async function loadData(payload){
        try{
            const data=await axios.get(`${process.env.REACT_APP_CALLBACK_URL}/api/v1/users/loadProfileDataOnCookiePresent/${payload}`,{withCredentials:true});
            return data.data;
        }catch(err){
            throw false
        }
    }

    async function checkIfCookiePresent(){
        try{
            const data=await axios.get(`${process.env.REACT_APP_CALLBACK_URL}/api/v1/users/authenticate`,{
                withCredentials:true
            })
            return data.data;
        }catch(err){
            throw false;
        }
    }

    async function checkAndLoad(){
        try{
            let token=await checkIfCookiePresent();
            let data=await loadData(token.data.userID);
            dispatch(setProfileID(data.data.user._id));
            dispatch(setName(data.data.user.name));
            dispatch(setEmail(data.data.user.email));
            dispatch(setLoggedIn());
            console.log(data.data);
        }catch(err){
            console.log(err);
        }
    }
    
    useLayoutEffect(()=>{
        checkAndLoad();

    },[])
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