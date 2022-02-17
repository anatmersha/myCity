import React from "react";
import { Link } from "react-router-dom";
import  { useContext } from "react";
import dataContext from "../Context/dataContext";
import style from "../css/navBar.module.css";
import './Nav.css'
import Reports from "./Reports";

export default function NavBar() {
  const { state, dispatch } = useContext(dataContext);

  return (
    <>
    {/* <div className={style.navBar}>
       <Link to="/">Home</Link> 
      {!state.auth? <Link to="/Login">Login</Link>:""} 
      {!state.auth? <Link to="/Register">Register</Link>:""} 
      {state.auth? <Link to="/chat">Chat</Link>:""} 
      {state.auth? <Link to="/Events">Events</Link>:""} 
      {state.auth? <Link to="/Logout">Logout</Link>:""} 

    </div> */}

<>
<section id="s1">
    <div id="linklist">
      <ul>
        <li className="home">
          <a href="#">Home</a>
        </li>
        <a href="#">
          <li>About</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
        <a href="#">
          <li>Help</li>
        </a>
      </ul>
    </div>
  </section>
  {/*CONTENT SECTION */}
  <section id="s2">
    <h1>This is a text</h1>
    <p>
      Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla
      eleifend augue, ac auctor orci leo non est. Quisque libero metus,
      condimentum nec, tempor a, commodo mollis, magna. Sed aliquam ultrices
      mauris. Donec sodales sagittis magna. Nullam tincidunt adipiscing enim.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Suspendisse enim turpis, dictum sed, iaculis a,
      condimentum nec, nisi. Sed in libero ut nibh placerat accumsan.
      Suspendisse potenti. Vestibulum rutrum, mi nec elementum vehicula, eros
      quam gravida nisl, id fringilla neque ante vel mi. Sed fringilla mauris
      sit amet nibh. In dui magna, posuere eget, vestibulum et, tempor auctor,
      justo. Aenean viverra rhoncus pede. Nulla sit amet est. Sed in libero ut
      nibh placerat accumsan. Aenean vulputate eleifend tellus. Sed consequat,
      leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi
      a libero. Donec sodales sagittis magna. Donec quam felis, ultricies nec,
      pellentesque eu, pretium quis, sem. Donec orci lectus, aliquam ut,
      faucibus non, euismod id, nulla. Curabitur nisi. Morbi vestibulum volutpat
      enim. Etiam iaculis nunc ac metus. Vestibulum eu odio. Etiam iaculis nunc
      ac metus.
    </p>
  </section>
</>
    </>
  );
}
