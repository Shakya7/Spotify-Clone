import {FontAwesomeIcon}from "@fortawesome/react-fontawesome"
import {faHouse} from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import { useEffect} from "react";
import {setPlayliststoZero, setPlaylists} from "../redux/features/profile/profileSlice";
import Playlists from "./Playlists";
import { useNavigate } from "react-router-dom";

import logo from "../images/spotify-logo.png"

function Sidebar(){
    
    const navigation=useNavigate();

    const isLoggedIn=useSelector((state)=>state.login.isLoggedin);
    const token=useSelector((state)=>state.login.token);
    
    const dispatch=useDispatch();

    async function getPlaylist(){
        const data=await axios.get("https://api.spotify.com/v1/me/playlists",{
            headers: {
                Authorization: "Bearer "+ token,
                "Content-Type": "application/json"
            }
        });
        console.log("Playlists....");
        dispatch(setPlayliststoZero());
        data.data.items.map((item)=>{
            const playlist={
                id:item.id,
                name: item.name
            }
            //return console.log(playlist);
            return dispatch(setPlaylists(playlist))

        });
    }
    useEffect(()=>{
        if(isLoggedIn){
            getPlaylist();
        }    
    })
    return(
        <div className='sidebar'>
            <div className='logo-section'>
                <img src={logo} alt="logo"/>
                <span>Spotify</span>    
            </div>
            <div className="home-search-library">
                <div onClick={()=>navigation("/")}>
                    <FontAwesomeIcon className="icon" icon={faHouse} />
                    <p className="text-sidebar">Home</p>
                </div>
                <div>
                    <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
                    <p className="text-sidebar">Search</p>
                </div>
                <div>
                    <FontAwesomeIcon className="icon" icon={faRecordVinyl} />
                    <p className="text-sidebar">Your Library</p>
                </div>
            </div>
            <div className="playlist-liked">
                <div>
                    <FontAwesomeIcon className="icon" icon={faSquarePlus} />
                    <p className="text-sidebar">Create Playlist</p>
                </div>
                <div>
                    <FontAwesomeIcon className="heart" icon={faHeart} />
                    <p className="text-sidebar">Liked Songs</p>
                </div>
            </div>
            <div className="hr-bar"></div>
            <div className="playlists">
            {
                isLoggedIn?
                <Playlists/>:
                ""
            } 
            </div>
        </div>
    )
}

export default Sidebar;