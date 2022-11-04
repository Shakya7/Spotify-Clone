import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import {useState} from "react";


import './App.css';

function App() {

  const [login,setLogin]=useState(false);
  const [token,setToken]=useState("");
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home tknString={token} setTkn={setToken} setLgn={setLogin} loginState={login}/>}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
