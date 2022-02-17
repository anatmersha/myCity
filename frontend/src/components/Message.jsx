// import { useContext } from "react";
// import dataContext from "../Context/dataContext";
// import "../css/Message.css";

// const Message = ({message,own}) => {    
//     const { state, dispatch } = useContext(dataContext);

//     return(
//         <>
//         {state.currRoom?.members?.map((item)=> {
//             state.users?.map((user)=> {
                
//                 if(user?.id === item && state.currRoom?.type === "group") {
//                     return(
//                         <>
//                         <div className={own ? "message own" : "message"}>
//                             <div className="messageTop">
//                                 <img className="messageImg" src={own ? state.currUser?.img : user?.img} alt=""/>
//                                 <p className="messageTxt">{message?.text}</p>
//                             </div>
//                         <div className="messageBottom">{message?.created}</div>
//                         </div>
//                         </>
//                     )
//                 }

//                 if(state.currUser?.id !== item && state.currRoom?.type === "single") {
//                     return(
//                         <>
//                         <div className={own ? "message own" : "message"}>
//                             <div className="messageTop">
//                                 <img className="messageImg" src={own ? state.currUser?.img : user?.img} alt=""/>
//                                 <p className="messageTxt">{message?.text}</p>
//                             </div>
//                             <div className="messageBottom">{message?.created}</div>
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