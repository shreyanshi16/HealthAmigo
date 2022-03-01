import React from "react";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import Slider from "./components/slider/Slider";
import Register from "./components/signUp/Register";
import Login from "./components/login/Login";
import StopWatch from "./components/StopWatch/StopWatch";

export default function App(){
  return(
     <Router>
       <div>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/Register" element={<Register/>}/>
          <Route exact path="/Slider" element={<Slider/>}/>
          <Route exact path="/StopWatch" element={<StopWatch/>}/>
        </Routes>
        </div>
      </Router>
  )
}