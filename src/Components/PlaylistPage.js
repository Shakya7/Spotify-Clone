// import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
// import {setPlaylistID,setImages, setPlaylistName, setPlaylistFollowers, setSnapshotID, setDescription, setTracks} from "../redux/features/playlist/playlistSlice"
import { fetchPlaylistData } from "../redux/features/playlist/playlistSlice";


function PlaylistPage(){
    const {id}=useParams();
    const token=useSelector((state)=>state.login.token);  

    const dispatch=useDispatch();
    dispatch(fetchPlaylistData({id,token}));

    // async function getPlaylistDetails(){
    //     const data=await axios.get(`https://api.spotify.com/v1/playlists/${id}`,{
    //         headers: {
    //             Authorization: "Bearer "+ token,
    //             "Content-Type": "application/json"
    //         }
    //     });
    //     console.log(data);
    //     dispatch(setPlaylistID(data.data.id));
    //     dispatch(setImages(...data.data.images));
    //     dispatch(setPlaylistName(data.data.name));
    //     dispatch(setPlaylistFollowers(data.data.followers.total));
    //     dispatch(setSnapshotID(data.data.snapshot_id));
    //     dispatch(setDescription(data.data.description));
    //     dispatch(setTracks(data.data.tracks));

    // }
    // getPlaylistDetails();


    return(
        <div className="playlist-page">
            Playlists

        </div>
    )
}

export default PlaylistPage;