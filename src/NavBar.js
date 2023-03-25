import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './css/navbar.css'

function NavBar() {
  return (
    <section className='nav-container'>
        <nav>
         <div className='logo-container'>
          <img src="https://d33wubrfki0l68.cloudfront.net/deafe47e0ea96b853fe7b4131a5674263f601ec2/1d342/assets/img/crown.png" alt='logo' className='logo' />
           <p>crown</p>
         </div>
         <div className='nav-items'>
         <Link to='/'><li>Home</li></Link>
         <Link to='/menu'><li>Menu</li></Link>
         <Link to='/about'><li>About</li></Link>
         <Link to='/contact'><li>Contact</li></Link>
         </div>   
        </nav>
        <Outlet />
    </section>
  )
}

export default NavBar