import React from 'react'
import './css/whyus.css'
import { Link } from 'react-router-dom'

function WhyUs() {
  return (
    <div className='greeting'>
    <div className='main-container'>
    <div className='greeting-msg'>
        <p className="golden-p">why us</p>
      <h2 className='h2-head'>serving you great time</h2>
      <p className='txt'>Our mission is to give our customers a place to celebrate life’s special moments by offering the best food, service, and ambiance. The smile on our customers face has always been our first priority and we work hard to achieve that.</p>
      <p className='txt' id='p2'>Established in 1982, We aim to keep going forever and bring happiness to your life</p>
     <Link to='about'><button className='btn'>Our Story</button></Link> 
    </div>
    <div className='greeting-img'>
    <img src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&i" alt='greeting-img'></img>
    </div>
    </div>
    </div>
  )
}

export default WhyUs