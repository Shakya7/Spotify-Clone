import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import MainSection from "./Components/MainSection";
import PlaylistPage from "./Components/PlaylistPage";


import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route index element={<MainSection/>}/>
            <Route path="/me" element={<Profile/>}/>
            <Route path="/playlist/:id" element={<PlaylistPage/>}/> 
          </Route>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
