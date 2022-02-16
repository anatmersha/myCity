import React, { useState,useContext } from "react";
import axios from "axios";
import { AiOutlineCheck } from "react-icons/ai";
import dataContext from "../Context/dataContext";
import { Navigate } from "react-router-dom";

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
    <div>
      <p>הרשמה</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          IsValid();
        }}
      >
        <label>עיר</label>
        <input
          type="test"
          placeholder="עיר"
          onChange={(e) => {
            setUserCity(e.target.value);
          }}
        />{" "}
        <br />
        <label>אימייל</label>
        <input
          type="email"
          placeholder="אימייל"
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />{" "}
        <br />
        <label>ת"ז</label>
        <input
          type="number"
          placeholder="תז"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <br />
        <label>סיסמה</label>
        <input
          type="password"
          placeholder="סיסמה"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        <br />
        <label>אישור סיסמה </label>
        <input
          type="password"
          placeholder="אישור סיסמה"
          onChange={(e) => {
            setUserConfirmPassword(e.target.value);
          }}
        />
        <br />
        <input type="submit" value="Register" />
      </form>
      <p style={{ color: "red" }}>{validtionMessege}</p>
    </div>
  );
}
