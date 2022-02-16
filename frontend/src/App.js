import React, { useReducer, useState } from "react";
import dataContext from "./Context/dataContext.js";
import { Reducer, initialState } from "./Reducer/dataReducer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import NavBar from "./components/NavBar.jsx";
// import Chat from './pages/Chat.jsx';


function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
 

  return (
    <dataContext.Provider value={{ state, dispatch }}>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </dataContext.Provider>
  );
}

export default App;