import axios from "axios";
import "../css/Conversation.css";
import { useEffect, useContext } from "react";
import dataContext from "../Context/dataContext";

const Conversation = ({ convo }) => {
    const { state, dispatch } = useContext(dataContext);

// לרוץ על כל החברים בקב צ'אט
    useEffect(()=> {
        const getUser = () => {
        // get all other chat members id`s
        const friends = state.currRoom?.members?.filter((item)=> item !== state.currUser?._id)
        // 
        const chatFriends = state.users?.forEach(user => {
            if(user._id === friends) {
                chatFriends?.push(user?._id) 
            }
        });
        dispatch({ type: "users", value: chatFriends });
        console.log(state.currRoom);
        }
        getUser();
    },[state.currUser, convo])

    // מציגה את תמונות המשתמשים שבצ'אט הנוכחי
    return(
        <>
        {state.users ? state.users?.map((it, i)=> {
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