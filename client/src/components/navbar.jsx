import React from 'react';
import '../css/navbar.css';
// import {Link} from 'react-router-dom'
function Navbar() {
  return (
   <>
   <div>
   <nav>
   <img src="./../src/assets/logo.png" alt="logo" className='logo' />
   <div className='navel'>
   <ul className='navbar'>
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
      </div>
   </nav>
   </div>
   </>
  
  );
}

export default Navbar;

