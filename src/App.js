import Login from './Component/Login';
import Signup from './Component/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import { useState } from 'react';
import { supabase } from './client';
import { Route, Routes } from 'react-router-dom';


function App(){
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Signup />} />
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
