import Sidebar from "./Sidebar";
import Header from "./Header";
import Player from "./Player";
import { Outlet } from "react-router-dom";


function Home(){
    return(
        <div className="body">
            <div className="top-section">
                <Sidebar/>
                <div className="main-section">
                    <Header/>
                    <Outlet/>
                </div>
            </div>
            <Player/>
        </div>
    )
}

export default Home;