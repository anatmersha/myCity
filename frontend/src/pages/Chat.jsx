// import Styles from "../css/chat.module.css";
// import Message from "../components/Message";
// import Conversation from "../components/Conversation";
// import dataContext from "../Context/dataContext";
// import { useEffect, useState, useContext, useRef } from "react";
// import axios from "axios";
// import {io} from "socket.io-client";

// const Chat = () => {
//     const [newMessage, setNewMessage] = useState("");
//     const [roomFriends, setRoomFriends] = useState(null);

//     const [arrivalMsg, setArrivalMsg] = useState(null);

//     const { state, dispatch } = useContext(dataContext);
//     console.log(state?.currUser);
//     const socket = useRef()
    

//     useEffect(()=> {
//         socket.current = io("ws://localhost:8900");
//         socket.current.on("getMessage", data => {
//             setArrivalMsg({
//                 senderID: data.senderID,
//                 text: data.text,
//                 created: new Date
//             })
//         })
//     },[arrivalMsg])

//     useEffect(()=> {
//         if(arrivalMsg) {
//            if(state?.currChat?.members.includes(arrivalMsg.senderID)) {
//             dispatch({ type: 'messages', value: [...state?.messages, arrivalMsg] })
//            }
//         }
//     },[state?.messages,arrivalMsg])

//     useEffect(()=> {
//         socket.current.emit("addUser", state?.currUser?._id)
//         socket.current.on("getUsers", users=>{
//             console.log(state?.users);
//         })
//     },[state?.currUser])

//     useEffect(()=> {
//         const getAllConvos = () => {
//             axios
//             .get(`/room/${state.currUser?._id}`)
//             .then((res)=> {
//                 dispatch({ type: 'convos', value: res.data })
//                 // setConvos(res.data)
//                 console.log(res.data);
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
//                 dispatch({ type: 'messages', value: res.data })
//                 // setMessages(res.data)
//             })
//             .catch((err)=> {
//                 console.log(err.message);
//             })
//         }
//         getMessages();
//     },[state.currRoom,state.messages])

//     useEffect(()=> {
//         // get all other chat members id`s
//         const friends = state.currRoom?.members?.filter((item)=> item !== state.currUser?._id)
//         // 
//         if(Array.isArray(state?.users)){
//             const roomFriends = state?.users?.forEach(user => {
//                 if(user?._id === friends) {
//                     roomFriends?.push(user?._id)
//                 }
//             });
//             setRoomFriends(roomFriends);
//         }
//           console.log(state.currRoom);
  
//       },[state.currRoom])
  
//       useEffect(()=> {
//           if(state?.currUser){
//             addToGroupChat()
//             console.log(state?.currUser);
//             console.log("we have currUser");
//           }
        
//         },[state?.currUser])
        
//         function addToGroupChat(){
//           axios
//           .patch("/room/update/620d6ef3f2da3a67d7cc8bdf",{
//             members: state?.currUser?._id
//           })
//           .then((res)=> console.log(res))
//           .catch((err)=> console.log(err))
//         }
//     return(
//         <div>
//         <div className={Styles.firstFrame}>

//         <div className={Styles.chatMenu}>
//             <div className={Styles.mainChatHeadline}>CHAT BOX</div>
//             <div className={Styles.mainChatMenu}>            
//             {Array.isArray(state?.convos) ? state?.convos?.map((con, i)=> (
//                 <div key={i} onClick={()=> {
//                     dispatch({ type: "currRoom", value: con });
//                     // setCurrRoom(con)
//                 }}>
//                     <Conversation convo={con}/>
//                 </div>
//             )):""}
//             </div>
//         </div>

//         <div className={Styles.chatBox}>
//             <div className={Styles.mainChatBox}>
//                 {state.currChat ? 
//                 <>
//                 <div className={Styles.chatBoxTop}>
//                 <div className={Styles.chatHeader}>You & {roomFriends?.name}</div>
//                 {Array.isArray(state?.messages) ? state.messages?.map((msg, i)=> (
//                         <div key={i}> 
//                         {/* הפרדה בין הודעה שלי לשל שאר המשתמשים בצ'אט */}
//                             <Message message={msg} own={msg?.sender === state.currUser?._id}/>
//                         </div>
//                     )):""}
//                 </div>

//                 <div className={Styles.chatBoxBottom}>
//                     <form className={Styles.chatBoxForm} onSubmit={(e)=> {
//                         e.preventDefault();
//                         setNewMessage("");
//                         const receiverID = state?.currChat?.members.find((it)=> it !== state?.currUser._id)
                        
//                         socket.current.emit("sendMessage", {
//                             senderID: state?.currUser._id,
//                             receiverID,
//                             text: newMessage
//                         })
                        
//                         axios
//                         .post("/message",{
//                             convoID: state.currRoom._id,
//                             senderID: state.currUser._id,
//                             text: newMessage,
//                             created: new Date
//                         })
//                         .then((res)=> {
//                             console.log(res.data)
//                             dispatch({ type: 'messages', value: [...state?.messages, res.data] })
//                             // setMessages([...messages, res.data])
//                         })
//                         .catch((err)=> console.log(err))

                        
//                     }}>
//                     <textarea className={Styles.msgInput} value={newMessage} cols="70" placeholder="send a message..."
//                     onChange={(e)=> setNewMessage(e.target.value)}></textarea>

//                     <button className={Styles.msgSubmitBtn} type="submit">send</button>
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