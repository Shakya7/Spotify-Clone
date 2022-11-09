import Sidebar from "./Sidebar";
import Header from "./Header";
import MainSection from "./MainSection";
import Player from "./Player";


function Home(props){
    return(
        <div className="body">
            <div className="top-section">
                <Sidebar/>
                <div className="main-section">
                    <Header/>
                    <MainSection/>
                </div>
            </div>
            <Player/>
        </div>
    )
}

export default Home;