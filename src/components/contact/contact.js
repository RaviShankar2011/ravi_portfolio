import React, { useRef } from 'react'
import linkdin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import gmail from '../../assets/gmail.png'
import './contact.css';
import emailjs from '@emailjs/browser';
import resume from '../../assets/RAVI_SHANKAR_RESUME.pdf'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_prl5rks', 'template_53mr1bb', form.current, {
      publicKey: '34FdOlT5HTzEAH0tZ',
    }).then(() => {

      console.log('SUCCESS!');
      e.target.reset();
      alert('email sent');
    }, (error) => {
      console.log('FAILED...', error.text);
    },
    );
  };
  return (
    <section id="contactpage">
      <div className="resume" id='resume'>
        <h1 className="resumetitle">My Resume</h1>
          <iframe
            className='resumepdf'   
            src={resume}
          ></iframe>
        
      </div>

      <div className="contact" id='contactus'>
        <h1 className="contacttitle">Contact Me</h1>
        <span className="contactdesc">please fill the form to contact me</span>
        <form className="contactform" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='yourname' name='from_name' />
          <input type="text" className="email" placeholder='your email' name='from_email' />
          <textarea name="message" className="message" rows="5" placeholder='Type your message'></textarea>
          <button type='submit' value='Send' className="submitbtn" >Submit</button>
          <div className="links">
            <img src={linkdin} alt="linkdin" className="link" />
            <img src={github} alt="github" className="link" />
            <img src={gmail} alt="other" className="link" />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
