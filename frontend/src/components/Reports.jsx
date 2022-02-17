import style from "../css/home.module.css";
import {
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsFillChatFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";
import React, {  useContext,useState,useEffect } from 'react'
import dataContext from '../Context/dataContext'
import axios from "axios"

export default function Reports() {
  const [isOption, setIsOption] = useState(false);
  const [editReport, setEditReport] = useState(null);
  const [newComment, setNewComment] = useState(null);
  const { state, dispatch } = useContext(dataContext)

  useEffect(getReports, [])
  
  function getReports() {
    axios.get("/reports").then(res=>dispatch({type:"reports",value:res.data}))
    .catch(err=>console.log(err.response))
  }
  
  let tempReports
  if (state.reports) {
    tempReports = [...state.reports]
  }

function deleteReport(id) {
  axios.delete(`/reports/report/${id}`)
  .then(res=>console.log(res.data))
  .catch(err=>console.log(err.response))
  getReports()
}

function updateReport(id,obj) {
  axios.patch(`/reports/report/${id}`,obj)
  .then(res=>console.log(res.data))
  .catch(err=>console.log(err.response))
  // getReports()
}

function setEdit(i,isEdit) {
  tempReports[i].edit = isEdit
  dispatch({type:"reports",value:tempReports})
}

function setIsComment(i,comment) {
  tempReports[i].isComment = comment
  dispatch({type:"reports",value:tempReports})
}

function seeComments(i,see) {
  tempReports[i].isComment = see
  dispatch({type:"reports",value:tempReports})
}

// function doesExist(i) {
//   for (let i = 0; i < tempReports[i].likes.length; i++) {
//     if (auth.id === tempReports[i].MDid) {
//       return true
//     }
//   }
//   return false
// }

  
  return (
    <div className={style.reportsHolder}>
      {tempReports ? tempReports.map((report,i)=>{
        return(
         <div key={i} className={style.reports}>
        <div className={style.reportHead}>
          <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg" />
          <p>
            {report.user}
            <br />
            {report.adress}
          </p>
          <div className={style.optionHolder}>
            <BsThreeDotsVertical
              onClick={() => setIsOption(!isOption)}
              className={style.optionsBtn}
            />
            <div className={isOption ? style.option : style.unOption}>
              <p onClick={()=>setEdit(i,true)}>ערוך</p>
              <p onClick={()=>deleteReport(report._id)}>מחק</p>
            </div>
          </div>
        </div>
       <div className={style.report}>
          {/* <div className={style.reportInfo}></div> */}
          {report.edit ? <form onSubmit={(e)=>{
            e.preventDefault()
            updateReport(report._id,{report:editReport})
            setEdit(i,false)
          }}>
            <textarea onChange={(e)=>setEditReport(e.target.value)} defaultValue={report.report}/>
            <button type="submit">Report</button>
            </form> : <p>{report.report}</p>}
          <div className={style.reportStatus}>
            <span className={style.urgency}>{report.urgency}</span>
            <span className={style.status}>{report.status}</span>
          </div>
          <div className={style.reportImg}>
            <img src={report.img} />
          </div>
          <div className={style.reportVideo}>
            <video
              src={report.video}
              controls
            />
          </div>
          <p className={style.reportDate}>{report.created}</p>
        </div>
        <div className={style.btns}>
          <div className={style.like}>
            <HiOutlineHeart onClick={()=>{report.likes.push({_id:"dhfsdi210834rdd"});
            dispatch({type:"reports",value:tempReports});updateReport(report._id,{likes:report.likes})}}/>
            {report.likes?.length}
          </div>
          <div className={style.commentBtn}><BsFillChatFill onClick={()=>{
            setIsComment(i,true)
          }} /></div>
          <div className={style.verification}>
            <p onClick={()=>{
              report.verified.push({_id:"dhfsdi210834rdd"});
              dispatch({type:"reports",value:tempReports});
              updateReport(report._id,{verified:report.verified})
            }}><BsFillCaretUpFill /></p>
            <p>{report.verified?.length}</p>
            <p onClick={()=>{
              report.unverified.push({_id:"dhfsdi210834rdd"});
              dispatch({type:"reports",value:tempReports});
              updateReport(report._id,{unverified:report.unverified})
            }}><BsFillCaretDownFill /></p>
            <p>{report.unverified?.length}</p>
          </div>
        </div>
           {report.isComment ? <form className={style.comment} onSubmit={(e)=>{
              e.preventDefault()
              let userComment = {id:"userId",comment:newComment,img:"image",created:new Date()}
              report.comments.push(userComment)
              dispatch({type:"reports",value:tempReports});
              updateReport(report._id,{comments:report.comments})
              setIsComment(i,false)
          }}>
              <textarea onChange={(e)=>setNewComment(e.target.value)} placeholder="הכנס תגובה.."/>
              <button type="submit">Comment</button>
            </form> : ""}
            <p className={style.seeComments} onClick={()=>{
              seeComments(report._id,true)
            }}>ראה תגובות..</p>
            {report.comments.map((comment,j)=>(
            <div key={j} className={style.comments}>
              <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg"/>
              <p>{comment.comment}</p>
              <p>{comment.created}</p>
            </div>
            ))}
      </div>
      )}) : ""}
      {/* <p onClick={()=>seeComments(report._id,false)}>סגור</p> */}
    </div>
  );
}
