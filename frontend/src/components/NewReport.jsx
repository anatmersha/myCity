import { useState } from "react";
import axios from "axios";
import style from "../css/newReport.module.css";
import { BsCamera, BsCameraVideo, BsXLg } from "react-icons/bs";
import AutoCompleteLocation from "./AutoCompleteLocation";

export default function NewReport() {
  const [report, setReport] = useState(null);
  const [location, setLocation] = useState(null);
  const [urgency, setUrgency] = useState(null);
  const [reportType, setReportType] = useState(null);
  const [imgSelect, setImgSelect] = useState(null);
  const [videoSelect, setVideoSelect] = useState(null);
  const [imgLink, setImgLink] = useState(null);
  const [videoLink, setVideoLink] = useState(null);

  const imgFileSelectHandler = (event) => {
    setImgSelect(event.target.files[0]);
  };

  const videoFileSelectHandler = (event) => {
    setVideoSelect(event.target.files[0]);
  };

  const imgFileUploadHandler = () => {
    const formData = new FormData();
    formData.append("file", imgSelect);
    formData.append("upload_preset", "mycity");

    axios
      .post(
        "https://api.cloudinary.com/v1_1/ballerscourt/image/upload",
        formData
      )
      .then((res) => setImgLink(res.data.url));
  };

  const videoFileUploadHandler = () => {
    const formData = new FormData();
    formData.append("file", videoSelect);
    formData.append("upload_preset", "mycity");

    axios
      .post(
        "https://api.cloudinary.com/v1_1/ballerscourt/video/upload",
        formData
      )
      .then((res) => setVideoLink(res.data.url));
  };

  function uploadPost() {
    let obj = {};
  }

  return (
    <form className={style.newReport} onSubmit={(e)=>{
        e.preventDefault()
    }}>
      <BsXLg className={style.exitBtn} />
      <div className={style.userInfo}>
        <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg" />
        <textarea
          onChange={(e) => setReport(e.target.value)}
          placeholder="דיווח חדש.."
        />
      </div>
      <div className={style.userOptions}>
        <select onSelect={(e)=>setLocation(e.target.value)} className={style.selectBtn}>
          <option>הכנס</option>
          <option>מיקום נוכחי</option>
        </select>
        <select onSelect={(e)=>setUrgency(e.target.value)} className={style.selectBtn}>
          <option>יכול לחכות</option>
          <option>דחוף</option>
          <option>דחוף מאוד</option>
        </select>
        <select onSelect={(e)=>setReportType(e.target.value)} className={style.selectBtn}>
          <option>כבישים</option>
          <option>חשמל</option>
          <option>בע"ח</option>
          <option>חנייה</option>
          <option>ביטחון</option>
          <option>שיפור פני העיר</option>
        </select>
      </div>
      <div className={style.uploadMedia}>
        <label htmlFor="img">
          <BsCamera />
        </label>
        <input
          id="img"
          style={{ display: "none" }}
          accept=".png,.jpeg,.jpg"
          type="file"
          onChange={imgFileSelectHandler}
        />
        <label htmlFor="video">
          <BsCameraVideo />
        </label>
        <input
          id="video"
          style={{ display: "none" }}
          accept=".mp4"
          type="file"
          onChange={videoFileSelectHandler}
        />
      </div>
      <button type="submit" className={style.postBtn}>POST</button>
      {/* <AutoCompleteLocation/> */}
    </form>
  );
}
