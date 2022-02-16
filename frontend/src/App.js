
import dataContext from "./Context/dataContext.js";
import { Reducer, initialState } from "./Reducer/dataReducer.js";
import React, { useReducer } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
// import Chat from './pages/Chat.jsx';


function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [auth, setAuth] = useReducer();

  return (
    <dataContext.Provider value={{ state, dispatch }}>
        <Router> 
          <div>
          <Routes>
            <Route path="/" element={<Home />} />    
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
          </div>
        </Router>
      </dataContext.Provider>
  );
}

export default App;