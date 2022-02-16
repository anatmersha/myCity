// import { format } from "timeago.js";
// import { useContext } from "react";
// import {AuthContext} from "../context/AuthContext";
// import "../css/Message.css";

// const Message = ({message,own}) => {    
//     const { currUser, currRoom }= useContext(AuthContext);

//     return(
//         <>
//         {currRoom?.members?.map((item)=> {
//             users?.map((user)=> {
                
//                 if(user?.id === item && currRoom?.type === "group") {
//                     return(
//                         <>
//                         <div className={own ? "message own" : "message"}>
//                             <div className="messageTop">
//                                 <img className="messageImg" src={own ? currUser?.img : user?.img} alt=""/>
//                                 <p className="messageTxt">{message?.text}</p>
//                             </div>
//                         <div className="messageBottom">{format(message?.created)}</div>
//                         </div>
//                         </>
//                     )
//                 }

//                 if(currUser?.id !== item && currRoom?.type === "single") {
//                     return(
//                         <>
//                         <div className={own ? "message own" : "message"}>
//                             <div className="messageTop">
//                                 <img className="messageImg" src={own ? currUser?.img : user?.img} alt=""/>
//                                 <p className="messageTxt">{message?.text}</p>
//                             </div>
//                             <div className="messageBottom">{format(message?.created)}</div>
//                         </div>
//                         </>
//                     )
//                 }

//             })
//         })}
//         </>
//     )
// }

// export default Message;