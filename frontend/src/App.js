<<<<<<< HEAD
import React, { useReducer } from "react";
import dataContext from "./Context/dataContext.js";
import { Reducer, initialState } from "./Reducer/dataReducer.js";
=======
import React, { useReducer } from 'react'
import dataContext from './Context/dataContext.js';
import { Reducer, initialState } from './Reducer/dataReducer.js'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
>>>>>>> origin/main
import "./App.css";
import Home from './pages/Home.jsx';


function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [auth, setAuth] = useReducer();

  return (
    <>
<<<<<<< HEAD
      <dataContext.Provider value={{ state, dispatch }}></dataContext.Provider>
    </>
=======
      <dataContext.Provider value={{ state, dispatch }}>
      <Router>
      <Routes>
      <Route path="/Home" element={<Home/>}/>

        </Routes>
        </Router> 
      </dataContext.Provider></>
>>>>>>> origin/main
  );
}

export default App;
