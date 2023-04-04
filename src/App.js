import "./App.css";
import React from "react";
import { Home } from "./components/Home";
import { Routes,Route } from "react-router-dom";
import { Coindetails } from "./components/Coindetails";

function App() {
 
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coinsdetails/:id" element={<Coindetails />}/>


      </Routes>
      
    </div>
  );
}

export default App;
