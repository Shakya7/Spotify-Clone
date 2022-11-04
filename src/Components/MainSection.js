import axios from "axios";
import { useEffect } from "react";


function MainSection(props){

    async function getPlaylist(){
        const data=await axios.get("https://api.spotify.com/v1/users/31pjhocqqi4mqftijpyd6oyqdtoq/playlists",{
            headers: {
                Authorization: "Bearer "+ props.tkn,
                "Content-Type": "application/json"
            }
        });
        console.log(data);
    }
    useEffect(()=>{
        if(props.logged){
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