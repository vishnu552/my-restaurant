import React from 'react';
import './css/contact.css'

function Contact() {
  return (
    <div>
      <div className='contact-header'>
        <p>need help</p>
        <h1>contact us</h1>
      </div>
      <div className="contact-address">
        <div className='form-container'>
        <form className='form'>
          <label>Name</label>
          <input type='text' placeholder='Name'/>
          <label>Email</label>
          <input type='text' placeholder='Email'/>
          <label>Message</label>
          <textarea></textarea>
          <button>Submit</button>
        </form>
        </div>
        <div className='address-details'>
          <div className='connect'>
            <h2 className='add-head'>Connect</h2>
            <div className='email-add'>
              <img src='https://img.icons8.com/ios/64/000000/secured-letter.png' alt='mail-img' className='template' />
              <p>submit@gmail.com</p>
            </div>
            <div className='mobile-no'>
              <img src='https://img.icons8.com/ios/96/000000/phone.png' alt='mail-img' className='template'/>
              <p>+91-1234567890</p>
            </div>
            </div>
            <div className='follow-us'>
              <h2 className='add-head'>Follow us</h2>
              <img src='https://img.icons8.com/ios/96/000000/facebook-new.png' className='template'/>
        <img src='https://img.icons8.com/ios/96/000000/instagram-new.png' className='template'/>
        <img src='https://img.icons8.com/ios/96/000000/snapchat.png' className='template'/>
        <img src='https://img.icons8.com/ios/96/000000/twitter.png' className='template'/>
            </div>
           <div className='our-address'>
            <h2 className='add-head'>our address</h2>
            <div className='location-container'>
              <img src='https://img.icons8.com/ios/100/000000/marker.png' className='template'/>
              <p>Doli,near boranada<br/>jodhpur,342001</p>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Contact