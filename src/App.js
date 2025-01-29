import Login from './Pages/Login';
import Signup from './Pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import { useState } from 'react';
import { supabase } from './client';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';


function App(){
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Signup />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/home'} element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
