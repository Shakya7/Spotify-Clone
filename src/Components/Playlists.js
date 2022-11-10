import {useSelector} from "react-redux";

function Playlists(){
    const {playlists}=useSelector((state)=>state.profile);
    console.log(playlists);
    return(
        <ul className="playlist-section">
        {
            playlists.map((item)=><li key={item.id}>{item.name}</li>)
        }
        </ul>
    )
}
export default Playlists;