import React from 'react'
import SocialMedia from './SocialMedia'
import DotNav from './DotNav'
import './Contact.css'
import call from './bahan/nav/call.svg'
import Highlight2 from "./bahan/About/highlight2.js";
import mail from './bahan/Contact/mail.svg'
import dataSosmedContact from './dataSosmedContact'

const Contact = ({location, setLocation}) => {
  return (
    <div className='contact' id='contact' onMouseOver={()=>setLocation('contact')}>
      <SocialMedia />

      
      <div className='contact-container'>

        {/* Title */}
        <div className='contact-title'>
          <h1><img src={call} alt="call" className='contact-call'/> Contact</h1>
          <Highlight2 />
        </div>

        <form className='contact-form'>
          <div className='flex-input name-contact'>
            <h1 className='h1-contact'>Name: </h1>
            <input type="text" className='input-contact input-name-contact' placeholder='Name...'/>            
          </div>

          <div className='flex-input email-contact'>
            <h1 className='h1-contact'>Email: </h1>
            <input type="text" className='input-contact input-email-contact' placeholder='Email...'/>
          </div>

          <div className='flex-input subject-contact'>
            <h1 className='h1-contact'>Subject: </h1>
            <input type="text" className='input-contact' placeholder='Subject...'/>
          </div>

          <div className='flex-input subject-contact'>
            <h1 className='h1-contact message'>Your Message: </h1>
            <textarea className="textarea" placeholder="Your Message..."></textarea>
          </div>

          <button className='send-message'><img src={mail} alt="message" className='message-icon' /> Send Message</button>
        </form>

        <div className="sosmed-contact">
          {dataSosmedContact.map((data)=>{
            return(
              <a href='' key={data.name} className='item-sosmed'>
                <img src={data.img} alt="img" className='sosmed-image-contact' />
                <p className='sosmed-h1-contact'>{data.name}</p>
              </a>
            )
          })}
        </div>
        
      </div>


      
      <DotNav location={location} />
  </div>
  )
}

export default Contact