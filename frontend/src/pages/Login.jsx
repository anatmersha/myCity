import React, { useState } from "react";
import axios from "axios";
import { AiOutlineCheck } from "react-icons/ai";
import loginStyle from "../css/Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [validtionMessege, setValidtionMessege] = useState();

  function LoginToApp() {
    const API_KEY = "AIzaSyCiHfWGwawt0DYm-ZJf2FutKLYKZ63JgJE";
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    axios
      .post(url, {
        email: userEmail,
        password: userPassword,
      })
      .then(function (response) {
        console.log(response);
        setValidtionMessege(<AiOutlineCheck style={{ color: "green" }} />);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  const IsValid = () => {
    if (!userEmail || !userPassword) {
      return setValidtionMessege("One of the inputs is empty");
    }
    return LoginToApp();
  };
  return (
    <div className={loginStyle.login}>

      <div className={loginStyle.loginBox}>
      <h1 style={{marginRight: "20.5vw", color: "cornflowerblue", fontSize: "50px"}}>התחברות</h1>
      <form
        className={loginStyle.loginForm}
        onSubmit={(e) => {
          e.preventDefault();
          IsValid();
        }}
      >
        <input
          className={loginStyle.loginInput}
          type="email"
          placeholder="אימייל"
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <br />
        <input
          className={loginStyle.loginInput}
          type="password"
          placeholder="ססמא"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        <br />
        <input type="submit" className={loginStyle.loginBtn} />
      </form>
      <p style={{float: "right", marginRight: "19.5vw", fontSize: "14px"}}>Don`t have an account yet <Link to="/Register">Register</Link></p>
      <p style={{ color: "red" }}>{validtionMessege}</p>
      </div>

      <div className={loginStyle.logo}>
        <h1 className={loginStyle.logoHeader}>myCity</h1>
      </div>

    </div>
  );
}
