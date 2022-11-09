import axios from "axios";
import { useEffect } from "react";
import {useSelector} from "react-redux";


function MainSection(){

    const isLoggedIn=useSelector((state)=>state.login.isLoggedin);
    const token=useSelector((state)=>state.login.token);

    async function getPlaylist(){
        const data=await axios.get("https://api.spotify.com/v1/me/playlists",{
            headers: {
                Authorization: "Bearer "+ token,
                "Content-Type": "application/json"
            }
        });
        console.log("Playlists....")
        console.log(data);
    }
    useEffect(()=>{
        if(isLoggedIn){
            getPlaylist();
        }
    })
    return(
        <main>
        Main
        </main>
    )
}
export default MainSection;