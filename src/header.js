import React from 'react'
import { Link } from 'react-router-dom';
import './css/header.css'
function Header() {
  return (
    <div className='first-container'>
    <div className='header-container'>
     <h1 className='header-h1'>delicious food</h1>
     <p className='header-p'>Crown is a restaurant, bar and coffee<br/>
roastery located on Jodhpur</p>
    <Link to='menu'><button className='btn'>Order Online</button></Link>
    </div>
    </div>
  )
}

export default Header;