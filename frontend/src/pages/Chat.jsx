import React from 'react'
import Conversations from '../components/chat/Conversations'
import Messages from '../components/chat/Messages'
import style from "../components/chat/chat.module.css"

export default function Chat() {
  return (
    <div className={style.chat}>
        
        <Messages/>
        <Conversations/>
    </div>
  )
}
