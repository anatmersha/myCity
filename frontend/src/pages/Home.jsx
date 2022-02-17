import {useEffect} from "react";
import Online from "../components/Online";
import Reports from "../components/Reports";
import style from "../css/home.module.css";
import NewReport from "../components/NewReport";
import NavBar from "../components/NavBar";

export default function Home() {
  // useEffect(getReports, [])  
  // function getReports() {
  //   axios.get("/reports").then(res=>console.log(res))
  //   .catch(err=>console.log(err.response))
  // }
    
  return <div className={style.home}>
      <Online/>
      <Reports/>
      <NavBar/>
      {/* <NewReport/> */}
      </div>;
}
