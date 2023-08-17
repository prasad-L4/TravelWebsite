import React from 'react'
import VideoFile from "../../Video/contact.mp4";
import"./ContactVideo.css"
function ContactVideo() {
  return (
    <div>
        <div className="contact-video-section">
      <video autoPlay loop muted className="contact-video">
        <source src={VideoFile} type="video/mp4" />
      </video>

      <div className="contact-main-headline">
        <p className="contact-headline">contact</p>
      </div>
      </div>
      <p className='cnt-head'>Send a message to us !</p>
      <div className='form'>
        
        
        <div className='form-input'>
     <input type="text" className='input-contact' placeholder='Name' />
     <input type="emai;" className="input-contact" placeholder='E-mail' />
     <input type="text" className="input-contact"placeholder='Subject'/>
     <input type="text" className="input-contact" placeholder='message' />
     <button className='send-btn'>Send</button>
     </div>
     
     </div>
     
    </div>
  )
}

export default ContactVideo