import logo from "../images/spotify-logo-login-page.png";
import axios from "axios";
import {useEffect, useLayoutEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import SavingSpinner from "../loading-spinners/SavingSpinner";
 


function Signup(){
    const navigation=useNavigate();
    const [credentials,setCredentials]=useState({
        email:"",
        password:"",
        name:"",
        confirmPassword:"",
    });
    const [failure,setFailure]=useState(false);
    const [isLoading,setIsLoading]=useState(false);

    async function signup(){
        try{
            let data=await axios.post(`${process.env.REACT_APP_CALLBACK_URL}/api/v1/users/signup`,{
                name:credentials.name,
                email:credentials.email,
                password:credentials.password,
                confirmPassword:credentials.confirmPassword,

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
                <p>To access Spotify, please Sign up</p>
                <div>
                    <label htmlFor="name">Name</label>
                    <input onFocus={()=>setFailure(false)} id="name" type={"text"} placeholder="Name" onChange={(e)=>setCredentials({
                        ...credentials,
                        name:e.target.value
                    })}/>
                </div>
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
                    <label htmlFor="c-pw">Confirm Password</label>
                    <input onFocus={()=>setFailure(false)} id="c-pw" type={"password"} placeholder="Confirm Password" onChange={(e)=>setCredentials({
                        ...credentials,
                        confirmPassword:e.target.value
                    })}/>
                </div>
                <div>
                    <button className="login-btn" onClick={async(e)=>{
                        e.preventDefault();
                        try{
                            setIsLoading(true);
                            const data=await signup();
                            console.log(data);
                            setIsLoading(false);
                            navigation("/");
                        }catch(err){
                            console.log(err.message);
                            setIsLoading(false);
                            setFailure(true);
                        }
                    }}>{
                        !isLoading?"Sign Up":
                        <div className="login-loading" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                            <p>Signing up...</p>
                            <SavingSpinner/>
                        </div>
                    }</button>

                </div>
                {failure?<p style={{color:"red",textAlign:"center"}}>Invalid email or password. Please try again.</p>:""}
                <p className="forgot-pw-link"style={{textAlign:"center"}}>Forgot password?</p>
            </form>
            <div className="login-footer">
                <b>Already have an account?</b>
                <button onClick={(e)=>{
                    e.preventDefault();
                    navigation("/login");
                }}>Login</button>
            </div>
        </div>
    )

}
export default Signup;