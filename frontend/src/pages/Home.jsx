import {useEffect} from "react";
import Online from "../components/Online";
import Reports from "../components/Reports";
import style from "../css/home.module.css";
import NewReport from "../components/NewReport";
import NavBar from "../components/NavBar";
import React, {  useContext } from 'react'
import dataContext from '../Context/dataContext'

export default function Home() {
  const { state, dispatch } = useContext(dataContext)
  // useEffect(getReports, [])  
  // function getReports() {
  //   axios.get("/reports").then(res=>console.log(res))
  //   .catch(err=>console.log(err.response))
  // }
    
  return <div className={style.home}>
      <Online/>
      <Reports/>
<<<<<<< HEAD
      <NavBar/>
      {/* <NewReport/> */}
=======
      {state.newRepo ? <NewReport/> : ""}
>>>>>>> origin/main
      </div>;
}
