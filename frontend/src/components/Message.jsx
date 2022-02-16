import { format } from "timeago.js";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import {AuthContext} from "../context/AuthContext";

const Message = ({message,own}) => {
    const [userImg, setUserImg] = useState([]);
    
    const { currUser, currChat }= useContext(AuthContext);

    // useEffect(()=> {
    //     const getUsers = () => {
            const chatFriend = currChat?.members?.find((it)=> it !== currUser?._id) 

    //         axios
    //         .get(`/api/getUserById/${chatFriend}`)
    //         .then((res)=> {
    //             const data = res.data;
    //             data.map((item)=> {
    //                 setUserImg(item.img);
    //             })
    //         })
    //         .catch((err)=> console.log(err))
    //     }
    //     getUsers();
    // },[currUser, currChat])

    return(
        <>
        {currChat?.members?.map((item)=> {
            users?.map((user)=> {
                if(user?.id === item && currChat?.type === "group"){
                    return(
                        <>
                        </>
                    )
                }
            })
        })}



        {currChat?.type === "group" ? 
        currChat?.members?.map((item)=> {
            users?.map((user)=> {

                if(user?.id === item){
                    return(
                <div className={own ? "message own" : "message"}>
                    <div className="messageTop">
                        <img className="messageImg" src={own ? `/images/${currUser?.img}` : `/images/${user?.img}`} alt=""/>
                        <p className="messageTxt">{message?.text}</p>
                    </div>
                    <div className="messageBottom">{format(message.created)}</div>
                </div>
                )
                }


            })
        }) : ""}
        {/* {currChat?.type === "single" ? 
            
        : ""} */}

        </>
    )
}

export default Message;