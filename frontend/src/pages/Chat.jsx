import Message from "../components/Message";
import Conversation from "../components/Conversation";
import { useEffect, useState, useContext, useRef } from "react";
import dataContext from "../Context/dataContext";
import axios from "axios";
import Styles from "../css/chat.module.css";
// import {io} from "socket.io-client";

const Chat = () => {
    // const [convos, setConvos] = useState([]);
    // const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [roomFriends, setRoomFriends] = useState(null);

    const [arrivalMsg, setArrivalMsg] = useState(null);

    const { state, dispatch } = useContext(dataContext);
    console.log(state?.currUser);
    // const { currUser, currRoom, setCurrRoom, users }= useContext(AuthContext);
    // dispatch({ type: "auth", value: response.data });

    // const socket = useRef()
    
// // socket
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
//         if(arrivalMsg){
//            if(state.currRoom?.members.includes(arrivalMsg.sender)) {
//             setMessages([...messages, arrivalMsg])
//            }
//         }
//     },[messages,arrivalMsg])

//     useEffect(()=> {
//         socket.current.emit("addUser", state.currUser._id)
//         socket.current.on("getUsers", users=>{
//             console.log(users);
//         })
//     },[state.currUser])
// // /////
    useEffect(()=> {
        const getAllConvos = () => {
            axios
            .get(`/room/${state.currUser?._id}`)
            .then((res)=> {
                dispatch({ type: 'convos', value: res.data })
                // setConvos(res.data)
            })
            .catch((err)=> {
                console.log(err.message);
            })
        }
        getAllConvos();
    },[state.currUser])

    useEffect(()=> {
        const getMessages = () => {    
            axios
            // .get(`/api/getAllConvoMessages/${state.currRoom?._id}`) 
            .get(`/chatroom/${state.currRoom?._id}`) 
            .then((res)=> {
                console.log(res.data);
                dispatch({ type: 'messages', value: res.data })
                // setMessages(res.data)
            })
            .catch((err)=> {
                console.log(err.message);
            })
        }
        getMessages();
    },[state.currRoom,state.messages])

    useEffect(()=> {
      // get all other chat members id`s
      const friends = state.currRoom?.members?.filter((item)=> item !== state.currUser?._id)
      // 
      if(Array.isArray(state?.users)){
          const roomFriends = state?.users?.forEach(user => {
              if(user?._id === friends) {
                  roomFriends?.push(user?._id)
              }
          });
          setRoomFriends(roomFriends);
      }
        console.log(state.currRoom);

    },[state.currRoom])

    useEffect(()=> {
        if(state?.currUser){
          addToGroupChat()
          console.log(state?.currUser);
          console.log("we have currUser");
        }
      
      },[state?.currUser])
      
      function addToGroupChat(){
        axios
        .patch("/room/update/620d6ef3f2da3a67d7cc8bdf",{
          members: state?.currUser?._id
        })
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))
      }
    
    return(
        <div>
            {/* <MainNavbar/> */}
        <div className={Styles.firstFrame}>

        <div className={Styles.chatMenu}>
            <div className={Styles.mainChatHeadline}>CHAT BOX</div>
            <div className={Styles.mainChatMenu}>            
            {Array.isArray(state?.convos) ? state?.convos?.map((con, i)=> (
                <div key={i} onClick={()=> {
                    dispatch({ type: "currRoom", value: con });
                    // setCurrRoom(con)
                }}>
                    <Conversation convo={con}/>
                </div>
            )):""}
            </div>
        </div>

        <div className={Styles.chatBox}>
            <div className={Styles.mainChatBox}>
                {state.currRoom ? 
                <>
                <div className={Styles.chatBoxTop}>
                <div className={Styles.chatHeader}></div>
                    {Array.isArray(state?.messages) ? state.messages?.map((msg, i)=> (
                        <div key={i}> 
                        {/* הפרדה בין הודעה שלי לשל שאר המשתמשים בצ'אט */}
                            <Message message={msg} own={msg?.sender === state.currUser?._id}/>
                        </div>
                    )):""}
                </div>

                <div className={Styles.chatBoxBottom}>
                    <form className={Styles.chatBoxForm} onSubmit={(e)=> {
                        e.preventDefault();
                        setNewMessage("");
                        // const receiverID = state.currRoom?.members.find((it)=> it !== state.currUser?._id)
                        
                        // socket.current.emit("sendMessage", {
                        //     senderID: state.currUser._id,
                        //     receiverID,
                        //     text: newMessage
                        // })
                        
                        axios
                        .post("/message",{
                            convoID: state.currRoom._id,
                            senderID: state.currUser._id,
                            text: newMessage,
                            created: new Date
                        })
                        .then((res)=> {
                            console.log(res.data)
                            dispatch({ type: 'messages', value: [...state?.messages, res.data] })
                            // setMessages([...messages, res.data])
                        })
                        .catch((err)=> console.log(err))

                        
                    }}>
                    <textarea className={Styles.msgInput} value={newMessage} cols="70" placeholder="send a message..."
                    onChange={(e)=> setNewMessage(e.target.value)}></textarea>

                    <button className={Styles.msgSubmitBtn} type="submit">send</button>
                    </form>
                </div>
                </>
                : ""}

            </div>
        </div>

        </div>
        </div>
    )}


export default Chat;
