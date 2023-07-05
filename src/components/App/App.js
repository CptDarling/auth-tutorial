import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();

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
