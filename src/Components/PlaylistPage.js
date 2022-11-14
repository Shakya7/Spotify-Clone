import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import { fetchPlaylistData } from "../redux/features/playlist/playlistSlice";


function PlaylistPage(){
    const {id}=useParams();
    const token=useSelector((state)=>state.login.token);  

    const dispatch=useDispatch();
    dispatch(fetchPlaylistData({id,token}));

    return(
        <div className="playlist-page">
            Playlists

        </div>
    )
}

export default PlaylistPage;