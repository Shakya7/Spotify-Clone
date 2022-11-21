import { useSelector } from "react-redux";

function Player(){
    const token=useSelector((state)=>state.login.token);
    const isLoggedIn=useSelector((state)=>state.login.isLoggedin);
    return(
        <div className="bottom-section">
            Footer
        </div>
    )
}

export default Player;