import React from "react";
import { Link } from "react-router-dom";
import  { useContext } from "react";
import dataContext from "../Context/dataContext";
import style from "../css/navBar.module.css";



export default function NavBar() {
  const { state, dispatch } = useContext(dataContext);

  return (
    <div className={style.navBar}>
       <Link to="/">Home</Link> 
      {!state.auth? <Link to="/Login">Login</Link>:""} 
      {!state.auth? <Link to="/Register">Register</Link>:""} 
      {state.auth? <Link to="/chat">Chat</Link>:""} 
      {state.auth? <Link to="/Events">Events</Link>:""} 
      {state.auth? <Link to="/Logout">Logout</Link>:""} 
    </div>
  );
}
