import axios from "axios";
import { useEffect, useState, useContext } from "react";

const Conversation = ({ convo }) => {
    const [users, setUsers] = useState(null);
    // const [messages, setMessages] = useState([]);
    
    // const { currUser }= useContext(AuthContext);
// לרוץ על כל החברים בקב צ'אט
    useEffect(()=> {
        const getUser = () => {
        // get all other chat members id`s
        const friends = currChat?.members?.filter((item)=> item !== currUser?._id)
        // 
        const chatFriends = users?.forEach(user => {
        user._id === friends ? chatFriends?.push(user._id) : ""
        });
        setUsers(chatFriends);
        console.log(currChat);

            // const chatFriend = convo?.members?.find((it)=> it !== currUser?._id)
            // axios
            // .get(`/api/getUserById/${chatFriend}`)
            // .then((res)=> {
            //     setUser(res.data)
            // })
            // .catch((err)=> console.log(err))
        }
        getUser();
    },[currUser, convo])

// הצגת ההודעה האחרונה
    // useEffect(()=> {
    //     const getMessages = () => {
    //         axios
    //         .get(`/api/getAllConvoMessages/${convo?._id}`) 
    //         .then((res)=> {
    //             setMessages(res.data)
    //         })
    //         .catch((err)=> {
    //             console.log(err.message);
    //         })
    //     }
    //     getMessages();
    // },[messages])


    // מציגה את תמונות המשתמשים שבצ'אט הנוכחי
    return(
        <>
        {users ? users.map((it, i)=> {
            
            return(
                <div key={i} className="convo">
                    <img className="convoImg" src={it?.img} alt=""/>
                    {/* <p className="convoName">{it?.name}</p> */}
                    {/* <p className="lastMsgSent">{messages[messages?.length - 1]?.text}</p> */}
                </div>
            )
        }): ""}       
        </>
    )
}

export default Conversation;