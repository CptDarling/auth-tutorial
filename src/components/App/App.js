import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login';

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return (
      <div className='wrapper'>
        <h1>Application</h1>
        <Login setToken={setToken} />
      </div>
    )
  }

  return (
    <div className='wrapper'>
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div></div>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/preferences' element={<Preferences />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
