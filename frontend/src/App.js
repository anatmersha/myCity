import React, { useReducer } from 'react'
import dataContext from './Context/dataContext.js';
import { Reducer, initialState } from './Reducer/dataReducer.js'
import "./App.css";
import Home from './pages/Home.jsx';

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <>
      <dataContext.Provider value={{ state, dispatch }}>
        <Home/>
      </dataContext.Provider></>
  );
}

export default App;
