// import Message from "../components/Message";
// import Conversation from "../components/Conversation";
// import { useEffect, useState, useContext, useRef } from "react";
// import axios from "axios";
// // import {io} from "socket.io-client";

// const Chat = () => {
//     const [convos, setConvos] = useState([]);
//     const [messages, setMessages] = useState([]);
//     const [newMessage, setNewMessage] = useState("");
//     const [chatFriends, setChatFriends] = useState(null);

//     const [arrivalMsg, setArrivalMsg] = useState(null);

//     const { currUser, currChat, setCurrChat, users }= useContext(AuthContext);
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
// //            if(currChat?.members.includes(arrivalMsg.sender)) {
// //             setMessages([...messages, arrivalMsg])
// //            }
// //         }
// //     },[messages,arrivalMsg])

// //     useEffect(()=> {
// //         socket.current.emit("addUser", currUser._id)
// //         socket.current.on("getUsers", users=>{
// //             console.log(users);
// //         })
// //     },[currUser])
// // // /////
//     useEffect(()=> {
//         const getAllConvos = () => {
//             axios
//             .get(`/api/getAllUserConvos/${currUser?._id}`)
//             .then((res)=> {
//                 setConvos(res.data)
//             })
//             .catch((err)=> {
//                 console.log(err.message);
//             })
//         }
//         getAllConvos();
//     },[currUser])

//     useEffect(()=> {
//         const getMessages = () => {
//             axios
//             .get(`/api/getAllConvoMessages/${currChat?._id}`) 
//             .then((res)=> {
//                 setMessages(res.data)
//             })
//             .catch((err)=> {
//                 console.log(err.message);
//             })
//         }
//         getMessages();
//     },[currChat,messages])

//     useEffect(()=>{
//       // get all other chat members id`s
//       const friends = currChat?.members?.filter((item)=> item !== currUser?._id)
//       // 
//       const chatFriends = users?.forEach(user => {
//         user?._id === friends ? chatFriends?.push(user?._id) : ""
//       });
//         setChatFriends(chatFriends);
//         console.log(currChat);

//     },[currChat])

//     return(
//         <div>
//             {/* <MainNavbar/> */}
//         <div className={chatStyle.firstFrame}>

//         <div className={chatStyle.chatMenu}>
//             <div className={chatStyle.mainChatHeadline}>CHAT BOX</div>
//             <div className={chatStyle.mainChatMenu}>            
//             {convos?.map((con, i)=> (
//                 <div key={i} onClick={()=> {
//                     setCurrChat(con)
//                 }}>
//                     <Conversation convo={con}/>
//                 </div>
//             ))}
//             </div>
//         </div>

//         <div className={chatStyle.chatBox}>
//             <div className={chatStyle.mainChatBox}>
//                 {currChat ? 
//                 <>
//                 <div className={chatStyle.chatBoxTop}>
//                 <div className={chatStyle.chatHeader}></div>
//                     {messages?.map((msg, i)=> (
//                         <div key={i}> 
//                         {/* הפרדה בין הודעה שלי לשל שאר המשתמשים בצ'אט */}
//                             <Message message={msg} own={msg?.sender === currUser?._id}/>
//                         </div>
//                     ))}
//                 </div>

//                 <div className={chatStyle.chatBoxBottom}>
//                     <form className={chatStyle.chatBoxForm} onSubmit={(e)=> {
//                         e.preventDefault();
//                         setNewMessage("");
//                         const receiverID = currChat?.members.find((it)=> it !== currUser?._id)
                        
//                         // socket.current.emit("sendMessage", {
//                         //     senderID: currUser._id,
//                         //     receiverID,
//                         //     text: newMessage
//                         // })
                        
//                         axios
//                         .post("/api/addNewMessage",{
//                             convoID: currChat._id,
//                             senderID: currUser._id,
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
