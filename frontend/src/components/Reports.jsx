import style from "../css/home.module.css";
import {
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsFillChatFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import React, {  useContext,useState,useEffect } from 'react'
import dataContext from '../Context/dataContext'
import axios from "axios"
import { format } from "timeago.js";

export default function Reports() {
  // const [isOption, setIsOption] = useState(false);
  const [editReport, setEditReport] = useState(null);
  const [newComment, setNewComment] = useState(null);
  const [search, setSearch] = useState("");
  const [sortUrg, setSortUrg] = useState("");
  const [sortStatus, setSortStatus] = useState("");
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

function setOptions(i,isEdit) {
  tempReports[i].isOption = isEdit
  dispatch({type:"reports",value:tempReports})
}

function setEdit(i,isEdit) {
  tempReports[i].edit = isEdit
  dispatch({type:"reports",value:tempReports})
}

function setIsComment(i,comment) {
  tempReports[i].isComment = comment
  dispatch({type:"reports",value:tempReports})
}

function isSeeComments(i,see) {
  console.log(tempReports[i]);
  tempReports[i].seeComments = see
  dispatch({type:"reports",value:tempReports})
}


    // console.log(state.currUser.email);
  return (
    <div className={style.reportsHolder}>
      <div>
        <input onChange={(e)=>setSearch(e.target.value)} placeholder="??????????.."/>
        <select onChange={(e)=>{setSortUrg(e.target.value);console.log(sortUrg);}}>
          <option>???????? ??????????</option>
          <option>????????</option>
          <option>???????? ????????</option>
        </select>
        <select onChange={(e)=>{setSortStatus(e.target.value);console.log(sortStatus);}}>
          <option>??????????</option>
          <option>????????????</option>
          <option>????????</option>
        </select>
      </div>
      {tempReports ? tempReports.filter(value=>{
        if (search == "") return value
        else if (value.firstName.toLowerCase().includes(search.toLowerCase()) ||
        value.lastName.toLowerCase().includes(search.toLowerCase())) {
        return value
        }
      })
      .map((report,i)=>{
        return(
         <div key={i} className={style.reports}>
        <div className={style.reportHead}>
          <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg" />
          <p>
            {report.firstName + " " + report.lastName}
            <br />
            {report.adress}
          </p>
          {state.currUser?.entity === "admin" ? "" : <div className={style.optionHolder}>
            <BsThreeDotsVertical
              onClick={() => setOptions(i,true)}
              className={style.optionsBtn}
            />
            <div className={report.isOption ? style.option : style.unOption}>
              <p onClick={()=>setEdit(i,true)}>????????</p>
              <p onClick={()=>deleteReport(report._id)}>??????</p>
            </div>
          </div>}
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
          <p className={style.reportDate}>{format(report.created)}</p>
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
              <textarea onChange={(e)=>setNewComment(e.target.value)} placeholder="???????? ??????????.."/>
              <button type="submit">Comment</button>
            </form> : ""}
            <p className={style.allComments} onClick={()=>{
              isSeeComments(i,true)
            }}>?????? ????????????..</p>
            {report.seeComments ? report.comments.map((comment,j)=>(
            <div key={j} className={style.comments}>
              <img src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633__340.jpg"/>
              <p>{comment.comment}</p>
              <p>{format(comment.created)}</p>
              <MdDeleteOutline className={style.deleteComment} onClick={()=>{
                report.comments.splice(j,1)
                updateReport(report._id,{comments:report.comments})
                dispatch({type:"reports",value:tempReports})
              }}/>
            </div>
            )) : ""}
          {report.seeComments ? <p className={style.closeComments} onClick={()=>isSeeComments(i,false)}>????????</p> : ""}
      </div>
      )}) : ""}
    </div>
  );
}
