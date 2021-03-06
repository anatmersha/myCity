import { useState } from "react";
import axios from "axios";
import style from "../css/newReport.module.css";
import { BsCamera, BsCameraVideo, BsXLg } from "react-icons/bs";
import React, {  useContext } from 'react'
import dataContext from '../Context/dataContext'
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
  const { state, dispatch } = useContext(dataContext)
    
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
    let obj = {
        MDid: state.auth?.localId,
        firstName:state.currUser.firstName,
        lastName:state.currUser.lastName,
        img:imgLink,
        video:videoLink,
        adress:location,
        report:report,
        urgency:urgency,
        reportType:reportType,
        status:"",
        comments:[],
        likes:[],
        verified:[],
        unverified:[],
        created:new Date(),
        edit:false,
        isComment:false,
        seeComments:false,
        isOption:false,
    };
    axios.post("/reports/report",obj)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err.response))
    getReports()
  }

  function getReports() {
    axios.get("/reports").then(res=>dispatch({type:"reports",value:res.data}))
    .catch(err=>console.log(err.response))
  }


  return (
    <form className={style.newReport} onSubmit={(e)=>{
        e.preventDefault()
        e.target.reset()
        if (imgSelect) {
            imgFileUploadHandler()
            uploadPost()
        }
        if (videoSelect) {
            videoFileUploadHandler()
            uploadPost()
        }
        // if (imgLink || videoLink) {
        // }
    }}>
      <BsXLg className={style.exitBtn} onClick={()=>dispatch({type:"newRepo",value:false})} />
      <div className={style.userInfo}>
        <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg" />
        <textarea
          onChange={(e) => setReport(e.target.value)}
          placeholder="?????????? ??????.."
        />
      </div>
      <div className={style.userOptions}>
        <select onChange={(e)=>setLocation(e.target.value)} className={style.selectBtn}>
          <option>????????</option>
          <option>?????????? ??????????</option>
        </select>
        <select onChange={(e)=>setUrgency(e.target.value)} className={style.selectBtn}>
          <option>???????? ??????????</option>
          <option>????????</option>
          <option>???????? ????????</option>
        </select>
        <select onChange={(e)=>setReportType(e.target.value)} className={style.selectBtn}>
          <option>????????????</option>
          <option>????????</option>
          <option>????"??</option>
          <option>??????????</option>
          <option>????????????</option>
          <option>?????????? ?????? ????????</option>
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
