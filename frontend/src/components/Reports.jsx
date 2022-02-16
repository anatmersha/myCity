import { useState } from "react";
import style from "../css/home.module.css";
import {
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsFillChatFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";

export default function Reports() {
  const [isOption, setIsOption] = useState(false);
  return (
    <div className={style.reportsHolder}>
      <div className={style.reports}>
        <div className={style.reportHead}>
          <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg" />
          <p>
            שם משתמש
            <br />
            מיקום
          </p>
          <div className={style.optionHolder}>
            <BsThreeDotsVertical
              onClick={() => setIsOption(!isOption)}
              className={style.optionsBtn}
            />
            <div className={isOption ? style.option : style.unOption}>
              <p>ערוך</p>
              <p>מחק</p>
            </div>
          </div>
        </div>
        <div className={style.report}>
          <div className={style.reportInfo}></div>
          <p>
            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע.
            <br />
            איף, ברומץ כלרשט מיחוצים. קלאצי גולר מונפרר סוברט לורם שבצק יהול?{" "}
            <br />
            גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף,
            <br />
            סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.!
          </p>
          <div className={style.reportStatus}>
            <span className={style.urgency}>דחיפות: דחוף</span>
            <span className={style.status}>סטטוס: בטיפול</span>
          </div>
        
          {/* <div className={style.urgency}>דחיפות: דחוף</div>
          <div className={style.status}>סטטוס: בטיפול</div> */}
          <div className={style.reportImg}>
            <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg" />
          </div>
          <div className={style.reportVideo}>
            <video
              src="https://res.cloudinary.com/ballerscourt/video/upload/v1644966932/gftjzdkuw2mmoslpl25m.mp4"
              controls
            />
          </div>
          <p className={style.reportDate}>תאריך של העלאת הפוסט</p>
        </div>
        <div className={style.btns}>
          <div className={style.like}>
            <HiOutlineHeart />
          </div>
          <div className={style.comment}><BsFillChatFill /></div>
          <div className={style.verification}>
            <p><BsFillCaretUpFill /></p>
            <p>1</p>
            <p><BsFillCaretDownFill /></p>
            <p>1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
