import dataContext from "./Context/dataContext.js";
import { Reducer, initialState } from "./Reducer/dataReducer.js";
import React, { useReducer, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import "./App.css";
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import NavBar from "./components/NavBar.jsx";
import Chat from './pages/Chat.jsx';
import useRequestAxios from './components/customHooks/useRequestAxios.jsx'


function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const { data } = useRequestAxios('users')
  const STORAGE_KEY = "user"
  useEffect(keppUserLogIn, [])
useEffect(()=>{
  dispatch({ type: "users", value: data })
},[data])
console.log(state?.users);
  function keppUserLogIn() {
    let authDetails = localStorage.getItem(STORAGE_KEY)
    
    return authDetails ? dispatch({ type: "auth", value: JSON.parse(authDetails) }) : null
  }

  return (
    <dataContext.Provider value={{ state, dispatch }}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />    
            <Route path="/Register" element={<Register />} /> 
            <Route path="/Chat" element={<Chat />} /> 
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Chat" element={<Chat />} /> 
            <Route path="/Login" element={<Login />} />
            {/* <Route path="/NavBar" element={<NavBar />} /> */}
          </Routes>
        </div>
      </Router>
    </dataContext.Provider>
  );
}

export default App;