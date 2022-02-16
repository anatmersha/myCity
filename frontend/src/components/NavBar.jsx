import React from "react";
import { Link } from "react-router-dom";
import  { useContext } from "react";
import dataContext from "../Context/dataContext";



export default function NavBar() {
  const { state, dispatch } = useContext(dataContext);
  // console.log(state.auth);
lkm k

  return (
    <div>
       <Link to="/">Home</Link> <hr />
      {state.auth? "" : <Link to="/Login">Login</Link>} <hr />
      {state.auth? "" : <Link to="/Register">Register</Link>} <hr />
      {state.auth? <Link to="/chat">chat</Link>:""} <hr />
      {state.auth? <Link to="/events">events</Link>:""} <hr />
      {state.auth? <Link to="/Logout">Logout</Link>:""} <hr />
    </div>
  );
}
