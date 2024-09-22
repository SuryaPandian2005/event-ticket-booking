import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contactmain">
      <div className="contact-header"><center>
      <h1>.</h1>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you. Please fill out the form below to get in touch.</p>
      </center>

      </div>
      <div className='form'>
        
        <center>
            <form >
                <label for="name">Name:</label><br/>
                <input type="text" id="name" name="name" required/><br/>
                <label for="email">Email:</label><br/>
                <input className='email' type="text" id="email" name="email" required/><br/>
                <label for="phone">Phone:</label><br/>
                <input type="tel" id="phone" name="phone" required/><br/>
                <label for="message">Message:</label><br/>
                <textarea id="message" name="message" required></textarea><br/>
                <button className='ibt'>Submit</button>

            </form>

        </center>

      </div>

    </div>
  );
}

export default Contact;
