import React from 'react'
import './contact.css'


const Contact = () => {
  return (
   <section className=' contact container section' id='contact'>
    <h2 className='section-title'>Get In Touch</h2>

    <div className='contact-container grid'>
      <div className='contact-info'>
        <h3 className='contact-title'>Let's talk about everything</h3>
        <p className='contact-details'>Don't like forms? Send me an email</p>
      </div>

      <form action="https://getform.io/f/1b649fe7-dffc-416f-b411-c5766e51fc68" method='POST' className='contact-form'>
        <div className='contact-from-group'>
          <div className='contact-form-div'>
            <input type="text" name='name' className='contact-form-input' placeholder='Insert your name'/>
          </div>
          <div className='contact-form-div'>
            <input type="email" name='email' className='contact-form-input' placeholder='Insert your email'/>
          </div>
          </div>
          <div className='contact-form-div'>
            <input type="text" name='subject' className='contact-form-input' placeholder='Insert your subject'/>
          </div>
          <div className='contact-form-div contact-form-area'>
            <textarea name='message' cols="30" row="10" className='contact-form-input' placeholder='Write Your message'></textarea>
          </div>

          <button className='btn'>Send Message</button>
        
      </form>
    </div>
   </section>
  )
}

export default Contact
