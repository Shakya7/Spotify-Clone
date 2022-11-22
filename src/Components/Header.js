import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useLayoutEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setLoggedIn} from "../redux/features/login/loginSlice";
import {setProfileID, setName, setEmail} from "../redux/features/profile/profileSlice";
import { ProfileDropdownContext } from "../App";
import { ProfileBtnRef } from "../App";


function Header(){
    const [dropdown, caretDown, setDropdown, setCarretDown]=useContext(ProfileDropdownContext);
    const profileDropdownRef=useContext(ProfileBtnRef);

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

    useEffect(()=>{
        
    },[dropdown])

    return(
        <header>  
            {
                isLoggedIn?
                <>
                    <button onClick={()=>{
                        setCarretDown((prev)=>!prev);
                        setDropdown((prev)=>!prev);
                        }} className="profile" ref={profileDropdownRef}>
                        <div>
                            <FontAwesomeIcon icon={faUser}/>
                        </div>   
                        <p>
                        Profile       
                        </p>
                        {caretDown?<FontAwesomeIcon icon={faCaretDown}/>:<FontAwesomeIcon icon={faCaretUp}/>}
                        {dropdown?<section className="profile-dropdown">
                            <p onClick={()=>navigation("/me")}>Profile</p>
                            <p>Logout</p>
                        </section>:""}
                    </button>
                    
                </>
                :
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