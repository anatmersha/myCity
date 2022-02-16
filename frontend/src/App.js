import React, { useReducer, useState } from "react";
import dataContext from "./Context/dataContext.js";
import { Reducer, initialState } from "./Reducer/dataReducer.js";
import React, { useReducer,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
// import Chat from './pages/Chat.jsx';


function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const STORAGE_KEY = "user"

  useEffect(keppUserLogIn, [])
  

  function keppUserLogIn() {
    let authDetails = localStorage.getItem(STORAGE_KEY)
    return authDetails ? dispatch({type:"auth",value:JSON.parse(authDetails)}) : null
  }

  return (
    <dataContext.Provider value={{ state, dispatch }}>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />    
            <Route path="/Register" element={<Register />} />
            {/* <Route path="/Login" element={<Login />} /> */}
          </Routes>
        </div>
      </Router>
    </dataContext.Provider>
  );
}

export default App;