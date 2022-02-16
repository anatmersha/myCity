// import Message from "../components/Message";
// import Conversation from "../components/Conversation";
// import { useEffect, useState, useContext, useRef } from "react";
// import dataContext from "../Context/dataContext";
// import axios from "axios";
// import chatStyle from "../css/Chat.module.css";
// // import {io} from "socket.io-client";

// const Chat = () => {
//     const [convos, setConvos] = useState([]);
//     const [messages, setMessages] = useState([]);
//     const [newMessage, setNewMessage] = useState("");
//     const [roomFriends, setRoomFriends] = useState(null);

//     const [arrivalMsg, setArrivalMsg] = useState(null);

//     const { state, dispatch } = useContext(dataContext);
//     // const { currUser, currRoom, setCurrRoom, users }= useContext(AuthContext);
//     // dispatch({ type: "auth", value: response.data });

//     // const socket = useRef()
    
// // // socket
// //     useEffect(()=> {
// //         socket.current = io("ws://localhost:8900");
// //         socket.current.on("getMessage", data => {
// //             setArrivalMsg({
// //                 senderID: data.senderID,
// //                 text: data.text,
// //                 created: new Date
// //             })
// //         })
// //     },[arrivalMsg])

// //     useEffect(()=> {
// //         if(arrivalMsg){
// //            if(state.currRoom?.members.includes(arrivalMsg.sender)) {
// //             setMessages([...messages, arrivalMsg])
// //            }
// //         }
// //     },[messages,arrivalMsg])

// //     useEffect(()=> {
// //         socket.current.emit("addUser", state.currUser._id)
// //         socket.current.on("getUsers", users=>{
// //             console.log(users);
// //         })
// //     },[state.currUser])
// // // /////
//     useEffect(()=> {
//         const getAllConvos = () => {
//             axios
//             .get(`/room/${state.currUser?._id}`)
//             .then((res)=> {
//                 setConvos(res.data)
//             })
//             .catch((err)=> {
//                 console.log(err.message);
//             })
//         }
//         getAllConvos();
//     },[state.currUser])

//     useEffect(()=> {
//         const getMessages = () => {    
//             axios
//             // .get(`/api/getAllConvoMessages/${state.currRoom?._id}`) 
//             .get(`/chatroom/${state.currRoom?._id}`) 
//             .then((res)=> {
//                 console.log(res.data);
//                 setMessages(res.data)
//             })
//             .catch((err)=> {
//                 console.log(err.message);
//             })
//         }
//         getMessages();
//     },[state.currRoom,messages])

//     useEffect(()=> {
//       // get all other chat members id`s
//       const friends = state.currRoom?.members?.filter((item)=> item !== state.currUser?._id)
//       // 
//       const roomFriends = state?.users?.forEach(user => {
//         user?._id === friends ? roomFriends?.push(user?._id) : ""
//       });
//       setRoomFriends(roomFriends);
//         console.log(state.currRoom);

//     },[state.currRoom])

//     return(
//         <div>
//             {/* <MainNavbar/> */}
//         <div className={chatStyle.firstFrame}>

//         <div className={chatStyle.chatMenu}>
//             <div className={chatStyle.mainChatHeadline}>CHAT BOX</div>
//             <div className={chatStyle.mainChatMenu}>            
//             {convos?.map((con, i)=> (
//                 <div key={i} onClick={()=> {
//                     dispatch({ type: "currRoom", value: con });
//                     // setCurrRoom(con)
//                 }}>
//                     <Conversation convo={con}/>
//                 </div>
//             ))}
//             </div>
//         </div>

//         <div className={chatStyle.chatBox}>
//             <div className={chatStyle.mainChatBox}>
//                 {state.currRoom ? 
//                 <>
//                 <div className={chatStyle.chatBoxTop}>
//                 <div className={chatStyle.chatHeader}></div>
//                     {messages?.map((msg, i)=> (
//                         <div key={i}> 
//                         {/* הפרדה בין הודעה שלי לשל שאר המשתמשים בצ'אט */}
//                             <Message message={msg} own={msg?.sender === state.currUser?._id}/>
//                         </div>
//                     ))}
//                 </div>

//                 <div className={chatStyle.chatBoxBottom}>
//                     <form className={chatStyle.chatBoxForm} onSubmit={(e)=> {
//                         e.preventDefault();
//                         setNewMessage("");
//                         // const receiverID = state.currRoom?.members.find((it)=> it !== state.currUser?._id)
                        
//                         // socket.current.emit("sendMessage", {
//                         //     senderID: state.currUser._id,
//                         //     receiverID,
//                         //     text: newMessage
//                         // })
                        
//                         axios
//                         .post("/api/addNewMessage",{
//                             convoID: state.currRoom._id,
//                             senderID: state.currUser._id,
//                             text: newMessage,
//                             created: new Date
//                         })
//                         .then((res)=> {
//                             console.log(res.data)
//                             setMessages([...messages, res.data])
//                         })
//                         .catch((err)=> console.log(err))

                        
//                     }}>
//                     <textarea className={chatStyle.msgInput} value={newMessage} cols="70" placeholder="send a message..."
//                     onChange={(e)=> setNewMessage(e.target.value)}></textarea>

//                     <button className={chatStyle.msgSubmitBtn} type="submit">send</button>
//                     </form>
//                 </div>
//                 </>
//                 : ""}

//             </div>
//         </div>

//         </div>
//         </div>
//     )
// }

// export default Chat;
