import React from "react";
import Online from "../components/Online";
import Reports from "../components/Reports";
import style from "../css/home.module.css";

export default function Home() {
    
  return <div className={style.home}>
      <Reports/>
      <Online/>
      </div>;
}
