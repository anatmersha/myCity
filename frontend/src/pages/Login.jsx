import React, { useState } from "react";
import axios from "axios";
import { AiOutlineCheck } from "react-icons/ai";

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
        // console.log(err?.response?.data?.error?.messege);
      });
  }

  const IsValid = () => {
    if (!userEmail || !userPassword) {
      return setValidtionMessege("One of the inputs is empty");
    }
    return LoginToApp();
  };
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
        <input type="submit" />
      </form>
      <p style={{ color: "red" }}>{validtionMessege}</p>
    </div>
  );
}
