import React from 'react'
import './css/navbar.css'
function Footer() {
  return (
    <div>
   <div className='loction-sec'>
    <div className='address-container'>
    <div className='top-element'>
      <p className='golden-p'>find us</p>
    <h2 className='h2-head add-h2'>our address</h2>
      </div>
      <div className='address'>
       <img  src='https://d33wubrfki0l68.cloudfront.net/551d2038b8994f20c9e4d8f3650e75bc49071216/e324f/assets/img/marker-white.png' />
       <p className='loction'>Doli,near boranada<br/>jodhpur,342001</p>
      </div>
    </div>
   </div>
   <section className='subscribe'>
    <div className='subscribe-form'>
        <img src="https://d33wubrfki0l68.cloudfront.net/deafe47e0ea96b853fe7b4131a5674263f601ec2/1d342/assets/img/crown.png" alt="logo" className='logo' />
        <p className='subscribe-text'>STAY UPDATED WITH DEALS</p>
        <input type='email' placeholder='Email...' /><br/>
        <button>Submit</button>
    </div>
   </section>
   <div className='footer'>
        <img src='https://d33wubrfki0l68.cloudfront.net/9b4d726aae8430874d28469e62103f6c8ea40aa2/d47ea/assets/img/facebook-w.png' />
        <img src='https://d33wubrfki0l68.cloudfront.net/e9f85745925edf38053df743334c04bff3411549/ccf21/assets/img/instagram-w.png' />
        <img src='https://d33wubrfki0l68.cloudfront.net/f7ba763f849dd3e587ea5900c2a2612e026f6108/736b7/assets/img/snapchat-w.png' />
        <img src='https://d33wubrfki0l68.cloudfront.net/6acb993d856c51dbc612a40e34dc971f2a47d1e7/122a7/assets/img/youtube-play-w.png' />
        <img src='https://d33wubrfki0l68.cloudfront.net/d0b433b28afbae439b076d671764c1dec23fa4ff/b55e0/assets/img/twitter-w.png' />
        <p className='footer-text'>© 2023 RANDOM RESTAURANT</p>
        <p className='footer-text'>DEVELOPED BY VISHNU SUTHAR</p>
        </div>
    </div>
  )
}

export default Footer;