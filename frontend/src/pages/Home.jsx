import {useEffect} from "react";
import Online from "../components/Online";
import Reports from "../components/Reports";
import style from "../css/home.module.css";
import axios from "axios"

export default function Home() {
  useEffect(geteports, [])
  
  function geteports() {
    axios.get("/").then(res=>console.log(res))
    .catch(err=>console.log(err.response))
  }

    
  return <div className={style.home}>
      <Reports/>
      <Online/>
      </div>;
}
