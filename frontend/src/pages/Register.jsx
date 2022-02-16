import React, { useState,useContext } from "react";
import axios from "axios";
import { AiOutlineCheck } from "react-icons/ai";
import dataContext from "../Context/dataContext";
import { Navigate } from "react-router-dom";
import registerStyle from "../css/Register.module.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userConfirmPassword, setUserConfirmPassword] = useState();
  const [userId, setUserId] = useState();
  const [userCity, setUserCity] = useState();
  const [validtionMessege, setValidtionMessege] = useState();
  const { state, dispatch } = useContext(dataContext);
  

  function RegisterToapp() {
    const API_KEY = "AIzaSyCiHfWGwawt0DYm-ZJf2FutKLYKZ63JgJE";
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

    axios
      .post(url, {
        email: userEmail,
        password: userPassword,
      })
      .then(function (response) {
        console.log(response.data);
        dispatch({ type: "auth", value: response.data });
        setValidtionMessege(<AiOutlineCheck style={{ color: "green" }} />);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }

  const IsValid = () => {
    if (
      !userId ||
      !userPassword ||
      !userConfirmPassword ||
      !userId ||
      !userCity ||
      userPassword.length !== userConfirmPassword.length ||
      userId.length < 9
    ) {
      return setValidtionMessege("One of the inputs is empty");
    }
    return RegisterToapp();
  };

  if (state.auth) {
    return <Navigate to="/" />;
  }
  return (
    <div className={registerStyle.register}>

      <div className={registerStyle.registerBox}>
      <h1 style={{marginRight: "20.5vw", color: "cornflowerblue", fontSize: "50px"}}>הרשמה</h1>
      <form
      className={registerStyle.registerForm}
        onSubmit={(e) => {
          e.preventDefault();
          IsValid();
        }}
      >
        <input
         className={registerStyle.registerInput}
          type="test"
          placeholder="עיר"
          onChange={(e) => {
            setUserCity(e.target.value);
          }}
        />{" "}
        <br />
        <input
          className={registerStyle.registerInput}
          type="email"
          placeholder="אימייל"
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />{" "}
        <br />
        <input
          className={registerStyle.registerInput}
          type="number"
          placeholder="תז"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <br />
        <input
          className={registerStyle.registerInput}
          type="password"
          placeholder="סיסמה"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        <br />
        <input
          className={registerStyle.registerInput}
          type="password"
          placeholder="אישור סיסמה"
          onChange={(e) => {
            setUserConfirmPassword(e.target.value);
          }}
        />
        <br />
        <input type="submit" value="Register" />
      </form>
      <p style={{float: "right", marginRight: "19.5vw", fontSize: "14px"}}>Already have an account <Link to="/Login">Login</Link></p>
      <p style={{ color: "red" }}>{validtionMessege}</p>
      </div>

      <div className={registerStyle.logo}>
        <h1 className={registerStyle.logoHeader}>myCity</h1>
      </div>
    </div>
  );
}
