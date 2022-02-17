import React from 'react'

export default function Search() {
    // const searchUsersElement = searchUsers ? searchUsers.filter(value=>{
    //     if (search == "") return value
    //     else if (value.user.toLowerCase().includes(search.toLowerCase()) || 
    //     value.firstName.toLowerCase().includes(search.toLowerCase()) ||
    //     value.lastName.toLowerCase().includes(search.toLowerCase())) {
    //     return value
    //     }
    //   })
    //   .map((it,i)=>(
    //       <Link to="/UserDetails" className='searchUser' key={i} onClick={()=>{setUserdetails(it);
    //         setIsRedirectView(false);setIsRedirectEdit(false)}}>
    //       <div className='searchUserImg'>
    //         <img src={it.photo ? it.photo : "https://th.bing.com/th/id/R.91683ea6f8b347bdf0e56b634fff037e?rik=pvJus%2f3t3XB8TA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fbasketball-player-silhouette%2fbasketball-player-silhouette-19.png&ehk=D7euwPpzNwINK8SLYcRlnPfv5l2OMUpJKNqCgSFwrBs%3d&risl=&pid=ImgRaw&r=0"}/>
    //       </div>
    //         <p>{it.user}</p>
    //     </Link>
    //   )) : ""
  return (
    <div>Search</div>
  )
}
