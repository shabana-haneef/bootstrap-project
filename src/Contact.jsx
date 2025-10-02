import React from 'react'


export default function Contact() {
  return (
    <div className='login-container' >
      <div className="login-session">

      <h1 className='contact-title'>Get In Touch</h1>
      <input className='input-fields' type="text" placeholder='Enter Your Name' /> 
      <input className='input-fields' type="text" placeholder='Enter Your Email' /> 
      <input className='input-fields' type="text" placeholder='Enter Your Password' /> 
      <input className='input-fields' type="text" placeholder='Enter Your Phone Number' /> 
      <button className='contact-button'>Submit</button>
      </div>
      
    </div>
  )
}
