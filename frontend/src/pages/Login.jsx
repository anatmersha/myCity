import React, { useState, useContext } from "react";
import axios from "axios";
import { AiOutlineCheck } from "react-icons/ai";
import dataContext from "../Context/dataContext";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [validtionMessege, setValidtionMessege] = useState();
  const { state, dispatch } = useContext(dataContext);

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
        dispatch({ type: "auth", value: response.data });
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

  if (state.auth) {
  return <Navigate to="/" />;
  }
  return (
    <div>
      <p>התחברות</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          IsValid();
        }}
      >
        <label>אימייל</label>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <br />
        <label>סיסמה</label>
        <input
          type="password"
          placeholder="email"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
      <p style={{ color: "red" }}>{validtionMessege}</p>
    </div>
  );
}
