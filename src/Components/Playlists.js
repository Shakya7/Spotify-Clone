import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

function Playlists(){
    const {playlists}=useSelector((state)=>state.profile);
    const navigation=useNavigate();

    return(
        <ul className="playlist-section">
        {
            playlists.map((item)=><li onClick={()=>navigation(`/playlist/${item.id}`)} key={item.id}>{item.name}</li>)
        }
        </ul>
        
    )
}
export default Playlists;