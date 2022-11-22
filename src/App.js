import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import MainSection from "./Components/MainSection";
import PlaylistPage from "./Components/PlaylistPage";


import './App.css';
import { createContext, useEffect, useState, useRef } from "react";

export const ProfileDropdownContext=createContext();
export const ProfileBtnRef=createContext();

function App() {
  const [dropdown,setDropdown]=useState(false);
  // const [caretDown,setCarretDown]=useState(true);
  const profileDropdownRef=useRef(null);

  useEffect(()=>{
    document.addEventListener("click",handleClickForProfileDropdown,true);
  },[])

  const handleClickForProfileDropdown = (e)=>{
    if(!profileDropdownRef.current.contains(e.target)){
      console.log("Clicked outside");
      setDropdown(false);
      //setCarretDown(true);
    }
    else{
      console.log("Clicked inside");
    }
  }

  return (
    <BrowserRouter>
      <ProfileDropdownContext.Provider value={[dropdown,setDropdown]}>
        <ProfileBtnRef.Provider value={profileDropdownRef}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home/>}>
                <Route index element={<MainSection/>}/>
                <Route path="/me" element={<Profile/>}/>
                <Route path="/playlist/:id" element={<PlaylistPage/>}/> 
              </Route>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
            </Routes>
          </div>
        </ProfileBtnRef.Provider>
      </ProfileDropdownContext.Provider>
    </BrowserRouter>

  );
}

export default App;
