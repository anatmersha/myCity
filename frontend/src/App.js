import React, { useReducer } from 'react'
import dataContext from './Context/dataContext.js';
import { Reducer, initialState } from './Reducer/dataReducer.js'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Home from './pages/Home.jsx';
import Chat from './pages/Chat.jsx';

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <dataContext.Provider value={{ state, dispatch }}>
      <Router>
        <>

      <Routes> 
      <Route path="/Home" element={<Home/>}/>
      {/* <Route path="/Chat" element={<Chat/>}/> */}

        </Routes>
        </>
        </Router> 
      </dataContext.Provider>
  );
}

export default App;
