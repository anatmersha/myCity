import React, { useState } from "react";

export default function Login() {
  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState();
  return (
    <div>
      Login
      <form>
        <label htmlFor=""></label>
        <input type="email" placeholder="email" />
        <label></label>
        <input type="password" placeholder="email" />
      </form>
    </div>
  );
}
