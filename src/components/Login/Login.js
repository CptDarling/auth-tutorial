import React, { useState } from "react";
import PropTypes from 'prop-types';

import './Login.css';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
  .then(data => data.json())
}

export default function Login({ setToken }) {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form action="submit" onSubmit={handleSubmit} >
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}