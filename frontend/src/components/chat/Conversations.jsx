import style from "./chat.module.css"
import React from 'react'
import {FaCircle, FaDotCircle, FaGgCircle, FaViber} from "react-icons/fa"

export default function Conversations() {

  return (
    <div className={style.conversationsHolder}>
      <FaViber style={{width:"100%"}}/>
      <div className={style.conversations}>
        <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg"/>
        <FaCircle className={style.isOnline}/>
      </div>
      <div className={style.conversations}>
        <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg"/>
        <FaCircle className={style.isOnline}/>
      </div>
      <div className={style.conversations}>
        <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg"/>
        <FaCircle className={style.isOnline}/>
      </div>
      <div className={style.conversations}>
        <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg"/>
        <FaCircle className={style.isOnline}/>
      </div>
      <div className={style.conversations}>
        <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg"/>
        <FaCircle className={style.isOnline}/>
      </div>
      <div className={style.conversations}>
        <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg"/>
        <FaCircle className={style.isOnline}/>
      </div>
    </div>
  )
}
