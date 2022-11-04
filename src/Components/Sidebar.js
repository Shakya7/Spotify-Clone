import {FontAwesomeIcon}from "@fortawesome/react-fontawesome"
import {faHouse} from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import logo from "../images/spotify-logo.png"

function Sidebar(){
    return(
        <div className='sidebar'>
            <div className='logo-section'>
                <img src={logo} alt="logo"/>
                <span>Spotify</span>    
            </div>
            <div className="home-search-library">
                <div>
                    <FontAwesomeIcon className="icon" icon={faHouse} />
                    <p>Home</p>
                </div>
                <div>
                    <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
                    <p>Search</p>
                </div>
                <div>
                    <FontAwesomeIcon className="icon" icon={faRecordVinyl} />
                    <p>Your Library</p>
                </div>
            </div>
            <div className="playlist-liked">
                <div>
                    <FontAwesomeIcon className="icon-create" icon={faSquarePlus} />
                    <p>Create Playlist</p>
                </div>
                <div>
                    <FontAwesomeIcon className="heart" icon={faHeart} />
                    <p>Liked Songs</p>
                </div>
            </div>
            <div className="hr-bar">
            </div>
        </div>
    )
}

export default Sidebar;