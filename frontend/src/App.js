import React, { useReducer } from "react";
import dataContext from "./Context/dataContext.js";
import { Reducer, initialState } from "./Reducer/dataReducer.js";
import React, { useReducer } from 'react'
import dataContext from './Context/dataContext.js';
import { Reducer, initialState } from './Reducer/dataReducer.js'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Home from './pages/Home.jsx';


function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [auth, setAuth] = useReducer();

  return (
      <dataContext.Provider value={{ state, dispatch }}>
        <Router> 
          <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          </div>
        </Router>
      </dataContext.Provider>
  );
}

export default App;
