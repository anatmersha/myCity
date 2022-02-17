import React from "react";
import { Link } from "react-router-dom";
import  { useContext } from "react";
import dataContext from "../Context/dataContext";
import style from "../css/navBar.module.css";
import Reports from "./Reports";

export default function NavBar() {
  const { state, dispatch } = useContext(dataContext);

  return (
    <div className={style.navBar}>
    <div className={style.navBarProfile}>
      <img className={style.profileImg} src="https://images.pexels.com/photos/10840765/pexels-photo-10840765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
      <h1 className={style.profileHeader}>Shoshi shoshi</h1>
    </div>
    <div className={style.navBarLinks}>
       <Link to="/" className={style.navBarLink}>Home</Link> <br/>
      {!state.auth? <Link to="/Login" className={style.navBarLink}>Login</Link>:""} <br/>
      {!state.auth? <Link to="/Register" className={style.navBarLink}>Register</Link>:""} <br/>
      {state.auth? <Link to="/chat" className={style.navBarLink}>Chat</Link>:""} <br/>
      {state.auth? <Link to="/Events" className={style.navBarLink}>Events</Link>:""} <br/>
      {state.auth? <Link to="/Logout" o className={style.navBarLink}nClick={()=> {
         dispatch({ type: "auth", value: null });
      }}>Logout</Link>:""} 
    </div>
</div>
);
}
