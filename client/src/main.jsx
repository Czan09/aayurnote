import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage'
import LoginPage from './pages/loginpage';
import Navbar from './components/navbar'
import Register from './pages/registerpage';
import Profile from './pages/profilepage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter >
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/profile' element={<Profile />}/>
    </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
