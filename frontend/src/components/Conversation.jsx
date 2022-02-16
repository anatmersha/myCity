import axios from "axios";
import { useEffect, useState, useContext } from "react";

const Conversation = ({ convo }) => {
    const [users, setUsers] = useState(null);

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
        }
        getUser();
    },[currUser, convo])

    // מציגה את תמונות המשתמשים שבצ'אט הנוכחי
    return(
        <>
        {users ? users.map((it, i)=> {
                return(
                    <div key={i} className="convo">
                        <img className="convoImg" src={it?.img} alt=""/>
                    </div>
                )
        }): ""}       
        </>
    )
}

export default Conversation;