import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import emailjs from '@emailjs/browser';


const ContactPage = () => {

  const [formValid,setFormValid] = useState(true);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_s0x2yhd', 'template_5v7c1vg', e.target, 'vPK75gA9Ebzz3jI4d'
    ).then(res => {
      console.log(res);
    }).catch(err => console.log(err))
  }
  return (
    <div className="contactPage">
      <Navbar />
      <div className='color-set'>
        <div className="form">
          <div className='form2'>
            <form onSubmit={sendEmail}>
              <div className='input_box'>
                <input type='text' id="name" name='name' className='input_name' required></input>
                <label for="name">NAME :</label>
              </div>
              <br /><br />
              <div className='input_box'>
                <input type='text' id="email" name='email' className='input_name' required></input>
                <label for="email">E-mail:</label>
              </div>
              <br /><br />
              <div className='input_box'>
                <textarea rows="10" cols="40" id="comment" name='comment' className='input_name' required></textarea>
                <label for="comment">Comment:</label>
              </div>
              <button type='submit' className='submit-btn'>submit</button>
            </form>

          </div>

        </div>
        <div className='login-box'>
          <h2>Login Form</h2>
          <form onSubmit={sendEmail}>
            <div class="user-box">
              <input type="text" id="name" name='name' required />
                <label for="name">Name :</label>
            </div>
            <div class="user-box">
              <input type="text" id="email" name='email' required />
                <label for="email">E-mail</label>
            </div>
            <div class="user-box">
              <input type="text" id="comment" name='comment' required />
                <label for="comment">Comment</label>
            </div>
            <button type='submit' className='buttonsubmitbefore'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>Submit
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default ContactPage;