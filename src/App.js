import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";


import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
