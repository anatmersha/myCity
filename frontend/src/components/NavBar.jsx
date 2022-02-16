import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>    <hr />
      <Link to="/Login">Login</Link>    <hr />
      <Link to="/Register">Register</Link>    <hr />
      <Link to="/chat">chat</Link>    <hr />
      <Link to="/events">events</Link>    <hr />
      <Link to="/Logout">Logout</Link>    <hr />
    </div>
  );
}

// Events
// Logout
