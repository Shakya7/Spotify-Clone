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
                    <Header tkn={props.tknString} setTheLogin={props.setLgn} settoken={props.setTkn} logged={props.loginState}/>
                    <MainSection tkn={props.tknString} logged={props.loginState}/>
                </div>
            </div>
            <Player/>
        </div>
    )
}

export default Home;