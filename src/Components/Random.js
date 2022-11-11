import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Random = () => {
    const isLoggedIn=useSelector((state)=>state.login.isLoggedin);
    const token=useSelector((state)=>state.login.token);
    console.log("Token is ",token);
    async function getGenres(){
        const data=await axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds",{
            headers: {
                Authorization: "Bearer "+ token,
                "Content-Type": "application/json"
            }
        })
        console.log(data)
    }
    useEffect(()=>{
        if(isLoggedIn){
            getGenres()
        }  
    })
    return (
        <div>Random</div>
    )
}

export default Random;
