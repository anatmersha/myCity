import style from "./chat.module.css"
import React from 'react'
import { FaLocationArrow, FaStar } from "react-icons/fa"

export default function Messages() {
  return (
    <div className={style.messagesHolder}>
      <div className={style.messagesHeader}>
        <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg" />
        <p>fatma jalal<br/><FaStar/>  | Online</p>
      </div>
      <div className={style.messageHolder}>
        <div className={style.message}>
          <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe accusamus aspernatur, ratione exercitationem voluptates nisi reiciendis mollitia soluta, commodi incidunt placeat nesciunt fugit doloremque consectetur molestiae laudantium quod facilis!</p>
        </div>
        <div className={style.message}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe accusamus aspernatur, ratione exercitationem voluptates nisi reiciendis mollitia soluta, commodi incidunt placeat nesciunt fugit doloremque consectetur molestiae laudantium quod facilis!</p>
          <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg" />
        </div>
        <div className={style.message}>
          <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe accusamus aspernatur, ratione exercitationem voluptates nisi reiciendis mollitia soluta, commodi incidunt placeat nesciunt fugit doloremque consectetur molestiae laudantium quod facilis!</p>
        </div>
        <div className={style.message}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe accusamus aspernatur, ratione exercitationem voluptates nisi reiciendis mollitia soluta, commodi incidunt placeat nesciunt fugit doloremque consectetur molestiae laudantium quod facilis!</p>
          <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg" />
        </div>
      </div>
      <div className={style.newMessage}>
        <FaLocationArrow/>
        <textarea placeholder="Message.."></textarea>
      </div>
    </div>
  )
}
