// import { format } from "timeago.js";
// import { useContext } from "react";
// import {AuthContext} from "../context/AuthContext";

// const Message = ({message,own}) => {    
//     const { currUser, currChat }= useContext(AuthContext);

//     return(
//         <>
//         {currChat?.members?.map((item)=> {
//             users?.map((user)=> {
//                 if(user?.id === item && currChat?.type === "group") {
//                     return(
//                         <>
//                         <div className={own ? "message own" : "message"}>
//                             <div className="messageTop">
//                                 <img className="messageImg" src={own ? `/images/${currUser?.img}` : `/images/${user?.img}`} alt=""/>
//                                 <p className="messageTxt">{message?.text}</p>
//                             </div>
//                         <div className="messageBottom">{format(message.created)}</div>
//                         </div>
//                         </>
//                     )
//                 }
//                 if(currUser?.id !== item && currChat?.type === "single") {
//                     return(
//                         <>
//                         <div className={own ? "message own" : "message"}>
//                             <div className="messageTop">
//                                 <img className="messageImg" src={own ? `/images/${currUser?.img}` : `/images/${user?.img}`} alt=""/>
//                                 <p className="messageTxt">{message?.text}</p>
//                             </div>
//                             <div className="messageBottom">{format(message.created)}</div>
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