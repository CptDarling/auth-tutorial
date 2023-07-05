import React from "react";
import './Login.css';

export default function Login() {
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form action="submit">
        <label htmlFor="username">
          <p>Username</p>
          <input type="text" id="username" />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <input type="password" name="password" id="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}